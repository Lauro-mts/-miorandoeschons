import Link from "next/link";
import type { Area } from "@/content/areas";
import { AREA_ICONS } from "./icons";

export function AreaCard({
  area,
  href,
  detailed = false,
}: {
  area: Area;
  href?: string;
  detailed?: boolean;
}) {
  const Icon = AREA_ICONS[area.icon];

  const content = (
    <div
      id={detailed ? area.slug : undefined}
      className="group h-full scroll-mt-28 rounded-sm border border-brand-900/50 bg-ink-800/60 p-8 transition-colors duration-300 hover:border-brand-500/60"
    >
      <Icon className="h-8 w-8 text-brand-500 transition-colors group-hover:text-brand-300" />
      <h3 className="mt-6 font-serif text-xl text-offwhite">{area.title}</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-offwhite-muted">
        {detailed ? area.description : area.summary}
      </p>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
