import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { ColumnDivider } from "@/components/ColumnDivider";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="text-center">
        <ColumnDivider className="mb-8" />
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
          Erro 404
        </p>
        <h1 className="mt-4 font-serif text-4xl text-offwhite">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-md font-sans text-base text-offwhite-muted">
          O endereço acessado não existe ou foi movido.
        </p>
        <ButtonLink href="/" variant="primary" className="mt-8">
          Voltar ao início
        </ButtonLink>
      </Container>
    </section>
  );
}
