// Corre depois de "vite build": escreve o HTML completo de cada página em dist/.
// Se algo falhar, mantém o site a funcionar como antes (só com o index.html original).
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

let mod;
try {
  mod = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);
} catch (err) {
  console.warn('[prerender] módulo do servidor não carregou; páginas não pré-geradas:', err);
  process.exit(0);
}

const site = 'https://ampliasolutions.pt';
let ok = 0;
for (const r of mod.routes) {
  try {
    const appHtml = mod.render(r.path);
    const url = r.path === '/' ? site : site + r.path;
    let html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(r.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
    const out = path.join(dist, r.file);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    ok++;
    console.log(`[prerender] ${r.path} -> ${r.file} (${appHtml.length} caracteres)`);
  } catch (err) {
    console.warn(`[prerender] falhou ${r.path}:`, err);
  }
}
console.log(`[prerender] ${ok}/${mod.routes.length} páginas geradas`);
