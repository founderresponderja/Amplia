"""Gera publicações nos estilos aprovados (22/11/2026).

  instagram = ARROJADO: verde-lima e carvão alternados, frases de 2 a 4 palavras, números enormes,
              cortes secos nos reels; fotografia do banco de imagens como fundo (com véu escuro) quando houver.
  linkedin  = CONSERVADOR/PROFISSIONAL: fundo claro, muito espaço, passos numerados, verde-floresta,
              fotografia no terço de cima quando houver; números sempre com fonte.

Uso:  python3 marketing/tools/estilo.py spec.json pasta_saida
spec.json:
  {"estilo": "instagram" | "linkedin",
   "formato": "carrossel" | "imagem" | "reel",
   "nome": "2026-11-25",                       # prefixo dos ficheiros
   "slides": [
     {"tipo": "capa",   "titulo": ["Silêncio", "custa", "clientes."], "foto": "marketing/banco-imagens/x.jpg"},
     {"tipo": "numero", "numero": "89%", "titulo": ["esperam que o dono", "responda."], "fonte": "Fonte: ..."},
     {"tipo": "texto",  "titulo": ["Responda em", "30 segundos."], "texto": "Frase curta."},
     {"tipo": "passo",  "passo": 1, "titulo": "Agradeça o comentário", "texto": "..."},      # linkedin
     {"tipo": "lista",  "titulo": ["4 passos para", "responder bem."], "itens": [["Agradeça", "o comentário"]]},  # linkedin
     {"tipo": "cta",    "titulo": ["Responder Já"], "texto": "...", "botao": "responderja.pt"},
     {"tipo": "capa",   "titulo": ["1 estrela."], "video": "marketing/banco-imagens/videos/x.mp4", "inicio": 2.5},  # só reel
     ...], 
   "duracoes": [0.9, 0.9, 2.4]}                # só reel (segundos por ecrã; cortes secos)
No reel, cada ecrã pode ter "video" (MP4 do banco, recortado ao centro para 9:16, a começar em "inicio" segundos)
em vez de "foto"; o texto fica por cima com o mesmo véu escuro. Os vídeos saem sem som.
Saída: carrossel/imagem -> JPEG 1080x1350 (nome-1.jpg …); reel -> JPEG 1080x1920 por ecrã + nome.mp4.
Regras: a fonte Max não tem € – —; esses carateres saem em Inter. Os algarismos da Max descem abaixo da linha:
o texto por baixo de um número grande já tem a folga certa. Sem rostos gerados por IA nas fotografias.
"""
import base64, json, os, subprocess, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import card
from card import T, sym, font
LIMA, VERDE, FLOR = card.LIMA, card.VERDE, card.FLOR
CARV, NEV, BRANCO, CINZA = card.CARV, card.NEV, card.BRANCO, card.CINZA
REPO = card.REPO

def tw(s, size, fam='max'):
    t = 0
    for ch in s:
        f = fam if (fam != 'max' or ord(ch) in font('max')[1]) else 'inter'
        gs, cm, hm, u = font(f)
        if ord(ch) in cm: t += hm[cm[ord(ch)]][0] * size / u
    return t

def wrap(s, size, maxw, fam='max'):
    out, cur = [], ''
    for w in s.split():
        t = (cur + ' ' + w).strip()
        if tw(t, size, fam) <= maxw: cur = t
        else: out.append(cur); cur = w
    if cur: out.append(cur)
    return out

def para(s, x, y, size, fill, maxw, fam='inter', lh=1.38, anchor='start'):
    b = ''
    for ln in wrap(s, size, maxw, fam): b += T(ln, x, y, size, fill, fam, anchor); y += size * lh
    return b, y

def photo(path, x, y, w, h):
    p = path if os.path.isabs(path) else os.path.join(REPO, path)
    d = base64.b64encode(open(p, 'rb').read()).decode()
    return f'<image x="{x}" y="{y}" width="{w}" height="{h}" preserveAspectRatio="xMidYMid slice" href="data:image/jpeg;base64,{d}"/>'

# ---------- Instagram (arrojado) ----------
VEU = ('<defs><linearGradient id="veu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B1A1C" stop-opacity=".25"/>'
       '<stop offset=".55" stop-color="#1B1A1C" stop-opacity=".72"/><stop offset="1" stop-color="#1B1A1C" stop-opacity=".92"/></linearGradient></defs>')

def ig(s, i, n, W, H):
    bg, fg = (LIMA, CARV) if i % 2 == 1 else (CARV, LIMA)
    b = [f'<rect width="{W}" height="{H}" fill="{bg}"/>']
    if s.get('video'):
        bg, fg = CARV, LIMA
        b = [VEU, f'<rect width="{W}" height="{H}" fill="url(#veu)"/>']   # transparente: o vídeo fica por baixo
        s = dict(s, foto=True)
    elif s.get('foto'):
        bg, fg = CARV, LIMA
        b = [f'<rect width="{W}" height="{H}" fill="{CARV}"/>', photo(s['foto'], 0, 0, W, H),
             f'<defs><linearGradient id="veu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B1A1C" stop-opacity=".25"/>'
             f'<stop offset=".55" stop-color="#1B1A1C" stop-opacity=".72"/><stop offset="1" stop-color="#1B1A1C" stop-opacity=".92"/></linearGradient></defs>',
             f'<rect width="{W}" height="{H}" fill="url(#veu)"/>']
    b.append(sym(80, 80, 64, 'carvao' if bg == LIMA else 'color'))
    if n > 1: b.append(f'<rect x="{W-200}" y="86" width="120" height="52" rx="26" fill="{fg}"/>' + T(f'{i}/{n}', W - 140, 122, 26, bg, 'inter', 'middle'))
    t = s.get('tipo', 'texto'); reel = H > 1500
    top = H * (0.52 if s.get('foto') else 0.3)
    if t == 'numero':
        base = H * 0.5
        b.append(T(s['numero'], 60, base, 380, fg)); y = base + 180
        for ln in s.get('titulo', []): b.append(T(ln, 70, y, 64, fg)); y += 76
    else:
        size = 140 if len(s.get('titulo', [])) <= 3 else 110; y = top
        for ln in s.get('titulo', []): b.append(T(ln, 70, y, size, fg)); y += size * 1.12
    if s.get('texto'):
        tb, y = para(s['texto'], 80, y + 30, 40, fg if not s.get('foto') else BRANCO, W - 160); b.append(tb)
    if s.get('botao'):
        bw = tw(s['botao'], 42) + 120
        b.append(f'<rect x="80" y="{H-330}" width="{bw:.0f}" height="96" rx="48" fill="{fg}"/>' + T(s['botao'], 80 + bw / 2, H - 268, 42, bg, anchor='middle'))
    if s.get('fonte'): b.append(T(s['fonte'], 80, H - (230 if reel else 130), 22, fg, 'inter'))
    b.append(T('amplia solutions', 80, H - (160 if reel else 70), 30, fg))
    return ''.join(b)

# ---------- LinkedIn (conservador/profissional) ----------
def li(s, i, n, W, H):
    b = [f'<rect width="{W}" height="{H}" fill="{NEV}"/>']
    y0 = 300
    if s.get('foto'):
        b.append(photo(s['foto'], 0, 0, W, 470)); b.append(f'<rect y="470" width="{W}" height="6" fill="{FLOR}"/>')
        b.append(f'<rect x="60" y="60" width="110" height="110" rx="22" fill="{NEV}"/>' + sym(79, 79, 72)); y0 = 560
    else:
        b.append(sym(80, 80, 72))
    if n > 1: b.append(T(f'{i}/{n}', W - 80, 130, 26, CINZA if not s.get('foto') else BRANCO, 'inter', 'end'))
    t = s.get('tipo', 'texto')
    if s.get('etiqueta'): b.append(T(s['etiqueta'], 80, y0, 32, FLOR, 'inter')); y0 += 100
    y = y0 + (0 if s.get('etiqueta') else 100)
    if t == 'passo':
        b.append(f'<circle cx="128" cy="{y-30}" r="48" fill="{FLOR}"/>' + T(str(s['passo']), 128, y - 12, 50, BRANCO, anchor='middle')); y += 120
        for ln in wrap(s['titulo'], 70, 900): b.append(T(ln, 80, y, 70, CARV)); y += 84
    elif t == 'numero':
        b.append(T(s['numero'], 80, y + 120, 200, FLOR)); y += 260
        for ln in s.get('titulo', []): b.append(T(ln, 80, y, 54, CARV)); y += 66
    else:
        for ln in s.get('titulo', []): b.append(T(ln, 80, y, 80 if not s.get('foto') else 66, CARV)); y += 96 if not s.get('foto') else 80
    if t == 'lista':
        y += 40
        for k, it in enumerate(s.get('itens', [])[:5]):
            b.append(f'<circle cx="112" cy="{y-14}" r="30" fill="{FLOR}"/>' + T(str(k + 1), 112, y, 36, BRANCO, anchor='middle'))
            b.append(T(it[0], 170, y, 44, CARV) + (T(it[1], 170 + tw(it[0], 44) + 16, y, 30, CINZA, 'inter') if len(it) > 1 else '')); y += 100
    if s.get('texto'):
        tb, y = para(s['texto'], 80, y + 40, 38, '#4A4A4F', 920); b.append(tb)
    if s.get('botao'): b.append(T(s['botao'], 80, y + 60, 36, FLOR, 'inter'))
    if s.get('fonte'): b.append(T(s['fonte'], 80, H - 130, 22, CINZA, 'inter'))
    b.append(T('amplia solutions', 80, H - 70, 30, CARV) + T('ampliasolutions.pt', W - 80, H - 70, 28, FLOR, 'inter', 'end'))
    return ''.join(b)

def _abs(p): return p if os.path.isabs(p) else os.path.join(REPO, p)

def main(spec, outdir):
    os.makedirs(outdir, exist_ok=True)
    reel = spec.get('formato') == 'reel'
    W, H = (1080, 1920) if reel else (1080, 1350)
    fn = ig if spec['estilo'] == 'instagram' else li
    sl = spec['slides']; nome = spec.get('nome', 'post'); files = []
    from PIL import Image
    for i, s in enumerate(sl, 1):
        svgp = os.path.join(outdir, f'{nome}-{i}.svg'); png = svgp[:-4] + '.png'; jpg = svgp[:-4] + '.jpg'
        open(svgp, 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">{fn(s, i, 1 if reel else len(sl), W, H)}</svg>')
        subprocess.run(['rsvg-convert', '-w', str(W), '-o', png, svgp], check=True); os.remove(svgp)
        if reel and s.get('video'):
            ov = svgp[:-4] + '-texto.png'; os.replace(png, ov)              # camada de texto transparente
            fr = svgp[:-4] + '-fundo.png'                                   # 1.º fotograma do vídeo, para a pré-visualização
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-ss', str(s.get('inicio', 0)), '-i', _abs(s['video']), '-frames:v', '1',
                            '-vf', f'scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H}', fr], check=True)
            im = Image.open(fr).convert('RGBA'); im.alpha_composite(Image.open(ov).convert('RGBA'))
            im.convert('RGB').save(jpg, quality=90); os.remove(fr); files.append(jpg)
        else:
            Image.open(png).convert('RGB').save(jpg, quality=90); os.remove(png); files.append(jpg)
    if reel:
        d = spec.get('duracoes') or [1.2] * len(files)
        args = ['ffmpeg', '-y', '-loglevel', 'error']; parts = []
        for k, (s, f, t) in enumerate(zip(sl, files, d)):
            if s.get('video'):
                ov = f[:-4] + '-texto.png'
                args += ['-ss', str(s.get('inicio', 0)), '-t', str(t), '-i', _abs(s['video']), '-loop', '1', '-t', str(t), '-framerate', '30', '-i', ov]
                vi = len([a for a in args if a == '-i']) - 2
                parts.append(f'[{vi}:v]scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},fps=30,setsar=1,trim=duration={t},setpts=PTS-STARTPTS[b{k}];'
                             f'[b{k}][{vi+1}:v]overlay=0:0:shortest=1,format=yuv420p[s{k}]')
            else:
                args += ['-loop', '1', '-t', str(t), '-framerate', '30', '-i', f]
                vi = len([a for a in args if a == '-i']) - 1
                parts.append(f'[{vi}:v]scale={W}:{H},fps=30,setsar=1,format=yuv420p[s{k}]')
        flt = ';'.join(parts) + ';' + ''.join(f'[s{k}]' for k in range(len(files))) + f'concat=n={len(files)}:v=1:a=0[o]'
        mp4 = os.path.join(outdir, f'{nome}.mp4')
        subprocess.run(args + ['-filter_complex', flt, '-map', '[o]', '-r', '30', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '23', '-movflags', '+faststart', mp4], check=True)
        for f in files:
            if os.path.exists(f[:-4] + '-texto.png'): os.remove(f[:-4] + '-texto.png')
        files.append(mp4)
    print('\n'.join(files))

if __name__ == '__main__':
    main(json.load(open(sys.argv[1])), sys.argv[2])
