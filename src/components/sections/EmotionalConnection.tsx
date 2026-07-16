import { DoorClosed } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Seção 3, Conexão emocional (dor → aspiração). Acolhe, nunca envergonha. */
export function EmotionalConnection() {
  const { emotional } = site;
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface text-brand">
            <DoorClosed size={22} aria-hidden />
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            {emotional.title}
          </h2>
        </Reveal>
        {emotional.body.map((paragraph, i) => (
          <Reveal key={i} delay={0.1 + i * 0.05}>
            <p className="mt-5 text-lg text-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
