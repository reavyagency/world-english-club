import { site } from "@/content/site";

/**
 * VERSÃO 2 — layout provisório.
 *
 * Estrutura de partida (hero dividido, acento verde). Mesma copy da V1,
 * layout diferente. Será refinada a partir do prompt de design.
 */

export default function V2() {
  return (
    <div className="flex flex-1 flex-col bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold text-emerald-400">
            {site.brand.name}
          </span>
          <ul className="hidden gap-6 text-sm text-neutral-300 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-emerald-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero dividido */}
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {site.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            {site.hero.title}
          </h1>
          <p className="mt-6 text-lg text-neutral-400">{site.hero.subtitle}</p>
          <div className="mt-8 flex gap-4">
            <a
              href={site.hero.primaryCta.href}
              className="rounded-lg bg-emerald-500 px-7 py-3 font-semibold text-neutral-950 hover:bg-emerald-400"
            >
              {site.hero.primaryCta.label}
            </a>
            <a
              href={site.hero.secondaryCta.href}
              className="rounded-lg border border-white/20 px-7 py-3 font-semibold hover:border-white/50"
            >
              {site.hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {site.hero.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-2xl font-bold text-emerald-400">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/10 bg-white/5 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.features.map((f) => (
            <div key={f.title}>
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Método */}
      <section id={site.method.id} className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">{site.method.title}</h2>
          <p className="mt-3 text-neutral-400">{site.method.subtitle}</p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.method.steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-white/10 p-6"
              >
                <span className="text-2xl font-bold text-emerald-400">
                  0{step.number}
                </span>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Planos */}
      <section id={site.plans.id} className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">{site.plans.title}</h2>
          <p className="mt-3 text-neutral-400">{site.plans.subtitle}</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {site.plans.items.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.highlight
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-white/10"
                }`}
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-neutral-400">{plan.period}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-400">
                  {plan.features.map((feat) => (
                    <li key={feat}>✓ {feat}</li>
                  ))}
                </ul>
                <a
                  href={plan.cta.href}
                  className="mt-8 rounded-lg bg-emerald-500 px-6 py-3 text-center font-semibold text-neutral-950 hover:bg-emerald-400"
                >
                  {plan.cta.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 sm:flex-row">
          <p>{site.footer.copyright}</p>
          <ul className="flex gap-6">
            {site.footer.social.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-emerald-400">
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
