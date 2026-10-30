import Image from "next/image";

/**
 * Moldura de retrato do time. Se `photo` for informado, exibe a foto real
 * (via next/image); caso contrário, cai num monograma discreto — útil
 * enquanto a foto de um novo integrante ainda não foi adicionada em
 * /public/team.
 */
export function PortraitFrame({
  name,
  photo,
  className = "",
}: {
  name: string;
  photo?: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 2)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-sm border border-brand-500/40 bg-gradient-to-b from-ink-700 to-ink-900 ${className}`}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 1024px) 320px, 60vw"
          className="object-cover"
          priority
        />
      ) : (
        <>
          <span className="absolute inset-4 border border-brand-500/20" />
          <span className="font-serif text-6xl text-brand-400/80">
            {initials}
          </span>
        </>
      )}
    </div>
  );
}
