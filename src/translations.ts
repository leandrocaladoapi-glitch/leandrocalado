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
      subheadline: "Engenheiro de Dados e Autor Técnico de livros e artigos em Dados, IA, Direito e Relações Internacionais. Bacharel em Relações Internacionais e Direito, com MBA em Data Science e Analytics (USP), MBA em Desenvolvimento Front-End e especialização em Economia Urbana e Gestão Pública. Uma trajetória sólida desenhada sob compliance.",
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
      p1: "Leandro Calado Ferreira construiu um ecossistema de autoridade raro e difícil de copiar. É Bacharel em Relações Internacionais e Direito, unindo uma profunda compreensão geopolítica clássica e regulação de mercados com o arcabouço normativo formal jurídico.",
      p2: "Sua bagagem profissional carrega uma vasta experiência em Gestão Pública, onde atuou ativamente liderando pesquisas quantitativas e estatísticas de vulnerabilidade urbana junto ao 'Mapa da Juventude' e se especializou em Economia Urbana e Gestão Pública pela PUC-SP, consolidando sua excelência em governança de dados governamentais e políticas baseadas em evidências.",
      p3: "Ao cruzar esses domínios regulatórios com a tecnologia analítica de ponta, formou-se em dois MBAs: MBA em Data Science e Analytics pela USP (ESALQ) e MBA em Desenvolvimento Front-End pelo IGTI. Hoje, como Engenheiro de Dados e fundador da LCF Consulting, desenha sistemas integrados de Big Data, barramentos de automação com n8n/Python AI e guardrails de LLMs em total conformidade com a LGPD.",
      p4: "É um prolífico Autor Técnico Internacional e palestrante, com a expressante marca de 116 manuais práticos de engenharia de dados, inteligência artificial aplicada (Model Context Protocol - MCP, agentes inteligentes) e direito digital publicados em quatro idiomas na Amazon KDP, além de dezenas de ensaios e artigos de altíssimo tráfego no Jusbrasil e Medium.",
      domainTitle: "Território e Domínio Técnico Verificado",
      governanceBadge: "Foco na Governança e LGPD",
      mbaTitle: "MBA USP - Data Science e Analytics",
      mbaField: "Pós-graduação e pesquisa direcionadas ao processamento avançado de algoritmos de árvore de decisão aplicados à privacidade corporativa, análise de risco e compliance regulatório de dados (LGPD).",
      skills: ["Model Context Protocol (MCP)", "Engenharia de Dados & Cloud (AWS/Azure/Databricks)", "Compliance de IA e Proteção de Dados (LGPD/GDPR)", "Governança e Segurança em LLMs", "Automação Inteligente (n8n/Python AI)", "Geopolítica, Economia & Gestão Pública"],
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
      subheadline: "Data Engineer and Technical Author of books and articles in Data, AI, Law, and International Relations. Bachelor of Laws & International Relations, with an MBA in Data Science and Analytics (USP), an MBA in Front-End Development, and specialization in Public Management & Urban Economics. An elite, multi-industry profile designed under compliance.",
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
      p1: "Leandro Calado Ferreira has built a rare and highly defensible ecosystem of authority. He stands as a double Bachelor of International Relations and Law, cementing an invaluable regulatory, legal compliance, and international geopolitical framework.",
      p2: "His record includes extensive experience in Public Management, where he actively led qualitative and statistical youth vulnerability research for the official municipal 'Youth Map' of São Paulo, and specialized in Public Management & Urban Economics from PUC-SP, consolidating his expertise in evidence-based decisions and public data governance.",
      p3: "By bridging municipal compliance with cutting-edge analytics, he attained two specialized MBAs: an MBA in Data Science and Analytics from USP (ESALQ) and an MBA in Front-End Development from IGTI. Today, as a Data Engineer and founder of LCF Consulting, he architects robust data lakes, n8n/Python AI workflows, and LLM guardrails optimized under LGPD guidelines.",
      p4: "He is an active International Technical Author with 116 published technical manuals on big data, artificial intelligence (Model Context Protocol - MCP, autonomous agents), and legaltech distributed globally in four languages on Amazon KDP, alongside highly popular reviews on Medium and Jusbrasil.",
      domainTitle: "Verified Territory & Technical Expertise",
      governanceBadge: "Governance & Privacy Focus (LGPD)",
      mbaTitle: "MBA USP - Data Science & Analytics",
      mbaField: "Advanced post-graduate research dedicated to the processing of decision tree algorithms applied to corporate data privacy, threat modeling, risk assessments, and regulatory LGPD compliance.",
      skills: ["Model Context Protocol (MCP)", "Data Engineering & Cloud (AWS/Azure/Databricks)", "AI Compliance & Data Protection (LGPD/GDPR)", "LLM Governance & Security Protocols", "Intelligent Automation (n8n/Python AI)", "Geopolitics, Economics & Public Management"],
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
      subheadline: "Ingeniero de Datos, Autor Técnico de libros y artículos en Datos, IA, Derecho y Relaciones Internacionales. Licenciado en Relaciones Internacionales y Derecho, con MBA en Data Science y Analytics (USP), MBA en Desarrollo Front-End y especialidad en Economía Urbana y Gestión Pública. Diseñado bajo un riguroso cumplimiento normativo.",
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
      title: "Una trayectoria construida a través de la ejecución estructurada, estudio técnico rigoros y publicación continua.",
      p1: "Leandro Calado Ferreira ha construido un ecosistema de autoridad extraordinario y difícil de duplicar. Tiene la doble titulación de Licenciado en Relaciones Internacionales y Derecho, uniendo una sólida perspectiva de geopolítica mundial y marcos regulatorios con la gobernanza formal jurídica.",
      p2: "Su trayectoria profesional incluye una vasta experiencia en Gestión Pública, liderando análisis de vulnerabilidad urbana para el municipal 'Mapa de la Juventud' y obteniendo la Especialidad en Economía Urbana y Gestión Pública por la PUC-SP, consolidando su competencia en decisiones basadas en evidencias científicas.",
      p3: "Al unificar este bagaje corporativo e institucional con la tecnología analítica, completó dos prestigiosos posgrados: un MBA de Data Science y Analytics por la USP (ESALQ) y un MBA en Desarrollo Front-End en el IGTI. Fundador de LCF Consulting, diseña pipelines de Big Data (AWS/Azure), automatización ágil con n8n/Python e implementaciones seguras con LLMs conforme a la LGPD.",
      p4: "Leandro se desempeña como un prolífico Autor Técnico Internacional y conferencista, sumando 116 libros publicados en cuatro idiomas en Amazon KDP especializados en IA avanzada (Model Context Protocol - MCP, agentes inteligentes coordinados) y big data, sumados a artículos técnicos de alto alcance en Jusbrasil y Medium.",
      domainTitle: "Territorio Técnico y Especialidad Verificada",
      governanceBadge: "Foco en Gobernanza y LGPD/GDPR",
      mbaTitle: "MBA USP - Data Science y Analytics",
      mbaField: "Estudios de posgrado dedicados al modelado y procesamiento de algoritmos de árboles de decisión avanzados adaptados a la privacidad empresarial, análisis estratégico de riesgos y cumplimiento corporativo de la LGPD.",
      skills: ["Model Context Protocol (MCP)", "Ingeniería de Datos e Infraestructura Nube (AWS/Azure)", "Cumplimiento normativo de IA y Datos (LGPD/GDPR)", "Gobernanza y Seguridad en LLMs", "Automatización Inteligente (n8n/Python AI)", "Geopolítica, Economía y Gestión Pública"],
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
      subheadline: "Ingénieur de Données, Auteur Technique de livres et d'articles sur les Données, l'IA, le Droit et les Relations Internationales. Diplômé de Droit & de Relations Internationales, titulaires de deux MBAs: un MBA en Data Science & Analytics (USP) et un MBA en Développement Front-End, avec une spécialisation en Gestion Publique. Conçu sous une stricte conformité réglementaire.",
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
      p1: "Leandro Calado Ferreira a façonné un écosystème d'autorité unique et hautement structuré. Il détient un double diplôme en Relations Internationales et Droit, fusionnant une fine compréhension de la géopolitique globale et du droit administratif européen et sud-américain.",
      p2: "Son expérience professionnelle intègre une vaste expertise de la Gestion Publique, où il a piloté des études de vulnérabilités métropolitaines (officiel 'Carte de la Jeunesse' de São Paulo). Il s'est spécialisé en Économie Urbaine et Gestion Publique (PUC-SP) renforçant sa vision des politiques basées sur les données factuelles.",
      p3: "Alliant ce bagage réglementaire aux technologies analytiques de pointe, il est titulaire de deux MBA : un MBA en Data Science et Analytics de l'USP (ESALQ) et un MBA en Développement Front-End de l'IGTI. En tant qu'Ingénieur de Données de LCF Consulting, il orchestre des architectures Big Data complexes (AWS/Azure), des workflows avec n8n/Python AI et des systèmes d'IA conformes à la LGPD.",
      p4: "Il est un Auteur Technique International prolifique et conférencier, fort d'un catalogue de 116 manuels pragmatiques d'ingénierie logicielle et d'intelligence artificielle appliquée (Model Context Protocol, agents de routage) édités en quatre langues sur Amazon KDP, en plus de publications leaders sur Jusbrasil et Medium.",
      domainTitle: "Compétences Avancées & Maîtrise Validée",
      governanceBadge: "Focus Gouvernance et Protection (GDPR)",
      mbaTitle: "MBA USP - Data Science & Analytics",
      mbaField: "Diplôme de spécialisation avancée centré sur le traitement d'algorithmes de réseaux de décision appliqués à la confidentialité des données d'entreprise et à la conformité aux règlements de confidentialité (LGPD).",
      skills: ["Model Context Protocol (MCP)", "Ingénierie de Données & Cloud (AWS/Azure/Databricks)", "Conformité d'IA et Protection des Données (LGPD/GDPR)", "Sécurité et Gouvernance des LLMs", "Automatisation Intelligente (n8n/Python AI)", "Géopolitique, Économie & Gestion Publique"],
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
      subheadline: "Ingegnere dei Dati e Autore Tecnico di libri e articoli su Dati, IA, Diritto e Relazioni Internazionali. Laureato in Relazioni Internazionali e Giurisprudenza, con MBA in Data Science e Analytics (USP), MBA in Sviluppo Front-End e specializzazione in Economia Urbana e Pubblica Amministrazione. Un percorso solido costruito sotto compliance.",
      ctaLibrary: "Vedi Biblioteca Completa",
      ctaEcosystem: "Esplora l'Ecosistema",
      verified: "Lattes Verificado",
      quote: "\"Gli agenti di IA funzionali non richiedono un dottorato. Esigono architetture solide, governance strutturata e basi dati di alta fedeltà.\"",
      published: "Libri Pubblicati su Amazon KDP",
      newsletter: "Iscritti alla Newsletter Medium",
      publishedArticles: "Articoli Pubblicati su Jusbrasil",
      workingLanguages: "Lingue Operative",
    },
    about: {
      badge: "Biografia Strategica",
      title: "Un cammino basato sull'esecuzione di precisione, approfondimento scientifico e pubblicazioni autorevoli.",
      p1: "Leandro Calado Ferreira ha eretto un ecosistema di competenza unico e difficile da replicare. Ha conseguito la doppia laurea in Relazioni Internazionali e Giurisprudenza, unendo la geopolitica globale classica con un robusto quadro regolatorio formale e giuridico.",
      p2: "Il suo percorso professionale vanta una vasta esperienza nella Pubblica Amministrazione, coordinando analisi statistiche sulla vulnerabilità giovanile (per il 'Mappa dei Giovani' di San Paolo) e specializzandosi in Economia Urbana e Pubblica Amministrazione presso la PUC-SP, garantendo eccellenza nelle decisioni basate sulle evidenze.",
      p3: "Fondendo questo background istituzionale con la tecnologia e l'innovazione analitica, ha completato due prestigiosi master: un MBA in Data Science e Analytics della USP (ESALQ) e un MBA in Sviluppo Front-End del IGTI. Come fondatore di LCF Consulting, progetta e sviluppa integrazioni di Big Data (AWS/Azure), workflow stabili con n8n/Python e sistemi d'IA conformi alle norme LGPD/GDPR.",
      p4: "È un attivo Autore Tecnico Internazionale e relatore con la straordinaria marca di 116 manuali pratici di ingegneria dei dati, intelligenza artificiale applicata (Model Context Protocol - MCP, agenti intelligenti) e diritto digitale pubblicati in quattro lingue su Amazon KDP, oltre a decine di saggi su Jusbrasil e Medium.",
      domainTitle: "Aree di Competenza & Competenze Standardizzate",
      governanceBadge: "Focus Governance e Privacy (LGPD/GDPR)",
      mbaTitle: "MBA USP - Data Science & Analytics",
      mbaField: "Master e ricerca dedicati ai modelli di classificazione con alberi decisionali complessi applicati alla tutela dei trattamenti dati del business, analisi del rischio e compliance LGPD.",
      skills: ["Model Context Protocol (MCP)", "Data Engineering & Cloud (AWS/Azure/Databricks)", "Compliance per l'IA e Protezione Dati (LGPD/GDPR)", "Sicurezza e Governance per i LLM", "Automazioni Intelligenti (n8n/Python AI)", "Geopolitica, Economia e Pubblica Amministrazione"],
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
      subheadline: "データ、AI、法務、国際関係論に関わるデータエンジニアでありテクニカルライター。国際関係論および法学のダブル学士、USPのデータサイエンス＆アナリティクスMBA、IGTIのフロントエンド開発MBA、そして都市経済・公共管理スペシャリスト。インフラと厳しい規制要件に適合した、高いコンプライアンス性のソリューションを設計・開発します。",
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
      p1: "レアンドロ・カラード・フェレイラは、テクノロジーと厳しい規制が交差する領域において、容易に模倣できない独自のポジションを構築してきました。国際関係論および法学のダブル学士号を保有しており、クラシックな地政学、国際経済から国内 of 公法制度、契約関係までを包括した法規制のフレームワークを体得しています。",
      p2: "さらに公共管理（Gestão Pública）分野において、サンパウロ自治体の「若者マップ」公式調査を主導するなど、統計調査やデータ収集をベースとした政策立案・公共データ管理における豊かな経験を有しています。PUC-SPにおいて都市経済・公共管理のスペシャリスト課程を修了し、データ主導・科学的根拠に基づいた施策設計の能力を強化してきました。",
      p3: "この独自の制度的バックグラウンドに先端データ工学を統合すべく、USP（ESALQ）にて「データサイエンス＆アナリティクス」MBA、IGTIにて「フロントエンド開発」MBAという2つの異なる専門MBAを取得しました。現在はLCF Consultingの創業者・データエンジニアとして、AWSやAzureを活用した高品質データレイクの構築、n8nやPython AIによる自動化、LGPD/GDPR適合LLMの安全な実稼働プロトタイプを開発しています。",
      p4: "また多言語にわたるテクニカルライター、招聘講師、講演家でもあり、大言語モデル統合やModel Context Protocol (MCP)、自律エージェント型設計などをテーマとした116冊に及ぶ専門技術マニュアルをAmazon KDPを通じて4言語で全世界に配信しているほか、JusbrasilやMediumで高い閲覧数を集める専門記事を数多く執筆しています。",
      domainTitle: "実績と技術的専門ドメイン",
      governanceBadge: "ガバナンス ＆ プライバシー管理 (LGPD/GDPR)",
      mbaTitle: "サンパウロ大学(USP) MBA - データサイエンス＆アナリティクス",
      mbaField: "決定木アルゴリズムや統計モデリングを用いた企業のプライバシー保護、リスク分析、およびLGPD適合制度に向けた高度な学術・実践研究。",
      skills: ["Model Context Protocol (MCP)", "データエンジニアリング ＆ クラウド (AWS/Azure)", "AI適合性検証 ＆ 個人情報保護 (LGPD/GDPR)", "第3世代大言語モデル安全設計・ガバナンス", "自律型自動化ワークフロー (n8n/Python AI)", "地政学、都市経済 ＆ 公共管理"],
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
