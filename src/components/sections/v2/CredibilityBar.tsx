import { site } from "@/content/site";
import { StatCounter } from "@/components/ui/StatCounter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * V2, Barra de credibilidade. Faixa editorial com números em count-up,
 * alinhados à esquerda e separados por linhas 1px (grade deslocada).
 */
export function CredibilityBar() {
  return (
    <section
      className="border-y border-neutral-900/10 bg-[#F6F3EB] px-6 py-10"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(230,193,90,0.07), transparent 60%)",
      }}
      aria-label="Números da World English Club"
    >
      <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-900/10 bg-neutral-900/10 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.4)] lg:grid-cols-4">
        {site.credibility.items.map((item, i) => (
          <RevealItem
            key={item.label}
            className="bg-white px-5 py-6 sm:px-7 sm:py-7"
          >
            <span className="font-mono text-xs tabular-nums text-gold-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="mt-2 font-display text-3xl font-bold leading-none text-neutral-900 sm:text-4xl">
              <StatCounter
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                displayOverride={
                  "displayOverride" in item ? item.displayOverride : undefined
                }
              />
            </div>
            <p className="mt-2 text-[0.8rem] leading-snug text-neutral-600">
              {item.label}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
