import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { ClockIcon, InstagramIcon, MapIcon, WhatsAppIcon } from "./icons";
import { AREAS } from "@/content/areas";
import {
  FOOTER_LEGAL_LINKS,
  NAV_LINKS,
  SITE,
  addressLine,
  mapsHref,
  whatsappHref,
} from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-900/60 bg-ink-900">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-offwhite-muted">
            {SITE.description}
          </p>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-brand-500">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-offwhite-muted transition-colors hover:text-brand-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-brand-500">
            Áreas de Atuação
          </h3>
          <ul className="mt-4 space-y-2">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas-de-atuacao#${area.slug}`}
                  className="font-sans text-sm text-offwhite-muted transition-colors hover:text-brand-300"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-brand-500">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 font-sans text-sm text-offwhite-muted">
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-brand-300"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-brand-500" />
                {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-brand-300"
              >
                <InstagramIcon className="h-4 w-4 shrink-0 text-brand-500" />
                {SITE.social.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={mapsHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 transition-colors hover:text-brand-300"
              >
                <MapIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>{addressLine()}</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>{SITE.attendanceHours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-brand-900/60">
        <Container className="flex flex-col gap-3 py-6 text-xs text-offwhite-muted/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.fullName}.{SITE.oab ? ` ${SITE.oab}.` : ""} Todos
            os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-brand-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="pb-8 pt-0">
          <p className="max-w-3xl font-sans text-[11px] leading-relaxed text-offwhite-muted/60">
            Este site tem caráter meramente informativo, em conformidade com
            o Código de Ética e Disciplina da OAB e o Provimento nº
            205/2021, não constituindo publicidade mercantilista ou promessa
            de resultado. O conteúdo aqui apresentado não substitui a
            consulta a um advogado para análise de casos concretos.
          </p>
        </Container>
      </div>
    </footer>
  );
}
