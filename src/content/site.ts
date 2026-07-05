/**
 * Fonte única da copy do site (World English Club).
 *
 * As 3 versões (/v1, /v2, /v3) consomem ESTE mesmo conteúdo.
 * O que muda entre elas é apenas o LAYOUT — o texto vem sempre daqui.
 *
 * Os textos abaixo são placeholders realistas. Ajuste-os quando o
 * conteúdo final for definido (prompt de layout entra depois).
 */

export type CTA = {
  label: string;
  href: string;
};

export type Feature = {
  icon: string; // nome/emoji do ícone — cada versão decide como renderizar
  title: string;
  description: string;
};

export type Step = {
  number: number;
  title: string;
  description: string;
};

export type Plan = {
  name: string;
  price: string;
  period: string;
  highlight?: boolean;
  features: string[];
  cta: CTA;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const site = {
  brand: {
    name: "World English Club",
    shortName: "WEC",
    tagline: "Fale inglês de verdade, com o mundo.",
  },

  nav: [
    { label: "Método", href: "#metodo" },
    { label: "Cursos", href: "#cursos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#faq" },
  ] as CTA[],

  hero: {
    eyebrow: "Escola de inglês online",
    title: "Aprenda inglês conversando desde a primeira aula",
    subtitle:
      "Metodologia focada em conversação, professores nativos e turmas reduzidas. Do zero à fluência no seu ritmo.",
    primaryCta: { label: "Começar agora", href: "#planos" } as CTA,
    secondaryCta: { label: "Fazer aula experimental", href: "#contato" } as CTA,
    stats: [
      { value: "12k+", label: "alunos ativos" },
      { value: "98%", label: "recomendam" },
      { value: "40+", label: "países" },
    ],
  },

  features: [
    {
      icon: "🗣️",
      title: "Conversação desde o dia 1",
      description:
        "Você fala inglês em todas as aulas. Nada de decorar regras sem usar na prática.",
    },
    {
      icon: "🌎",
      title: "Professores nativos",
      description:
        "Aprenda pronúncia e cultura reais com quem cresceu falando inglês.",
    },
    {
      icon: "👥",
      title: "Turmas reduzidas",
      description:
        "No máximo 4 alunos por turma, para que você fale o tempo todo.",
    },
    {
      icon: "📱",
      title: "Estude de qualquer lugar",
      description:
        "Aulas ao vivo e material na plataforma, no computador ou no celular.",
    },
  ] as Feature[],

  method: {
    id: "metodo",
    title: "Um método pensado para você falar",
    subtitle: "Simples, prático e comprovado por milhares de alunos.",
    steps: [
      {
        number: 1,
        title: "Diagnóstico de nível",
        description:
          "Descobrimos seu ponto de partida e montamos uma trilha sob medida.",
      },
      {
        number: 2,
        title: "Aulas ao vivo",
        description:
          "Encontros semanais focados em conversação com professores nativos.",
      },
      {
        number: 3,
        title: "Prática guiada",
        description:
          "Exercícios, clubes de conversa e feedback contínuo entre as aulas.",
      },
      {
        number: 4,
        title: "Evolução real",
        description:
          "Acompanhe seu progresso e conquiste a fluência com confiança.",
      },
    ] as Step[],
  },

  plans: {
    id: "planos",
    title: "Escolha o plano ideal para você",
    subtitle: "Cancele quando quiser. Sem multa, sem burocracia.",
    items: [
      {
        name: "Essencial",
        price: "R$ 149",
        period: "/mês",
        features: [
          "1 aula em grupo por semana",
          "Acesso à plataforma",
          "Clubes de conversa mensais",
        ],
        cta: { label: "Assinar Essencial", href: "#contato" },
      },
      {
        name: "Premium",
        price: "R$ 299",
        period: "/mês",
        highlight: true,
        features: [
          "2 aulas em grupo por semana",
          "1 aula particular por mês",
          "Acesso completo à plataforma",
          "Clubes de conversa semanais",
        ],
        cta: { label: "Assinar Premium", href: "#contato" },
      },
      {
        name: "Intensivo",
        price: "R$ 549",
        period: "/mês",
        features: [
          "Aulas particulares ilimitadas",
          "Trilha acelerada de fluência",
          "Suporte prioritário",
          "Certificado de conclusão",
        ],
        cta: { label: "Assinar Intensivo", href: "#contato" },
      },
    ] as Plan[],
  },

  testimonials: {
    id: "depoimentos",
    title: "Histórias de quem já fala inglês",
    items: [
      {
        name: "Mariana Alves",
        role: "Analista de Marketing",
        quote:
          "Em 6 meses saí do básico para conseguir liderar reuniões em inglês no trabalho.",
      },
      {
        name: "Rafael Costa",
        role: "Desenvolvedor",
        quote:
          "As turmas pequenas fizeram toda a diferença. Falo muito mais do que em cursos tradicionais.",
      },
      {
        name: "Juliana Prado",
        role: "Estudante de intercâmbio",
        quote:
          "Cheguei nos EUA me sentindo segura para conversar sobre qualquer assunto.",
      },
    ] as Testimonial[],
  },

  faq: {
    id: "faq",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Preciso ter conhecimento prévio de inglês?",
        answer:
          "Não. Temos turmas do nível zero ao avançado. Fazemos um diagnóstico para te posicionar na trilha certa.",
      },
      {
        question: "As aulas são ao vivo ou gravadas?",
        answer:
          "As aulas principais são ao vivo com professores nativos. O material de apoio fica disponível na plataforma.",
      },
      {
        question: "Posso cancelar quando quiser?",
        answer:
          "Sim. Todos os planos são sem fidelidade — você cancela quando quiser, sem multa.",
      },
      {
        question: "Como funciona a aula experimental?",
        answer:
          "É uma aula gratuita para você conhecer o método e tirar dúvidas antes de assinar.",
      },
    ] as FAQ[],
  },

  finalCta: {
    id: "contato",
    title: "Pronto para falar inglês com o mundo?",
    subtitle: "Faça sua aula experimental gratuita e comece hoje mesmo.",
    cta: { label: "Quero minha aula gratuita", href: "#" } as CTA,
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} World English Club. Todos os direitos reservados.`,
    links: [
      { label: "Termos de uso", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "Contato", href: "#contato" },
    ] as CTA[],
    social: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "LinkedIn", href: "#" },
    ] as CTA[],
  },
} as const;

export type Site = typeof site;
