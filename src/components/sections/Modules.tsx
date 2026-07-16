import { Luggage, Check } from "lucide-react";
import { site } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Disclosure } from "@/components/ui/Accordion";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";

/** Seção 5, O que você recebe (3 módulos) + bônus Trip Tip + grade expansível. */
export function Modules() {
  const { modules } = site;
  return (
    <Section id={modules.id} className="bg-surface/30">
      <SectionHeading
        eyebrow="Conteúdo"
        title={modules.title}
        subtitle={modules.subtitle}
      />

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {modules.items.map((mod) => (
          <RevealItem key={mod.tag}>
            <Card className="h-full">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {mod.tag}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {mod.title}
              </h3>
              <p className="mt-3 text-muted">{mod.description}</p>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Bônus Trip Tip */}
      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-col items-start gap-5 rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/10 to-brand-2/5 p-6 sm:flex-row sm:items-center">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand/20 text-accent">
            <Luggage size={26} aria-hidden />
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {modules.bonus.tag}
            </span>
            <h3 className="mt-1 font-display text-xl font-semibold">
              {modules.bonus.title}
            </h3>
            <p className="mt-2 text-muted">{modules.bonus.description}</p>
          </div>
        </div>
      </Reveal>

      {/* Grade completa (progressive disclosure) */}
      <Reveal delay={0.15} className="mt-10 flex flex-col items-center">
        <Disclosure label={modules.gradeToggleLabel}>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-x-8 gap-y-3 text-left sm:grid-cols-2">
            {modules.grade.map((lesson) => (
              <li key={lesson} className="flex items-start gap-2 text-muted">
                <Check size={18} className="mt-0.5 shrink-0 text-success" />
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </Disclosure>
      </Reveal>
    </Section>
  );
}
