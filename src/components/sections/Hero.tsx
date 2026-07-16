import { Star, Check, PlayCircle } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

/**
 * Seção 1, Hero. Resultado comunicado em 3 segundos, apenas 2 CTAs.
 *
 * Composição em dois tempos: a headline abre centralizada e ocupa a largura
 * toda (é a única peça grande da tela); abaixo, o argumento e os CTAs à
 * esquerda e o vídeo à direita. Separar a promessa da prova organiza melhor
 * a leitura do que espremer tudo numa coluna só.
 */
export function Hero() {
  const { hero } = site;
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Fundo: o mesmo da tela de seleção de versões — degradê azul animado,
          auroras em movimento e o mapa-múndi pontilhado (alusão ao "World").
          As classes vivem em globals.css e são compartilhadas com o índice. */}
      <div className="wec-gradient-deep absolute inset-0 -z-30" aria-hidden />

      {/* Auroras em intensidade reduzida: na tela de seleção elas podem brilhar,
          aqui precisam ceder espaço para a headline. */}
      <div
        className="wec-aurora absolute -left-40 -top-40 -z-20 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_62%)] blur-3xl"
        aria-hidden
      />
      <div
        className="wec-aurora-slow absolute -right-48 top-1/4 -z-20 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_62%)] blur-3xl"
        aria-hidden
      />
      <div
        className="wec-aurora-b absolute -bottom-40 left-1/4 -z-20 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_62%)] blur-3xl"
        aria-hidden
      />
      <div
        className="wec-aurora-c absolute right-1/4 bottom-0 -z-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.16),transparent_62%)] blur-3xl"
        aria-hidden
      />

      {/* Mapa-múndi pontilhado, com deriva lenta */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center" aria-hidden>
        <div className="wec-dotmap wec-map aspect-[1010/666] w-[140%] max-w-none opacity-30 sm:w-[108%]" />
      </div>

      {/* Grade tecnológica + vinheta + grão */}
      <div className="bg-grid absolute inset-0 -z-10 opacity-25" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_-10%,transparent_40%,rgba(3,6,15,0.7)_100%)]"
        aria-hidden
      />
      {/* Véu atrás da headline: garante o contraste do texto em degradê mesmo
          quando a parada mais clara do fundo passa por trás dele. */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_45%_at_50%_16%,rgba(3,7,15,0.55),transparent_72%)]"
        aria-hidden
      />
      <div className="noise" aria-hidden />

      <div className="mx-auto max-w-6xl">
        {/* Abertura centralizada: eyebrow + headline.
            `max-w-4xl` segura a headline em ~2 linhas no desktop e `text-balance`
            distribui as linhas de forma equilibrada. */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
              Fale inglês com confiança, do zero ao{" "}
              <span className="text-gradient-brand">intermediário (A1 → B1)</span>.
            </h1>
          </Reveal>
        </div>

        {/* Argumento + prova: texto à esquerda, vídeo à direita */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg text-muted">{hero.subtitle}</p>
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
            <VideoPlayer
              videoId={site.hero.media.youtubeId}
              start={site.hero.media.start}
              label="vídeo do produto"
              aspect="16 / 9"
              className="shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
