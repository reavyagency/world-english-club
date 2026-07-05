"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

/**
 * V2 — Header minimalista (barra fina). Wordmark à esquerda, nav central
 * discreta, CTA em pílula com contorno teal. Ganha blur + borda ao rolar.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* [[LOGO]] — wordmark textual até o SVG real */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-[0.95rem] font-bold tracking-tight"
        >
          <span className="grid h-6 w-6 place-items-center rounded-md border border-emerald-400/40 bg-emerald-400/10 text-xs text-accent">
            W
          </span>
          <span>{site.brand.shortName}</span>
          <span className="hidden text-muted sm:inline">·</span>
          <span className="hidden text-sm font-medium text-muted sm:inline">
            {site.brand.name}
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.82rem] font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#planos"
            className="group inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-4 py-1.5 text-[0.82rem] font-semibold text-ink transition-all hover:border-emerald-400/70 hover:bg-emerald-400/10"
          >
            Começar
            <ArrowUpRight
              size={15}
              className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Toggle mobile */}
        <button
          className="text-ink md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen ? (
        <nav className="border-t border-line bg-bg/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-muted hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#planos"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2.5 text-sm font-semibold text-ink"
              >
                Começar agora
                <ArrowUpRight size={16} className="text-accent" />
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
