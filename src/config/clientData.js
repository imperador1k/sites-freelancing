/**
 * Centralized Client Configuration — Faustino Remodelações
 * Location: Setúbal, Portugal (Av. Bento de Jesus Caraça n 75 r/c E, 2910-430 Setúbal)
 * Phone / WhatsApp: +351 939 465 327
 * Specialization: Painting, Drywall (Pladur), Waterproofing, Roof Cleaning, Wood Staining & General Remodeling
 * 5.0 Rating on Google Reviews
 */
export const clientData = {
  colors: {
    primary: '#0284C7',
    primaryDark: '#0369A1',
    dark: '#0F172A',
    darkLighter: '#1E293B',
  },
  contact: {
    phone: '+351 939 465 327',
    phoneDisplay: '+351 939 465 327',
    email: 'contacto@faustinoremodelacoes.pt',
    address: 'Av. Bento de Jesus Caraça n 75 r/c E, 2910-430 Setúbal',
    whatsappNumber: '351939465327',
    whatsappMessage: 'Olá Faustino Remodelações! Vi o vosso site e gostaria de pedir um orçamento gratuito.',
    workingHours: [
      { days: 'Segunda – Sexta', hours: '08:00 – 20:00' },
      { days: 'Sábado', hours: '08:00 – 18:00' },
      { days: 'Domingo', hours: 'Encerrado' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PORTUGUESE (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'Faustino',
      legalName: 'Faustino Remodelações',
      titleHighlight: 'REMODELAÇÕES',
      tagline: 'Pintura, Pladur & Impermeabilizações · Setúbal',
      slogan: 'Pintura profissional, impermeabilizações e remodelações com acabamentos impecáveis.',
      logo: '/favicon.png',
      navCta: 'Pedir Orçamento',
      mobileNavCta: 'Pedir Orçamento Gratuito',
      aiGreeting: 'Olá! 👋 Bem-vindo à Faustino Remodelações. Em que tipo de serviço podemos ajudar hoje?',
      whatsappOptions: [
        { label: '🎨 Pintura de Interiores ou Exteriores', msg: 'Olá! Gostaria de pedir um orçamento para pintura da minha casa.' },
        { label: '🧱 Barramentos & Tetos em Pladur', msg: 'Olá! Preciso de barramentos e aplicação de pladur. Podem dar-me orçamento?' },
        { label: '🏠 Impermeabilização de Telhados', msg: 'Olá! Gostaria de saber valores para lavagem e impermeabilização de telhado.' },
      ],
    },
    contact: {
      phone: '+351 939 465 327',
      phoneDisplay: '+351 939 465 327',
      email: 'contacto@faustinoremodelacoes.pt',
      address: 'Av. Bento de Jesus Caraça n 75 r/c E, 2910-430 Setúbal',
      whatsappNumber: '351939465327',
      whatsappMessage: 'Olá Faustino Remodelações! Vi o vosso site e gostaria de pedir um orçamento gratuito.',
      workingHours: [
        { days: 'Segunda – Sexta', hours: '08:00 – 20:00' },
        { days: 'Sábado', hours: '08:00 – 18:00' },
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
      badge: 'Setúbal · Palmela · Azeitão · Sesimbra · Margem Sul',
      title: 'FAUSTINO',
      titleHighlight: 'REMODELAÇÕES',
      slogan: 'Pintura de excelência, pladur e impermeabilizações com rigor técnico em Setúbal',
      description: 'Especialistas em pintura de interiores e exteriores, barramentos de tetos e paredes, montagem de pladur, lacagem de portas e impermeabilização de telhados. Mais de 10 anos de experiência com avaliação máxima de 5.0 estrelas no Google.',
      ctaPrimary: 'Pedir Orçamento Gratuito',
      ctaSecondary: 'Ver Obras Recentes',
      bgImage: '/faustino-obra-3.png',
      microBullets: ['Orçamento Gratuito em 24h', '5.0 ★ no Google (5 Críticas)', 'Setúbal & Margem Sul'],
      trustCard: {
        title: 'Faustino Remodelações',
        desc: '5.0 ★ Avaliação Máxima no Google',
      },
    },
    about: {
      badge: 'Sobre a Empresa',
      title: 'Rigor, Detalhe e',
      titleHighlight: 'Acabamentos Perfeitos',
      description1: 'Na Faustino Remodelações valorizamos o seu imóvel através de intervenções cuidadas e materiais de qualidade certificada. Com sede em Setúbal, atuamos em toda a região com um compromisso inabalável: cumprir rigorosamente os prazos e entregar um acabamento irrepreensível.',
      description2: 'Trabalhamos com produtos profissionais das marcas líderes (como tintas CIN e Robbialac) e asseguramos a máxima proteção de móveis e pavimentos durante toda a obra. Entregamos os espaços sempre limpos e prontos a habitar.',
      benefits: ['Cumprimento Rigoroso de Prazos', 'Orçamento Gratuito e Transparente', 'Limpeza Diária e Proteção Total do Imóvel'],
      card: {
        title: 'Porquê a Faustino Remodelações?',
        desc: 'Classificação 5.0 estrelas no Google com clientes 100% satisfeitos em Setúbal e Margem Sul.',
        stat1: { value: '5.0 ★', label: 'Avaliação Google' },
        stat2: { value: '20:00', label: 'Aberto até às 20h' },
      },
    },
    stats: [
      { value: 10, suffix: '+', label: 'Anos de Experiência', icon: 'award' },
      { value: 350, suffix: '+', label: 'Obras Realizadas', icon: 'check' },
      { value: 100, suffix: '%', label: 'Clientes Satisfeitos', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Resposta a Pedidos', icon: 'truck' },
    ],
    services: [
      { icon: '🎨', title: 'Pintura de Interiores & Exteriores', desc: 'Pintura de moradias, fachadas e interiores com tintas de elevada resistência e recortes perfeitos.' },
      { icon: '🧱', title: 'Barramentos & Divisórias de Pladur', desc: 'Instalação de gesso cartonado, tetos falsos, sancas de luz e barramento de paredes sem irregularidades.' },
      { icon: '🏠', title: 'Lavagem & Impermeabilização de Telhados', desc: 'Lavagem com hidrolavadora de alta pressão, remoção de fungos e aplicação de hidrófugo impermeabilizante.' },
      { icon: '🚪', title: 'Lacagem de Portas & Pintura de Armários', desc: 'Renovação e lacagem de portas interiores, aros, roupeiros embutidos e armários de cozinha.' },
      { icon: '🪵', title: 'Coloração & Tratamento de Madeiras', desc: 'Envernizamento, coloração e proteção preventiva de madeiras interiores e exteriores contra humidade e sol.' },
      { icon: '💧', title: 'Reparação de Infiltrações & Danos de Água', desc: 'Resolução definitiva de humidades e bolor, com isolamento, barramento e pintura impermeável.' },
    ],
    gallery: [
      { title: 'Pintura Exterior de Moradia Contemporânea', tag: 'Pintura Exterior', image: '/faustino-obra-3.png' },
      { title: 'Reabilitação de Fachada & Pintura de Varandas', tag: 'Fachadas', image: '/faustino-obra-2.png' },
      { title: 'Pintura de Interiores & Acabamentos de Quarto', tag: 'Interiores', image: '/faustino-obra-4.png' },
      { title: 'Pintura Exterior com Caixilharia & Estores', tag: 'Remodelação', image: '/faustino-obra-1.png' },
    ],
    process: [
      { step: '01', title: 'Contacto & Pedido', desc: 'Ligue-nos para o 939 465 327 ou envie mensagem no WhatsApp a descrever o que pretende pintar ou remodelar.' },
      { step: '02', title: 'Visita Técnica Gratuita', desc: 'Deslocamo-nos ao local em Setúbal ou arredores para avaliar superfícies, metros quadrados e materiais.' },
      { step: '03', title: 'Orçamento sem Compromisso', desc: 'Apresentamos uma proposta clara e transparente, com preços justos e prazos de conclusão garantidos.' },
      { step: '04', title: 'Execução & Limpeza', desc: 'Protegemos cuidadosamente os seus bens, executamos a obra com rigor e entregamos tudo limpo e impecável.' },
    ],
    footer: {
      copyright: '© 2026 Faustino Remodelações. Todos os direitos reservados.',
      tagline: 'Pintura profissional, pladur e impermeabilizações com padrão superior em Setúbal.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'Faustino',
      legalName: 'Faustino Remodelações',
      titleHighlight: 'RENOVATIONS',
      tagline: 'Painting, Drywall & Waterproofing · Setúbal',
      slogan: 'Professional painting, waterproofing, and renovations with flawless craftsmanship.',
      logo: '/favicon.png',
      navCta: 'Request Quote',
      mobileNavCta: 'Request Free Quote',
      aiGreeting: 'Hello! 👋 Welcome to Faustino Remodeling. How can we help your home improvement project today?',
      whatsappOptions: [
        { label: '🎨 Interior or Exterior Painting', msg: 'Hello! I would like to request a free quote for painting my property.' },
        { label: '🧱 Drywall & Plastering', msg: 'Hello! I need drywall installation and plaster skim coating. Can you provide a quote?' },
        { label: '🏠 Roof Washing & Waterproofing', msg: 'Hello! I would like an estimate for roof power washing and waterproofing.' },
      ],
    },
    contact: {
      phone: '+351 939 465 327',
      phoneDisplay: '+351 939 465 327',
      email: 'contacto@faustinoremodelacoes.pt',
      address: 'Av. Bento de Jesus Caraça n 75 r/c E, 2910-430 Setúbal',
      whatsappNumber: '351939465327',
      whatsappMessage: 'Hello Faustino Remodelações! I saw your website and would like to request a free quote.',
      workingHours: [
        { days: 'Monday – Friday', hours: '08:00 – 20:00' },
        { days: 'Saturday', hours: '08:00 – 18:00' },
        { days: 'Sunday', hours: 'Closed' },
      ],
    },
    navLinks: [
      { label: 'Home', href: '#acasa' },
      { label: 'About Us', href: '#despre' },
      { label: 'Services', href: '#servicos' },
      { label: 'Recent Works', href: '#obras' },
      { label: 'Process', href: '#processo' },
    ],
    hero: {
      badge: 'Setúbal · Palmela · Azeitão · Sesimbra · South Bay',
      title: 'FAUSTINO',
      titleHighlight: 'RENOVATIONS',
      slogan: 'Expert painting, drywall, and roof waterproofing with superior standards in Setúbal',
      description: 'Specialists in interior and exterior painting, wall skimming, drywall partitioning, door lacquering, and roof waterproofing. Over 10 years of craft experience with a 5.0-star rating on Google.',
      ctaPrimary: 'Request a Free Quote',
      ctaSecondary: 'View Recent Works',
      bgImage: '/faustino-obra-3.png',
      microBullets: ['Free Estimate in 24h', '5.0 ★ on Google Reviews', 'Setúbal & Surrounding Region'],
      trustCard: {
        title: 'Faustino Remodeling',
        desc: '5.0 ★ Top Rated on Google',
      },
    },
    about: {
      badge: 'About Our Company',
      title: 'Precision, Detail and',
      titleHighlight: 'Flawless Finishes',
      description1: 'At Faustino Remodelações, we enhance residential and commercial properties across Setúbal and surrounding areas. From exterior villa painting to fine interior skim coating and lacquered joinery, we exclusively use premium certified materials and proven techniques.',
      description2: 'We prioritize customer communication, clean execution, and complete furniture protection. Whether remediating water damage, installing suspended drywall ceilings, or repainting an entire home, your project is handled with master diligence.',
      benefits: ['Strict Schedule Adherence', 'Free & Transparent Estimates', 'Daily Cleanliness & Full Furniture Masking'],
      card: {
        title: 'Why Choose Faustino?',
        desc: 'Rated 5.0 stars on Google with satisfied property owners across the Setúbal peninsula.',
        stat1: { value: '5.0 ★', label: 'Google Rating' },
        stat2: { value: '20:00', label: 'Open Until 8:00 PM' },
      },
    },
    stats: [
      { value: 10, suffix: '+', label: 'Years of Experience', icon: 'award' },
      { value: 350, suffix: '+', label: 'Completed Projects', icon: 'check' },
      { value: 100, suffix: '%', label: 'Customer Satisfaction', icon: 'shield' },
      { value: 24, suffix: 'h', label: 'Prompt Response', icon: 'truck' },
    ],
    services: [
      { icon: '🎨', title: 'Interior & Exterior Painting', desc: 'Villas, facades, and indoor spaces painted with weather-resistant premium coatings and razor-sharp cuts.' },
      { icon: '🧱', title: 'Plaster Skim & Drywall Partitioning', desc: 'Plasterboard ceilings, modern recessed light pelmets, acoustic insulation, and smooth level 5 plaster finishes.' },
      { icon: '🏠', title: 'Roof Washing & Waterproofing', desc: 'High-pressure surface cleaning, anti-moss treatment, and hydrophobic sealing membrane application.' },
      { icon: '🚪', title: 'Door Lacquering & Cabinet Painting', desc: 'Refinishing and lacquering of interior doors, frames, wardrobes, and custom kitchen cabinetry.' },
      { icon: '🪵', title: 'Wood Staining & Treatment', desc: 'Protective varnishing, staining, and moisture sealing for exterior pergolas, decks, and structural timber.' },
      { icon: '💧', title: 'Water Damage & Leak Repairs', desc: 'Mold and dampness remediation, structural sealing, and waterproof replastering with anti-fungal paint.' },
    ],
    gallery: [
      { title: 'Contemporary Villa Exterior Painting', tag: 'Exterior Painting', image: '/faustino-obra-3.png' },
      { title: 'Townhouse Facade & Balcony Restoration', tag: 'Facades', image: '/faustino-obra-2.png' },
      { title: 'Fine Interior Bedroom Wall Painting', tag: 'Interiors', image: '/faustino-obra-4.png' },
      { title: 'Exterior Facade & Roller Shutter Finishes', tag: 'Renovations', image: '/faustino-obra-1.png' },
    ],
    process: [
      { step: '01', title: 'Initial Contact', desc: 'Call us at +351 939 465 327 or message on WhatsApp with your project details and specifications.' },
      { step: '02', title: 'Free Technical Visit', desc: 'We visit your property in Setúbal or nearby areas to evaluate dimensions, substrates, and required coatings.' },
      { step: '03', title: 'Transparent Proposal', desc: 'Detailed, fixed estimate outlining timelines, material specifications, and fair pricing without surprises.' },
      { step: '04', title: 'Execution & Clean Up', desc: 'We shield floors and furniture, carry out clean professional work, and leave the property ready to enjoy.' },
    ],
    footer: {
      copyright: '© 2026 Faustino Remodelações. All rights reserved.',
      tagline: 'Professional painting, drywall, and roof waterproofing in Setúbal and South Bay.',
    },
  },
};
