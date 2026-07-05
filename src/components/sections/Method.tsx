import { Blocks, BookOpen, Repeat, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";

const icons: Record<string, LucideIcon> = {
  blocks: Blocks,
  "book-open": BookOpen,
  repeat: Repeat,
};

/** Seção 4 — Método WEC em 3 passos numerados. */
export function Method() {
  const { method } = site;
  return (
    <Section id={method.id}>
      <SectionHeading
        eyebrow="Método WEC"
        title={method.title}
        subtitle={method.subtitle}
      />

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {method.steps.map((step) => {
          const Icon = icons[step.icon] ?? Blocks;
          return (
            <RevealItem key={step.number}>
              <Card className="h-full">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-brand-2/20 text-accent">
                    <Icon size={22} aria-hidden />
                  </span>
                  <span className="font-display text-5xl font-bold text-line">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted">{step.description}</p>
              </Card>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-12 flex justify-center">
        <Button href={method.cta.href} size="lg" variant="secondary">
          {method.cta.label}
        </Button>
      </Reveal>
    </Section>
  );
}
