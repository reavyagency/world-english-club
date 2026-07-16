import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { V2Section, Kicker, H2 } from "./_ui";
import { V2Accordion } from "./_accordion";

/**
 * V2, FAQ — ivory. Split editorial: título à esquerda (sticky), acordeão à direita.
 *
 * Usa `V2Accordion tone="ivory"`: o acordeão compartilhado é fixo no tema
 * escuro e era exatamente ele que quebrava esta seção clara (painel escuro,
 * texto quase invisível).
 */
export function Faq() {
  const { faq } = site;
  return (
    <V2Section id={faq.id} tone="ivory">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <Kicker tone="ivory">Dúvidas</Kicker>
            <H2 tone="ivory" className="mt-4 text-balance">
              {faq.title}
            </H2>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <V2Accordion items={faq.items} tone="ivory" />
        </Reveal>
      </div>
    </V2Section>
  );
}
