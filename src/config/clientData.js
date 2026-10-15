/**
 * Centralized Client Configuration — Arthur Mudanças & Transportes
 * Single source of truth for business information, localized texts,
 * contact details, moving & freight services, fleet gallery, and workflow.
 */
export const clientData = {
  colors: {
    primary: '#F59E0B',
    primaryDark: '#D97706',
    dark: '#0B132B',
    darkLighter: '#1C2541',
  },
  contact: {
    phone: '+351 912 345 678',
    phoneDisplay: '+351 912 345 678',
    email: 'contacto@arthurtransportes.pt',
    address: 'Póvoa de Santa Iria e Forte da Casa, Lisboa · Atuação em Todo Portugal',
    whatsappNumber: '351912345678',
    whatsappMessage: 'Olá Arthur! Vi o vosso site e gostaria de pedir um orçamento para serviço de mudanças/transporte.',
    workingHours: [
      { days: 'Segunda – Sábado', hours: '08:00 – 20:00' },
      { days: 'Domingos & Feriados', hours: 'Sob Agendamento Prévio' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PORTUGUESE (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'ARTHUR',
      legalName: 'Arthur Mudanças & Transportes',
      titleHighlight: 'TRANSPORTES',
      tagline: 'Mudanças & Cargas · Todo Portugal',
      slogan: 'Serviço pontual de mudanças e transportes com opção de valor por hora ou preço fixo negociado à medida.',
      logo: '/arthur_logo.png',
    },
    contact: {
      phone: '+351 912 345 678',
      phoneDisplay: '+351 912 345 678',
      email: 'contacto@arthurtransportes.pt',
      address: 'Póvoa de Santa Iria e Forte da Casa, Lisboa · Todo Portugal',
      whatsappNumber: '351912345678',
      whatsappMessage: 'Olá Arthur! Vi o vosso site e gostaria de pedir um orçamento para serviço de mudanças/transporte.',
      workingHours: [
        { days: 'Segunda – Sábado', hours: '08:00 – 20:00' },
        { days: 'Domingos & Feriados', hours: 'Sob Agendamento Prévio' },
      ],
    },
    navLinks: [
      { label: 'Início', href: '#acasa' },
      { label: 'Sobre Nós', href: '#despre' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Frota & Galeria', href: '#obras' },
      { label: 'Como Funciona', href: '#processo' },
    ],
    hero: {
      badge: 'Póvoa de Santa Iria · Lisboa · Todo o Território Nacional',
      title: 'ARTHUR',
      titleHighlight: 'MUDANÇAS & TRANSPORTES',
      slogan: 'Serviço rápido e seguro de mudanças e transporte em toda a Grande Lisboa e Portugal',
      description: 'Trabalhamos por hora ou por preço fixo previamente negociado. Acomodação profissional com mantas de proteção e cintas de amarração para garantir a integridade dos seus bens.',
      ctaPrimary: 'Pedir Orçamento Gratuito',
      ctaSecondary: 'Ver Frota & Serviços',
      bgImage: '/arthur_van_1.jpg',
      trustCard: {
        title: 'Segurança & Flexibilidade',
        desc: 'Viatura espaçosa equipada com mantas, películas e cintas para que os seus bens cheguem sempre intactos.',
        item1: 'Preço Fixo ou Tarifa Horária',
        item2: 'Atuação em Todo o País',
      },
    },
    about: {
      badge: 'Sobre a Empresa',
      title: 'Transportamos com Rigor e',
      titleHighlight: 'Preço Transparente',
      description1: 'Sediados na Póvoa de Santa Iria e Forte da Casa, prestamos serviços de mudanças particulares, empresariais e transporte de mercadorias para qualquer destino em Portugal.',
      description2: 'Acreditamos numa relação direta e justa: trabalhamos por hora ou fechamos um valor fixo negociado de acordo com a dimensão do seu pedido, sem taxas ocultas.',
      benefits: [
        'Trabalhamos por Hora ou Preço Fixo',
        'Preço Negociado para Cada Cliente',
        'Mantas e Cintas de Proteção',
        'Cobertura em Todo o País',
      ],
      card: {
        title: 'Porquê a Arthur Transportes?',
        desc: 'Pontualidade rigorosa, viatura comercial limpa e devidamente equipada, e cuidado máximo com cada objeto transportado.',
        stat1: { value: '100%', label: 'Cuidado com os Bens' },
        stat2: { value: '24h', label: 'Resposta WhatsApp' },
      },
    },
    stats: [
      { value: 500, suffix: '+', label: 'Mudanças Realizadas', icon: 'truck' },
      { value: 100, suffix: '%', label: 'Cuidado & Proteção', icon: 'shield' },
      { value: 18, suffix: ' Distritos', label: 'Todo o Portugal', icon: 'check' },
      { value: 24, suffix: 'h', label: 'Resposta Imediata', icon: 'clock' },
    ],
    services: [
      { icon: '📦', title: 'Mudanças Particulares', desc: 'Mudanças residenciais completas de apartamentos e moradias com transporte seguro de mobiliário e caixas.' },
      { icon: '🏢', title: 'Mudanças de Empresas', desc: 'Relocação ágil de escritórios, lojas e armazéns com pontualidade para não interromper a sua atividade.' },
      { icon: '🚚', title: 'Transporte de Mercadorias', desc: 'Recolha e entrega de compras volumosas (IKEA, Conforama, Leroy Merlin), eletrodomésticos e sofás.' },
      { icon: '⏱️', title: 'Por Hora ou Preço Fixo', desc: 'Flexibilidade total: opte por pagar apenas o tempo utilizado ou feche um valor fixo negociado à medida.' },
      { icon: '🛡️', title: 'Proteção & Acondicionamento', desc: 'Utilização de mantas acolchoadas, filme aderente e cintas de fixação para proteger cada peça.' },
      { icon: '🇵🇹', title: 'Transportes Todo Portugal', desc: 'Viagens diretas entre Lisboa, Porto, Coimbra, Alentejo, Algarve e qualquer ponto de Portugal continental.' },
    ],
    gallerySection: {
      badge: 'Frota & Equipamento',
      titlePre: 'Conheça a Nossa',
      titleHighlight: 'Frota & Preparação',
      subtitle: 'Viatura comercial ampla e limpa, com todo o equipamento de amarração e proteção para uma mudança segura.',
      quotePrompt: 'Quero um transporte semelhante',
    },
    gallery: [
      { title: 'Carrinha Master Pronta para Carga', tag: 'Viatura Própria', image: '/arthur_van_1.jpg' },
      { title: 'Acondicionamento Seguro com Mantas e Cintas', tag: 'Carga Protegida', image: '/arthur_moving_cargo.jpg' },
      { title: 'Embalamento Cuidadoso de Mobiliário', tag: 'Proteção Especial', image: '/arthur_packing_protection.jpg' },
      { title: 'Prontidão na Póvoa de Santa Iria e Lisboa', tag: 'Renault Master', image: '/arthur_van_2.jpg' },
    ],
    processSection: {
      badge: 'Como Trabalhamos',
      titlePre: 'Como Agendamos o Seu',
      titleHighlight: 'Transporte em 4 Passos',
      subtitle: 'Um processo rápido, claro e sem complicações para que os seus pertences cheguem em segurança ao destino.',
    },
    process: [
      { step: '01', title: 'Contacto & Detalhes', desc: 'Envie-nos uma mensagem no WhatsApp com os locais de recolha/entrega e a lista dos itens.' },
      { step: '02', title: 'Proposta à Medida', desc: 'Definimos consigo a melhor modalidade: valor por hora ou preço fixo previamente fechado.' },
      { step: '03', title: 'Carga & Proteção', desc: 'Acondicionamento cuidadoso na carrinha com mantas e cintas para máxima estabilidade em viagem.' },
      { step: '04', title: 'Entrega no Destino', desc: 'Chegada pontual e descarregamento no local pretendido em qualquer localidade de Portugal.' },
    ],
    footer: {
      copyright: '© 2026 Arthur Mudanças & Transportes. Todos os direitos reservados.',
      tagline: 'Serviço de confiança na Póvoa de Santa Iria, Lisboa e transporte para todo o país.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'ARTHUR',
      legalName: 'Arthur Moving & Transport Services',
      titleHighlight: 'TRANSPORT',
      tagline: 'Removals & Freight · Nationwide Portugal',
      slogan: 'Punctual moving and freight transport services with flexible hourly rates or tailored fixed pricing.',
      logo: '/arthur_logo.png',
    },
    contact: {
      phone: '+351 912 345 678',
      phoneDisplay: '+351 912 345 678',
      email: 'contact@arthurtransportes.pt',
      address: 'Póvoa de Santa Iria, Lisbon & Nationwide Coverage across Portugal',
      whatsappNumber: '351912345678',
      whatsappMessage: 'Hello Arthur! I saw your website and would like to request a quote for moving/transport.',
      workingHours: [
        { days: 'Monday – Saturday', hours: '08:00 – 20:00' },
        { days: 'Sundays & Holidays', hours: 'By Advance Appointment' },
      ],
    },
    navLinks: [
      { label: 'Home', href: '#acasa' },
      { label: 'About Us', href: '#despre' },
      { label: 'Services', href: '#servicos' },
      { label: 'Fleet & Gallery', href: '#obras' },
      { label: 'How It Works', href: '#processo' },
    ],
    hero: {
      badge: 'Póvoa de Santa Iria · Lisbon · Nationwide Portugal Coverage',
      title: 'ARTHUR',
      titleHighlight: 'MOVING & TRANSPORT',
      slogan: 'Fast, reliable residential and commercial moving across Greater Lisbon and all Portugal',
      description: 'We offer flexible hourly rates or customized fixed prices. Professional vehicle loading with moving blankets, tie-down straps, and dedicated cargo care.',
      ctaPrimary: 'Request Free Quote',
      ctaSecondary: 'View Fleet & Services',
      bgImage: '/arthur_van_1.jpg',
      trustCard: {
        title: 'Safety & Flexibility',
        desc: 'Spacious commercial van equipped with moving blankets, stretch film, and heavy-duty straps.',
        item1: 'Fixed or Hourly Rate Options',
        item2: 'Nationwide Portugal Coverage',
      },
    },
    about: {
      badge: 'About the Company',
      title: 'Transporting with Care and',
      titleHighlight: 'Transparent Pricing',
      description1: 'Based in Póvoa de Santa Iria and Forte da Casa, we deliver residential relocations, office moves, and single-item freight transport across Portugal.',
      description2: 'We believe in straightforward, transparent service: choose between an hourly rate or a negotiated fixed total price with zero unexpected surprises.',
      benefits: [
        'Hourly or Fixed Rate Options',
        'Negotiated Quotes for Every Client',
        'Protective Moving Blankets & Straps',
        'Nationwide Coverage in Portugal',
      ],
      card: {
        title: 'Why Choose Arthur Transportes?',
        desc: 'Strict punctuality, clean and equipped cargo vehicle, and maximum care with every handled piece.',
        stat1: { value: '100%', label: 'Cargo Care & Safety' },
        stat2: { value: '24h', label: 'Quick WhatsApp Reply' },
      },
    },
    stats: [
      { value: 500, suffix: '+', label: 'Completed Moves', icon: 'truck' },
      { value: 100, suffix: '%', label: 'Care & Protection', icon: 'shield' },
      { value: 18, suffix: ' Districts', label: 'Nationwide Portugal', icon: 'check' },
      { value: 24, suffix: 'h', label: 'Instant Response', icon: 'clock' },
    ],
    services: [
      { icon: '📦', title: 'Residential Moves', desc: 'Full apartment and house moves with careful transport of furniture, electronics, and boxed items.' },
      { icon: '🏢', title: 'Commercial Relocations', desc: 'Fast, organized office and retail moves planned to minimize disruption to your business.' },
      { icon: '🚚', title: 'Cargo & Freight Transport', desc: 'Pickup and delivery for store purchases (IKEA, Conforama, hardware stores), heavy appliances, and sofas.' },
      { icon: '⏱️', title: 'Hourly or Fixed Rate', desc: 'Complete billing flexibility: pay strictly for the time you use or agree on a fixed all-inclusive budget.' },
      { icon: '🛡️', title: 'Packaging & Blanketing', desc: 'Professional quilted moving pads, stretch film, and heavy ratchet straps for item stabilization.' },
      { icon: '🇵🇹', title: 'Nationwide Portugal', desc: 'Direct transit between Lisbon, Porto, Coimbra, Algarve, and every region of mainland Portugal.' },
    ],
    gallerySection: {
      badge: 'Fleet & Equipment',
      titlePre: 'Our Transport',
      titleHighlight: 'Fleet & Equipment',
      subtitle: 'Spacious, clean cargo van equipped with heavy-duty tie-downs and protective blankets for complete safety.',
      quotePrompt: 'Inquire about similar transport',
    },
    gallery: [
      { title: 'Master Van Ready for High-Capacity Cargo', tag: 'Dedicated Van', image: '/arthur_van_1.jpg' },
      { title: 'Secure Tie-Down with Heavy Straps & Blankets', tag: 'Protected Cargo', image: '/arthur_moving_cargo.jpg' },
      { title: 'Careful Wrapping of Furniture and Fragiles', tag: 'Special Care', image: '/arthur_packing_protection.jpg' },
      { title: 'Ready Service in Póvoa de Santa Iria & Lisbon', tag: 'Renault Master', image: '/arthur_van_2.jpg' },
    ],
    processSection: {
      badge: 'How We Work',
      titlePre: 'How We Plan Your',
      titleHighlight: 'Move in 4 Simple Steps',
      subtitle: 'A smooth, transparent, hassle-free process so your belongings reach their destination with zero stress.',
    },
    process: [
      { step: '01', title: 'Direct Contact', desc: 'Send us a WhatsApp message with pickup/delivery locations and a brief list of items.' },
      { step: '02', title: 'Custom Quote', desc: 'We agree on the best model for you: an hourly rate or a fixed all-inclusive price.' },
      { step: '03', title: 'Loading & Securing', desc: 'Careful loading into the van with protective blankets and ratchet straps.' },
      { step: '04', title: 'Timely Delivery', desc: 'Punctual arrival and unloaded with care at your new address anywhere in Portugal.' },
    ],
    footer: {
      copyright: '© 2026 Arthur Moving & Transport Services. All rights reserved.',
      tagline: 'Reliable moving and cargo transport based in Póvoa de Santa Iria, Lisbon, serving all Portugal.',
    },
  },
};
