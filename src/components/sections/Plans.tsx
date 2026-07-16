import { Check, Lock, ShieldCheck, XCircle } from "lucide-react";
import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";

const trustIcons = [Lock, ShieldCheck, XCircle];

// URL de checkout por plano (configurável via .env)
function checkoutFor(name: string) {
  if (name.toLowerCase().includes("mentoria")) return brand.urls.checkoutMentoria;
  return brand.urls.checkoutAutoestudo;
}

/** Seção 6, Planos e preços (crítica). Total mensal sempre visível ao lado do R$/dia. */
export function Plans() {
  const { plans } = site;
  return (
    <Section id={plans.id}>
      <SectionHeading
        eyebrow="Planos"
        title={plans.title}
        subtitle={plans.subtitle}
      />

      <RevealGroup className="mx-auto mt-14 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
        {plans.items.map((plan) => (
          <RevealItem key={plan.name} className="h-full">
            <Card highlight={plan.highlight} className="flex h-full flex-col">
              {plan.badge ? (
                <span
                  className={`self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                    plan.highlight
                      ? "bg-brand text-white"
                      : "border border-line bg-surface-2 text-muted"
                  }`}
                >
                  {plan.badge}
                </span>
              ) : null}

              <h3 className="mt-4 font-display text-2xl font-bold">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{plan.perDay}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check size={18} className="mt-0.5 shrink-0 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={checkoutFor(plan.name)}
                size="lg"
                variant={plan.highlight ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {plan.cta.label}
              </Button>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Rodapé de confiança */}
      <Reveal delay={0.1}>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
          {plans.trustFooter.map((item, i) => {
            const Icon = trustIcons[i] ?? Check;
            return (
              <li key={item} className="flex items-center gap-2">
                <Icon size={16} className="text-success" />
                {item}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
