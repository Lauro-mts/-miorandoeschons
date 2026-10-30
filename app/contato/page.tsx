import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { ColumnDivider } from "@/components/ColumnDivider";
import { ClockIcon, InstagramIcon, MapIcon, WhatsAppIcon } from "@/components/icons";
import { SITE, addressLine, mapsHref, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Miorando Castanho & Schons de Lima Advogados pelo WhatsApp. Sede em Erechim - RS e atendimento online.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="border-b border-brand-900/60 py-20">
        <Container>
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
            Contato
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-offwhite sm:text-5xl">
            Fale com a nossa equipe
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-offwhite-muted">
            Estamos à disposição para entender sua necessidade e orientar os
            próximos passos, diretamente pelo WhatsApp.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-sm border border-brand-900/50 bg-ink-800/60 p-6 transition-colors hover:border-brand-500/60"
            >
              <WhatsAppIcon className="h-6 w-6 shrink-0 text-brand-400" />
              <div>
                <p className="font-serif text-lg text-offwhite">WhatsApp</p>
                <p className="mt-1 font-sans text-sm text-offwhite-muted">
                  {SITE.whatsappDisplay}
                </p>
              </div>
            </a>

            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-sm border border-brand-900/50 bg-ink-800/60 p-6 transition-colors hover:border-brand-500/60"
            >
              <InstagramIcon className="h-6 w-6 shrink-0 text-brand-400" />
              <div>
                <p className="font-serif text-lg text-offwhite">Instagram</p>
                <p className="mt-1 font-sans text-sm text-offwhite-muted">
                  {SITE.social.instagramHandle}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-sm border border-brand-900/50 bg-ink-800/60 p-6">
              <ClockIcon className="h-6 w-6 shrink-0 text-brand-400" />
              <div>
                <p className="font-serif text-lg text-offwhite">
                  Horário de Atendimento
                </p>
                <p className="mt-1 font-sans text-sm text-offwhite-muted">
                  {SITE.attendanceHours}
                </p>
              </div>
            </div>

            <a
              href={mapsHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-sm border border-brand-900/50 bg-ink-800/60 p-6 transition-colors hover:border-brand-500/60"
            >
              <MapIcon className="h-6 w-6 shrink-0 text-brand-400" />
              <div>
                <p className="font-serif text-lg text-offwhite">Endereço</p>
                <p className="mt-1 font-sans text-sm text-offwhite-muted">
                  {addressLine()}
                </p>
                <p className="mt-2 font-sans text-xs text-offwhite-muted/80">
                  {SITE.attendanceNote}
                </p>
              </div>
            </a>
          </div>
        </Container>
      </section>

      <section className="border-t border-brand-900/60 bg-ink-800/40 py-20">
        <Container className="text-center">
          <ColumnDivider className="mb-8" />
          <h2 className="mx-auto max-w-xl font-serif text-3xl text-offwhite sm:text-4xl">
            Fale agora pelo WhatsApp
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-offwhite-muted">
            É o canal mais rápido para falar com a nossa equipe e entender
            os próximos passos.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink
              href={whatsappHref()}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar pelo WhatsApp
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
