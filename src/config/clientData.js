/**
 * Centralized Client Configuration
 * King Construções Lda. — Construção Civil, Obras & Remodelações Gerais
 */
export const clientData = {
  company: {
    name: 'KING',
    titleHighlight: 'CONSTRUÇÕES',
    legalName: 'King Construções Lda.',
    tagline: 'Construção Civil & Remodelações Gerais',
    slogan: 'Construção de moradias de raiz, reabilitação total e remodelações de alto padrão',
    logo: '/image.png',
  },
  colors: {
    primary: '#F58220',        // Laranja oficial da identidade King Construções
    primaryDark: '#D96509',    // Laranja escuro sóbrio
    dark: '#14181F',           // Cinza ardósia escuro profundo
    darkLighter: '#1E2530',    // Ardósia intermediário
  },
  contact: {
    phone: '+351 913 450 515',
    phoneDisplay: '+351 913 450 515',
    email: 'contacto@kingconstrucoes.pt',
    address: 'Delegações em Lisboa & Algarve · Atuação em Todo o Território Nacional',
    whatsappNumber: '351913450515',
    whatsappMessage: 'Olá King Construções Lda., vi o vosso site e gostaria de pedir um orçamento gratuito.',
    workingHours: [
      { days: 'Segunda – Sexta', hours: '08:00 – 19:00' },
      { days: 'Sábado', hours: '08:30 – 13:30' },
      { days: 'Domingo', hours: 'Urgências por WhatsApp' },
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
    badge: 'Lisboa · Algarve · Todo o Território Nacional',
    title: 'KING',
    titleHighlight: 'CONSTRUÇÕES',
    slogan: 'Moradias de raiz, reabilitação total de edifícios e remodelações de alto padrão',
    description: 'Com coordenação técnica por Nicolas Martins e mais de 800 obras concluídas, garantimos gestão integral, rigor estrutural e cumprimento estrito de prazos.',
    ctaPrimary: 'Pedir Orçamento Gratuito',
    ctaSecondary: 'Ver Obras Recentes',
    bgImage: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QyoGEn-sh063VmCYzfugyYmKgTeyif5FeKwA8pYOEIecBWym0tYDZ2F0VKEfHkmnnJrfEKQx8405SR9hUl_GloipscXb3Z85BpKnzMfTgaVd0REoKSPGza8QuPueYLiroHpLeXT-jij3qP=w1200-h800-no',
  },
  about: {
    badge: 'Sobre a King Construções',
    title: 'Liderança e Solidez com',
    titleHighlight: '+800 Obras Concluídas',
    description1: 'A King Construções Lda. é uma empresa de referência nacional em construção civil e remodelações gerais, com presença sólida em Lisboa e no Algarve. A nossa direção técnica assegura planeamento rigoroso e engenharia de topo.',
    description2: 'Sob a coordenação técnica de Nicolas Martins, gerimos projetos residenciais e turísticos chave-na-mão, aliando cumprimento escrupuloso de prazos a acabamentos impecáveis.',
    benefits: ['Gestão Integral de Projetos', 'Orçamento Gratuito & Transparente', 'Coordenação Técnica Especializada'],
    card: {
      title: 'Porquê a King Construções?',
      desc: 'Histórico comprovado em construção de moradias, hotelaria e reabilitação de património.',
      stat1: { value: '+800', label: 'Obras Realizadas' },
      stat2: { value: '24h', label: 'Resposta Técnica' },
    },
  },
  stats: [
    { value: 800, suffix: '+', label: 'Obras Realizadas', icon: 'check' },
    { value: 20, suffix: '+', label: 'Anos de Liderança Técnica', icon: 'award' },
    { value: 100, suffix: '%', label: 'Rigor & Garantia', icon: 'shield' },
    { value: 24, suffix: 'h', label: 'Elaboração de Orçamentos', icon: 'truck' },
  ],
  services: [
    { icon: '🏡', title: 'Construção de Moradias de Raiz', desc: 'Edificação integral de habitações unifamiliares modernas com certificação energética de excelência.' },
    { icon: '🏛️', title: 'Reabilitação Total de Edifícios', desc: 'Restauro estrutural, reforço de fundações e renovação completa de fachadas históricas e modernas.' },
    { icon: '🔨', title: 'Remodelações Gerais de Interiores', desc: 'Transformação integral chave-na-mão de apartamentos, cozinhas, casas de banho e lojas comerciais.' },
    { icon: '🎨', title: 'Pinturas & Revestimentos Técnicos', desc: 'Pinturas de alta durabilidade, aplicação de capoto (ETICS), microcimento e acabamentos de luxo.' },
    { icon: '🧱', title: 'Betão Armado & Estruturas', desc: 'Execução de lajes, pilares, muros de contenção e alvenarias segundo as normas europeias.' },
    { icon: '📐', title: 'Gestão de Projetos Turísticos', desc: 'Planeamento, licenciamento e acompanhamento integral para resorts, alojamentos turísticos e investidores.' },
  ],
  gallery: [
    {
      title: 'Construção e Alvenaria Estrutural',
      tag: 'Moradia de Raiz',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QyoGEn-sh063VmCYzfugyYmKgTeyif5FeKwA8pYOEIecBWym0tYDZ2F0VKEfHkmnnJrfEKQx8405SR9hUl_GloipscXb3Z85BpKnzMfTgaVd0REoKSPGza8QuPueYLiroHpLeXT-jij3qP=w1200-h800-no',
    },
    {
      title: 'Estruturas e Reabilitação em Altura',
      tag: 'Reabilitação de Edifício',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SWr-cWKmEum5zs3jyvEpZM78El8jPpbfofoqZ0b8-x-BRj5s-dcUBTWS-WZ2F6tXhvg_t6JpI22oqmkJzRYMm-oubJ4lSntr_2LycpvfItiuynT8wy4_WkPdMaUC7QZU1kqaCI-XrtmVR9=w1200-h800-no',
    },
    {
      title: 'Execução de Fachadas e Isolamento',
      tag: 'Acabamentos Exteriores',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sp86jkDvUFkj0fkmKmTBdF1CxDVtkha8KtVn3fZl0f6K4SOXRuM2c7EEMQl-9MfGoy-eOwmQvQa54-yrEXV7LUbj5-qbd23uqYz-Al21l5Tv-8gBjRjgT7qhTRfPOP2zev4Hew0i3Gwtbw=w1200-h800-no',
    },
    {
      title: 'Obras Residenciais e Reformas Gerais',
      tag: 'Remodelação Total',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RalE5U8M4YyG8_YEFf3PdjqtOf4mqm5AW7s4-4ub-HFi6Z1Wlsz0NkvNFXal7X2Or5xrhWoXUaCPHBgFuDARh3iKcKzrnI5V-vVHFCsQB4akGUJqXMyHQf1hhdcmDNEHZtt8-JPm9nzrP4=s1200-no',
    },
  ],
  process: [
    { step: '01', title: 'Contacto & Requisitos', desc: 'Fale connosco pelo WhatsApp ou telefone e apresente as características do seu projeto.' },
    { step: '02', title: 'Visita Técnica no Local', desc: 'Avaliamos o terreno ou imóvel em Lisboa, Algarve ou qualquer ponto do país sem custos.' },
    { step: '03', title: 'Proposta & Orçamento Detalhado', desc: 'Apresentamos um caderno de encargos transparente com mapa de quantidades e prazos.' },
    { step: '04', title: 'Execução & Entrega Chave-na-Mão', desc: 'Iniciamos a obra com rigor técnico, coordenação especializada e acompanhamento contínuo.' },
  ],
  footer: {
    copyright: '© 2026 King Construções Lda. Todos os direitos reservados.',
    tagline: 'Construção Civil e Remodelações Gerais em Todo o Território Nacional',
  },
};
