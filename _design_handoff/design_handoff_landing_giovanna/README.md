# Handoff: Landing page — Giovanna Cabral

## Overview
Landing page pessoal de uma criadora de conteúdo literário. Reúne, numa única página com âncoras: apresentação (hero), estante de livros indicados, podcast com lista de episódios, textos/guias, produtos recomendados (links de afiliado), grade de posts do Instagram e captura de e-mail para newsletter.

## About the Design Files
Os arquivos deste pacote são **referências de design feitas em HTML** — protótipos que mostram aparência e comportamento pretendidos, **não** código de produção para copiar. A tarefa é **recriar estes designs no ambiente do codebase alvo** (React/Next, Vue, Astro, etc.) usando os padrões e bibliotecas já estabelecidos ali. Se ainda não existe codebase, escolha o framework mais adequado (para um site majoritariamente estático como este, Next.js ou Astro são boas escolhas) e implemente a partir daqui.

`Landing Page.dc.html` usa um runtime de prototipagem (`support.js`) e um componente de placeholder de imagem (`image-slot.js`). Nenhum dos dois deve ir para produção: os `<image-slot>` viram `<img>`/`next/image` com imagens reais.

## Fidelity
**Alta fidelidade.** Cores, tipografia, espaçamentos e interações são finais. Recrie fielmente.

## Screens / Views

Página única, largura máxima de conteúdo **1280px**, centralizada, padding lateral **56px** (desktop). Fundo geral `#FBF8F5`; seções alternadas em `#F5EFE9`.

### 1. Header (sticky)
- `position: sticky; top: 0; z-index: 20`, fundo `rgba(251,248,245,0.88)` + `backdrop-filter: blur(8px)`, borda inferior `1px solid #EDE4DC`, padding `26px 56px`.
- Flex, `space-between`, `gap: 24px`.
- Esquerda: wordmark "Giovanna Cabral" — Playfair Display 400, 22px, `letter-spacing: .02em`.
- Centro: nav com `gap: 34px`, itens 14px, uppercase, `letter-spacing: .06em`, cor `#8A807A`. Itens: Livros, Podcast, Conteúdos, Indicações, Instagram (âncoras `#livros`, `#podcast`, `#conteudos`, `#indicacoes`, `#instagram`).
- Direita: botão pill "Newsletter" — fundo `#E2A9A0`, texto `#FFFDFB`, 13px uppercase `.08em`, padding `11px 22px`, `border-radius: 999px`, âncora `#newsletter`.

### 2. Hero
- Grid `1.15fr 0.85fr`, `gap: 64px`, `align-items: center`, padding `96px 56px 104px`.
- Coluna esquerda (flex column, `gap: 28px`):
  - Eyebrow: "Leituras, conversas e boas escolhas" — 12px, uppercase, `letter-spacing: .22em`, `#B49B90`.
  - H1 Playfair Display 400 **66px**, `line-height: 1.08`, `text-wrap: pretty`: "Um cantinho para quem" / (quebra) / *ama ler* (itálico, cor `#8FA8B8`) " e descobrir coisas boas".
  - Parágrafo 18px/1.65, `#6E645F`, `max-width: 46ch`: "Aqui eu reúno os livros que me marcaram, os episódios do podcast, os textos que escrevo e os produtos que uso e indico de verdade."
  - Dois botões pill, `gap: 14px`, 14px `.06em`, padding `15px 30px`: primário `#2E2A28`/texto `#FBF8F5` "Ver as leituras"; secundário borda `1px solid #DCCFC6`, texto `#2E2A28`, "Ouvir o podcast".
- Coluna direita: retrato 340×440px, `border-radius: 200px` (topo arredondado tipo arco). Atrás dele, uma forma `#EFE1DC` posicionada absoluta em `inset: -22px -22px 40px 24px`, `border-radius: 220px 220px 16px 16px`. Um círculo decorativo 72×72px, borda `1px solid #D7C3BB`, em `top:-14px; left:-34px`, opacidade base `.35`.

### 3. Livros (`#livros`) — fundo `#F5EFE9`, padding `88px 56px`
- Cabeçalho de seção: eyebrow "01 — Estante" (12px `.22em` uppercase `#B49B90`) + H2 Playfair 400 42px "Livros que eu indico"; à direita link "Ver estante completa" (14px, borda inferior `1px solid #DCCFC6`, `padding-bottom: 4px`).
- Grade fluida: `repeat(auto-fit, minmax(min(100%, 305px), 1fr))`, `gap: 34px` (4 colunas no desktop).
- Card: capa `aspect-ratio 2/3`, `border-radius: 6px`; tag 11px uppercase `.18em` `#B49B90`; título Playfair 400 21px/1.25; autor 14px `#8A807A`; nota 14px/1.6 `#6E645F`.
- Conteúdo (4 itens): Ficção · "O verão sem pressa" · Clara Nunes · "Li em três dias e chorei no último capítulo." | Ensaio · "Cartas para uma leitora" · Helena Braga · "Perfeito para ler devagar, um capítulo por noite." | Não-ficção · "A rotina possível" · Bruna Teixeira · "Mudou a forma como eu organizo as manhãs." | Poesia · "Pequenos dias claros" · Ana Ferraz · "Deixo na mesa de cabeceira o ano inteiro."

### 4. Podcast (`#podcast`) — fundo `#FBF8F5`, padding `96px 56px`
- Grid `0.85fr 1.15fr`, `gap: 72px`, `align-items: start`.
- Coluna esquerda **sticky** (`top: 110px`): eyebrow "02 — Podcast"; H2 Playfair 42px "Café com Página"; parágrafo 16px/1.7 `#6E645F` "Um episódio novo toda quinta, sobre leitura, rotina e as pequenas coisas que fazem diferença."; três pills 13px: Spotify (fundo `#8FA8B8`, texto `#FFFDFB`), Apple Podcasts e YouTube (borda `1px solid #DCCFC6`).
- Lista de episódios: cada linha é `<a>` em grid `64px 1fr auto`, `gap: 24px`, padding `26px 8px`, `border-top: 1px solid #EDE4DC`. Número Playfair 26px `#C9BAB0`; título Playfair 400 20px; subtítulo 14px `#8A807A`; duração 13px `#B49B90` `.06em`. **Hover:** `background: #F7F1EC`.
- Episódios: 42 "Como voltar a ler depois de uma pausa longa" (com Helena Braga, 38 min) | 41 "Montando uma estante que faz sentido" (episódio solo, 24 min) | 40 "Livros que a gente abandona (e tudo bem)" (com Clara Nunes, 45 min) | 39 "Rotina de manhã sem culpa" (com Bruna Teixeira, 31 min).

### 5. Conteúdos (`#conteudos`) — fundo `#F5EFE9`, padding `88px 56px`
- Eyebrow "03 — Conteúdos" + H2 "Textos e guias".
- Grade `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`, `gap: 32px`.
- Card: fundo `#FBF8F5`, `border-radius: 20px`, padding `18px 18px 28px`; imagem 100%×190px `radius 14`; tag 11px uppercase `.18em` `#B49B90`; título Playfair 400 22px/1.25; resumo 14px/1.6 `#6E645F`; link "Ler mais" 13px uppercase `.08em`.
- Conteúdo: Guia · "Por onde começar na leitura em 2026" · "Cinco títulos leves para retomar o hábito sem peso." | Bastidores · "Como eu escolho o que vou ler" · "Meu método simples de fila de leitura e listas." | Rotina · "Meu cantinho de leitura" · "Luz, cadeira e as coisas que realmente uso."

### 6. Indicações (`#indicacoes`) — fundo `#FBF8F5`, padding `96px 56px`
- Eyebrow "04 — Indicações" + H2 "Produtos que eu uso"; à direita, aviso 14px `#8A807A`, `max-width: 34ch`: "Alguns links são de afiliados. Só indico o que faz parte da minha rotina."
- Grade `repeat(auto-fit, minmax(min(100%, 210px), 1fr))`, `gap: 28px`.
- Card: fundo `#FFFDFB`, borda `1px solid #EDE4DC`, `border-radius: 20px`, padding 20px, `gap: 16px`; imagem 100%×170px `radius 12`; nome 16px/600; categoria 13px `#8A807A`; rodapé com preço Playfair 18px e botão pill "Comprar" (fundo `#F0E3DE`, texto `#2E2A28`, 12px uppercase `.08em`, padding `9px 16px`). **Hover no card:** `border-color: #E2A9A0`.
- Itens: Marcador de páginas · Papelaria · R$ 29 | Luminária de leitura · Casa · R$ 149 | Caderno de anotações · Papelaria · R$ 68 | Chá de camomila · Rotina · R$ 42.

### 7. Instagram (`#instagram`) — fundo `#F5EFE9`, padding `88px 56px`
- Eyebrow "05 — Instagram" + H2 "@giovanna.cabral"; à direita botão pill "Seguir" (borda `1px solid #DCCFC6`, 14px `.06em`, padding `13px 26px`).
- Grade `repeat(auto-fit, minmax(min(100%, 305px), 1fr))`, `gap: 16px` (4 colunas no desktop).
- Tile: `aspect-ratio: 1`, `border-radius: 14px`, `overflow: hidden`, fundo `#EFE7E1`. Legenda sobreposta no rodapé: padding `34px 14px 12px`, 12px, `#FFFDFB`, `background: linear-gradient(to top, rgba(46,42,40,.55), transparent)`, `pointer-events: none`.
- Legendas: "leituras de agosto", "manhã de domingo", "chegou na estante", "trechos que anotei", "bastidores do podcast", "meu cantinho".
- Em produção, substituir por embeds/feed real (Instagram Basic Display API ou serviço tipo Behold/EmbedSocial) mantendo esta grade.

### 8. Newsletter (`#newsletter`) — fundo `#FBF8F5`, padding `104px 56px`
- Bloco centralizado `max-width: 720px`, `text-align: center`, `gap: 20px`.
- Eyebrow "Carta semanal"; H2 Playfair 400 40px/1.2 "Uma carta por semana, com calma"; parágrafo 16px/1.7 `#6E645F` `max-width: 48ch` "Leituras da semana, um trecho que anotei e as indicações que não couberam no feed."
- Form flex `gap: 10px`, `max-width: 460px`: input e-mail (padding `15px 20px`, `border-radius: 999px`, borda `1px solid #DCCFC6`, fundo `#FFFDFB`, 15px, placeholder "seu melhor e-mail") + botão "Assinar" (fundo `#E2A9A0`, texto `#FFFDFB`, padding `15px 28px`, `border-radius: 999px`).
- Mensagem de confirmação abaixo, 13px `#B49B90`, `min-height: 18px`: "Prontinho, você está na lista."

### 9. Footer
- Padding `44px 56px`, `border-top: 1px solid #EDE4DC`, flex `space-between`, wrap.
- Wordmark Playfair 18px; links 14px `#8A807A` (Instagram, Spotify, Contato); "© 2026 — feito com carinho" 13px `#B49B90`.

## Interactions & Behavior
- **Hero (hover no bloco do retrato)** — `transition: 0.7s cubic-bezier(0.22, 1, 0.36, 1)` em todas as camadas:
  - retrato: `translateY(-14px) scale(1.02)`
  - forma de fundo: `translate(14px, 10px) rotate(-2.5deg)`
  - círculo decorativo: `translate(-10px, -8px) scale(1.15)` e opacidade `.35 → 1`
- **Linha de episódio (hover):** `background: #F7F1EC`.
- **Card de produto (hover):** `border-color: #E2A9A0`.
- **Links de texto:** cor padrão `#8FA8B8`, hover `#E2A9A0`.
- **Nav:** rolagem suave até as âncoras.
- **Newsletter:** `preventDefault` e mensagem de sucesso inline. Em produção, ligar a um provedor (Mailchimp/Beehiiv/ConvertKit) com validação de e-mail e estados de carregando/erro.
- **Responsivo:** as grades usam `auto-fit + minmax`, portanto reduzem colunas sozinhas. Abaixo de ~900px, empilhar hero e podcast em coluna única, reduzir H1 para ~40–44px, padding lateral para 24px e transformar a nav em menu compacto.

## State Management
- `formMessage: string` — mensagem do formulário de newsletter.
- `heroHover: boolean` — dispara a animação do hero (pode ser puro CSS `:hover` no codebase real).
- Props configuráveis no protótipo: `instagramColumns` (3–6, padrão 4), `booksPerRow` (2–5, padrão 4), `showPrices` (bool), `showNewsletter` (bool).
- Dados (livros, episódios, posts, produtos, posts do IG) são arrays estáticos — migrar para CMS (Sanity/Contentful/MDX) ou feeds reais.

## Design Tokens
Cores
- Fundo base `#FBF8F5` · Fundo alternado `#F5EFE9` · Superfície de card `#FFFDFB`
- Tinta principal `#2E2A28` · Texto corpo `#6E645F` · Texto suave `#8A807A` · Eyebrow/meta `#B49B90` · Numeral suave `#C9BAB0`
- Acento pêssego `#E2A9A0` · Acento pêssego claro `#F0E3DE` · Forma do hero `#EFE1DC` · Azul suave `#8FA8B8`
- Bordas `#EDE4DC` (sutil) e `#DCCFC6` (definida) · Círculo decorativo `#D7C3BB` · Fundo de tile IG `#EFE7E1`

Tipografia
- Display/títulos: **Playfair Display** 400 (itálico usado no destaque do H1)
- Texto: **Karla** 300/400/500/600
- Escala: H1 66px/1.08 · H2 42px · H2 newsletter 40px/1.2 · título de card 20–22px · livro 21px · corpo 18px/1.65 e 16px/1.7 · card 14px/1.6 · meta 13px · eyebrow 11–12px uppercase `letter-spacing .18–.22em`

Espaçamento: 6 · 10 · 12 · 14 · 16 · 20 · 24 · 26 · 28 · 32 · 34 · 44 · 56 · 64 · 72 · 88 · 96 · 104 px

Raios: 6 (capa) · 12 · 14 · 20 (cards) · 200 (retrato) · 999 (pills)

Sem sombras — a hierarquia vem de fundo e borda.

## Assets
Nenhuma imagem final incluída. Todos os espaços de imagem são placeholders `<image-slot>`: retrato do hero (340×440), 4 capas de livro (2:3), 3 capas de conteúdo (~380×190), 4 fotos de produto (~230×170), 6 posts do Instagram (1:1). A cliente fornece as imagens reais. Fontes via Google Fonts (Playfair Display, Karla).

## Files
- `Landing Page.dc.html` — o design completo (markup + lógica).
- `image-slot.js` — componente de placeholder de imagem usado no protótipo (não usar em produção).
- `support.js` — runtime do protótipo (não usar em produção).
