import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "./_shared";

/** V2 — FAQ. Split editorial: título à esquerda (sticky), acordeão à direita. */
export function Faq() {
  const { faq } = site;
  return (
    <Section id={faq.id}>
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <SectionKicker number="08" eyebrow="Dúvidas" className="mb-5" />
            <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl">
              {faq.title}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <Accordion items={faq.items} />
        </Reveal>
      </div>
    </Section>
  );
}
