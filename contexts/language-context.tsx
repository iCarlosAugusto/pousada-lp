"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'EN' | 'PT' | 'ES'

interface Translations {
  // Header
  navigation: {
    home: string
    destinations: string
    packages: string
    about: string
    contact: string
  }
  
  // Hero Section
  hero: {
    title: string
    subtitle: string
    ctaButton: string
  }
  
  // About Guides
  aboutGuides: {
    title: string
    subtitle: string
    specialties: string
    certifications: string
    thayra: {
      bio: string
      specialties: string[]
      certifications: string[]
    }
    leandro: {
      bio: string
      specialties: string[]
      certifications: string[]
    }
  }
  
  // Photo Gallery
  gallery: {
    title: string
    subtitle: string
    categories: {
      all: string
      mountains: string
      culture: string
      wildlife: string
      adventure: string
    }
    photos: {
      [key: string]: {
        caption: string
        location: string
      }
    }
  }
  
  // Travel Packages
  packages: {
    title: string
    subtitle: string
    perPerson: string
    bookNow: string
    includedFeatures: string
    duration: string
    groupSize: string
    chapadaAdventure: {
      title: string
      subtitle: string
      description: string
      features: string[]
    }
    chileanPatagonia: {
      title: string
      subtitle: string
      description: string
      features: string[]
    }
    amazonExpedition: {
      title: string
      subtitle: string
      description: string
      features: string[]
    }
  }
  
  // FAQ
  faq: {
    title: string
    subtitle: string
    questions: {
      question: string
      answer: string
    }[]
  }
  
  // Contact
  contact: {
    title: string
    subtitle: string
    ourLocation: string
    phone: string
    email: string
    whatsappButton: string
    formTitle: string
    formSubtitle: string
    firstName: string
    lastName: string
    phoneNumber: string
    interestedDestination: string
    message: string
    sendMessage: string
    destinationPlaceholder: string
    messagePlaceholder: string
  }
  
  // Footer
  footer: {
    description: string
    quickLinks: string
    contactInfo: string
    stayUpdated: string
    newsletterDescription: string
    emailPlaceholder: string
    subscribe: string
    copyright: string
    privacyPolicy: string
    termsOfService: string
    cookiePolicy: string
  }
}

const translations: Record<Language, Translations> = {
  EN: {
    navigation: {
      home: "Home",
      destinations: "Destinations",
      packages: "Packages",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Discover Unique Travel Experiences",
      subtitle: "Join professional guides Thayra and Leandro for unforgettable adventures that create lasting memories",
      ctaButton: "Plan Your Trip Now"
    },
    aboutGuides: {
      title: "Meet Your Professional Guides",
      subtitle: "Our certified guides combine years of experience with genuine passion for creating unforgettable travel experiences",
      specialties: "Specialties",
      certifications: "Certifications",
      thayra: {
        bio: "With over 8 years of guiding experience, Thayra specializes in cultural immersion and eco-adventures. Her passion for connecting travelers with local communities creates authentic, transformative experiences.",
        specialties: ["Cultural Tours", "Eco-Adventures", "Photography Tours"],
        certifications: ["Certified Professional Guide", "Wilderness First Aid", "Cultural Heritage Specialist"]
      },
      leandro: {
        bio: "Leandro brings 10+ years of adventure guiding expertise, specializing in mountain expeditions and extreme sports. His deep knowledge of Chilean landscapes ensures safe, thrilling adventures.",
        specialties: ["Mountain Expeditions", "Extreme Sports", "Wildlife Tours"],
        certifications: ["Mountain Guide Certification", "Rescue Operations", "Adventure Sports Instructor"]
      }
    },
    gallery: {
      title: "Captured Moments",
      subtitle: "Explore stunning photos from our past adventures and get inspired for your next journey",
      categories: {
        all: "All",
        mountains: "Mountains",
        culture: "Culture",
        wildlife: "Wildlife",
        adventure: "Adventure"
      },
      photos: {
        "1": { caption: "Sunrise at Chilean Andes", location: "Chile" },
        "2": { caption: "Local Market Experience", location: "Chapada" },
        "3": { caption: "Wildlife Encounter", location: "Pantanal" },
        "4": { caption: "Rock Climbing Adventure", location: "Patagonia" },
        "5": { caption: "Cultural Ceremony", location: "Amazon" },
        "6": { caption: "Peak Expedition", location: "Torres del Paine" },
        "7": { caption: "River Rafting", location: "Bio Bio River" },
        "8": { caption: "Tropical Birds", location: "Atlantic Forest" }
      }
    },
    packages: {
      title: "Our Travel Packages",
      subtitle: "Carefully crafted adventures designed to create unforgettable memories with professional guidance every step of the way",
      perPerson: "per person",
      bookNow: "Book Now",
      includedFeatures: "Included Features:",
      duration: "duration",
      groupSize: "group size",
      chapadaAdventure: {
        title: "Chapada Adventure",
        subtitle: "Professional Guide Included",
        description: "Explore the mystical landscapes of Chapada dos Veadeiros with crystal-clear waterfalls, ancient rock formations, and rich biodiversity.",
        features: ["Waterfall Hiking", "Cave Exploration", "Local Culture Immersion", "Photography Workshop"]
      },
      chileanPatagonia: {
        title: "Chilean Patagonia",
        subtitle: "All-Inclusive Plan",
        description: "Experience the raw beauty of Chilean Patagonia with iconic granite towers, pristine glaciers, and diverse wildlife in comfort.",
        features: ["Torres del Paine Trek", "Glacier Viewing", "Wildlife Spotting", "Luxury Camping"]
      },
      amazonExpedition: {
        title: "Amazon Expedition",
        subtitle: "Eco-Adventure Package",
        description: "Immerse yourself in the Amazon rainforest, meet indigenous communities, and witness incredible biodiversity in this eco-conscious adventure.",
        features: ["River Navigation", "Indigenous Communities", "Wildlife Photography", "Sustainable Tourism"]
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our travel experiences and services",
      questions: [
        {
          question: "What's included in the packages?",
          answer: "All our packages include professional guide services, accommodation, meals as specified, transportation during the tour, entrance fees to attractions, and safety equipment. Specific inclusions vary by package - please check individual package details."
        },
        {
          question: "Are the guides certified?",
          answer: "Yes, both Thayra and Leandro are certified professional guides with extensive training in wilderness first aid, rescue operations, and specialized certifications for their respective expertise areas. They have combined 18+ years of guiding experience."
        },
        {
          question: "Can I travel with children?",
          answer: "We welcome families and can customize experiences to be age-appropriate. Some adventures have minimum age requirements for safety reasons. Please contact us to discuss the best options for your family's needs."
        },
        {
          question: "Do you offer group discounts?",
          answer: "Yes, we offer attractive group discounts for parties of 6 or more people. Corporate groups and educational institutions receive additional discounts. Contact us for a customized quote based on your group size and requirements."
        },
        {
          question: "What should I pack for the trips?",
          answer: "We provide a detailed packing list upon booking confirmation. Generally, you'll need comfortable hiking boots, weather-appropriate clothing, sun protection, and personal items. We provide all specialized equipment like safety gear and camping equipment where needed."
        },
        {
          question: "What's your cancellation policy?",
          answer: "We offer flexible cancellation policies. Cancellations made 30+ days before departure receive full refund minus processing fees. 15-29 days: 50% refund. Less than 15 days: 25% refund. We also offer trip insurance options for additional protection."
        }
      ]
    },
    contact: {
      title: "Location & Contact",
      subtitle: "Ready to start your adventure? Get in touch with us or visit our location",
      ourLocation: "Our Location",
      phone: "Phone",
      email: "Email",
      whatsappButton: "Contact via WhatsApp",
      formTitle: "Get Exclusive Offers",
      formSubtitle: "Send us a message and we'll get back to you with personalized travel recommendations",
      firstName: "First Name",
      lastName: "Last Name",
      phoneNumber: "Phone Number",
      interestedDestination: "Interested Destination",
      message: "Message",
      sendMessage: "Send Message",
      destinationPlaceholder: "e.g., Chapada, Chilean Patagonia, Amazon",
      messagePlaceholder: "Tell us about your dream adventure..."
    },
    footer: {
      description: "Creating unforgettable travel experiences with professional guides Thayra and Leandro. Your adventure starts here.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      stayUpdated: "Stay Updated",
      newsletterDescription: "Subscribe to get exclusive offers and travel tips from our expert guides.",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      copyright: "© 2024 Adventure Guides. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy"
    }
  },
  PT: {
    navigation: {
      home: "Início",
      destinations: "Destinos",
      packages: "Pacotes",
      about: "Sobre",
      contact: "Contato"
    },
    hero: {
      title: "Descubra Experiências de Viagem Únicas",
      subtitle: "Junte-se aos guias profissionais Thayra e Leandro para aventuras inesquecíveis que criam memórias duradouras",
      ctaButton: "Planeje Sua Viagem Agora"
    },
    aboutGuides: {
      title: "Conheça Seus Guias Profissionais",
      subtitle: "Nossos guias certificados combinam anos de experiência com paixão genuína por criar experiências de viagem inesquecíveis",
      specialties: "Especialidades",
      certifications: "Certificações",
      thayra: {
        bio: "Com mais de 8 anos de experiência como guia, Thayra é especializada em imersão cultural e eco-aventuras. Sua paixão por conectar viajantes com comunidades locais cria experiências autênticas e transformadoras.",
        specialties: ["Tours Culturais", "Eco-Aventuras", "Tours Fotográficos"],
        certifications: ["Guia Profissional Certificada", "Primeiros Socorros na Natureza", "Especialista em Patrimônio Cultural"]
      },
      leandro: {
        bio: "Leandro traz mais de 10 anos de experiência em guia de aventura, especializado em expedições de montanha e esportes radicais. Seu profundo conhecimento das paisagens chilenas garante aventuras seguras e emocionantes.",
        specialties: ["Expedições de Montanha", "Esportes Radicais", "Tours de Vida Selvagem"],
        certifications: ["Certificação de Guia de Montanha", "Operações de Resgate", "Instrutor de Esportes de Aventura"]
      }
    },
    gallery: {
      title: "Momentos Capturados",
      subtitle: "Explore fotos deslumbrantes de nossas aventuras passadas e inspire-se para sua próxima jornada",
      categories: {
        all: "Todas",
        mountains: "Montanhas",
        culture: "Cultura",
        wildlife: "Vida Selvagem",
        adventure: "Aventura"
      },
      photos: {
        "1": { caption: "Nascer do Sol nos Andes Chilenos", location: "Chile" },
        "2": { caption: "Experiência no Mercado Local", location: "Chapada" },
        "3": { caption: "Encontro com Vida Selvagem", location: "Pantanal" },
        "4": { caption: "Aventura de Escalada", location: "Patagônia" },
        "5": { caption: "Cerimônia Cultural", location: "Amazônia" },
        "6": { caption: "Expedição ao Pico", location: "Torres del Paine" },
        "7": { caption: "Rafting no Rio", location: "Rio Bio Bio" },
        "8": { caption: "Pássaros Tropicais", location: "Mata Atlântica" }
      }
    },
    packages: {
      title: "Nossos Pacotes de Viagem",
      subtitle: "Aventuras cuidadosamente elaboradas para criar memórias inesquecíveis com orientação profissional a cada passo do caminho",
      perPerson: "por pessoa",
      bookNow: "Reserve Agora",
      includedFeatures: "Recursos Inclusos:",
      duration: "duração",
      groupSize: "tamanho do grupo",
      chapadaAdventure: {
        title: "Aventura na Chapada",
        subtitle: "Guia Profissional Incluído",
        description: "Explore as paisagens místicas da Chapada dos Veadeiros com cachoeiras cristalinas, formações rochosas antigas e rica biodiversidade.",
        features: ["Caminhada às Cachoeiras", "Exploração de Cavernas", "Imersão Cultural Local", "Workshop de Fotografia"]
      },
      chileanPatagonia: {
        title: "Patagônia Chilena",
        subtitle: "Plano Tudo Incluído",
        description: "Experimente a beleza selvagem da Patagônia Chilena com torres de granito icônicas, geleiras pristinas e vida selvagem diversificada com conforto.",
        features: ["Trilha Torres del Paine", "Observação de Geleiras", "Avistamento de Vida Selvagem", "Camping de Luxo"]
      },
      amazonExpedition: {
        title: "Expedição à Amazônia",
        subtitle: "Pacote Eco-Aventura",
        description: "Mergulhe na floresta amazônica, conheça comunidades indígenas e testemunhe a incrível biodiversidade nesta aventura eco-consciente.",
        features: ["Navegação Fluvial", "Comunidades Indígenas", "Fotografia da Vida Selvagem", "Turismo Sustentável"]
      }
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Encontre respostas para perguntas comuns sobre nossas experiências de viagem e serviços",
      questions: [
        {
          question: "O que está incluído nos pacotes?",
          answer: "Todos os nossos pacotes incluem serviços de guia profissional, acomodação, refeições conforme especificado, transporte durante o tour, taxas de entrada para atrações e equipamentos de segurança. As inclusões específicas variam por pacote - consulte os detalhes individuais do pacote."
        },
        {
          question: "Os guias são certificados?",
          answer: "Sim, tanto Thayra quanto Leandro são guias profissionais certificados com amplo treinamento em primeiros socorros na natureza, operações de resgate e certificações especializadas para suas respectivas áreas de expertise. Eles têm mais de 18 anos de experiência combinada como guias."
        },
        {
          question: "Posso viajar com crianças?",
          answer: "Recebemos famílias e podemos personalizar experiências para serem adequadas à idade. Algumas aventuras têm requisitos mínimos de idade por razões de segurança. Entre em contato conosco para discutir as melhores opções para as necessidades de sua família."
        },
        {
          question: "Vocês oferecem descontos para grupos?",
          answer: "Sim, oferecemos descontos atrativos para grupos de 6 ou mais pessoas. Grupos corporativos e instituições educacionais recebem descontos adicionais. Entre em contato conosco para um orçamento personalizado baseado no tamanho do seu grupo e requisitos."
        },
        {
          question: "O que devo levar para as viagens?",
          answer: "Fornecemos uma lista detalhada de itens para levar após a confirmação da reserva. Geralmente, você precisará de botas de caminhada confortáveis, roupas adequadas ao clima, proteção solar e itens pessoais. Fornecemos todos os equipamentos especializados como equipamentos de segurança e camping quando necessário."
        },
        {
          question: "Qual é a política de cancelamento?",
          answer: "Oferecemos políticas de cancelamento flexíveis. Cancelamentos feitos 30+ dias antes da partida recebem reembolso total menos taxas de processamento. 15-29 dias: 50% de reembolso. Menos de 15 dias: 25% de reembolso. Também oferecemos opções de seguro viagem para proteção adicional."
        }
      ]
    },
    contact: {
      title: "Localização e Contato",
      subtitle: "Pronto para começar sua aventura? Entre em contato conosco ou visite nossa localização",
      ourLocation: "Nossa Localização",
      phone: "Telefone",
      email: "Email",
      whatsappButton: "Contato via WhatsApp",
      formTitle: "Receba Ofertas Exclusivas",
      formSubtitle: "Envie-nos uma mensagem e retornaremos com recomendações de viagem personalizadas",
      firstName: "Nome",
      lastName: "Sobrenome",
      phoneNumber: "Número de Telefone",
      interestedDestination: "Destino de Interesse",
      message: "Mensagem",
      sendMessage: "Enviar Mensagem",
      destinationPlaceholder: "ex: Chapada, Patagônia Chilena, Amazônia",
      messagePlaceholder: "Conte-nos sobre sua aventura dos sonhos..."
    },
    footer: {
      description: "Criando experiências de viagem inesquecíveis com os guias profissionais Thayra e Leandro. Sua aventura começa aqui.",
      quickLinks: "Links Rápidos",
      contactInfo: "Informações de Contato",
      stayUpdated: "Mantenha-se Atualizado",
      newsletterDescription: "Inscreva-se para receber ofertas exclusivas e dicas de viagem de nossos guias especialistas.",
      emailPlaceholder: "Seu endereço de email",
      subscribe: "Inscrever-se",
      copyright: "© 2024 Adventure Guides. Todos os direitos reservados.",
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço",
      cookiePolicy: "Política de Cookies"
    }
  },
  ES: {
    navigation: {
      home: "Inicio",
      destinations: "Destinos",
      packages: "Paquetes",
      about: "Acerca",
      contact: "Contacto"
    },
    hero: {
      title: "Descubre Experiencias de Viaje Únicas",
      subtitle: "Únete a los guías profesionales Thayra y Leandro para aventuras inolvidables que crean recuerdos duraderos",
      ctaButton: "Planifica Tu Viaje Ahora"
    },
    aboutGuides: {
      title: "Conoce a Tus Guías Profesionales",
      subtitle: "Nuestros guías certificados combinan años de experiencia con pasión genuina por crear experiencias de viaje inolvidables",
      specialties: "Especialidades",
      certifications: "Certificaciones",
      thayra: {
        bio: "Con más de 8 años de experiencia como guía, Thayra se especializa en inmersión cultural y eco-aventuras. Su pasión por conectar viajeros con comunidades locales crea experiencias auténticas y transformadoras.",
        specialties: ["Tours Culturales", "Eco-Aventuras", "Tours Fotográficos"],
        certifications: ["Guía Profesional Certificada", "Primeros Auxilios en Naturaleza", "Especialista en Patrimonio Cultural"]
      },
      leandro: {
        bio: "Leandro aporta más de 10 años de experiencia en guías de aventura, especializado en expediciones de montaña y deportes extremos. Su profundo conocimiento de los paisajes chilenos garantiza aventuras seguras y emocionantes.",
        specialties: ["Expediciones de Montaña", "Deportes Extremos", "Tours de Vida Silvestre"],
        certifications: ["Certificación de Guía de Montaña", "Operaciones de Rescate", "Instructor de Deportes de Aventura"]
      }
    },
    gallery: {
      title: "Momentos Capturados",
      subtitle: "Explora fotos impresionantes de nuestras aventuras pasadas e inspírate para tu próximo viaje",
      categories: {
        all: "Todas",
        mountains: "Montañas",
        culture: "Cultura",
        wildlife: "Vida Silvestre",
        adventure: "Aventura"
      },
      photos: {
        "1": { caption: "Amanecer en los Andes Chilenos", location: "Chile" },
        "2": { caption: "Experiencia en Mercado Local", location: "Chapada" },
        "3": { caption: "Encuentro con Vida Silvestre", location: "Pantanal" },
        "4": { caption: "Aventura de Escalada", location: "Patagonia" },
        "5": { caption: "Ceremonia Cultural", location: "Amazonas" },
        "6": { caption: "Expedición al Pico", location: "Torres del Paine" },
        "7": { caption: "Rafting en Río", location: "Río Bio Bio" },
        "8": { caption: "Aves Tropicales", location: "Bosque Atlántico" }
      }
    },
    packages: {
      title: "Nuestros Paquetes de Viaje",
      subtitle: "Aventuras cuidadosamente elaboradas diseñadas para crear recuerdos inolvidables con orientación profesional en cada paso del camino",
      perPerson: "por persona",
      bookNow: "Reservar Ahora",
      includedFeatures: "Características Incluidas:",
      duration: "duración",
      groupSize: "tamaño del grupo",
      chapadaAdventure: {
        title: "Aventura en Chapada",
        subtitle: "Guía Profesional Incluido",
        description: "Explora los paisajes místicos de Chapada dos Veadeiros con cascadas cristalinas, formaciones rocosas antiguas y rica biodiversidad.",
        features: ["Senderismo a Cascadas", "Exploración de Cuevas", "Inmersión Cultural Local", "Taller de Fotografía"]
      },
      chileanPatagonia: {
        title: "Patagonia Chilena",
        subtitle: "Plan Todo Incluido",
        description: "Experimenta la belleza salvaje de la Patagonia Chilena con torres de granito icónicas, glaciares prístinos y vida silvestre diversa con comodidad.",
        features: ["Trekking Torres del Paine", "Observación de Glaciares", "Avistamiento de Vida Silvestre", "Camping de Lujo"]
      },
      amazonExpedition: {
        title: "Expedición al Amazonas",
        subtitle: "Paquete Eco-Aventura",
        description: "Sumérgete en la selva amazónica, conoce comunidades indígenas y presencia la increíble biodiversidad en esta aventura eco-consciente.",
        features: ["Navegación Fluvial", "Comunidades Indígenas", "Fotografía de Vida Silvestre", "Turismo Sostenible"]
      }
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Encuentra respuestas a preguntas comunes sobre nuestras experiencias de viaje y servicios",
      questions: [
        {
          question: "¿Qué está incluido en los paquetes?",
          answer: "Todos nuestros paquetes incluyen servicios de guía profesional, alojamiento, comidas según se especifica, transporte durante el tour, tarifas de entrada a atracciones y equipo de seguridad. Las inclusiones específicas varían por paquete - consulta los detalles individuales del paquete."
        },
        {
          question: "¿Los guías están certificados?",
          answer: "Sí, tanto Thayra como Leandro son guías profesionales certificados con amplio entrenamiento en primeros auxilios en la naturaleza, operaciones de rescate y certificaciones especializadas para sus respectivas áreas de expertise. Tienen más de 18 años de experiencia combinada como guías."
        },
        {
          question: "¿Puedo viajar con niños?",
          answer: "Damos la bienvenida a familias y podemos personalizar experiencias para que sean apropiadas para la edad. Algunas aventuras tienen requisitos mínimos de edad por razones de seguridad. Contáctanos para discutir las mejores opciones para las necesidades de tu familia."
        },
        {
          question: "¿Ofrecen descuentos para grupos?",
          answer: "Sí, ofrecemos descuentos atractivos para grupos de 6 o más personas. Los grupos corporativos e instituciones educativas reciben descuentos adicionales. Contáctanos para una cotización personalizada basada en el tamaño de tu grupo y requisitos."
        },
        {
          question: "¿Qué debo empacar para los viajes?",
          answer: "Proporcionamos una lista detallada de empaque al confirmar la reserva. Generalmente, necesitarás botas de senderismo cómodas, ropa apropiada para el clima, protección solar y artículos personales. Proporcionamos todo el equipo especializado como equipo de seguridad y camping cuando sea necesario."
        },
        {
          question: "¿Cuál es su política de cancelación?",
          answer: "Ofrecemos políticas de cancelación flexibles. Las cancelaciones hechas 30+ días antes de la salida reciben reembolso completo menos las tarifas de procesamiento. 15-29 días: 50% de reembolso. Menos de 15 días: 25% de reembolso. También ofrecemos opciones de seguro de viaje para protección adicional."
        }
      ]
    },
    contact: {
      title: "Ubicación y Contacto",
      subtitle: "¿Listo para comenzar tu aventura? Ponte en contacto con nosotros o visita nuestra ubicación",
      ourLocation: "Nuestra Ubicación",
      phone: "Teléfono",
      email: "Email",
      whatsappButton: "Contacto vía WhatsApp",
      formTitle: "Obtén Ofertas Exclusivas",
      formSubtitle: "Envíanos un mensaje y te responderemos con recomendaciones de viaje personalizadas",
      firstName: "Nombre",
      lastName: "Apellido",
      phoneNumber: "Número de Teléfono",
      interestedDestination: "Destino de Interés",
      message: "Mensaje",
      sendMessage: "Enviar Mensaje",
      destinationPlaceholder: "ej: Chapada, Patagonia Chilena, Amazonas",
      messagePlaceholder: "Cuéntanos sobre tu aventura soñada..."
    },
    footer: {
      description: "Creando experiencias de viaje inolvidables con los guías profesionales Thayra y Leandro. Tu aventura comienza aquí.",
      quickLinks: "Enlaces Rápidos",
      contactInfo: "Información de Contacto",
      stayUpdated: "Mantente Actualizado",
      newsletterDescription: "Suscríbete para recibir ofertas exclusivas y consejos de viaje de nuestros guías expertos.",
      emailPlaceholder: "Tu dirección de email",
      subscribe: "Suscribirse",
      copyright: "© 2024 Adventure Guides. Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      cookiePolicy: "Política de Cookies"
    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN')
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['EN', 'PT', 'ES'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
    setIsHydrated(true)
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    console.log('Language changed to:', newLanguage)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language]
  }

  // Prevent hydration mismatch by not rendering until client-side is ready
  if (!isHydrated) {
    return (
      <LanguageContext.Provider value={{
        language: 'EN',
        setLanguage: handleSetLanguage,
        t: translations['EN']
      }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
