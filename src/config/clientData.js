/**
 * Centralized Client Configuration — Template Eletricista & Avarias 24h
 * Niche: Certified Electrical Installations, 24h Outages, Panels, LED & Wallbox
 * Pre-configured high-converting template for Portuguese certified electricians
 */
export const clientData = {
  colors: {
    primary: '#EAB308', // Electric amber/yellow
    primaryDark: '#CA8A04',
    dark: '#0B0F19',
    darkLighter: '#151E2E',
  },
  contact: {
    phone: '+351 910 000 000',
    phoneDisplay: '+351 910 000 000',
    email: 'contacto@volttec-eletricistas.pt',
    address: 'Assistência Técnica 24h em Toda a Área Metropolitana e Região',
    whatsappNumber: '351910000000',
    whatsappMessage: 'Olá! Preciso de assistência de eletricista credenciado.',
    workingHours: [
      { days: 'Segunda – Domingo', hours: '24 Horas (Piquete de Avarias)' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PORTUGUESE (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'VoltTec',
      legalName: 'VoltTec Instalações Elétricas & Avarias Lda.',
      titleHighlight: 'ELETRICISTAS 24H',
      tagline: 'Eletricistas Credenciados · Avarias 24h & Quadros Elétricos',
      slogan: 'Técnicos credenciados pela DGEG, piquete de urgência 24h e soluções elétricas seguras e certificadas.',
      logo: '/logo.png',
      navCta: 'Chamar Eletricista 24h',
    },
    contact: {
      phone: '+351 910 000 000',
      phoneDisplay: '+351 910 000 000',
      email: 'contacto@volttec-eletricistas.pt',
      address: 'Assistência Técnica 24h em Toda a Área Metropolitana e Região',
      whatsappNumber: '351910000000',
      whatsappMessage: 'Olá! Preciso de assistência de eletricista credenciado.',
      workingHours: [
        { days: 'Segunda – Domingo', hours: '24 Horas (Piquete de Avarias)' },
      ],
    },
    navLinks: [
      { label: 'Início', href: '#acasa' },
      { label: 'Sobre Nós', href: '#despre' },
      { label: 'Serviços 24h', href: '#servicos' },
      { label: 'Trabalhos', href: '#obras' },
      { label: 'Como Funciona', href: '#processo' },
    ],
    hero: {
      badge: 'Eletricistas Credenciados DGEG · Piquete de Avarias 24h',
      title: 'VoltTec',
      titleHighlight: 'ELETRICISTAS 24H',
      slogan: 'Assistência urgente a avarias elétricas, remodelação de quadros e iluminação LED',
      description: 'Resolvemos falhas de corrente, curto-circuitos e disjuntores a disparar com chegada rápida e ferramentas de diagnóstico de precisão. Instalações elétricas residenciais e comerciais 100% em conformidade com as normas técnicas de segurança.',
      ctaPrimary: 'Pedir Assistência Elétrica',
      ctaSecondary: 'Ver Especialidades',
      bgImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop',
      microBullets: ['Técnicos Certificados DGEG', 'Chegada Rápida a Avarias', 'Garantia e Fatura Detalhada'],
    },
    about: {
      badge: 'Sobre a Empresa',
      title: 'Segurança, Rigor Técnico e',
      titleHighlight: 'Conformidade Legal',
      description1: 'Com mais de 18 anos de experiência comprovada no setor elétrico, a VoltTec é a escolha de confiança de famílias e empresas para manutenção e execução de infraestruturas elétricas.',
      description2: 'Trabalhamos exclusivamente com aparelhagem e proteção de marcas de topo (Schneider, Legrand, Hager), garantindo que a sua casa ou escritório fica totalmente protegido contra sobretensões e riscos de incêndio elétrico.',
      benefits: ['Piquete de Urgência Elétrica 24 Horas', 'Emissão de Termos de Responsabilidade e Certificação', 'Orçamentos Transparentes Sem Letras Pequenas'],
      card: {
        title: 'Porquê a VoltTec?',
        desc: 'Mais de 2.500 intervenções elétricas sem incidentes e com total satisfação.',
        stat1: { value: '18+', label: 'Anos no Mercado' },
        stat2: { value: '100%', label: 'Certificação DGEG' },
      },
    },
    stats: [
      { value: 18, suffix: '+', label: 'Anos de Experiência', icon: 'award' },
      { value: 2500, suffix: '+', label: 'Instalações & Avarias', icon: 'check' },
      { value: 100, suffix: '%', label: 'Segurança & Certificação', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Piquete de Urgência', icon: 'clock' },
    ],
    services: [
      { icon: '⚡', title: 'Piquete de Avarias 24h', desc: 'Resolução urgente de falhas de energia, curto-circuitos, disjuntores que disparam e cabos queimados a qualquer hora.' },
      { icon: '🔌', title: 'Quadros Elétricos Modernos', desc: 'Remodelação e ampliação de quadros elétricos antigos, montagem de diferenciais de alta sensibilidade e descarregadores de sobretensões.' },
      { icon: '💡', title: 'Iluminação LED & Domótica', desc: 'Instalação de iluminação técnica, sancas de luz indireta, projetores, sensores de presença e interruptores inteligentes.' },
      { icon: '📑', title: 'Certificação DGEG / CERIEL', desc: 'Vistorias técnicas, aumento de potência contratada junto da E-Redes e emissão de termos de responsabilidade elétrica.' },
      { icon: '🚗', title: 'Carregadores de Veículos (Wallbox)', desc: 'Instalação certificada de postos de carregamento para carros elétricos e híbridos plug-in em garagens e condomínios.' },
      { icon: '🏠', title: 'Renovação de Redes Elétricas', desc: 'Substituição integral de cablagem antiga, instalação de novas tomadas, pontos de rede e circuitos dedicados a fornos e AC.' },
    ],
    gallery: [
      { title: 'Quadro Elétrico Residencial Moderno com Proteção Diferencial', tag: 'Quadros Elétricos', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Projeto de Iluminação LED Arquitetural em Sanca Indireta', tag: 'Iluminação LED', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Instalação de Posto Wallbox para Carregamento de Carro Elétrico', tag: 'Mobilidade Elétrica', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Diagnóstico Técnico de Instalação e Teste de Isolamento', tag: 'Avarias 24h', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop' },
    ],
    process: [
      { step: '01', title: 'Contacto & Triagem', desc: 'Fale connosco pelo WhatsApp ou chamada direta. Identificamos se é avaria urgente ou projeto planeado.' },
      { step: '02', title: 'Diagnóstico Técnico', desc: 'O eletricista credenciado desloca-se ao local, analisa a infraestrutura e apresenta o orçamento claro.' },
      { step: '03', title: 'Execução Conforme Normas', desc: 'Realizamos os trabalhos com equipamentos de teste calibrados e materiais certificados pelas normas europeias.' },
      { step: '04', title: 'Emissão de Garantia', desc: 'Comprovamos os níveis de disparo e terra, emitindo o respetivo relatório técnico com garantia formal.' },
    ],
    footer: {
      copyright: '© 2026 VoltTec Instalações Elétricas. Todos os direitos reservados.',
      tagline: 'Eletricistas credenciados e assistência técnica 24 horas em Portugal.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'VoltTec',
      legalName: 'VoltTec Electrical Installations Ltd.',
      titleHighlight: '24H ELECTRICIANS',
      tagline: 'Certified Electricians · 24h Emergency Service & Electrical Panels',
      slogan: 'DGEG-certified electricians, 24/7 rapid emergency dispatch, and fully compliant electrical installations.',
      logo: '/logo.png',
      navCta: 'Call 24h Electrician',
    },
    contact: {
      phone: '+351 910 000 000',
      phoneDisplay: '+351 910 000 000',
      email: 'contacto@volttec-eletricistas.pt',
      address: '24h Technical Support Throughout the Metropolitan Region',
      whatsappNumber: '351910000000',
      whatsappMessage: 'Hello! I need certified electrical assistance.',
      workingHours: [
        { days: 'Monday – Sunday', hours: '24 Hours (Emergency Dispatch)' },
      ],
    },
    navLinks: [
      { label: 'Home', href: '#acasa' },
      { label: 'About Us', href: '#despre' },
      { label: '24h Services', href: '#servicos' },
      { label: 'Projects', href: '#obras' },
      { label: 'How It Works', href: '#processo' },
    ],
    hero: {
      badge: 'Certified Master Electricians · 24/7 Emergency Dispatch',
      title: 'VoltTec',
      titleHighlight: '24H ELECTRICIANS',
      slogan: 'Emergency response for power cuts, electrical panel upgrades, and architectural LED lighting',
      description: 'We resolve tripped breakers, short circuits, and blackout emergencies with rapid arrival and precision diagnostic testing. Residential and commercial installations fully compliant with safety codes.',
      ctaPrimary: 'Request Electrical Support',
      ctaSecondary: 'View Specialties',
      bgImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop',
      microBullets: ['Certified DGEG Electricians', 'Rapid Emergency Arrival', 'Full Warranty & Detailed Invoicing'],
    },
    about: {
      badge: 'About the Company',
      title: 'Safety, Technical Rigor and',
      titleHighlight: 'Code Compliance',
      description1: 'With over 18 years of proven field experience, VoltTec is the trusted choice for homeowners and companies requiring safe, certified electrical work.',
      description2: 'We strictly install industry-leading protection and switchgear (Schneider, Legrand, Hager), safeguarding your property against overvoltages and electrical fire hazards.',
      benefits: ['24/7 Electrical Emergency Dispatch', 'Official DGEG Certification & Sign-Offs', 'Transparent Quotes With Zero Surprises'],
      card: {
        title: 'Why Choose VoltTec?',
        desc: 'Over 2,500 successful installations and emergency repairs completed with zero incidents.',
        stat1: { value: '18+', label: 'Years Experience' },
        stat2: { value: '100%', label: 'Certified Compliant' },
      },
    },
    stats: [
      { value: 18, suffix: '+', label: 'Years Experience', icon: 'award' },
      { value: 2500, suffix: '+', label: 'Installations & Repairs', icon: 'check' },
      { value: 100, suffix: '%', label: 'Safety & Certification', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Emergency Availability', icon: 'clock' },
    ],
    services: [
      { icon: '⚡', title: '24/7 Emergency Call-Outs', desc: 'Immediate troubleshooting for power outages, short circuits, constantly tripping breakers, and burned wiring.' },
      { icon: '🔌', title: 'Electrical Panel Upgrades', desc: 'Upgrading aged consumer units, installing high-sensitivity RCDs, busbars, and surge protection devices (SPDs).' },
      { icon: '💡', title: 'Architectural LED & Smart Home', desc: 'Installation of cove LED strips, recessed spotlights, motion sensors, and wireless smart home switching systems.' },
      { icon: '📑', title: 'Official DGEG / CERIEL Certification', desc: 'Technical inspections, utility power upgrades (E-Redes), and formal electrical safety compliance sign-offs.' },
      { icon: '🚗', title: 'EV Charging Points (Wallbox)', desc: 'Certified installation of electric vehicle chargers for residential garages, apartments, and commercial parking.' },
      { icon: '🏠', title: 'Complete Rewiring & Additions', desc: 'Upgrading deteriorated wiring, adding dedicated high-draw appliance circuits (ovens/HVAC), and modern sockets.' },
    ],
    gallery: [
      { title: 'Modern Clean Residential Distribution Board with Full Surge Protection', tag: 'Electrical Panels', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Architectural Warm LED Indirect Cove Lighting Project', tag: 'LED Lighting', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Dedicated Wallbox Installation for Electric Vehicle Charging', tag: 'EV Charging', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Emergency Insulation Testing & Professional Diagnostic Multimeter', tag: 'Emergency Service', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop' },
    ],
    process: [
      { step: '01', title: 'Emergency Call or Request', desc: 'Contact us via phone or WhatsApp. We triage your problem immediately.' },
      { step: '02', title: 'On-Site Diagnostic', desc: 'Our licensed electrician arrives, identifies the exact fault, and provides an upfront quote.' },
      { step: '03', title: 'Precision Code Repair', desc: 'We execute the repair using calibrated testing equipment and certified European materials.' },
      { step: '04', title: 'Safety Handover & Warranty', desc: 'We verify trip thresholds, test earthing continuity, and issue your certified invoice with warranty.' },
    ],
    footer: {
      copyright: '© 2026 VoltTec Electrical Installations. All rights reserved.',
      tagline: 'Certified master electricians and 24-hour technical assistance in Portugal.',
    },
  },
};
