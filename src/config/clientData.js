/**
 * Centralized Client Configuration — M Dias Remodelações (M.Dias Renovations)
 * Sede: Castelo Branco, Beira Baixa, Portugal
 * Alvará Oficial IMPIC: 139056-PAR
 */
export const clientData = {
  colors: {
    primary: '#E28723',        // Âmbar artesanal caloroso de acabamentos e madeiras nobres
    primaryDark: '#C26E14',    // Tom âmbar escuro de alto contraste
    dark: '#111620',           // Ardósia grafite profundo de alta elegância
    darkLighter: '#1C2433',    // Tom secundário ardósia
  },
  contact: {
    phone: '+351 960 000 000',
    phoneDisplay: '+351 960 000 000',
    email: 'contacto@mdiasremodelacoes.pt',
    address: 'Castelo Branco, Beira Baixa, Portugal',
    whatsappNumber: '351960000000',
    whatsappMessage: 'Olá M Dias Remodelações, vi o vosso site e gostaria de pedir um orçamento gratuito.',
    workingHours: [
      { days: 'Segunda – Sexta', hours: '08:00 – 19:00' },
      { days: 'Sábado', hours: '08:30 – 13:30' },
      { days: 'Domingo', hours: 'Urgências por WhatsApp' },
    ],
  },
  shared: {
    logo: '/logo.png',
    phone: '+351 960 000 000',
    phoneDisplay: '+351 960 000 000',
    email: 'contacto@mdiasremodelacoes.pt',
    whatsappNumber: '351960000000',
  },

  // ═══════════════════════════════════════════════
  // PORTUGUÊS (PT-PT)
  // ═══════════════════════════════════════════════
  pt: {
    company: {
      name: 'M DIAS',
      legalName: 'M Dias Remodelações',
      titleHighlight: 'REMODELAÇÕES',
      tagline: 'Alvará IMPIC 139056-PAR · Castelo Branco',
      slogan: 'Paixão pelas remodelações, rigor técnico e modernização de habitações',
      logo: '/logo.png',
    },
    contact: {
      phone: '+351 960 000 000',
      phoneDisplay: '+351 960 000 000',
      email: 'contacto@mdiasremodelacoes.pt',
      address: 'Castelo Branco, Beira Baixa, Portugal',
      whatsappNumber: '351960000000',
      whatsappMessage: 'Olá M Dias Remodelações, vi o vosso site e gostaria de pedir um orçamento gratuito.',
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
      badge: 'Alvará Oficial IMPIC Nº 139056-PAR · Castelo Branco & Beira Baixa',
      title: 'M DIAS',
      titleHighlight: 'REMODELAÇÕES',
      slogan: 'Remodelação de interiores, cozinhas, casas de banho e modernização de habitações',
      description: 'Transformamos o seu espaço com paixão, rigor técnico e acabamentos de detalhe. Especialistas em renovação de cozinhas e WCs, substituição de banheiras por polibãs e pavimentos técnicos em Castelo Branco.',
      ctaPrimary: 'Pedir Orçamento Gratuito',
      ctaSecondary: 'Ver Especialidades',
      bgImage: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWZPypPdN414lHaGju-DjTct2wiQ5bZM8Tz4Aw9asA0W_ptK-ZpAwISvEfs8JpgwYLydriV0pUXdwM7pOhkgzBLWS7hK-GkrU0bwet0htVgJ30gfkaDVprbYMvyo8vvV8zNzlDGA=w1200-h800-no',
    },
    about: {
      badge: 'Sobre a M Dias Remodelações',
      title: 'Paixão pelo Detalhe,',
      titleHighlight: 'Rigor Técnico Certificado',
      description1: 'A M Dias Remodelações (promovida internacionalmente como M.Dias Renovations) é uma empresa sediada em Castelo Branco, detentora do Alvará Oficial IMPIC Nº 139056-PAR, que comprova perante a lei a idoneidade e competência técnica no setor das obras em Portugal.',
      description2: 'Somos movidos pela paixão em modernizar habitações. Aliamos materiais de primeira linha, cumprimento rigoroso de prazos e acompanhamento próximo em cada divisão da sua casa.',
      benefits: [
        'Alvará Oficial IMPIC Nº 139056-PAR',
        'Especialização Forte em Cozinhas & Casas de Banho',
        'Acabamentos e Detalhes de Elevado Padrão',
      ],
      card: {
        title: 'Garantia & Legalidade',
        desc: 'Atividade 100% legalizada e certificada pelo IMPIC, proporcionando máxima segurança e transparência ao cliente.',
        stat1: { value: '100%', label: 'Certificado IMPIC' },
        stat2: { value: '24h', label: 'Resposta Rápida' },
      },
    },
    stats: [
      { value: 100, suffix: '%', label: 'Alvará IMPIC Legal', icon: 'shield' },
      { value: 12, suffix: '+', label: 'Anos de Dedicação', icon: 'award' },
      { value: 400, suffix: '+', label: 'Remodelações Concluídas', icon: 'check' },
      { value: 24, suffix: 'h', label: 'Resposta a Pedidos', icon: 'truck' },
    ],
    services: [
      {
        icon: '🚿',
        title: 'Banheira por Polibã',
        desc: 'Substituição rápida e moderna de banheiras antigas por bases de duche acessíveis, seguras e com resguardos de vidro temperado.',
      },
      {
        icon: '🍳',
        title: 'Cozinhas & WCs',
        desc: 'Remodelação estética e funcional integral de cozinhas e casas de banho com soluções inteligentes de espaço e ergonomia.',
      },
      {
        icon: '🪵',
        title: 'Pavimentos Técnicos',
        desc: 'Instalação profissional de chão flutuante, pavimentos vinílicos 100% resistentes à água e laminados de alta resistência ao desgaste.',
      },
      {
        icon: '🔧',
        title: 'Pichelaria & Eletricidade',
        desc: 'Adaptação e renovação completa de redes de água, esgotos e circuitos de iluminação integrados nas remodelações.',
      },
      {
        icon: '🧱',
        title: 'Revestimentos & Azulejos',
        desc: 'Colocação técnica de azulejos, cerâmicas retificadas e mosaicos com alinhamento a laser e acabamento impecável.',
      },
      {
        icon: '🔨',
        title: 'Bricolage & Acabamentos',
        desc: 'Pequenas reparações residenciais, montagens, ajustes de carpintaria e toques finais que fazem toda a diferença.',
      },
    ],
    gallery: [
      {
        title: 'Substituição de Banheira por Polibã Moderno',
        tag: 'Casas de Banho',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7Iy9tqFBhzeQt55FLXHAwlkdorTNThreDK8ezQAaU9rQvBN7R_zR48RAASs2DPQBH5QDBhCjboUdM0NmfpP1N0z0ypDf-oklz5P_asA8CMK7BJiNP0Zby_gdRNnR_oZRoJGd4Pg=w1200-h800-no',
      },
      {
        title: 'Remodelação Completa de Cozinha Contemporânea',
        tag: 'Cozinhas',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7txu4XSb3mw9rlORrM5V9g6eLhpV7F07oiNZMz1NYCEyTWVeKSaRn1AyGGw3x7zwqKoB4XtVPbORjbJ01lThiyM87VnwNe42pVSOPNly8FjtKFMszZLpKvtUwBnSUBWNG73JbPg=w1200-h800-no',
      },
      {
        title: 'Aplicação de Pavimento Vinílico e Rodapés',
        tag: 'Pavimentos',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RvtndVnbvdQnjL7dfxX_CwM1570BIJXd8Nnd-gpvOvH50SWxEO0yyrBZOS3zRW8PlrrADb7UawILkCu9QboMTZfBXEaNX8T5Iw2Vf2myALLGb6Zk7GoW4IJYW_2-zXLqVigcmB=w1200-h800-no',
      },
      {
        title: 'Revestimento Cerâmico, Pichelaria e Iluminação',
        tag: 'Acabamentos',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWZPypPdN414lHaGju-DjTct2wiQ5bZM8Tz4Aw9asA0W_ptK-ZpAwISvEfs8JpgwYLydriV0pUXdwM7pOhkgzBLWS7hK-GkrU0bwet0htVgJ30gfkaDVprbYMvyo8vvV8zNzlDGA=w1200-h800-no',
      },
    ],
    process: [
      { step: '01', title: 'Contacto & Ideia', desc: 'Fale connosco por WhatsApp ou chamada e diga-nos o que pretende remodelar.' },
      { step: '02', title: 'Visita Técnica em Castelo Branco', desc: 'Deslocamo-nos ao local para avaliar o espaço, medições e especificações técnicas.' },
      { step: '03', title: 'Orçamento Transparente', desc: 'Apresentamos uma proposta clara com prazos de entrega rigorosamente definidos.' },
      { step: '04', title: 'Execução e Entrega Limpa', desc: 'Execução com proteção total da habitação, limpeza diária e garantia de qualidade.' },
    ],
    footer: {
      copyright: '© 2026 M Dias Remodelações. Alvará IMPIC Nº 139056-PAR. Todos os direitos reservados.',
      tagline: 'Remodelações gerais e modernização de habitações em Castelo Branco e Beira Baixa.',
    },
  },

  // ═══════════════════════════════════════════════
  // ENGLISH (EN)
  // ═══════════════════════════════════════════════
  en: {
    company: {
      name: 'M.DIAS',
      legalName: 'M Dias Remodelações (M.Dias Renovations)',
      titleHighlight: 'RENOVATIONS',
      tagline: 'IMPIC License 139056-PAR · Castelo Branco',
      slogan: 'Passionate interior renovations, technical precision, and modern living spaces',
      logo: '/logo.png',
    },
    contact: {
      phone: '+351 960 000 000',
      phoneDisplay: '+351 960 000 000',
      email: 'contact@mdiasrenovations.com',
      address: 'Castelo Branco, Beira Baixa, Portugal',
      whatsappNumber: '351960000000',
      whatsappMessage: 'Hello M.Dias Renovations, I visited your website and would like to request a free quote.',
      workingHours: [
        { days: 'Monday – Friday', hours: '08:00 – 19:00' },
        { days: 'Saturday', hours: '08:30 – 13:30' },
        { days: 'Sunday', hours: 'Urgent requests via WhatsApp' },
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
      badge: 'Official IMPIC License Nº 139056-PAR · Castelo Branco, Portugal',
      title: 'M.DIAS',
      titleHighlight: 'RENOVATIONS',
      slogan: 'Interior renovations, modern kitchens, bathroom upgrades, and home transformations',
      description: 'Transforming residential spaces with craftsmanship, technical rigor, and meticulous attention to detail. Specialists in kitchen & bathroom remodels, tub-to-shower conversions, and technical flooring in Central Portugal.',
      ctaPrimary: 'Request a Free Quote',
      ctaSecondary: 'Explore Services',
      bgImage: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWZPypPdN414lHaGju-DjTct2wiQ5bZM8Tz4Aw9asA0W_ptK-ZpAwISvEfs8JpgwYLydriV0pUXdwM7pOhkgzBLWS7hK-GkrU0bwet0htVgJ30gfkaDVprbYMvyo8vvV8zNzlDGA=w1200-h800-no',
    },
    about: {
      badge: 'About M.Dias Renovations',
      title: 'Passion for Detail,',
      titleHighlight: 'Certified Craftsmanship',
      description1: 'M Dias Remodelações (internationally recognized as M.Dias Renovations) is a licensed contractor headquartered in Castelo Branco, holding official IMPIC License Nº 139056-PAR issued by the Institute of Public Markets, Real Estate and Construction.',
      description2: 'Driven by a genuine passion for modernizing residential properties, we combine high-durability materials, strict schedule adherence, and dedicated technical oversight across every room.',
      benefits: [
        'Official IMPIC License Nº 139056-PAR',
        'Specialized in Kitchen & Bathroom Remodeling',
        'Meticulous Fine-Finish Craftsmanship',
      ],
      card: {
        title: 'Certified & Legally Compliant',
        desc: '100% compliant and certified under Portuguese IMPIC regulations for absolute client trust and peace of mind.',
        stat1: { value: '100%', label: 'IMPIC Certified' },
        stat2: { value: '24h', label: 'Response Time' },
      },
    },
    stats: [
      { value: 100, suffix: '%', label: 'IMPIC Licensed', icon: 'shield' },
      { value: 12, suffix: '+', label: 'Years Experience', icon: 'award' },
      { value: 400, suffix: '+', label: 'Renovations Delivered', icon: 'check' },
      { value: 24, suffix: 'h', label: 'Quick Response', icon: 'truck' },
    ],
    services: [
      {
        icon: '🚿',
        title: 'Tub-to-Shower Conversions',
        desc: 'Fast, modern replacement of old bathtubs with accessible, sleek walk-in shower trays and tempered glass screens.',
      },
      {
        icon: '🍳',
        title: 'Kitchens & Bathrooms',
        desc: 'Comprehensive structural and aesthetic renovation of kitchens and bathrooms with ergonomic storage solutions.',
      },
      {
        icon: '🪵',
        title: 'Technical Flooring',
        desc: 'Expert installation of moisture-proof vinyl flooring, premium laminate, and floating floor systems.',
      },
      {
        icon: '🔧',
        title: 'Plumbing & Electrical',
        desc: 'Complete adaptation and replacement of domestic fresh water, wastewater, and modern electrical circuits.',
      },
      {
        icon: '🧱',
        title: 'Tile & Wall Finishes',
        desc: 'Laser-guided installation of ceramic tiles, rectified porcelain, and decorative splashbacks with flawless leveling.',
      },
      {
        icon: '🔨',
        title: 'Handyman & Detailed Finishes',
        desc: 'Custom interior repairs, door fittings, carpentry touch-ups, and the final details that elevate your home.',
      },
    ],
    gallery: [
      {
        title: 'Modern Walk-in Shower Conversion',
        tag: 'Bathrooms',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7Iy9tqFBhzeQt55FLXHAwlkdorTNThreDK8ezQAaU9rQvBN7R_zR48RAASs2DPQBH5QDBhCjboUdM0NmfpP1N0z0ypDf-oklz5P_asA8CMK7BJiNP0Zby_gdRNnR_oZRoJGd4Pg=w1200-h800-no',
      },
      {
        title: 'Full Contemporary Kitchen Remodel',
        tag: 'Kitchens',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7txu4XSb3mw9rlORrM5V9g6eLhpV7F07oiNZMz1NYCEyTWVeKSaRn1AyGGw3x7zwqKoB4XtVPbORjbJ01lThiyM87VnwNe42pVSOPNly8FjtKFMszZLpKvtUwBnSUBWNG73JbPg=w1200-h800-no',
      },
      {
        title: 'Waterproof Vinyl Flooring Installation',
        tag: 'Flooring',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RvtndVnbvdQnjL7dfxX_CwM1570BIJXd8Nnd-gpvOvH50SWxEO0yyrBZOS3zRW8PlrrADb7UawILkCu9QboMTZfBXEaNX8T5Iw2Vf2myALLGb6Zk7GoW4IJYW_2-zXLqVigcmB=w1200-h800-no',
      },
      {
        title: 'Ceramic Tile & Lighting Integration',
        tag: 'Finishes',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWZPypPdN414lHaGju-DjTct2wiQ5bZM8Tz4Aw9asA0W_ptK-ZpAwISvEfs8JpgwYLydriV0pUXdwM7pOhkgzBLWS7hK-GkrU0bwet0htVgJ30gfkaDVprbYMvyo8vvV8zNzlDGA=w1200-h800-no',
      },
    ],
    process: [
      { step: '01', title: 'Contact & Vision', desc: 'Reach out via WhatsApp or phone to describe your remodeling goals.' },
      { step: '02', title: 'On-Site Technical Visit', desc: 'We visit your property in Castelo Branco to take precise dimensions and assess needs.' },
      { step: '03', title: 'Transparent Quote', desc: 'Clear proposal outlining costs, materials, and strict completion deadlines.' },
      { step: '04', title: 'Build & Clean Delivery', desc: 'Careful execution with daily floor protection, site cleanliness, and turnkey handover.' },
    ],
    footer: {
      copyright: '© 2026 M.Dias Renovations. IMPIC License Nº 139056-PAR. All rights reserved.',
      tagline: 'Interior renovations and home modernization in Castelo Branco and Central Portugal.',
    },
  },
};
