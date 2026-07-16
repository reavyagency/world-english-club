import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { V2Section, Kicker, H2, tone } from "./_ui";

/**
 * V2, Conexão emocional (navy).
 *
 * Bloco centrado e estreito: aqui o texto é o conteúdo, então nada compete
 * com ele — só um filete dourado curto marcando o início. Acolhe, nunca
 * envergonha (por isso a pergunta vem antes da promessa).
 */
export function EmotionalConnection() {
  const { emotional } = site;
  return (
    <V2Section tone="navy" containerClassName="max-w-3xl text-center">
      <Reveal>
        <Kicker tone="navy">Por que agora</Kicker>
        <span
          className={`mx-auto mt-5 block h-px w-12 ${tone.navy.rule}`}
          aria-hidden
        />
        <H2 tone="navy" className="mt-6 text-balance">
          {emotional.title}
        </H2>
      </Reveal>

      <div className="mt-6 space-y-5">
        {emotional.body.map((paragraph, i) => (
          <Reveal key={paragraph} delay={0.05 + i * 0.05}>
            <p className={`text-lg leading-relaxed ${tone.navy.body}`}>
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </V2Section>
  );
}
