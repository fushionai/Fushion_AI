type LocalizationType = {
  Hero: {
    heading: { en: string; nl: string };
    subheading: { en: string; nl: string };
    buttons: {
      discoverMore: { en: string; nl: string };
      contactUs: { en: string; nl: string };
    };
  };
  Services: {
    title: { en: string; nl: string };
    slider: {
      items: {
        title: { en: string; nl: string };
        description: { en: string; nl: string };
      }[];
    };
    navigation: {
      prevArrow: { alt: { en: string; nl: string } };
      nextArrow: { alt: { en: string; nl: string } };
    };
  };
  Features: {
    title: { en: string; nl: string };
    subtitle: { en: string; nl: string };
    description: { en: string; nl: string };
    // accordion: {
    //   [key: string]: {
    //     title: any;
    //     description: { en: string; nl: string };
    //   };
    // };
    accordion: any;
  };

  coreValues: {
    title: { en: string; nl: string };
    description: { en: string; nl: string };
    values: {
      title: { en: string; nl: string };
      description: { en: string; nl: string };
    }[];
  };
  Testimonials: {
    title: { en: string; nl: string };
    description: { en: string; nl: string };
    testimonials: {
      testimonial: { en: string; nl: string };
      fullName: { en: string; nl: string };
      position: { en: string; nl: string };
    }[];
  };
  UpFooter: {
    title: { en: string; nl: string };
    subheading: { en: string; nl: string };
    buttons: {
      contactUs: { en: string; nl: string };
    };
  };
  ProductsHeroSection: {
    title: { en: string; nl: string };
    subheading: { en: string; nl: string };
    buttons: {
      purchasePriceInfo: { en: string; nl: string };
      purchasePriceInfoDescription: { en: string; nl: string };
      assessedPropertyValue: { en: string; nl: string };
      assessedPropertyValueDescription: { en: string; nl: string };
      propertyReport: { en: string; nl: string };
      propertyReportDescription: { en: string; nl: string };
      consultancy: { en: string; nl: string };
      consultancyDescription: { en: string; nl: string };
    };
    consultancy: {
      title: { en: string; nl: string };
      subheading: { en: string; nl: string };
      buttons: {
        getInTouch: { en: string; nl: string };
      };
    };
  };
  PropertySection: {
    title: { en: string; nl: string };
    description: { en: string; nl: string };
    sections: {
      title: { en: string; nl: string };
      description: { en: string; nl: string };
      buttons?: {
        learnMore: { en: string; nl: string };
        contactUs: { en: string; nl: string };
      };
    }[];
  };
  ProductsOurServices: {
    title: { en: string; nl: string };
    purchaseInfo: { en: string[]; nl: string[] };
    assessed: { en: string[]; nl: string[] };
    products: {
      price: string;
      title: { en: string; nl: string };
      description: { en: string; nl: string };
    }[];
    buttons?: {
      learnMore: { en: string; nl: string };
      contactUs: { en: string; nl: string };
    };
  };
  ProductsAIPoweredValuation: {
    buttons: { contactUs: { en: string; nl: string } };
    title: { en: string; nl: string };
    subtitle: { en: string; nl: string };
    InformationIncluded: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
      note: { en: string; nl: string };
    };
    DeliveryTime: {
      heading: { en: string; nl: string };
      description: { en: string; nl: string };
    };
    BenefitsForBuyers: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
    };
  };
  ProductsPropertyReport: {
    buttons: {
      contactUs: { en: string; nl: string };
    };
    title: { en: string; nl: string };
    subtitle: { en: string; nl: string };
    list: { en: string[]; nl: string[] };
    note: { en: string; nl: string };
    InformationIncluded: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
    };
    DeliveryTime: {
      heading: { en: string; nl: string };
      description: { en: string; nl: string };
    };
    BenefitsForBuyers: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
    };
  };
  ProductsAssessedPropertyValue: {
    buttons: {
      contactUs: { en: string; nl: string };
      clickHere: { en: string; nl: string };
    };
    title: { en: string; nl: string };
    subtitle: { en: string; nl: string };
    list: { en: string[]; nl: string[] };
    questions: { en: string; nl: string };
    answer: { en: string; nl: string };
    InformationIncluded: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
    };
    DeliveryTime: {
      heading: { en: string; nl: string };
      description: { en: string; nl: string };
    };
    BenefitsForBuyers: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
    };
  };
  ProductsValuationAnalysisReport: {
    buttons: { contactUs: { en: string; nl: string } };
    title: { en: string; nl: string };
    subtitle: { en: string; nl: string };
    InformationIncluded: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
      note: { en: string; nl: string };
    };
    DeliveryTime: {
      heading: { en: string; nl: string };
      description: { en: string; nl: string };
    };
    BenefitsForBuyers: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
    };
  };
  ProductsPurchasePriceInformation: {
    buttons: {
      contactUs: { en: string; nl: string };
    };
    title: { en: string; nl: string };
    subtitle: { en: string; nl: string };
    list: { en: string[]; nl: string[] };
    InformationIncluded: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
    };
    note: { en: string; nl: string };
    DeliveryTime: {
      heading: { en: string; nl: string };
      description: { en: string; nl: string };
    };
    BenefitsForBuyers: {
      heading: { en: string; nl: string };
      list: { en: string[]; nl: string[] };
    };
  };
  consultancy: {
    title: { en: string; nl: string };
    description: { en: string; nl: string };
  };
  Project: {
    title: { en: string; nl: string };
  };
  ProjectModal: {
    Header: { en: string; nl: string };
    Body: { en: string; nl: string };
    Footer: {
      CloseButton: { en: string; nl: string };
    };
  };
  AboutUs: {
    title: { en: string; nl: string };
    description: { en: string; nl: string };
  };
  AboutUsValues: {
    title: { en: string; nl: string };
    values: {
      title: { en: string; nl: string };
      description: { en: string; nl: string };
    }[];
  };
  AboutUsMissionVision: {
    title: { en: string; nl: string };
    mission: {
      title: { en: string; nl: string };
      description: { en: string; nl: string };
    };
    vision: {
      title: { en: string; nl: string };
      description: { en: string; nl: string };
    };
  };
  Contact: {
    title: { en: string; nl: string };
    ContactInfo: {
      title: { en: string; nl: string };
      description: { en: string; nl: string };
      emailLabel: { en: string; nl: string };
      workingHours: { en: string; nl: string };
    };
    Form: {
      firstNamePlaceholder: { en: string; nl: string };
      lastNamePlaceholder: { en: string; nl: string };
      emailPlaceholder: { en: string; nl: string };
      phonePlaceholder: { en: string; nl: string };
      companyName: { en: string; nl: string };
      messagePlaceholder: { en: string; nl: string };
      sendButton: { en: string; nl: string };
      sendingButton: { en: string; nl: string };
      errorMessage: {
        firstName: { en: string; nl: string };
        lastName: { en: string; nl: string };
        email: { en: string; nl: string };
        validEmail: { en: string; nl: string };
        company: { en: string; nl: string };
        message: { en: string; nl: string };
      };
    };
  };
  Footer: {
    heading: { en: string; nl: string };
    rights: { en: string; nl: string };
    privacyPolicy: { en: string; nl: string };
    termsAndConditions: { en: string; nl: string };
    CookiePolicy: { en: string; nl: string };
  };
};

export const localization: LocalizationType = {
  // Landing Page
  Hero: {
    heading: {
      en: "Innovating Real Estate with AI Precision",
      nl: "Innovatie in Vastgoed met AI-Precisie",
    },
    subheading: {
      en: "Transform real estate with the power of data",
      nl: "Transformeer vastgoed met de kracht van data",
    },
    buttons: {
      discoverMore: {
        en: "Discover More",
        nl: "Ontdek meer",
      },
      contactUs: {
        en: "Contact Us",
        nl: "Neem contact op",
      },
    },
  },
  Services: {
    title: {
      en: "Service We Offer",
      nl: "Diensten die wij aanbieden",
    },
    slider: {
      items: [
        {
          title: {
            en: "Insights for Investors and Professionals",
            nl: "Inzichten voor investeerders en professionals",
          },
          description: {
            en: "We provide detailed analyses essential for making strategic decisions in real estate investments. This includes market trends, property price forecasts, and a thorough evaluation of risks related to the housing market.",
            nl: "Wij bieden gedetailleerde analyses die essentieel zijn voor het nemen van strategische beslissingen in vastgoedinvesteringen. Dit omvat markttrends, voorspellingen van vastgoedprijzen en een grondige evaluatie van risico's die verband houden met de huizenmarkt. ",
          },
        },
        {
          title: {
            en: "Custom Solutions",
            nl: "Maatwerkoplossingen",
          },
          description: {
            en: "Every project is unique. Therefore, we work closely with our clients to deliver tailored solutions that meet their specific needs and goals.",
            nl: "Elk project is uniek. Daarom werken we nauw samen met onze klanten om op maat gemaakte oplossingen te leveren die aansluiten bij hun specifieke behoeften en doelen.",
          },
        },
        {
          title: {
            en: "Our Expertise",
            nl: "Onze Expertise",
          },
          description: {
            en: "With a team of experienced data scientists and specialists in financial econometrics, we combine advanced machine learning techniques with deep market knowledge. Our models are not only accurate and reliable but also continuously adapted to the changing market.",
            nl: "Met een team van ervaren datawetenschappers en specialisten in financiële econometrie combineren we geavanceerde machine learning-technieken met diepgaande marktkennis. Onze modellen zijn niet alleen nauwkeurig en betrouwbaar, maar worden ook continu aangepast aan de veranderende markt.",
          },
        },
        {
          title: {
            en: "Committed to Your Success",
            nl: "Toegewijd aan jouw succes",
          },
          description: {
            en: "At Fushion AI, your success is our priority. We are dedicated to delivering high-quality services that help you make smart, data-driven decisions. Whether you are a consumer, real estate agent, or real estate professional, we are here to support you with our expertise.",
            nl: "Bij Fusion AI staat jouw succes centraal. We zijn toegewijd aan het leveren van hoogwaardige diensten die je helpen slimme, op data gebaseerde beslissingen te nemen. Of je nu een consument, makelaar of vastgoedprofessional bent, wij staan klaar om je te ondersteunen met onze expertise.",
          },
        },
      ],
    },
    navigation: {
      prevArrow: {
        alt: {
          en: "Previous arrow",
          nl: "",
        },
      },
      nextArrow: {
        alt: {
          en: "Next arrow",
          nl: "",
        },
      },
    },
  },
  Features: {
    title: {
      en: "Why Choose",
      nl: "Waarom kiezen voor ",
    },
    subtitle: {
      en: "Fushion AI?",
      nl: "Fushion AI?",
    },
    description: {
      en: "At Fushion AI, we believe in the transformative power of data to revolutionize the real estate market. Our core mission is to empower our clients with advanced artificial intelligence (AI) models that deliver essential insights, helping them make informed investment decisions based on accurate and up-to-date information.",
      nl: "Bij Fushion AI geloven we in de transformerende kracht van data om de vastgoedmarkt te revolutioneren. Onze kernmissie is om onze klanten in staat te stellen geavanceerde kunstmatige intelligentie (AI) modellen te gebruiken die essentiële inzichten bieden, zodat ze weloverwogen investeringsbeslissingen kunnen nemen op basis van nauwkeurige en up-to-date informatie. ",
    },
    accordion: {
      order1: {
        titlePart1: {
          en: "Unmatched Expertise in",
          nl: "Ongeëvenaarde expertise in",
        },
        titleColored1: { en: " AI", nl: " AI" },
        titlePart2: { en: " and", nl: " en" },
        titleColored2: { en: " Real Estate", nl: " vastgoed" },
        description: {
          en: "Our team of experts combines deep knowledge in AI with extensive experience in the real estate industry. This unique blend allows us to develop cutting-edge solutions tailored specifically to the needs of consumers, real estate agents, property companies, and developers.",
          nl: "Ons team van experts combineert diepgaande kennis van AI met uitgebreide ervaring in de vastgoedsector. Deze unieke combinatie stelt ons in staat om baanbrekende oplossingen te ontwikkelen die specifiek zijn afgestemd op de behoeften van consumenten, vastgoedmakelaars, vastgoedbedrijven en ontwikkelaars.",
        },
      },
      order2: {
        title: {
          en: "Comprehensive",
          nl: "Uitgebreide",
        },
        titleColored1: { en: "Data Analysis", nl: "data-analyse" },
        description: {
          en: "We leverage sophisticated AI algorithms to analyze vast amounts of data from various sources, ensuring our clients have a comprehensive view of the market. From price trends and property valuations to neighborhood dynamics and investment potential, our insights cover every critical aspect of real estate.",
          nl: "We maken gebruik van geavanceerde AI-algoritmen om enorme hoeveelheden data uit verschillende bronnen te analyseren, zodat onze klanten een volledig overzicht van de markt hebben. Van prijsontwikkelingen en vastgoedwaarderingen tot dynamiek in buurten en investeringspotentieel, onze inzichten dekken elk belangrijk aspect van vastgoed.",
        },
      },
      order3: {
        title: {
          en: "Real-Time, Accurate Insights",
          nl: "Real-time, Nauwkeurige Inzichten",
        },
        description: {
          en: "In the fast-paced world of real estate, timely information is crucial. Our AI models continuously process and update data, providing our clients with real-time insights that reflect the current market conditions. This enables them to stay ahead of the competition and make decisions with confidence",
          nl: "In de snel veranderende wereld van vastgoed is tijdige informatie cruciaal. Onze AI-modellen verwerken en updaten continu gegevens, waardoor onze klanten real-time inzichten krijgen die de huidige marktomstandigheden weerspiegelen. Dit stelt hen in staat om voorop te blijven lopen op de concurrentie en met vertrouwen beslissingen te nemen.",
        },
      },
      order4: {
        title: {
          en: "Tailored Solutions for Diverse Needs",
          nl: "Maatwerkoplossingen voor Diverse Behoeften",
        },
        description: {
          en: "At Fushion AI, we understand that every client is unique. Whether you're a first-time homebuyer, a seasoned investor, or a large-scale developer, our services are designed to meet your specific needs. We offer customizable solutions that cater to a wide range of real estate scenarios, ensuring you get the most relevant and actionable insights.",
          nl: "Bij Fushion AI begrijpen we dat elke klant uniek is. Of u nu een beginnende huizenkoper bent, een ervaren investeerder of een grootschalige projectontwikkelaar, onze diensten zijn ontworpen om aan uw specifieke behoeften te voldoen. We bieden op maat gemaakte oplossingen die aansluiten bij een breed scala aan vastgoedsituaties, zodat u de meest relevante en bruikbare inzichten ontvangt.",
        },
      },
      order5: {
        title: {
          en: "Commitment to Innovation",
          nl: "Toewijding aan Innovatie",
        },
        description: {
          en: "We are committed to staying at the forefront of technological advancements. By constantly refining our AI models and incorporating the latest developments in data science, we ensure that our clients benefit from the most innovative and effective tools available in the market.",
          nl: "Wij zetten ons in om aan de voorhoede van technologische vooruitgang te blijven. Door onze AI-modellen voortdurend te verfijnen en de nieuwste ontwikkelingen in datawetenschap te integreren, zorgen we ervoor dat onze klanten profiteren van de meest innovatieve en effectieve tools die op de markt beschikbaar zijn.",
        },
      },
      order6: {
        title: {
          en: "Trusted Partner in Real Estate",
          nl: "Betrouwbare Partner in Vastgoed",
        },
        description: {
          en: "Choosing Fushion AI means partnering with a trusted ally in your real estate journey. Our goal is to help you navigate the complexities of the market with ease, making smarter, data-driven decisions that lead to successful outcomes.",
          nl: "Kiezen voor Fushion AI betekent samenwerken met een vertrouwde bondgenoot tijdens uw vastgoedtraject. Ons doel is om u te helpen de complexiteiten van de markt met gemak te doorgronden, zodat u slimmere, data-gedreven beslissingen kunt nemen die leiden tot succesvolle resultaten.",
        },
      },
    },
  },
  coreValues: {
    title: {
      en: "Core Values of Fushion AI",
      nl: "Kernwaarden van Fushion AI",
    },
    description: {
      en: "At Fushion AI, your success is our priority. We are dedicated to delivering high-quality services that help you make smart, data-driven decisions. Whether you are a consumer, real estate agent, or real estate professional, we are here to support you with our expertise.",
      nl: "Bij Fushion AI staat uw succes voorop. Wij zetten ons in om hoogwaardige diensten te leveren die u helpen slimme, data-gedreven beslissingen te nemen. Of u nu een consument, vastgoedmakelaar of vastgoedprofessional bent, wij staan klaar om u te ondersteunen met onze expertise.",
    },
    values: [
      {
        title: {
          en: "Innovation",
          nl: "Innovatie",
        },
        description: {
          en: "Pushing the boundaries of what's possible with AI to bring new and effective solutions to the real estate market.",
          nl: "De grenzen verleggen van wat mogelijk is met AI om nieuwe en effectieve oplossingen te bieden voor de vastgoedmarkt.",
        },
      },
      {
        title: {
          en: "Integrity",
          nl: "Integriteit",
        },
        description: {
          en: "Maintaining the highest ethical standards in all business dealings.",
          nl: "Het handhaven van de hoogste ethische normen in alle zakelijke transacties.",
        },
      },
      {
        title: {
          en: "Professionalism",
          nl: "Professionaliteit",
        },
        description: {
          en: "Delivering top-notch service with expertise and dedication.",
          nl: "Het leveren van eersteklas service met expertise en toewijding.",
        },
      },
      {
        title: {
          en: "Customer-Centricity",
          nl: "Klantgerichtheid",
        },
        description: {
          en: "Putting the needs and success of our clients at the forefront of everything we do.",
          nl: "De behoeften en het succes van onze klanten centraal stellen in alles wat we doen.",
        },
      },
    ],
  },
  Testimonials: {
    title: {
      en: "Committed to Your Success",
      nl: "Toegewijd aan Uw Succes",
    },
    description: {
      en: "At Fushion AI, your success is our priority. We are dedicated to delivering high-quality services that help you make smart, data-driven decisions. Whether you are a consumer, real estate agent, or real estate professional, we are here to support you with our expertise.",
      nl: "Bij Fushion AI staat uw succes voorop. Wij zijn toegewijd aan het leveren van hoogwaardige diensten die u helpen slimme, data-gedreven beslissingen te nemen. Of u nu een consument, vastgoedmakelaar of vastgoedprofessional bent, wij staan klaar om u te ondersteunen met onze expertise.",
    },
    testimonials: [
      {
        testimonial: {
          en: "I had no idea if my apartment in Amsterdam was above the liberalization threshold or not, but FusionAI really helped me figure it out. They gave me an estimate using the points system and explained that I didn’t need to lower my rent. It was a huge relief and super helpful!",
          nl: "Ik had geen idee of mijn appartement in Amsterdam boven de liberalisatiegrens viel of niet, maar FusionAI heeft me echt geholpen om dat uit te zoeken. Ze gaven me een schatting met behulp van het puntensysteem en legden uit dat ik mijn huur niet hoefde te verlagen. Het was een enorme opluchting en super behulpzaam!",
        },
        fullName: {
          en: "Sven K.",
          nl: "Sven K.",
        },
        position: {
          en: "Property Investor",
          nl: "Vastgoedinvesteerder",
        },
      },
      {
        testimonial: {
          en: "I was thinking about buying off my leasehold in Amsterdam, but FusionAI suggested I might be better off investing in a new home instead. They showed me how the housing market has performed over time, and it really helped me make a smarter decision. I’m so glad I got their advice!",
          nl: "Ik overwoog om mijn 'erfpacht' in Amsterdam af te kopen, maar FusionAI suggereerde dat het wellicht beter zou zijn om in plaats daarvan te investeren in een nieuw huis. Ze lieten me zien hoe de woningmarkt zich door de tijd heen heeft ontwikkeld, en dat hielp me echt om een slimmer besluit te nemen. Ik ben zo blij dat ik hun advies heb opgevolgd!",
        },
        fullName: {
          en: "Eva M.",
          nl: "Eva M.",
        },
        position: {
          en: "Property Owner",
          nl: "Vastgoedeigenaar",
        },
      },
      {
        testimonial: {
          en: "I needed a bunch of legal documents about my home, like ownership papers and transaction info, and FusionAI got everything together for me quickly. They made the whole process so much easier and stress-free. I couldn’t have done it without them!",
          nl: "Ik had een hoop juridische documenten nodig over mijn huis, zoals eigendomspapieren en transactie-informatie, en FusionAI regelde alles snel voor me. Ze maakten het hele proces zoveel makkelijker en stressvrij. Ik had het niet zonder hen kunnen doen!",
        },
        fullName: {
          en: "Kane V.",
          nl: "Kane V.",
        },
        position: {
          en: "Property Owner",
          nl: "Vastgoedeigenaar",
        },
      },
      {
        testimonial: {
          en: "I was torn between buying two social housing units to rent out or one more expensive place. FusionAI broke down the numbers for me and suggested the free market property would have better returns. Their advice was exactly what I needed, and I feel way more confident about my decision now.",
          nl: "Ik twijfelde tussen het kopen van twee sociale huurwoningen om te verhuren of één duurdere woning. FusionAI analyseerde de cijfers voor me en stelde voor dat een woning in de vrije markt betere rendementen zou opleveren. Hun advies was precies wat ik nodig had, en ik voel me nu veel zekerder over mijn beslissing.",
        },
        fullName: {
          en: "Lotte D.",
          nl: "Lotte D.",
        },
        position: {
          en: "Real Estate Investor",
          nl: "Vastgoedinvesteerder",
        },
      },
    ],
  },
  UpFooter: {
    title: {
      en: "Ready to Simplify Your Real Estate process?",
      nl: "Klaar om uw vastgoedproces te vereenvoudigen?",
    },
    subheading: {
      en: "Contact us and try it now",
      nl: "Neem contact met ons op en probeer het nu!",
    },
    buttons: {
      contactUs: {
        en: "Contact Us",
        nl: "Neem contact op",
      },
    },
  },
  // Our Products Page
  ProductsHeroSection: {
    title: {
      en: "Our Products",
      nl: "Onze Producten ",
    },
    subheading: {
      en: "Unlock comprehensive market information with our Market Info package. Get detailed insights into market trends, property values, and more to make informed decisions.",
      nl: "Ontgrendel uitgebreide marktinformatie met ons Market Info-pakket. Krijg gedetailleerde inzichten in markttrends, vastgoedwaarden en meer om weloverwogen beslissingen te nemen.",
    },
    buttons: {
      purchasePriceInfo: {
        en: "Purchase Price Information",
        nl: "Informatie over aankoopprijzen",
      },
      purchasePriceInfoDescription: {
        en: "Detailed purchase price information to help you understand real estate market dynamics.",
        nl: "Gedetailleerde informatie over aankoopprijzen om u te helpen de dynamiek van de vastgoedmarkt te begrijpen.",
      },
      assessedPropertyValue: {
        en: "Assessed Property Value",
        nl: "Getaxeerde Vastgoedwaarde",
      },
      assessedPropertyValueDescription: {
        en: "Access the assessed value of properties to gauge market value accurately.",
        nl: "Toegang tot de getaxeerde waarde van eigendommen om de marktwaarde nauwkeurig te bepalen.",
      },
      propertyReport: {
        en: "Property Report",
        nl: "Vastgoedrapport",
      },
      propertyReportDescription: {
        en: "An extensive property report combining purchase price info, assessed value, mortgage details, and more. We also include Cadastre data to ensure the most reliable and comprehensive insights.",
        nl: "Een uitgebreid vastgoedrapport dat aankoopprijsinformatie, getaxeerde waarde, hypotheekdetails en meer combineert. We voegen ook Kadastergegevens toe om de meest betrouwbare en uitgebreide inzichten te bieden.",
      },
      consultancy: {
        en: "Consultancy",
        nl: "Consultancy",
      },
      consultancyDescription: {
        en: "Our AI-powered consultancy services empower real estate professionals with data-driven insights to make smarter, faster decisions. Tailored to your needs, we revolutionize the way you navigate the real estate market.",
        nl: "Onze AI-gedreven consultancydiensten bieden vastgoedprofessionals data-gedreven inzichten om slimmer en sneller beslissingen te nemen. Op maat gemaakt, transformeren wij de manier waarop u de vastgoedmarkt benadert.",
      },
    },
    consultancy: {
      title: {
        en: "Consultancy",
        nl: "Consultancy",
      },
      subheading: {
        en: "At Fushion AI, we offer tailored consultancy services to support our clients in navigating the complexities of the real estate market. As a tech-driven company, we combine our expertise in advanced analytics, artificial intelligence, and market trends to deliver actionable insights and customized solutions. Whether you're a property investor, developer, or real estate professional, our consultancy services are designed to empower you with data-driven strategies, enabling you to make informed decisions and maximize returns. Together, we ensure you stay ahead in the competitive real estate landscape.",
        nl: "Bij Fushion AI bieden we op maat gemaakte consultancy-diensten om onze klanten te ondersteunen bij het navigeren door de complexiteiten van de vastgoedmarkt. Als tech-gedreven bedrijf combineren we onze expertise in geavanceerde analyses, kunstmatige intelligentie en markttrends om bruikbare inzichten en op maat gemaakte oplossingen te leveren. Of u nu een vastgoedinvesteerder, ontwikkelaar of vastgoedprofessional bent, onze consultancy-diensten zijn erop gericht u te versterken met data-gedreven strategieën, zodat u weloverwogen beslissingen kunt nemen en uw rendement kunt maximaliseren. Samen zorgen we ervoor dat u een stap voor blijft in de concurrerende vastgoedmarkt.",
      },
      buttons: {
        getInTouch: {
          en: "Get in touch with us now",
          nl: "Neem nu contact met ons op",
        },
      },
    },
  },
  PropertySection: {
    title: {
      en: "Property Valuation",
      nl: "Vastgoedwaardering",
    },
    description: {
      en: "Our Property Valuation product leverages advanced technology to provide accurate property value assessments.",
      nl: "Ons Vastgoedwaarderingsproduct maakt gebruik van geavanceerde technologie om nauwkeurige vastgoedwaardebepalingen te bieden.",
    },
    sections: [
      {
        title: {
          en: "Property Valuation Analysis",
          nl: "Analyse van Vastgoedwaardering",
        },
        description: {
          en: "Compare similar properties to determine accurate pricing, ensuring you stay competitive in the market.",
          nl: "Vergelijk vergelijkbare eigendommen om nauwkeurige prijzen te bepalen, zodat u concurrerend blijft in de markt.",
        },
        buttons: {
          learnMore: {
            en: "Learn more",
            nl: "Meer informatie",
          },
          contactUs: {
            en: "Contact Us",
            nl: "Neem contact op",
          },
        },
      },
      {
        title: {
          en: "AI-Powered Valuation and Predictions",
          nl: "AI-aangedreven Waardering en Voorspellingen",
        },
        description: {
          en: "Compare similar properties to determine accurate pricing, ensuring you stay competitive in the market.",
          nl: "Vergelijk vergelijkbare eigendommen om nauwkeurige prijzen te bepalen, zodat u concurrerend blijft in de markt.",
        },
        buttons: {
          learnMore: {
            en: "Learn more",
            nl: "Meer informatie",
          },
          contactUs: {
            en: "Contact Us",
            nl: "Neem contact op",
          },
        },
      },
      {
        title: {
          en: "Dashboard (Launching Soon)",
          nl: "Dashboard (Binnenkort Beschikbaar)",
        },
        description: {
          en: "Stay ahead with our intuitive dashboard, designed to bring raw data and actionable insights right to your fingertips.",
          nl: "Blijf vooruit met ons intuïtieve dashboard, ontworpen om ruwe data en bruikbare inzichten direct binnen handbereik te brengen.",
        },
      },
      {
        title: {
          en: "Data at Your Fingertips",
          nl: "Data binnen handbereik",
        },
        description: {
          en: "Access raw data and insights effortlessly, allowing you to make data-driven decisions quickly and efficiently.",
          nl: "Toegang tot ruwe data en inzichten zonder moeite, zodat u snel en efficiënt data-gedreven beslissingen kunt nemen.",
        },
      },
    ],
  },
  ProductsOurServices: {
    title: {
      en: "Our Service",
      nl: "Onze Service",
    },
    purchaseInfo: {
      en: [
        "Most recent and historical transactions",
        "Asking price, transaction date, year built, and property type",
        "Purchase price per square meter (based on usable area)",
      ],
      nl: [
        "Meest recente en historische transacties",
        "Vraagprijs, transactiedatum, bouwjaar en woningtype",
        "Aankoopprijs per vierkante meter (op basis van bruikbare oppervlakte)",
      ],
    },
    assessed: {
      en: [
        "Latest purchase price & current model-based market value*",
        "Comparison with 10 reference properties (worth € 24.95)",
        "Cadastral map (worth € 19.95)",
        "Additional property information",
      ],
      nl: [
        "Laatste aankoopprijs & huidige modelgebaseerde marktwaarde*",
        "Vergelijking met 10 referentie-eigendommen (ter waarde van € 24,95)",
        "Kadastrale kaart (ter waarde van € 19,95)",
        "Aanvullende eigendomsinformatie",
      ],
    },
    products: [
      {
        price: "34.95",
        title: {
          en: "Purchase Price Information",
          nl: "Informatie over Aankoopprijzen",
        },
        description: {
          en: "Planning to buy or sell a house on a specific street? Our Transaction Overview provides you with all recent and historical sales and purchase prices of properties.",
          nl: "Van plan om een huis te kopen of verkopen in een specifieke straat? Ons Transactieoverzicht biedt u alle recente en historische verkoop- en aankoopprijzen van woningen.",
        },
      },
      {
        price: "24.95",
        title: {
          en: "Assessed Property Value",
          nl: "Getaxeerde Vastgoedwaarde",
        },
        description: {
          en: "Ideal for accurately estimating the value of a property.",
          nl: "Ideaal voor een nauwkeurige schatting van de waarde van een woning.",
        },
      },
      {
        price: "29.95",
        title: {
          en: "Property Report",
          nl: "Vastgoedrapport",
        },
        description: {
          en: "The Comprehensive Property Report provides detailed information about a property, serving as a solid foundation for valuing a home. This report can be instrumental when deciding on an offer for a house you are interested in purchasing.",
          nl: "Het uitgebreide Vastgoedrapport biedt gedetailleerde informatie over een woning en dient als een solide basis voor het bepalen van de waarde van een woning. Dit rapport kan instrumenteel zijn bij het nemen van een beslissing over een bod op een woning waarin u geïnteresseerd bent.",
        },
      },
    ],
    buttons: {
      learnMore: {
        en: "Learn more",
        nl: "Meer informatie",
      },
      contactUs: {
        en: "Contact Us",
        nl: "Neem contact op",
      },
    },
  },
  ProductsAIPoweredValuation: {
    buttons: {
      contactUs: {
        en: "Contact Us",
        nl: "Neem contact op",
      },
    },
    title: {
      en: "AI-Powered Valuation and Prediction Report",
      nl: "AI-Aangedreven Waardering en Voorspellingsrapport",
    },
    subtitle: {
      en: "The AI-Powered Valuations and Predictions Report utilizes machine learning models to provide accurate valuations and future price predictions for properties. This report is essential for forecasting property market trends and making strategic decisions.",
      nl: "Het AI-aangedreven Waarderings- en Voorspellingsrapport maakt gebruik van machine learning-modellen om nauwkeurige waarderingen en toekomstige prijsvoorspellingen voor vastgoed te leveren. Dit rapport is essentieel voor het voorspellen van trends op de vastgoedmarkt en het nemen van strategische beslissingen.",
    },
    InformationIncluded: {
      heading: {
        en: "Information Included",
        nl: "Inbegrepen Informatie",
      },
      list: {
        en: [
          "Predicted future property value based on past trends",
          "Sale prices of similar properties nearby (up to 20 house numbers)",
          "Current owner",
          "Year built, volume, and area",
          "Mortgage",
          "Energy label (if definitively determined)",
          "Estimated current property value",
        ],
        nl: [
          "Voorspelde toekomstige vastgoedwaarde op basis van trends uit het verleden",
          "Verkoopprijzen van vergelijkbare woningen in de buurt (tot 20 huisnummers)",
          "Huidige eigenaar",
          "Bouwjaar, volume en oppervlakte",
          "Hypotheek",
          " Energielabel (indien definitief bepaald)",
          " Geschatte huidige vastgoedwaarde]",
        ],
      },
      note: {
        en: "Please note that the Neighborhood Comparative Analysis Report may sometimes be unavailable, and not all elements may be included in every report.",
        nl: "Let op: Het kan voorkomen dat het Buurtvergelijkingsrapport niet beschikbaar is en niet alle elementen in elk rapport zijn opgenomen.",
      },
    },
    DeliveryTime: {
      heading: {
        en: "Delivery Time:",
        nl: "Levertijd:",
      },
      description: {
        en: "Less than 1 working day via email upon payment",
        nl: "Minder dan 1 werkdag via e-mail na betaling",
      },
    },
    BenefitsForBuyers: {
      heading: {
        en: "Benefits for Buyers:",
        nl: "Voordelen voor kopers:",
      },
      list: {
        en: [
          "Accurate property valuations using advanced AI models",
          "Future price predictions based on historical data",
          "Energy label (if available)",
        ],
        nl: [
          "Nauwkeurige vastgoedwaarderingen met geavanceerde AI-modellen",
          "Prijsvoorspellingen op basis van historische gegevens",
          "Energielabel (indien beschikbaar)",
        ],
      },
    },
  },
  ProductsPropertyReport: {
    buttons: { contactUs: { en: "Contact Us", nl: "Neem contact op" } },
    title: { en: "Property Report", nl: "Vastgoedrapport" },
    subtitle: {
      en: "The Comprehensive Property Report provides detailed information about a property, serving as a solid foundation for valuing a home. This report can be instrumental when deciding on an offer for a house you are interested in purchasing.",
      nl: "Het uitgebreide Vastgoedrapport biedt gedetailleerde informatie over een woning en dient als een solide basis voor het waarderen van een huis. Dit rapport kan van cruciaal belang zijn bij het nemen van een beslissing over een bod op een huis waarin u geïnteresseerd bent.",
    },
    list: {
      en: [
        "Energy label",
        "Estimated property value",
        "Sale prices of similar properties nearby",
      ],
      nl: [
        "Energielabel",
        "Geschatte woningwaarde",
        "Verkoopprijzen van vergelijkbare woningen in de buurt",
      ],
    },
    note: {
      en: "Please note that the Comprehensive Property Report may sometimes be unavailable, and not all elements may be included in every report.",
      nl: "Let op: Het uitgebreide Vastgoedrapport kan soms niet beschikbaar zijn, en niet alle elementen zijn mogelijk in elk rapport opgenomen.",
    },
    InformationIncluded: {
      heading: {
        en: "Information Included",
        nl: "Inbegrepen Informatie",
      },
      list: {
        en: [
          "Detailed property description",
          "Property photos",
          "Market analysis",
          "Comparable sales",
          "Zoning information",
          "Ownership history",
          "the cadastral map and 10 reference properties",
        ],
        nl: [
          "Gedetailleerde woningbeschrijving",
          "Foto's van het pand",
          "Marktanalyse",
          "Vergelijkbare verkopen",
          "Informatie over bestemmingsplannen",
          "Eigendomsgeschiedenis",
          "De kadastrale kaart en 10 referentiewoningen",
        ],
      },
    },
    DeliveryTime: {
      heading: {
        en: "Delivery Time:",
        nl: "Levertijd:",
      },
      description: {
        en: "Less than 1 working day via email upon payment",
        nl: "Minder dan 1 werkdag via e-mail na betaling",
      },
    },
    BenefitsForBuyers: {
      heading: {
        en: "Benefits for Buyers:",
        nl: "Voordelen voor kopers:",
      },
      list: {
        en: [
          "Our most complete report",
          "Prices of comparable properties",
          "Energy label (if available)",
        ],
        nl: [
          "Ons meest complete rapport",
          "Prijzen van vergelijkbare woningen",
          "Energielabel (indien beschikbaar)",
        ],
      },
    },
  },
  ProductsAssessedPropertyValue: {
    buttons: {
      contactUs: { en: "Contact Us", nl: "Neem contact op" },
      clickHere: { en: " click here.", nl: " klik hier." },
    },
    title: { en: "Assessed Property Value", nl: "Getaxeerde Vastgoedwaarde" },
    subtitle: {
      en: "Ideal for accurately estimating the value of a property.",
      nl: "Ideaal voor een nauwkeurige schatting van de waarde van een woning.",
    },
    questions: { en: "What is it?", nl: "Wat is het?" },
    answer: {
      en: "The Property Value Report offers a quick and comprehensive package of property information. The report pertains to the property and the parcel linked to the requested address.Model-Based Property Value For more information about our AVM value",
      nl: "Het Vastgoedwaarderingsrapport biedt een snel en uitgebreid pakket aan vastgoedinformatie. Het rapport heeft betrekking op het pand en het perceel dat gekoppeld is aan het aangevraagde adres. Modelgebaseerde Vastgoedwaarde. Voor meer informatie over onze AVM-waarde",
    },
    list: {
      en: [
        "Latest purchase price & current model-based market value*",
        "Comparison with 10 reference properties (worth € 24.95)",
        "Cadastral map (worth € 19.95)",
        "Additional property information",
      ],
      nl: [
        "Laatste aankoopprijs en huidige modelgebaseerde marktwaarde*",
        "Vergelijking met 10 referentiewoningen (ter waarde van € 24,95)",
        "Kadastrale kaart (ter waarde van € 19,95)",
        "Extra vastgoedinformatie",
      ],
    },
    InformationIncluded: {
      heading: {
        en: "Information Included",
        nl: "Inbegrepen Informatie",
      },
      list: {
        en: [
          "Latest purchase price & current model-based market value*",
          "Comparison with 10 reference properties (worth € 24.95)",
          "Cadastral map (worth € 19.95)",
          "Additional property information",
        ],
        nl: [
          "Laatste aankoopprijs en huidige modelgebaseerde marktwaarde*",
          "Vergelijking met 10 referentiewoningen (ter waarde van € 24,95)",
          "Kadastrale kaart (ter waarde van € 19,95)",
          "Extra vastgoedinformatie",
        ],
      },
    },
    DeliveryTime: {
      heading: {
        en: "Delivery Time:",
        nl: "Levertijd:",
      },
      description: {
        en: "Less than 1 working day via email upon payment",
        nl: "Minder dan 1 werkdag via e-mail na betaling",
      },
    },
    BenefitsForBuyers: {
      heading: {
        en: "Benefits for Buyers:",
        nl: "Voordelen voor kopers:",
      },
      list: {
        en: [
          "Detailed Area Insight: Get a comprehensive overview of the requested postal code area and surrounding postal codes, covering up to 20 house numbers.",
          "Comprehensive Property Data: Access recent and historical transactions for up to 20 properties, aiding informed decision-making.",
          "Property Value Information: Receive the official WOZ value for accurate property valuation reference.",
        ],
        nl: [
          "Gedetailleerd Inzicht in het Gebied: Verkrijg een uitgebreid overzicht van het aangevraagde postcodegebied en omliggende postcodes, tot maximaal 20 huisnummers.",
          "Uitgebreide Vastgoedgegevens: Toegang tot recente en historische transacties van maximaal 20 woningen, ter ondersteuning van weloverwogen beslissingen.",
          "Vastgoedwaarderingsinformatie: Ontvang de officiële WOZ-waarde als nauwkeurige referentie voor vastgoedwaardering.",
        ],
      },
    },
  },
  ProductsValuationAnalysisReport: {
    buttons: {
      contactUs: {
        en: "Contact Us",
        nl: "Neem contact op",
      },
    },
    title: {
      en: "Property Valuation Analysis Report",
      nl: "Property Valuation Analysis Report",
    },
    subtitle: {
      en: "The Property Valuation Analysis Report offers detailed comparisons of similar properties within the same area, providing insights into the market value of a house. This report is crucial for making informed decisions on property investments by providing the estimated value of the property based on the Comparative Market Analysis (CMA) approach.",
      nl: "Het Property Valuation Analysis Report biedt gedetailleerde vergelijkingen van soortgelijke woningen in hetzelfde gebied, met inzichten in de marktwaarde van een huis. Dit rapport is cruciaal voor het nemen van geïnformeerde beslissingen over vastgoedbeleggingen door de geschatte waarde van het vastgoed te verstrekken op basis van de Comparative Market Analysis (CMA)-benadering.",
    },
    InformationIncluded: {
      heading: {
        en: "Information Included",
        nl: "Inbegrepen Informatie",
      },
      list: {
        en: [
          "Estimated property value based on the Comparative Market Analysis (CMA) approach",
          "Comparative analysis of similar properties nearby (up to 20 house numbers)",
          "Current owner",
          "Year built, volume, and area",
          "Mortgage",
          "Energy label (if definitively determined)",
        ],
        nl: [
          "Geschatte woningwaarde op basis van de Comparative Market Analysis (CMA)-benadering",
          "Vergelijkende analyse van soortgelijke woningen in de buurt (tot 20 huisnummers)",
          "Huidige eigenaar",
          "Bouwjaar, volume en oppervlakte",
          "Hypotheek",
          "Energielabel (indien definitief vastgesteld)",
        ],
      },
      note: {
        en: "Please note that the Neighborhood Comparative Analysis Report may sometimes be unavailable, and not all elements may be included in every report.",
        nl: "Houd er rekening mee dat het rapport voor buurtvergelijkingen soms niet beschikbaar kan zijn en dat niet alle elementen in elk rapport zijn opgenomen.",
      },
    },
    DeliveryTime: {
      heading: {
        en: "Delivery Time:",
        nl: "Levertijd:",
      },
      description: {
        en: "Less than 1 working day via email upon payment",
        nl: "Minder dan 1 werkdag via e-mail na betaling",
      },
    },
    BenefitsForBuyers: {
      heading: {
        en: "Benefits for Buyers:",
        nl: "Voordelen voor kopers:",
      },
      list: {
        en: [
          "Comprehensive comparison of neighborhood properties",
          "Insights into property value relative to similar homes",
          "Energy label (if available)",
        ],
        nl: [
          "Uitgebreide vergelijking van woningen in de buurt",
          "Inzichten in de woningwaarde in vergelijking met soortgelijke huizen",
          "Energielabel (indien beschikbaar)",
        ],
      },
    },
  },
  ProductsPurchasePriceInformation: {
    buttons: {
      contactUs: { en: "", nl: "Nemen contact op" },
    },
    title: {
      en: "Purchase Price Information",
      nl: "Informatie over Aankoopprijzen",
    },
    subtitle: {
      en: "Planning to buy or sell a house on a specific street? Our Transaction Overview provides you with all recent and historical sales and purchase prices of properties.",
      nl: "Van plan om een huis te kopen of verkopen in een specifieke straat? Ons Transactieoverzicht biedt u alle recente en historische verkoop- en aankoopprijzen van woningen.",
    },
    note: {
      en: "The Purchase Price Overview provides details on both recent and historical sales and corresponding purchase prices* of homes sold in the requested postal code area as well as a selection of surrounding areas. This is useful if you are planning to buy or sell a house on a specific street. You can use the Purchase Price Overview to determine or request the purchase or sale price of a house, and also analyze housing inflation. You will see the prices for which homes have been sold within the requested postal code area.",
      nl: "Het Overzicht van Aankoopprijzen biedt details over zowel recente als historische verkopen en de bijbehorende aankoopprijzen* van woningen die zijn verkocht in het aangevraagde postcodegebied, evenals een selectie van omliggende gebieden. Dit is nuttig als u van plan bent een huis te kopen of te verkopen in een specifieke straat. U kunt het Overzicht van Aankoopprijzen gebruiken om de aankoop- of verkoopprijs van een woning te bepalen of aan te vragen en om de woninginflatie te analyseren. U ziet de prijzen waarvoor woningen zijn verkocht binnen het aangevraagde postcodegebied.",
    },

    list: {
      en: [
        "Most recent and historical transactions",
        "Asking price, transaction date, year built, and property type",
        "Purchase price per square meter (based on usable area)",
      ],
      nl: [
        "Meest recente en historische transacties",
        "Vraagprijs, transactiedatum, bouwjaar en woningtype",
        "Aankoopprijs per vierkante meter (op basis van bruikbare oppervlakte)",
      ],
    },
    InformationIncluded: {
      heading: {
        en: "Information Included",
        nl: "Inbegrepen Informatie",
      },
      list: {
        en: [
          "Overview of the requested postal code area and a selection of surrounding postal codes up to 20 house numbers*",
          "Maximum of 20 house numbers",
          "Most recent and historical transactions*",
          "WOZ value of the properties*",
          "Purchase price per m² (based on usable area)",
          "Includes asking price*, transaction date, year built, and property type",
          "Direct online delivery!",
          "Transaction date, WOZ value, purchase price per m², asking price (if registered/digitalized), land area*, property volume, and year built*, as recorded in our source registers.",
          "Note: Commercial transactions (e.g., more than 5 homes) are not listed.",
        ],
        nl: [
          "Overzicht van het aangevraagde postcodegebied en een selectie van omliggende postcodes tot maximaal 20 huisnummers*",
          "Maximum van 20 huisnummers",
          "Meest recente en historische transacties*",
          "WOZ-waarde van de woningen*",
          "Aankoopprijs per m² (op basis van bruikbare oppervlakte)",
          "Inclusief vraagprijs*, transactiedatum, bouwjaar en woningtype",
          "Directe online levering!",
          "Transactiedatum, WOZ-waarde, aankoopprijs per m², vraagprijs (indien geregistreerd/gedigitaliseerd), perceeloppervlakte*, woninginhoud en bouwjaar*, zoals opgenomen in onze bronregisters.",
          "Opmerking: Commerciële transacties (bijv. meer dan 5 woningen) worden niet vermeld.",
        ],
      },
    },
    DeliveryTime: {
      heading: {
        en: "Delivery Time:",
        nl: "Levertijd:",
      },
      description: {
        en: "Less than 1 working day via email upon payment",
        nl: "Minder dan 1 werkdag via e-mail na betaling",
      },
    },
    BenefitsForBuyers: {
      heading: {
        en: "Benefits for Buyers:",
        nl: "Voordelen voor Kopers:",
      },
      list: {
        en: [
          "Detailed Area Insight: Obtain a comprehensive overview of the requested postal code area and surrounding postal codes, covering up to 20 house numbers.",
          "Comprehensive Property Data: Access up to 20 house numbers' recent and historical transactions for informed decision-making.",
          "Property Value Information: Receive the WOZ value of the properties for an official valuation reference.",
        ],
        nl: [
          "Gedetailleerd Inzicht in het Gebied: Verkrijg een uitgebreid overzicht van het aangevraagde postcodegebied en omliggende postcodes, tot maximaal 20 huisnummers.",
          "Uitgebreide Vastgoedgegevens: Toegang tot recente en historische transacties van maximaal 20 huisnummers voor weloverwogen besluitvorming.",
          "Vastgoedwaarderingsinformatie: Ontvang de WOZ-waarde van de woningen voor een officiële taxatiereferentie.",
        ],
      },
    },
  },
  consultancy: {
    title: { en: "Consultancy", nl: "Consultancy" },
    description: {
      en: "At Fushion AI, we offer tailored consultancy services to support our clients in navigating the complexities of the real estate market. As a tech-driven company, we combine our expertise in advanced analytics, artificial intelligence, and market trends to deliver actionable insights and customized solutions. Whether you're a property investor, developer, or real estate professional, our consultancy services are designed to empower you with data-driven strategies, enabling you to make informed decisions and maximize returns. Together, we ensure you stay ahead in the competitive real estate landscape.",
      nl: "Bij Fushion AI bieden we op maat gemaakte consultancy-diensten om onze klanten te ondersteunen bij het navigeren door de complexiteiten van de vastgoedmarkt. Als tech-gedreven bedrijf combineren we onze expertise in geavanceerde analyses, kunstmatige intelligentie en markttrends om bruikbare inzichten en op maat gemaakte oplossingen te leveren. Of u nu een vastgoedinvesteerder, ontwikkelaar of vastgoedprofessional bent, onze consultancy-diensten zijn erop gericht u te versterken met data-gedreven strategieën, zodat u weloverwogen beslissingen kunt nemen en uw rendement kunt maximaliseren. Samen zorgen we ervoor dat u een stap voor blijft in de concurrerende vastgoedmarkt.",
    },
  },
  // Our Project Modal
  Project: {
    title: {
      en: "Our Projects",
      nl: "Onze Projecten",
    },
  },
  ProjectModal: {
    Header: {
      en: "Coming Soon: Exciting New Projects!",
      nl: "Binnenkort: Spannende Nieuwe Projecten!",
    },
    Body: {
      en: "Big things are on the way! We’re gearing up to launch a series of innovative projects designed to inspire and impress. From cutting-edge technology to fresh, bold ideas, there’s something for everyone. Stay tuned for updates, we can't wait to share what’s next!",
      nl: "Er komen grote dingen aan! We zijn bezig met de lancering van een reeks innovatieve projecten die bedoeld zijn om te inspireren en indruk te maken. Van baanbrekende technologie tot frisse, gedurfde ideeën, er is voor ieder wat wils. Blijf op de hoogte van updates, we kunnen niet wachten om te delen wat er komen gaat!",
    },
    Footer: {
      CloseButton: {
        en: "Close",
        nl: "Sluiten",
      },
    },
  },
  // About Us Page
  AboutUs: {
    title: {
      en: "About Us",
      nl: "Over Ons",
    },
    description: {
      en: "We are a rapidly growing tech startup specializing in artificial intelligence solutions for the real estate sector. Our young and dynamic team is dedicated to revolutionizing the industry through innovative AI-driven technologies. With a focus on delivering cutting-edge solutions, we aim to transform the way real estate professionals operate and make data-driven decisions. Our small but highly skilled team thrives on collaboration and creativity, pushing the boundaries of what's possible in the real estate market.",
      nl: "Wij zijn een snelgroeiende tech-startup die gespecialiseerd is in oplossingen met kunstmatige intelligentie voor de vastgoedsector. Ons jonge en dynamische team is toegewijd aan het revolutioneren van de industrie door middel van innovatieve AI-gedreven technologieën. Met een focus op het leveren van baanbrekende oplossingen, streven we ernaar om de manier waarop vastgoedprofessionals werken te transformeren en data-gedreven beslissingen te nemen. Ons kleine maar zeer bekwame team bloeit op samenwerking en creativiteit, en verlegt de grenzen van wat mogelijk is op de vastgoedmarkt.",
    },
  },
  AboutUsValues: {
    title: {
      en: "Our Values",
      nl: "Onze Waarden",
    },
    values: [
      {
        title: {
          en: "Innovation",
          nl: "Innovatie",
        },
        description: {
          en: "We continuously strive to develop cutting-edge AI solutions that push the boundaries of technology in the real estate sector.",
          nl: "We streven er continu naar om baanbrekende AI-oplossingen te ontwikkelen die de grenzen van technologie in de vastgoedsector verleggen.",
        },
      },
      {
        title: {
          en: "Collaboration",
          nl: "Samenwerking",
        },
        description: {
          en: "Our success is driven by a team-oriented approach, fostering creativity and synergy within our small and dynamic team.",
          nl: "Ons succes wordt gedreven door een teamgerichte aanpak, waarbij creativiteit en synergie binnen ons kleine en dynamische team worden gestimuleerd.",
        },
      },
      {
        title: {
          en: "Excellence",
          nl: "Uitmuntendheid",
        },
        description: {
          en: "We are committed to delivering the highest quality products and services, ensuring our clients achieve optimal results through data-driven decision-making.",
          nl: "We zetten ons in om producten en diensten van de hoogste kwaliteit te leveren, zodat onze klanten optimale resultaten behalen door middel van data-gedreven besluitvorming.",
        },
      },
    ],
  },
  AboutUsMissionVision: {
    title: {
      en: "Mission and Vision for Fushion AI",
      nl: "Missie en Visie voor Fushion AI",
    },
    mission: {
      title: {
        en: "Mission",
        nl: "Missie",
      },
      description: {
        en: "At Fushion AI, our mission is to revolutionize the real estate industry by delivering innovative, AI-driven solutions that empower professionals to make data-driven decisions. We aim to simplify and enhance the way real estate operates, creating opportunities for growth and efficiency through cutting-edge technology.",
        nl: "Bij Fushion AI is het onze missie om de vastgoedsector te revolutioneren door innovatieve, AI-gedreven oplossingen te leveren die professionals in staat stellen data-gedreven beslissingen te nemen. Wij streven ernaar om vastgoedprocessen te vereenvoudigen en te verbeteren, en zo groei en efficiëntie te bevorderen door middel van baanbrekende technologie.",
      },
    },
    vision: {
      title: {
        en: "Vision",
        nl: "Visie",
      },
      description: {
        en: "Our vision is to become the leading force in technological innovation within the real estate sector. By pushing the boundaries of AI, we strive to create a future where real estate decisions are smarter, faster, and more efficient, fostering collaboration, creativity, and sustainable growth for all stakeholders.",
        nl: "Onze visie is om de toonaangevende kracht in technologische innovatie binnen de vastgoedsector te worden. Door de grenzen van AI te verleggen, streven we naar een toekomst waarin vastgoedbeslissingen slimmer, sneller en efficiënter zijn, en waarin samenwerking, creativiteit en duurzame groei voor alle belanghebbenden worden bevorderd.",
      },
    },
  },
  //  Page
  Contact: {
    title: {
      en: "Contact",
      nl: "Contact",
    },
    ContactInfo: {
      title: {
        en: "Contact info:",
        nl: "Contactinformatie:",
      },
      description: {
        en: "For general inquiries and support, please email us at",
        nl: "Voor algemene vragen en ondersteuning kunt u ons e-mailen op:",
      },
      emailLabel: {
        en: "You can reach our customer service via WhatsApp",
        nl: "U kunt onze klantenservice bereiken via WhatsApp:",
      },
      workingHours: {
        en: "Monday - Friday, 9:00 AM - 6:00 PM",
        nl: "Maandag - Vrijdag, 9:00 uur - 18:00 uur",
      },
    },
    Form: {
      firstNamePlaceholder: {
        en: "First name",
        nl: "Voornaam",
      },
      lastNamePlaceholder: {
        en: "Last name",
        nl: "Achternaam",
      },
      emailPlaceholder: {
        en: "Email",
        nl: "E-mail",
      },
      phonePlaceholder: {
        en: "Phone (optional)",
        nl: "Telefoon (optioneel)",
      },
      companyName: {
        en: "Company Name",
        nl: "Bedrijfsnaam",
      },
      messagePlaceholder: {
        en: "Message",
        nl: "Bericht",
      },
      sendButton: {
        en: "Send",
        nl: "Verzenden",
      },
      sendingButton: {
        en: "sending...",
        nl: "Verzenden",
      },
      errorMessage: {
        firstName: {
          en: "First Name is required",
          nl: "Voornaam is vereist",
        },
        lastName: {
          en: "Last Name is required",
          nl: "Achternaam is vereist",
        },
        email: {
          en: "Email is required",
          nl: "E-mail is vereist",
        },
        validEmail: {
          en: "Please enter a valid email address",
          nl: "Voer een geldig e-mailadres in",
        },
        company: {
          en: "Company is required",
          nl: "Bedrijfsnaam is vereist",
        },
        message: {
          en: "Message is required",
          nl: "Bericht is vereist",
        },
      },
    },
  },
  Footer: {
    heading: {
      en: "Innovating Real Estate with AI Precision",
      nl: "Innovatie in vastgoed met AI-precisie",
    },
    rights: { en: " All rights reserved", nl: " Alle rechten voorbehouden" },
    privacyPolicy: { en: "Privacy Policy", nl: "Privacybeleid" },
    termsAndConditions: { en: "Terms and Conditions", nl: "Terms & Condition" },
    CookiePolicy: { en: "Cookie Policy", nl: "Cookies beleid" },
  },
};
