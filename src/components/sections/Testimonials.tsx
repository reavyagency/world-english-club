import { site } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Seção 7, Depoimentos em vídeo.
 */
export function Testimonials() {
  const { testimonials } = site;
  return (
    <Section id={testimonials.id} className="bg-surface/30">
      <SectionHeading eyebrow="Depoimentos" title={testimonials.title} />

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.videos.map((t) => (
          <RevealItem key={t.name} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5">
              <VideoPlayer videoId={t.youtubeId} label="depoimento" aspect="16 / 9" />

              <figcaption className="mt-5 text-sm">
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-muted">{t.role}</span>
              </figcaption>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
