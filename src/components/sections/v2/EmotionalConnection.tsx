import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "./_shared";

/**
 * V2 — Conexão emocional. Split editorial: pergunta grande à esquerda,
 * corpo deslocado à direita. Acolhe, nunca envergonha.
 */
export function EmotionalConnection() {
  const { emotional } = site;
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <SectionKicker number="01" eyebrow="Por que agora" className="mb-6" />
          <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            {emotional.title}
          </h2>
        </Reveal>

        <div className="lg:pt-14">
          {emotional.body.map((paragraph, i) => (
            <Reveal key={i} delay={0.05 + i * 0.05}>
              <p
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-ink/90"
                    : "mt-5 text-lg leading-relaxed text-muted"
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
