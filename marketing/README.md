# Marketing da Amplia Solutions — guia para as tarefas automáticas

Este ramo (`marketing`) guarda o que as tarefas agendadas precisam para preparar publicações.
Não é publicado no site (ver `vercel.json`).

## Contas ligadas (conector Windsor.ai for Social Media)
- LinkedIn: página da empresa **Amplia Solutions** — conector `linkedin_organic`, conta `112650598`.
  Ações: `create_post` (texto e/ou link), `create_image_post` (imagem por URL público), `upload_image`.
  Não há publicação de vídeo pelo conector: vídeos são carregados à mão pelo Luís.
- Instagram: **@ampliasolutions** — conector `instagram`, conta `17841479978024868`.
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

## Tom de voz (do Manual de Identidade Visual)
- Português de Portugal, trata o leitor por **«você»**. Frases curtas, concretas, sem jargão.
- Profissional e útil: nada alarmista, sensacionalista, político ou polémico. Sem promessas que não se provem
  (nada de «líder», «equipa sénior», «24/7»). Números com fonte.
- Estrutura LinkedIn: 1.ª linha forte (aparece antes do «ver mais»), 3–6 parágrafos curtos,
  uma pergunta no fim para gerar comentários, 3 hashtags no máximo.
- Mencionar a Amplia só quando acrescenta valor; no máximo 1 em cada 3 publicações com chamada comercial.

## Publicações
### Diária — partilha comentada (dias úteis)
1. Pesquisar notícias e artigos das últimas 48 h sobre os temas acima (fontes de qualidade:
   imprensa portuguesa e espanhola de economia e tecnologia, relatórios, blogs oficiais, artigos públicos no LinkedIn).
2. Escolher **uma** que seja útil a donos de pequenas empresas e capaz de gerar conversa.
3. Escrever o comentário da Amplia (60–150 palavras): o que diz, porque importa para uma PME, uma pergunta.
4. `create_post` com `commentary`, `link`, `link_title` (título da notícia) e `link_description`.

### Semanal — imagem original (quarta-feira)
1. Escolher um tema que não se repita nas últimas 6 semanas (ver `posts/registo.md`). Formatos a rodar:
   dica prática · número/estatística com fonte · bastidores de um produto · pergunta à comunidade.
2. Criar a especificação JSON e gerar a imagem:
   `python3 marketing/tools/card.py spec.json marketing/posts/AAAA-MM-DD.png`
   (layouts `dica`, `numero`, `frase`, `produto`; temas `escuro`/`claro`; ver docstring do script).
3. Fazer commit e push para o ramo `marketing`. URL público da imagem:
   `https://raw.githubusercontent.com/founderresponderja/Amplia/marketing/marketing/posts/AAAA-MM-DD.png`
4. Texto de 80–200 palavras + `create_image_post` com `image_url` e `commentary`.

### Mensal — vídeo (última sexta-feira do mês)
Dia 18: briefing com os temas mais quentes do mês nas áreas acima (3–5 temas, porquê, ângulo sugerido).
Conversa com o Luís no calendário (segunda-feira entre os dias 18 e 24, 21:00) para decidir tema e abordagem.
Só depois se produz o vídeo.

## Ficheiros de media (regras do Luís)
- **Imagens e carrosséis**: ficam em `marketing/posts/` apenas até serem publicados. Logo a seguir à publicação
  (depois de confirmar que a publicação existe), apagar o ficheiro do ramo `marketing` (commit + push).
  Nota: o histórico do Git guarda versões antigas; o link público deixa de funcionar.
- **Vídeos**: o vídeo novo (formato 4:5, 1080 × 1350) substitui `public/media/video-atual.mp4` e a capa
  `public/media/video-atual.jpg` no ramo `main` do site, com o mesmo nome, sem alterar código. Aparece no topo
  da página no computador. Publicar no site só com o «sim» do Luís ao vídeo.
  Para o Instagram, a versão 9:16 vai para `public/media/reel-atual.mp4` e é apagada depois de o reel estar publicado.
- **Lembrete obrigatório**: sempre que houver media novo (imagem, carrossel ou vídeo), lembrar o Luís de o
  descarregar para o repositório local dele, enviando-lhe o ficheiro (SendUserFile) na mesma mensagem.

## Registo
Depois de publicar, acrescentar uma linha a `posts/registo.md`: data · tipo · tema · link da publicação.
