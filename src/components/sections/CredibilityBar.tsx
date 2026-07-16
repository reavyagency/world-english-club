import { site } from "@/content/site";
import { StatCounter } from "@/components/ui/StatCounter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/** Seção 2, Barra de credibilidade com números em count-up. */
export function CredibilityBar() {
  return (
    <section className="border-y border-line bg-surface/40 px-6 py-12">
      <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {site.credibility.items.map((item) => (
          <RevealItem key={item.label} className="text-center lg:text-left">
            <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
              <StatCounter
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                displayOverride={
                  "displayOverride" in item ? item.displayOverride : undefined
                }
              />
            </div>
            <p className="mt-1 text-sm text-muted">{item.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
