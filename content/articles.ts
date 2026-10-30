/**
 * Base de artigos do fundador.
 * Adicione novos objetos a este array para publicá-los em /artigos.
 * Nenhum componente precisa ser alterado ao adicionar conteúdo aqui.
 */

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // formato ISO, ex.: "2026-03-01"
  author?: string;
};

// Lista vazia por padrão — a página /artigos exibe um estado de
// "em breve" enquanto não houver publicações cadastradas aqui.
export const ARTICLES: Article[] = [];
