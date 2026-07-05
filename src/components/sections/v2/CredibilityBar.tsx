import { site } from "@/content/site";
import { StatCounter } from "@/components/ui/StatCounter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * V2 — Barra de credibilidade. Faixa editorial com números em count-up,
 * alinhados à esquerda e separados por linhas 1px (grade deslocada).
 */
export function CredibilityBar() {
  return (
    <section
      className="border-y border-line px-6 py-10"
      style={{
        backgroundImage:
          "linear-gradient(180deg, color-mix(in oklab, var(--color-accent) 5%, transparent), transparent)",
      }}
      aria-label="Números da World English Club"
    >
      <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {site.credibility.items.map((item, i) => (
          <RevealItem
            key={item.label}
            className="bg-bg px-5 py-6 sm:px-7 sm:py-7"
          >
            <span className="font-mono text-xs tabular-nums text-accent/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="mt-2 font-display text-3xl font-bold leading-none text-ink sm:text-4xl">
              <StatCounter
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                displayOverride={
                  "displayOverride" in item ? item.displayOverride : undefined
                }
              />
            </div>
            <p className="mt-2 text-[0.8rem] leading-snug text-muted">
              {item.label}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
