import { site } from "@/content/site";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { tone } from "./_ui";

/**
 * V2, Barra de credibilidade (navy).
 *
 * Faixa fina entre o hero e o corpo da página: superfície um passo mais clara
 * + hairline em cima e embaixo. Os números contam de 0 até o valor ao entrar
 * na viewport, rápido (900ms) para dar vida sem virar espetáculo.
 *
 * `forceMotion`: a contagem foi pedida explicitamente, então roda mesmo com
 * "reduzir movimento" ligado. É uma exceção consciente e restrita a esta faixa
 * (v1/v3 seguem respeitando a preferência do sistema).
 */

const COUNT_MS = 900;

export function CredibilityBar() {
  return (
    <section
      className={`border-y bg-navy-800 px-6 py-10 ${tone.navy.border}`}
      aria-label="Números da World English Club"
    >
      <RevealGroup className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {site.credibility.items.map((item) => (
          <RevealItem key={item.label}>
            <p className="font-display text-3xl font-bold leading-none tracking-[-0.02em] text-gold sm:text-4xl">
              <StatCounter
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                displayOverride={
                  "displayOverride" in item ? item.displayOverride : undefined
                }
                duration={COUNT_MS}
                forceMotion
              />
            </p>
            <p className={`mt-2.5 text-sm leading-snug ${tone.navy.muted}`}>
              {item.label}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
