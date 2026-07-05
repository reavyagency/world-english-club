import { Quote, User, PlayCircle } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialHeading } from "./_shared";

/**
 * V2 — Depoimentos em RAIL horizontal (scroll-snap). Textos são placeholders
 * `[[ ]]` — nunca inventar. Suporta depoimento em vídeo (poster reservado).
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
          className="-mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]"
          role="list"
          aria-label="Depoimentos de alunos"
        >
          {testimonials.items.map((t) => (
            <figure
              key={t.name}
              role="listitem"
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-emerald-400/40 sm:w-[380px]"
            >
              {t.hasVideo ? (
                <MediaPlaceholder
                  caption="Depoimento em vídeo"
                  aspect="16/9"
                  icon={PlayCircle}
                  className="mb-5"
                />
              ) : (
                <Quote size={30} className="mb-4 text-emerald-400/70" aria-hidden />
              )}

              <blockquote className="flex-1 text-[0.98rem] leading-relaxed text-ink/90">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface-2 text-muted">
                  <User size={20} aria-hidden />
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
