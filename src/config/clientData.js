/**
 * Centralized Client Configuration
 * Single source of truth for business information, texts, contact details, services, gallery and workflow.
 */
export const clientData = {
  company: {
    name: 'BETO BASE',
    legalName: 'Beto Base Lda.',
    tagline: 'Construção Civil & Remodelações',
    slogan: 'O seu parceiro de confiança para obras sólidas e acabamentos de excelência',
    logo: '/logo.png',
  },
  colors: {
    primary: '#E63B2E',
    primaryDark: '#C4291D',
    dark: '#1A1A2E',
    darkLighter: '#2D2D44',
  },
  contact: {
    phone: '+351 912 345 678',
    phoneDisplay: '+351 912 345 678',
    email: 'contacto@betobase.pt',
    address: 'Rua Principal das Flores, nº 42, 1000-001 Lisboa',
    whatsappNumber: '351912345678',
    whatsappMessage: 'Olá Beto Base, vi o vosso site e gostaria de pedir um orçamento gratuito.',
    workingHours: [
      { days: 'Segunda – Sexta', hours: '08:00 – 18:00' },
      { days: 'Sábado', hours: '08:00 – 13:00' },
      { days: 'Domingo', hours: 'Encerrado' },
    ],
  },
  navLinks: [
    { label: 'Início', href: '#acasa' },
    { label: 'Sobre Nós', href: '#despre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Obras Recentes', href: '#obras' },
    { label: 'Processo', href: '#processo' },
  ],
  hero: {
    badge: 'Construção & Remodelações em Portugal',
    title: 'BETO',
    titleHighlight: 'BASE',
    slogan: 'O seu parceiro de confiança em construções resistentes e acabamentos de qualidade',
    description: 'Executamos serviços de construção civil, remodelações e estruturas com rigor técnico, materiais certificados e cumprimento estrito de prazos.',
    ctaPrimary: 'Pedir Orçamento Gratuito',
    ctaSecondary: 'Ver Obras Recentes',
    bgImage: '/bg3.jpg',
  },
  about: {
    badge: 'Sobre a Beto Base',
    title: 'Construímos o Futuro com',
    titleHighlight: 'Rigor e Qualidade',
    description1: 'A Beto Base é uma empresa de referência em construção civil e remodelações. Trabalhamos com rigor técnico e transparência para transformar qualquer projeto em realidade sólida.',
    description2: 'Garantimos materiais de primeira linha, acompanhamento rigoroso em todas as fases da obra e cumprimento rigoroso dos prazos contratados.',
    benefits: ['Cumprimento de Prazos', 'Orçamento Gratuito e Sem Compromisso', 'Apoio Técnico Especializado'],
    card: {
      title: 'Porquê Escolher-nos?',
      desc: 'Aliamos experiência prática a padrões rigorosos de qualidade e atenção personalizada a cada cliente.',
      stat1: { value: '15+', label: 'Anos de Experiência' },
      stat2: { value: '24h', label: 'Resposta Rápida' },
    },
  },
  stats: [
    { value: 15, suffix: '+', label: 'Anos de Experiência', icon: 'award' },
    { value: 450, suffix: '+', label: 'Obras Concluídas', icon: 'check' },
    { value: 100, suffix: '%', label: 'Qualidade Garantida', icon: 'shield' },
    { value: 24, suffix: 'h', label: 'Resposta a Pedidos', icon: 'truck' },
  ],
  services: [
    { icon: '🏗️', title: 'Betão e Estruturas', desc: 'Fundações, lajes e estruturas de betão armado executadas com rigor de engenharia.' },
    { icon: '🏠', title: 'Remodelações Gerais', desc: 'Renovação integral de moradias, apartamentos e espaços comerciais chave-na-mão.' },
    { icon: '🧱', title: 'Alvenaria e Divisórias', desc: 'Construção de paredes, muros e isolamento térmico e acústico de elevado padrão.' },
    { icon: '🔧', title: 'Canalização e Redes', desc: 'Instalação e reparação de redes de águas, esgotos e sistemas sanitários.' },
    { icon: '🎨', title: 'Pintura e Acabamentos', desc: 'Aplicação de pladur, pinturas interiores e exteriores e revestimentos cerâmicos.' },
    { icon: '🛡️', title: 'Telhados e Impermeabilização', desc: 'Tratamento de infiltrações, isolamento de coberturas e reparação de caleiras.' },
  ],
  gallery: [
    { title: 'Remodelação Integral de Moradia', tag: 'Remodelação', image: '/bg1.jpg' },
    { title: 'Estrutura e Fundação em Betão', tag: 'Estruturas', image: '/bg2.jpg' },
    { title: 'Acabamentos e Revestimentos de Luxo', tag: 'Acabamentos', image: '/bg3.jpg' },
    { title: 'Reabilitação de Fachada e Cobertura', tag: 'Reabilitação', image: '/hero-bg.png' },
  ],
  process: [
    { step: '01', title: 'Contacto Inicial', desc: 'Fale connosco por telefone ou WhatsApp e explique as necessidades da sua obra.' },
    { step: '02', title: 'Visita Técnica', desc: 'Deslocamo-nos ao local para avaliar dimensões, materiais e especificações técnicas.' },
    { step: '03', title: 'Orçamento Detalhado', desc: 'Apresentamos uma proposta transparente, sem custos ocultos nem compromisso.' },
    { step: '04', title: 'Execução da Obra', desc: 'Iniciamos os trabalhos com planeamento, limpeza diária e cumprimento dos prazos.' },
  ],
  footer: {
    copyright: '© 2025 Beto Base Lda. Todos os direitos reservados.',
    tagline: 'Construído com rigor e dedicação em Portugal',
  },
};
