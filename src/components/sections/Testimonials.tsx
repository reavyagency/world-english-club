import { Quote, User, PlayCircle } from "lucide-react";
import { site } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Seção 7 — Depoimentos. Nunca inventar: os textos são placeholders `[[ ]]`.
 * Suporta depoimento em vídeo (poster reservado) além de texto.
 */
export function Testimonials() {
  const { testimonials } = site;
  return (
    <Section id={testimonials.id} className="bg-surface/30">
      <SectionHeading eyebrow="Depoimentos" title={testimonials.title} />

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <RevealItem key={t.name} className="h-full">
            <Card className="flex h-full flex-col">
              {t.hasVideo ? (
                <MediaPlaceholder
                  caption="Depoimento em vídeo"
                  aspect="16/9"
                  icon={PlayCircle}
                  className="mb-5"
                />
              ) : (
                <Quote size={28} className="mb-4 text-brand" aria-hidden />
              )}

              <blockquote className="flex-1 text-ink/90">{t.quote}</blockquote>

              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface-2 text-muted">
                  <User size={20} aria-hidden />
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-muted">{t.role}</span>
                </span>
              </figcaption>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
