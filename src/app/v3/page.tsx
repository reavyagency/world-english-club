"use client";

/**
 * VERSÃO 3, "Bold light / warm editorial".
 *
 * Mesma copy da V1 (fonte única: src/content/site.ts), porém com uma
 * linguagem de layout distinta: tema claro e quente (off-white), tipografia
 * oversized, bordas grossas (2px), badges tipo adesivo, sombras hard-offset
 * e faixas escuras pontuais como âncora visual.
 *
 * Escopo: este arquivo é 100% autocontido. Reutiliza apenas os primitivos
 * que funcionam bem em tema claro (StatCounter, Disclosure, Accordion,
 * MediaPlaceholder, Reveal*) e o `brand` config para as URLs.
 */

import Image from "next/image";
import { useState, type ReactNode, type AnchorHTMLAttributes } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Check,
  Star,
  Quote,
  Blocks,
  BookOpen,
  Repeat,
  Luggage,
  CalendarClock,
  Smartphone,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { site } from "@/content/site";
import { brand } from "@/config/brand";
import { StatCounter } from "@/components/ui/StatCounter";
import { Accordion, Disclosure } from "@/components/ui/Accordion";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialIcon } from "@/components/ui/SocialIcon";

/* -------------------------------------------------------------------------- */
/*  Paleta / tokens locais (tema claro quente)                                */
/* -------------------------------------------------------------------------- */

const INK = "#1B160F"; // marrom-quase-preto quente (faixas âncora)

/* -------------------------------------------------------------------------- */
/*  Átomos de UI locais                                                       */
/* -------------------------------------------------------------------------- */

/** Adesivo/badge com borda grossa. */
function Sticker({
  children,
  className = "",
  icon: Icon,
}: {
  children: ReactNode;
  className?: string;
  icon?: LucideIcon;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border-2 border-neutral-900 px-3 py-1 text-xs font-black uppercase tracking-[0.08em] ${className}`}
    >
      {Icon ? <Icon size={13} aria-hidden strokeWidth={2.75} /> : null}
      {children}
    </span>
  );
}

/** CTA primário, pílula escura (sempre → #planos). */
function PillDark({
  href,
  children,
  className = "",
  big = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  big?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 font-bold text-white transition-all duration-200 hover:bg-neutral-800 hover:shadow-[0_16px_40px_-12px_rgba(245,158,11,0.7)] active:scale-[0.98] ${
        big ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
      } ${className}`}
    >
      {children}
      <ArrowRight
        size={big ? 20 : 17}
        aria-hidden
        strokeWidth={2.5}
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </a>
  );
}

/** CTA secundário, pílula clara com contorno grosso. */
function PillOutline({
  href,
  children,
  className = "",
  big = false,
  ...rest
}: {
  href: string;
  children: ReactNode;
  className?: string;
  big?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-900 bg-transparent font-bold text-neutral-900 transition-all duration-200 hover:bg-neutral-900 hover:text-white active:scale-[0.98] ${
        big ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
      } ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Faixa full-bleed (a página é centralizada; cada seção controla seu fundo). */
function Band({
  id,
  children,
  className = "",
  inner = "max-w-6xl",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  inner?: string;
}) {
  return (
    <section id={id} className={`px-5 sm:px-8 ${className}`}>
      <div className={`mx-auto w-full ${inner}`}>{children}</div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                     */
/* -------------------------------------------------------------------------- */

function HeaderV3() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-neutral-900 bg-[#FAF7F2]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center" aria-label={site.brand.name}>
          <BrandLogo variant="light" className="h-9 w-auto" priority />
        </a>

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-900 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <PillDark href="#planos" className="hidden sm:inline-flex">
            {site.hero.primaryCta.label}
          </PillDark>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-v3"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border-2 border-neutral-900 bg-white text-neutral-900 md:hidden"
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav-v3"
          aria-label="Navegação mobile"
          className="border-t-2 border-neutral-900 bg-[#FAF7F2] md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base font-bold text-neutral-900 hover:bg-amber-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <PillDark href="#planos" className="w-full">
                {site.hero.primaryCta.label}
              </PillDark>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  1, Hero                                                                   */
/* -------------------------------------------------------------------------- */

function Hero() {
  const { hero } = site;
  return (
    <Band className="relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-24">
      {/* manchas quentes de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-300/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Coluna texto */}
        <Reveal className="flex flex-col items-start">
          <Sticker className="bg-amber-300 text-neutral-900" icon={Sparkles}>
            {hero.eyebrow}
          </Sticker>

          <h1 className="mt-6 font-display text-[2.6rem] font-black leading-[0.98] tracking-tight text-neutral-900 sm:text-6xl lg:text-[4.1rem]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PillDark href={hero.primaryCta.href} big>
              {hero.primaryCta.label}
            </PillDark>
            <PillOutline href={hero.secondaryCta.href} big>
              {hero.secondaryCta.label}
            </PillOutline>
          </div>

          {/* Prova social */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-1 text-amber-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-amber-400"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-neutral-700">
              {hero.socialProof.studentsLabel}
              <span className="mx-1.5 text-neutral-400">•</span>
              {hero.socialProof.ratingLabel}
            </p>
          </div>

          {/* Selos */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {hero.seals.map((seal) => (
              <li key={seal}>
                <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-neutral-900 bg-white px-3 py-1.5 text-xs font-bold text-neutral-800">
                  <Check
                    size={14}
                    strokeWidth={3}
                    className="text-amber-500"
                    aria-hidden
                  />
                  {seal}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Coluna mídia */}
        <Reveal delay={0.12} className="relative">
          <div className="relative rounded-[2rem] border-2 border-neutral-900 bg-white p-3 shadow-[12px_12px_0_0_#1B160F]">
            <VideoPlayer
              videoId={hero.media.youtubeId}
              start={hero.media.start}
              label="vídeo do produto"
              aspect="16 / 9"
              className="!rounded-[1.4rem]"
            />
            <span className="absolute -left-3 -top-3 rotate-[-6deg]">
              <Sticker className="bg-brand text-white shadow-sm">A1 → B1</Sticker>
            </span>
          </div>
          {/* mini-cards de stats */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {hero.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border-2 border-neutral-900 bg-amber-50 px-3 py-3 text-center"
              >
                <div className="font-display text-base font-black leading-tight text-neutral-900">
                  {s.value}
                </div>
                <div className="mt-0.5 text-[0.65rem] font-medium leading-tight text-neutral-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* -------------------------------------------------------------------------- */
/*  2, Barra de credibilidade (faixa escura, count-up)                       */
/* -------------------------------------------------------------------------- */

function CredibilityBar() {
  const { items } = site.credibility;
  return (
    <section className="px-5 sm:px-8" style={{ backgroundColor: INK }}>
      <div className="mx-auto w-full max-w-6xl py-12 sm:py-14">
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {items.map((item) => (
            <RevealItem key={item.label} className="text-center md:text-left">
              <div className="font-display text-4xl font-black leading-none text-amber-400 sm:text-5xl">
                <StatCounter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  displayOverride={
                    "displayOverride" in item ? item.displayOverride : undefined
                  }
                />
              </div>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-snug text-neutral-300 md:mx-0">
                {item.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  3, Conexão emocional                                                      */
/* -------------------------------------------------------------------------- */

function EmotionalConnection() {
  const { emotional } = site;
  return (
    <Band
      className="border-y-2 border-neutral-900 bg-amber-50 py-20 sm:py-28"
      inner="max-w-4xl"
    >
      <Reveal>
        <Quote size={56} aria-hidden strokeWidth={2.5} className="text-amber-400" />
        <h2 className="mt-5 font-display text-3xl font-black leading-[1.05] tracking-tight text-neutral-900 sm:text-[2.75rem]">
          {emotional.title}
        </h2>
        <div className="mt-8 space-y-5 border-l-4 border-neutral-900 pl-6">
          {emotional.body.map((p, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-neutral-700 sm:text-xl"
            >
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </Band>
  );
}

/* -------------------------------------------------------------------------- */
/*  4, Método (3 passos)                                                       */
/* -------------------------------------------------------------------------- */

const methodIcons: Record<string, LucideIcon> = {
  blocks: Blocks,
  "book-open": BookOpen,
  repeat: Repeat,
};

function Method() {
  const { method } = site;
  return (
    <Band id={method.id} className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <Sticker className="bg-neutral-900 text-white">Método WEC</Sticker>
        <h2 className="mt-5 font-display text-3xl font-black leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          {method.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-600">{method.subtitle}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {method.steps.map((step) => {
          const Icon = methodIcons[step.icon] ?? Blocks;
          return (
            <RevealItem key={step.number}>
              <article className="group flex h-full flex-col rounded-[1.75rem] border-2 border-neutral-900 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#F59E0B]">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-neutral-900 bg-amber-300 text-neutral-900">
                    <Icon size={26} aria-hidden strokeWidth={2.25} />
                  </span>
                  <span
                    className="font-display text-6xl font-black leading-none text-neutral-900/10"
                    aria-hidden
                  >
                    0{step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-black text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-12">
        <PillDark href={method.cta.href} big>
          {method.cta.label}
        </PillDark>
      </Reveal>
    </Band>
  );
}

/* -------------------------------------------------------------------------- */
/*  5, Módulos + bônus + grade                                                */
/* -------------------------------------------------------------------------- */

function Modules() {
  const { modules } = site;
  return (
    <Band
      id={modules.id}
      className="border-t-2 border-neutral-900 bg-white py-20 sm:py-28"
    >
      <Reveal className="max-w-2xl">
        <Sticker className="bg-amber-300 text-neutral-900">Conteúdo</Sticker>
        <h2 className="mt-5 font-display text-3xl font-black leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          {modules.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-600">{modules.subtitle}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {modules.items.map((mod, i) => (
          <RevealItem key={mod.tag}>
            <article className="flex h-full flex-col rounded-[1.75rem] border-2 border-neutral-900 bg-[#FAF7F2] p-7">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border-2 border-neutral-900 bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-wide text-neutral-900">
                  {mod.tag}
                </span>
                <span
                  className="font-display text-2xl font-black text-neutral-900/20"
                  aria-hidden
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-black text-neutral-900">
                {mod.title}
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                {mod.description}
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Bônus Trip Tip, faixa escura de destaque */}
      <Reveal delay={0.1}>
        <div
          className="mt-6 flex flex-col items-start gap-5 rounded-[1.75rem] border-2 border-neutral-900 p-7 sm:flex-row sm:items-center"
          style={{ backgroundColor: INK }}
        >
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-2 border-amber-400 bg-amber-400/15 text-amber-400">
            <Luggage size={30} aria-hidden strokeWidth={2.25} />
          </span>
          <div>
            <span className="inline-flex items-center rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-wide text-neutral-900">
              {modules.bonus.tag}
            </span>
            <h3 className="mt-2 font-display text-xl font-black text-white sm:text-2xl">
              {modules.bonus.title}
            </h3>
            <p className="mt-2 leading-relaxed text-neutral-300">
              {modules.bonus.description}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Grade completa (progressive disclosure) */}
      <Reveal delay={0.15} className="mt-10">
        <Disclosure label={modules.gradeToggleLabel}>
          <ul className="mt-6 grid gap-x-8 gap-y-3 rounded-[1.5rem] border-2 border-neutral-900 bg-[#FAF7F2] p-6 sm:grid-cols-2">
            {modules.grade.map((lesson) => (
              <li
                key={lesson}
                className="flex items-start gap-2.5 text-neutral-800"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-neutral-900 bg-amber-300">
                  <Check
                    size={13}
                    strokeWidth={3.5}
                    className="text-neutral-900"
                    aria-hidden
                  />
                </span>
                <span className="font-medium">{lesson}</span>
              </li>
            ))}
          </ul>
        </Disclosure>
      </Reveal>
    </Band>
  );
}

/* -------------------------------------------------------------------------- */
/*  6, Planos                                                                  */
/* -------------------------------------------------------------------------- */

function Plans() {
  const { plans } = site;
  return (
    <Band
      id={plans.id}
      className="border-y-2 border-neutral-900 bg-amber-50 py-20 sm:py-28"
    >
      <Reveal className="max-w-2xl">
        <Sticker className="bg-neutral-900 text-white">Planos</Sticker>
        <h2 className="mt-5 font-display text-3xl font-black leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          {plans.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-700">{plans.subtitle}</p>
      </Reveal>

      <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
        {plans.items.map((plan) => {
          const highlight = plan.highlight;
          return (
            <Reveal key={plan.name} delay={highlight ? 0 : 0.08}>
              <article
                className={`relative flex h-full flex-col rounded-[2rem] border-2 border-neutral-900 p-8 ${
                  highlight
                    ? "text-white shadow-[10px_10px_0_0_#F59E0B]"
                    : "bg-white text-neutral-900"
                }`}
                style={highlight ? { backgroundColor: INK } : undefined}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-black">
                    {plan.name}
                  </h3>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-black uppercase tracking-wide ${
                      highlight
                        ? "bg-amber-400 text-neutral-900"
                        : "border-2 border-neutral-900 bg-amber-200 text-neutral-900"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl font-black leading-none">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-1 text-lg font-semibold ${
                      highlight ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-2 inline-flex w-fit items-center rounded-full px-3 py-1 text-sm font-bold ${
                    highlight
                      ? "bg-white/10 text-amber-400"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {plan.perDay}, {plan.price}
                  {plan.period}
                </p>

                <ul className="mt-7 flex-1 space-y-3.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md ${
                          highlight
                            ? "bg-amber-400"
                            : "border-2 border-neutral-900 bg-amber-300"
                        }`}
                      >
                        <Check
                          size={13}
                          strokeWidth={3.5}
                          className="text-neutral-900"
                          aria-hidden
                        />
                      </span>
                      <span
                        className={`leading-snug ${
                          highlight ? "text-neutral-200" : "text-neutral-700"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.cta.href}
                  className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-black transition-all duration-200 active:scale-[0.98] ${
                    highlight
                      ? "bg-amber-400 text-neutral-900 hover:bg-amber-300"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  {plan.cta.label}
                  <ArrowRight
                    size={19}
                    aria-hidden
                    strokeWidth={2.5}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Trust footer */}
      <Reveal delay={0.1}>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {plans.trustFooter.map((t) => (
            <li key={t}>
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-neutral-900 bg-white px-4 py-2 text-sm font-bold text-neutral-800">
                <ShieldCheck
                  size={16}
                  className="text-amber-500"
                  aria-hidden
                  strokeWidth={2.5}
                />
                {t}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Band>
  );
}

/* -------------------------------------------------------------------------- */
/*  7, Depoimentos                                                             */
/* -------------------------------------------------------------------------- */

function Testimonials() {
  const { testimonials } = site;
  return (
    <Band id={testimonials.id} className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <Sticker className="bg-amber-300 text-neutral-900" icon={Star}>
          Depoimentos
        </Sticker>
        <h2 className="mt-5 font-display text-3xl font-black leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          {testimonials.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-600">{testimonials.subtitle}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.videos.map((t) => (
          <RevealItem key={t.name} className="h-full">
            <article className="flex h-full flex-col rounded-[1.75rem] border-2 border-neutral-900 bg-white p-4 shadow-[10px_10px_0_0_#1B160F]">
              <div className="overflow-hidden rounded-2xl border-2 border-neutral-900">
                <VideoPlayer
                  videoId={t.youtubeId}
                  label="depoimento"
                  aspect="16 / 9"
                  className="!rounded-none"
                />
              </div>

              {/* Avaliação. No fundo claro, âmbar mais escuro para o selo ter
                  contraste suficiente como elemento gráfico. */}
              <div
                className="mt-5 flex items-center gap-1 px-1 text-amber-500"
                role="img"
                aria-label="Avaliação: 5 de 5 estrelas"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-current" aria-hidden />
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 px-1">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-neutral-900 bg-amber-300 font-display text-base font-black text-neutral-900">
                  {t.name.replace(/[[\]]/g, "").charAt(0).toUpperCase() || "★"}
                </span>
                <div>
                  <p className="font-black text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Band>
  );
}

/* -------------------------------------------------------------------------- */
/*  8, Autor (John Silva)                                                      */
/* -------------------------------------------------------------------------- */

function Author() {
  const { author } = site;
  return (
    <Band
      id={author.id}
      className="border-y-2 border-neutral-900 bg-white py-20 sm:py-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-sm rounded-[2rem] border-2 border-neutral-900 bg-[#FAF7F2] p-3 shadow-[10px_10px_0_0_#1B160F]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border-2 border-neutral-900">
              <Image
                src={brand.assets.author}
                alt="John Silva"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-neutral-900 bg-amber-400 px-4 py-2 font-display text-base font-black text-neutral-900">
              {author.name}
            </span>
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <Sticker className="bg-neutral-900 text-white">{author.badge}</Sticker>
          <h2 className="mt-5 font-display text-3xl font-black leading-[1.08] tracking-tight text-neutral-900 sm:text-[2.5rem]">
            {author.title}
          </h2>
          <div className="mt-6 space-y-4">
            {author.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-neutral-700">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* -------------------------------------------------------------------------- */
/*  9, Garantia                                                                */
/* -------------------------------------------------------------------------- */

const guaranteeIcons: Record<string, LucideIcon> = {
  "calendar-clock": CalendarClock,
  smartphone: Smartphone,
};

function Guarantee() {
  const { guarantee } = site;
  return (
    <Band className="py-20 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="flex items-start gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-2 border-neutral-900 bg-amber-400 text-neutral-900">
              <ShieldCheck size={32} aria-hidden strokeWidth={2.25} />
            </span>
            <div>
              <Sticker className="bg-amber-300 text-neutral-900">7 dias</Sticker>
              <h2 className="mt-3 font-display text-3xl font-black leading-[1.05] tracking-tight text-neutral-900 sm:text-[2.5rem]">
                {guarantee.title}
              </h2>
            </div>
          </div>
          <p className="mt-6 max-w-xl border-l-4 border-amber-400 pl-6 text-lg leading-relaxed text-neutral-700">
            {guarantee.body}
          </p>
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {guarantee.seals.map((seal) => {
            const Icon = guaranteeIcons[seal.icon] ?? ShieldCheck;
            return (
              <RevealItem key={seal.title}>
                <div className="flex items-center gap-4 rounded-2xl border-2 border-neutral-900 bg-white p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-neutral-900 bg-amber-100 text-amber-600">
                    <Icon size={24} aria-hidden strokeWidth={2.25} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-black text-neutral-900">
                      {seal.title}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {seal.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </Band>
  );
}

/* -------------------------------------------------------------------------- */
/*  10, FAQ (Accordion escuro como bloco âncora)                              */
/* -------------------------------------------------------------------------- */

function Faq() {
  const { faq } = site;
  return (
    <Band
      id={faq.id}
      className="border-t-2 border-neutral-900 bg-white py-20 sm:py-28"
      inner="max-w-3xl"
    >
      <Reveal className="mb-12 text-center">
        <span className="mx-auto inline-flex items-center rounded-full border-2 border-neutral-900 bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-neutral-900">
          FAQ
        </span>
        <h2 className="mt-5 font-display text-3xl font-black leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          {faq.title}
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="overflow-hidden rounded-[1.5rem] border-2 border-neutral-900 shadow-[10px_10px_0_0_#F59E0B]">
          <Accordion items={faq.items} />
        </div>
      </Reveal>
    </Band>
  );
}

/* -------------------------------------------------------------------------- */
/*  11, CTA final (faixa escura)                                              */
/* -------------------------------------------------------------------------- */

function FinalCta() {
  const { finalCta } = site;
  return (
    <section
      id={finalCta.id}
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
      style={{ backgroundColor: INK }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/25 blur-3xl"
      />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-neutral-900">
          <Sparkles size={13} aria-hidden strokeWidth={2.75} /> Última chamada
        </span>
        <h2 className="mt-6 font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl">
          {finalCta.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
          {finalCta.subtitle}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={finalCta.primaryCta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-base font-black text-neutral-900 transition-all duration-200 hover:bg-amber-300 active:scale-[0.98]"
          >
            {finalCta.primaryCta.label}
            <ArrowRight
              size={20}
              aria-hidden
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={brand.urls.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-[0.98]"
          >
            <MessageCircle size={19} aria-hidden strokeWidth={2.25} />
            {finalCta.secondaryCta.label}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                      */
/* -------------------------------------------------------------------------- */

function FooterV3() {
  const { footer } = site;
  return (
    <footer className="border-t-2 border-neutral-900 bg-[#FAF7F2] px-5 py-12 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <BrandLogo variant="light" className="h-10 w-auto" />
            <p className="mt-3 text-sm text-neutral-600">
              {site.brand.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <nav aria-label="Links">
              <ul className="space-y-2">
                {footer.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm font-semibold text-neutral-700 underline-offset-4 hover:text-neutral-900 hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Redes sociais">
              <ul className="space-y-2">
                {footer.social.map((l) => {
                  const key = l.label.toLowerCase();
                  const href =
                    key === "whatsapp"
                      ? brand.urls.whatsapp
                      : key === "instagram"
                        ? brand.urls.instagram
                        : key === "youtube"
                          ? brand.urls.youtube
                          : l.href;
                  return (
                    <li key={l.label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={l.label}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 underline-offset-4 hover:text-neutral-900 hover:underline"
                      >
                        <SocialIcon label={l.label} size={16} />
                        {l.label}
                        <ArrowUpRight size={14} aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-neutral-900 pt-6">
          <p className="text-sm font-medium text-neutral-700">
            {footer.copyright}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-neutral-500">
            {footer.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Página                                                                      */
/* -------------------------------------------------------------------------- */

export default function V3() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[#FAF7F2] font-sans text-neutral-900"
    >
      <HeaderV3 />
      <main>
        <Hero />
        <CredibilityBar />
        <EmotionalConnection />
        <Method />
        <Modules />
        <Plans />
        <Testimonials />
        <Author />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <FooterV3 />
    </div>
  );
}
