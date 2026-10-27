/**
 * Centralized Client Configuration — Template Canalizador & Desentupimentos 24h
 * Niche: Plumbing, Emergency Leak Detection, Drain Unblocking & Water Heaters
 * Pre-configured high-converting template for Portuguese plumbers & emergency services
 */
export const clientData = {
  colors: {
    primary: '#0284C7', // Clean water / hydraulic blue
    primaryDark: '#0369A1',
    dark: '#0B132B',
    darkLighter: '#1C2541',
  },
  contact: {
    phone: '+351 910 000 000',
    phoneDisplay: '+351 910 000 000',
    email: 'urgencias@norteagua-canalizadores.pt',
    address: 'Atendimento 24h em Toda a Área Metropolitana e Região',
    whatsappNumber: '351910000000',
    whatsappMessage: 'Olá! Preciso de assistência de canalizador com urgência.',
    workingHours: [
      { days: 'Segunda – Domingo', hours: '24 Horas (Piquete de Urgência)' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PORTUGUESE (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'Norte Água',
      legalName: 'Norte Água Canalizadores 24h Lda.',
      titleHighlight: 'CANALIZADORES 24H',
      tagline: 'Piquete de Urgência · Fugas de Água & Desentupimentos',
      slogan: 'Chegada rápida em 30 a 60 minutos, canalizadores certificados e resolução imediata sem partir.',
      logo: '/logo.png',
      navCta: 'Ligar Piquete 24h',
    },
    contact: {
      phone: '+351 910 000 000',
      phoneDisplay: '+351 910 000 000',
      email: 'urgencias@norteagua-canalizadores.pt',
      address: 'Atendimento 24h em Toda a Área Metropolitana e Região',
      whatsappNumber: '351910000000',
      whatsappMessage: 'Olá! Preciso de assistência de canalizador com urgência.',
      workingHours: [
        { days: 'Segunda – Domingo', hours: '24 Horas (Piquete de Urgência)' },
      ],
    },
    navLinks: [
      { label: 'Início', href: '#acasa' },
      { label: 'Sobre Nós', href: '#despre' },
      { label: 'Serviços 24h', href: '#servicos' },
      { label: 'Intervenções', href: '#obras' },
      { label: 'Como Funciona', href: '#processo' },
    ],
    hero: {
      badge: 'Piquete de Urgência 24h/7d · Chegada Rápida',
      title: 'Norte Água',
      titleHighlight: 'CANALIZADORES 24H',
      slogan: 'Canalizador urgente para reparação de fugas, desentupimentos e esquentadores',
      description: 'Resolvemos qualquer avaria hidráulica de forma rápida, limpa e com garantia. Equipamento moderno de deteção de fugas por câmara térmica e desentupimento de alta pressão sem danificar o imóvel.',
      ctaPrimary: 'Chamar Canalizador Agora',
      ctaSecondary: 'Ver Serviços Urgentes',
      bgImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop',
      microBullets: ['Chegada em 30–60 Minutos', 'Preço Claro Sem Surpresas', 'Técnicos Credenciados com Fatura'],
    },
    about: {
      badge: 'Sobre a Empresa',
      title: 'Rapidez, Profissionalismo e',
      titleHighlight: 'Transparência Total',
      description1: 'Com mais de 15 anos no terreno, a Norte Água é referência em assistência técnica canalizada residencial e comercial. Sabemos que uma fuga de água ou esgoto entupido não pode esperar.',
      description2: 'Dispomos de carrinhas de piquete totalmente equipadas com material de reposição imediata (PEX, multicamada, juntas e sifões), permitindo resolver mais de 95% das avarias logo na primeira visita.',
      benefits: ['Disponibilidade Real 24h/365 dias', 'Deteção de Fugas com Tecnologia Sem Partir', 'Garantia por Escrito em Todos os Trabalhos'],
      card: {
        title: 'Porquê a Norte Água?',
        desc: 'Mais de 1.200 intervenções com resolução imediata no próprio dia.',
        stat1: { value: '24h', label: 'Piquete Ativo' },
        stat2: { value: '30m', label: 'Chegada Média' },
      },
    },
    stats: [
      { value: 15, suffix: '+', label: 'Anos de Atividade', icon: 'award' },
      { value: 1200, suffix: '+', label: 'Fugas & Avarias Resolvidas', icon: 'check' },
      { value: 100, suffix: '%', label: 'Garantia de Serviço', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Disponibilidade Total', icon: 'clock' },
    ],
    services: [
      { icon: '🚨', title: 'Piquete de Urgência 24h', desc: 'Assistência imediata a inundações, ruturas de canos e transbordo de esgotos a qualquer hora do dia ou da noite.' },
      { icon: '🔍', title: 'Deteção de Fugas Sem Partir', desc: 'Localização exata de infiltrações ocultas com câmara termográfica, geofone e teste de estanqueidade.' },
      { icon: '🚿', title: 'Desentupimentos Mecânicos', desc: 'Desentupimento rápido de sanitas, lava-loiças, ralos, caixas de esgoto e prumadas com máquina espiral e água a pressão.' },
      { icon: '🔥', title: 'Esquentadores & Caldeiras', desc: 'Reparação e instalação de esquentadores a gás, caldeiras e termoacumuladores elétricos com teste de combustão.' },
      { icon: '🔧', title: 'Substituição de Canalizações', desc: 'Renovação de redes de água antigas em ferro por tubagens modernas em Multicamada, PEX ou PPR com garantia.' },
      { icon: '🚰', title: 'Montagem de Torneiras & Loiças', desc: 'Substituição de torneiras misturadoras, autoclismos avariados, chuveiros, válvulas de corte e redutoras de pressão.' },
    ],
    gallery: [
      { title: 'Substituição Completa de Coluna de Água em Multicamada', tag: 'Canalização', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Desentupimento Mecânico de Prumada de Esgoto', tag: 'Desentupimentos', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Instalação de Torneira Monocomando e Sistema de Escoamento', tag: 'Loiças & Acessórios', image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Manutenção de Termoacumulador e Válvula de Segurança', tag: 'Termoacumuladores', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1200&auto=format&fit=crop' },
    ],
    process: [
      { step: '01', title: 'Chamada de Urgência', desc: 'Ligue ou envie mensagem pelo WhatsApp. Identificamos a avaria e enviamos o piquete mais próximo.' },
      { step: '02', title: 'Diagnóstico no Local', desc: 'O técnico avalia o problema e apresenta o orçamento claro antes de iniciar qualquer intervenção.' },
      { step: '03', title: 'Reparação Imediata', desc: 'Execução do trabalho com ferramentas profissionais e peças originais para evitar reincidências.' },
      { step: '04', title: 'Teste de Pressão & Garantia', desc: 'Testamos todo o circuito na sua presença e emitimos o comprovativo do serviço com garantia.' },
    ],
    footer: {
      copyright: '© 2026 Norte Água Canalizadores 24h. Todos os direitos reservados.',
      tagline: 'Assistência técnica de canalização e desentupimentos 24 horas em Portugal.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'Norte Água',
      legalName: 'Norte Água 24h Plumbers Ltd.',
      titleHighlight: '24H PLUMBERS',
      tagline: '24/7 Emergency Service · Leak Detection & Drain Cleaning',
      slogan: 'Rapid arrival in 30 to 60 minutes, certified master plumbers, and non-invasive leak fixes.',
      logo: '/logo.png',
      navCta: 'Call 24h Emergency',
    },
    contact: {
      phone: '+351 910 000 000',
      phoneDisplay: '+351 910 000 000',
      email: 'urgencias@norteagua-canalizadores.pt',
      address: '24h Emergency Coverage Throughout the Metropolitan Region',
      whatsappNumber: '351910000000',
      whatsappMessage: 'Hello! I need urgent plumbing assistance.',
      workingHours: [
        { days: 'Monday – Sunday', hours: '24 Hours (Emergency Dispatch)' },
      ],
    },
    navLinks: [
      { label: 'Home', href: '#acasa' },
      { label: 'About Us', href: '#despre' },
      { label: '24h Services', href: '#servicos' },
      { label: 'Field Work', href: '#obras' },
      { label: 'How It Works', href: '#processo' },
    ],
    hero: {
      badge: '24/7 Emergency Service · Rapid Response',
      title: 'Norte Água',
      titleHighlight: '24H PLUMBERS',
      slogan: 'Emergency plumber for leak repairs, drain unblocking, and water heaters',
      description: 'We resolve hydraulic emergencies cleanly, swiftly, and with full guarantee. Modern acoustic and thermal leak detection equipment plus high-pressure jetting without property damage.',
      ctaPrimary: 'Call a Plumber Now',
      ctaSecondary: 'Emergency Services',
      bgImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop',
      microBullets: ['Arrival in 30–60 Min', 'Upfront Transparent Pricing', 'Certified Licensed Technicians'],
    },
    about: {
      badge: 'About the Company',
      title: 'Speed, Professionalism and',
      titleHighlight: 'Total Transparency',
      description1: 'With over 15 years on the field, Norte Água is the trusted benchmark for emergency residential and commercial plumbing repairs.',
      description2: 'Our emergency vans carry comprehensive replacement inventory (multilayer, PEX, valves, traps), solving over 95% of issues in a single visit.',
      benefits: ['Genuine 24/7/365 Availability', 'Non-Invasive Diagnostic Technology', 'Written Warranty on All Work'],
      card: {
        title: 'Why Choose Us?',
        desc: 'Over 1,200 emergency call-outs resolved on the spot.',
        stat1: { value: '24h', label: 'Active Dispatch' },
        stat2: { value: '30m', label: 'Average Arrival' },
      },
    },
    stats: [
      { value: 15, suffix: '+', label: 'Years of Experience', icon: 'award' },
      { value: 1200, suffix: '+', label: 'Leaks & Drains Cleared', icon: 'check' },
      { value: 100, suffix: '%', label: 'Service Guarantee', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Total Availability', icon: 'clock' },
    ],
    services: [
      { icon: '🚨', title: '24/7 Emergency Dispatch', desc: 'Instant response to burst pipes, apartment floods, and sewage backups day or night.' },
      { icon: '🔍', title: 'Non-Invasive Leak Detection', desc: 'Pinpoint acoustic geophones, tracer gas, and infrared thermal imaging with zero destruction.' },
      { icon: '🚿', title: 'Professional Drain Unblocking', desc: 'Rapid clearing of blocked toilets, kitchen sinks, storm drains, and main sewer lines.' },
      { icon: '🔥', title: 'Water Heaters & Boilers', desc: 'Certified installation and repairs for gas instantaneous heaters and electric storage boilers.' },
      { icon: '🔧', title: 'Repiping & Pipe Replacements', desc: 'Upgrading rusted galvanized iron lines with state-of-the-art PEX, PPR, or multilayer tubing.' },
      { icon: '🚰', title: 'Fixtures & Faucet Fitting', desc: 'Rapid repair and replacement of mixer taps, concealed cisterns, flush valves, and pressure regulators.' },
    ],
    gallery: [
      { title: 'Full Multilayer Water Supply Mainline Replacement', tag: 'Piping', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Mechanical Snaking and Heavy Drain Clearing', tag: 'Unblocking', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Precision Faucet & Under-Sink Drainage Assembly', tag: 'Fixtures', image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Electric Boiler Maintenance & Safety Valve Check', tag: 'Water Heaters', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1200&auto=format&fit=crop' },
    ],
    process: [
      { step: '01', title: 'Emergency Call', desc: 'Call or WhatsApp us. We locate the nearest on-call van and dispatch immediately.' },
      { step: '02', title: 'On-Site Assessment', desc: 'Our plumber inspects the problem and gives you an exact quote before starting work.' },
      { step: '03', title: 'Immediate Fix', desc: 'Fast repair utilizing heavy-duty tools and certified replacement parts.' },
      { step: '04', title: 'Pressure Testing & Warranty', desc: 'We pressure-test the circuit in front of you and issue your certified invoice with warranty.' },
    ],
    footer: {
      copyright: '© 2026 Norte Água 24h Plumbers. All rights reserved.',
      tagline: 'Reliable 24-hour emergency plumbing and drain services in Portugal.',
    },
  },
};
