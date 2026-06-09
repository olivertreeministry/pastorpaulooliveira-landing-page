export const siteData = {
  brand: {
    name: "Oliver Tree Ministry",
    pastor: "Paulo Oliveira",
    tagline: "Restaurando identidades, fortalecendo famílias.",
  },

  nav: {
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Mentoria", href: "#mentoria" },
      { label: "Ensinamentos", href: "#ensinamentos" },
      { label: "Contato", href: "#contato" },
    ],
    cta: { label: "Acessar Mentoria", href: "https://tally.so/r/Ek0VyA" },
  },

  hero: {
    eyebrow: "Oliver Tree Ministry",
    headlineParts: ["Você não precisa", "que alguém te"],
    headlineAccent: "complete.",
    subtext:
      "Você precisa de cura, identidade e alinhamento com Deus. Quando a identidade é restaurada, os relacionamentos se tornam saudáveis.",
    ctas: [
      {
        label: "Entrar em Contato",
        href: "https://wa.link/pk96wl",
        variant: "whatsapp" as const,
      },
      {
        label: "Acessar Mentoria",
        href: "https://tally.so/r/Ek0VyA",
        variant: "primary" as const,
      },
    ],
    stats: [
      { number: "+10", label: "anos de ministério" },
      { number: "+5k", label: "vidas impactadas" },
      { number: "2", label: "nações" },
    ],
  },

  problem: {
    headline: "Seu verdadeiro problema vai mais fundo do que você pensa.",
    intro:
      "A maioria das pessoas acredita que o problema está no relacionamento, no cônjuge, na comunicação ou nas finanças. Paulo acredita que a raiz é muito mais profunda.",
    rootCause: {
      label: "ORFANDADE EMOCIONAL",
      description:
        "Muitos adultos ainda vivem de feridas criadas por rejeição, abandono, feridas de pai e mãe, falta de validação, insegurança e medo de não ser amado. Essas feridas criam padrões que destroem relacionamentos e famílias.",
    },
    pains: [
      "Conflitos constantes sem resolução real",
      "Distância emocional do cônjuge ou família",
      "Falta de propósito e direção na vida",
      "Padrões familiares dolorosos que se repetem",
      "Codependência emocional nos relacionamentos",
      "Instabilidade espiritual e falta de identidade",
    ],
  },

  identity: {
    verse: "João 1:12",
    verseText:
      "Mas a todos que o receberam, deu-lhes o poder de se tornarem filhos de Deus.",
    headline: "Da orfandade à identidade em Deus.",
    subtext:
      "O objetivo não é melhorar relacionamentos. O objetivo é restaurar identidade. Relacionamentos saudáveis são o resultado.",
    from: {
      title: "Orfandade Emocional",
      items: [
        "Identidade ferida",
        "Confusão e instabilidade",
        "Dependência emocional",
        "Sobrevivência",
        "Imaturidade espiritual",
      ],
    },
    to: {
      title: "Identidade em Deus",
      items: [
        "Filiação espiritual",
        "Clareza e propósito",
        "Responsabilidade emocional",
        "Florescimento",
        "Maturidade espiritual",
      ],
    },
  },

  about: {
    eyebrow: "Quem é Paulo Oliveira",
    headline: "Um pastor que ensina identidade antes de relacionamentos.",
    paragraphs: [
      "Paulo Oliveira é pastor, mentor, marido e pai. Sua missão de vida é restaurar a identidade de pessoas em Deus, curar a orfandade emocional, fortalecer famílias e levantar homens e mulheres espiritualmente maduros.",
      "Ao contrário da maioria dos ministérios de relacionamento, Paulo não começa pelo casamento. Ele começa pela identidade. Porque relacionamentos saudáveis são construídos por pessoas saudáveis.",
      "Com mais de uma década servindo pessoas em diferentes culturas, igrejas, cidades e nações, Paulo tem ajudado indivíduos e famílias a encontrarem cura, direção e maturidade espiritual.",
    ],
    quote:
      "Você não pode construir um casamento saudável, uma família saudável ou um futuro saudável enquanto vive de uma identidade não curada.",
    credentials: [
      "Pastor há mais de 10 anos",
      "Ministério no Brasil e nos Estados Unidos",
      "Mentor de casais, famílias e líderes",
      "Treinado em aconselhamento bíblico",
    ],
  },

  offers: {
    eyebrow: "Caminhos para a transformação",
    headline: "Escolha o seu passo.",
    cards: [
      {
        tier: "Gratuito",
        title: "Conteúdo e Ensinamentos",
        description:
          "Acesse ensinamentos gratuitos sobre identidade, cura emocional e família no YouTube e Instagram.",
        features: [
          "YouTube e Instagram",
          "Workshops online",
          "Conteúdo semanal",
        ],
        cta: { label: "Acompanhar", href: "#", variant: "secondary" as const },
        featured: false,
      },
      {
        tier: "Grupo",
        title: "Mentoria em Grupo",
        description:
          "Processo de transformação em comunidade. Cura, responsabilidade, casamento e identidade com outros que caminham na mesma jornada.",
        features: [
          "Encontros semanais ao vivo",
          "Comunidade e accountability",
          "Materiais exclusivos",
        ],
        cta: {
          label: "Acessar Mentoria",
          href: "https://tally.so/r/Ek0VyA",
          variant: "primary" as const,
        },
        featured: true,
      },
      {
        tier: "Individual",
        title: "Mentoria Individual",
        description:
          "Para feridas emocionais profundas, crises conjugais, desenvolvimento de liderança e restauração familiar.",
        features: [
          "Sessões personalizadas",
          "Acompanhamento direto",
          "Transformação profunda",
        ],
        cta: {
          label: "Entrar em Contato",
          href: "https://wa.link/pk96wl",
          variant: "whatsapp" as const,
        },
        featured: false,
      },
    ],
  },

  testimonials: [
    {
      quote:
        "A mentoria do Pastor Paulo mudou completamente a forma como eu me enxergo. Finalmente entendi que meu problema de relacionamento estava na minha identidade, não no outro.",
      author: "Marcos Ferreira",
      role: "Empresário, 34 anos",
      location: "São Paulo, SP",
    },
    {
      quote:
        "Depois de anos de conflitos, o ensino sobre cura emocional e identidade nos libertou. Hoje temos um casamento completamente diferente, construído sobre bases reais.",
      author: "Ana e Ricardo Santos",
      role: "Casal, 6 anos de casamento",
      location: "Campinas, SP",
    },
    {
      quote:
        "Nunca imaginei que minha falta de direção tinha raízes tão profundas. O processo de cura transformou minha liderança, meu casamento e minha família.",
      author: "Daniel Costa",
      role: "Pastor, 41 anos",
      location: "Miami, FL",
    },
  ],

  finalCTA: {
    headline: "Sua transformação começa com uma decisão.",
    sub: "Não espere mais. O momento de buscar cura, identidade e alinhamento com Deus é agora.",
    ctas: [
      {
        label: "Entrar em Contato",
        href: "https://wa.link/pk96wl",
        variant: "whatsapp" as const,
      },
      {
        label: "Acessar Mentoria",
        href: "https://tally.so/r/Ek0VyA",
        variant: "primary" as const,
      },
    ],
  },

  footer: {
    tagline: "Restaurando identidades, fortalecendo famílias.",
    social: [
      { platform: "Instagram", href: "https://www.instagram.com/pastorpaulooliveira/" },
      { platform: "YouTube", href: "https://www.youtube.com/@pastor.paulooliveira" },
    ],
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
    ],
    copyright: "2024 Oliver Tree Ministry.",
  },
};
