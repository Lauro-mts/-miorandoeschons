"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { CloseIcon, MenuIcon } from "./icons";
import { NAV_LINKS, whatsappHref } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Fecha o menu mobile sempre que a rota muda.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-900/60 bg-ink-900/90 backdrop-blur">
      <Container className="flex h-20 items-center sm:h-24 justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm uppercase tracking-wider transition-colors ${
                  active
                    ? "text-brand-400"
                    : "text-offwhite-muted hover:text-brand-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href={whatsappHref()}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale no WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-brand-300 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-brand-900/60 bg-ink-900 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-3 font-sans text-sm uppercase tracking-wider text-offwhite-muted hover:bg-ink-700 hover:text-brand-300"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href={whatsappHref()}
              variant="primary"
              className="mt-3 w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale no WhatsApp
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
