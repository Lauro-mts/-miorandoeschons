import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PortraitFrame } from "@/components/PortraitFrame";
import { CTASection } from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";
import { PARTNERS, TEAM_PHOTO } from "@/content/team";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Conheça a equipe do Miorando Castanho & Schons de Lima Advogados, escritório especializado em Direito Previdenciário.",
};

export default function EquipePage() {
  return (
    <>
      <section className="border-b border-brand-900/60 py-20">
        <Container>
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
            Nossa Equipe
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-offwhite sm:text-5xl">
            Quem conduz o escritório
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div className="overflow-hidden rounded-sm border border-brand-500/30">
            <Image
              src={TEAM_PHOTO.src}
              alt={TEAM_PHOTO.alt}
              width={TEAM_PHOTO.width}
              height={TEAM_PHOTO.height}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="space-y-4 font-sans text-base leading-relaxed text-offwhite-muted">
            <p>
              O {SITE.fullName} reúne advogados dedicados ao Direito
              Previdenciário, com atuação voltada aos benefícios por
              incapacidade e, em especial, ao auxílio-acidente.
            </p>
            <p>
              Cada caso é acompanhado de perto pelos sócios, do primeiro
              contato à conclusão, com comunicação direta e transparente
              com o cliente.
            </p>
          </div>
        </Container>
      </section>

      {PARTNERS.map((partner) => (
        <section key={partner.name} className="border-t border-brand-900/60 py-20">
          <Container className="grid gap-12 lg:grid-cols-[minmax(0,320px),1fr] lg:gap-16">
            <PortraitFrame name={partner.name} photo={partner.photo} />
            <div>
              <h2 className="font-serif text-3xl text-offwhite">{partner.name}</h2>
              <p className="mt-1 font-sans text-sm uppercase tracking-wider text-brand-500">
                {partner.role}
                {partner.oab ? ` · ${partner.oab}` : ""}
              </p>
              <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-offwhite-muted">
                {partner.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {partner.education.length > 0 && (
                <div className="mt-10">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
                    Formação
                  </p>
                  <ul className="mt-4 space-y-3">
                    {partner.education.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-sans text-sm text-offwhite-muted"
                      >
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Container>
        </section>
      ))}

      <CTASection />
    </>
  );
}
