/**
 * Centralized Client Configuration — Template Remodelações & Obras
 * Niche: Home Remodeling, Kitchens, Bathrooms, Painting & Drywall
 * Pre-configured high-converting template for Portuguese tradespeople
 */
export const clientData = {
  colors: {
    primary: '#EA580C',
    primaryDark: '#C2410C',
    dark: '#0F172A',
    darkLighter: '#1E293B',
  },
  contact: {
    phone: '+351 910 000 000',
    phoneDisplay: '+351 910 000 000',
    email: 'geral@silvaecosta-remodelacoes.pt',
    address: 'Lisboa, Porto e Regiões Circundantes',
    whatsappNumber: '351910000000',
    whatsappMessage: 'Olá! Vi o vosso site e gostaria de pedir um orçamento gratuito para remodelação.',
    workingHours: [
      { days: 'Segunda – Sexta', hours: '08:00 – 19:00' },
      { days: 'Sábado', hours: '08:30 – 14:00' },
      { days: 'Domingo', hours: 'Encerrado' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PORTUGUESE (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'Silva & Costa',
      legalName: 'Silva & Costa Remodelações Lda.',
      titleHighlight: 'REMODELAÇÕES',
      tagline: 'Remodelações Gerais & Obras de Interiores',
      slogan: 'Transformamos a sua casa com rigor técnico, materiais de excelência e cumprimento de prazos.',
      logo: '/logo.png',
      navCta: 'Pedir Orçamento Grátis',
    },
    contact: {
      phone: '+351 910 000 000',
      phoneDisplay: '+351 910 000 000',
      email: 'geral@silvaecosta-remodelacoes.pt',
      address: 'Lisboa, Porto e Regiões Circundantes',
      whatsappNumber: '351910000000',
      whatsappMessage: 'Olá! Vi o vosso site e gostaria de pedir um orçamento para remodelação.',
      workingHours: [
        { days: 'Segunda – Sexta', hours: '08:00 – 19:00' },
        { days: 'Sábado', hours: '08:30 – 14:00' },
        { days: 'Domingo', hours: 'Encerrado' },
      ],
    },
    navLinks: [
      { label: 'Início', href: '#acasa' },
      { label: 'Sobre Nós', href: '#despre' },
      { label: 'Especialidades', href: '#servicos' },
      { label: 'Obras Realizadas', href: '#obras' },
      { label: 'Como Funciona', href: '#processo' },
    ],
    hero: {
      badge: 'Remodelações Chave-na-Mão · Orçamento Gratuito em 24h',
      title: 'Silva & Costa',
      titleHighlight: 'REMODELAÇÕES',
      slogan: 'Remodelação integral de cozinhas, casas de banho e interiores com acabamentos de excelência',
      description: 'Executamos obras completas com gestão técnica dedicada, materiais de primeira linha e limpeza diária. Do projeto à entrega das chaves, valorizamos o seu imóvel sem surpresas no orçamento.',
      ctaPrimary: 'Pedir Orçamento Grátis',
      ctaSecondary: 'Ver Obras Recentes',
      bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      microBullets: ['Orçamento Grátis em 24h', '5.0 ★ no Google (Avaliações Reais)', 'Garantia de Cumprimento de Prazos'],
    },
    about: {
      badge: 'Sobre a Empresa',
      title: 'Rigor, Transparência e',
      titleHighlight: 'Acabamentos Impecáveis',
      description1: 'Na Silva & Costa Remodelações aliamos mais de 12 anos de experiência em obra à máxima atenção aos detalhes. Cada projeto é tratado de forma personalizada, assegurando que o seu espaço reflete exatamente o que idealizou.',
      description2: 'Dispomos de equipas especializadas em alvenaria, canalização, eletricidade, pladur e pintura, evitando intermediários e assegurando que todos os trabalhos cumprem as normas mais exigentes de durabilidade.',
      benefits: ['Cumprimento Rigoroso de Prazos', 'Orçamento Detalhado Sem Custos Ocultos', 'Supervisão Técnica em Todas as Etapas'],
      card: {
        title: 'Porquê a Silva & Costa?',
        desc: 'Mais de 350 projetos concluídos com total satisfação em Portugal.',
        stat1: { value: '12+', label: 'Anos de Experiência' },
        stat2: { value: '24h', label: 'Resposta WhatsApp' },
      },
    },
    stats: [
      { value: 12, suffix: '+', label: 'Anos de Experiência', icon: 'award' },
      { value: 350, suffix: '+', label: 'Obras Realizadas', icon: 'check' },
      { value: 100, suffix: '%', label: 'Rigor & Compromisso', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Orçamento Rápido', icon: 'clock' },
    ],
    services: [
      { icon: '🍳', title: 'Remodelação de Cozinhas', desc: 'Mobiliário por medida, bancadas em quartzo/granito, canalizações e instalação completa de eletrodomésticos.' },
      { icon: '🚿', title: 'Casas de Banho Modernas', desc: 'Substituição de banheira por poliban italiano, impermeabilizações, loiças suspensas e revestimentos cerâmicos retificados.' },
      { icon: '🧱', title: 'Pladur & Tetos Falsos', desc: 'Divisórias acústicas, sancas de luz indireta LED e isolamento térmico e acústico com lã de rocha.' },
      { icon: '🎨', title: 'Pintura & Envernizamento', desc: 'Pintura interior e exterior com tintas laváveis de elevada durabilidade, tratamento anti-fungos e acabamentos finos.' },
      { icon: '🪵', title: 'Chão Flutuante & Vinílico', desc: 'Aplicação especializada de pavimento flutuante AC5, vinílico SPC resistente à água e rodapés lacados.' },
      { icon: '🏠', title: 'Remodelação Chave-na-Mão', desc: 'Transformação integral de apartamentos e moradias com gestão de projeto, materiais e coordenação de especialidades.' },
    ],
    gallery: [
      { title: 'Cozinha Contemporânea com Ilha Central', tag: 'Cozinha', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Casa de Banho Minimalista em Tons Terrosos', tag: 'Casa de Banho', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Open Space com Pavimento Flutuante & Sancas LED', tag: 'Interiores', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Reabilitação de Fachada & Pintura Exterior', tag: 'Fachadas', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop' },
    ],
    process: [
      { step: '01', title: 'Contacto & Reunião', desc: 'Fale connosco pelo WhatsApp ou telefone e agendamos a primeira abordagem sem compromisso.' },
      { step: '02', title: 'Visita Técnica Gratuita', desc: 'Avaliamos o local, tiramos medidas e analisamos as especificidades técnicas no local.' },
      { step: '03', title: 'Orçamento Transparente', desc: 'Apresentamos uma proposta clara com prazos definidos, materiais especificados e sem custos ocultos.' },
      { step: '04', title: 'Execução & Entrega', desc: 'Realização da obra com limpeza diária, coordenação rigorosa e entrega chave-na-mão no prazo estipulado.' },
    ],
    footer: {
      copyright: '© 2026 Silva & Costa Remodelações. Todos os direitos reservados.',
      tagline: 'Remodelações de interiores e exteriores com rigor e acabamentos de excelência em Portugal.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'Silva & Costa',
      legalName: 'Silva & Costa Remodeling Ltd.',
      titleHighlight: 'REMODELING',
      tagline: 'General Renovations & Interior Architecture',
      slogan: 'We transform homes with engineering precision, premium materials, and strict schedule adherence.',
      logo: '/logo.png',
      navCta: 'Get Free Quote',
    },
    contact: {
      phone: '+351 910 000 000',
      phoneDisplay: '+351 910 000 000',
      email: 'geral@silvaecosta-remodelacoes.pt',
      address: 'Lisbon, Porto and Surrounding Regions',
      whatsappNumber: '351910000000',
      whatsappMessage: 'Hello! I saw your website and would like to request a free quote.',
      workingHours: [
        { days: 'Monday – Friday', hours: '08:00 – 19:00' },
        { days: 'Saturday', hours: '08:30 – 14:00' },
        { days: 'Sunday', hours: 'Closed' },
      ],
    },
    navLinks: [
      { label: 'Home', href: '#acasa' },
      { label: 'About Us', href: '#despre' },
      { label: 'Specialties', href: '#servicos' },
      { label: 'Recent Works', href: '#obras' },
      { label: 'How It Works', href: '#processo' },
    ],
    hero: {
      badge: 'Turnkey Renovations · Free Quote in 24h',
      title: 'Silva & Costa',
      titleHighlight: 'REMODELING',
      slogan: 'Full renovation of kitchens, bathrooms, and interiors with superior craftsmanship',
      description: 'We deliver comprehensive renovations with dedicated project oversight, certified materials, and daily cleanliness. From initial concept to handover, we elevate your property.',
      ctaPrimary: 'Request a Free Quote',
      ctaSecondary: 'View Recent Works',
      bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      microBullets: ['Free Estimate in 24h', '5.0 ★ Google Rating', 'Guaranteed Project Deadlines'],
    },
    about: {
      badge: 'About the Company',
      title: 'Precision, Transparency and',
      titleHighlight: 'Flawless Finishes',
      description1: 'With over 12 years of hands-on experience, Silva & Costa Remodeling combines technical mastery with keen attention to detail.',
      description2: 'Our multi-disciplinary crews handle masonry, plumbing, electrical, drywall, and painting in-house, avoiding delays and ensuring top build quality.',
      benefits: ['Strict Schedule Adherence', 'Transparent Cost Estimates', 'Full Project Supervision'],
      card: {
        title: 'Why Choose Us?',
        desc: 'Over 350 completed projects with top client satisfaction in Portugal.',
        stat1: { value: '12+', label: 'Years Experience' },
        stat2: { value: '24h', label: 'WhatsApp Response' },
      },
    },
    stats: [
      { value: 12, suffix: '+', label: 'Years Experience', icon: 'award' },
      { value: 350, suffix: '+', label: 'Completed Projects', icon: 'check' },
      { value: 100, suffix: '%', label: 'Quality & Rigor', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Fast Quote', icon: 'clock' },
    ],
    services: [
      { icon: '🍳', title: 'Kitchen Remodeling', desc: 'Custom cabinetry, quartz/granite countertops, plumbing, and complete appliance fitting.' },
      { icon: '🚿', title: 'Modern Bathrooms', desc: 'Walk-in Italian showers, waterproofing membranes, wall-hung sanitary ware, and rectified tiles.' },
      { icon: '🧱', title: 'Drywall & Ceilings', desc: 'Acoustic partitions, indirect LED coves, and premium thermal insulation with mineral wool.' },
      { icon: '🎨', title: 'Painting & Varnishing', desc: 'Durable interior and exterior wall paints, anti-mold treatments, and fine trim finishing.' },
      { icon: '🪵', title: 'Floating & Vinyl Floors', desc: 'Professional installation of AC5 laminate, waterproof SPC vinyl planks, and lacquered baseboards.' },
      { icon: '🏠', title: 'Turnkey Renovation', desc: 'Full-scope home and apartment renovations with coordinated trades and end-to-end management.' },
    ],
    gallery: [
      { title: 'Contemporary Kitchen with Center Island', tag: 'Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Minimalist Bathroom with Warm Earthy Tones', tag: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Open-Space Living Room with LED Coves', tag: 'Interiors', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Facade Restoration & Exterior Painting', tag: 'Facades', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop' },
    ],
    process: [
      { step: '01', title: 'Contact & Consultation', desc: 'Reach out via phone or WhatsApp to share your renovation goals and ideas.' },
      { step: '02', title: 'Free Technical Visit', desc: 'On-site technical evaluation to take measurements and inspect site conditions.' },
      { step: '03', title: 'Transparent Proposal', desc: 'Detailed quote detailing materials, timelines, and payment milestones with zero hidden fees.' },
      { step: '04', title: 'Execution & Handover', desc: 'Precision building with continuous site cleaning and punctual delivery.' },
    ],
    footer: {
      copyright: '© 2026 Silva & Costa Remodeling. All rights reserved.',
      tagline: 'Superior interior and exterior renovations with unwavering commitment in Portugal.',
    },
  },
};
