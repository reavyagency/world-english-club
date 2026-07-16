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
 * V2, Planos. Split assimétrico: Mentoria (destaque dourado, painel dominante)
 * + Autoestudo (companheiro mais enxuto). R$/dia SEMPRE ao lado do mensal.
 */
export function Plans() {
  const { plans } = site;
  return (
    <Section id={plans.id} className="bg-[#F6F3EB]">
      <EditorialHeading
        number="04"
        eyebrow="Planos"
        title={plans.title}
        subtitle={plans.subtitle}
        tone="light"
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
                    ? "border-gold/50 shadow-[0_0_0_1px_rgba(230,193,90,0.35),0_30px_80px_-30px_rgba(198,154,60,0.45)]"
                    : "border-neutral-900/10 bg-white shadow-[0_18px_50px_-35px_rgba(0,0,0,0.45)] hover:border-neutral-900/25",
                ].join(" ")}
                style={
                  highlight
                    ? {
                        backgroundImage:
                          "linear-gradient(155deg, rgba(230,193,90,0.12), #ffffff 55%)",
                      }
                    : undefined
                }
              >
                {highlight ? (
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                    aria-hidden
                    style={{ background: "radial-gradient(circle, rgba(230,193,90,0.30), transparent 70%)" }}
                  />
                ) : null}

                <div className="relative flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-neutral-900">{plan.name}</h3>
                  {plan.badge ? (
                    <span
                      className={
                        highlight
                          ? "rounded-full bg-linear-to-r from-gold to-gold-2 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-neutral-950"
                          : "rounded-full border border-neutral-900/10 bg-neutral-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-neutral-600"
                      }
                    >
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                {/* Preço, mensal sempre com o R$/dia ao lado */}
                <div className="relative mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-neutral-900">
                    {plan.price}
                  </span>
                  <span className="text-neutral-500">{plan.period}</span>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-medium text-gold-2">
                    {plan.perDay}
                  </span>
                </div>

                <ul className="relative mt-7 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[0.95rem] text-neutral-800">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-2">
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
                      ? "bg-linear-to-r from-gold to-gold-2 text-neutral-950 shadow-[0_10px_40px_-8px_rgba(198,154,60,0.5)] hover:shadow-[0_14px_50px_-6px_rgba(198,154,60,0.65)]"
                      : "border border-neutral-900/15 bg-white text-neutral-900 hover:border-gold/50",
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
        <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-900/10 pt-6 text-sm text-neutral-600">
          {plans.trustFooter.map((item, i) => {
            const Icon = trustIcons[i] ?? Check;
            return (
              <li key={item} className="flex items-center gap-2">
                <Icon size={16} className="text-gold-2" />
                {item}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
