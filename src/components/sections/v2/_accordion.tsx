"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { tone, type Tone } from "./_ui";

/**
 * Acordeão e Disclosure da variação B — TONE-AWARE.
 *
 * Existem porque os primitivos compartilhados (`ui/Accordion`) são fixos no
 * tema escuro: usados numa seção clara, produziam painel escuro com texto
 * quase invisível. Aqui o tom é explícito e o contraste é sempre correto.
 * Acessível: <button> com aria-expanded/aria-controls e região rotulada.
 */

type Item = { question: string; answer: string };

export function V2Accordion({
  items,
  tone: t = "navy",
}: {
  items: readonly Item[];
  tone?: Tone;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const divide = t === "navy" ? "divide-hairline" : "divide-navy-900/10";

  return (
    <div className={`divide-y ${divide}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-b-${i}`;
        const panelId = `${baseId}-p-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors ${tone[t].title}`}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  aria-hidden
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? `rotate-180 ${t === "navy" ? "text-gold" : "text-gold-deep"}`
                      : tone[t].muted
                  }`}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={`pb-5 pr-8 leading-relaxed ${tone[t].body}`}>
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/** Toggle único (usado na "grade completa de aulas"). */
export function V2Disclosure({
  label,
  tone: t = "navy",
  children,
}: {
  label: string;
  tone?: Tone;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const styles =
    t === "navy"
      ? "border border-hairline text-white hover:border-gold/50"
      : "border border-navy-900/20 text-navy-900 hover:border-navy-900/50";

  return (
    <div>
      <button
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${styles}`}
      >
        {label}
        <ChevronDown
          size={16}
          aria-hidden
          className={`transition-transform duration-300 ${
            open
              ? `rotate-180 ${t === "navy" ? "text-gold" : "text-gold-deep"}`
              : tone[t].muted
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
