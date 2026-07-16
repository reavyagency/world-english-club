import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/content/site";

/**
 * Página índice (apenas para desenvolvimento) — vitrine de seleção das
 * 3 versões de layout. Fundo: degradê azul-marinho → ciano em movimento
 * + mapa-múndi em linhas (baixa opacidade), aludindo ao "World" da marca.
 */

const versions = [
  {
    slug: "v1",
    title: "Versão 1",
    tagline: "Premium dark · referência",
    description: "Landing completa, layout escuro centralizado com acento azul.",
    theme: "from-blue-500 via-violet-500 to-cyan-400",
    ready: true,
  },
  {
    slug: "v2",
    title: "Versão 2",
    tagline: "Editorial split · dark teal",
    description: "Layout assimétrico, seções numeradas e rails horizontais.",
    theme: "from-emerald-400 via-teal-400 to-cyan-400",
    ready: true,
  },
  {
    slug: "v3",
    title: "Versão 3",
    tagline: "Bold light · warm",
    description: "Tema claro, tipografia oversized e bordas marcantes.",
    theme: "from-amber-400 via-orange-400 to-rose-300",
    ready: true,
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* ---------- Fundo animado ---------- */}
      <div className="wec-gradient absolute inset-0 -z-30" aria-hidden />

      {/* Auroras */}
      <div
        className="wec-aurora absolute -left-40 -top-40 -z-20 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.28),transparent_60%)] blur-3xl"
        aria-hidden
      />
      <div
        className="wec-aurora-slow absolute -right-40 top-1/3 -z-20 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.24),transparent_60%)] blur-3xl"
        aria-hidden
      />

      {/* Mapa-múndi em linhas */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/world-map.svg"
          alt=""
          className="wec-map w-[130%] max-w-none opacity-[0.14] mix-blend-screen sm:w-[100%]"
        />
      </div>

      {/* Grid tecnológico + vinheta */}
      <div className="bg-grid absolute inset-0 -z-10 opacity-30" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_-10%,transparent_40%,rgba(3,6,15,0.7)_100%)]"
        aria-hidden
      />
      <div className="noise" aria-hidden />

      {/* ---------- Conteúdo ---------- */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur">
            <Sparkles size={14} />
            {site.brand.name}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Selecione uma versão do{" "}
            <span className="text-gradient-brand">layout</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-slate-300/90 sm:text-lg">
            As três versões usam a mesma copy (definida em{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-cyan-100">
              src/content/site.ts
            </code>
            ). O que muda é apenas o layout de cada uma — escolha uma para
            visualizar.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {versions.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/${v.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07] hover:shadow-[0_30px_80px_-30px_rgba(34,211,238,0.55)]"
              >
                {/* Barra de tema no topo */}
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${v.theme}`}
                  aria-hidden
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    /{v.slug}
                  </span>
                  <span
                    className={`h-7 w-7 rounded-full bg-gradient-to-br ${v.theme} shadow-lg`}
                    aria-hidden
                  />
                </div>

                <h2 className="mt-5 font-display text-2xl font-bold text-white">
                  {v.title}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-300/80">
                  {v.tagline}
                </p>
                <p className="mt-3 text-sm text-slate-300/80">{v.description}</p>

                <span className="mt-auto flex items-center gap-1.5 pt-8 text-sm font-semibold text-slate-200 transition group-hover:gap-2.5 group-hover:text-white">
                  Abrir versão
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-xs text-slate-400/70">
          Tela de seleção (desenvolvimento) — será substituída pelo layout
          escolhido em produção.
        </p>
      </div>
    </main>
  );
}
