import Link from "next/link";
import { site } from "@/content/site";

/**
 * Página índice (apenas para desenvolvimento).
 *
 * Serve como "switcher" entre as 3 versões de layout.
 * Em produção, cada domínio apontará para /v1, /v2 ou /v3.
 */

const versions = [
  {
    slug: "v1",
    title: "Versão 1",
    description: "Layout da primeira versão.",
  },
  {
    slug: "v2",
    title: "Versão 2",
    description: "Layout da segunda versão.",
  },
  {
    slug: "v3",
    title: "Versão 3",
    description: "Layout da terceira versão.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
        {site.brand.name}
      </p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
        Selecione uma versão do layout
      </h1>
      <p className="mt-3 max-w-xl text-neutral-500">
        As três versões usam a mesma copy (definida em{" "}
        <code className="rounded bg-black/5 px-1.5 py-0.5 text-sm dark:bg-white/10">
          src/content/site.ts
        </code>
        ). O que muda é apenas o layout de cada uma.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {versions.map((v) => (
          <li key={v.slug}>
            <Link
              href={`/${v.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-black/10 p-6 transition hover:border-black/30 hover:shadow-lg dark:border-white/15 dark:hover:border-white/40"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                /{v.slug}
              </span>
              <span className="mt-2 text-xl font-semibold">{v.title}</span>
              <span className="mt-1 text-sm text-neutral-500">
                {v.description}
              </span>
              <span className="mt-auto pt-6 text-sm font-medium text-neutral-400 transition group-hover:translate-x-1 group-hover:text-current">
                Abrir →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
