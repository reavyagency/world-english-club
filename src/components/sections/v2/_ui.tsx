import type { ReactNode } from "react";

/**
 * SISTEMA DE DESIGN DA VARIAÇÃO B (/v2) — navy + dourado.
 *
 * Autocontido de propósito: a v2 NÃO usa os primitivos compartilhados
 * (Card/Button/Accordion/SectionHeading), que só funcionam em tema escuro.
 * Aqui todo componente é "tone-aware" e o contraste é correto por construção.
 *
 * REGRA DE OURO (WCAG, verificada):
 *  - Dourado é TEXTO **apenas sobre navy** (#d4af37 sobre #0a1428 = 8,7:1).
 *  - Em seção `ivory`, dourado só aparece como filete/ícone; título = navy.
 *  - CTA dourado usa SEMPRE texto navy (nunca branco: 2,1:1).
 *  - Elevação no escuro vem de superfície mais clara + hairline, não de sombra.
 */

export type Tone = "navy" | "ivory";

/** Classes de texto/superfície por tom. Use para estilizar livremente e manter o contraste. */
export const tone = {
  navy: {
    section: "bg-navy-900 text-white",
    title: "text-white",
    body: "text-slate-300",
    muted: "text-slate-400",
    kicker: "text-gold", // dourado PODE ser texto sobre navy
    card: "bg-navy-800 border border-hairline",
    cardHover: "hover:bg-navy-700 hover:border-gold/40",
    border: "border-hairline",
    rule: "bg-gold/60",
    iconWrap: "bg-gold/10 text-gold",
  },
  ivory: {
    section: "bg-ivory text-navy-900",
    title: "text-navy-900",
    body: "text-navy-900/70",
    muted: "text-navy-900/55",
    kicker: "text-navy-700", // NUNCA dourado como texto no claro
    card: "bg-white border border-navy-900/10",
    cardHover: "hover:border-navy-900/25",
    border: "border-navy-900/10",
    rule: "bg-gold-deep/70",
    iconWrap: "bg-gold-deep/10 text-gold-deep", // dourado só como ícone aqui
  },
} as const satisfies Record<Tone, Record<string, string>>;

/** Wrapper de seção: define o tom (fundo + cor de texto) e o respiro vertical. */
export function V2Section({
  id,
  tone: t = "navy",
  className = "",
  containerClassName = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 py-20 sm:py-28 ${tone[t].section} ${className}`}
    >
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

/**
 * Eyebrow/kicker da seção. Dourado no navy; navy no ivory (contraste).
 * Em mono, com um marcador — sinal tipográfico de "tecnologia" (padrão
 * Linear/Vercel), sem custo visual.
 */
export function Kicker({
  tone: t = "navy",
  children,
  className = "",
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.22em] ${tone[t].kicker} ${className}`}
    >
      <span
        className={`h-1 w-1 rounded-full ${t === "navy" ? "bg-gold" : "bg-gold-deep"}`}
        aria-hidden
      />
      {children}
    </span>
  );
}

/** Título de seção. Tracking negativo e leading compacto (decisão tipográfica). */
export function H2({
  tone: t = "navy",
  children,
  className = "",
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[2.75rem] ${tone[t].title} ${className}`}
    >
      {children}
    </h2>
  );
}

/** Subtítulo/lead da seção. */
export function Lead({
  tone: t = "navy",
  children,
  className = "",
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-lg leading-relaxed ${tone[t].body} ${className}`}>
      {children}
    </p>
  );
}

/** Card. Elevação por superfície + hairline (no navy), não por sombra. */
export function V2Card({
  tone: t = "navy",
  highlight = false,
  className = "",
  children,
}: {
  tone?: Tone;
  highlight?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const base = highlight
    ? t === "navy"
      ? "bg-navy-800 border border-gold/60"
      : "bg-white border-2 border-navy-900"
    : `${tone[t].card} ${tone[t].cardHover}`;
  return (
    <div className={`rounded-2xl p-6 transition-colors duration-300 ${base} ${className}`}>
      {children}
    </div>
  );
}

/**
 * CTA primário. Dourado METÁLICO (degradê da logo) com texto NAVY (nunca
 * branco). Texto navy passa em contraste sobre qualquer parada do degradê.
 * No ivory ganha contorno navy para ter contraste de borda contra o fundo claro.
 */
export function CtaPrimary({
  href,
  tone: t = "navy",
  className = "",
  children,
}: {
  href: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  const edge = t === "ivory" ? "ring-2 ring-navy-900" : "";
  return (
    <a
      href={href}
      className={`gold-metal inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-navy-900 transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.99] ${edge} ${className}`}
    >
      {children}
    </a>
  );
}

/** CTA secundário (baixo compromisso). */
export function CtaSecondary({
  href,
  tone: t = "navy",
  className = "",
  children,
  ...rest
}: {
  href: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const styles =
    t === "navy"
      ? "border border-hairline text-white hover:bg-navy-800"
      : "border border-navy-900/25 bg-white text-navy-900 hover:border-navy-900/60";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-colors duration-200 ${styles} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
