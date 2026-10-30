# Miorando Castanho & Schons de Lima Advogados

Site institucional do escritório, especializado em Direito Previdenciário
com foco em auxílio-acidente. Sede em Erechim - RS, atendimento online.

Feito com **Next.js 15 (App Router)**, **TypeScript** e **Tailwind CSS**
(base duplicada do site da SigmaTax).

## Onde editar

- `content/site.ts`: nome, WhatsApp, endereço, Instagram, OAB e URL
- `content/areas.ts`: áreas de atuação
- `content/team.ts`: foto da equipe e perfis dos sócios (`PARTNERS`)
- `content/articles.ts`: artigos (a página mostra "em breve" enquanto estiver vazia)
- `tailwind.config.ts`: cores (`ink` = grafite, `brand` = vermelho da logo)
- `public/`: logos (`logo-light.png` para fundo escuro, `logo-dark.png` para fundo claro, `logo-white.png` toda branca) e fotos em `public/team/`

## Rodar localmente

```bash
npm install
npm run dev
```
