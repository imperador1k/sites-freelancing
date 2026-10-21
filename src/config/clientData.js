/**
 * Centralized Client Configuration — GERAR Reabilitação e Alto Rendimento
 * Location: Estrada Dr. João Abel de Freitas 74A, 9050-012 Funchal, Madeira, Portugal
 * Phone / WhatsApp: +351 966 758 524
 * Specialization: Advanced Physiotherapy, Sports Rehabilitation & High Performance Training
 * 5.0 Rating on Google Reviews (8 reviews)
 */
export const clientData = {
  colors: {
    primary: '#0D9488', // Professional clinical teal
    primaryDark: '#0F766E',
    accent: '#D97706', // Gold/amber accent matching clinic signage
    dark: '#081C26',
    darkLighter: '#112B38',
  },
  contact: {
    phone: '+351 966 758 524',
    phoneDisplay: '+351 966 758 524',
    email: 'contacto@gerarreabilitacao.pt',
    address: 'Estrada Dr. João Abel de Freitas 74A, 9050-012 Funchal',
    whatsappNumber: '351966758524',
    whatsappMessage: 'Olá GERAR Reabilitação! Vi o vosso site e gostaria de agendar uma consulta de avaliação.',
    workingHours: [
      { days: 'Segunda – Sexta', hours: '09:00 – 20:00' },
      { days: 'Sábado', hours: '09:00 – 14:00' },
      { days: 'Domingo', hours: 'Encerrado' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PORTUGUESE (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'GERAR',
      legalName: 'GERAR Reabilitação e Alto Rendimento',
      titleHighlight: 'ALTO RENDIMENTO',
      tagline: 'Fisioterapia & Reabilitação Física · Funchal',
      slogan: 'Fisioterapia especializada, recuperação funcional e otimização de performance no Funchal.',
      logo: '/favicon.png',
      navCta: 'Marcar Consulta',
      mobileNavCta: 'Marcar Consulta',
      aiGreeting: 'Olá! 👋 Bem-vindo à GERAR Reabilitação e Alto Rendimento no Funchal. Como podemos ajudar na sua recuperação ou treino?',
      whatsappOptions: [
        { label: '🩺 Consulta de Avaliação em Fisioterapia', msg: 'Olá! Gostaria de agendar uma consulta inicial de fisioterapia.' },
        { label: '🏃 Recuperação de Lesão & Alto Rendimento', msg: 'Olá! Procuro acompanhamento para recuperação de lesão / performance desportiva.' },
        { label: '📍 Localização e Horários de Atendimento', msg: 'Olá! Gostaria de saber informações sobre o espaço na Estrada Dr. João Abel de Freitas.' },
      ],
    },
    contact: {
      phone: '+351 966 758 524',
      phoneDisplay: '+351 966 758 524',
      email: 'contacto@gerarreabilitacao.pt',
      address: 'Estrada Dr. João Abel de Freitas 74A, 9050-012 Funchal',
      whatsappNumber: '351966758524',
      whatsappMessage: 'Olá GERAR Reabilitação! Vi o vosso site e gostaria de agendar uma consulta de avaliação.',
      workingHours: [
        { days: 'Segunda – Sexta', hours: '09:00 – 20:00' },
        { days: 'Sábado', hours: '09:00 – 14:00' },
        { days: 'Domingo', hours: 'Encerrado' },
      ],
    },
    navLinks: [
      { label: 'Início', href: '#acasa' },
      { label: 'Sobre Nós', href: '#despre' },
      { label: 'Especialidades', href: '#servicos' },
      { label: 'Instalações', href: '#obras' },
      { label: 'Como Funciona', href: '#processo' },
    ],
    hero: {
      badge: 'Funchal · Ilha da Madeira · Clínica Especializada',
      title: 'GERAR',
      titleHighlight: 'REABILITAÇÃO & ALTO RENDIMENTO',
      slogan: 'Fisioterapia clínica de precisão e recuperação funcional de excelência no Funchal',
      description: 'Especialistas no tratamento da dor, reabilitação pós-cirúrgica, fisioterapia desportiva e otimização de movimento. Um espaço clínico moderno com acompanhamento individualizado para restaurar o seu bem-estar e performance.',
      ctaPrimary: 'Agendar Avaliação',
      ctaSecondary: 'Conhecer as Instalações',
      bgImage: '/gerar-clinica-1.png',
      microBullets: ['5.0 ★ no Google (8 Opiniões)', 'Acompanhamento Individualizado', 'Estrada Dr. João Abel de Freitas 74A'],
      trustCard: {
        title: 'GERAR Reabilitação',
        desc: '5.0 ★ Avaliação Máxima no Google',
      },
    },
    about: {
      badge: 'Sobre a Clínica',
      title: 'Ciência, Dedicação e',
      titleHighlight: 'Resultados Clínicos',
      description1: 'Na GERAR — Reabilitação e Alto Rendimento, localizada no Funchal, combinamos métodos clínicos comprovados, terapia manual e exercício terapêutico orientado para restaurar a sua mobilidade sem dor. Cada paciente tem necessidades únicas e recebe um plano de intervenção rigorosamente adaptado.',
      description2: 'Dispomos de instalações luminosas e acolhedoras, marquesas de tratamento individuais e espaço de exercício clínico equipado com tecnologia de eletroterapia. Seja para recuperar de uma cirurgia, tratar dores de coluna ou potenciar o rendimento físico, estamos ao seu lado.',
      benefits: ['Avaliação Clínica Detalhada e Individual', 'Tratamentos Baseados em Evidência Científica', 'Equipamento Moderno e Espaço Dedicado no Funchal'],
      card: {
        title: 'Porquê a GERAR Reabilitação?',
        desc: 'Classificação 5.0 estrelas no Google com pacientes satisfeitos na Região Autónoma da Madeira.',
        stat1: { value: '5.0 ★', label: 'Avaliação Google' },
        stat2: { value: '09:00', label: 'Aberto a partir das 09h' },
      },
    },
    stats: [
      { value: 100, suffix: '%', label: 'Dedicação Individual', icon: 'shield' },
      { value: 8, suffix: '★', label: 'Avaliações Máximas', icon: 'award' },
      { value: 500, suffix: '+', label: 'Sessões Clínicas', icon: 'check' },
      { value: 24, suffix: 'h', label: 'Resposta WhatsApp', icon: 'truck' },
    ],
    services: [
      { icon: '🩺', title: 'Fisioterapia Músculo-Esquelética', desc: 'Tratamento de lombalgias, cervicalgias, tendinites, hérnias discais e lesões articulares com foco na causa raiz.' },
      { icon: '⚡', title: 'Alto Rendimento & Desporto', desc: 'Recuperação e prevenção de lesões para atletas amadores e profissionais, com transição segura para a prática intensa.' },
      { icon: '👐', title: 'Terapia Manual Ortopédica', desc: 'Libertação miofascial, mobilização articular e manipulações suaves para alívio imediato da rigidez e da dor.' },
      { icon: '🏥', title: 'Reabilitação Pós-Operatória', desc: 'Acompanhamento especializado após cirurgias ortopédicas de joelho (LCA/menisco), ombro, coluna e anca.' },
      { icon: '🧘', title: 'Exercício Clínico & Estabilidade', desc: 'Fortalecimento muscular funcional com bola suíça e exercícios guiados para reeducação postural e equilíbrio.' },
      { icon: '🔬', title: 'Eletroterapia & Termoterapia', desc: 'Aplicação de tecnologia eletroterapêutica para controlo ágil de inflamações e aceleração da regeneração celular.' },
    ],
    servicesHeader: {
      badge: 'O Que Tratamos',
      titlePre: 'Especialidades de',
      titleHighlight: 'Excelência Clínica',
      titlePost: 'Para a Sua Recuperação',
      subtitle: 'Tratamentos de fisioterapia baseados em evidência científica, tecnologia de ponta e acompanhamento individualizado no Funchal.',
      ctaLabel: 'Marcar Avaliação',
    },
    galleryHeader: {
      badge: 'Instalações & Espaço',
      titlePre: 'Conheça o Nosso',
      titleHighlight: 'Espaço Clínico',
      subtitle: 'Instalações modernas, luminosas e equipadas para garantir a máxima privacidade, conforto e recuperação no Funchal.',
      quotePrompt: 'Quero agendar consulta',
    },
    contactHeader: {
      badge: 'Marcações & Contacto',
      title: 'Agende a Sua',
      titleHighlight: 'Consulta de Avaliação',
      desc: 'Dores na coluna, lesão desportiva ou recuperação cirúrgica? Fale connosco hoje mesmo e recupere a sua mobilidade plena no Funchal.',
      nameLabel: 'O Seu Nome',
      namePlaceholder: 'ex: João Silva',
      phoneLabel: 'Telefone / WhatsApp',
      phonePlaceholder: 'ex: 966 758 524',
      emailLabel: 'Email',
      emailPlaceholder: 'ex: joao@email.com',
      messageLabel: 'Motivo da Consulta ou Sintomas',
      messagePlaceholder: 'Descreva a sua dor, lesão, cirurgia recente ou objetivo físico...',
      submitBtn: 'Enviar Pedido de Agendamento',
      sentSuccess: 'Pedido Enviado com Sucesso! Responderemos com brevidade.',
    },
    gallery: [
      { title: 'Receção Clínica & Balcão de Boas-Vindas', tag: 'Receção', image: '/gerar-clinica-1.png' },
      { title: 'Área de Fisioterapia & Marquesas Clínicas', tag: 'Reabilitação', image: '/gerar-clinica-2.png' },
      { title: 'Fachada Exterior na Estrada Dr. João Abel de Freitas', tag: 'Localização', image: '/gerar-clinica-3.png' },
      { title: 'Sala de Espera Confortável & Luminosa', tag: 'Espaço', image: '/gerar-clinica-4.png' },
    ],
    process: [
      { step: '01', title: 'Contacto & Agendamento', desc: 'Envie mensagem via WhatsApp para o 966 758 524 e reserve o seu horário com total comodidade.' },
      { step: '02', title: 'Avaliação Diagnóstica', desc: 'Realizamos uma avaliação funcional pormenorizada para identificar os padrões de dor e limitações físicas.' },
      { step: '03', title: 'Plano Personalizado', desc: 'Desenhamos um programa sob medida combinando terapia manual, técnicas ativas e tecnologia clínica.' },
      { step: '04', title: 'Evolução & Performance', desc: 'Acompanhamos o seu progresso passo a passo até à recuperação total e autonomia no dia a dia.' },
    ],
    footer: {
      copyright: '© 2026 GERAR Reabilitação e Alto Rendimento. Todos os direitos reservados.',
      tagline: 'Fisioterapia especializada, reabilitação física e alto rendimento no Funchal, Madeira.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'GERAR',
      legalName: 'GERAR Physiotherapy & High Performance',
      titleHighlight: 'HIGH PERFORMANCE',
      tagline: 'Advanced Physiotherapy & Physical Rehabilitation · Funchal',
      slogan: 'Specialized physiotherapy, functional recovery and performance optimization in Funchal.',
      logo: '/favicon.png',
      navCta: 'Book Appointment',
      mobileNavCta: 'Book Appointment',
      aiGreeting: 'Hello! 👋 Welcome to GERAR Rehabilitation & High Performance in Funchal. How can we assist your recovery or training today?',
      whatsappOptions: [
        { label: '🩺 Initial Physiotherapy Assessment', msg: 'Hello! I would like to book an initial physiotherapy assessment in Funchal.' },
        { label: '🏃 Sports Injury Rehabilitation & Performance', msg: 'Hello! I am seeking injury recovery and athletic performance training.' },
        { label: '📍 Location & Opening Hours', msg: 'Hello! I would like details about your clinic location on Estrada Dr. João Abel de Freitas.' },
      ],
    },
    contact: {
      phone: '+351 966 758 524',
      phoneDisplay: '+351 966 758 524',
      email: 'contacto@gerarreabilitacao.pt',
      address: 'Estrada Dr. João Abel de Freitas 74A, 9050-012 Funchal',
      whatsappNumber: '351966758524',
      whatsappMessage: 'Hello GERAR Rehabilitation! I saw your website and would like to schedule an assessment.',
      workingHours: [
        { days: 'Monday – Friday', hours: '09:00 – 20:00' },
        { days: 'Saturday', hours: '09:00 – 14:00' },
        { days: 'Sunday', hours: 'Closed' },
      ],
    },
    navLinks: [
      { label: 'Home', href: '#acasa' },
      { label: 'About Us', href: '#despre' },
      { label: 'Specialties', href: '#servicos' },
      { label: 'Facilities', href: '#obras' },
      { label: 'How It Works', href: '#processo' },
    ],
    hero: {
      badge: 'Funchal · Madeira Island · Specialized Clinical Care',
      title: 'GERAR',
      titleHighlight: 'REHABILITATION & HIGH PERFORMANCE',
      slogan: 'Precision clinical physiotherapy and elite functional recovery in Funchal',
      description: 'Specialists in pain relief, post-surgical recovery, sports physiotherapy, and movement optimization. Modern clinical facilities with individualized care to restore your mobility and athletic performance.',
      ctaPrimary: 'Book Assessment',
      ctaSecondary: 'Explore Facilities',
      bgImage: '/gerar-clinica-1.png',
      microBullets: ['5.0 ★ Google Rating (8 Reviews)', 'Individualized 1-on-1 Sessions', 'Estrada Dr. João Abel de Freitas 74A'],
      trustCard: {
        title: 'GERAR Rehabilitation',
        desc: '5.0 ★ Top Rated on Google',
      },
    },
    about: {
      badge: 'About the Clinic',
      title: 'Science, Dedication and',
      titleHighlight: 'Clinical Excellence',
      description1: 'At GERAR — Rehabilitation & High Performance in Funchal, we merge proven clinical methods, manual therapy, and guided therapeutic exercise to restore full, pain-free bodily function.',
      description2: 'Our clinic offers spacious treatment suites, individual examination tables, and active rehabilitation areas equipped with electrotherapy. Whether recovering from orthopedic surgery or boosting athletic output, you receive expert guidance.',
      benefits: ['Comprehensive Clinical Assessment', '100% Customized Recovery Pathways', 'Modern Facilities in Funchal, Madeira'],
      card: {
        title: 'Why Choose GERAR?',
        desc: 'Rated 5.0 stars on Google with fully satisfied patients across Madeira Island.',
        stat1: { value: '5.0 ★', label: 'Google Rating' },
        stat2: { value: '09:00', label: 'Open from 9:00 AM' },
      },
    },
    stats: [
      { value: 100, suffix: '%', label: 'Individual Focus', icon: 'shield' },
      { value: 8, suffix: '★', label: '5-Star Reviews', icon: 'award' },
      { value: 500, suffix: '+', label: 'Clinical Sessions', icon: 'check' },
      { value: 24, suffix: 'h', label: 'WhatsApp Response', icon: 'truck' },
    ],
    services: [
      { icon: '🩺', title: 'Musculoskeletal Physiotherapy', desc: 'Targeted care for lower back pain, neck stiffness, tendinitis, and spinal disc issues.' },
      { icon: '⚡', title: 'High Performance & Sports Rehab', desc: 'Accelerated recovery and injury prevention for athletes, restoring peak functional capacity.' },
      { icon: '👐', title: 'Orthopedic Manual Therapy', desc: 'Joint mobilizations, myofascial release, and soft-tissue techniques for immediate mobility relief.' },
      { icon: '🏥', title: 'Post-Surgical Rehabilitation', desc: 'Tailored protocols following ACL reconstruction, meniscus surgery, rotator cuff repairs, and hip procedures.' },
      { icon: '🧘', title: 'Clinical Exercise & Core Stability', desc: 'Supervised functional conditioning using Swiss balls and kinetic equipment for posture correction.' },
      { icon: '🔬', title: 'Electrotherapy & Modalities', desc: 'Clinical modalities for acute inflammation control, swelling reduction, and deep tissue regeneration.' },
    ],
    servicesHeader: {
      badge: 'What We Treat',
      titlePre: 'Clinical Excellence in',
      titleHighlight: 'Specialized Therapy',
      titlePost: 'For Your Recovery',
      subtitle: 'Evidence-based physiotherapy, advanced sports rehabilitation and personalized care in Funchal, Madeira.',
      ctaLabel: 'Book Assessment',
    },
    galleryHeader: {
      badge: 'Our Clinic & Space',
      titlePre: 'Explore Our',
      titleHighlight: 'Modern Facilities',
      subtitle: 'Luminous, welcoming clinical suites equipped for maximum privacy, comfort, and physical recovery in Funchal.',
      quotePrompt: 'Book an appointment',
    },
    contactHeader: {
      badge: 'Appointments & Contact',
      title: 'Schedule Your',
      titleHighlight: 'Clinical Assessment',
      desc: 'Spinal discomfort, sports injury or post-surgical recovery? Reach out today to restore your full mobility in Funchal.',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. John Smith',
      phoneLabel: 'Phone / WhatsApp',
      phonePlaceholder: 'e.g. +351 966 758 524',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g. john@email.com',
      messageLabel: 'Reason for Visit or Symptoms',
      messagePlaceholder: 'Describe your pain, injury, recent surgery or fitness goal...',
      submitBtn: 'Send Appointment Request',
      sentSuccess: 'Request Sent Successfully! We will respond promptly.',
    },
    gallery: [
      { title: 'Clinical Reception & Welcome Desk', tag: 'Reception', image: '/gerar-clinica-1.png' },
      { title: 'Physiotherapy Gymnasium & Treatment Beds', tag: 'Rehabilitation', image: '/gerar-clinica-2.png' },
      { title: 'Exterior Building on Estrada Dr. João Abel de Freitas', tag: 'Location', image: '/gerar-clinica-3.png' },
      { title: 'Luminous & Comfortable Waiting Area', tag: 'Facilities', image: '/gerar-clinica-4.png' },
    ],
    process: [
      { step: '01', title: 'Easy Booking', desc: 'Message us on WhatsApp at +351 966 758 524 to select your ideal appointment time.' },
      { step: '02', title: 'Diagnostic Exam', desc: 'We conduct a thorough physical and biomechanical evaluation to identify root causes.' },
      { step: '03', title: 'Personalized Plan', desc: 'We establish clear milestones combining manual care, active therapy, and clinical technology.' },
      { step: '04', title: 'Recovery & Progress', desc: 'Continuous tracking until full functional discharge and long-term recurrence prevention.' },
    ],
    footer: {
      copyright: '© 2026 GERAR Rehabilitation & High Performance. All rights reserved.',
      tagline: 'Specialized physiotherapy, physical rehabilitation, and high performance in Funchal, Madeira.',
    },
  },
};
