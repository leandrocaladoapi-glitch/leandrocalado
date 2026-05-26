export type Language = "pt" | "en" | "es" | "fr" | "it" | "ja";

export interface TranslationDict {
  navbar: {
    about: string;
    ecosystem: string;
    books: string;
    articles: string;
    trajectory: string;
    cta: string;
  };
  hero: {
    tagline: string;
    headline: string;
    headlineAlt: string;
    subheadline: string;
    ctaLibrary: string;
    ctaEcosystem: string;
    verified: string;
    quote: string;
    published: string;
    newsletter: string;
    publishedArticles: string;
    workingLanguages: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    domainTitle: string;
    governanceBadge: string;
    mbaTitle: string;
    mbaField: string;
    skills: string[];
  };
  ecosystem: {
    badge: string;
    title: string;
    desc: string;
    verifiedDomain: string;
    intersectionTitle: string;
    intersectionDesc: string;
    ctaLibrary: string;
  };
  books: {
    badge: string;
    title: string;
    desc: string;
    searchPlaceholder: string;
    all: string;
    ai: string;
    data: string;
    automation: string;
    law: string;
    international: string;
    footerText1: string;
    footerText2: string;
    footerText3: string;
  };
  articles: {
    badge: string;
    title: string;
    desc: string;
    all: string;
    views: string;
    claps: string;
    readCta: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterCta: string;
  };
  timeline: {
    badge: string;
    title: string;
    desc: string;
    all: string;
    academic: string;
    professional: string;
    academicTag: string;
    professionalTag: string;
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    b2bTitle: string;
    b2bDesc: string;
    b2bCta: string;
    workshopsTitle: string;
    workshopsDesc: string;
    workshopsCta: string;
  };
  footer: {
    about: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  pt: {
    navbar: {
      about: "Sobre",
      ecosystem: "Ecossistema",
      books: "Biblioteca",
      articles: "Artigos",
      trajectory: "Trajetória",
      cta: "Consultoria",
    },
    hero: {
      tagline: "São Paulo, Brasil • Engenheiro de Dados & Autor Técnico",
      headline: "Tecnologia, dados e ",
      headlineAlt: "inteligência artificial aplicados sob rigor técnico e compliance.",
      subheadline: "Arquiteto de Posicionamento Técnico, Engenheiro de Dados e Bacharel em Direito. Uma conexão estratégica estruturada para o desenvolvimento de agentes seguros em infraestruturas e ambientes de conformidade produtiva.",
      ctaLibrary: "Ver Biblioteca Completa",
      ctaEcosystem: "Explorar Ecossistema",
      verified: "Lattes Verificado",
      quote: "\"Agentes de IA funcionais não exigem doutorado. Exigem arquitetura sólida, governança estruturada e dados confiáveis.\"",
      published: "Livros Publicados na Amazon KDP",
      newsletter: "Assinantes na Newsletter Medium",
      publishedArticles: "Artigos Publicados no Jusbrasil",
      workingLanguages: "Idiomas de Atuação",
    },
    about: {
      badge: "Biografia Estratégica",
      title: "Uma trajetória construída por execução estruturada, estudo técnico rigoroso e publicação contínua.",
      p1: "Leandro Calado Ferreira construiu um ecossistema de autoridade raro e difícil de copiar. Iniciou sua jornada intelectual desvendando teorias de geopolítica e dependências industriais nas relações internacionais e consolidando seu arcabouço normativo formal no Direito.",
      p2: "Ao cruzar essas perspectivas para a vanguarda corporativa acelerada, emergiu na engenharia de dados em nuvem. Hoje, como fundador da LCF Consulting, desenha, desenvolve e implanta sistemas integrados de Big Data, barramentos analíticos de alta vazão e arquiteturas estáveis sobre AWS, Azure e Databricks.",
      p3: "A grande virada ocorre na orquestração de agentes de Inteligência Artificial em produção. Especializando-se no Model Context Protocol (MCP) e na contenção prática de riscos críticos (como vazamentos regulatórios e a injeção indireta de prompts em documentos jurídicos), Leandro opera no nicho da IA funcional e auditável.",
      p4: "O reflexo de sua exaustiva produção não se apoia sob teorias sem validação: transborda em dezenas de ensaios e modelos práticos no Jusbrasil e Medium e na impressionante marca de mais de 100 manuais técnicos de excelência de sua autoria ativa na Amazon KDP.",
      domainTitle: "Território e Domínio Técnico Verificado",
      governanceBadge: "Foco na Governança e LGPD",
      mbaTitle: "MBA USP - Classificação de Risco de Decisão",
      mbaField: "Pesquisa avançada dedicada ao processamento de algoritmos de árvore de decisão aplicados à privacidade e compliance LGPD corporativos de dados.",
      skills: ["Model Context Protocol (MCP)", "Engenharia de Dados & Cloud (AWS/Azure/Databricks)", "Compliance de IA e Proteção de Dados (LGPD/GDPR)", "Governança e Segurança em LLMs", "Automação Inteligente (n8n/Python AI)", "Geopolítica & Regulação de Transportes"],
    },
    ecosystem: {
      badge: "REDE INTEGRADORA",
      title: "Eixos do Ecossistema de Autoridade",
      desc: "A autoridade de Leandro Calado não assenta em um único nicho restrito, mas em uma engrenagem de domínios avançados que se alimentam e geram valor analítico recíproco.",
      verifiedDomain: "Domínio Validado",
      intersectionTitle: "Intersecção de Desempenho: IA aplicada + Compliance Regulatório",
      intersectionDesc: "Dois terços das unidades de seus livros correspondem a agentes de IA, n8n, MCP e Python AI. Isso comprova que Leandro entende o que o ecossistema quer e entrega soluções factíveis e auditadas.",
      ctaLibrary: "Ver Biblioteca Completa",
    },
    books: {
      badge: "Biblioteca Técnica KDP",
      title: "116 Títulos Publicados na Amazon",
      desc: "Material prático focado em resolver problemas estruturados de engenharia de dados e sistemas inteligentes em produção, organizados em trilhas temáticas de conversão.",
      searchPlaceholder: "Buscar livro...",
      all: "Todos",
      ai: "Agentes de IA",
      data: "Dados & Nuvem",
      automation: "Automação",
      law: "Direito & Gov",
      international: "Internacional",
      footerText1: "Mostrando",
      footerText2: "de",
      footerText3: "títulos mapeados • Ver perfil completo de autor na Amazon",
    },
    articles: {
      badge: "Artigos & Ensaios Autorais",
      title: "Presença Editorial de Longo Alcance",
      desc: "Explorando temas complexos que costuram riscos de vazamento de dados, cookies, Model Context Protocol e prompt injection estratégico tanto no judiciário quanto nas engenharias privadas.",
      all: "Todas as Redes",
      views: "visualizações",
      claps: "palmas",
      readCta: "Ler artigo original",
      newsletterTitle: "Newsletter: Lawtech and Legaltech",
      newsletterDesc: "Leandro assina e edita uma publicação em seu perfil do LinkedIn. Com 1.556 leitores inscritos, debate mensalmente proteção de dados corporativos avançada e a transformação digital aplicada sob rigor institucional.",
      newsletterCta: "Assinar no LinkedIn",
    },
    timeline: {
      badge: "HISTÓRICO ACADÊMICO & PROFISSIONAL",
      title: "Uma Trajetória Multidisciplinar Segura",
      desc: "Dos estudos geopolíticos clássicos às modelagens aplicadas de engenharia de dados. Conectando disciplinas que operam sob responsabilidade civil e robustez tecnológica.",
      all: "Histórico Completo",
      academic: "Acadêmico",
      professional: "Profissional",
      academicTag: "Acadêmico",
      professionalTag: "Profissional",
    },
    contact: {
      badge: "CONVITES & OPORTUNIDADES",
      title: "Vamos Construir Algo Sólido Juntos?",
      desc: "Seja para desenhar uma esteira de dados analítica auditada ou blindar seus fluxos de IA de riscos regulatórios, aproveite para estabelecer contato de forma premium.",
      b2bTitle: "Contratar Consultoria B2B",
      b2bDesc: "Análise de arquiteturas de dados, pipelines na AWS/Azure ou desenho de barramentos de automação de processos inteligentes baseados em MCP e n8n.",
      b2bCta: "Falar com a LCF Consulting",
      workshopsTitle: "Projetos, Aulas & Conteúdo",
      workshopsDesc: "Gostaria de convidar o Leandro para ministrar workshops corporativos, submeter artigos científicos, gravar conteúdos técnicos ou podcasts?",
      workshopsCta: "Enviar Convite Direto",
    },
    footer: {
      about: "Engenheiro de Dados • Bacharel em Direito • Autor Técnico Internacional",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    navbar: {
      about: "About",
      ecosystem: "Ecosystem",
      books: "Library",
      articles: "Articles",
      trajectory: "Career",
      cta: "Consulting",
    },
    hero: {
      tagline: "São Paulo, Brazil • Data Engineer & Technical Author",
      headline: "Technology, data and ",
      headlineAlt: "artificial intelligence applied under solid technical rigor and compliance.",
      subheadline: "Technical Placement Architect, Data Engineer, and Bachelor of Laws. A strategic connection structured for the development of secure agents in robust compliance and production environments.",
      ctaLibrary: "View Full Library",
      ctaEcosystem: "Explore Ecosystem",
      verified: "Verified Lattes",
      quote: "\"Functional AI agents do not require a PhD. They require solid architecture, structured governance, and reliable data.\"",
      published: "Published Books on Amazon KDP",
      newsletter: "Subscribers on Medium Newsletter",
      publishedArticles: "Published Articles on Jusbrasil",
      workingLanguages: "Active Languages",
    },
    about: {
      badge: "Strategic Biography",
      title: "A career built on structured execution, rigorous technical study, and continuous publication.",
      p1: "Leandro Calado Ferreira has built a rare and highly defensible ecosystem of authority. He began his intellectual journey by unraveling theories of geopolitics and industrial dependencies in international relations, while establishing his formal regulatory framework in Law.",
      p2: "By crossing these perspectives into the accelerated corporate forefront, he emerged in cloud data engineering. Today, as founder of LCF Consulting, he designs, develops, and deploys integrated Big Data systems, high-throughput analytical integration layers, and stable cloud architectures across AWS, Azure, and Databricks.",
      p3: "The major breakthrough lies in orchestrating production-grade AI agents. Specializing in the Model Context Protocol (MCP) and the practical mitigation of critical risks (such as regulatory leakage and indirect prompt injection in legal documents), Leandro operates in the niche of functional and auditable AI.",
      p4: "The reflection of his extensive output is not based on unvalidated theories: it translates into dozens of practical essays and models on Jusbrasil and Medium, and the impressive achievement of more than 100 technical manuals of excellence active under his authorship on Amazon KDP.",
      domainTitle: "Verified Territory & Technical Expertise",
      governanceBadge: "Governance & Privacy Focus (LGPD)",
      mbaTitle: "MBA USP - Decision Risk Classification",
      mbaField: "Advanced research dedicated to the processing of decision tree algorithms applied to corporate privacy and data compliance guidelines.",
      skills: ["Model Context Protocol (MCP)", "Data Engineering & Cloud (AWS/Azure/Databricks)", "AI Compliance & Data Protection (LGPD/GDPR)", "LLM Governance & Security Protocols", "Intelligent Automation (n8n/Python AI)", "Geopolitics & Transportation Regulation"],
    },
    ecosystem: {
      badge: "INTEGRATION SYSTEM",
      title: "Axes of the Ecosystem of Authority",
      desc: "Leandro Calado's authority does not rest on a single restricted niche, but on a gear of advanced domains that complement and feed each other, generating reciprocal analytical value.",
      verifiedDomain: "Validated Domain",
      intersectionTitle: "Performance Integration: Applied AI + Regulatory Compliance",
      intersectionDesc: "Two-thirds of his published books focus on AI Agents, n8n, MCP, and Python AI. This demonstrates that Leandro understands what the market needs and delivers practical, fully audited solutions.",
      ctaLibrary: "View Full Library",
    },
    books: {
      badge: "KDP Technical Library",
      title: "116 Titles Published on Amazon",
      desc: "Hands-on material focused on solving structured data engineering problems and intelligent systems in production, organized in conversion-driven themes.",
      searchPlaceholder: "Search book...",
      all: "All",
      ai: "AI Agents",
      data: "Data & Cloud",
      automation: "Automation",
      law: "Law & Gov",
      international: "International Focus",
      footerText1: "Showing",
      footerText2: "of",
      footerText3: "mapped titles • View full author profile on Amazon",
    },
    articles: {
      badge: "Articles & Editorial Essays",
      title: "Wide-Reaching Editorial Presence",
      desc: "Exploring complex subjects around privacy, data leak risks, active cookie policies, Model Context Protocol, and strategic indirect prompt injection within corporate systems.",
      all: "All Networks",
      views: "views",
      claps: "claps",
      readCta: "Read original article",
      newsletterTitle: "Newsletter: Lawtech and Legaltech",
      newsletterDesc: "Leandro edits and hosts a regular newsletter on LinkedIn. With over 1,556 active subscribers, he debates advanced enterprise data protection, compliance, and industrial digitalization.",
      newsletterCta: "Subscribe on LinkedIn",
    },
    timeline: {
      badge: "ACADEMIC & PROFESSIONAL TIMELINE",
      title: "A Secure Multidisciplinary Path",
      desc: "From classical geopolitical studies to applied data engineering structures. Connecting fields that operate under technical robustness and civil liability.",
      all: "Full Career Pathway",
      academic: "Academic",
      professional: "Professional",
      academicTag: "Academic",
      professionalTag: "Professional",
    },
    contact: {
      badge: "INVITATIONS & PARTNERSHIPS",
      title: "Let's Build Something Solid Together?",
      desc: "Whether of designing a robust audited data pipeline or guarding your AI workflows from critical security risks, feel free to establish premium contact.",
      b2bTitle: "Book B2B Consulting",
      b2bDesc: "Enterprise architecture reviews, pipelines on AWS/Azure, or high-throughput workflow builds with advanced MCP and n8n layers.",
      b2bCta: "Connect with LCF Consulting",
      workshopsTitle: "Projects, Keynotes & Content",
      workshopsDesc: "Would you like to invite Leandro to deliver corporate workshops, submit scientific reviews, record technical modules, or host podcasts?",
      workshopsCta: "Send Direct Invitation",
    },
    footer: {
      about: "Data Engineer • Bachelor of Laws • International Technical Author",
      rights: "All rights reserved.",
    },
  },
  es: {
    navbar: {
      about: "Sobre mí",
      ecosystem: "Ecosistema",
      books: "Biblioteca",
      articles: "Artículos",
      trajectory: "Trayectoria",
      cta: "Consultoría",
    },
    hero: {
      tagline: "São Paulo, Brasil • Ingeniero de Datos & Autor Técnico",
      headline: "Tecnología, datos e ",
      headlineAlt: "inteligencia artificial aplicados bajo un riguroso estándar técnico y cumplimiento normativo.",
      subheadline: "Arquitecto de Posicionamiento Técnico, Ingeniero de Datos y Licenciado en Derecho. Una conexión estratégica estructurada para el desarrollo de agentes seguros en infraestructuras y entornos de cumplimiento productivo.",
      ctaLibrary: "Ver Biblioteca Completa",
      ctaEcosystem: "Explorar Ecosistema",
      verified: "Lattes Verificado",
      quote: "\"Los agentes de IA funcionales no requieren un doctorado. Requieren una arquitectura sólida, gobernanza estructurada y datos confiables.\"",
      published: "Libros Publicados en Amazon KDP",
      newsletter: "Suscriptores en el boletín de Medium",
      publishedArticles: "Artículos Publicados en Jusbrasil",
      workingLanguages: "Idiomas de Trabajo",
    },
    about: {
      badge: "Biografía Estratégica",
      title: "Una trayectoria construida a través de la ejecución estructurada, estudio técnico riguroso y publicación continua.",
      p1: "Leandro Calado Ferreira ha construido un ecosistema de autoridad extraordinario y difícil de duplicar. Inició su camino intelectual descifrando teorías de geopolítica y dependencias industriales en las relaciones internacionales, consolidando su marco de gobernanza normativa en el Derecho.",
      p2: "Al cruzar estas visiones hacia el acelerado frente corporativo, emergió en la ingeniería de datos en la nube. Hoy, como fundador de LCF Consulting, diseña, desarrolla e implementa sistemas de Big Data integrados, flujos analíticos de alto rendimiento y arquitecturas en la nube en AWS, Azure y Databricks.",
      p3: "La gran evolución ocurre en la orquestación de agentes de Inteligencia Artificial en producción. Especializándose en el Model Context Protocol (MCP) y el control de riesgos críticos (como fugas regulatorias e inyección indirecta de prompts en documentos legales), Leandro se posiciona en el nicho de la IA funcional y auditable.",
      p4: "El reflejo de su alta productividad técnica no reside en simples teorías: se traduce en decenas de ensayos en Jusbrasil y Medium, y en el logro sobresaliente de más de 100 manuales técnicos de excelencia activos de su autoría en Amazon KDP.",
      domainTitle: "Territorio Técnico y Especialidad Verificada",
      governanceBadge: "Foco en Gobernanza y LGPD/GDPR",
      mbaTitle: "MBA USP - Clasificación de Riesgo de Decisiones",
      mbaField: "Investigación avanzada dedicada al análisis de algoritmos de decisión adaptados a la privacidad empresarial y marcos de protección de datos.",
      skills: ["Model Context Protocol (MCP)", "Ingeniería de Datos e Infraestructura Nube (AWS/Azure)", "Cumplimiento normativo de IA y Datos (LGPD/GDPR)", "Gobernanza y Seguridad en LLMs", "Automatización Inteligente (n8n/Python AI)", "Geopolítica y Regulación de Transportes"],
    },
    ecosystem: {
      badge: "RED INTEGRAL DE TRABAJO",
      title: "Ejes del Ecosistema de Autoridad",
      desc: "La autoridad de Leandro Calado no se apoya en un solo nicho aislado, sino en una red de dominios avanzados que se complementan e impulsan mutuamente con valor recíproco.",
      verifiedDomain: "Dominio Validado",
      intersectionTitle: "Intersección de Alto Impacto: IA Aplicada + Cumplimiento Normativo",
      intersectionDesc: "Dos tercios de sus manuales abordan Agentes de IA, n8n, MCP y Python AI. Esto demuestra que Leandro comprende las necesidades del mercado y entrega soluciones prácticas y auditarles.",
      ctaLibrary: "Ver Biblioteca Completa",
    },
    books: {
      badge: "Biblioteca Técnica KDP",
      title: "116 Títulos Publicados en Amazon",
      desc: "Material práctico enfocado en resolver problemas estructurados de ingeniería de datos y sistemas inteligentes con implementación de vanguardia.",
      searchPlaceholder: "Buscar libro...",
      all: "Todos",
      ai: "Agentes de IA",
      data: "Datos y Nube",
      automation: "Automatización",
      law: "Derecho y Gob",
      international: "Internacional",
      footerText1: "Mostrando",
      footerText2: "de",
      footerText3: "títulos mapeados • Perfil completo de autor en Amazon",
    },
    articles: {
      badge: "Artículos y Ensayos Editoriales",
      title: "Presencia Editorial de Gran Alcance",
      desc: "Explorando temas complejos de seguridad de datos, regulación activa del consentimiento, Model Context Protocol e inyecciones de prompts en entornos corporativos.",
      all: "Todas las Redes",
      views: "visitas",
      claps: "aplausos",
      readCta: "Leer artículo original",
      newsletterTitle: "Boletín: Lawtech and Legaltech",
      newsletterDesc: "Leandro edita y publica periódicamente en LinkedIn. Con 1.556 lectores activos, debate la protección de datos e innovaciones bajo el rigor de altos parámetros institucionales.",
      newsletterCta: "Suscribirse en LinkedIn",
    },
    timeline: {
      badge: "HISTORIAL ACADÉMICO Y PROFESIONAL",
      title: "Una Trayectoria Multidisciplinar Sólida",
      desc: "Desde la teoría geopolítica clásica hasta las arquitecturas analíticas avanzadas. Conectando áreas de responsabilidad civil y rigor de software.",
      all: "Trayectoria Completa",
      academic: "Académico",
      professional: "Profesional",
      academicTag: "Académico",
      professionalTag: "Profesional",
    },
    contact: {
      badge: "INVITACIONES & ALIANZAS",
      title: "¿Construimos un Proyecto Sólido Juntos?",
      desc: "Sea para diseñar una arquitectura de datos corporativa auditable o para securizar sus modelos de IA frente a riesgos complejos, inicie un contacto estratégico.",
      b2bTitle: "Contratar Consultoría B2B",
      b2bDesc: "Revisión técnica de flujos analíticos, optimizaciones e infraestructura en AWS/Azure o automatización ágil basada en MCP y n8n.",
      b2bCta: "Contactar LCF Consulting",
      workshopsTitle: "Proyectos, Conferencias y Clases",
      workshopsDesc: "¿Desea invitar a Leandro a dictar seminarios técnicos, colaborar en artículos, estructurar módulos de formación o en podcasts?",
      workshopsCta: "Enviar Invitación Directa",
    },
    footer: {
      about: "Ingeniero de Datos • Licenciado en Derecho • Autor Técnico Internacional",
      rights: "Todos los derechos reservados.",
    },
  },
  fr: {
    navbar: {
      about: "À propos",
      ecosystem: "Écosystème",
      books: "Bibliothèque",
      articles: "Articles",
      trajectory: "Parcours",
      cta: "Conseil",
    },
    hero: {
      tagline: "São Paulo, Brésil • Ingénieur de Données & Auteur Technique",
      headline: "Technologie, données et ",
      headlineAlt: "intelligence artificielle appliquées sous une rigueur technique et une conformité absolue.",
      subheadline: "Architecte de Positionnement Technique, Ingénieur de Données et Licencié en Droit. Une synergie stratégique structurée pour le déploiement d'agents autonomes sécurisés au sein d'environnements réglementaires.",
      ctaLibrary: "Voir la Bibliothèque",
      ctaEcosystem: "Explorer l'Écosystème",
      verified: "Lattes Vérifié",
      quote: "\"Les agents d'IA transactionnels n'exigent pas un doctorat. Ils nécessitent une architecture robuste, une gouvernance claire et des données fiables.\"",
      published: "Livres Publiés sur Amazon KDP",
      newsletter: "Abonnés à la Newsletter Medium",
      publishedArticles: "Articles Publiés sur Jusbrasil",
      workingLanguages: "Langues de Performance",
    },
    about: {
      badge: "Biographie Stratégique",
      title: "Un parcours ancré dans l'exécution de précision, l'étude académique rigoureuse et la production littéraire.",
      p1: "Leandro Calado Ferreira a façonné un écosystème d'autorité unique et hautement structuré. Il a débuté son cursus par l'étude des théories géopolitiques complexes et des dépendances de transport dans les relations internationales, avant de consolider sa rigueur constitutionnelle en Droit.",
      p2: "En adaptant ces savoirs aux besoins technologiques du monde industriel, il s'est dirigé vers l'ingénierie des données cloud. En tant que fondateur de LCF Consulting, il conçoit et orchestre des pipelines de Big Data, des environnements analytiques à haut débit et des architectures résilientes sur AWS, Azure et Databricks.",
      p3: "Son expertise clé repose désormais sur les agents d'Intelligence Artificielle en production. Spécialisé dans le Model Context Protocol (MCP) et la mitigation proactive des cyber-risques (fuite de données, injection indirecte de prompts dans des documents juridiques), Leandro pilote une IA pragmatique et auditable.",
      p4: "La preuve de cette immense production littéraire ne repose pas sur de simples théories, mais sur des dizaines d'essais sur Jusbrasil et Medium, et l'édition active de plus de 100 manuels techniques en édition internationale sur Amazon KDP.",
      domainTitle: "Compétences Avancées & Maîtrise Validée",
      governanceBadge: "Focus Gouvernance et Protection (GDPR)",
      mbaTitle: "MBA USP - Classification des Risques Décisionnels",
      mbaField: "Recherche scientifique dédiée à l'utilisation d'algorithmes de décision appliqués à la conformité de la vie privée en entreprise.",
      skills: ["Model Context Protocol (MCP)", "Ingénierie de Données & Cloud (AWS/Azure/Databricks)", "Conformité d'IA et Protection des Données (LGPD/GDPR)", "Sécurité et Gouvernance des LLMs", "Automatisation Intelligente (n8n/Python AI)", "Géopolitique & Réglementation Ferroviaire/Aérienne"],
    },
    ecosystem: {
      badge: "RÉSEAU D'INTÉGRATION",
      title: "Piliers de l'Écosystème d'Autorité",
      desc: "L'expertise de Leandro ne s'arrête pas à une discipline isolée, mais forme un moteur d'expertises transversales qui se renforcent mutuellement pour générer de la performance.",
      verifiedDomain: "Domaine Validé",
      intersectionTitle: "Jonction Stratégique : IA Appliquée + Rigueur Réglementaire",
      intersectionDesc: "La majorité de ses ouvrages est axée sur les Agents IA, n8n, MCP et Python AI. Cela démontre que Leandro répond directement aux besoins réels de l'industrie avec des architectures conformes.",
      ctaLibrary: "Consulter la Bibliothèque",
    },
    books: {
      badge: "Bibliothèque Technique KDP",
      title: "116 Titres Publiés sur Amazon",
      desc: "Guides pragmatiques pour ingénieurs de données et intégrateurs de solutions logicielles orientées IA, conçus pour le déploiement en production.",
      searchPlaceholder: "Rechercher...",
      all: "Tous",
      ai: "Agents IA",
      data: "Données & Cloud",
      automation: "Automatisation",
      law: "Droit & Gov",
      international: "International",
      footerText1: "Affichage de",
      footerText2: "sur",
      footerText3: "titres mappés • Voir le profil sur Amazon",
    },
    articles: {
      badge: "Articles & Analyses Médias",
      title: "Une Empreinte Éditoriale Forte",
      desc: "Investigations sur la sécurité des données, règles de gestion des consentements de cookies, Model Context Protocol et risques face aux injections indirectes au sein des écosystèmes d'affaires.",
      all: "Tous les Réseaux",
      views: "lectures",
      claps: "mentions j'aime",
      readCta: "Lire l'article original",
      newsletterTitle: "Newsletter: Lawtech and Legaltech",
      newsletterDesc: "Leandro publie une lettre d'information sur LinkedIn. Suivi par 1 556 abonnés, il y décrypte les architectures de données et la digitalisation sous l'angle du droit comparé.",
      newsletterCta: "S'abonner sur LinkedIn",
    },
    timeline: {
      badge: "CHRONOLOGIE ACADÉMIQUE & CARRIÈRE",
      title: "Un Parcours d'Excellence Pluridisciplinaire",
      desc: "Des fondamentaux géopolitiques aux implémentations avancées de pipelines de Big Data rattachées à la responsabilité civile des algorithmes.",
      all: "Parcours Complet",
      academic: "Secteur Académique",
      professional: "Secteur Professionnel",
      academicTag: "Académique",
      professionalTag: "Professionnel",
    },
    contact: {
      badge: "INVITATIONS & COLLABORATIONS",
      title: "Créons une Solution Durable Ensemble",
      desc: "Que vous ayez besoin d'auditer vos architectures de données complexes ou d'immuniser vos agents IA contre les vulnérabilités de prompt, établissons le contact.",
      b2bTitle: "Prendre un Conseil B2B",
      b2bDesc: "Évaluation de flux complexes, optimisation de pipelines Azure/AWS ou conception d'automatisations de pointe avec MCP et n8n.",
      b2bCta: "Solliciter LCF Consulting",
      workshopsTitle: "Projets, Conférences et Enseignement",
      workshopsDesc: "Vous souhaitez organiser des conférences privées, collaborer à des revues spécialisées, intégrer Leandro à vos modules de cours ou podcasts ?",
      workshopsCta: "Envoyer une Demande Directe",
    },
    footer: {
      about: "Ingénieur de Données • Licencié en Droit • Auteur Technique International",
      rights: "Tous droits réservés.",
    },
  },
  it: {
    navbar: {
      about: "Chi Sono",
      ecosystem: "Ecosistema",
      books: "Biblioteca",
      articles: "Articoli",
      trajectory: "Percorso",
      cta: "Consulenza",
    },
    hero: {
      tagline: "San Paolo, Brasile • Data Engineer & Autore Tecnico",
      headline: "Tecnologia, dati e ",
      headlineAlt: "intelligenza artificiale applicati con rigore tecnico e conformità legale.",
      subheadline: "Architetto di Posizionamento Tecnico, Ingegnere dei Dati e Laureato in Giurisprudenza. Un presidio scientifico atto a garantire la conformità e la sicurezza di agenti intelligenti in infrastrutture complesse.",
      ctaLibrary: "Vedi Biblioteca Completa",
      ctaEcosystem: "Esplora l'Ecosistema",
      verified: "Lattes Verificato",
      quote: "\"Gli agenti di IA funzionali non richiedono un dottorato. Esigono architetture solide, governance strutturata e basi dati di alta fedeltà.\"",
      published: "Libri Pubblicati su Amazon KDP",
      newsletter: "Iscritti alla Newsletter Medium",
      publishedArticles: "Articoli Pubblicati su Jusbrasil",
      workingLanguages: "Lingue Operative",
    },
    about: {
      badge: "Biografia Strategica",
      title: "Un cammino basato sull'esecuzione di precisione, approfondimento scientifico e pubblicazioni autorevoli.",
      p1: "Leandro Calado Ferreira ha eretto un ecosistema di competenza unico e difficile da replicare. Ha iniziato la sua formazione geopolitica decodificando i legami e le dipendenze nei trasporti internazionali, per poi formalizzare e affinare la sua sensibilità legislativa in Giurisprudenza.",
      p2: "Riconfigurando queste competenze per il mercato tecnologico moderno, si è affermato nell'ingegneria dei dati cloud. Come fondatore di LCF Consulting, progetta e sviluppa integrazioni di Big Data, pipeline ETL ad elevate prestazioni e architetture cloud su AWS, Azure e Databricks.",
      p3: "L'innovazione chiave riguarda la messa in produzione di agenti di Intelligenza Artificiale. Specializzato nel Model Context Protocol (MCP) e nella prevenzione dei rischi informatici (fughe di dati, iniezioni indirette di prompt nei documenti legali), Leandro opera nell'ingegneria dell'IA sicura.",
      p4: "La validità della sua opera è certificata non da mere speculazioni, ma da decine di contributi su Jusbrasil e Medium e dall'incredibile catalogo di oltre 100 manuali tecnici pubblicati e venduti su scala internazionale con il programma Amazon KDP.",
      domainTitle: "Aree di Competenza & Competenze Standardizzate",
      governanceBadge: "Focus Governance e Privacy (LGPD/GDPR)",
      mbaTitle: "MBA USP - Analisi dei Rischi Decisionali",
      mbaField: "Ricerca accademica dedicata ai modelli di alberi decisionali applicati alla tutela dei trattamenti dati e compliance di business.",
      skills: ["Model Context Protocol (MCP)", "Data Engineering & Cloud (AWS/Azure/Databricks)", "Compliance per l'IA e Protezione Dati (LGPD/GDPR)", "Sicurezza e Governance per i LLM", "Automazioni Intelligenti (n8n/Python AI)", "Geopolitica e Regolamentazioni Industriali"],
    },
    ecosystem: {
      badge: "SISTEMA INTEGRATO",
      title: "Evoluzione dell'Ecosistema di Autorità",
      desc: "La professionalità di Leandro non si limita ad una singola nicchia, ma coordina un insieme di competenze avanzate che collaborano in sinergia per generare stabilità analitica.",
      verifiedDomain: "Competenza Validata",
      intersectionTitle: "Integrazione Strategica: IA Applicata + Garanzie Legali",
      intersectionDesc: "Oltre due terzi dei suoi volumi trattano Agenti IA, n8n, MCP e Python AI. Questo testimonia un focus orientato alla risoluzione di problematiche reali con protocolli sicuri.",
      ctaLibrary: "Vedi Biblioteca Completa",
    },
    books: {
      badge: "Biblioteca Tecnica KDP",
      title: "116 Libri Pubblicati su Amazon",
      desc: "Manuali pratici per ingegneri dei dati e progettisti di sistemi intelligenti focalizzati sull'efficienza e sulla governance delle applicazioni.",
      searchPlaceholder: "Cerca nel catalogo...",
      all: "Tutti",
      ai: "Agenti IA",
      data: "Dati & Cloud",
      automation: "Automazione",
      law: "Diritto & Gov",
      international: "Internazionale",
      footerText1: "Visualizzati",
      footerText2: "di",
      footerText3: "libri catalogati • Vedi il profilo Autore su Amazon",
    },
    articles: {
      badge: "Articoli & Saggi Editoriali",
      title: "Presenza Editoriale Estesa",
      desc: "Trattazione di argomenti critici come rischi di esposizione dati aziendali, cookie policy, standard Model Context Protocol e prompt injection all'interno dei sistemi legali.",
      all: "Tutte le Piattaforme",
      views: "visualizzazioni",
      claps: "apprezzamenti",
      readCta: "Leggi articolo originale",
      newsletterTitle: "Newsletter: Lawtech and Legaltech",
      newsletterDesc: "Leandro cura e pubblica regolarmente una rubrica su LinkedIn. Con 1.556 lettori holds regolari analisi di conformità digitale e cyber-difesa.",
      newsletterCta: "Iscriviti su LinkedIn",
    },
    timeline: {
      badge: "STORIA ACCADEMICA E PROFESSIONALE",
      title: "Un Percorso Multidisciplinare e Sicuro",
      desc: "Dagli studi di geopolitica ed economia alle implementazioni software di data lakes nel pieno rispetto delle norme sulla responsabilità dei sistemi.",
      all: "Carriera Completa",
      academic: "Istruzione",
      professional: "Professionale",
      academicTag: "Istruzione",
      professionalTag: "Professionale",
    },
    contact: {
      badge: "INVITI & OPPORTUNITÀ",
      title: "Costruiamo Qualcosa di Durituro Insieme",
      desc: "Sia per la programmazione di pipeline dati aziendali robuste o per proteggere la privacy dei vostri assistenti intelligenti, avvia una connessione strategica.",
      b2bTitle: "Richiedi Consulenza B2B",
      b2bDesc: "Recensioni di architetture di dati corporative, analisi di pipeline cloud Microsoft Azure/AWS o automazione di flussi avanzati basati su MCP e n8n.",
      b2bCta: "Contatta LCF Consulting",
      workshopsTitle: "Progetti, Interventi e Formazione",
      workshopsDesc: "Vuoi ospitare Leandro per giornate di workshop formativi, collaborazioni editoriali, registrazioni multimediali o podcast tecnologici?",
      workshopsCta: "Invia una Proposta Diretta",
    },
    footer: {
      about: "Ingegnere dei Dati • Laureato in Giurisprudenza • Autore Tecnico Internazionale",
      rights: "Tutti i diritti riservati.",
    },
  },
  ja: {
    navbar: {
      about: "プロフィール",
      ecosystem: "エコシステム",
      books: "書籍一覧",
      articles: "技術論文",
      trajectory: "実績・経歴",
      cta: "コンサルティング",
    },
    hero: {
      tagline: "サンパウロ、ブラジル • データエンジニア ＆ テクニカルライター",
      headline: "技術、データ、そして ",
      headlineAlt: "人工知能を高い専門性とガバナンスのもとで社会実装する。",
      subheadline: "法務知識を備えたデータエンジニア・技術設計スペシャリスト。インフラとコンプライアンス要件に適合したセキュリティ性の高い自律型AIエージェントの開発環境を構築します。",
      ctaLibrary: "全コレクションを見る",
      ctaEcosystem: "エコシステムを探求する",
      verified: "Lattes認定研究者",
      quote: "\"機能的なAIエージェントの実装に博士号は必須ではありません。必要なのは頑健なアーキテクチャ、構造化されたガバナンス、そして信頼性の高いデータ管理です。\"",
      published: "Amazon KDP 出版書籍",
      newsletter: "Medium ニュースレター購読者",
      publishedArticles: "Jusbrasil 公式掲載論文",
      workingLanguages: "対応言語",
    },
    about: {
      badge: "戦略的ポートフォリオ",
      title: "綿密な実践、厳格な法理探求、そして継続的な知見共有によって築かれた信頼性。",
      p1: "レアンドロ・カラード・フェレイラは、テクノロジーと規制の相互運用領域において堅固な信用を構築してきました。国際関係論における地政学研究や交通輸送産業の依存構造の解析からそのキャリアを開始し、法学部において高度な情報法規制フレームワークを習得しました。",
      p2: "これらの法解釈的視点と急進するビジネスインフラを融合させ、クラウド型データ工学の分野に参入。LCF Consultingの創設者として、AWS、Azure、Databricksを用いた大規模設計、効率的なデータ統合、安定したデータパイプラインを構築・運用しています。",
      p3: "近年における重要なマイルストーンは、実稼働環境における「自律型AIエージェント」の管理です。Model Context Protocol (MCP) や、企業データ漏洩、各種リーガル文書に対する間接的なプロンプト・インジェクションなどの深刻なセキュリティ対策に精通し、信頼性と監査性のある実用的なAIを提案します。",
      p4: "この高度な技術的知見は単なる理論にとどまりません。JusbrasilやMediumにおける多数の分析論文、さらにはAmazon KDPにおいて著者本人が執筆・監修した100冊を超える多言語技術マニュアルの出版実績が、その信用を裏付けています。",
      domainTitle: "実績と技術的専門ドメイン",
      governanceBadge: "ガバナンス ＆ プライバシー管理 (LGPD/GDPR)",
      mbaTitle: "サンパウロ大学(USP) MBA - 意思決定リスク分類研究",
      mbaField: "決定木アルゴリズムを用いた企業のプライバシー保護対策とLGPD適合プロトコル向けの学術・実践プロジェクト。",
      skills: ["Model Context Protocol (MCP)", "データエンジニアリング ＆ クラウド (AWS/Azure)", "AI適合性検証 ＆ 個人情報保護 (LGPD/GDPR)", "第3世代大言語モデル安全設計・ガバナンス", "自律型自動化ワークフロー (n8n/Python AI)", "地政学 ＆ 運輸物流システム規制"],
    },
    ecosystem: {
      badge: "統合構造マップ",
      title: "強みの相互乗数エコシステム",
      desc: "レアンドロ・カラードの信頼は単一の閉じられた領域だけではなく、相互に補完・統合され、分析の安定性を高める多面的なアプローチによって形成されています。",
      verifiedDomain: "専門性検証済み",
      intersectionTitle: "シナジー効果：実用AI ＋ 法的コンプライアンス管理",
      intersectionDesc: "出版書籍の過半数は「AIエージェント」「n8n」「MCP」「Python AI」に焦点を当てています。これは現場が求める安全で監査能力の高い実用ソリューションをレアンドロが提供し続けている証左です。",
      ctaLibrary: "全コレクションを見る",
    },
    books: {
      badge: "Amazon KDP テクニカルガイド",
      title: "Amazonにて116冊以上の専門書を出版",
      desc: "データパイプライン工学および本番環境のインテリジェントシステムに関わるプロフェッショナルが実地で抱える問題を解決するための実戦的ライブラリ。",
      searchPlaceholder: "本を探す...",
      all: "すべて",
      ai: "AIエージェント",
      data: "データ ＆ クラウド",
      automation: "自動化設計",
      law: "法務 ＆ IT管理",
      international: "国際標準フォーカス",
      footerText1: "現在、マップ内タイトルの",
      footerText2: "／",
      footerText3: "冊を表示中 • Amazon著者紹介ページを確認する",
    },
    articles: {
      badge: "技術論考 ＆ 専門誌寄稿",
      title: "多角的なメディア・学術寄稿実績",
      desc: "企業データの流出セキュリティ対策、クッキーポリシーの基準適用、Model Context Protocolの最新アップデート、法廷分析ツールにおけるプロンプトインジェクションの脆弱性解析。",
      all: "すべての掲載メディア",
      views: "ビュー",
      claps: "拍手",
      readCta: "元の記事を読む",
      newsletterTitle: "ニュースレター: Lawtech and Legaltech",
      newsletterDesc: "LinkedIn内の専門プラットフォームでニュースレターを配信中。1,556名の登録者を有し、データ保護の基準維持や産業デジタル化について提言しています。",
      newsletterCta: "LinkedInで購読する",
    },
    timeline: {
      badge: "学術研究 ＆ キャリア年表",
      title: "多角的な教育体制と実務プロセスの融合",
      desc: "地政学および古典経済学の研究から、データの法的責任関係と調和したBig Data構築パイプラインの実務実装に至る確かな歩み。",
      all: "キャリア全実績",
      academic: "学術・教育",
      professional: "実務・プロジェクト",
      academicTag: "学術・研究",
      professionalTag: "実務・執筆",
    },
    contact: {
      badge: "共同プロジェクト ＆ ご相談窓口",
      title: "安定したビジネスを共創しませんか？",
      desc: "高度なデータ基盤構築、あるいはプライバシー規則と調和したセキュリティ性の高いAIモデルの設計をご検討中の方は、お問い合わせください。",
      b2bTitle: "B2Bコンサルティングのご依頼",
      b2bDesc: "AWS/Azureを用いたエンタープライズ統合、高スループットフロー計画、またはMCP/n8nを活用した自動化支援。",
      b2bCta: "LCF Consultingへ相談する",
      workshopsTitle: "講演、ワークショップ ＆ 特別指導",
      workshopsDesc: "企業向け講習会、技術資料の執筆・監修、テック関連のポッドキャストなどへの出演・収録依頼を受け付けています。",
      workshopsCta: "招待用メールを送信する",
    },
    footer: {
      about: "データエンジニア • 法学士 • 技術開発国際著者",
      rights: "Copyright All rights reserved.",
    },
  },
};
