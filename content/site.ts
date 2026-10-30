/**
 * Dados centrais do escritório.
 * Edite este arquivo para atualizar informações que aparecem em várias
 * páginas (Header, Footer, botão de WhatsApp, metadados de SEO etc.)
 * sem precisar alterar nenhum componente ou página.
 */

export const SITE = {
  name: "Miorando Castanho & Schons de Lima",
  fullName: "Miorando Castanho & Schons de Lima Advogados",
  shortTagline: "Advocacia Previdenciária",
  description:
    "Escritório de advocacia especializado em Direito Previdenciário, com foco em auxílio-acidente e benefícios por incapacidade. Sede em Erechim - RS e atendimento online.",

  // Trocar pelo domínio próprio quando houver.
  url: "https://miorandoeschons.vercel.app",

  // Contato
  whatsappNumber: "5554923670072",
  whatsappDisplay: "+55 54 92367-0072",
  whatsappDefaultMessage:
    "Olá, vim pelo site e gostaria de falar sobre o auxílio-acidente.",

  attendanceHours: "Atendimento online pelo WhatsApp",
  attendanceNote:
    "Sede em Erechim - RS, com atendimento online para segurados de todo o Brasil.",

  address: {
    street: "Rua Emílio Grando, 342",
    district: "Centro",
    city: "Erechim",
    state: "RS",
    zip: "99700-396",
  },

  // Preencher quando o escritório quiser exibir o registro na OAB.
  oab: "",

  social: {
    instagram: "https://www.instagram.com/miorandoeschons.adv/",
    instagramHandle: "@miorandoeschons.adv",
    linkedin: "",
  },
} as const;

export const addressLine = () => {
  const a = SITE.address;
  return `${a.street}, ${a.district}, ${a.city} - ${a.state}, ${a.zip}`;
};

export const mapsHref = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine())}`;

export const whatsappHref = (message: string = SITE.whatsappDefaultMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/equipe", label: "Equipe" },
  { href: "/artigos", label: "Artigos" },
  { href: "/contato", label: "Contato" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
] as const;
