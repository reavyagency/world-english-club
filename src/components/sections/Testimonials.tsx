import { Star } from "lucide-react";
import { site } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Seção 7, Depoimentos em vídeo.
 *
 * As estrelas são um selo de avaliação: rotuladas para leitor de tela e
 * decorativas no visual. Elas afirmam uma nota, então precisam refletir a
 * avaliação real de cada aluno.
 */
export function Testimonials() {
  const { testimonials } = site;
  return (
    <Section id={testimonials.id} className="bg-surface/30">
      <SectionHeading
        eyebrow="Depoimentos"
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.videos.map((t) => (
          <RevealItem key={t.name} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5">
              <VideoPlayer videoId={t.youtubeId} label="depoimento" aspect="16 / 9" />

              {/* Avaliação */}
              <div
                className="mt-5 flex items-center gap-1 text-amber-400"
                role="img"
                aria-label="Avaliação: 5 de 5 estrelas"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-current" aria-hidden />
                ))}
              </div>

              <figcaption className="mt-3 text-sm">
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-muted">{t.role}</span>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
