"""Prepare the built Vite app for the existing VI/EN/ZH translator.

Keep external CSS and images as ordinary GitHub Pages assets, so the HTML
remains small. Embed the JS and Lab HTML for the existing literal translator.
"""
from pathlib import Path
import json
import re
import sys


def main():
    root = Path(__file__).resolve().parent.parent
    dist = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else root / 'dist'
    page = (dist / 'index.html').read_text(encoding='utf8')
    base = '/my-portfolio/'
    pattern = r'<script\s+type="module"[^>]*\bsrc="' + re.escape(base) + r'assets/([^"/]+\.js)"[^>]*></script>'
    match = re.search(pattern, page)
    if not match:
        raise RuntimeError('Vite entrypoint not found in dist/index.html')
    js = (dist / 'assets' / match.group(1)).read_text(encoding='utf8')

    # The original translator expects Lab HTML as srcDoc, not a separate URL.
    tick = chr(96)
    needle = 'src:' + tick + base + 'marketing-lab/index.html?station='
    begin = js.find(needle)
    if begin < 0 or js.find(needle, begin + 1) >= 0:
        raise RuntimeError('Expected exactly one Marketing Lab iframe')
    end = js.find(tick, begin + len(needle))
    if end < 0:
        raise RuntimeError('Unterminated Marketing Lab URL')
    js = js[:begin] + 'srcDoc:window.__LAB_HTML' + js[end + 1:]

    lab = (dist / 'marketing-lab/index.html').read_text(encoding='utf8')
    if '<head>' not in lab:
        raise RuntimeError('Lab HTML missing head')
    # srcdoc images must still resolve under /my-portfolio/images/.
    lab = lab.replace('<head>', '<head><base href="/my-portfolio/marketing-lab/">', 1)
    dictionary = json.loads((root / 'i18n/lab-translations.json').read_text(encoding='utf8'))
    lab_code = r"""window.__LAB_DICT=__DICT__;
(function(){
  function tr(index, lang){
    var re=/[^<>{}\x60'"$\[\]\\]+/g;
    return window.__LAB_HTML.replace(re, function(raw){
      var key=raw.replace(/\s+/g,' ').trim(), entry=window.__LAB_DICT[key];
      if(!entry) return raw;
      var lead=raw.match(/^\s*/)[0], tail=raw.match(/\s*$/)[0];
      return lead+entry[index].trim().replace(/'/g,'\u2019')+tail;
    }).replace('<html lang="vi"','<html lang="'+lang+'"');
  }
  var cache={};
  [['en',0,'en'],['zh',1,'zh-CN']].forEach(function(x){
    Object.defineProperty(window,'__LAB_HTML_'+x[0],{
      get:function(){return cache[x[0]]||(cache[x[0]]=tr(x[1],x[2]))}
    });
  });
})();"""
    def safe_script(text):
        return text.replace('</', '<\\/')

    lab_boot = ('<script>window.__LAB_HTML='
                + safe_script(json.dumps(lab, ensure_ascii=False)) + ';'
                + safe_script(lab_code.replace('__DICT__', json.dumps(dictionary, ensure_ascii=False)))
                + '</script>')
    page = page[:match.start()] + page[match.end():]
    module = '<script type="module">\n' + safe_script(js) + '\n</script>'
    page = page.replace('</body>', lab_boot + '\n' + module + '\n</body>', 1)
    out = dist / 'site-untranslated.html'
    out.write_text(page, encoding='utf8')
    print('Prepared Vite code for VI/EN/ZH:', out, out.stat().st_size, 'bytes')


if __name__ == '__main__':
    main()
