import { Check, Lock, ShieldCheck, XCircle, ArrowRight, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { V2Section, Kicker, H2, Lead, V2Card, CtaPrimary, CtaSecondary, tone } from "./_ui";

const trustIcons: LucideIcon[] = [Lock, ShieldCheck, XCircle];

// URL de checkout por plano (configurável via .env; cai em #planos por padrão)
function checkoutFor(name: string) {
  if (name.toLowerCase().includes("mentoria")) return brand.urls.checkoutMentoria;
  return brand.urls.checkoutAutoestudo;
}

/**
 * V2, Planos — seção de RESPIRO (ivory).
 *
 * Ancoragem: o plano mais caro (Mentoria) vem PRIMEIRO/à esquerda, para o
 * preço menor ser lido em relação a ele (padrão ConversionXL). O R$/dia fica
 * SEMPRE ao lado do valor mensal cheio — nunca substituindo, para não induzir.
 *
 * Sofisticação por INVERSÃO: o plano em destaque é um painel NAVY dentro da
 * seção clara. Além da hierarquia imediata, é o que devolve o dourado à cena:
 * sobre navy ele é legível (8,7:1) e pode ser badge, check, preço e CTA — no
 * fundo claro ficaria preso a detalhes (2,1:1). O card escuro ganha ainda a
 * malha de pontos e o R$/dia em mono, que é onde entra o toque técnico.
 */
export function Plans() {
  const { plans } = site;
  return (
    <V2Section id={plans.id} tone="ivory">
      <Reveal>
        <div className="max-w-2xl">
          <Kicker tone="ivory">Planos</Kicker>
          <H2 tone="ivory" className="mt-4 text-balance">
            {plans.title}
          </H2>
          <Lead tone="ivory" className="mt-4">
            {plans.subtitle}
          </Lead>
        </div>
      </Reveal>

      <RevealGroup className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
        {plans.items.map((plan) => {
          const featured = plan.highlight;
          // O card em destaque inverte para navy; o outro segue claro.
          const t = featured ? "navy" : "ivory";

          return (
            <RevealItem key={plan.name} className="h-full">
              <div className="relative h-full">
                {/* Glow dourado atrás do painel em destaque (contido) */}
                {featured ? (
                  <div
                    className="pointer-events-none absolute -inset-3 rounded-[28px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(212,175,55,0.20),transparent_70%)] blur-xl"
                    aria-hidden
                  />
                ) : null}

                <V2Card
                  tone={t}
                  highlight={featured}
                  className="relative flex h-full flex-col overflow-hidden p-8"
                >
                  {/* Textura técnica só no painel escuro (no claro seria ruído) */}
                  {featured ? (
                    <div
                      className="tech-dots pointer-events-none absolute inset-0 opacity-70"
                      aria-hidden
                    />
                  ) : null}

                  <div className="relative flex flex-col h-full">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className={`font-display text-2xl font-bold ${tone[t].title}`}>
                        {plan.name}
                      </h3>
                      {plan.badge ? (
                        <span
                          className={
                            featured
                              ? "rounded-full bg-gold px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-navy-900"
                              : `rounded-full border px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] ${tone.ivory.border} ${tone.ivory.muted}`
                          }
                        >
                          {plan.badge}
                        </span>
                      ) : null}
                    </div>

                    {/* Preço: mensal cheio SEMPRE com o R$/dia ao lado (nunca no lugar) */}
                    <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                      <span
                        className={`font-display text-5xl font-extrabold tracking-[-0.03em] ${tone[t].title}`}
                      >
                        {plan.price}
                      </span>
                      <span className={tone[t].muted}>{plan.period}</span>
                      <span
                        className={`rounded-full border px-3 py-1 font-mono text-xs ${
                          featured
                            ? "border-gold/40 text-gold"
                            : `${tone.ivory.border} ${tone.ivory.body}`
                        }`}
                      >
                        {plan.perDay}
                      </span>
                    </div>

                    {/* Filete de separação */}
                    <span
                      className={`mt-7 block h-px w-full ${
                        featured ? "bg-gold/25" : "bg-navy-900/10"
                      }`}
                      aria-hidden
                    />

                    <ul className="mt-6 flex-1 space-y-3.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-2.5 text-[0.95rem] ${tone[t].body}`}
                        >
                          <Check
                            size={18}
                            aria-hidden
                            className={`mt-0.5 shrink-0 ${featured ? "text-gold" : "text-gold-deep"}`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {featured ? (
                      <CtaPrimary
                        href={checkoutFor(plan.name)}
                        tone="navy"
                        className="mt-8 w-full"
                      >
                        {plan.cta.label}
                        <ArrowRight size={18} aria-hidden />
                      </CtaPrimary>
                    ) : (
                      <CtaSecondary
                        href={checkoutFor(plan.name)}
                        tone="ivory"
                        className="mt-8 w-full"
                      >
                        {plan.cta.label}
                      </CtaSecondary>
                    )}
                  </div>
                </V2Card>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1}>
        <ul
          className={`mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t pt-6 font-mono text-xs ${tone.ivory.border} ${tone.ivory.muted}`}
        >
          {plans.trustFooter.map((item, i) => {
            const Icon = trustIcons[i] ?? Check;
            return (
              <li key={item} className="flex items-center gap-2">
                <Icon size={15} aria-hidden className="text-gold-deep" />
                {item}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </V2Section>
  );
}
