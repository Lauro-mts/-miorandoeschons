import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { ColumnDivider } from "./ColumnDivider";
import { whatsappHref } from "@/content/site";

export function CTASection({
  title = "Fale com nossa equipe",
  description = "Conte o seu caso pelo WhatsApp. Vamos analisar a sua situação e explicar os próximos passos.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-brand-900/60 bg-ink-800/40 py-20">
      <Container className="text-center">
        <ColumnDivider className="mb-8" />
        <h2 className="mx-auto max-w-2xl font-serif text-3xl text-offwhite sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-offwhite-muted">
          {description}
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
  );
}
