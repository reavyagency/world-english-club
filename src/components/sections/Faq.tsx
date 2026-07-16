import { site } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

/** Seção 10, FAQ (quebra de objeções), acordeão acessível. */
export function Faq() {
  const { faq } = site;
  return (
    <Section id={faq.id}>
      <SectionHeading eyebrow="Dúvidas" title={faq.title} />
      <Reveal delay={0.05} className="mx-auto mt-12 max-w-3xl">
        <Accordion items={faq.items} />
      </Reveal>
    </Section>
  );
}
