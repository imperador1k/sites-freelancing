/**
 * Centralized Client Configuration — Dra. Bebiana dos Santos (Advocacia & Consultoria Jurídica)
 * Location: Vila Nova de Gaia / Porto, Portugal
 * Single source of truth for business information, localized legal practice areas,
 * consultation scheduling, and bilingual copy (PT/EN).
 */
export const clientData = {
  colors: {
    primary: '#C59B27',
    primaryDark: '#9E7B1B',
    dark: '#0F172A',
    darkLighter: '#1E293B',
  },
  contact: {
    phone: '+351 912 345 678',
    phoneDisplay: '+351 912 345 678',
    email: 'geral@bebianasantos-advocacia.pt',
    address: 'Avenida da República, Vila Nova de Gaia · Grande Porto',
    whatsappNumber: '351912345678',
    whatsappMessage: 'Olá Dra. Bebiana dos Santos, vi o vosso site e gostaria de agendar uma consulta jurídica.',
    workingHours: [
      { days: 'Segunda – Sexta', hours: '09:00 – 19:00' },
      { days: 'Sábado', hours: 'Por marcação prévia' },
      { days: 'Domingo', hours: 'Encerrado' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PORTUGUESE (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'Dra. Bebiana dos Santos',
      legalName: 'Bebiana dos Santos — Advocacia & Consultoria Jurídica RL',
      titleHighlight: 'ADVOGADA',
      tagline: 'Advocacia & Consultoria Jurídica · Vila Nova de Gaia',
      slogan: 'Rigor técnico, lealdade e acompanhamento de proximidade na defesa dos seus direitos.',
      logo: '/bebiana-avatar.png',
    },
    contact: {
      phone: '+351 912 345 678',
      phoneDisplay: '+351 912 345 678',
      email: 'geral@bebianasantos-advocacia.pt',
      address: 'Avenida da República, Vila Nova de Gaia · Grande Porto',
      whatsappNumber: '351912345678',
      whatsappMessage: 'Olá Dra. Bebiana dos Santos, vi o vosso site e gostaria de agendar uma consulta jurídica.',
      workingHours: [
        { days: 'Segunda – Sexta', hours: '09:00 – 19:00' },
        { days: 'Sábado', hours: 'Por marcação prévia' },
        { days: 'Domingo', hours: 'Encerrado' },
      ],
    },
    navLinks: [
      { label: 'Início', href: '#acasa' },
      { label: 'Sobre Nós', href: '#despre' },
      { label: 'Áreas de Atuação', href: '#servicos' },
      { label: 'O Escritório', href: '#obras' },
      { label: 'Metodologia', href: '#processo' },
    ],
    hero: {
      badge: 'Vila Nova de Gaia · Porto · Advocacia & Consultoria Jurídica',
      title: 'DRA. BEBIANA',
      titleHighlight: 'DOS SANTOS',
      slogan: 'Advocacia de proximidade, rigor jurídico e soluções personalizadas',
      description: 'Dedicada à defesa dos seus interesses com lealdade e transparência. Especializada em Direito da Família, Documentos Particulares Autenticados (DPAs), Direito Bancário, Executivo e Recuperação de Crédito na Plataforma Legal de Vila Nova de Gaia.',
      ctaPrimary: 'Agendar Consulta Jurídica',
      ctaSecondary: 'Conhecer Áreas de Atuação',
      bgImage: '/bebiana-portrait.png',
      microBullets: ['Atendimento Confidencial', 'Resposta em 24h', 'Vila Nova de Gaia & Porto'],
      trustCard: {
        title: 'Dra. Bebiana dos Santos',
        desc: 'Advogada · Cédula Profissional Ativa',
      },
    },
    about: {
      badge: 'Apresentação & Percurso',
      title: 'Lealdade, Dedicação e',
      titleHighlight: 'Compromisso com o Cliente',
      description1: 'A Plataforma Legal de Vila Nova de Gaia iniciou a sua atividade em finais de 2019, unindo determinação profissional, lealdade e a vontade contínua de servir o cliente com rigor e distinção.',
      description2: '«Somos disponíveis. Somos exigentes. Somos disciplinados. E juntos somos efetivamente mais fortes.» Acreditamos numa advocacia transparente e humana, onde cada cliente e empresa encontra um apoio jurídico seguro e permanente.',
      benefits: ['Acompanhamento Jurídico Personalizado', 'Total Confidencialidade e Sigilo Profissional', 'Comunicação Clara e Honorários Transparentes'],
      card: {
        title: 'Porquê o Nosso Escritório?',
        desc: 'Privilegiamos a prevenção de litígios e a defesa intransigente dos seus direitos em todas as instâncias.',
        stat1: { value: '8+', label: 'Anos de Dedicação' },
        stat2: { value: '100%', label: 'Sigilo e Rigor' },
      },
    },
    stats: [
      { value: 8, suffix: '+', label: 'Anos de Advocacia', icon: 'award' },
      { value: 1000, suffix: '+', label: 'Processos & Consultas', icon: 'check' },
      { value: 100, suffix: '%', label: 'Rigor & Confidencialidade', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Resposta Rápida a Contactos', icon: 'truck' },
    ],
    services: [
      { icon: '⚖️', title: 'Direito da Família & Sucessões', desc: 'Divórcios por mútuo consentimento ou litigiosos, regulação das responsabilidades parentais, alimentos e partilhas de heranças.' },
      { icon: '📜', title: 'Documentos Autenticados (DPAs)', desc: 'Autenticação de contratos e documentos particulares, termos de autenticação, reconhecimento de assinaturas e procurações.' },
      { icon: '🏦', title: 'Direito Bancário & Crédito', desc: 'Assessoria jurídica em contratos bancários, renegociação de dívidas e proteção dos direitos dos consumidores e devedores.' },
      { icon: '💼', title: 'Executivo & Recuperação de Crédito', desc: 'Ações executivas para cobrança de créditos, oposição à penhora, negociação extrajudicial e acordos de pagamento.' },
      { icon: '🏢', title: 'Direito Imobiliário & Arrendamento', desc: 'Elaboração e revisão de contratos de promessa (CPCV), arrendamentos comerciais e habitacionais, e regularização predial.' },
      { icon: '🤝', title: 'Consultoria Jurídica a Empresas', desc: 'Apoio preventivo e continuado a PMEs, elaboração de contratos comerciais, cobrança de faturas pendentes e assessoria laboral.' },
    ],
    gallery: [
      { title: 'Instalações & Plataforma Legal de Gaia', tag: 'Escritório', image: '/law-building.jpg' },
      { title: 'Gabinete de Consulta Privada', tag: 'Atendimento', image: '/law-office.jpg' },
      { title: 'Autenticação Documental & Pareceres', tag: 'Prática Jurídica', image: '/law-desk.jpg' },
      { title: 'Biblioteca Jurídica & Sala de Reunião', tag: 'Instalações', image: '/law-lounge.jpg' },
    ],
    process: [
      { step: '01', title: 'Consulta Inicial Confidencial', desc: 'Apresentação detalhada da sua questão por marcação presencial em Vila Nova de Gaia ou por videoconferência.' },
      { step: '02', title: 'Análise & Enquadramento Legal', desc: 'Exame aprofundado dos factos e documentos para desenhar a estratégia jurídica mais sólida e eficaz.' },
      { step: '03', title: 'Proposta & Honorários Claros', desc: 'Apresentação transparente do plano de atuação, prazos previsíveis e estimativa clara de custos.' },
      { step: '04', title: 'Acompanhamento & Resolução', desc: 'Defesa incansável dos seus direitos em sede negocial, administrativa ou perante os tribunais.' },
    ],
    footer: {
      copyright: '© 2026 Dra. Bebiana dos Santos — Advocacia & Consultoria Jurídica. Todos os direitos reservados.',
      tagline: 'Advocacia de proximidade, rigor legal e compromisso ético em Vila Nova de Gaia e Porto.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'Dra. Bebiana dos Santos',
      legalName: 'Bebiana dos Santos — Law Firm & Legal Consultancy RL',
      titleHighlight: 'ATTORNEY AT LAW',
      tagline: 'Legal Practice & Consultancy · Vila Nova de Gaia, Portugal',
      slogan: 'Legal precision, unwavering loyalty, and dedicated personal counsel.',
      logo: '/bebiana-avatar.png',
    },
    contact: {
      phone: '+351 912 345 678',
      phoneDisplay: '+351 912 345 678',
      email: 'geral@bebianasantos-advocacia.pt',
      address: 'Avenida da República, Vila Nova de Gaia · Greater Porto',
      whatsappNumber: '351912345678',
      whatsappMessage: 'Hello Dra. Bebiana dos Santos, I saw your website and would like to schedule a legal consultation.',
      workingHours: [
        { days: 'Monday – Friday', hours: '09:00 – 19:00' },
        { days: 'Saturday', hours: 'By prior appointment' },
        { days: 'Sunday', hours: 'Closed' },
      ],
    },
    navLinks: [
      { label: 'Home', href: '#acasa' },
      { label: 'About Us', href: '#despre' },
      { label: 'Practice Areas', href: '#servicos' },
      { label: 'The Office', href: '#obras' },
      { label: 'Methodology', href: '#processo' },
    ],
    hero: {
      badge: 'Vila Nova de Gaia · Porto · Legal Practice & Consultancy',
      title: 'DRA. BEBIANA',
      titleHighlight: 'DOS SANTOS',
      slogan: 'Client-centered legal counsel, judicial precision, and tailored solutions',
      description: 'Dedicated to defending your interests with loyalty and transparency. Specialized in Family Law, Authenticated Private Documents (DPAs), Banking Law, Executory Proceedings, and Debt Recovery at Plataforma Legal Vila Nova de Gaia.',
      ctaPrimary: 'Book a Legal Consultation',
      ctaSecondary: 'Explore Practice Areas',
      bgImage: '/bebiana-portrait.png',
      microBullets: ['Confidential Consultation', '24h Response', 'Vila Nova de Gaia & Porto'],
      trustCard: {
        title: 'Dra. Bebiana dos Santos',
        desc: 'Attorney at Law · Portuguese Bar Association',
      },
    },
    about: {
      badge: 'About & Background',
      title: 'Loyalty, Dedication and',
      titleHighlight: 'Unwavering Client Commitment',
      description1: 'Plataforma Legal Vila Nova de Gaia began its activity in late 2019, established upon the core values of loyalty, diligence, and personalized legal service for individuals and corporate clients.',
      description2: '«We are available. We are demanding. We are disciplined. And together we are stronger.» We champion honest, human-centered legal representation, delivering timely clarity and dependable protection.',
      benefits: ['Tailored Personal Legal Representation', 'Strict Professional Confidentiality & Ethics', 'Transparent Fees & Transparent Communication'],
      card: {
        title: 'Why Choose Our Practice?',
        desc: 'We prioritize dispute prevention and robust legal defense across all jurisdictions.',
        stat1: { value: '8+', label: 'Years of Dedication' },
        stat2: { value: '100%', label: 'Strict Confidentiality' },
      },
    },
    stats: [
      { value: 8, suffix: '+', label: 'Years in Practice', icon: 'award' },
      { value: 1000, suffix: '+', label: 'Matters & Consultations', icon: 'check' },
      { value: 100, suffix: '%', label: 'Rigor & Discretion', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Prompt Response Time', icon: 'truck' },
    ],
    services: [
      { icon: '⚖️', title: 'Family & Succession Law', desc: 'Consensual and contested divorce, parental responsibility arrangements, child support, and inheritance partitioning.' },
      { icon: '📜', title: 'Authenticated Documents (DPAs)', desc: 'Official certification of private contracts, authentication terms, signature notarization, and powers of attorney.' },
      { icon: '🏦', title: 'Banking Law & Credit', desc: 'Legal counsel on loan contracts, debt renegotiation, and robust defense of borrower and consumer rights.' },
      { icon: '💼', title: 'Enforcement & Debt Recovery', desc: 'Enforcement proceedings for outstanding claims, asset seizure opposition, and out-of-court repayment settlements.' },
      { icon: '🏢', title: 'Real Estate & Tenancy Law', desc: 'Drafting promissory sales agreements (CPCV), residential/commercial leases, and property legal due diligence.' },
      { icon: '🤝', title: 'Corporate Legal Advisory', desc: 'Ongoing preventive support for SMEs, commercial contract drafting, invoice recovery, and employment advice.' },
    ],
    gallery: [
      { title: 'Plataforma Legal Gaia Facilities', tag: 'Law Firm', image: '/law-building.jpg' },
      { title: 'Private Consultation Office', tag: 'Counsel', image: '/law-office.jpg' },
      { title: 'Document Authentication & Opinions', tag: 'Legal Practice', image: '/law-desk.jpg' },
      { title: 'Legal Library & Meeting Suite', tag: 'Facilities', image: '/law-lounge.jpg' },
    ],
    process: [
      { step: '01', title: 'Initial Confidential Consultation', desc: 'In-depth discussion of your legal matter in person in Vila Nova de Gaia or via secure video call.' },
      { step: '02', title: 'Case Study & Legal Strategy', desc: 'Rigorous review of applicable laws and evidence to devise a strategic and decisive plan of action.' },
      { step: '03', title: 'Clear Proposal & Fixed Terms', desc: 'Transparent fee schedule, predictable procedural timelines, and no unexpected hidden costs.' },
      { step: '04', title: 'Representation & Resolution', desc: 'Committed advocacy in negotiations, administrative proceedings, and court representation.' },
    ],
    footer: {
      copyright: '© 2026 Dra. Bebiana dos Santos — Law Firm & Legal Consultancy. All rights reserved.',
      tagline: 'High-standard legal counsel and ethical dedication in Vila Nova de Gaia and Porto.',
    },
  },
};
