"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Número com contagem animada (count-up) ao entrar na viewport.
 * Se `displayOverride` existir (ex.: "Certificado"), mostra o texto direto.
 *
 * Por padrão respeita `prefers-reduced-motion` (mostra o valor final direto).
 * `forceMotion` desliga esse respeito para este contador específico: é um
 * opt-in usado onde a contagem foi pedida explicitamente (v2), mantendo o
 * comportamento acessível como padrão no resto do projeto.
 */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  displayOverride,
  duration = 1500,
  forceMotion = false,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  displayOverride?: string;
  duration?: number;
  forceMotion?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();
  const reduce = forceMotion ? false : prefersReduced;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || displayOverride || reduce) return;
    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce, displayOverride]);

  // Sem animação (reduced-motion): mostra o valor final direto, sem setState no effect.
  const shown = reduce ? value : display;

  return (
    <span ref={ref} className="tabular-nums">
      {displayOverride ?? `${prefix}${shown.toLocaleString("pt-BR")}${suffix}`}
    </span>
  );
}
