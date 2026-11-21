"""Gera imagens de publicação com a identidade visual da Amplia (1080 x 1350, PNG).

Uso:  python3 marketing/tools/card.py spec.json saida.png
spec.json:
  {"layout": "dica" | "frase" | "numero" | "produto",
   "tema": "escuro" | "claro",
   "etiqueta": "Dica da semana",          # texto pequeno em cima
   "titulo": ["Linha 1", "Linha 2"],      # Max Regular, máx. 3 linhas de ~18 caracteres
   "pontos": [["Título", "Descrição"], ...],   # layout dica/produto, máx. 3
   "numero": "6–8", "legenda": ["semanas do", "início à entrega"],  # layout numero
   "rodape": "ampliasolutions.pt"}
Regras: a Max Regular não tem €, – nem —; esses textos são escritos automaticamente em Inter.
"""
import base64, json, os, subprocess, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPO = os.path.dirname(ROOT)
FONTS = {'max': os.path.join(REPO, 'public/fonts/Max-Regular.woff'),
         'inter': '/usr/share/fonts/opentype/inter/Inter-Regular.otf',
         'inter-sb': '/usr/share/fonts/opentype/inter/Inter-SemiBold.otf'}
LIMA, VERDE, ESM, FLOR = '#BCDD73', '#7ECF56', '#38BF5A', '#1E7A3F'
CARV, NEV, BRANCO, CINZA, GREY, LINHA = '#1B1A1C', '#F3F8EE', '#FFFFFF', '#6B6B70', '#A9B0A3', '#D9DED3'
W, H = 1080, 1350
_F = {}

def font(n):
    if n not in _F:
        f = TTFont(FONTS[n]); _F[n] = (f.getGlyphSet(), f.getBestCmap(), f['hmtx'], f['head'].unitsPerEm)
    return _F[n]

def T(txt, x, y, size, fill, fam='max', anchor='start'):
    """Texto em curvas. Caracteres que faltam na Max são desenhados em Inter."""
    segs = []
    for ch in txt:
        f = fam
        if fam == 'max' and ord(ch) not in font('max')[1]: f = 'inter'
        if segs and segs[-1][0] == f: segs[-1][1] += ch
        else: segs.append([f, ch])
    def width(f, s):
        gs, cm, hm, u = font(f); return sum(hm[cm[ord(c)]][0] for c in s if ord(c) in cm) * size / u
    total = sum(width(f, s) for f, s in segs)
    if anchor == 'middle': x -= total / 2
    elif anchor == 'end': x -= total
    out = ''
    for f, s in segs:
        gs, cm, hm, u = font(f); sc = size / u; pen = SVGPathPen(gs); cx = 0
        for c in s:
            g = cm.get(ord(c))
            if g is None: continue
            gs[g].draw(TransformPen(pen, (sc, 0, 0, -sc, x + cx, y))); cx += hm[g][0] * sc
        out += f'<path d="{pen.getCommands()}" fill="{fill}"/>'; x += cx
    return out

def sym(x, y, h, v='color'):
    d = base64.b64encode(open(os.path.join(ROOT, f'brand/symbol_{v}.png'), 'rb').read()).decode()
    return f'<image x="{x}" y="{y}" width="{h*821/861:.1f}" height="{h}" href="data:image/png;base64,{d}"/>'

def arcs(cx, cy, r0, n, step, op, ratio=0.6):
    return ''.join(f'<path d="M {cx-r0-i*step} {cy} A {r0+i*step} {(r0+i*step)*ratio} 0 0 0 {cx+r0+i*step} {cy}" fill="none" '
                   f'stroke="{VERDE}" stroke-opacity="{op-i*op/n:.3f}" stroke-width="5"/>' for i in range(n))

GRAD = (f'<linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{LIMA}"/>'
        f'<stop offset="0.5" stop-color="{VERDE}"/><stop offset="1" stop-color="{ESM}"/></linearGradient>')

def render(spec):
    dark = spec.get('tema', 'escuro') == 'escuro'
    bg, fg, sub, acc = (CARV, BRANCO, GREY, VERDE) if dark else (NEV, CARV, CINZA, FLOR)
    b = [f'<defs>{GRAD}</defs><rect width="{W}" height="{H}" fill="{bg}"/>']
    if dark: b.append(arcs(860, 1350, 160, 7, 70, 0.35))
    else: b.append(f'<path d="M -40 1180 Q 540 1420 1120 1180 L 1120 1300 Q 540 1540 -40 1300 Z" fill="url(#grad)"/>')
    b.append(sym(80, 80, 90))
    if spec.get('etiqueta'): b.append(T(spec['etiqueta'], 80, 300, 34, acc, 'inter-sb'))
    y = 420
    for ln in spec.get('titulo', [])[:3]:
        b.append(T(ln, 80, y, 82, fg)); y += 98
    lay = spec.get('layout', 'dica')
    if lay in ('dica', 'produto'):
        y += 60
        for k, p in enumerate(spec.get('pontos', [])[:3]):
            b.append(f'<circle cx="98" cy="{y-12}" r="12" fill="{VERDE}"/>')
            b.append(T(p[0], 135, y, 40, fg))
            if len(p) > 1: b.append(T(p[1], 135, y + 46, 28, sub, 'inter'))
            y += 140
    elif lay == 'numero':
        b.append(T(spec.get('numero', ''), 80, y + 200, 240, acc, 'inter-sb'))
        for k, ln in enumerate(spec.get('legenda', [])[:2]):
            b.append(T(ln, 80, y + 280 + k * 50, 40, sub, 'inter'))
    elif lay == 'frase':
        b.append(f'<rect x="80" y="{y+10}" width="120" height="8" rx="4" fill="url(#grad)"/>')
        for k, ln in enumerate(spec.get('pontos', [])[:4]):
            b.append(T(ln if isinstance(ln, str) else ln[0], 80, y + 90 + k * 50, 34, sub, 'inter'))
    b.append(T(spec.get('rodape', 'ampliasolutions.pt'), W - 80, H - 90 if dark else 1140, 30, acc, 'inter-sb', 'end'))
    b.append(T('amplia solutions', 80, H - 90 if dark else 1140, 34, fg))
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">{"".join(b)}</svg>'

if __name__ == '__main__':
    spec = json.load(open(sys.argv[1])); out = sys.argv[2]
    open(out[:-4] + '.svg', 'w').write(render(spec))
    subprocess.run(['rsvg-convert', '-w', str(W), '-o', out, out[:-4] + '.svg'], check=True)
    os.remove(out[:-4] + '.svg'); print(out)
