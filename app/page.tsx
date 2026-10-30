import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AreaCard } from "@/components/AreaCard";
import { ColumnDivider } from "@/components/ColumnDivider";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/icons";
import { AREAS } from "@/content/areas";
import { TEAM_PHOTO } from "@/content/team";
import { SITE, whatsappHref } from "@/content/site";

const STATS = [
  { label: "Especialidade", value: "Direito Previdenciário" },
  { label: "Atendimento", value: "100% online" },
  { label: "Sede", value: "Erechim - RS" },
];

const AUXILIO_POINTS = [
  "Vale para acidente de qualquer natureza — no trabalho, no trânsito, em casa ou no lazer",
  "É uma indenização: pode ser recebido junto com o salário",
  "Não exige tempo mínimo de contribuição (carência)",
  "Corresponde a 50% do salário de benefício e é pago até a aposentadoria",
  "Pode gerar o pagamento de valores atrasados",
];

const WHO = [
  "Empregados com carteira assinada",
  "Empregados domésticos",
  "Trabalhadores avulsos",
  "Segurados especiais (trabalhadores rurais)",
];

const STEPS = [
  {
    title: "Primeiro contato",
    text: "Você conta o que aconteceu pelo WhatsApp, sem precisar sair de casa.",
  },
  {
    title: "Análise do caso",
    text: "Avaliamos documentos, laudos e histórico no INSS para verificar o direito.",
  },
  {
    title: "Pedido ou ação",
    text: "Conduzimos o requerimento no INSS ou a ação judicial, conforme o caso.",
  },
  {
    title: "Acompanhamento",
    text: "Você recebe atualizações sobre cada etapa até a conclusão.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-900/60">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-600/10 blur-3xl" />
        <Container className="relative py-24 sm:py-32">
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
            Direito Previdenciário · Auxílio-Acidente
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-offwhite sm:text-5xl lg:text-6xl">
            Ficou com sequela depois de um acidente? Entenda seu direito ao
            auxílio-acidente
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-offwhite-muted">
            O {SITE.fullName} atua em Direito Previdenciário, orientando
            segurados do INSS na busca pelos benefícios a que têm direito —
            com atendimento online e acompanhamento próximo em cada etapa.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href={whatsappHref()}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar pelo WhatsApp
            </ButtonLink>
            <ButtonLink href="#auxilio-acidente" variant="outline">
              O que é o auxílio-acidente
            </ButtonLink>
          </div>

          <dl className="mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-brand-900/60 pt-10 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-sans text-xs uppercase tracking-wider text-offwhite-muted">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-serif text-xl text-brand-300">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Auxílio-acidente */}
      <section id="auxilio-acidente" className="scroll-mt-24 py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div>
            <SectionHeading
              eyebrow="Nosso foco"
              title="O que é o auxílio-acidente"
              description="É um benefício pago pelo INSS ao segurado que, após um acidente, ficou com uma sequela permanente que reduz a sua capacidade para o trabalho que exercia. Muitas pessoas têm esse direito e não sabem — especialmente quem já recebeu auxílio-doença por causa de um acidente e voltou a trabalhar com alguma limitação."
            />
            <ul className="mt-8 space-y-3">
              {AUXILIO_POINTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-sm leading-relaxed text-offwhite-muted"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-brand-900/60 bg-ink-800/60 p-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
              Quem pode ter direito
            </p>
            <ul className="mt-6 space-y-4">
              {WHO.map((item) => (
                <li
                  key={item}
                  className="border-l border-brand-500/60 pl-4 font-serif text-lg text-offwhite"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-sans text-xs leading-relaxed text-offwhite-muted">
              Cada situação depende de análise individual da qualidade de
              segurado, do acidente e da sequela.
            </p>
            <ButtonLink
              href={whatsappHref()}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full"
            >
              Verificar meu caso
            </ButtonLink>
          </div>
        </Container>
      </section>

      <ColumnDivider />

      {/* Áreas de atuação */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Especialidades"
            title="Áreas de Atuação"
            description="Atuação em benefícios previdenciários e assistenciais, do pedido no INSS à ação judicial."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <AreaCard
                key={area.slug}
                area={area}
                href={`/areas-de-atuacao#${area.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Como funciona */}
      <section className="border-t border-brand-900/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="Atendimento"
            title="Como funciona"
            description="Todo o atendimento pode ser feito online, de onde você estiver."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="rounded-sm border border-brand-900/50 bg-ink-800/60 p-6"
              >
                <span className="font-serif text-3xl text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-lg text-offwhite">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-offwhite-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Equipe */}
      <section className="border-t border-brand-900/60 bg-ink-800/40 py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-sm border border-brand-500/30">
            <Image
              src={TEAM_PHOTO.src}
              alt={TEAM_PHOTO.alt}
              width={TEAM_PHOTO.width}
              height={TEAM_PHOTO.height}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Equipe"
              title="Quem cuida do seu caso"
              description="Uma equipe dedicada ao Direito Previdenciário, que conhece de perto as regras do INSS e acompanha cada cliente com atenção e transparência."
            />
            <ButtonLink href="/equipe" variant="ghost" className="mt-6 !px-0">
              Conhecer a equipe →
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
