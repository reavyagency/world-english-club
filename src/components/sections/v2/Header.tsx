"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { BrandLogo } from "@/components/ui/BrandLogo";

/**
 * V2, Header (navy).
 *
 * No topo é transparente (deixa o hero respirar) e ao rolar ganha superfície
 * navy translúcida + hairline — a barra só aparece quando passa a ser útil.
 * CTA compacto dourado com texto NAVY (nunca branco sobre dourado).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: marca em dourado o item da seção que está sendo lida.
  useEffect(() => {
    const targets = site.nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Entre as seções visíveis, vence a que está mais perto do topo.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveHref(`#${visible[0].target.id}`);
      },
      // Faixa de leitura: ~topo abaixo do header até o meio da tela.
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-hairline bg-navy-900/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center" aria-label={site.brand.name}>
          <BrandLogo variant="dark" className="h-7 w-auto" priority />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {site.nav.map((item) => {
            const active = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "location" : undefined}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-slate-300"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#planos"
          className="gold-metal hidden rounded-full px-5 py-2 text-sm font-semibold text-navy-900 transition-[filter] duration-200 hover:brightness-110 md:inline-flex"
        >
          Começar
        </a>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      {menuOpen ? (
        <nav
          className="border-t border-hairline bg-navy-900 px-6 py-4 md:hidden"
          aria-label="Principal (mobile)"
        >
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => {
              const active = activeHref === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "location" : undefined}
                    className={`block py-2.5 transition-colors hover:text-gold ${
                      active ? "text-gold" : "text-slate-300"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-3">
              <a
                href="#planos"
                onClick={() => setMenuOpen(false)}
                className="gold-metal flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-navy-900"
              >
                Começar agora
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
