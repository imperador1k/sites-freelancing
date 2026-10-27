/**
 * Centralized Client Configuration — Template Oficina Mecânica & Revisões
 * Niche: Auto Repair, Diagnostics, Oil Changes, Brakes, Tires & AC Charging
 * Pre-configured high-converting template for Portuguese auto repair shops
 */
export const clientData = {
  colors: {
    primary: '#DC2626', // Automotive performance red
    primaryDark: '#B91C1C',
    dark: '#0F172A',
    darkLighter: '#1E293B',
  },
  contact: {
    phone: '+351 910 000 000',
    phoneDisplay: '+351 910 000 000',
    email: 'contacto@autocheck-oficina.pt',
    address: 'Zona Industrial e Área Metropolitana',
    whatsappNumber: '351910000000',
    whatsappMessage: 'Olá! Gostaria de agendar uma revisão ou pedir orçamento para o meu carro.',
    workingHours: [
      { days: 'Segunda – Sexta', hours: '08:30 – 19:00' },
      { days: 'Sábado', hours: '08:30 – 13:00' },
      { days: 'Domingo', hours: 'Encerrado' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PORTUGUESE (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'AutoCheck',
      legalName: 'AutoCheck Oficina Mecânica & Revisões Lda.',
      titleHighlight: 'OFICINA AUTO',
      tagline: 'Mecânica Multimarca · Diagnóstico Computorizado & Revisões',
      slogan: 'Revisões oficiais mantendo a garantia do construtor, diagnóstico avançado e orçamento aprovado antes de reparar.',
      logo: '/logo.png',
      navCta: 'Marcar Revisão',
    },
    contact: {
      phone: '+351 910 000 000',
      phoneDisplay: '+351 910 000 000',
      email: 'contacto@autocheck-oficina.pt',
      address: 'Zona Industrial e Área Metropolitana',
      whatsappNumber: '351910000000',
      whatsappMessage: 'Olá! Gostaria de agendar uma revisão ou pedir orçamento para o meu carro.',
      workingHours: [
        { days: 'Segunda – Sexta', hours: '08:30 – 19:00' },
        { days: 'Sábado', hours: '08:30 – 13:00' },
        { days: 'Domingo', hours: 'Encerrado' },
      ],
    },
    navLinks: [
      { label: 'Início', href: '#acasa' },
      { label: 'Sobre Nós', href: '#despre' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Oficina & Galeria', href: '#obras' },
      { label: 'Como Funciona', href: '#processo' },
    ],
    hero: {
      badge: 'Oficina Multimarca Certificada · Garantia em Todas as Reparações',
      title: 'AutoCheck',
      titleHighlight: 'OFICINA AUTO',
      slogan: 'Mecânica de confiança, revisão oficial sem perder a garantia e diagnóstico de precisão',
      description: 'Cuidamos do seu automóvel com rigor técnico, peças homologadas e máquinas de diagnóstico de última geração. Sem surpresas na fatura: orçamentos detalhados e aprovados antes de qualquer reparação.',
      ctaPrimary: 'Agendar Revisão ou Diagnóstico',
      ctaSecondary: 'Ver Serviços Oficiais',
      bgImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1600&auto=format&fit=crop',
      microBullets: ['Garantia de Construtor Mantida', 'Orçamento Grátis Sem Compromisso', 'Viatura de Cortesia Disponível'],
    },
    about: {
      badge: 'Sobre a Oficina',
      title: 'Transparência, Rigor e',
      titleHighlight: 'Tecnologia Automóvel',
      description1: 'Na AutoCheck tratamos o seu carro como se fosse nosso. Com mais de 16 anos no setor automóvel, combinamos mecânicos experientes com ferramentas digitais avançadas de diagnóstico multimarca.',
      description2: 'Cumprimos escrupulosamente os planos de manutenção recomendados pelos fabricantes, utilizando lubrificantes com homologação oficial e componentes de primeiro equipamento (Bosch, Brembo, Valeo).',
      benefits: ['Aprovação Prévia de Orçamento Antes de Qualquer Ação', 'Histórico Digital de Manutenções', 'Testes de Travagem e Segurança em Linha'],
      card: {
        title: 'Porquê a AutoCheck?',
        desc: 'Mais de 4.200 condutores confiam na nossa oficina para as suas revisões.',
        stat1: { value: '16+', label: 'Anos de Estrada' },
        stat2: { value: '100%', label: 'Peças Homologadas' },
      },
    },
    stats: [
      { value: 16, suffix: '+', label: 'Anos de Experiência', icon: 'award' },
      { value: 4200, suffix: '+', label: 'Carros Reparados', icon: 'check' },
      { value: 100, suffix: '%', label: 'Garantia de Fábrica', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Marcação Rápida', icon: 'clock' },
    ],
    services: [
      { icon: '🔧', title: 'Revisão Oficial Periódica', desc: 'Mudança de óleo com especificação do construtor, filtros (óleo, ar, combustível, habitáculo) e checklist de 50 pontos de segurança.' },
      { icon: '💻', title: 'Diagnóstico Eletrónico OBD2', desc: 'Leitura e reset de luzes de avaria de motor, ABS, ESP, airbags, filtros de partículas (FAP/DPF) e injeção eletrónica.' },
      { icon: '🛑', title: 'Travões & Segurança Ativa', desc: 'Substituição de pastilhas e discos de travão, medição de desgaste, sangramento e substituição de fluido DOT4/DOT5.1.' },
      { icon: '🛞', title: 'Pneus & Alinhamento 3D', desc: 'Venda e montagem de pneus novos, calibragem computadorizada e alinhamento de direção a laser 3D para menor desgaste.' },
      { icon: '❄️', title: 'Ar Condicionado & Climatização', desc: 'Carregamento com gás R134a ou R1234yf, deteção de fugas por vácuo/UV e higienização anti-bacteriana do circuito.' },
      { icon: '📋', title: 'Preparação para Inspeção (IPO)', desc: 'Verificação exaustiva de luzes, gases de escape, folgas e amortecedores. Levamos o seu carro ao centro de inspeção por si.' },
    ],
    gallery: [
      { title: 'Diagnóstico Computorizado e Otimização de Parâmetros de Motor', tag: 'Diagnóstico', image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Substituição de Discos de Travão Ventilados e Pastilhas Cerâmicas', tag: 'Travões', image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Instalações Modernas com Elevadores Hidráulicos e Alinhamento 3D', tag: 'Instalações', image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Manutenção Preventiva de Motor e Troca de Correia de Distribuição', tag: 'Mecânica Geral', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop' },
    ],
    process: [
      { step: '01', title: 'Agendamento Fácil', desc: 'Marque pelo WhatsApp ou telefone indicando a matrícula, marca e o serviço pretendido.' },
      { step: '02', title: 'Check-in & Orçamento', desc: 'Recebemos a viatura, realizamos a vistoria inicial e enviamos o orçamento antes de iniciar.' },
      { step: '03', title: 'Reparação Especializada', desc: 'Os nossos técnicos intervêm com peças certificadas e ferramentas de precisão.' },
      { step: '04', title: 'Entrega com Relatório', desc: 'Entregamos o carro pronto, limpo e acompanhado da fatura detalhada com garantia total.' },
    ],
    footer: {
      copyright: '© 2026 AutoCheck Oficina Mecânica. Todos os direitos reservados.',
      tagline: 'Oficina multimarca de confiança, revisões oficiais e diagnóstico de precisão em Portugal.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'AutoCheck',
      legalName: 'AutoCheck Auto Repair & Servicing Ltd.',
      titleHighlight: 'AUTO REPAIR',
      tagline: 'Multi-Brand Garage · Electronic Diagnostics & Scheduled Servicing',
      slogan: 'Factory-compliant servicing preserving manufacturer warranty, advanced diagnostics, and upfront approval.',
      logo: '/logo.png',
      navCta: 'Book Service',
    },
    contact: {
      phone: '+351 910 000 000',
      phoneDisplay: '+351 910 000 000',
      email: 'contacto@autocheck-oficina.pt',
      address: 'Industrial District & Metropolitan Area',
      whatsappNumber: '351910000000',
      whatsappMessage: 'Hello! I would like to book a car service or request a quote.',
      workingHours: [
        { days: 'Monday – Friday', hours: '08:30 – 19:00' },
        { days: 'Saturday', hours: '08:30 – 13:00' },
        { days: 'Sunday', hours: 'Closed' },
      ],
    },
    navLinks: [
      { label: 'Home', href: '#acasa' },
      { label: 'About Us', href: '#despre' },
      { label: 'Services', href: '#servicos' },
      { label: 'Workshop & Works', href: '#obras' },
      { label: 'How It Works', href: '#processo' },
    ],
    hero: {
      badge: 'Certified Multi-Brand Workshop · Warranty on All Repairs',
      title: 'AutoCheck',
      titleHighlight: 'AUTO REPAIR',
      slogan: 'Trusted mechanical care, warranty-preserving manufacturer servicing, and precision diagnostics',
      description: 'We care for your vehicle with technical rigor, homologated original-equipment parts, and state-of-the-art diagnostic machinery. No hidden costs: transparent itemized estimates approved before work begins.',
      ctaPrimary: 'Book Service or Diagnostics',
      ctaSecondary: 'View Official Services',
      bgImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1600&auto=format&fit=crop',
      microBullets: ['Preserves Factory Warranty', 'Free Transparent Estimates', 'Courtesy Car Available'],
    },
    about: {
      badge: 'About the Workshop',
      title: 'Transparency, Rigor and',
      titleHighlight: 'Automotive Precision',
      description1: 'At AutoCheck we treat your car as our own. With over 16 years in the automotive industry, we combine certified mechanics with the latest digital diagnostic tools.',
      description2: 'We strictly follow manufacturer maintenance schedules, using homologated lubricants and OEM-grade parts (Bosch, Brembo, Valeo).',
      benefits: ['Prior Cost Approval Before Any Repair', 'Full Digital Maintenance Record', 'Safety & Dynamic Brake Testing'],
      card: {
        title: 'Why Choose AutoCheck?',
        desc: 'Over 4,200 drivers rely on our workshop for their routine servicing.',
        stat1: { value: '16+', label: 'Years in Business' },
        stat2: { value: '100%', label: 'OEM Certified Parts' },
      },
    },
    stats: [
      { value: 16, suffix: '+', label: 'Years Experience', icon: 'award' },
      { value: 4200, suffix: '+', label: 'Vehicles Serviced', icon: 'check' },
      { value: 100, suffix: '%', label: 'Factory Warranty', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Fast Booking', icon: 'clock' },
    ],
    services: [
      { icon: '🔧', title: 'Periodic Official Service', desc: 'Manufacturer-spec oil flush, all filters (oil, air, fuel, cabin), and a comprehensive 50-point safety check.' },
      { icon: '💻', title: 'OBD2 Electronic Diagnostics', desc: 'Troubleshooting check-engine lights, ABS, ESP, airbags, DPF particulate filters, and injection systems.' },
      { icon: '🛑', title: 'Brakes & Active Safety', desc: 'Brake pad and ventilated disc replacements, wear assessments, and DOT4/DOT5.1 fluid bleeding.' },
      { icon: '🛞', title: 'Tires & 3D Laser Alignment', desc: 'New tire fitting, electronic wheel balancing, and precision 3D alignment for optimal handling and wear.' },
      { icon: '❄️', title: 'A/C Servicing & Recharge', desc: 'R134a and R1234yf refrigerant recharge, vacuum leak tests, and anti-bacterial cabin disinfection.' },
      { icon: '📋', title: 'Mandatory Inspection (IPO) Prep', desc: 'Pre-inspection testing of emissions, lighting, suspension play, and taking the car to the test center for you.' },
    ],
    gallery: [
      { title: 'Computerized Engine Diagnostics & ECU Sensor Parameter Scans', tag: 'Diagnostics', image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Ventilated Performance Brake Disc & Ceramic Pad Replacement', tag: 'Brake Systems', image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Modern Clean Workshop Bays with Hydraulic Lifts & 3D Alignment', tag: 'Facilities', image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Timing Belt Replacement & Preventive Internal Engine Maintenance', tag: 'Engine Overhaul', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop' },
    ],
    process: [
      { step: '01', title: 'Quick Booking', desc: 'Contact us via phone or WhatsApp with your vehicle license plate and desired service.' },
      { step: '02', title: 'Check-In & Upfront Quote', desc: 'We inspect the vehicle upon arrival and supply a transparent quote before touching a wrench.' },
      { step: '03', title: 'Precision Servicing', desc: 'Our technicians carry out the approved work using certified parts and precision tooling.' },
      { step: '04', title: 'Handover & Warranty', desc: 'We deliver your vehicle on time and clean, accompanied by a detailed warranty receipt.' },
    ],
    footer: {
      copyright: '© 2026 AutoCheck Auto Repair. All rights reserved.',
      tagline: 'Reliable multi-brand garage, official servicing, and precision diagnostics in Portugal.',
    },
  },
};
