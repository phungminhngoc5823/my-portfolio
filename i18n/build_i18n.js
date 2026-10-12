// Usage: node build_i18n.js <standalone-source.html> <out.html>
// Applies fixes.json (VI text fixes) + translations.json (EN/ZH) to the Vite standalone bundle and
// writes ONE html containing all 3 languages (switch with the VI/EN/中文 button or ?lang=en|zh).
const fs=require('fs'),path=require('path'),acorn=require('acorn'),walk=require('acorn-walk');
const [,,SRC,OUT]=process.argv;const rd=f=>JSON.parse(fs.readFileSync(path.join(__dirname,f),'utf8'));
const T=rd('translations.json'),FX=rd('fixes.json');let html=fs.readFileSync(SRC,'utf8');
for(const [a,b] of FX.raw)html=html.split(a).join(b);
// hero proof image: use a crop of the TikTok thumbnail without the baked-in "225.1K" badge (hero only)
{const img='data:image/jpeg;base64,'+fs.readFileSync(path.join(__dirname,'hero-tiktok-proof.jpg')).toString('base64');
 const k=html.indexOf('"images/tiktok-the-litty.jpg"');if(k>0)html=html.slice(0,k)+'"images/hero-tiktok-proof.jpg": "'+img+'", '+html.slice(k);
 const hi=html.indexOf('Open to full-time roles'),tg='__IMG["images/tiktok-the-litty.jpg"]',j=html.indexOf(tg,hi);
 if(hi>0&&j>0)html=html.slice(0,j)+'__IMG["images/hero-tiktok-proof.jpg"]'+html.slice(j+tg.length);}
const a=html.indexOf('<script type="module">'),st=html.indexOf('>',a)+1,en=html.indexOf('</script>',st);
const code=html.slice(st,en);
const lits=[];walk.full(acorn.parse(code,{ecmaVersion:'latest',sourceType:'module'}),n=>{
  if(n.type==='Literal'&&typeof n.value==='string')lits.push(n);
  else if(n.type==='TemplateLiteral'&&n.expressions.length===0)lits.push({start:n.start,end:n.end,value:n.quasis[0].value.cooked});});
lits.sort((x,y)=>x.start-y.start);
const VI=/[à-ỹĐđ]/i,N=s=>s.normalize('NFC');
const ex=new Map(FX.exact.map(([k,v])=>[k,v]));
const ent=Object.entries(T.strings).map(([k,v])=>{k=N(k.trim());const p=k.endsWith('…');return{key:p?k.slice(0,-1):k,p,en:v[0].trim(),zh:v[1].trim()}});
const fix=v=>{if(ex.has(v))return ex.get(v);let o=v;for(const [x,y] of FX.sub)if(o.includes(x))o=o.split(x).join(y);return o};
const find=v=>{const t=N(v).trim();return ent.find(e=>e.p?t.startsWith(e.key):t===e.key)};
const codes={},remaining=new Set(),stat={};
for(const L of ['vi','en','zh']){let out='',pos=0,hit=0;
  for(const n of lits){const v=fix(n.value);let r=null;
    if(L!=='vi'){const e=find(v);if(e){const lead=v.match(/^\s*/)[0],trail=v.match(/\s*$/)[0];r=lead+e[L]+trail;hit++}else if(L==='en'&&VI.test(v)&&/\s/.test(v)&&v.length>3&&!/(bg-|text-\[|border-|flex )/.test(v))remaining.add(v)}
    if(r===null&&v!==n.value)r=v;
    if(r!==null){out+=code.slice(pos,n.start)+JSON.stringify(r);pos=n.end}}
  out+=code.slice(pos);
  if(L!=='vi')out=out.split('srcDoc:window.__LAB_HTML').join('srcDoc:window.__LAB_HTML_'+L);acorn.parse(out,{ecmaVersion:'latest',sourceType:'module'});codes[L]=out;stat[L]=hit}
const M=T.meta;
const boot=`<script>(function(){var M=${JSON.stringify(M)};var q=(location.search.match(/[?&]lang=(vi|en|zh)/)||[])[1],L=q;try{if(q)localStorage.setItem('pf-lang',q);else L=localStorage.getItem('pf-lang')}catch(e){}if(!M[L])L='vi';var m=M[L],d=document;d.documentElement.lang=m.lang;d.title=m.title;d.querySelectorAll('meta[name=description],meta[property="og:description"],meta[name="twitter:description"]').forEach(function(x){x.content=m.description});d.querySelectorAll('meta[property="og:title"],meta[name="twitter:title"]').forEach(function(x){x.content=m.title});
function run(){var s=d.createElement('script');s.type='module';s.textContent=d.getElementById('app-'+L).textContent;d.body.appendChild(s);var n=d.getElementById('lang-switch');n&&n.querySelectorAll('a').forEach(function(a){if(a.dataset.l===L)a.setAttribute('aria-current','true')})}
var mq=matchMedia('(max-width: 767px)');function place(){var n=d.getElementById('lang-switch'),s=d.getElementById('lang-slot');if(!n)return;if(mq.matches&&s){if(n.parentNode!==s){s.appendChild(n);n.classList.add('in-slot')}}else if(n.parentNode!==d.body){d.body.appendChild(n);n.classList.remove('in-slot')}}var mo=new MutationObserver(place);function watch(){place();mo.observe(d.body,{childList:true,subtree:true})}mq.addEventListener?mq.addEventListener('change',place):mq.addListener(place);d.readyState==='loading'?d.addEventListener('DOMContentLoaded',function(){run();watch()}):(run(),watch())})()</script>`;
const SW=`<nav id="lang-switch" aria-label="Language"><a data-l="vi" href="?lang=vi">VI</a><a data-l="en" href="?lang=en">EN</a><a data-l="zh" href="?lang=zh">中文</a></nav><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@500;700&display=swap" rel="stylesheet"><style>#lang-switch{position:fixed;right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));z-index:120;display:flex;gap:2px;padding:3px;border-radius:999px;background:#fffffff2;border:1px solid #DCE4EE;box-shadow:0 8px 24px -10px #0f172a59;font:600 13px/1 system-ui,sans-serif}#lang-switch a{padding:12px 14px;border-radius:999px;color:#475569;text-decoration:none}#lang-switch a[aria-current]{background:#163B65;color:#fff}#lang-switch.in-slot{position:static;box-shadow:none;background:transparent;padding:2px;font-size:11px}#lang-switch.in-slot a{padding:11px 7px}html[lang^="zh"] body{font-family:"Be Vietnam Pro","PingFang SC","Microsoft YaHei","Noto Sans SC",sans-serif}html[lang^="zh"] .font-serif-title{font-family:"Noto Serif SC","Songti SC","SimSun",serif}html[lang^="zh"] h1 span.italic{font-style:normal}</style>`;
const blocks=['vi','en','zh'].map(L=>`<script type="text/plain" id="app-${L}">${codes[L]}</script>`).join('\n');
const e2=en+'</script>'.length;
html=html.slice(0,a)+blocks+'\n'+html.slice(e2);
html=html.replace('<html lang="vi"',`<html lang="${M.vi.lang}"`).replace(/<title>[^<]*<\/title>/,`<title>${M.vi.title}</title>`)
 .replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*"/g,`$1${M.vi.description}"`)
 .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*"/g,`$1${M.vi.title}"`);

html=html.replace('</body>',SW+boot+'</body>');
fs.writeFileSync(OUT,html);
fs.writeFileSync(path.join(__dirname,'remaining-strings.json'),JSON.stringify([...remaining],null,1));
console.log('translated literals',stat,'| untranslated VI strings:',remaining.size,'| size MB',(html.length/1e6).toFixed(1));
