"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/content/site";

const STORAGE_KEY = "mcsl-cookie-consent";

/**
 * Botão flutuante de WhatsApp e aviso de cookies, empilhados em um único
 * contêiner fixo (flex-col, fluxo normal) em vez de dois elementos `fixed`
 * independentes. Assim o botão de WhatsApp nunca fica coberto pelo banner
 * de cookies — ele é sempre posicionado logo acima, qualquer que seja a
 * altura que o banner assuma na tela (uma linha no desktop, várias no
 * mobile).
 */
export function FloatingOverlay() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setShowCookieBanner(true);
    } catch {
      // localStorage indisponível (ex.: navegação privada) — exibe o aviso mesmo assim
      setShowCookieBanner(true);
    }
  }, []);

  function acceptCookies() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignora silenciosamente se o armazenamento não estiver disponível
    }
    setShowCookieBanner(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-end">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o escritório pelo WhatsApp"
        className="m-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-105 hover:bg-[#1ebe5d] sm:m-8"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {showCookieBanner && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className="w-full border-t border-brand-900/60 bg-ink-800/98 px-6 py-5 backdrop-blur"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-offwhite-muted">
              Utilizamos cookies essenciais para o funcionamento do site e,
              com seu consentimento, cookies de análise para melhorar sua
              experiência. Saiba mais em nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-brand-300 underline underline-offset-2"
              >
                Política de Privacidade
              </Link>
              .
            </p>
            <Button
              variant="primary"
              className="shrink-0"
              type="button"
              onClick={acceptCookies}
            >
              Aceitar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
