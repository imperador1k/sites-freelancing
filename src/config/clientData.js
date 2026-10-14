/**
 * Centralized Client Configuration — Master Bilingual Template (PT/EN)
 * Single source of truth for business information, localized texts,
 * contact details, services, gallery, and workflow.
 *
 * To customize for a new client:
 * 1. Update colors & contact details.
 * 2. Update company details, hero, about, services, gallery, and process in both 'pt' and 'en'.
 */
export const clientData = {
  colors: {
    primary: '#F58220',
    primaryDark: '#D96E14',
    dark: '#14181F',
    darkLighter: '#1E2530',
  },
  contact: {
    phone: '+351 912 345 678',
    phoneDisplay: '+351 912 345 678',
    email: 'contacto@empresa-exemplo.pt',
    address: 'Lisboa e todo o território nacional',
    whatsappNumber: '351912345678',
    whatsappMessage: 'Olá! Vi o vosso site e gostaria de pedir um orçamento gratuito.',
    workingHours: [
      { days: 'Segunda – Sexta', hours: '08:00 – 19:00' },
      { days: 'Sábado', hours: '09:00 – 14:00' },
      { days: 'Domingo', hours: 'Encerrado' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PORTUGUESE (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'NOME',
      legalName: 'Nome Empresa Lda.',
      titleHighlight: 'EMPRESA',
      tagline: 'Construção Civil & Remodelações',
      slogan: 'Construção de excelência, obras sólidas e cumprimento rigoroso de prazos.',
      logo: '/logo.png',
    },
    navLinks: [
      { label: 'Início', href: '#acasa' },
      { label: 'Sobre Nós', href: '#despre' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Obras Recentes', href: '#obras' },
      { label: 'Processo', href: '#processo' },
    ],
    hero: {
      badge: 'Lisboa · Porto · Todo o Território Nacional',
      title: 'NOME',
      titleHighlight: 'EMPRESA',
      slogan: 'Construção de moradias, remodelações gerais e acabamentos de alto padrão',
      description: 'Executamos serviços de construção civil, remodelações integradas e reabilitação com rigor técnico, materiais de excelência e cumprimento estrito de prazos.',
      ctaPrimary: 'Pedir Orçamento Gratuito',
      ctaSecondary: 'Ver Obras Recentes',
      bgImage: '/bg3.jpg',
    },
    about: {
      badge: 'Sobre a Empresa',
      title: 'Construímos com Rigor e',
      titleHighlight: 'Padrão Superior',
      description1: 'Somos uma empresa especializada em construção civil, reabilitação e remodelações integrais chave-na-mão.',
      description2: 'Garantimos gestão técnica dedicada, materiais de primeira linha, transparência orçamental e cumprimento rigoroso de prazos.',
      benefits: ['Cumprimento Estrito de Prazos', 'Orçamento Gratuito e Transparente', 'Acompanhamento Técnico Contínuo'],
      card: {
        title: 'Porquê Escolher-nos?',
        desc: 'Aliamos experiência prática a padrões rigorosos de engenharia e atenção personalizada.',
        stat1: { value: '15+', label: 'Anos de Experiência' },
        stat2: { value: '24h', label: 'Resposta a Pedidos' },
      },
    },
    stats: [
      { value: 15, suffix: '+', label: 'Anos de Experiência', icon: 'award' },
      { value: 500, suffix: '+', label: 'Obras Realizadas', icon: 'check' },
      { value: 100, suffix: '%', label: 'Rigor & Compromisso', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Resposta Rápida', icon: 'truck' },
    ],
    services: [
      { icon: '🏗️', title: 'Construção de Raiz', desc: 'Construção de moradias unifamiliares e edifícios desde a fundação até aos acabamentos finais.' },
      { icon: '🏠', title: 'Remodelações Gerais', desc: 'Remodelações integradas de interiores, cozinhas, casas de banho e espaços comerciais.' },
      { icon: '🏛️', title: 'Reabilitação de Edifícios', desc: 'Recuperação estrutural, reforço de alvenaria e restauro de fachadas históricas.' },
      { icon: '🧱', title: 'Isolamentos & Pladur', desc: 'Isolamento térmico e acústico (capoto/ETICS), tetos falsos e divisórias em gesso cartonado.' },
      { icon: '🎨', title: 'Pintura & Acabamentos', desc: 'Pinturas interiores e exteriores de alta durabilidade e aplicação de microcimento.' },
      { icon: '🛡️', title: 'Telhados & Impermeabilizações', desc: 'Tratamento de infiltrações, substituição de coberturas e impermeabilizações com garantia.' },
    ],
    gallery: [
      { title: 'Remodelação Integral de Moradia', tag: 'Remodelação', image: '/bg1.jpg' },
      { title: 'Construção de Moradia Contemporânea', tag: 'Construção Nova', image: '/bg2.jpg' },
      { title: 'Acabamentos e Interiores de Luxo', tag: 'Acabamentos', image: '/bg3.jpg' },
      { title: 'Reabilitação de Fachada e Cobertura', tag: 'Reabilitação', image: '/hero-bg.png' },
    ],
    process: [
      { step: '01', title: 'Contacto & Reunião', desc: 'Partilhe a sua ideia por telefone ou WhatsApp e agendamos a primeira abordagem.' },
      { step: '02', title: 'Visita Técnica Gratuita', desc: 'Avaliamos o local, dimensões e especificidades técnicas sem qualquer compromisso.' },
      { step: '03', title: 'Orçamento Transparente', desc: 'Apresentamos uma proposta clara com prazos definidos e sem custos ocultos.' },
      { step: '04', title: 'Execução & Entrega', desc: 'Realização da obra com acompanhamento diário, limpeza contínua e entrega chave-na-mão.' },
    ],
    footer: {
      copyright: '© 2026 Nome Empresa Lda. Todos os direitos reservados.',
      tagline: 'Construção civil de excelência e compromisso com o cliente em Portugal.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'COMPANY',
      legalName: 'Company Name Ltd.',
      titleHighlight: 'NAME',
      tagline: 'Civil Construction & Turnkey Renovations',
      slogan: 'Excellence in construction, durable craftsmanship, and strict schedule adherence.',
      logo: '/logo.png',
    },
    navLinks: [
      { label: 'Home', href: '#acasa' },
      { label: 'About Us', href: '#despre' },
      { label: 'Services', href: '#servicos' },
      { label: 'Recent Works', href: '#obras' },
      { label: 'Process', href: '#processo' },
    ],
    hero: {
      badge: 'Lisbon · Porto · Nationwide Coverage in Portugal',
      title: 'COMPANY',
      titleHighlight: 'NAME',
      slogan: 'Custom villa construction, general renovations, and premium architectural finishes',
      description: 'We deliver comprehensive civil construction, integrated renovations, and building rehabilitation with certified technical precision, superior materials, and strict deadline compliance.',
      ctaPrimary: 'Request a Free Quote',
      ctaSecondary: 'View Recent Works',
      bgImage: '/bg3.jpg',
    },
    about: {
      badge: 'About the Company',
      title: 'Building with Precision and',
      titleHighlight: 'Superior Standards',
      description1: 'We are a specialized contractor in turnkey civil construction, structural rehabilitation, and full property renovations.',
      description2: 'We ensure dedicated technical management, premium certified materials, clear budgeting, and punctual project completion.',
      benefits: ['Strict Schedule Adherence', 'Free & Transparent Estimates', 'Continuous Technical Supervision'],
      card: {
        title: 'Why Choose Us?',
        desc: 'We combine field experience with strict engineering standards and personalized client care.',
        stat1: { value: '15+', label: 'Years of Experience' },
        stat2: { value: '24h', label: 'Response Time' },
      },
    },
    stats: [
      { value: 15, suffix: '+', label: 'Years Experience', icon: 'award' },
      { value: 500, suffix: '+', label: 'Completed Projects', icon: 'check' },
      { value: 100, suffix: '%', label: 'Quality & Commitment', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Quick Response', icon: 'truck' },
    ],
    services: [
      { icon: '🏗️', title: 'New Construction', desc: 'Custom residential villas and commercial buildings from structural foundations to final finishes.' },
      { icon: '🏠', title: 'Full Renovations', desc: 'Turnkey interior redesigns, modern kitchens, luxury bathrooms, and commercial fit-outs.' },
      { icon: '🏛️', title: 'Building Restoration', desc: 'Structural retrofitting, masonry reinforcement, and heritage facade restorations.' },
      { icon: '🧱', title: 'Insulation & Drywall', desc: 'Exterior thermal insulation (ETICS/capoto), acoustic control, and suspended plasterboard ceilings.' },
      { icon: '🎨', title: 'Painting & Finishes', desc: 'High-durability interior/exterior paints, specialty coatings, and microcement application.' },
      { icon: '🛡️', title: 'Roofing & Waterproofing', desc: 'Leak mitigation, complete roof replacements, and certified membrane waterproofing.' },
    ],
    gallery: [
      { title: 'Full Villa Renovation', tag: 'Renovation', image: '/bg1.jpg' },
      { title: 'Contemporary Villa Construction', tag: 'New Build', image: '/bg2.jpg' },
      { title: 'Luxury Architectural Finishes', tag: 'Finishes', image: '/bg3.jpg' },
      { title: 'Facade & Roof Restoration', tag: 'Restoration', image: '/hero-bg.png' },
    ],
    process: [
      { step: '01', title: 'Initial Contact', desc: 'Reach out via phone or WhatsApp to discuss your project vision and requirements.' },
      { step: '02', title: 'Free Technical Visit', desc: 'On-site inspection to assess dimensions, technical requirements, and feasibility.' },
      { step: '03', title: 'Transparent Proposal', desc: 'Detailed, transparent estimate with clear milestones and no hidden fees.' },
      { step: '04', title: 'Execution & Handover', desc: 'Professional build with daily oversight, continuous cleanliness, and turnkey delivery.' },
    ],
    footer: {
      copyright: '© 2026 Company Name Ltd. All rights reserved.',
      tagline: 'Superior construction and unwavering client commitment in Portugal.',
    },
  },
};
