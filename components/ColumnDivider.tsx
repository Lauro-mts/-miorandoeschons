/**
 * Divisor decorativo discreto, com o símbolo de parágrafo (§) do
 * Direito. Usado entre seções para reforçar a identidade sem exagero.
 */
export function ColumnDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 text-brand-500/60 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-brand-line" />
      <span className="font-serif text-lg">§</span>
      <span className="h-px w-16 bg-brand-line" />
    </div>
  );
}
