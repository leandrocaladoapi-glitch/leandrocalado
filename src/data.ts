import { Book, Article, TimelineItem, ThemeDomain } from "./types";

export const booksData: Book[] = [
  // IA & Agentes
  {
    id: "ia-mcp",
    title: "Agentes de IA MCP",
    category: "ia",
    asin: "B0GQHTTRZX",
    description: "Explore o Model Context Protocol (MCP) para conectar modelos de linguagem a bancos de dados, APIs e arquivos de forma segura.",
    lang: "Português",
    coverEmoji: "🤖"
  },
  {
    id: "agentic-ai",
    title: "Agentic AI: Build Your First Autonomous Agent System",
    category: "ia",
    asin: "B0F4CQ2B2D",
    isbn: "9798317478797",
    description: "A comprehensive developer's guide to architecture and production-ready autonomous agent pipelines using cutting-edge models.",
    lang: "Inglês",
    coverEmoji: "🧠"
  },
  {
    id: "ai-trading",
    title: "AI Agents Trading",
    category: "ia",
    asin: "B0DZQLZP3X",
    description: "Implementando agentes autônomos de decisão em tempo real para análises preditivas e execução estruturada em mercados de dados.",
    lang: "Inglês",
    coverEmoji: "📈"
  },
  {
    id: "ai-agents-n8n",
    title: "AI Agents with n8n",
    category: "ia",
    asin: "B0FLKKVY46",
    description: "Construa agentes de Inteligência Artificial sem complexidade de código excessiva usando fluxos de trabalho visuais estruturados.",
    lang: "Inglês",
    coverEmoji: "⚡"
  },
  {
    id: "ai-automation-n8n",
    title: "AI Automation with n8n",
    category: "ia",
    asin: "B0DZWG9XGW",
    description: "Guia prático para automatizar tarefas corporativas repetitivas, integrando LLMs e fluxos de dados em produção.",
    lang: "Inglês",
    coverEmoji: "⚙️"
  },
  {
    id: "ai-employees",
    title: "AI Employees: How to Automate Gmail, Jira & Figma with MCP Agents",
    category: "ia",
    asin: "B0GND3TLJC",
    description: "Discover how to replace repetitive administrative operations with lightweight autonomous agents powered by MCP standards.",
    lang: "Inglês",
    coverEmoji: "💼"
  },
  {
    id: "ai-hacks",
    title: "AI Hacks",
    category: "ia",
    asin: "B0DZYP1H5H",
    description: "Atalhos avançados, truques de engenharia de prompt e arquiteturas de software ágeis para maximizar a produtividade diária.",
    lang: "Inglês",
    coverEmoji: "💡"
  },
  {
    id: "ai-hustler",
    title: "AI Hustler",
    category: "ia",
    asin: "B0F1DSPPQZ",
    description: "Estratégias pragmáticas de monetização e criação de soluções de software de rápida implantação orientadas a Inteligência Artificial.",
    lang: "Inglês",
    coverEmoji: "🚀"
  },
  {
    id: "master-ai-agents",
    title: "Master AI Agents",
    category: "ia",
    asin: "B0F22SPZB7",
    description: "Dominando a engenharia de sistemas multi-agentes baseados em CrewAI, LangChain e padrões severos de governança corporativa.",
    lang: "Inglês",
    coverEmoji: "🛡️"
  },
  {
    id: "automate-n8n-mcp",
    title: "Automate AI Agents with n8n and MCP",
    category: "ia",
    asin: "B0F3T4HVZC",
    description: "Aprofunde na orquestração de workflows visuais robustos integrados a servidores Model Context Protocol dedicados.",
    lang: "Inglês",
    coverEmoji: "🔌"
  },
  {
    id: "gemini-cli-mcp",
    title: "Gemini CLI and MCP",
    category: "ia",
    asin: "B0GN1F45X8",
    description: "Interface de linha de comando baseada no SDK oficial da Google Cloud, estendida com servidores de contexto MCP locais.",
    lang: "Inglês",
    coverEmoji: "✨"
  },

  // Engenharia de Dados & Cloud
  {
    id: "aws-50-hacks",
    title: "50 Hacks Para Engenheiros de Dados: Certificação AWS",
    category: "dados",
    asin: "B0DTN7W667",
    description: "Um manual condensado com padrões de projeto, segurança e otimização de queries para acelerar sua aprovação na AWS.",
    lang: "Português",
    coverEmoji: "☁️"
  },
  {
    id: "aws-glue-python",
    title: "AWS Glue com Python",
    category: "dados",
    asin: "B0DPBTZ578",
    description: "Crie pipelines de ETL robustos, escaláveis e serverless aproveitando o poder do PySpark de forma pragmática e direta.",
    lang: "Português",
    coverEmoji: "🐍"
  },
  {
    id: "aws-sagemaker",
    title: "AWS SageMaker for Beginners",
    category: "dados",
    asin: "B0D7WQ4Y45",
    description: "Guia introdutório para treinar, validar e implantar modelos de Machine Learning robustos na infraestrutura de nuvem Amazon.",
    lang: "Inglês",
    coverEmoji: "📊"
  },
  {
    id: "aws-data-handbook",
    title: "AWS Data Engineer's Handbook",
    category: "dados",
    asin: "B0F8YZ3WVM",
    description: "Comprehensive reference manual detailing data lakes, serverless ingestion, and warehousing design patterns on AWS.",
    lang: "Inglês",
    coverEmoji: "📖"
  },
  {
    id: "etl-databricks",
    title: "ETL com Databricks",
    category: "dados",
    asin: "B0DDSXMDWS",
    description: "Implementando Delta Lake, processamento paralelo sobre Apache Spark e arquiteturas escaláveis de ingestão de dados.",
    lang: "Português",
    coverEmoji: "❄️"
  },
  {
    id: "databricks-cert-guide",
    title: "Databricks Data Engineer Certification Guide",
    category: "dados",
    asin: "B0F2NZ6JYL",
    description: "Surgical study resources and complete baseline tests to master the Databricks Associate Data Engineer certification.",
    lang: "Inglês",
    coverEmoji: "🎯"
  },
  {
    id: "azure-pipelines-databricks",
    title: "Implementação de Pipelines no Azure Databricks",
    category: "dados",
    asin: "B0CW18R5F5",
    description: "Integração nativa de Data Factory e Databricks para construir orquestrações de Big Data estáveis e auditáveis em nível comercial.",
    lang: "Português",
    coverEmoji: "🚀"
  },
  {
    id: "data-mesh-kafka",
    title: "Data Mesh with Kafka Guide",
    category: "dados",
    asin: "B0F7V4YHZQ",
    description: "Decentralized data architectures paired with Apache Kafka event streams for highly decoupled, domain-driven topologies.",
    lang: "Inglês",
    coverEmoji: "🌐"
  },
  {
    id: "data-observability-aws",
    title: "Data Observability on AWS",
    category: "dados",
    asin: "B0FLC5QBTQ",
    description: "How to set up data quality guards, data drift monitoring, and lineage tracking on Athena, Glue, and CloudWatch structures.",
    lang: "Inglês",
    coverEmoji: "👁️"
  },

  // Automação & Negócios Digitais
  {
    id: "ai-side-hustles",
    title: "AI Side Hustles",
    category: "automacao",
    asin: "B0F4XZX5BQ",
    description: "Descubra como construir serviços escaláveis e automatizar faturamento unindo n8n, Stripe e APIs inteligentes.",
    lang: "Inglês",
    coverEmoji: "💸"
  },
  {
    id: "amazon-seo",
    title: "Amazon SEO Strategy",
    category: "automacao",
    asin: "B0F54D1YV3",
    description: "Como estruturar palavras-chave, metadados e indexação para dominar algoritmos do Kindle Direct Publishing (KDP).",
    lang: "Inglês",
    coverEmoji: "📈"
  },
  {
    id: "personal-assistant-chatgpt",
    title: "Build Your Own Personal Assistant with ChatGPT",
    category: "automacao",
    asin: "B0F6MLW1WX",
    description: "Projete e configure assistentes autônomos dedicados que otimizam sua rotina acadêmica e de negócios.",
    lang: "Inglês",
    coverEmoji: "🛎️"
  },
  {
    id: "essential-n8n",
    title: "Essential n8n Playbook",
    category: "automacao",
    asin: "B0F36KWF8N",
    description: "Aprenda lógica de workflows de dados, tratamento de erros avançados e integrações webhook no orquestrador n8n.",
    lang: "Inglês",
    coverEmoji: "📔"
  },
  {
    id: "vector-dbs-es",
    title: "Bases de Datos Vectoriales para IA Generativa",
    category: "automacao",
    asin: "B0GXWLWDZP",
    description: "Un recorrido práctico por Pinecone, Milvus y Qdrant enfocado en la construcción de sistemas de recuperación elásticos (RAG).",
    lang: "Espanhol",
    coverEmoji: "📚"
  },
  {
    id: "image-mastery",
    title: "AI Image Mastery: ComfyUI, FLUX, LoRA, ControlNet",
    category: "automacao",
    asin: "B0F76CGSCM",
    description: "Guia definitivo de geração e controle avançado de imagens sintéticas para diretores de arte e builders de assets digitais.",
    lang: "Inglês",
    coverEmoji: "🎨"
  },

  // Direito, Compliance & Aviação
  {
    id: "chatgpt-lawyers-compliance",
    title: "ChatGPT for Lawyers: Data Privacy & Cybersecurity Compliance 2025",
    category: "direito",
    asin: "B0FNVHDZ4N",
    description: "A regulatory handbook mapping prompt engineering safety guidelines, client privileges, and GDPR/LGPD hazards.",
    lang: "Inglês",
    coverEmoji: "🛡️"
  },
  {
    id: "seguranca-publica",
    title: "A Municipalização da Segurança Pública no Brasil",
    category: "direito",
    asin: "B0D9PZ2GRV",
    description: "Análise federativa do papel institucional das guardas municipais e as políticas públicas de segurança e prevenção urbana.",
    lang: "Português",
    coverEmoji: "⚖️"
  },
  {
    id: "aviacao-brasil",
    title: "A Aviação e a Dependência Econômica Brasileira",
    category: "internacional",
    asin: "B0D9Q23HZX",
    description: "Uma análise estruturada sobre os gargalos regulatórios, de infraestrutura logística e dependência de tecnologia de transporte e defesa.",
    lang: "Português",
    coverEmoji: "✈️"
  }
];

export const articlesData: Article[] = [
  // Jusbrasil
  {
    title: "Prompt Injection em Documentos Jurídicos e Sistemas de IA no Poder Judiciário",
    platform: "Jusbrasil",
    category: "IA & Direito",
    link: "https://leandrocalado.jusbrasil.com.br/",
    excerpt: "Primeiro ensaio brasileiro investigando técnicas de injeção indireta em peças processuais que podem burlar ou envenenar analisadores automatizados de tribunais."
  },
  {
    title: "Imprudência ao usar inteligência artificial em processo de consulta",
    platform: "Jusbrasil",
    category: "IA & Direito",
    views: "177",
    link: "https://leandrocalado.jusbrasil.com.br/",
    excerpt: "Discussão jurídica de responsabilidade civil para advogados e conselheiros que expõem sigilo de clientes ao alimentar plataformas públicas de IA."
  },
  {
    title: "Como as regras de cookies se relacionam com a LGPD?",
    platform: "Jusbrasil",
    category: "IA & Direito",
    views: "91",
    link: "https://leandrocalado.jusbrasil.com.br/",
    excerpt: "Mapping das obrigações regulatórias da ANPD sobre consentimento ativo para tratamento de metadados em portais comerciais."
  },
  {
    title: "O Reconhecimento de Expressões Faciais e a LGPD",
    platform: "Jusbrasil",
    category: "IA & Direito",
    views: "263",
    link: "https://leandrocalado.jusbrasil.com.br/",
    excerpt: "Estudo crítico sobre o uso de biometria facial e análise emocional por redes de varejo e segurança privada sob o prisma do consentimento."
  },
  {
    title: "Os Contratos Inteligentes e o que os Advogados Deveriam Saber sobre Ethereum",
    platform: "Jusbrasil",
    category: "IA & Direito",
    views: "96",
    link: "https://leandrocalado.jusbrasil.com.br/",
    excerpt: "Tradução conceitual de contratos auto-executados (smart contracts) e sua validade frente à Teoria Geral dos Contratos brasileira."
  },
  {
    title: "As Empresas de Fomento Mercantil (Factoring) e a Legislação Vigente no Brasil",
    platform: "Jusbrasil",
    category: "Direito & Sociedade",
    views: "21.500",
    link: "https://leandrocalado.jusbrasil.com.br/",
    excerpt: "Estratégia legal e financeira de estruturação de fomento mercantil no mercado brasileiro. Postagem altamente viral com ampla repercussão jurídica."
  },
  {
    title: "A Natureza Jurídica do Crédito Público",
    platform: "Jusbrasil",
    category: "Direito & Sociedade",
    views: "11.000",
    link: "https://leandrocalado.jusbrasil.com.br/",
    excerpt: "Análise profunda no campo do Direito Financeiro avaliando os limites de endividamento da Fazenda Pública e a emissão de precatórios estruturados."
  },

  // Medium
  {
    title: "How I Set Up MCPs in Cursor to Automate My Entire Dev Workflow (No Coding Needed)",
    platform: "Medium",
    category: "IA & Automação",
    claps: "3",
    link: "https://leandrocaladoferreira.medium.com/",
    excerpt: "A practical walkthrough on integrating the Model Context Protocol directly into developer IDEs for seamless context injection and local executions."
  },
  {
    title: "How I Automated PDF Reading with AI Using n8n and DeepSeek",
    platform: "Medium",
    category: "IA & Automação",
    claps: "23",
    link: "https://leandrocaladoferreira.medium.com/",
    excerpt: "Building high-throughput, low-cost extraction lines for large structured files using DeepSeek API integrations within custom n8n flows."
  },
  {
    title: "How to Get Your Resume Past the ATS: A Practical Guide for Data Engineers",
    platform: "Medium",
    category: "Engenharia de Dados",
    claps: "0",
    link: "https://leandrocaladoferreira.medium.com/",
    excerpt: "Leveraging key cloud indicators and framework metadata to structure resumes that score high on automated semantic match checks."
  },
  {
    title: "Supercharge AI Agents with n8n and MCP: A Developer’s Guide",
    platform: "Medium",
    category: "IA & Automação",
    claps: "93",
    link: "https://leandrocaladoferreira.medium.com/",
    excerpt: "Engineering enterprise-grade autonomous systems using local node-services to parse filesystem schemas and orchestrate database workloads."
  },
  {
    title: "Stop Overpaying for AI: Save 96% with DeepSeek R1 in n8n",
    platform: "Medium",
    category: "IA & Automação",
    claps: "56",
    link: "https://leandrocaladoferreira.medium.com/",
    excerpt: "An empirical cost-performance analysis comparing traditional closed-weights inference pipelines to DeepSeek's open representation layer."
  },
  {
    title: "Guia Completo: Construindo Pipelines de ETL Eficientes com AWS Glue e Python",
    platform: "Medium",
    category: "Engenharia de Dados",
    claps: "0",
    link: "https://leandrocaladoferreira.medium.com/",
    excerpt: "Implementação prática de scripts Python sobre spark-context, utilizando marcadores de execução e partições dinâmicas na nuvem AWS."
  },
  {
    title: "Análise de Dados de Redes Sociais para Política com Python: Um Guia Completo",
    platform: "Medium",
    category: "Power BI & DAX",
    claps: "0",
    link: "https://leandrocaladoferreira.medium.com/",
    excerpt: "Uso de raspagem estruturada de mídias e técnicas de Processamento de Linguagem Natural (PLN) para modelar comportamento do eleitorado de SP."
  }
];

export const timelineData: TimelineItem[] = [
  {
    period: "2024 – 2026 (Em curso)",
    role: "MBA em Data Science e Analytics",
    organization: "Universidade de São Paulo (USP)",
    description: "Sólido rigor de pós-graduação acadêmica. TCC dedicado a 'Governança de Dados e LGPD: Classificação de Riscos com Árvores de Decisão no Brasil' guiado pela Profa. Dra. Regina Ávila.",
    type: "academic"
  },
  {
    period: "2024 – 2026",
    role: "Autor Técnico Internacional",
    organization: "Amazon KDP",
    description: "Construção de uma biblioteca técnica imensa com 116 títulos estruturados em quatro idiomas (PT, EN, ES, DE) cobrindo IA de ponta, engenharia de dados, compliance regulatório e nuvem pública.",
    type: "professional"
  },
  {
    period: "2022 – Atualmente",
    role: "Fundador",
    organization: "LCF Consulting",
    description: "Fornecimento de consultoria especializada e arquiteturas empresariais unindo Engenharia de Dados em nuvem, automação robusta via n8n e governança operacional para conformidade com a LGPD.",
    type: "professional"
  },
  {
    period: "2021 – 2023",
    role: "Especializações em Tecnologia",
    organization: "IGTI / Digital House / FreeCodeCamp",
    description: "Especialização em Desenvolvimento Front-End (444h) pelo IGTI, Desenvolvimento Web Full Stack na Digital House (227h), e domínios estruturados de JavaScript e Responsive Web Design na FreeCodeCamp (300h cada).",
    type: "academic"
  },
  {
    period: "2015 – 2021",
    role: "Bacharel em Direito",
    organization: "IESP",
    description: "Graduação formal em Direito. Orientação voltada ao cenário regulatório coletivo, com TCC focado no tema 'A Municipalização da Segurança Pública no Brasil'.",
    type: "academic"
  },
  {
    period: "2015 – 2016",
    role: "Pesquisador de Políticas Públicas",
    organization: "Secretaria Municipal de Direitos Humanos de SP",
    description: "Trabalho voltado ao 'Mapa da Juventude', estruturando pesquisas qualitativas e quantitativas sobre vulnerabilidade social de jovens para balizar acesso à justiça.",
    type: "professional"
  },
  {
    period: "2014 – 2016",
    role: "Especialização em Economia Urbana e Gestão Pública",
    organization: "PUC-SP (COGEAE)",
    description: "Aprofundamento focado sob orientação do prof. Gabriel Rossini, culminando com o estudo estatístico complexo da atividade da 18ª legislatura de deputados estaduais de SP.",
    type: "academic"
  },
  {
    period: "2009 – 2013",
    role: "Bacharel em Relações Internacionais",
    organization: "Faculdades Integradas Rio Branco (FIRB)",
    description: "Introdução à alta geopolítica clássica e economia política global. TCC dedicado a correlacionar regulação regulatória do transporte aéreo e dependência produtiva.",
    type: "academic"
  }
];

export const themeDomains: ThemeDomain[] = [
  {
    id: "ia-prod",
    title: "IA Aplicada em Produção",
    desc: "Desenvolvimento e deploy do Model Context Protocol (MCP), orquestrações avançadas com n8n, engenharia de prompts e design de agentes sob padrões de controle operacional."
  },
  {
    id: "dados-cloud",
    title: "Engenharia de Dados em Nuvem",
    desc: "Arquitetura e implementação de pipelines ETL/ELT eficientes usando AWS Glue, Databricks, Spark, Athena e governança de dados governamentais ou biográficos na Azure."
  },
  {
    id: "seguranca-ia",
    title: "Segurança de Sistemas com IA",
    desc: "Investigação emergente de riscos ligados a Prompt Injection (injeção indireta de prompts), engenharia de harnesses e construção de guardrails preventivos contra vazamentos de dados."
  },
  {
    id: "legaltech",
    title: "Legaltech, LGPD & Compliance",
    desc: "A união perfeita de competência jurídica formal com Engenharia de Dados para auditar conformidades algorítmicas, consentimento de cookies, biometria e privacidade de dados."
  },
  {
    id: "prod-escala",
    title: "Produção Intelectual em Escala",
    desc: "Valores factuais comprovados em mais de 116 títulos publicados em 4 idiomas na Amazon KDP, complementados com dezenas de ensaios e artigos de altíssimo tráfego no Jusbrasil e Medium."
  },
  {
    id: "geopolitica",
    title: "Geopolítica, Gestão Pública & Economia",
    desc: "Base analítica densa obtida em Direito e Relações Internacionais aplicados para entender segurança pública, transporte aeroespacial e políticas baseadas em evidências sólidas."
  }
];
