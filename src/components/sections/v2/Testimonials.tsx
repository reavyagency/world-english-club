import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialHeading } from "./_shared";

/**
 * V2, Depoimentos em vídeo. Cada item é um player limpo (igual ao do hero)
 * com legenda: nome em destaque + role. Nomes/resultados são placeholders
 * `[[ ]]` até termos os dados reais, nunca inventar.
 */
export function Testimonials() {
  const { testimonials } = site;
  return (
    <Section id={testimonials.id} className="bg-surface/30">
      <EditorialHeading
        number="05"
        eyebrow="Depoimentos"
        title={testimonials.title}
        subtitle="Resultados reais de quem seguiu a trilha guiada da WEC."
      />

      <Reveal delay={0.05}>
        <div
          className="mt-10 grid gap-6 sm:grid-cols-2"
          role="list"
          aria-label="Depoimentos de alunos"
        >
          {testimonials.videos.map((t) => (
            <figure
              key={t.name}
              role="listitem"
              className="flex flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-gold/40"
            >
              <VideoPlayer
                videoId={t.youtubeId}
                label="depoimento"
                aspect="16 / 9"
              />

              <figcaption className="mt-5 border-t border-line pt-5 text-sm">
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="mt-0.5 block text-muted">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
