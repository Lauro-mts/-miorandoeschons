import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do Miorando Castanho & Schons de Lima Advogados, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    title: "1. Introdução",
    body: `Esta Política de Privacidade descreve como a ${SITE.fullName} coleta, utiliza, armazena e protege os dados pessoais dos visitantes e usuários deste site, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).`,
  },
  {
    title: "2. Dados coletados",
    body: "Coletamos os dados fornecidos voluntariamente quando você entra em contato pelo WhatsApp ou pelas redes sociais (como nome, telefone e informações sobre o seu caso), além de dados de navegação coletados por cookies, quando consentidos, para fins estatísticos e de melhoria da experiência de navegação.",
  },
  {
    title: "3. Finalidade do tratamento",
    body: "Os dados fornecidos no contato são utilizados exclusivamente para viabilizar o retorno ao interessado e a análise inicial de sua solicitação, não sendo compartilhados com terceiros para fins comerciais.",
  },
  {
    title: "4. Cookies",
    body: "Este site utiliza cookies essenciais ao seu funcionamento e, mediante consentimento, cookies de análise para compreender de forma agregada como o site é utilizado. Você pode gerenciar suas preferências de cookies a qualquer momento nas configurações do seu navegador.",
  },
  {
    title: "5. Compartilhamento de dados",
    body: "Os dados pessoais coletados não são vendidos ou cedidos a terceiros. Poderão ser compartilhados apenas com prestadores de serviço estritamente necessários à operação do site e do atendimento (ex.: provedores de e-mail e hospedagem), sempre resguardado o sigilo profissional aplicável à advocacia.",
  },
  {
    title: "6. Direitos do titular",
    body: "Nos termos da LGPD, você pode solicitar a qualquer momento a confirmação da existência de tratamento, o acesso, a correção, a anonimização, o bloqueio, a eliminação ou a portabilidade dos seus dados pessoais, entrando em contato pelos canais informados nesta página.",
  },
  {
    title: "7. Segurança",
    body: "Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão.",
  },
  {
    title: "8. Alterações desta política",
    body: "Esta Política de Privacidade pode ser atualizada periodicamente para refletir melhorias ou mudanças legais. Recomendamos a consulta ocasional desta página.",
  },
  {
    title: "9. Contato",
    body: `Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato pelo WhatsApp ${SITE.whatsappDisplay}.`,
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
          LGPD
        </p>
        <h1 className="font-serif text-4xl leading-tight text-offwhite sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 font-sans text-sm text-offwhite-muted">
          Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
        </p>

        <div className="mt-12 space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl text-brand-300">
                {section.title}
              </h2>
              <p className="mt-3 font-sans text-base leading-relaxed text-offwhite-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
