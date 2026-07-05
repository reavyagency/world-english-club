"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

/**
 * Header fixo (sticky). Ganha blur + borda e encolhe ao rolar.
 * [[LOGO]] — trocar o wordmark textual pelo SVG real quando chegar.
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* [[LOGO]] */}
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-sm text-white">
            W
          </span>
          <span>{site.brand.name}</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#planos">Começar agora</Button>
        </div>

        {/* Toggle mobile */}
        <button
          className="md:hidden text-ink"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
              <Button href="#planos" className="w-full" onClick={() => setMenuOpen(false)}>
                Começar agora
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
