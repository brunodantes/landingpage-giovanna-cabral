export const navLinks = [
  { label: "Livros", href: "#livros" },
  { label: "Podcast", href: "#podcast" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Indicações", href: "#indicacoes" },
  { label: "Instagram", href: "#instagram" },
];

export type Book = {
  tag: string;
  title: string;
  author: string;
  note: string;
  cover: string;
};

export const books: Book[] = [
  {
    tag: "Ficção",
    title: "Torto Arado",
    author: "Itamar Vieira Junior",
    note: "Uma das leituras mais fortes que tive esse ano, impossível largar.",
    cover: "/covers/torto-arado.jpg",
  },
  {
    tag: "Ensaio",
    title: "A Coragem de Ser Imperfeito",
    author: "Brené Brown",
    note: "Releio um capítulo sempre que preciso me lembrar de ser mais gentil comigo mesma.",
    cover: "/covers/coragem-de-ser-imperfeito.jpg",
  },
  {
    tag: "Não-ficção",
    title: "Hábitos Atômicos",
    author: "James Clear",
    note: "Mudou de verdade a forma como eu organizo as manhãs.",
    cover: "/covers/habitos-atomicos.jpg",
  },
  {
    tag: "Poesia",
    title: "Antologia Poética",
    author: "Carlos Drummond de Andrade",
    note: "Fica na mesa de cabeceira o ano inteiro, sempre tem um poema certo pro dia.",
    cover: "/covers/antologia-poetica.jpg",
  },
];

export type RecommendationType = "podcast" | "video";

export type Recommendation = {
  type: RecommendationType;
  title: string;
  /** Nome de quem produz o conteúdo (não é a Giovanna). */
  creator: string;
  /** Link externo para o conteúdo indicado. */
  link: string;
};

export const recommendations: Recommendation[] = [
  {
    type: "podcast",
    title: "Como voltar a ler depois de uma pausa longa",
    creator: "Pod das Letras",
    link: "#",
  },
  {
    type: "podcast",
    title: "Montando uma estante que faz sentido",
    creator: "Estante em Ordem",
    link: "#",
  },
  {
    type: "podcast",
    title: "Livros que a gente abandona (e tudo bem)",
    creator: "Café Literário",
    link: "#",
  },
  {
    type: "video",
    title: "Resenha: 5 livros que mudaram minha rotina",
    creator: "Canal da Marina Lopes",
    link: "#",
  },
  {
    type: "video",
    title: "Como organizar uma estante pequena",
    creator: "Vida em Capítulos",
    link: "#",
  },
  {
    type: "video",
    title: "Rotina de leitura de quem lê 50 livros por ano",
    creator: "Ler Todo Dia",
    link: "#",
  },
];

export type ContentPost = {
  tag: string;
  title: string;
  excerpt: string;
};

export const contentPosts: ContentPost[] = [
  {
    tag: "Guia",
    title: "Por onde começar na leitura em 2026",
    excerpt: "Cinco títulos leves para retomar o hábito sem peso.",
  },
  {
    tag: "Bastidores",
    title: "Como eu escolho o que vou ler",
    excerpt: "Meu método simples de fila de leitura e listas.",
  },
  {
    tag: "Rotina",
    title: "Meu cantinho de leitura",
    excerpt: "Luz, cadeira e as coisas que realmente uso.",
  },
];

export type Product = {
  name: string;
  category: string;
  price: string;
  /** Link de afiliado (ex.: Amazon Associates, com ?tag=seu-id-20). */
  link: string;
};

export const products: Product[] = [
  {
    name: "Marcador de páginas",
    category: "Papelaria",
    price: "R$ 29",
    link: "#",
  },
  {
    name: "Luminária de leitura",
    category: "Casa",
    price: "R$ 149",
    link: "#",
  },
  {
    name: "Caderno de anotações",
    category: "Papelaria",
    price: "R$ 68",
    link: "#",
  },
  {
    name: "Chá de camomila",
    category: "Rotina",
    price: "R$ 42",
    link: "#",
  },
  {
    name: "Almofada de leitura",
    category: "Casa",
    price: "R$ 119",
    link: "#",
  },
  {
    name: "Suporte para livro",
    category: "Papelaria",
    price: "R$ 54",
    link: "#",
  },
  {
    name: "Vela aromática",
    category: "Rotina",
    price: "R$ 79",
    link: "#",
  },
  {
    name: "Capa para e-reader",
    category: "Papelaria",
    price: "R$ 89",
    link: "#",
  },
];

/** Link do perfil da Giovanna no Instagram (usado no botão "Seguir"). */
export const instagramProfileUrl = "https://www.instagram.com/giocavallin?igsh=ZWg2MGlzd3R4Z3pv";

export type InstagramPost = {
  caption: string;
  /** Link do post específico no Instagram (ex.: https://www.instagram.com/p/POST_ID/). */
  link: string;
};


export const instagramPosts: InstagramPost[] = [
  { caption: "A busca pelo melhor investimento", link: "https://www.instagram.com/reel/Db9ZbZYRxH1/?igsh=MXA5MGhkZjNrNWJ5eQ==" },
  { caption: "Talvez o problema não seja o quando você ganha", link: "https://www.instagram.com/reel/Db4lpKyJPEX/?igsh=MTc0cnk4NzdubThvNA==" },
  { caption: "li o livro \"A psicologia financeira\" de Morgan Housel e uma coisa ficou muito clara", link: "https://www.instagram.com/p/DVjvS1IAQ1R/?igsh=ODZ3aG00ZG16ZG52" },
  { caption: "Se você sente que seu dinheiro esta desorganizado, comece com algo simples.", link: "https://www.instagram.com/reel/DXFg6gVB-Wh/?igsh=OWM3aWFiemJmdWx2" },
  { caption: "O governo lançou um novo investimento e em um único dia captou R$86 milhões.", link: "https://www.instagram.com/p/DYkP6yIkXzj/?igsh=NTc0MXllOXU3a2w1" },
];
