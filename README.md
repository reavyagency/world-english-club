# World English Club 🌍🗣️

Landing page de conversão da escola de inglês **World English Club (WEC)**, curso online do zero à conversação (A1 → B1), sem promessas mágicas.

Construída para **3 versões de layout** servidas em `/v1`, `/v2` e `/v3`. As três compartilham **a mesma copy**; o que muda é apenas o **layout**.

> **`/v1`** é a landing premium completa (layout de referência, 11 seções + header + footer).
> **`/v2`** e **`/v3`** são layouts alternativos da mesma copy (a refinar conforme os specs de cada um).

## 🧱 Stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **TypeScript**
- **Tailwind CSS v4** com design tokens em CSS variables
- **Framer Motion** (animações de scroll, count-up, micro-interações)
- **lucide-react** (ícones) · fontes **Sora** (display) + **Inter** (corpo) via `next/font`
- Deploy recomendado: **[Vercel](https://vercel.com)**

## 🚀 Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha as URLs quando existirem (opcional)
npm run dev
```

Abra:

- http://localhost:3000, índice/switcher entre as versões
- http://localhost:3000/v1, landing premium (referência)
- http://localhost:3000/v2 · `/v3`, layouts alternativos

## 🗂️ Estrutura

```plaintext
src/
├── app/
│   ├── layout.tsx            # fontes, metadata pt-BR, JSON-LD (Course/Organization)
│   ├── globals.css           # ✨ DESIGN TOKENS (cores da marca) + utilitários
│   ├── page.tsx              # switcher de versões (dev)
│   ├── v1/page.tsx           # landing premium (compõe as seções)
│   ├── v2/page.tsx           # layout alternativo
│   └── v3/page.tsx           # layout alternativo
├── components/
│   ├── ui/                   # primitivos: Button, Card, Section, StatCounter,
│   │                         #   MediaPlaceholder, Accordion, Reveal
│   └── sections/             # 1 componente por seção (Header, Hero, Plans, ...)
├── content/
│   └── site.ts               # ✨ FONTE ÚNICA DA COPY (compartilhada pelas 3 versões)
└── config/
    └── brand.ts              # ✨ MARCA e URLs (checkout, WhatsApp, Instagram)
```

## 🔧 Onde configurar cada coisa

| Quero mudar…                    | Arquivo                                            |
| ------------------------------- | -------------------------------------------------- |
| **Textos / copy**               | [`src/content/site.ts`](src/content/site.ts)       |
| **Cores da marca**              | [`src/app/globals.css`](src/app/globals.css) → bloco `@theme` (`--color-brand`, `--color-brand-2`, `--color-accent`) |
| **URLs** (checkout, WhatsApp…)  | `.env.local` (ver [`.env.example`](.env.example))  |
| **Logo, fotos, vídeos**         | `public/brand/` + [`src/config/brand.ts`](src/config/brand.ts) |

### Placeholders a substituir

A copy contém marcadores `[[ ... ]]` para **dados que precisam ser reais** (nº de alunos, nota, depoimentos, CNPJ). Nunca invente esses valores, substitua pelos reais. Assets ainda não fornecidos aparecem como placeholders elegantes (blocos com aspect-ratio correto), então a página fica apresentável mesmo sem os arquivos finais.

## ✅ Conformidade

- **Sem dark patterns**: nenhuma escassez falsa, contador fake ou preço riscado fictício. Framing "R$/dia" sempre com o valor mensal cheio ao lado.
- **Acessível** (WCAG AA): foco visível, `aria` nos acordeões, navegação por teclado, `prefers-reduced-motion` respeitado.
- **SEO**: metadata pt-BR + Open Graph + JSON-LD (`Course`/`Organization`).
- **Mobile-first** e responsivo (360 / 768 / 1280).

## 📦 Scripts

| Comando         | O que faz                     |
| --------------- | ----------------------------- |
| `npm run dev`   | Servidor de desenvolvimento   |
| `npm run build` | Build de produção             |
| `npm run start` | Sobe o build de produção      |
| `npm run lint`  | ESLint                        |

## 🌐 Domínios (produção)

Cada domínio apontará para uma versão (`/v1`, `/v2`, `/v3`), via configuração da Vercel ou `middleware` do Next.js, a definir no deploy.
