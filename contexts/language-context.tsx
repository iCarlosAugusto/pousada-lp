"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'EN' | 'PT' | 'ES'

interface Translations {
  // Header
  months: {
    january: string,
    february: string,
    march: string,
    april: string,
    may: string,
    june: string,
    july: string,
    august: string,
    september: string,
    october: string,
    november: string,
    december: string
  },
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
    Thays: {
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
      cachoeiras: string
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
    notIncluded: string[],
    notIncludedIn: string,
    perPerson: string
      bookNow: string
      includedFeatures: string
      availableDates: string
      duration: string
      groupSize: string
    chapadaAdventure: {
      notIncludedIn: string,
      title: string
      subtitle: string
      description: string
      features: string[]
      notIncluded: string[]
    }
    chileanPatagonia: {
      notIncludedIn: string,
      title: string
      subtitle: string
      description: string
      features: string[]
      notIncluded: string[]
    }
    amazonExpedition: {
      notIncludedIn: string,
      title: string
      subtitle: string
      description: string
      features: string[]
      notIncluded: string[]
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
  }
}

const translations: Record<Language, Translations> = {
  EN: {
    months: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December"
    },
    navigation: {
      home: "Home",
      destinations: "Destinations",
      packages: "Packages",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Discover Unique Travel Experiences",
      subtitle: "Join professional guides Thays and Leandro for unforgettable adventures that create lasting memories",
      ctaButton: "Plan Your Trip Now"
    },
    aboutGuides: {
      title: "Meet Your Professional Guides",
      subtitle: "Our certified guides combine years of experience with genuine passion for creating unforgettable travel experiences",
      specialties: "Specialties",
      certifications: "Certifications",
      Thays: {
        bio: "With over 8 years of guiding experience, Thays specializes in cultural immersion and eco-adventures. Her passion for connecting travelers with local communities creates authentic, transformative experiences.",
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
        cachoeiras: "Cachoeiras",
        culture: "Culture",
        wildlife: "Wildlife",
        adventure: "Adventure"
      },
      photos: {
        "1": { caption: "Couros", location: "Alto Paraíso" },
        "2": { caption: "Santa Barbara", location: "Alto Paraíso" },
        "3": { caption: "Wildlife Encounter", location: "Pantanal" },
        "4": { caption: "Rock Climbing Adventure", location: "Patagonia" },
        "5": { caption: "Cultural Ceremony", location: "Amazon" },
        "6": { caption: "Peak Expedition", location: "Torres del Paine" },
        "7": { caption: "River Rafting", location: "Bio Bio River" },
        "8": { caption: "Tropical Birds", location: "Atlantic Forest" },
        "9": { caption: "Starlight Tour", location: "Atlantic Forest" },
        "10": { caption: "Couros Trail", location: "Atlantic Forest" },
        "11": { caption: "Aldeia Indigena", location: "Atlantic Forest" },
        "12": { caption: "Sunset", location: "Alto Paraíso" }
      }
    },
    packages: {
      title: "Our Travel Packages",
      subtitle: "Carefully crafted adventures designed to create unforgettable memories with professional guidance every step of the way",
      perPerson: "per person",
      notIncluded: ["Entrance fees to attractions", "Any other meal not mentioned previously", "Airfare"],
      bookNow: "Book Now",
      includedFeatures: "Included Features:",
      availableDates: "Available Dates",
      duration: "duration",
      groupSize: "group size",
      notIncludedIn: "Not Included",
      chapadaAdventure: {
        notIncludedIn: "Not Included",
        title: "Chapada Adventure",
        subtitle: "Professional Guide Included",
        description: "Explore the mystical landscapes of Chapada dos Veadeiros with crystal-clear waterfalls, ancient rock formations, and rich biodiversity.",
        features: ["Waterfall Hiking", "Cave Exploration", "Local Culture Immersion", "Photography Workshop"],
        notIncluded: ["Entrance fees to attractions", "Any other meal not mentioned previously", "Airfare"]
      },
      chileanPatagonia: {
        notIncludedIn: "Not Included",
        title: "Chilean Patagonia",
        subtitle: "All-Inclusive Plan",
        description: "Experience the raw beauty of Chilean Patagonia with iconic granite towers, pristine glaciers, and diverse wildlife in comfort.",
        features: ["Torres del Paine Trek", "Glacier Viewing", "Wildlife Spotting", "Luxury Camping"],
        notIncluded: ["Entrance fees to attractions", "Any other meal not mentioned previously", "Airfare"]
      },
      amazonExpedition: {
        notIncludedIn: "Not Included",
        title: "Amazon Expedition",
        subtitle: "Eco-Adventure Package",
        description: "Immerse yourself in the Amazon rainforest, meet indigenous communities, and witness incredible biodiversity in this eco-conscious adventure.",
        features: ["River Navigation", "Indigenous Communities", "Wildlife Photography", "Sustainable Tourism"],
        notIncluded: ["Entrance fees to attractions", "Any other meal not mentioned previously", "Airfare"]
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our travel experiences and services",
      questions: [
        {
          question: "How do I book an expedition?",
          answer: "You can book by contacting us directly via WhatsApp."
        },
        {
          question: "Can I split the payment of the expedition?",
          answer: "Yes, we offer flexible payment options. You can split the payment by credit card in up to 12x or via PIX as long as the total payment is completed before the departure date."
        },
        {
          question: "What's included in the expeditions?",
          answer: "All our expeditions include all the activities described: transportation to and from the airport at the stipulated time, breakfast at the hotel, all tours of the itinerary and tourism guides. We also offer air travel separately, check prices with our agents."
        },
        {
          question: "Do I need a good physical condition to participate in the expeditions?",
          answer: "Yes, we offer expeditions for different physical conditions. Contact us to choose the most appropriate one."
        },
        {
          question: "Can I travel alone or is it necessary to be in a group?",
          answer: "Yes, you can travel alone! We create an atmosphere of warmth to meet new people during the trip."
        },
        {
          question: "How are the leaders of the expeditions? Are there experienced guides?",
          answer: "All our expeditions are led by highly experienced guides, ensuring safety and an enriching experience."
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
      description: "Creating unforgettable travel experiences with professional guides Thays and Leandro. Your adventure starts here.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      stayUpdated: "Stay Updated",
      newsletterDescription: "Subscribe to get exclusive offers and travel tips from our expert guides.",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      copyright: "© 2024 Life To Viagens. All rights reserved."
    }
  },
  PT: {
    months: {
      january: "Janeiro",
      february: "Fevereiro",
      march: "Março",
      april: "Abril",
      may: "Maio",
      june: "Junho",
      july: "Julho",
      august: "Agosto",
      september: "Setembro",
      october: "Outubro",
      november: "Novembro",
      december: "Dezembro"
    },
    navigation: {
      home: "Início",
      destinations: "Destinos",
      packages: "Pacotes",
      about: "Sobre",
      contact: "Contato"
    },
    hero: {
      title: "Descubra Experiências de Viagem Únicas",
      subtitle: "Junte-se aos guias profissionais Thays e Leandro para aventuras inesquecíveis que criam memórias duradouras",
      ctaButton: "Planeje Sua Viagem Agora"
    },
    aboutGuides: {
      title: "Conheça Seus Guias Profissionais",
      subtitle: "Nossos guias certificados combinam anos de experiência com paixão genuína por criar experiências de viagem inesquecíveis",
      specialties: "Especialidades",
      certifications: "Certificações",
      Thays: {
        bio: "Com mais de 8 anos de experiência como guia, Thays é especializada em imersão cultural e eco-aventuras. Sua paixão por conectar viajantes com comunidades locais cria experiências autênticas e transformadoras.",
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
        cachoeiras: "Cachoeiras",
        culture: "Cultura",
        wildlife: "Vida Selvagem",
        adventure: "Aventura"
      },
      photos: {
        "1": { caption: "Couros", location: "Alto Paraíso" },
        "2": { caption: "Santa Barbara", location: "Alto Paraíso" },
        "3": { caption: "Vale da Lua", location: "Alto Paraíso" },
        "4": { caption: "Aventura de Escalada", location: "Patagônia" },
        "5": { caption: "Santa Barbara", location: "Alto Paraíso" },
        "6": { caption: "Expedição ao Pico", location: "Torres del Paine" },
        "7": { caption: "Cachoeira", location: "Rio Bio Bio" },
        "8": { caption: "Pássaros Tropicais", location: "Mata Atlântica" },
        "9": { caption: "Passeio Estelar", location: "Alto Paraíso" },
        "10": { caption: "Trila em Couros", location: "Alto Paraíso" },
        "11": { caption: "Aldeia Indigena", location: "Alto Paraíso" },
        "12": { caption: "Por do Sol", location: "Alto Paraíso" }
      }
    },
    packages: {
      title: "Nossos Pacotes de Viagem",
      subtitle: "Aventuras cuidadosamente elaboradas para criar memórias inesquecíveis com orientação profissional a cada passo do caminho",
      perPerson: "por pessoa",
      notIncluded: ["Entrada dos atrativos", "Qualquer outra refeição não citada anteriormente", "Passagens aéreas"],
      bookNow: "Reserve Agora",
      includedFeatures: "Recursos Inclusos:",
      availableDates: "Datas Disponíveis",
      duration: "duração",
      groupSize: "tamanho do grupo",
      notIncludedIn: "Não Incluído",
      chapadaAdventure: {
        title: "Chapada dos Veadeiros - 2025",
        subtitle: "Guia Profissional Incluído",
        description: "Explore as paisagens místicas da Chapada dos Veadeiros com cachoeiras cristalinas, formações rochosas antigas e rica biodiversidade.",
        features: ["Caminhada às Cachoeiras", "Exploração de Cavernas", "Imersão Cultural Local", "Workshop de Fotografia"],
        notIncluded: ["Entrada dos atrativos", "Qualquer outra refeição não citada anteriormente", "Passagens aéreas"],
        notIncludedIn: "Não Incluído"
      },
      chileanPatagonia: {
        title: "Chapada dos Veadeiros - 2026",
        subtitle: "Plano Tudo Incluído",
        description: "Experimente a beleza selvagem da Patagônia Chilena com torres de granito icônicas, geleiras pristinas e vida selvagem diversificada com conforto.",
        features: ["Trilha Torres del Paine", "Observação de Geleiras", "Avistamento de Vida Selvagem", "Camping de Luxo"],
        notIncluded: ["Entrada dos atrativos", "Qualquer outra refeição não citada anteriormente", "Passagens aéreas"],
        notIncludedIn: "Não Incluído"
      },
      amazonExpedition: {
        title: "Expedição à Amazônia",
        subtitle: "Pacote Eco-Aventura",
        description: "Mergulhe na floresta amazônica, conheça comunidades indígenas e testemunhe a incrível biodiversidade nesta aventura eco-consciente.",
        features: ["Navegação Fluvial", "Comunidades Indígenas", "Fotografia da Vida Selvagem", "Turismo Sustentável"],
        notIncluded: ["Entrada dos atrativos", "Qualquer outra refeição não citada anteriormente", "Passagens aéreas"],
        notIncludedIn: "Não Incluído"
      }
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Encontre respostas para perguntas comuns sobre nossas experiências de viagem e serviços",
      questions: [
        {
          question: "Como faço para reservar uma expedição?",
          answer: "Você pode reservar entrando em contato conosco diretamente pelo WhatsApp."
        },
        {
          question: "É possível parcelar o valor da expedição?",
          answer: "Sim, oferecemos parcelamento por carão de crédito em até 12x ou via PIX desde que o pagamento total seja concluído até a data da viagem."
        },
        {
          question: "O que está incluído nas expedições?",
          answer: "Nossas expedições incluem todas as atividades descritas: traslado ida e volta do aeroporto no horário estipulado, hospedagem café da manha, todos os passeios do roteiro e guias de turismo. Também oferecemos aéreo a parte, confira valores com nossos agentes."
        },
        {
          question: "Preciso ter uma boa condição física para participar das expedições?",
          answer: "Oferecemos expedições para diferentes níveis de condicionamento físico. Entre em contato para escolher a mais adequada."
        },
        {
          question: "Posso viajar sozinho ou é necessário estar em grupo?",
          answer: "Sim, você pode viajar sozinho! Criamos uma atmosfera acolhedora para você conhecer novas pessoas durante a viagem."
        },
        {
          question: "Como são as lideranças das expedições? Há guias experientes?",
          answer: "Todas as expedições são lideradas por guias altamente experientes, garantindo segurança e uma experiência enriquecedora."
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
      description: "Criando experiências de viagem inesquecíveis com os guias profissionais Thays e Leandro. Sua aventura começa aqui.",
      quickLinks: "Links Rápidos",
      contactInfo: "Informações de Contato",
      stayUpdated: "Mantenha-se Atualizado",
      newsletterDescription: "Inscreva-se para receber ofertas exclusivas e dicas de viagem de nossos guias especialistas.",
      emailPlaceholder: "Seu endereço de email",
      subscribe: "Inscrever-se",
      copyright: "© 2024 Life To Viagens. Todos os direitos reservados.",
    }
  },
  ES: {
    months: {
      january: "Enero",
      february: "Febrero",
      march: "Marzo",
      april: "Abril",
      may: "Mayo",
      june: "Junio",
      july: "Julio",
      august: "Agosto",
      september: "Septiembre",
      october: "Octubre",
      november: "Noviembre",
      december: "Diciembre"
    },
    navigation: {
      home: "Inicio",
      destinations: "Destinos",
      packages: "Paquetes",
      about: "Acerca",
      contact: "Contacto"
    },
    hero: {
      title: "Descubre Experiencias de Viaje Únicas",
      subtitle: "Únete a los guías profesionales Thays y Leandro para aventuras inolvidables que crean recuerdos duraderos",
      ctaButton: "Planifica Tu Viaje Ahora"
    },
    aboutGuides: {
      title: "Conoce a Tus Guías Profesionales",
      subtitle: "Nuestros guías certificados combinan años de experiencia con pasión genuina por crear experiencias de viaje inolvidables",
      specialties: "Especialidades",
      certifications: "Certificaciones",
      Thays: {
        bio: "Con más de 8 años de experiencia como guía, Thays se especializa en inmersión cultural y eco-aventuras. Su pasión por conectar viajeros con comunidades locales crea experiencias auténticas y transformadoras.",
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
        cachoeiras: "Cachoeiras",
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
        "8": { caption: "Aves Tropicales", location: "Bosque Atlántico" },
        "9": { caption: "Paseo Estelar", location: "Bosque Atlántico" },
        "10": { caption: "Trilha en Couros", location: "Bosque Atlántico" },
        "11": { caption: "Aldeia Indigena", location: "Bosque Atlántico" },
        "12": { caption: "Puesta de Sol", location: "Bosque Atlántico" }
      }
    },
    packages: {
      title: "Nuestros Paquetes de Viaje",
      subtitle: "Aventuras cuidadosamente elaboradas diseñadas para crear recuerdos inolvidables con orientación profesional en cada paso del camino",
      perPerson: "por persona",
      notIncluded: ["Entrada de atracciones", "Cualquier otra comida no mencionada anteriormente", "Pasajes aéreos"],
      bookNow: "Reservar Ahora",
      includedFeatures: "Características Incluidas:",
      availableDates: "Fechas Disponibles",
      duration: "duración",
      groupSize: "tamaño del grupo",
      notIncludedIn: "No Incluido",
      chapadaAdventure: {
        title: "Aventura en Chapada",
        subtitle: "Guía Profesional Incluido",
        description: "Explora los paisajes místicos de Chapada dos Veadeiros con cascadas cristalinas, formaciones rocosas antiguas y rica biodiversidad.",
        features: ["Senderismo a Cascadas", "Exploración de Cuevas", "Inmersión Cultural Local", "Taller de Fotografía"],
        notIncluded: ["Entrada de atracciones", "Cualquier otra comida no mencionada anteriormente", "Pasajes aéreos"],
        notIncludedIn: "No Incluido"
      },
      chileanPatagonia: {
        title: "Patagonia Chilena",
        subtitle: "Plan Todo Incluido",
        description: "Experimenta la belleza salvaje de la Patagonia Chilena con torres de granito icónicas, glaciares prístinos y vida silvestre diversa con comodidad.",
        features: ["Trekking Torres del Paine", "Observación de Glaciares", "Avistamiento de Vida Silvestre", "Camping de Lujo"],
        notIncluded: ["Entrada de atracciones", "Cualquier otra comida no mencionada anteriormente", "Pasajes aéreos"],
        notIncludedIn: "No Incluido"
      },
      amazonExpedition: {
        title: "Expedición al Amazonas",
        subtitle: "Paquete Eco-Aventura",
        description: "Sumérgete en la selva amazónica, conoce comunidades indígenas y presencia la increíble biodiversidad en esta aventura eco-consciente.",
        features: ["Navegación Fluvial", "Comunidades Indígenas", "Fotografía de Vida Silvestre", "Turismo Sostenible"],
        notIncluded: ["Entrada de atracciones", "Cualquier otra comida no mencionada anteriormente", "Pasajes aéreos"],
        notIncludedIn: "No Incluido"
      }
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Encuentra respuestas a preguntas comunes sobre nuestras experiencias de viaje y servicios",
      questions: [
        {
          question: "¿Cómo puedo reservar una expedición?",
          answer: "Puedes reservar entrando en contacto con nosotros directamente por WhatsApp."
        },
        {
          question: "¿Puedo pagar la expedición en partes?",
          answer: "Sí, ofrecemos opciones de pago flexibles. Puedes pagar en tarjeta de crédito en hasta 12x o via PIX siempre que el pago total se complete antes de la fecha de salida."
        },
        {
          question: "¿Qué está incluido en las expediciones?",
          answer: "Nuestras expedições incluem todas as atividades descritas: traslado ida e volta do aeroporto no horário estipulado, hospedagem café da manha, todos os passeios do roteiro e guias de turismo. Também oferecemos aéreo a parte, confira valores com nossos agentes."
        },
        {
          question: "¿Necesito una buena condición física para participar en las expediciones?",
          answer: "Sí, oferecemos expedições para diferentes níveis de condicionamento físico. Entre em contato para escolher a mais adequada."
        },
        {
          question: "¿Puedo viajar solo o es necesario estar en un grupo?",
          answer: "Sim, você pode viajar sozinho! Criamos uma atmosfera acolhedora para você conhecer novas pessoas durante a viagem."
        },
        {
          question: "¿Cómo son las líderes de las expediciones? ¿Hay guías experimentados?",
          answer: "Todas las expedições são lideradas por guias altamente experientes, garantizando segurança e uma experiência enriquecedora."
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
      description: "Creando experiencias de viaje inolvidables con los guías profesionales Thays y Leandro. Tu aventura comienza aquí.",
      quickLinks: "Enlaces Rápidos",
      contactInfo: "Información de Contacto",
      stayUpdated: "Mantente Actualizado",
      newsletterDescription: "Suscríbete para recibir ofertas exclusivas y consejos de viaje de nuestros guías expertos.",
      emailPlaceholder: "Tu dirección de email",
      subscribe: "Suscribirse",
      copyright: "© 2024 Life To Viagens. Todos los derechos reservados.",
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
