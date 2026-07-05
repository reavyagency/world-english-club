# World English Club 🌍🗣️

Landing page da escola de inglês **World English Club**, em **3 versões de layout** servidas nas rotas `/v1`, `/v2` e `/v3`.

As três versões compartilham **a mesma copy** (texto). O que muda entre elas é apenas o **layout**.

## 🧱 Stack

- **[Next.js 16](https://nextjs.org)** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- Deploy recomendado: **[Vercel](https://vercel.com)**

## 🗂️ Estrutura

```plaintext
src/
├── app/
│   ├── layout.tsx        # layout raiz (metadata, fontes)
│   ├── page.tsx          # índice de desenvolvimento (switcher /v1 /v2 /v3)
│   ├── globals.css       # estilos globais + Tailwind
│   ├── v1/page.tsx       # Versão 1 (layout próprio)
│   ├── v2/page.tsx       # Versão 2 (layout próprio)
│   └── v3/page.tsx       # Versão 3 (layout próprio)
└── content/
    └── site.ts           # ✨ FONTE ÚNICA da copy (compartilhada pelas 3 versões)

.agents/                  # AG Kit — toolkit de agentes de IA (ver .agents/ARCHITECTURE.md)
```

### Como funciona a arquitetura de versões

- **Copy** → mora só em [`src/content/site.ts`](src/content/site.ts). Edite o texto uma vez e ele reflete nas 3 versões.
- **Layout** → cada versão tem seu próprio `page.tsx` e monta o visual do seu jeito, consumindo a copy compartilhada.

## 🚀 Rodando localmente

```bash
npm install       # instala as dependências
npm run dev       # inicia o servidor de desenvolvimento
```

Abra:

- http://localhost:3000 — índice com o seletor de versões
- http://localhost:3000/v1 — Versão 1
- http://localhost:3000/v2 — Versão 2
- http://localhost:3000/v3 — Versão 3

## 📦 Scripts

| Comando         | O que faz                              |
| --------------- | -------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento (Turbopack)|
| `npm run build` | Build de produção                      |
| `npm run start` | Sobe o build de produção               |
| `npm run lint`  | Verifica o código com ESLint           |

## 🌐 Domínios (produção)

Em produção, cada domínio apontará para uma versão (`/v1`, `/v2`, `/v3`). O
mapeamento domínio → rota pode ser feito via configuração da Vercel ou por
`middleware` do Next.js — a ser definido no deploy.

## 📄 Licença

A definir.
