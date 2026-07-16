"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";
import { tone } from "./_ui";

/**
 * V2, grade completa em ABAS (navy).
 *
 * O site antigo despejava 100+ linhas numa lista única. Aqui a mesma informação
 * vira 5 painéis escaneáveis: 3 módulos + textos + bônus. A contagem de cada aba
 * é derivada de `items.length` (nunca escrita à mão), então o número exibido
 * nunca mente sobre o conteúdo.
 */

type CurriculumItem = {
  n?: string;
  title: string;
  extras?: readonly string[];
  kind?: string;
};

type Tab = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  count: number;
  kind: "modulo" | "lista";
  items: readonly CurriculumItem[];
  list: readonly string[];
  numbered: boolean;
};

/** Chip de tipo. Dourado só como texto sobre navy (8,7:1) — regra de ouro da v2. */
const KIND_CHIP: Record<string, { label: string; className: string }> = {
  vocabulario: {
    label: "Vocabulário",
    className: "border-gold/30 bg-gold/10 text-gold-light",
  },
  texto: {
    label: "Texto",
    className: "border-hairline bg-navy-700 text-slate-300",
  },
  palavras: {
    label: "1000 palavras",
    className: "border-gold/50 bg-gold/15 text-gold",
  },
};

const LEGEND = ["vocabulario", "texto", "palavras"] as const;

export function V2Curriculum() {
  const { curriculum } = site;

  const tabs: Tab[] = [
    ...curriculum.modules.map((mod, i) => ({
      id: `modulo-${i + 1}`,
      tag: mod.tag,
      title: mod.title,
      summary: mod.summary,
      count: mod.items.length,
      kind: "modulo" as const,
      items: mod.items as readonly CurriculumItem[],
      list: [] as readonly string[],
      numbered: false,
    })),
    {
      id: "textos",
      tag: curriculum.texts.tag,
      title: curriculum.texts.title,
      summary: curriculum.texts.summary,
      count: curriculum.texts.items.length,
      kind: "lista" as const,
      items: [] as readonly CurriculumItem[],
      list: curriculum.texts.items,
      numbered: true,
    },
    {
      id: "bonus",
      tag: curriculum.tripTip.tag,
      title: curriculum.tripTip.title,
      summary: curriculum.tripTip.summary,
      count: curriculum.tripTip.items.length,
      kind: "lista" as const,
      items: [] as readonly CurriculumItem[],
      list: curriculum.tripTip.items,
      numbered: false,
    },
  ];

  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = tabs[active];

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (active + 1) % tabs.length
        : (active - 1 + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section className="bg-navy-900 px-6 pb-20 text-white sm:pb-28">
      <div className="mx-auto w-full max-w-6xl">
        {/* Abas */}
        <div
          role="tablist"
          aria-label="Módulos da grade"
          className="flex flex-wrap gap-2 border-b border-hairline pb-4"
        >
          {tabs.map((tab, i) => {
            const selected = i === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  selected
                    ? "bg-gold text-navy-900"
                    : "text-slate-400 hover:bg-navy-800 hover:text-white"
                }`}
              >
                {tab.tag}
                <span
                  className={`ml-2 font-mono text-xs ${
                    selected ? "text-navy-900/70" : "text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Painel */}
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
          className="mt-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <div className="max-w-2xl">
            <h3 className={`font-display text-2xl font-semibold ${tone.navy.title}`}>
              {current.title}
            </h3>
            <p className={`mt-2 ${tone.navy.body}`}>{current.summary}</p>
          </div>

          {current.kind === "modulo" ? (
            <>
              <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {current.items.map((item) => (
                  <li
                    key={`${item.n ?? ""}-${item.title}`}
                    className="flex items-start gap-3 rounded-xl border border-hairline bg-navy-800 px-4 py-3"
                  >
                    {item.n ? (
                      <span
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-navy-700 font-mono text-xs font-medium text-gold"
                        aria-hidden
                      >
                        {item.n}
                      </span>
                    ) : (
                      <span
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-navy-700 font-mono text-xs text-slate-500"
                        aria-hidden
                      >
                        ·
                      </span>
                    )}
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-white">
                        {item.n ? (
                          <>
                            <span className="sr-only">Aula {item.n}: </span>
                            {item.title}
                          </>
                        ) : (
                          item.title
                        )}
                      </span>
                      {(item.kind || item.extras?.length) && (
                        <span className="mt-1.5 flex flex-wrap gap-1.5">
                          {item.kind && KIND_CHIP[item.kind] && (
                            <span
                              className={`rounded-full border px-2 py-0.5 text-[0.7rem] font-medium ${KIND_CHIP[item.kind].className}`}
                            >
                              {KIND_CHIP[item.kind].label}
                            </span>
                          )}
                          {item.extras?.map((extra) => (
                            <span
                              key={extra}
                              className="rounded-full border border-hairline px-2 py-0.5 text-[0.7rem] text-slate-400"
                            >
                              {extra}
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Legenda dos tipos */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-hairline pt-5">
                <span
                  className={`font-mono text-[0.7rem] uppercase tracking-[0.18em] ${tone.navy.muted}`}
                >
                  Legenda
                </span>
                {LEGEND.map((key) => (
                  <span key={key} className="inline-flex items-center gap-2">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[0.7rem] font-medium ${KIND_CHIP[key].className}`}
                    >
                      {KIND_CHIP[key].label}
                    </span>
                  </span>
                ))}
                <span className={`text-[0.7rem] ${tone.navy.muted}`}>
                  Sem etiqueta = aula comum.
                </span>
              </div>
            </>
          ) : (
            <ul className="mt-8 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {current.list.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-hairline bg-navy-800 px-4 py-3"
                >
                  {current.numbered && (
                    <span
                      className="mt-px shrink-0 font-mono text-xs text-gold"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                  <span className="text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
