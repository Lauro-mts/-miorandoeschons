import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { AreaCard } from "@/components/AreaCard";
import { CTASection } from "@/components/CTASection";
import { AREAS } from "@/content/areas";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Auxílio-acidente, auxílio-doença, aposentadoria por invalidez, BPC/LOAS, revisão de benefícios e recursos e ações contra o INSS.",
};

export default function AreasDeAtuacaoPage() {
  return (
    <>
      <section className="border-b border-brand-900/60 py-20">
        <Container>
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
            Especialidades
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-offwhite sm:text-5xl">
            Áreas de Atuação
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-offwhite-muted">
            Atuação em benefícios previdenciários e assistenciais, com foco no
            auxílio-acidente — do pedido no INSS à ação judicial.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {AREAS.map((area) => (
              <AreaCard key={area.slug} area={area} detailed />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Não encontrou o que procurava?"
        description="Entre em contato para que possamos entender sua necessidade e orientar sobre a melhor forma de conduzi-la."
      />
    </>
  );
}
