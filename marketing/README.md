# Marketing da Amplia Solutions — guia para as tarefas automáticas

Este ramo (`marketing`) guarda o que as tarefas agendadas precisam para preparar publicações.
Não é publicado no site (ver `vercel.json`).

## Contas ligadas (conector Windsor.ai for Social Media)
- LinkedIn: página da empresa **Amplia Solutions** — conector `linkedin_organic`, conta `112650598`.
  Ações: `create_post` (texto e/ou link), `create_image_post` (imagem por URL público), `upload_image`.
  Não há publicação de vídeo pelo conector: vídeos são carregados à mão pelo Luís.
- Instagram: **@ampliasolutions** — conector `instagram`, conta `17841479978024868`.
  Ações: `create_image_post`, `create_carousel_post`, `create_video_post` (reels), `create_story` (por URL público).
- Perfil da Empresa no Google: ainda não existe.

## Regra de publicação (obrigatória)
**Nunca publicar sem o «sim» do Luís para aquela publicação concreta.**
Cada tarefa prepara a publicação, envia-lhe uma notificação com o texto final e a imagem,
e só publica depois de ele responder «sim» (ou com as alterações que pedir) nessa sessão.
Se não houver resposta, não publica.

## A empresa
Estúdio português que cria **apps web e móveis à medida para pequenas empresas**, com IA integrada,
em 6–8 semanas e a preço fechado. Pacotes (sem IVA): Sprint de descoberta 490 €, MVP web 4.900 €,
App profissional 12.900 €, Integração de IA 2.500 €, Manutenção desde 150 €/mês.
Produtos próprios (portfólio): Responder Já (respostas a avaliações Google), Lia (agente de carreira),
Amplia Home Studio (decoração com IA), OpsFlow (automação DevOps), Subly (gestão de subscrições, em breve).
Site: https://www.ampliasolutions.pt

## Temas (áreas de negócio)
Apps e transformação digital para PME · IA aplicada a pequenos negócios · avaliações online e reputação
(Responder Já) · mercado de trabalho, CV e recrutamento (Lia) · decoração e remodelação (Home Studio) ·
DevOps e produtividade de equipas técnicas (OpsFlow) · subscrições e despesas recorrentes (Subly).
Foco geográfico: Portugal primeiro; Espanha e Brasil como interesse secundário.

## Estilos por rede (decididos pelo Luís a 22/11/2026)
Gerador: `python3 marketing/tools/estilo.py spec.json pasta_saida` (ver a docstring). Exemplos completos dos dois estilos:
documento «Amplia_Estilos_de_Conteudo» (propostas A e C).
- **LinkedIn: conservador e profissional.** Fundo claro, muito espaço, passos numerados, verde-floresta; fotografia do
  banco no terço de cima quando ajudar. Tom calmo e útil, de quem sabe do assunto: guias práticos, boas práticas,
  números com fonte. Sem frases de choque, sem pontos de exclamação, sem chamadas comerciais agressivas.
- **Instagram: arrojado.** Verde-lima e carvão alternados, frases de 2 a 4 palavras, números enormes, fotografia do banco
  como fundo com véu escuro. Reels de 8–15 s com cortes secos ao ritmo (sem transições suaves). Direto, provocador, com humor,
  mas nunca ofensivo nem alarmista; números sempre com fonte, mesmo que em letra pequena.
- O limite de 1 publicação comercial em cada 3 vale para as duas redes.

## Tom de voz (do Manual de Identidade Visual)
- Português de Portugal, trata o leitor por **«você»**. Frases curtas, concretas, sem jargão.
- Profissional e útil: nada alarmista, sensacionalista, político ou polémico. Sem promessas que não se provem
  (nada de «líder», «equipa sénior», «24/7»). Números com fonte.
- Estrutura LinkedIn: 1.ª linha forte (aparece antes do «ver mais»), 3–6 parágrafos curtos,
  uma pergunta no fim para gerar comentários, 3 hashtags no máximo.
- Mencionar a Amplia só quando acrescenta valor; no máximo 1 em cada 3 publicações com chamada comercial.

## Calendário e horários (hora de Lisboa, desde 22/11/2026)
Baseado nos estudos de 2026 da Buffer e da Sprout Social: no LinkedIn as manhãs rendem menos; o pico é à tarde, a meio da semana.
O rascunho é preparado de manhã; depois do «sim» do Luís, a sessão agenda a publicação (send_later) para a hora marcada.

| Rede | Dia | Publicação | Hora |
|---|---|---|---|
| LinkedIn | seg, ter, qui, sex | Partilha comentada | 13:40 |
| LinkedIn | quarta | Imagem original | 15:40 |
| LinkedIn | última sexta do mês | Vídeo (carregado à mão) | ~15:00 |
| Instagram | quarta | Reel, carrossel ou imagem | 12:40 |
| Instagram | quinta | Reel, carrossel ou imagem | 20:10 |

- **No LinkedIn, um dia com publicação principal não leva mais nada:** sem partilha à quarta nem na última sexta do mês.
- **Instagram:** à segunda (18:47) a tarefa propõe tema e formato para as duas publicações da semana; discute-se com o Luís,
  só depois se gera, e só se publica depois do «sim».
- Rever os horários com os dados das próprias contas (Windsor.ai) a partir de janeiro de 2027.

## Publicações
### Diária — partilha comentada (seg, ter, qui, sex; 13:40)
1. Pesquisar notícias e artigos das últimas 48 h sobre os temas acima (fontes de qualidade:
   imprensa portuguesa e espanhola de economia e tecnologia, relatórios, blogs oficiais, artigos públicos no LinkedIn).
2. Escolher **uma** que seja útil a donos de pequenas empresas e capaz de gerar conversa.
3. Escrever o comentário da Amplia (60–150 palavras): o que diz, porque importa para uma PME, uma pergunta.
4. `create_post` com `commentary`, `link`, `link_title` (título da notícia) e `link_description`.

### Semanal — imagem original (quarta-feira, 15:40)
1. Escolher um tema que não se repita nas últimas 6 semanas (ver `posts/registo.md`). Formatos a rodar:
   dica prática · número/estatística com fonte · bastidores de um produto · pergunta à comunidade.
2. Criar a especificação JSON e gerar a imagem:
   `python3 marketing/tools/card.py spec.json marketing/posts/AAAA-MM-DD.png`
   (layouts `dica`, `numero`, `frase`, `produto`; temas `escuro`/`claro`; ver docstring do script).
3. Fazer commit e push para o ramo `marketing`. URL público da imagem:
   `https://raw.githubusercontent.com/founderresponderja/Amplia/marketing/marketing/posts/AAAA-MM-DD.png`
4. Texto de 80–200 palavras + `create_image_post` com `image_url` e `commentary`.

### Mensal — vídeo (última sexta-feira do mês, ~15:00)
Dia 18: briefing com os temas mais quentes do mês nas áreas acima (3–5 temas, porquê, ângulo sugerido).
Conversa com o Luís no calendário (segunda-feira entre os dias 18 e 24, 21:00) para decidir tema e abordagem.
Só depois se produz o vídeo.

## Imagens de fundo (desde 22/11/2026)
As publicações passam a usar fotografias e cenários, não só tipografia. Fonte: `marketing/banco-imagens/`
(fotografias de bancos gratuitos e cenários gerados por IA, postos pelo Luís; regras e licenças nessa pasta).
Sem rostos gerados por IA. Se não houver imagem adequada no banco, usar só tipografia e pedir ao Luís
imagens para o tema (sugerir um prompt de `banco-imagens/prompts-ia.md`).

## Ficheiros de media (regras do Luís)
- **O site só é usado para conteúdos do Instagram.** Conteúdos do LinkedIn nunca vão para o site.
- **Vídeos do Instagram (reels, 9:16, 1080 × 1920)**: substituem `public/media/video-atual.mp4` e a capa
  `public/media/video-atual.jpg` no ramo `main` do site, com o mesmo nome, sem alterar código. Servem de URL público
  para publicar no Instagram e ficam no topo da página (computador) até ao reel seguinte, para manter o site dinâmico.
  Atualizar o site só com o «sim» do Luís ao vídeo.
- **Imagens e carrosséis do Instagram**: ficam em `public/media/instagram/` só até serem publicados; apagar logo a seguir
  à publicação (depois de confirmar que existe).
- **LinkedIn**: imagens ficam em `marketing/posts/` (ramo `marketing`, URL público do GitHub) só até serem publicadas;
  apagar logo a seguir. Vídeos do LinkedIn não passam pelo site nem pelo repositório: o Luís carrega-os à mão.
- Nota: o histórico do Git guarda versões antigas; o link público deixa de funcionar.
- **Lembrete obrigatório**: sempre que houver media novo (imagem, carrossel ou vídeo), lembrar o Luís de o
  descarregar para o repositório local dele, enviando-lhe o ficheiro (SendUserFile) na mesma mensagem.

## Registo
Depois de publicar, acrescentar uma linha a `posts/registo.md`: data · tipo · tema · link da publicação.
