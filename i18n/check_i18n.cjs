#!/usr/bin/env node
/**
 * i18n:check — fails when a Vietnamese string literal in the built bundle has no EN/ZH translation.
 * Usage: npm run build && npm run i18n:check            (scans dist/assets/*.js)
 *        node i18n/check_i18n.cjs path/to/bundle.js      (explicit file)
 * Matching mirrors build_i18n.js: whole-literal match (NFC, trimmed); a key ending in "…" matches by prefix.
 */
const fs = require('fs');
const path = require('path');
let ts;
try { ts = require('typescript'); } catch { console.error('typescript is required (it is a devDependency of this project).'); process.exit(2); }

const files = process.argv.slice(2);
if (!files.length) {
  const dir = path.join(__dirname, '..', 'dist', 'assets');
  if (fs.existsSync(dir)) fs.readdirSync(dir).filter((f) => f.endsWith('.js')).forEach((f) => files.push(path.join(dir, f)));
}
if (!files.length) { console.error('No bundle found. Run `npm run build` first or pass a file path.'); process.exit(2); }

const N = (s) => s.normalize('NFC');
const VI = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;
const T = JSON.parse(fs.readFileSync(path.join(__dirname, 'translations.json'), 'utf8')).strings;
const entries = Object.keys(T).map((k) => { const key = N(k.trim()); const prefix = key.endsWith('…'); return { key: prefix ? key.slice(0, -1) : key, prefix }; });
const translated = (v) => { const t = N(v).trim(); return entries.some((e) => (e.prefix ? t.startsWith(e.key) : t === e.key)); };

const missing = new Set();
for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  const sf = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);
  (function visit(n) {
    if (n.kind === ts.SyntaxKind.StringLiteral || n.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral) {
      const v = n.text;
      // Only sentences / labels (has a space + Vietnamese letters); skips identifiers, class names and URLs.
      if (VI.test(v) && /\s/.test(v) && v.trim().length > 3 && !/(bg-|text-\[|border-|flex |https?:)/.test(v) && !translated(v)) missing.add(v.trim());
    }
    ts.forEachChild(n, visit);
  })(sf);
}
if (missing.size) {
  console.error(`✗ ${missing.size} Vietnamese string(s) have no translation in i18n/translations.json:\n`);
  [...missing].forEach((s) => console.error('  - ' + (s.length > 140 ? s.slice(0, 140) + '…' : s)));
  process.exit(1);
}
console.log('✓ All Vietnamese strings in the bundle have EN/ZH translations.');
