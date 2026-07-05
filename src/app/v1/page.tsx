import { site } from "@/content/site";

/**
 * VERSÃO 1 — layout provisório.
 *
 * Estrutura de partida (clássica, centralizada). Consome a copy de
 * `src/content/site.ts`. O layout definitivo será aplicado a partir do
 * prompt de design.
 */

export default function V1() {
  return (
    <div className="flex flex-1 flex-col bg-white text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold text-blue-600">
            {site.brand.name}
          </span>
          <ul className="hidden gap-6 text-sm text-neutral-600 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-blue-600">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.hero.primaryCta.href}
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {site.hero.primaryCta.label}
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          {site.hero.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          {site.hero.title}
        </h1>
        <p className="mt-6 text-lg text-neutral-600">{site.hero.subtitle}</p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href={site.hero.primaryCta.href}
            className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
          >
            {site.hero.primaryCta.label}
          </a>
          <a
            href={site.hero.secondaryCta.href}
            className="rounded-full border border-neutral-300 px-7 py-3 font-semibold hover:border-neutral-500"
          >
            {site.hero.secondaryCta.label}
          </a>
        </div>
        <dl className="mt-12 flex justify-center gap-10">
          {site.hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="text-3xl font-bold text-blue-600">{s.value}</dt>
              <dd className="text-sm text-neutral-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Features */}
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">
        {site.features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-black/5 p-6">
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{f.description}</p>
          </div>
        ))}
      </section>

      {/* Método */}
      <section id={site.method.id} className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">
            {site.method.title}
          </h2>
          <p className="mt-3 text-center text-neutral-600">
            {site.method.subtitle}
          </p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.method.steps.map((step) => (
              <li key={step.number} className="rounded-2xl bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {step.number}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Planos */}
      <section id={site.plans.id} className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">{site.plans.title}</h2>
          <p className="mt-3 text-center text-neutral-600">
            {site.plans.subtitle}
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {site.plans.items.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.highlight
                    ? "border-blue-600 shadow-lg"
                    : "border-black/10"
                }`}
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-neutral-500">{plan.period}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-600">
                  {plan.features.map((feat) => (
                    <li key={feat}>✓ {feat}</li>
                  ))}
                </ul>
                <a
                  href={plan.cta.href}
                  className={`mt-8 rounded-full px-6 py-3 text-center font-semibold ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-neutral-300 hover:border-neutral-500"
                  }`}
                >
                  {plan.cta.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id={site.testimonials.id} className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">
            {site.testimonials.title}
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {site.testimonials.items.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-white p-6">
                <blockquote className="text-neutral-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-neutral-500">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id={site.faq.id} className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold">{site.faq.title}</h2>
          <div className="mt-10 divide-y divide-black/10">
            {site.faq.items.map((item) => (
              <details key={item.question} className="py-5">
                <summary className="cursor-pointer font-semibold">
                  {item.question}
                </summary>
                <p className="mt-3 text-neutral-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section
        id={site.finalCta.id}
        className="bg-blue-600 py-24 text-center text-white"
      >
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold">{site.finalCta.title}</h2>
          <p className="mt-4 text-blue-100">{site.finalCta.subtitle}</p>
          <a
            href={site.finalCta.cta.href}
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-blue-50"
          >
            {site.finalCta.cta.label}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 sm:flex-row">
          <p>{site.footer.copyright}</p>
          <ul className="flex gap-6">
            {site.footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-blue-600">
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
