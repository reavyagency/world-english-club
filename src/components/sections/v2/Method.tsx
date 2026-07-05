import { Blocks, BookOpen, Repeat, ArrowRight, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { EditorialHeading } from "./_shared";

const icons: Record<string, LucideIcon> = {
  blocks: Blocks,
  "book-open": BookOpen,
  repeat: Repeat,
};

/**
 * V2 — Método em 3 passos. Ledger vertical numerado (não grid de cards):
 * número gigante à esquerda, conteúdo à direita, separados por linhas 1px.
 */
export function Method() {
  const { method } = site;
  return (
    <Section id={method.id}>
      <EditorialHeading
        number="02"
        eyebrow="Método WEC"
        title={method.title}
        subtitle={method.subtitle}
      />

      <RevealGroup className="mt-4">
        {method.steps.map((step) => {
          const Icon = icons[step.icon] ?? Blocks;
          return (
            <RevealItem key={step.number}>
              <div className="group grid items-start gap-5 border-b border-line py-9 transition-colors hover:bg-surface/30 sm:grid-cols-[auto_1fr] sm:gap-10">
                <div className="flex items-center gap-5">
                  <span className="font-display text-5xl font-bold tabular-nums text-line transition-colors group-hover:text-emerald-400/40 sm:text-6xl">
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-accent">
                    <Icon size={22} aria-hidden />
                  </span>
                </div>
                <div className="sm:pt-2">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-muted">{step.description}</p>
                </div>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-10">
        <a
          href={method.cta.href}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-base font-semibold text-[#04120e] shadow-[0_10px_40px_-8px_rgba(16,185,129,0.55)] transition-all hover:shadow-[0_14px_50px_-6px_rgba(16,185,129,0.7)] active:scale-[0.98]"
        >
          {method.cta.label}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </Section>
  );
}
