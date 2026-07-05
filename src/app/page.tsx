import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

/**
 * Página índice (apenas para desenvolvimento).
 *
 * Switcher entre as 3 versões de layout. Em produção, cada domínio
 * apontará para /v1, /v2 ou /v3.
 */

const versions = [
  {
    slug: "v1",
    title: "Versão 1",
    description: "Landing premium completa (layout de referência).",
    ready: true,
  },
  {
    slug: "v2",
    title: "Versão 2",
    description: "Layout alternativo — dark/esmeralda (a refinar).",
    ready: false,
  },
  {
    slug: "v3",
    title: "Versão 3",
    description: "Layout alternativo — claro/âmbar (a refinar).",
    ready: false,
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {site.brand.name}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
        Selecione uma versão do layout
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        As três versões usam a mesma copy (definida em{" "}
        <code className="rounded bg-surface-2 px-1.5 py-0.5 text-sm">
          src/content/site.ts
        </code>
        ). O que muda é apenas o layout de cada uma.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {versions.map((v) => (
          <li key={v.slug}>
            <Link
              href={`/${v.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-ink/30 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)]"
            >
              <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                /{v.slug}
                {v.ready ? (
                  <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] tracking-normal text-success">
                    pronta
                  </span>
                ) : null}
              </span>
              <span className="mt-2 font-display text-xl font-semibold">
                {v.title}
              </span>
              <span className="mt-1 text-sm text-muted">{v.description}</span>
              <span className="mt-auto flex items-center gap-1 pt-6 text-sm font-medium text-muted transition group-hover:translate-x-1 group-hover:text-ink">
                Abrir <ArrowRight size={16} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
