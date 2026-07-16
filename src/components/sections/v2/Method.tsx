import { Blocks, BookOpen, Repeat, ArrowRight, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { V2Section, Kicker, H2, Lead, V2Card, CtaPrimary, tone } from "./_ui";

const icons: Record<string, LucideIcon> = {
  blocks: Blocks,
  "book-open": BookOpen,
  repeat: Repeat,
};

/**
 * V2, Método em 3 passos, seção de RESPIRO (ivory).
 *
 * Grid sem espaço morto em nenhum breakpoint: 1 coluna no mobile; em 2 colunas
 * o último card preenche a linha inteira; em 3 colunas os passos ficam lado a
 * lado. A leitura 1→2→3 é linear, que é o que a seção precisa comunicar.
 * No claro, dourado NUNCA é texto, só o ícone (`gold-deep`).
 */
export function Method() {
  const { method } = site;
  return (
    <V2Section id={method.id} tone="ivory">
      <Reveal>
        <div className="max-w-2xl">
          <Kicker tone="ivory">Método WEC</Kicker>
          <H2 tone="ivory" className="mt-4 text-balance">
            {method.title}
          </H2>
          <Lead tone="ivory" className="mt-4">
            {method.subtitle}
          </Lead>
        </div>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {method.steps.map((step, i) => {
          const Icon = icons[step.icon] ?? Blocks;
          // Em 2 colunas, o último card ocupa a linha toda (evita buraco ao lado).
          const fillsRow = i === method.steps.length - 1;
          return (
            <RevealItem
              key={step.number}
              className={`h-full ${fillsRow ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <V2Card tone="ivory" className="flex h-full flex-col p-8">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`font-display text-4xl font-bold tabular-nums leading-none tracking-[-0.03em] ${tone.ivory.title}`}
                  >
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tone.ivory.iconWrap}`}
                  >
                    <Icon size={20} aria-hidden />
                  </span>
                </div>
                <span className={`mt-6 block h-px w-10 ${tone.ivory.rule}`} aria-hidden />
                <h3
                  className={`mt-5 font-display text-xl font-semibold ${tone.ivory.title}`}
                >
                  {step.title}
                </h3>
                <p className={`mt-3 max-w-2xl ${tone.ivory.body}`}>
                  {step.description}
                </p>
              </V2Card>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1}>
        <div className="mt-10">
          <CtaPrimary href={method.cta.href} tone="ivory">
            {method.cta.label}
            <ArrowRight size={18} aria-hidden />
          </CtaPrimary>
        </div>
      </Reveal>
    </V2Section>
  );
}
