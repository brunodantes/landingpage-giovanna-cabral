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

export type Episode = {
  num: string;
  title: string;
  guest: string;
  length: string;
};

export const episodes: Episode[] = [
  {
    num: "42",
    title: "Como voltar a ler depois de uma pausa longa",
    guest: "com Helena Braga",
    length: "38 min",
  },
  {
    num: "41",
    title: "Montando uma estante que faz sentido",
    guest: "episódio solo",
    length: "24 min",
  },
  {
    num: "40",
    title: "Livros que a gente abandona (e tudo bem)",
    guest: "com Clara Nunes",
    length: "45 min",
  },
  {
    num: "39",
    title: "Rotina de manhã sem culpa",
    guest: "com Bruna Teixeira",
    length: "31 min",
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
};

export const products: Product[] = [
  { name: "Marcador de páginas", category: "Papelaria", price: "R$ 29" },
  { name: "Luminária de leitura", category: "Casa", price: "R$ 149" },
  { name: "Caderno de anotações", category: "Papelaria", price: "R$ 68" },
  { name: "Chá de camomila", category: "Rotina", price: "R$ 42" },
];

export type InstagramPost = {
  caption: string;
};

export const instagramPosts: InstagramPost[] = [
  { caption: "leituras de agosto" },
  { caption: "manhã de domingo" },
  { caption: "chegou na estante" },
  { caption: "trechos que anotei" },
  { caption: "bastidores do podcast" },
  { caption: "meu cantinho" },
];
