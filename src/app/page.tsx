import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";

/**
 * Página índice (apenas para desenvolvimento), vitrine de seleção das
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

      {/* Auroras, vários focos de azul em movimento */}
      <div
        className="wec-aurora absolute -left-40 -top-40 -z-20 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.34),transparent_62%)] blur-3xl"
        aria-hidden
      />
      <div
        className="wec-aurora-slow absolute -right-48 top-1/4 -z-20 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.32),transparent_62%)] blur-3xl"
        aria-hidden
      />
      <div
        className="wec-aurora-b absolute -bottom-40 left-1/4 -z-20 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.28),transparent_62%)] blur-3xl"
        aria-hidden
      />
      <div
        className="wec-aurora-c absolute right-1/4 bottom-0 -z-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.30),transparent_62%)] blur-3xl"
        aria-hidden
      />

      {/* Mapa-múndi PONTILHADO (continentes em pontos, baixa opacidade, com deriva) */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center" aria-hidden>
        <div className="wec-dotmap wec-map aspect-[1010/666] w-[140%] max-w-none opacity-30 sm:w-[108%]" />
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
        <div className="grid items-center gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur">
            <Sparkles size={14} />
            {site.brand.name}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Selecione uma
            <br />
            versão do{" "}
            <span className="bg-linear-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              layout
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-slate-300/90 sm:text-lg">
            As três versões usam a mesma copy (definida em{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-cyan-100">
              src/content/site.ts
            </code>
            ). O que muda é apenas o layout de cada uma, escolha uma para
            visualizar.
          </p>
          </div>

          {/* Logo do cliente (alinhada com o último card) */}
          <div className="relative hidden justify-center lg:flex">
            <div
              className="absolute inset-0 -z-10 m-auto h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(148,197,255,0.16),transparent_70%)] blur-2xl"
              aria-hidden
            />
            <Image
              src={brand.assets.logoStackedDark}
              alt={brand.name}
              width={1293}
              height={1251}
              priority
              className="w-full max-w-[230px] drop-shadow-[0_20px_50px_rgba(2,8,20,0.6)]"
            />
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {versions.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/${v.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/8 p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-white/10 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/12 hover:shadow-[0_30px_80px_-24px_rgba(56,189,248,0.6)]"
              >
                {/* Brilho superior (vidro) */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white/12 to-transparent"
                  aria-hidden
                />
                {/* Barra de tema no topo */}
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${v.theme}`}
                  aria-hidden
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    /{v.slug}
                  </span>
                  <span
                    className={`h-7 w-7 rounded-full bg-linear-to-br ${v.theme} shadow-lg`}
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
          Tela de seleção (desenvolvimento), será substituída pelo layout
          escolhido em produção.
        </p>
      </div>
    </main>
  );
}
