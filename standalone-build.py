import re, os, json, base64, mimetypes, sys
import os
ROOT=os.path.dirname(os.path.abspath(__file__))
DIST=ROOT+'/dist'
html=open(DIST+'/index.html',encoding='utf8').read()
def uri(path):
    mt={'.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml'}[os.path.splitext(path)[1].lower()]
    return f'data:{mt};base64,'+base64.b64encode(open(path,'rb').read()).decode()
js_name=re.search(r'src="\./assets/([^"]+\.js)"',html).group(1)
css_name=re.search(r'href="\./assets/([^"]+\.css)"',html).group(1)
js=open(f'{DIST}/assets/{js_name}',encoding='utf8').read()
css=open(f'{DIST}/assets/{css_name}',encoding='utf8').read()

# 1) images -> one lookup table, referenced from the bundle
used=sorted(set(re.findall(r'"\./(images/[A-Za-z0-9_\-/]+\.(?:jpg|png|webp))"',js)))
table={p:uri(f'{DIST}/{p}') for p in used}
js=re.sub(r'"\./(images/[A-Za-z0-9_\-/]+\.(?:jpg|png|webp))"',lambda m:f'__IMG["{m.group(1)}"]',js)
# 2) Marketing Lab iframe -> srcdoc with its own images inlined
lab=open(DIST+'/marketing-lab/index.html',encoding='utf8').read()
lab=re.sub(r'\.\./(images/marketing-lab/[A-Za-z0-9_\-]+\.(?:jpg|png))',lambda m:uri(f'{DIST}/{m.group(1)}'),lab)
old='src:`./marketing-lab/index.html?station=${encodeURIComponent(i)}`'
assert js.count(old)==1
js=js.replace(old,'srcDoc:window.__LAB_HTML')
def esc(s): return s.replace('</','<\\/')
# Lab dictionary (EN/ZH) is applied in the browser on demand, so the Lab document (and its inlined images) is embedded only once
LAB_DICT=json.load(open(ROOT+'/i18n/lab-translations.json',encoding='utf8')) if os.path.exists(ROOT+'/i18n/lab-translations.json') else {}
LAB_JS = r"""window.__LAB_DICT=__DICT__;(function(){function tr(i,hl){var re=/[^<>{}`'"$\[\]\\]+/g;return window.__LAB_HTML.replace(re,function(raw){var k=raw.replace(/\s+/g,' ').trim();var v=window.__LAB_DICT[k];if(!v)return raw;var lead=raw.match(/^\s*/)[0],trail=raw.match(/\s*$/)[0];return lead+v[i].trim().replace(/'/g,'\u2019')+trail}).replace('<html lang="vi"','<html lang="'+hl+'"')}var c={};[['en',0,'en'],['zh',1,'zh-CN']].forEach(function(x){Object.defineProperty(window,'__LAB_HTML_'+x[0],{get:function(){return c[x[0]]||(c[x[0]]=tr(x[1],x[2]))}})})})();"""

html=re.sub(r'\s*<script type="module"[^>]*></script>','',html)
html=re.sub(r'\s*<link rel="stylesheet"[^>]*>','',html)
head_inject=f'<style>\n{css}\n</style>'
body_inject=(f'<script>window.__IMG={esc(json.dumps(table))};window.__LAB_HTML={esc(json.dumps(lab))};var __IMG=window.__IMG;{esc(LAB_JS.replace('__DICT__',json.dumps(LAB_DICT)))}</script>\n'
             f'<script type="module">\n{esc(js)}\n</script>')
html=html.replace('</head>',head_inject+'\n</head>',1)
html=html.replace('</body>',body_inject+'\n</body>',1)
out=sys.argv[1]
open(out,'w',encoding='utf8').write(html)
print(out, round(os.path.getsize(out)/1e6,1),'MB', len(used),'images')
