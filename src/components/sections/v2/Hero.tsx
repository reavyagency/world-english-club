import { Star, Check, PlayCircle, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { V2Section, Kicker, Lead, CtaPrimary, CtaSecondary, tone } from "./_ui";

/**
 * V2, Hero (navy).
 *
 * Composição em dois tempos: a headline abre centralizada e ocupa a largura
 * toda (é a única peça grande da tela); abaixo, o argumento e os CTAs à
 * esquerda e o vídeo à direita. Separar a promessa da prova deixa a leitura
 * mais organizada do que espremer tudo numa coluna só.
 *
 * O dourado entra só no trecho que carrega a promessa concreta (o nível
 * A1 → B1), onde é legível (8,7:1 sobre navy).
 * Fundo: navy + UM glow dourado contido. Sem grade, sem noise, sem parallax.
 */

// Trecho da headline destacado em dourado (a copy continua vindo de site.ts).
const HIGHLIGHT = "intermediário (A1 → B1)";

function Headline({ title }: { title: string }) {
  const at = title.indexOf(HIGHLIGHT);
  if (at === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, at)}
      <span className="gold-metal-text">{HIGHLIGHT}</span>
      {title.slice(at + HIGHLIGHT.length)}
    </>
  );
}

export function Hero() {
  const { hero } = site;
  return (
    <V2Section
      id="top"
      tone="navy"
      className="overflow-hidden bg-[radial-gradient(55%_45%_at_50%_0%,rgba(212,175,55,0.14),transparent_70%)] pt-28"
    >
      {/* Textura tecnológica: malha de pontos dourados com máscara radial.
          Fica antes do conteúdo no DOM para o texto pintar por cima. */}
      <div className="tech-dots pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative">
        {/* Abertura centralizada: eyebrow + headline.
            `max-w-4xl` segura a headline em ~2 linhas no desktop e `text-balance`
            distribui as linhas de forma equilibrada. */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Kicker tone="navy">{hero.eyebrow}</Kicker>
          </Reveal>

          <Reveal delay={0.05}>
            <h1
              className={`mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.5rem] ${tone.navy.title}`}
            >
              <Headline title={hero.title} />
            </h1>
          </Reveal>
        </div>

        {/* Argumento + prova: texto à esquerda, vídeo à direita */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <Reveal delay={0.1}>
              <Lead tone="navy" className="max-w-xl">
                {hero.subtitle}
              </Lead>
            </Reveal>

            <Reveal delay={0.15}>
              <div
                className={`mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${tone.navy.muted}`}
              >
                <span className="flex items-center gap-0.5 text-gold" aria-hidden>
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
                <CtaPrimary href={hero.primaryCta.href} tone="navy">
                  {hero.primaryCta.label}
                  <ArrowRight size={18} aria-hidden />
                </CtaPrimary>
                <CtaSecondary href={hero.secondaryCta.href} tone="navy">
                  <PlayCircle size={18} aria-hidden className="text-gold" />
                  {hero.secondaryCta.label}
                </CtaSecondary>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <ul
                className={`mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm ${tone.navy.muted}`}
              >
                {hero.seals.map((seal) => (
                  <li key={seal} className="flex items-center gap-1.5">
                    <Check size={16} aria-hidden className="shrink-0 text-gold" />
                    {seal}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Mídia, emoldurada por hairline (elevação por superfície, sem sombra) */}
          <Reveal delay={0.15}>
            <div className={`overflow-hidden rounded-2xl border ${tone.navy.border}`}>
              <VideoPlayer
                videoId={hero.media.youtubeId}
                start={hero.media.start}
                label="vídeo do produto"
                aspect="16 / 9"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </V2Section>
  );
}
