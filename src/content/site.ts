/**
 * FONTE ÚNICA da copy do site — World English Club (WEC).
 *
 * As versões de layout (/v1, /v2, /v3) consomem ESTE mesmo conteúdo.
 * O que muda entre elas é apenas o LAYOUT. Edite o texto aqui, uma vez.
 *
 * ⚠️ GUARDA-CORPOS ÉTICOS: só use números/depoimentos REAIS. Onde o dado
 * real ainda não existe, o valor abaixo é um placeholder marcado com
 * `[[ ... ]]` — substitua, nunca invente.
 *
 * URLs (checkout, WhatsApp, Instagram) ficam em `src/config/brand.ts`
 * e são configuráveis por variáveis de ambiente.
 */

export const site = {
  brand: {
    name: "World English Club",
    shortName: "WEC",
    tagline: "Do zero à conversação, sem promessas mágicas.",
  },

  // Navegação do header sticky
  nav: [
    { label: "Método", href: "#metodo" },
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Planos", href: "#planos" },
    { label: "Depoimentos", href: "#depoimentos" },
  ],

  // Seção 1 — Hero
  hero: {
    eyebrow: "Curso de inglês online para brasileiros",
    title: "Fale inglês com confiança — do zero ao intermediário (A1 → B1).",
    subtitle:
      "Sem promessas mágicas: método claro, prática orientada e um plano de estudos semana a semana. Você aprende, pratica e evolui no seu ritmo.",
    // Prova social — SUBSTITUIR pelos números reais
    socialProof: {
      studentsLabel: "Mais de [[Nº real]] alunos já estudam com a WEC",
      ratingLabel: "nota [[X,X]] em depoimentos",
    },
    primaryCta: { label: "Quero começar agora", href: "#planos" },
    secondaryCta: { label: "Ver como funciona", href: "#metodo" },
    seals: [
      "7 dias de garantia incondicional",
      "Acesso no celular e no computador",
      "1 ano de acesso",
    ],
    media: {
      caption: "Vídeo do produto — 16:9",
      aspect: "16/9",
    },
    // Mantido para os layouts /v2 e /v3 (mesmos números da barra de credibilidade)
    stats: [
      { value: "~20 anos", label: "com o idioma" },
      { value: "50+ aulas", label: "do A1 ao B1" },
      { value: "1.000 palavras", label: "por tema" },
    ],
  },

  // Seção 2 — Barra de credibilidade (count-up animado)
  credibility: {
    items: [
      { value: 20, prefix: "~", suffix: " anos", label: "de experiência do criador com o idioma" },
      { value: 50, prefix: "", suffix: "+ aulas", label: "do A1 ao B1, trilha estruturada" },
      { value: 1000, prefix: "", suffix: " palavras", label: "essenciais organizadas por tema" },
      { value: 1, prefix: "", suffix: "", label: "certificado de conclusão incluso", displayOverride: "Certificado" },
    ],
  },

  // Seção 3 — Conexão emocional (dor → aspiração)
  emotional: {
    title: "Quantas oportunidades você já deixou passar por causa do inglês?",
    body: [
      "A vaga que pedia inglês. O filme sem legenda. A viagem em que você só apontou no cardápio. Cada mês sem evoluir é uma porta que continua fechada — e o problema não é falta de capacidade, é falta de um método claro e de prática constante.",
      "A WEC existe pra mudar isso: uma trilha guiada, do básico à conversação, pensada pra quem já tentou e travou.",
    ],
  },

  // Seção 4 — Método WEC (mantém `steps` p/ v2/v3)
  method: {
    id: "metodo",
    title: "Um método em 3 passos — estrutura, vocabulário e prática.",
    subtitle: "Simples, prático e pensado para você falar desde a primeira aula.",
    steps: [
      {
        number: 1,
        icon: "blocks",
        title: "Estrutura com prática",
        description:
          "Construir frases: tempos verbais, pronomes, afirmativa/negativa/interrogativa, com exercícios desde a 1ª aula.",
      },
      {
        number: 2,
        icon: "book-open",
        title: "Vocabulário com prática",
        description:
          "Temas reais e úteis, com repetições inteligentes que fixam cada palavra.",
      },
      {
        number: 3,
        icon: "repeat",
        title: "Prática constante",
        description:
          "Áudios, PDFs, textos, quizzes e simulações de situações reais (viagem, trabalho, rotina) para desenvolver fluência.",
      },
    ],
    cta: { label: "Ver os planos", href: "#planos" },
  },

  // Seção 5 — O que você recebe (módulos)
  modules: {
    id: "conteudo",
    title: "3 módulos que te levam do alfabeto à conversação.",
    subtitle: "50+ aulas estruturadas, com PDFs, MP3s, quizzes e simulações reais.",
    items: [
      {
        tag: "Módulo 1",
        title: "Fundamentos",
        description:
          "Verbo To Be, tempos verbais, pronomes, perguntas, preposições, futuro e as 1.000 palavras essenciais.",
      },
      {
        tag: "Módulo 2",
        title: "Vocabulário e situações",
        description:
          "Profissões, casa, comida, cidade, lugares — em blocos de 50 palavras.",
      },
      {
        tag: "Módulo 3",
        title: "Consolidação e fluência",
        description:
          "Phrasal verbs, expressões, negócios, tecnologia, internet e textos temáticos.",
      },
    ],
    bonus: {
      icon: "luggage",
      tag: "Bônus",
      title: "Trip Tip — inglês de sobrevivência para viagem",
      description:
        "Aeroporto, avião, táxi, hotel, restaurante e supermercado: o inglês que você usa na prática ao viajar.",
    },
    gradeToggleLabel: "Ver a grade completa de aulas",
    grade: [
      "Alfabeto e pronúncia",
      "Verbo To Be (afirmativa, negativa, interrogativa)",
      "Pronomes pessoais e possessivos",
      "Presente simples e presente contínuo",
      "Passado simples e passado contínuo",
      "Futuro (will / going to)",
      "Preposições de tempo e lugar",
      "1.000 palavras essenciais por tema",
      "Vocabulário: profissões, casa, comida, cidade",
      "Phrasal verbs e expressões idiomáticas",
      "Inglês para negócios, tecnologia e internet",
      "Simulações de situações reais + quizzes",
    ],
  },

  // Seção 6 — Planos (mantém price/period/features/cta p/ v2/v3)
  plans: {
    id: "planos",
    title: "Escolha seu plano e comece hoje.",
    subtitle: "Sem promessas mágicas. Cancele quando quiser.",
    items: [
      {
        name: "Mentoria",
        badge: "MAIS COMPLETO",
        highlight: true,
        price: "R$ 297",
        period: "/mês",
        perDay: "≈ R$ 9,90 por dia",
        features: [
          "Tudo do plano Autoestudo",
          "1 aula individual de conversação por semana",
          "Correções e feedback do professor",
          "Suporte por WhatsApp",
        ],
        cta: { label: "Quero a Mentoria", href: "#planos" },
      },
      {
        name: "Autoestudo",
        badge: "MAIS POPULAR PARA COMEÇAR",
        highlight: false,
        price: "R$ 69,90",
        period: "/mês",
        perDay: "≈ R$ 2,30 por dia",
        features: [
          "Todos os módulos A1 → B1",
          "PDFs + MP3s + quizzes",
          "1 ano de acesso",
          "Atualizações inclusas",
        ],
        cta: { label: "Garantir acesso", href: "#planos" },
      },
    ],
    trustFooter: [
      "Pagamento seguro",
      "7 dias de garantia incondicional",
      "Cancele quando quiser",
    ],
  },

  // Seção 7 — Depoimentos (SUBSTITUIR por reais)
  testimonials: {
    id: "depoimentos",
    title: "Quem estuda com a WEC recomenda.",
    items: [
      {
        name: "[[Nome do aluno 1]]",
        role: "[[de onde saiu → aonde chegou]]",
        quote:
          "[[Depoimento real do aluno 1 — resultado concreto. Preferir vídeo.]]",
        hasVideo: true,
      },
      {
        name: "[[Nome do aluno 2]]",
        role: "[[de onde saiu → aonde chegou]]",
        quote: "[[Depoimento real do aluno 2 — resultado concreto.]]",
        hasVideo: false,
      },
      {
        name: "[[Nome do aluno 3]]",
        role: "[[de onde saiu → aonde chegou]]",
        quote: "[[Depoimento real do aluno 3 — resultado concreto.]]",
        hasVideo: false,
      },
    ],
  },

  // Seção 8 — Autoridade (John Silva)
  author: {
    id: "criador",
    title: "Criado por quem aprendeu na prática — e ensina do jeito que funciona.",
    badge: "Criador & professor",
    name: "John Silva",
    body: [
      "John Silva estuda inglês desde os 12 anos e soma quase duas décadas com o idioma. Aprofundou pronúncia e fluência com uma mentora americana, aplicou o inglês diariamente no comércio exterior e viveu no Canadá.",
      "De volta ao Brasil, começou dando aulas particulares — e desse trabalho de base nasceu o World English Club.",
    ],
  },

  // Seção 9 — Garantia
  guarantee: {
    title: "Compre sem medo: 7 dias de garantia incondicional.",
    body: "Acreditamos no valor do curso. Se em até 7 dias você achar que não é pra você, devolvemos 100% do valor — sem perguntas. O risco é nosso.",
    seals: [
      { icon: "calendar-clock", title: "1 ano de acesso", description: "Estude quando e onde quiser." },
      { icon: "smartphone", title: "Web ou app", description: "No celular ou no computador." },
    ],
  },

  // Seção 10 — FAQ
  faq: {
    id: "faq",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Quanto tempo preciso estudar?",
        answer:
          "30–45 min por dia, 5x na semana — menos que 1 episódio de série por dia.",
      },
      {
        question: "É para iniciantes?",
        answer: "Sim — do A1 ao B1, com uma trilha clara do básico à conversação.",
      },
      {
        question: "Tem certificado?",
        answer: "Sim, certificado de conclusão incluso.",
      },
      {
        question: "Funciona no celular?",
        answer: "Sim, 100% responsivo — web e app, celular ou computador.",
      },
      {
        question: "E se eu não gostar?",
        answer: "7 dias de garantia, reembolso total, sem perguntas.",
      },
      {
        question: "Já sei um pouco de inglês, serve?",
        answer:
          "Sim — o ideal é o plano com Mentoria, para revisar e ganhar segurança na conversação.",
      },
      {
        question: "Funciona pra quem já tentou e desistiu?",
        answer:
          "Sim — o diferencial é a trilha guiada + prática, justamente o que falta em apps soltos.",
      },
    ],
  },

  // Seção 11 — Fechamento
  finalCta: {
    id: "comecar",
    title: "Comece hoje a falar o inglês que abre portas.",
    subtitle:
      "Você já viu o método, os módulos e a garantia. O próximo passo é simples: escolha seu plano e dê o primeiro passo ainda hoje — com 7 dias para testar sem risco.",
    primaryCta: { label: "Quero começar agora", href: "#planos" },
    secondaryCta: { label: "Tirar dúvida no WhatsApp", href: "#" },
    // Mantido para o layout /v3
    cta: { label: "Quero começar agora", href: "#planos" },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} World English Club. Todos os direitos reservados.`,
    legal:
      "Garantia legal conforme o Código de Defesa do Consumidor (art. 49). [[Razão social / CNPJ]]",
    links: [
      { label: "Termos de uso", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "Contato", href: "#comecar" },
    ],
    social: [
      { label: "WhatsApp", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
} as const;

export type Site = typeof site;
