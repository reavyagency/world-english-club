import { Star } from "lucide-react";
import { site } from "@/content/site";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { V2Section, Kicker, H2, Lead, V2Card, tone } from "./_ui";

/**
 * V2, Depoimentos em vídeo (navy).
 *
 * O vídeo é a prova mais forte que existe, então ele domina o card: player
 * limpo e legenda enxuta (nome + de onde saiu → aonde chegou).
 * Nomes/resultados são placeholders `[[ ]]` até termos os dados reais —
 * nunca inventar.
 */
export function Testimonials() {
  const { testimonials } = site;
  return (
    <V2Section id={testimonials.id} tone="navy">
      <Reveal>
        <div className="max-w-2xl">
          <Kicker tone="navy">Depoimentos</Kicker>
          <H2 tone="navy" className="mt-4 text-balance">
            {testimonials.title}
          </H2>
          <Lead tone="navy" className="mt-4">
            {testimonials.subtitle}
          </Lead>
        </div>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
        {testimonials.videos.map((t) => (
          <RevealItem key={t.name} className="h-full">
            <V2Card tone="navy" className="h-full">
              <figure className="flex h-full flex-col">
                <VideoPlayer
                  videoId={t.youtubeId}
                  label="depoimento"
                  aspect="16 / 9"
                />

                {/* Avaliação. Dourado é o "amarelo" desta versão e é legível
                    sobre navy (8,7:1). */}
                <div
                  className="mt-5 flex items-center gap-1 text-gold"
                  role="img"
                  aria-label="Avaliação: 5 de 5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" aria-hidden />
                  ))}
                </div>

                <figcaption className={`mt-4 border-t pt-4 text-sm ${tone.navy.border}`}>
                  <span className={`block font-semibold ${tone.navy.title}`}>
                    {t.name}
                  </span>
                  <span className={`mt-0.5 block ${tone.navy.muted}`}>{t.role}</span>
                </figcaption>
              </figure>
            </V2Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </V2Section>
  );
}
