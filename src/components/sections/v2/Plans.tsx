import { Check, Lock, ShieldCheck, XCircle, ArrowRight, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { Section } from "@/components/ui/Section";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { EditorialHeading } from "./_shared";

const trustIcons: LucideIcon[] = [Lock, ShieldCheck, XCircle];

// URL de checkout por plano (configurável via .env; cai em #planos por padrão)
function checkoutFor(name: string) {
  if (name.toLowerCase().includes("mentoria")) return brand.urls.checkoutMentoria;
  return brand.urls.checkoutAutoestudo;
}

/**
 * V2 — Planos. Split assimétrico: Mentoria (destaque teal, painel dominante)
 * + Autoestudo (companheiro mais enxuto). R$/dia SEMPRE ao lado do mensal.
 */
export function Plans() {
  const { plans } = site;
  return (
    <Section id={plans.id}>
      <EditorialHeading
        number="04"
        eyebrow="Planos"
        title={plans.title}
        subtitle={plans.subtitle}
      />

      <RevealGroup className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        {plans.items.map((plan) => {
          const highlight = plan.highlight;
          return (
            <RevealItem key={plan.name} className="h-full">
              <div
                className={[
                  "relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-all",
                  highlight
                    ? "border-emerald-400/50 shadow-[0_0_0_1px_rgba(16,185,129,0.25),0_30px_80px_-30px_rgba(16,185,129,0.6)]"
                    : "border-line bg-surface hover:border-ink/25",
                ].join(" ")}
                style={
                  highlight
                    ? {
                        backgroundImage:
                          "linear-gradient(155deg, color-mix(in oklab, var(--color-accent) 10%, var(--color-surface-2)), var(--color-surface))",
                      }
                    : undefined
                }
              >
                {highlight ? (
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                    aria-hidden
                    style={{ background: "radial-gradient(circle, rgba(16,185,129,0.35), transparent 70%)" }}
                  />
                ) : null}

                <div className="relative flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                  {plan.badge ? (
                    <span
                      className={
                        highlight
                          ? "rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#04120e]"
                          : "rounded-full border border-line bg-surface-2 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted"
                      }
                    >
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                {/* Preço — mensal sempre com o R$/dia ao lado */}
                <div className="relative mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-muted">{plan.period}</span>
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1 text-sm font-medium text-accent">
                    {plan.perDay}
                  </span>
                </div>

                <ul className="relative mt-7 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[0.95rem]">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-400">
                        <Check size={13} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={checkoutFor(plan.name)}
                  className={[
                    "group relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all active:scale-[0.98]",
                    highlight
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-[#04120e] shadow-[0_10px_40px_-8px_rgba(16,185,129,0.6)] hover:shadow-[0_14px_50px_-6px_rgba(16,185,129,0.75)]"
                      : "border border-line bg-surface-2 text-ink hover:border-emerald-400/40",
                  ].join(" ")}
                >
                  {plan.cta.label}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1}>
        <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-muted">
          {plans.trustFooter.map((item, i) => {
            const Icon = trustIcons[i] ?? Check;
            return (
              <li key={item} className="flex items-center gap-2">
                <Icon size={16} className="text-emerald-400" />
                {item}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
