import { Star, Check, PlayCircle, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

/**
 * V2, Hero editorial. Headline gigante alinhada à esquerda no topo, depois
 * split assimétrico: texto + CTAs à esquerda, mídia com glow dourado à direita.
 * Fundo com glow dourado (paleta distinta da v1).
 */
export function Hero() {
  const { hero } = site;
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-14 pb-16 sm:pt-20 sm:pb-24"
    >
      {/* Glow dourado de fundo */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(55% 45% at 12% 0%, color-mix(in oklab, var(--color-gold) 22%, transparent), transparent 70%), radial-gradient(45% 45% at 92% 10%, rgba(198,154,60,0.16), transparent 72%)",
        }}
      />
      <div className="bg-grid absolute inset-0 -z-10 opacity-40" aria-hidden />
      <div className="noise" aria-hidden />

      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/8 px-4 py-1.5 text-xs font-medium text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {hero.eyebrow}
          </span>
        </Reveal>

        {/* Headline gigante */}
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Fale inglês com confiança, do zero ao{" "}
            <span className="bg-linear-to-r from-gold via-gold-2 to-gold bg-clip-text text-transparent">
              intermediário (A1 → B1)
            </span>
            .
          </h1>
        </Reveal>

        {/* Split assimétrico */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
          {/* Coluna texto */}
          <div>
            <Reveal delay={0.1}>
              <p className="max-w-xl border-l-2 border-gold/40 pl-5 text-lg text-muted">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                <span className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="fill-current" />
                  ))}
                </span>
                <span>
                  {hero.socialProof.studentsLabel} · {hero.socialProof.ratingLabel}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold to-gold-2 px-7 py-3.5 text-base font-semibold text-neutral-950 shadow-[0_10px_40px_-8px_rgba(230,193,90,0.55)] transition-all hover:shadow-[0_14px_50px_-6px_rgba(230,193,90,0.7)] active:scale-[0.98]"
                >
                  {hero.primaryCta.label}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-gold/40 hover:bg-surface-2"
                >
                  <PlayCircle size={18} className="text-gold" />
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                {hero.seals.map((seal) => (
                  <li key={seal} className="flex items-center gap-1.5">
                    <Check size={16} className="text-gold" />
                    {seal}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Coluna mídia */}
          <Reveal delay={0.15} className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-[32px] blur-2xl"
              aria-hidden
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(230,193,90,0.30), rgba(198,154,60,0.16) 50%, rgba(230,193,90,0.24))",
              }}
            />
            <VideoPlayer
              videoId={site.hero.media.youtubeId}
              start={site.hero.media.start}
              label="vídeo do produto"
              aspect="16 / 9"
              className="shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
            />

            {/* Stats do hero como rail editorial sobreposto */}
            <dl className="mt-4 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-surface/70 backdrop-blur">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="px-4 py-3 text-center">
                  <dt className="font-display text-lg font-bold text-ink">
                    {stat.value}
                  </dt>
                  <dd className="mt-0.5 text-[0.7rem] leading-tight text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
