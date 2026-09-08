# Site — Clínica Musumeci (Leme/SP)

Site institucional **multipágina** e responsivo de uma clínica de
**otorrinolaringologia**: hero com **fundo em vídeo**, animações em toda a rolagem
na mesma paleta, catálogo de exames e envio de pedido detalhado pelo
**WhatsApp**.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Build / dev server | [Vite](https://vitejs.dev) |
| UI | [React 18](https://react.dev) + [React Router 6](https://reactrouter.com) |
| Estilo | [Tailwind CSS 3](https://tailwindcss.com) (tema custom em `tailwind.config.js`) |
| Animações | [Framer Motion](https://www.framer.com/motion/) (reveal on-scroll, hero em vídeo, aurora/ondas sonoras, barra de progresso, drawer, contadores) |
| Carrossel | [Swiper](https://swiperjs.com) (depoimentos) |
| Rolagem suave | [Lenis](https://github.com/darkroomengineering/lenis) |
| Ícones | [lucide-react](https://lucide.dev) |
| Utilidades | clsx + tailwind-merge |

## Rodar o projeto

Pré-requisito: **Node 18+** (recomendado 20+).

```bash
npm install
npm run dev      # http://localhost:5173
```

Build de produção e pré-visualização:

```bash
npm run build    # gera /dist
npm run preview  # serve /dist em http://localhost:4173
```

## Estrutura

```
index.html                 entrada do Vite
src/
  main.jsx                  bootstrap React + Router + CartProvider
  App.jsx                   rotas
  index.css                 Tailwind + camadas base/components
  data/
    site.js                 ⚙️ configuração central (WhatsApp, telefones, endereço, horários, unidades)
    exams.js                exames + categorias (audio · otoneuro · reabilitacao · video)
    content.js              textos (missão/visão/valores, passos, diferenciais, números, depoimentos, FAQ, convênios)
  lib/
    whatsapp.js             waLink() e montagem da mensagem do pedido
    cn.js                   merge de classes Tailwind
  context/CartContext.jsx   "carrinho" de exames (persiste em localStorage)
  hooks/useLenis.js         rolagem suave
  components/
    layout/                 Header, Footer, Layout, FloatingActions, ScrollToTop
    ui/                     Button, Section, Reveal, Counter, Icon, MediaFrame, Page,
                            Aurora, SoundWave, WaveDivider
    layout/                 + ScrollProgress (barra de progresso no topo)
    home/                   Hero (fundo em vídeo), Steps, Categories, Differentials,
                            Gallery, Stats, ConveniosMarquee, Testimonials, Faq
    exames/                 ExamCatalog, ExamCard, FilterBar, CartDrawer
    common/                 CtaBand, LocationBlock
  pages/                    Home, Exames, Convenios, Sobre, Contato, NotFound
public/
  media/                    coloque aqui fotos e vídeo (ver public/media/LEIA-ME.txt)
  favicon.svg, _redirects
```

## O que ajustar antes de publicar

Tudo centralizado em **`src/data/site.js`**:

1. **`whatsapp` / `whatsappLabel`** — celular da clínica `(19) 99194-6076`, só números com `55` + DDD.
2. **`phone` / `phoneLabel` / `phones[]`** — telefones fixos para o botão "ligar" (`(19) 3571-3126` e `(19) 3554-1318`).
3. **`address` / `hours`** — endereço confirmado; **horários são exemplos**.
4. **`UNITS`** — unidades da clínica (a atual + Instituto Musumeci e Centro de Estudos); ajuste `nota`/`quando`.

Outros pontos:

- **Exames**: `src/data/exams.js` (`EXAMS`, `CATEGORIES`;
  campos `nome`, `desc`, `preparo`; categorias `audio` `otoneuro` `reabilitacao` `video`).
- **Missão, visão e valores**: `src/data/content.js` → `PRINCIPIOS`.
- **Convênios**: `src/data/content.js` → `CONVENIOS` e `CONVENIO_OPTIONS`.
- **Números / depoimentos / linha do tempo**: `src/data/content.js` (marcados como ilustrativos).
- **Imagens**: o site já vem com **fotos de banco de imagens (Unsplash) como placeholder**,
  configuradas no objeto `media` de `src/data/site.js`. Troque cada uma pela foto real
  da clínica — colocando o arquivo em `public/media/` e apontando para `"/media/nome.jpg"`,
  ou colando outra URL. Ver `public/media/LEIA-ME.txt`. Se uma imagem não carregar,
  aparece um bloco animado em degradê na paleta da marca (nada quebra).
- **Vídeo do hero**: opcional. Coloque `public/media/hero.mp4` que ele passa a rodar
  por cima da foto de fundo; sem ele, a foto do topo ganha um leve movimento de zoom.
- **Atribuição Unsplash**: enquanto estiver com as fotos placeholder, cite a fonte
  (ex.: rodapé "Imagens: Unsplash") ou, de preferência, substitua por fotos próprias.

## Como funciona o pedido pelo WhatsApp

1. Na página **Exames**, o visitante toca em "Adicionar ao pedido" nos exames desejados.
2. A seleção fica salva no navegador (`localStorage`) e sobrevive à troca de página.
3. O botão flutuante **"Meu pedido"** abre um painel lateral para nome, convênio e período.
4. Ao enviar, abre o WhatsApp com a mensagem já formatada, incluindo o **preparo de cada exame**.
   Nada trafega por servidor — o texto vai direto na conversa.
5. Cada exame também tem "Enviar" individual, e há um formulário livre em **Contato**.

## Publicar (hospedar)

Site estático após `npm run build`. Suba a pasta `dist/` em:

- **Netlify** / **Cloudflare Pages**: arraste a pasta ou conecte o repositório.
  O arquivo `public/_redirects` já cuida das rotas do SPA.
- **Vercel**: importe o projeto (framework "Vite"); `vercel.json` já trata as rotas.
- **GitHub Pages**: use uma action de build; para subpasta, defina `base` no `vite.config.js`.

## Acessibilidade e performance

- Navegação por teclado, foco visível, textos alternativos e `aria-*` nos componentes interativos.
- Animações respeitam `prefers-reduced-motion` (Framer Motion, Lenis e contadores).
- Sem imagens pesadas por padrão; fontes via Google Fonts com `display=swap`.
