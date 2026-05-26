import * as fs from "fs";
import * as path from "path";
import { booksData } from "./src/data";
import { articlesData } from "./src/articlesData";

// Absolute routes to pre-render
const routes = [
  {
    path: "/",
    title: "Leandro Calado Ferreira — Engenheiro de Dados, IA Aplicada & Direito Digital",
    description: "Portfolio de Leandro Calado Ferreira: Engenheiro de Dados, Bacharel em Direito, MBA pela USP e Autor Técnico com 116 livros de Inteligência Artificial e Data Engineering publicados na Amazon KDP.",
    canonical: "https://leandrocaladoferreira.com/",
    schemaType: "Home",
    htmlContent: `
      <!-- Hero Section -->
      <section class="min-h-[85vh] flex flex-col justify-center py-20 px-6">
        <div class="max-w-7xl mx-auto w-full">
          <span class="text-[#F27D26] font-bold text-xs uppercase tracking-widest block mb-4">Engenheiro de Dados • Autor Técnico Internacional • Direito Digital</span>
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-light italic mb-6 leading-tight font-serif text-white">
            Preenchendo a lacuna entre<br>
            <span class="text-[#F27D26]">Engenharia de Dados</span> e <span class="text-gray-400">Direito Digital</span>
          </h1>
          <p class="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
            Especialista em Model Context Protocol (MCP), orquestrações de IA com n8n, segurança analítica de LLMs e conformação com a LGPD. Autor de 116 livros técnicos publicados na Amazon KDP em quatro idiomas.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/start-here" class="px-6 py-4 border border-[#F5F5F0] text-[#F5F5F0] hover:bg-white hover:text-black font-semibold uppercase tracking-widest text-xs transition-colors rounded-sm">Comece por aqui</a>
            <a href="/books" class="px-6 py-4 border border-rose-500/20 text-[#F27D26] hover:border-[#F27D26]/40 font-semibold uppercase tracking-widest text-xs transition-colors rounded-sm">Ver Biblioteca</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/about",
    title: "Sobre Leandro Calado Ferreira — Trajetória Profissional & Acadêmica",
    description: "Conheça Leandro Calado Ferreira, engenheiro de dados e bacharel em Direito. Pós-graduado pela USP, com foco em modelagem de dados distribuídos, conformidade com a LGPD, regulamentações aeroespaciais e liderança em projetos analíticos.",
    canonical: "https://leandrocaladoferreira.com/about",
    schemaType: "About",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-3xl mx-auto">
          <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Trajetória e Propósito</span>
          <h1 class="text-4xl sm:text-5xl font-light italic mt-3 mb-8 font-serif">Leandro Calado Ferreira</h1>
          <div class="space-y-6 text-gray-400 text-sm leading-relaxed">
            <p><strong>Liderança Interdisciplinar:</strong> Bacharel em Direito, Engenheiro de Dados e pós-graduado de MBA de Data Science pela USP e Software Development pelo IGTI. Estudando no pós-graduado da Johns Hopkins em IA Agente e Model Context Protocol (MCP).</p>
            <p>Especialista consagrado no tráfego de dados massivos, otimização de clusters Databricks, desenvolvimento de esteiras PySpark de altíssimo volume no Itaú Unibanco, automação integrada comercial usando IA e conformação estrita com a LGPD e a segurança contra Prompt Injections.</p>
            <p>Como autor internacional de mais de 116 livros, consolidou resultados factuais na difusão de metodologias práticas de automação, cloud computing e governança de tecnologia.</p>
          </div>
          <div class="mt-12 text-left">
            <a href="/" class="text-[10px] uppercase font-bold font-mono tracking-widest text-[#F27D26] hover:underline">&larr; Voltar para o Início</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/start-here",
    title: "Comece Por Aqui — Hub de Navegação Semântica — Leandro Calado",
    description: "Inicie sua jornada no ecossistema técnico e jurídico de Leandro Calado Ferreira. Explore os hubs voltados para engenharia de dados em nuvem, agentes de inteligência artificial aplicados e blindagem regulatória corporativa.",
    canonical: "https://leandrocaladoferreira.com/start-here",
    schemaType: "Start",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Comece por Aqui</span>
            <h1 class="text-3xl sm:text-4xl font-light italic mt-3 mb-4 font-serif">Ecossistema de Conhecimento</h1>
            <p class="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">Tome contato com os principais núcleos profissionais de pesquisa e implementações executivas desenvolvidas sob os padrões de excelência de Leandro Calado.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-8 bg-[#0F0F0F] border border-[#2A2A2A] rounded-sm hover:border-[#F27D26]/40 transition-colors">
              <h3 class="text-lg italic font-serif text-white mb-2">IA Aplicada em Produção</h3>
              <p class="text-gray-400 text-xs mb-4">Arquitetura de sistemas multi-agentes baseados em MCP (Model Context Protocol) e automações visuais inteligentes em fluxos integrados com n8n.</p>
              <a href="/ai-agents" class="text-[10px] uppercase font-bold font-mono tracking-widest text-[#F27D26] hover:underline">Acessar Hub Semântico &rarr;</a>
            </div>
            <div class="p-8 bg-[#0F0F0F] border border-[#2A2A2A] rounded-sm hover:border-[#F27D26]/40 transition-colors">
              <h3 class="text-lg italic font-serif text-white mb-2">Engenharia de Dados em Nuvem</h3>
              <p class="text-gray-400 text-xs mb-4">Pipelines robustos com AWS Glue, PySpark, Athena e governança centralizada de Big Data no Databricks e Azure.</p>
              <a href="/data-engineering" class="text-[10px] uppercase font-bold font-mono tracking-widest text-[#F27D26] hover:underline">Acessar Hub Semântico &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/books",
    title: "Biblioteca Técnica Internacional (116 Livros) — Leandro Calado Ferreira",
    description: "Explore os manuais publicados por Leandro Calado Ferreira na Amazon KDP sobre IA Agente, Engenharia de Dados, AWS, Databricks, Big Data e Conformidade Legal de Negócios. Todos com links de compra direta.",
    canonical: "https://leandrocaladoferreira.com/books",
    schemaType: "Books",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Amazon Kindle KDP</span>
            <h1 class="text-4xl font-light italic mt-3 mb-4 font-serif">Biblioteca Técnica Internacional</h1>
            <p class="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">Padrões de projeto pragmáticos e manuais em 4 idiomas que pavimentam o entendimento de Engenharia de Dados de Alto Performance e Automações de Tecnologia.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${booksData.map((book, idx) => `
              <div class="p-8 bg-[#0F0F0F] border border-[#2A2A2A] rounded-sm flex flex-col justify-between hover:border-[#F27D26]/40 transition-all">
                <div>
                  <div class="flex justify-between mb-4">
                    <span class="text-3xl">${book.coverEmoji}</span>
                    <span class="text-[10px] font-mono text-[#F27D26] uppercase border border-[#F27D26]/20 px-2 py-0.5 rounded-sm">${book.lang}</span>
                  </div>
                  <h3 class="text-lg italic font-serif text-white mb-2 leading-snug">${book.title}</h3>
                  <p class="text-xs text-gray-400 mb-6 leading-relaxed">${book.description}</p>
                </div>
                <a href="${book.link}" target="_blank" rel="noopener noreferrer" class="w-full text-center py-2.5 bg-[#F27D26]/10 text-[#F27D26] text-[10px] font-mono uppercase font-bold tracking-widest border border-[#F27D26]/20 hover:bg-[#F27D26] hover:text-white transition-all rounded-sm block">Comprar na Amazon</a>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/articles",
    title: "Artigos e Ensaios Publicados — Leandro Calado Ferreira — Jusbrasil & Medium",
    description: "Dossiê de ensaios analíticos publicados por Leandro Calado Ferreira no Jusbrasil e na plataforma Medium. Mais de 100 mil visualizações em temas como fomento mercantil, evolução aéroespacial e inovações com algoritmos de IA.",
    canonical: "https://leandrocaladoferreira.com/articles",
    schemaType: "Articles",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Publicações de Alto Tráfego</span>
            <h1 class="text-4xl font-light italic mt-3 mb-4 font-serif">Ensaios & Artigos de Referência</h1>
            <p class="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">Unindo a visão minuciosa do Direito Digital com análises estatísticas para diagnosticar o panorama contemporâneo de sistemas protegidos e marcos institucionais.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${articlesData.map((art, idx) => `
              <div class="p-8 bg-[#0F0F0F] border border-[#2A2A2A] rounded-sm flex flex-col justify-between hover:border-[#F27D26]/40 transition-all">
                <div>
                  <div class="flex justify-between items-center mb-4">
                    <span class="text-[10px] font-mono uppercase tracking-wider text-gray-500">${art.category}</span>
                    <span class="text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/15 text-[#F27D26] rounded-sm">${art.platform}</span>
                  </div>
                  <h3 class="text-base italic font-serif text-white mb-3 hover:text-[#F27D26] transition-colors leading-snug">${art.title}</h3>
                  <p class="text-xs text-gray-400 mb-6 leading-relaxed">${art.excerpt}</p>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[10px] font-mono text-gray-500">${art.views ? `👁️ ${art.views} views` : `👏 ${art.claps || 0} claps`}</span>
                  <a href="${art.link}" target="_blank" rel="noopener noreferrer" class="text-[10px] uppercase font-bold font-mono tracking-widest text-[#F27D26] hover:underline">Ler Publicação &rarr;</a>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/consulting",
    title: "Consultoria Arquitetônica & Blindagem Tecnológica — Leandro Calado",
    description: "Contrate assessoria especializada de Leandro Calado Ferreira: implantação segura de engenharia de dados em nuvem, robôs e workflows automatizados integrando LLMs via n8n e auditorias regulatórias sob premissas estritas da LGPD.",
    canonical: "https://leandrocaladoferreira.com/consulting",
    schemaType: "Consulting",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-16">
            <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Consultoria Estratégica</span>
            <h1 class="text-4xl font-light italic mt-3 mb-4 font-serif">LCF Consulting</h1>
            <p class="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">Orientando companhias no desenvolvimento seguro de engenharia analítica de dados e blindagem tecnológica.</p>
          </div>
          <div class="grid grid-cols-1 gap-8 mb-16">
            <div class="p-8 bg-[#0F0F0F] border border-[#2A2A2A] rounded-sm">
              <h3 class="text-xl italic font-serif text-[#F27D26] mb-3">Escopo de Atuação Profissional</h3>
              <ul class="space-y-4 text-xs text-gray-300">
                <li class="flex items-start gap-2">
                  <span class="text-[#F27D26] font-bold">&bull;</span>
                  <span><strong>Data Lakes & Data mesh:</strong> Otimização de queries financeiras massivas e modelagem Delta Lake em Azure Databricks e AWS Glue.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#F27D26] font-bold">&bull;</span>
                  <span><strong>AI Systems Alignment:</strong> Projeto de agentes cognitivos baseados em Model Context Protocol (MCP) e barreiras defensivas contra Prompt Injections.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#F27D26] font-bold">&bull;</span>
                  <span><strong>Auditoria regulatória por Design:</strong> Mapeamento do ciclo de vida de dados corporativas sob premissas legais da LGPD.</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-400 mb-6 font-mono">Contato Direto para Arquiteturas Comerciais</p>
            <a href="mailto:leandrocalado.api@gmail.com" class="px-8 py-4 bg-[#F27D26] text-white text-[11px] uppercase font-mono tracking-widest font-bold rounded-sm border border-[#F27D26] hover:bg-transparent hover:text-[#F27D26] transition-colors">Solicitar Orçamento Executivo</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/ai-agents",
    title: "IA Aplicada em Produção — Hub Semântico — Leandro Calado Ferreira",
    description: "Análise analítica e implementações de Model Context Protocol (MCP), orquestrações avançadas com n8n, engenharia de prompts estruturada e governança de agentes autônomos sob controles rigorosos.",
    canonical: "https://leandrocaladoferreira.com/ai-agents",
    schemaType: "SemanticHub",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-3xl mx-auto">
          <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Hub Semântico de Produção</span>
          <h1 class="text-4xl font-light italic mt-3 mb-6 font-serif">IA Aplicada em Produção</h1>
          <div class="prose prose-invert text-gray-300 text-sm leading-relaxed space-y-6">
            <p>O <strong>Model Context Protocol (MCP)</strong> surge como o padrão tecnológico de maior relevância recente para descentralizar o processamento cognitivo de IA, conectando modelos generativos sofisticados de linguagem a bases locais e remotas sem complexidades.</p>
            <p>Ao integrar servidores de contexto em sandboxes restritas, evitamos vulnerabilidades graves inerentes ao tráfego de dados sensíveis e mitigamos as perdas operacionais.</p>
            <h3 class="text-lg italic font-serif text-white mt-8 mb-3">Modelando Sistemas Multi-Agentes com Segurança</h3>
            <p>Por meio de orquestradores flexíveis como <strong>n8n</strong>, modelamos fluxos estruturados que dispensam o desenvolvimento exaustivo base de APIs em Python. A arquitetura multi-agente robusta requer testes exaustivos de engenharia preventiva de inputs e controle absoluto sobre transações delegadas.</p>
          </div>
          <div class="mt-12 text-left">
            <a href="/start-here" class="text-[10px] uppercase font-bold font-mono tracking-widest text-[#F27D26] hover:underline">&larr; Voltar ao Começo</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/data-engineering",
    title: "Engenharia de Dados em Nuvem — Hub Semântico — Leandro Calado Ferreira",
    description: "Arquitetura distribuída de Big Data. Implementação de pipelines ETL/ELT otimizados usando Apache Spark, Databricks Lakehouses (Delta Lake), AWS Glue PySpark jobs e centralização estatística de dados.",
    canonical: "https://leandrocaladoferreira.com/data-engineering",
    schemaType: "SemanticHub",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-3xl mx-auto">
          <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Hub Semântico de Engenharia</span>
          <h1 class="text-4xl font-light italic mt-3 mb-6 font-serif">Engenharia de Dados em Nuvem</h1>
          <div class="prose prose-invert text-gray-300 text-sm leading-relaxed space-y-6">
            <p>A engenharia analítica em grande escala ampara-se no processamento paralelo sobre frameworks de altíssima eficiência operacional como o <strong>Apache Spark</strong> e nas arquiteturas robustas do <strong>Databricks</strong>.</p>
            <p>No desenvolvimento de pipelines empresariais, consolidamos o conceito de <strong>Lakehouse</strong>, organizando o ciclo de vida dos dados em partições estanques (Bronze, Silver e Gold) em buckets dedicados no Amazon S3 ou no ADLS Gen2 da Azure, estruturados com o formato Delta Lake.</p>
            <h3 class="text-lg italic font-serif text-white mt-8 mb-3">Otimização Operacional e FinOps em Big Data</h3>
            <p>No Itaú Unibanco, a consolidação estrutural de Glue PySpark Jobs permitiu otimizações expressivas que reduziram os custos de instâncias Athena e clusters, provando que o redesenho preventivo possui maior impacto orçamentário do que o mero escalonamento vertical.</p>
          </div>
          <div class="mt-12 text-left">
            <a href="/start-here" class="text-[10px] uppercase font-bold font-mono tracking-widest text-[#F27D26] hover:underline">&larr; Voltar ao Começo</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/safe-ai",
    title: "Segurança de Sistemas com IA — Hub Semântico — Leandro Calado Ferreira",
    description: "Análise técnica de vulnerabilidades em modelos de linguagem grande (LLM), perigos de Prompt Injection indireto e a fabricação de guardrails dedicados de segurança e harnesses de testes analíticos.",
    canonical: "https://leandrocaladoferreira.com/safe-ai",
    schemaType: "SemanticHub",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-3xl mx-auto">
          <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Hub Semântico de Cibersegurança</span>
          <h1 class="text-4xl font-light italic mt-3 mb-6 font-serif">Segurança de Sistemas com IA</h1>
          <div class="prose prose-invert text-gray-300 text-sm leading-relaxed space-y-6">
            <p>O advento de agentes inteligentes que interpretam conteúdos livres e páginas externas cria rotas propícias para o vetor de ameaça moderno denominado <strong>Prompt Injection indireto</strong>.</p>
            <p>Para mitigar riscos, a engenharia de segurança desenvolve <strong>harnesses de testes rigorosos</strong> que atacam exaustivamente a resiliência gramatical do modelo em ambientes controlados (sandboxing), forçando saídas sanitizadas de dados antes de sua integração física com APIs de decisão operacional ou faturamento comercial.</p>
          </div>
          <div class="mt-12 text-left">
            <a href="/start-here" class="text-[10px] uppercase font-bold font-mono tracking-widest text-[#F27D26] hover:underline">&larr; Voltar ao Começo</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/legaltech",
    title: "Legaltech, LGPD & Conformidade — Hub Semântico — Leandro Calado Ferreira",
    description: "União entre Ciência de Dados e Direito Digital para auditorias algorítmicas, políticas de privacidade, consentimento de rastreadores e cookies, e conformação estrita com a Lei Geral de Proteção de Dados.",
    canonical: "https://leandrocaladoferreira.com/legaltech",
    schemaType: "SemanticHub",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-3xl mx-auto">
          <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Hub Semântico de Compliance</span>
          <h1 class="text-4xl font-light italic mt-3 mb-6 font-serif">Legaltech, LGPD & Compliance</h1>
          <div class="prose prose-invert text-gray-300 text-sm leading-relaxed space-y-6">
            <p>A auditoria e o mapeamento do tráfego das informações de uma companhia tornam-se imperativos sob o crivo regulatório da <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.</p>
            <p>Por meio da união de premissas processuais jurídicas com rotas automatizadas de engenharia de bases, conseguimos mapear consentimentos e desenhar políticas de cookies funcionais que resguardam as empresas de multas administrativas severas junto à ANPD.</p>
          </div>
          <div class="mt-12 text-left">
            <a href="/start-here" class="text-[10px] uppercase font-bold font-mono tracking-widest text-[#F27D26] hover:underline">&larr; Voltar ao Começo</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: "/automation",
    title: "Automação Industrial de Processos & N8N — Leandro Calado Ferreira",
    description: "Explore como otimizar workflows corporativos e monetizar tarefas online conectando faturamentos do Stripe e rotinas webhooks usando lógica de automação n8n sem código excessivo.",
    canonical: "https://leandrocaladoferreira.com/automation",
    schemaType: "SemanticHub",
    htmlContent: `
      <section class="py-24 px-6 text-[#F5F5F0]">
        <div class="max-w-3xl mx-auto">
          <span class="text-[#F27D26] uppercase font-bold text-[10px] tracking-widest">Hub de Otimização Operacional</span>
          <h1 class="text-4xl font-light italic mt-3 mb-6 font-serif">Automação de Processos Industriais</h1>
          <div class="prose prose-invert text-gray-300 text-sm leading-relaxed space-y-6">
            <p>Automações de fluxos corporativos robustos baseiam-se em designs escaláveis e tolerantes a falhas. Integrando <strong>n8n</strong>, APIs transacionais de billing como <strong>Stripe</strong> e robôs autônomos, liberamos gargalos operacionais e maximizamos margens operacionais de times de tecnologia.</p>
          </div>
          <div class="mt-12 text-left">
            <a href="/start-here" class="text-[10px] uppercase font-bold font-mono tracking-widest text-[#F27D26] hover:underline">&larr; Voltar ao Começo</a>
          </div>
        </div>
      </section>
    `
  }
];

function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Leandro Calado Ferreira",
    "alternateName": "Leandro Calado",
    "url": "https://leandrocaladoferreira.com",
    "jobTitle": "Senior Data Engineer, Technical Author & Founder",
    "legalName": "Leandro Calado Ferreira",
    "worksFor": {
      "@type": "Organization",
      "name": "LCF Consulting",
      "url": "https://leandrocaladoferreira.com/#contato"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Universidade de São Paulo",
        "alternateName": "USP"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Pontifícia Universidade Católica de São Paulo",
        "alternateName": "PUC-SP"
      }
    ],
    "knowsAbout": [
      "Model Context Protocol (MCP)",
      "AI Agents",
      "n8n Workflow Automation",
      "AWS Glue PySpark ETL",
      "Databricks Lakehouse Big Data",
      "Apache Spark",
      "General Data Protection Law (LGPD) Compliance",
      "Prompt Injection & LLM Safety",
      "Legaltech & Digital Law",
      "Geopolitics & Air Transportation Regulation"
    ],
    "description": "Leandro Calado Ferreira é um conceituado Engenheiro de Dados, Bacharel em Direito, pós-graduando em MBA de Data Science pela USP e Autor Técnico Internacional com mais de 116 manuais de Inteligência Artificial e Big Data publicados na Amazon Kindle KDP.",
    "sameAs": [
      "https://www.linkedin.com/in/lcaladoferreira/",
      "https://github.com/lcaladoferreira",
      "https://leandrocaladoferreira.medium.com/",
      "https://leandrocalado.jusbrasil.com.br/",
      "http://lattes.cnpq.br/0050162670485497"
    ]
  };
}

function generateBooksSchema() {
  const person = generatePersonSchema();
  const bookEntities = booksData.map((book) => ({
    "@type": "Book",
    "name": book.title,
    "asin": book.asin,
    "isbn": book.isbn,
    "url": book.link,
    "author": {
      "@type": "Person",
      "name": "Leandro Calado Ferreira"
    },
    "description": book.description,
    "inLanguage": book.lang === "Inglês" ? "en" : book.lang === "Espanhol" ? "es" : book.lang === "Alemão" ? "de" : "pt"
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "CollectionPage",
        "@id": "https://leandrocaladoferreira.com/books/#collection",
        "url": "https://leandrocaladoferreira.com/books",
        "name": "Biblioteca Técnica Internacional de Leandro Calado Ferreira",
        "description": "Catálogo completo de livros de Engenharia de Dados, Nuvem e IA publicados na Amazon KDP por Leandro Calado Ferreira.",
        "about": person,
        "hasPart": bookEntities
      }
    ]
  };
}

function generateArticlesSchema() {
  const person = generatePersonSchema();
  const articleEntities = articlesData.map((art) => ({
    "@type": "Article",
    "headline": art.title,
    "url": art.link,
    "author": {
      "@type": "Person",
      "name": "Leandro Calado Ferreira"
    },
    "publisher": {
      "@type": "Organization",
      "name": art.platform,
      "url": art.platform === "Medium" ? "https://leandrocaladoferreira.medium.com" : "https://leandrocalado.jusbrasil.com.br"
    },
    "description": art.excerpt,
    "inLanguage": art.platform === "Medium" ? "en" : "pt"
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "CollectionPage",
        "@id": "https://leandrocaladoferreira.com/articles/#collection",
        "url": "https://leandrocaladoferreira.com/articles",
        "name": "Trabalhos, Ensaios e Artigos de Leandro Calado Ferreira",
        "description": "Arquivo completo de manifestos regulatórios e técnicos de Leandro Calado publicados no Jusbrasil e Medium.",
        "about": person,
        "hasPart": articleEntities
      }
    ]
  };
}

function generateSchemaForRoute(schemaType: string) {
  const person = generatePersonSchema();
  if (schemaType === "Books") {
    return JSON.stringify(generateBooksSchema(), null, 2);
  }
  if (schemaType === "Articles") {
    return JSON.stringify(generateArticlesSchema(), null, 2);
  }

  // General WebPage schemas pointing back to Leandro
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebPage",
        "name": schemaType + " Page",
        "author": {
          "@type": "Person",
          "name": "Leandro Calado Ferreira"
        }
      }
    ]
  }, null, 2);
}

function run() {
  console.log("Starting static pre-rendering build script...");
  const distDir = path.join(process.cwd(), "dist");
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error(`Build assets template not found at ${templatePath}. Ensure 'vite build' completed successfully!`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, "utf-8");

  routes.forEach((route) => {
    let rewrittenHtml = baseHtml;

    // 1. Replace Title
    rewrittenHtml = rewrittenHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    );

    // 2. Replace Meta Description
    rewrittenHtml = rewrittenHtml.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${route.description}" />`
    );

    // 3. Inject Canonical Link (or replace existing if there was one, if not insert before head closing)
    const canonicalLink = `<link rel="canonical" href="${route.canonical}" />`;
    if (rewrittenHtml.includes('rel="canonical"')) {
      rewrittenHtml = rewrittenHtml.replace(/<link rel="canonical" href=".*?" \/>/, canonicalLink);
    } else {
      rewrittenHtml = rewrittenHtml.replace("</head>", `  ${canonicalLink}\n  </head>`);
    }

    // 4. Update Open Graph values
    rewrittenHtml = rewrittenHtml.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${route.title}" />`
    );
    rewrittenHtml = rewrittenHtml.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${route.description}" />`
    );

    // 5. Update Twitter Card values
    rewrittenHtml = rewrittenHtml.replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    rewrittenHtml = rewrittenHtml.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // 6. Inject specific JSON-LD structures
    const routeSchema = generateSchemaForRoute(route.schemaType);
    const schemaScriptInjected = `<script type="application/ld+json">\n${routeSchema}\n</script>`;
    
    // Replace the default Person schema with our targeted route schema
    rewrittenHtml = rewrittenHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, schemaScriptInjected);

    // 7. Inject static HTML content inside '#root' for crawler rendering when Javascript is disabled!
    const headerHtml = `
      <header class="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#2A2A2A] h-20 transition-all">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" class="flex items-center gap-3 group">
            <div class="w-8 h-8 border border-[#F5F5F0] text-[#F5F5F0] flex items-center justify-center font-bold text-xs rounded-sm">LC</div>
            <span class="text-xs tracking-[0.25em] uppercase font-semibold text-white hidden sm:inline-block">Leandro Calado <span class="opacity-50 text-[10px] font-light">Ferreira</span></span>
          </a>
          <nav class="hidden md:flex items-center gap-8">
            <a href="/about" class="text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-white font-medium">SOBRE</a>
            <a href="/start-here" class="text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-white font-medium">ECOSSISTEMA</a>
            <a href="/books" class="text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-white font-medium">LIVROS</a>
            <a href="/articles" class="text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-white font-medium">ARTIGOS</a>
            <a href="/consulting" class="text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-white font-medium">CONSULTORIA</a>
          </nav>
          <div class="flex items-center gap-3">
            <a href="/consulting" class="px-5 py-2.5 text-[10px] tracking-widest uppercase border border-[#F5F5F0] text-[#F5F5F0] rounded font-semibold hover:bg-white hover:text-black transition-all">Consultoria</a>
          </div>
        </div>
      </header>
    `;

    const footerHtml = `
      <footer class="py-16 border-t bg-[#0F0F0F] border-[#2A2A2A]">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-start gap-6 pb-10 border-b border-white/5">
            <div>
              <p class="text-2xl font-light italic leading-none mb-1 text-[#F27D26] font-serif">Leandro Calado Ferreira</p>
              <p class="text-[10px] uppercase tracking-wider opacity-60 mt-1 font-mono">Engenheiro de Dados • Autor Técnico Internacional • Direito Digital</p>
            </div>
            <nav class="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest font-mono font-bold text-gray-400">
              <a href="/about" class="hover:text-white">SOBRE</a>
              <a href="/start-here" class="hover:text-white">ECOSSISTEMA</a>
              <a href="/books" class="hover:text-white">LIVROS</a>
              <a href="/articles" class="hover:text-white">ARTIGOS</a>
              <a href="/consulting" class="hover:text-white">CONSULTORIA</a>
              <a href="/start-here" class="hover:text-white">COMECE POR AQUI</a>
            </nav>
          </div>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-[11px] opacity-50 font-mono">
            <span>© ${new Date().getFullYear()} Leandro Calado Ferreira. Todos os direitos reservados.</span>
            <div class="flex flex-wrap items-center gap-4 text-[#F27D26] font-bold">
              <a href="https://github.com/lcaladoferreira" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/lcaladoferreira/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://leandrocalado.jusbrasil.com.br/" target="_blank" rel="noopener noreferrer">Jusbrasil</a>
              <a href="https://leandrocaladoferreira.medium.com/" target="_blank" rel="noopener noreferrer">Medium</a>
              <a href="http://lattes.cnpq.br/0050162670485497" target="_blank" rel="noopener noreferrer">Lattes</a>
            </div>
          </div>
        </div>
      </footer>
    `;

    const fullScaffold = `
      <div class="min-h-screen bg-[#0A0A0A] text-[#F5F5F0]">
        ${headerHtml}
        <main class="relative pt-20">
          ${route.htmlContent}
        </main>
        ${footerHtml}
      </div>
    `;

    // Inject the static HTML page skeleton into the #root element for instant crawling & no-JS indexing
    rewrittenHtml = rewrittenHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${fullScaffold}</div>`
    );

    // Save outputs
    if (route.path === "/") {
      fs.writeFileSync(templatePath, rewrittenHtml, "utf-8");
      console.log(`Pre-rendered route [HOME]: /`);
    } else {
      const targetDir = path.join(distDir, route.path);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, "index.html"), rewrittenHtml, "utf-8");
      console.log(`Pre-rendered route: ${route.path}`);
    }
  });

  console.log("Static pre-rendering successfully completed. Build asset generation finished!");
}

run();
