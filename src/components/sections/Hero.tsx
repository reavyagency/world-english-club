import { Star, Check, PlayCircle } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

/** Seção 1 — Hero. Resultado comunicado em 3 segundos, apenas 2 CTAs. */
export function Hero() {
  const { hero } = site;
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Fundo mesh + grid tecnológico */}
      <div className="bg-mesh absolute inset-0 -z-10" aria-hidden />
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="noise" aria-hidden />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Fale inglês com confiança — do zero ao{" "}
              <span className="text-gradient-brand">intermediário (A1 → B1)</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-muted">{hero.subtitle}</p>
          </Reveal>

          {/* Prova social */}
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span className="flex items-center gap-1 text-accent">
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
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
                <PlayCircle size={18} />
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          {/* Selos */}
          <Reveal delay={0.25}>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {hero.seals.map((seal) => (
                <li key={seal} className="flex items-center gap-1.5">
                  <Check size={16} className="text-success" />
                  {seal}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Mídia */}
        <Reveal delay={0.15} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-tr from-brand/20 via-brand-2/10 to-accent/20 blur-2xl" aria-hidden />
          <MediaPlaceholder
            caption={hero.media.caption}
            aspect={hero.media.aspect}
            icon={PlayCircle}
          />
        </Reveal>
      </div>
    </section>
  );
}
