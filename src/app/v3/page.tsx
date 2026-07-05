import { site } from "@/content/site";

/**
 * VERSÃO 3 — layout provisório.
 *
 * Estrutura de partida (hero ousado, acento âmbar, seções amplas).
 * Mesma copy das outras versões, layout diferente. Será refinada a
 * partir do prompt de design.
 */

export default function V3() {
  return (
    <div className="flex flex-1 flex-col bg-amber-50 text-neutral-900">
      {/* Nav */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-xl font-black tracking-tight">
          {site.brand.name}
        </span>
        <a
          href={site.hero.primaryCta.href}
          className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-amber-50 hover:bg-neutral-700"
        >
          {site.hero.primaryCta.label}
        </a>
      </header>

      {/* Hero ousado */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
          {site.hero.eyebrow}
        </p>
        <h1 className="mt-4 text-5xl font-black leading-[1.05] sm:text-7xl">
          {site.hero.title}
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-neutral-700">
          {site.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={site.hero.primaryCta.href}
            className="rounded-full bg-amber-500 px-8 py-4 text-lg font-bold text-neutral-900 hover:bg-amber-400"
          >
            {site.hero.primaryCta.label}
          </a>
          <a
            href={site.hero.secondaryCta.href}
            className="rounded-full border-2 border-neutral-900 px-8 py-4 text-lg font-bold hover:bg-neutral-900 hover:text-amber-50"
          >
            {site.hero.secondaryCta.label}
          </a>
        </div>
      </section>

      {/* Stats em faixa */}
      <section className="bg-neutral-900 text-amber-50">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-around gap-8 px-6 py-12 text-center">
          {site.hero.stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black text-amber-400">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="grid gap-10 sm:grid-cols-2">
          {site.features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="text-4xl">{f.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-neutral-700">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Método */}
      <section id={site.method.id} className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black">{site.method.title}</h2>
          <p className="mt-3 text-lg text-neutral-600">
            {site.method.subtitle}
          </p>
          <ol className="mt-12 space-y-6">
            {site.method.steps.map((step) => (
              <li key={step.number} className="flex gap-6">
                <span className="text-4xl font-black text-amber-500">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-1 text-neutral-700">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Planos */}
      <section id={site.plans.id} className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black">{site.plans.title}</h2>
          <p className="mt-3 text-lg text-neutral-600">{site.plans.subtitle}</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {site.plans.items.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-3xl border-2 p-8 ${
                  plan.highlight
                    ? "border-amber-500 bg-amber-500/10"
                    : "border-neutral-900/10 bg-white"
                }`}
              >
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-neutral-500">{plan.period}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-700">
                  {plan.features.map((feat) => (
                    <li key={feat}>✓ {feat}</li>
                  ))}
                </ul>
                <a
                  href={plan.cta.href}
                  className="mt-8 rounded-full bg-neutral-900 px-6 py-3 text-center font-bold text-amber-50 hover:bg-neutral-700"
                >
                  {plan.cta.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section
        id={site.finalCta.id}
        className="bg-amber-500 py-24 text-center text-neutral-900"
      >
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-4xl font-black">{site.finalCta.title}</h2>
          <p className="mt-4 text-lg">{site.finalCta.subtitle}</p>
          <a
            href={site.finalCta.cta.href}
            className="mt-8 inline-block rounded-full bg-neutral-900 px-8 py-4 font-bold text-amber-50 hover:bg-neutral-700"
          >
            {site.finalCta.cta.label}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 sm:flex-row">
          <p>{site.footer.copyright}</p>
          <ul className="flex gap-6">
            {site.footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-amber-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
