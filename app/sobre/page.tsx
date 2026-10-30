import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ColumnDivider } from "@/components/ColumnDivider";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o Miorando Castanho & Schons de Lima Advogados, escritório de Direito Previdenciário com sede em Erechim - RS e foco em auxílio-acidente.",
};

const VALUES = [
  {
    title: "Conhecimento técnico",
    text: "Estudo constante da legislação previdenciária e da jurisprudência como base de cada orientação dada ao cliente.",
  },
  {
    title: "Proximidade",
    text: "Comunicação clara e acessível, sem juridiquês, com retorno sobre cada etapa do processo.",
  },
  {
    title: "Ética e transparência",
    text: "Atuação pautada pelo Código de Ética e Disciplina da OAB, com sigilo e honestidade sobre as chances de cada caso.",
  },
  {
    title: "Cuidado com as pessoas",
    text: "Quem procura o INSS geralmente passa por um momento difícil. Tratamos cada caso com respeito e atenção.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-brand-900/60 py-20">
        <Container>
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
            Sobre o escritório
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-offwhite sm:text-5xl">
            Advocacia previdenciária feita com técnica e proximidade
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex justify-center">
          <Image
            src="/logo-light.png"
            alt={SITE.fullName}
            width={772}
            height={254}
            className="w-72 sm:w-96"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Quem somos" title="Um escritório dedicado ao segurado" />
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-offwhite-muted">
              <p>
                O {SITE.fullName} é um escritório especializado em Direito
                Previdenciário, com sede em Erechim, no Rio Grande do Sul.
              </p>
              <p>
                Nosso foco está nos benefícios por incapacidade —
                especialmente o auxílio-acidente, um direito pouco
                conhecido por quem ficou com sequela após um acidente. Com
                atendimento online, acompanhamos segurados de diferentes
                regiões, do primeiro contato até a conclusão do caso.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Missão" title="O que nos move" />
            <p className="mt-6 font-sans text-base leading-relaxed text-offwhite-muted">
              Garantir que cada segurado conheça seus direitos perante o INSS
              e receba uma orientação jurídica séria, clara e comprometida
              para buscar o benefício a que tem direito.
            </p>
          </div>
        </Container>
      </section>

      <ColumnDivider />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Valores"
            title="Princípios que orientam nossa atuação"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-sm border border-brand-900/50 bg-ink-800/60 p-8"
              >
                <h3 className="font-serif text-lg text-brand-300">
                  {value.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-offwhite-muted">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-brand-900/60 bg-ink-800/40 py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Abordagem" title="Como trabalhamos" />
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-offwhite-muted">
            <p>
              Cada atendimento começa com uma análise cuidadosa do histórico
              do segurado: o acidente ou a doença, os laudos médicos, os
              afastamentos e as contribuições ao INSS. Assim, a orientação
              parte da realidade de cada pessoa.
            </p>
            <p>
              Quando há direito a ser buscado, conduzimos o pedido
              administrativo no INSS ou a ação judicial, mantendo o cliente
              informado sobre cada etapa — tudo de forma online, sem que ele
              precise se deslocar.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
