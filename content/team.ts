/**
 * Equipe do escritório.
 * `TEAM_PHOTO` é a foto em grupo exibida na Home e em /equipe.
 * `PARTNERS` recebe o perfil individual de cada sócio. Enquanto a lista
 * estiver vazia, a página /equipe mostra apenas a foto em grupo.
 * Fotos individuais vão em /public/team (ex.: "/team/nome-sobrenome.jpg").
 */

export const TEAM_PHOTO = {
  src: "/team/equipe.jpg",
  width: 1600,
  height: 1350,
  alt: "Sócios do escritório Miorando Castanho & Schons de Lima Advogados",
} as const;

export type Partner = {
  name: string;
  role: string;
  oab?: string;
  photo?: string;
  bio: string[];
  education: string[];
};

export const PARTNERS: Partner[] = [];
