import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ColumnDivider } from "@/components/ColumnDivider";
import { CTASection } from "@/components/CTASection";
import { ARTICLES } from "@/content/articles";

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Artigos sobre auxílio-acidente, benefícios do INSS e Direito Previdenciário, escritos pela equipe do Miorando Castanho & Schons de Lima Advogados.",
};

export default function ArtigosPage() {
  return (
    <>
      <section className="border-b border-brand-900/60 py-20">
        <Container>
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
            Artigos
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-offwhite sm:text-5xl">
            Conteúdos sobre Direito Previdenciário e seus direitos perante o INSS
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-offwhite-muted">
            Um espaço dedicado a artigos técnicos de caráter informativo,
            assinados pela nossa equipe.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          {ARTICLES.length === 0 ? (
            <div className="mx-auto max-w-md py-8 text-center">
              <ColumnDivider className="mb-8" />
              <h2 className="font-serif text-2xl text-offwhite">
                Novos artigos em breve
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-offwhite-muted">
                Estamos preparando publicações técnicas sobre temas de
                Direito Previdenciário. Volte em breve para conferir.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ARTICLES.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-sm border border-brand-900/50 bg-ink-800/60 p-8"
                >
                  <time
                    dateTime={article.date}
                    className="font-sans text-xs uppercase tracking-wider text-brand-500"
                  >
                    {new Date(article.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-3 font-serif text-xl text-offwhite">
                    {article.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-offwhite-muted">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
