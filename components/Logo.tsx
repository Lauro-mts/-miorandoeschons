/**
 * Logo oficial do escritório, com fundo removido.
 * - /public/logo-light.png: texto branco + "Advogados" em vermelho (fundos escuros, usada no site)
 * - /public/logo-dark.png: texto grafite + vermelho (fundos claros)
 * - /public/logo-white.png: toda branca (fundos vermelhos)
 */
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/content/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label={`${SITE.fullName} — página inicial`}
    >
      <Image
        src="/logo-light.png"
        alt={SITE.fullName}
        width={772}
        height={254}
        priority
        className="h-12 w-auto shrink-0 transition-opacity duration-300 group-hover:opacity-90 sm:h-14"
      />
    </Link>
  );
}
