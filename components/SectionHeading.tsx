export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl ${
          light ? "text-offwhite" : "text-offwhite"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-sans text-base leading-relaxed text-offwhite-muted">
          {description}
        </p>
      )}
    </div>
  );
}
