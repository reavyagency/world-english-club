import { Luggage, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { V2Section, Kicker, H2, Lead, V2Card, CtaSecondary, tone } from "./_ui";

/**
 * V2, O que você recebe (navy).
 *
 * 3 módulos em cards iguais + o bônus Trip Tip destacado por borda dourada
 * (é um extra, não um quarto módulo — a borda diz isso sem precisar de texto).
 * A grade completa (100+ itens) vive em /v2/grade: aqui fica só o convite, para
 * a home não pagar o custo de rolagem de quem já está convencido.
 */
export function Modules() {
  const { modules, curriculum } = site;
  // Contagem derivada dos dados reais — nunca escrita à mão.
  const lessonCount = curriculum.modules.reduce((acc, m) => acc + m.items.length, 0);
  return (
    <V2Section id={modules.id} tone="navy">
      <Reveal>
        <div className="max-w-2xl">
          <Kicker tone="navy">Conteúdo</Kicker>
          <H2 tone="navy" className="mt-4 text-balance">
            {modules.title}
          </H2>
          <Lead tone="navy" className="mt-4">
            {modules.subtitle}
          </Lead>
        </div>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.items.map((mod) => (
          <RevealItem key={mod.tag} className="h-full">
            <V2Card tone="navy" className="h-full p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {mod.tag}
              </span>
              <h3 className={`mt-3 font-display text-xl font-semibold ${tone.navy.title}`}>
                {mod.title}
              </h3>
              <p className={`mt-3 ${tone.navy.body}`}>{mod.description}</p>
            </V2Card>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Bônus Trip Tip — destacado por borda dourada */}
      <Reveal delay={0.05}>
        <V2Card tone="navy" highlight className="mt-6 p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${tone.navy.iconWrap}`}
            >
              <Luggage size={24} aria-hidden />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {modules.bonus.tag}
              </span>
              <h3 className={`mt-2 font-display text-xl font-semibold ${tone.navy.title}`}>
                {modules.bonus.title}
              </h3>
              <p className={`mt-3 max-w-2xl ${tone.navy.body}`}>
                {modules.bonus.description}
              </p>
            </div>
          </div>
        </V2Card>
      </Reveal>

      {/* Grade completa — mora em /v2/grade */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-hairline bg-navy-800 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className={`font-display text-lg font-semibold ${tone.navy.title}`}>
              A grade completa, aula por aula
            </h3>
            <p className={`mt-1.5 ${tone.navy.body}`}>
              <span className="font-mono text-gold">{lessonCount}</span> itens entre
              os 3 módulos, mais{" "}
              <span className="font-mono text-gold">{curriculum.texts.items.length}</span>{" "}
              textos temáticos e o bônus Trip Tip.
            </p>
          </div>
          <CtaSecondary href="/v2/grade" tone="navy" className="shrink-0">
            {modules.gradeToggleLabel}
            <ArrowRight size={18} aria-hidden />
          </CtaSecondary>
        </div>
      </Reveal>
    </V2Section>
  );
}
