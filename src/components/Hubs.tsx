import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Database, 
  Cpu, 
  Zap, 
  Scale, 
  HelpCircle, 
  BookOpen, 
  FileText, 
  ArrowLeft, 
  ChevronRight, 
  ExternalLink,
  Briefcase,
  Layers,
  GraduationCap
} from "lucide-react";
import { Language } from "../translations";
import { booksData } from "../data";
import { articlesData } from "../articlesData";
import HarnessEngineeringBook from "./HarnessEngineeringBook";

interface HubsProps {
  isDark: boolean;
  language: Language;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Hubs({ isDark, language, currentPath, onNavigate }: HubsProps) {
  // Normalize path to support slash-less or localized
  const path = currentPath.toLowerCase().replace(/\/$/, "");

  // Common styles
  const cardBgClass = isDark ? "bg-[#0F0F0F] border-[#2A2A2A]" : "bg-white border-[#E5E5DF]";
  const textMutedClass = isDark ? "text-[#8E8E8E]" : "text-[#555555]";
  const textSubtleClass = isDark ? "text-[#6E6E6E]" : "text-[#777777]";

  // Filter books and articles by category for display in specific hubs
  const filterBooksByHub = (category: string) => {
    return booksData.filter(b => b.category === category);
  };

  const filterArticlesByPlatform = (platform: "Jusbrasil" | "Medium") => {
    return articlesData.filter(a => a.platform === platform);
  };

  const filterArticlesByCategory = (category: string) => {
    return articlesData.filter(a => a.category === category);
  };

  // Structured Social/Authority Links with Semantic Context
  const semanticLinks = {
    professional: [
      {
        name: "LinkedIn Profile",
        url: "https://www.linkedin.com/in/lcaladoferreira/",
        description: language === "pt" 
          ? "Perfil profissional oficial de Leandro Calado Ferreira, mapeando conexões corporativas, artigos semanais e liderança técnica em Engenharia de Dados e IA."
          : "Official professional profile of Leandro Calado Ferreira, detailing corporate connections, technical leadership, and weekly publications in Data & AI."
      },
      {
        name: "Lattes CV (CNPq)",
        url: "http://lattes.cnpq.br/0050162670485497",
        description: language === "pt"
          ? "Currículo acadêmico oficial brasileiro na plataforma CNPq, atestando o histórico acadêmico rigoroso, pesquisas científicas e titulações formais."
          : "Official Brazilian academic curriculum on the CNPq database, certifying academic publications, scientific research, and formal credentials."
      }
    ],
    editorial: [
      {
        name: "Amazon Author Central",
        url: "https://www.amazon.com/author/leandrocalado",
        description: language === "pt"
          ? "Catálogo oficial de autor de Leandro Calado na Amazon global, hospedando sua biblioteca técnica com mais de 116 livros publicados e manuais de engenharia."
          : "Official Amazon author central catalog housing Leandro Calado's physical and digital engineering manuals across 116 published titles globally."
      },
      {
        name: "Medium Technical Board",
        url: "https://leandrocaladoferreira.medium.com/",
        description: language === "pt"
          ? "Artigos técnicos detalhados com código fonte focado no ecossistema de dados, automações visuais com n8n, implementações MCP e DeepSeek."
          : "In-depth technical articles accompanied by source code snippets, detailing visual workflows, n8n, Model Context Protocol servers, and DeepSeek model behavior."
      },
      {
        name: "Jusbrasil Insights",
        url: "https://leandrocalado.jusbrasil.com.br/",
        description: language === "pt"
          ? "Análises regulatórias e peças de direito comparado versando sobre responsabilidade algorítmica, proteção mútua de dados e impactos jurídicos da automação."
          : "Regulatory analysis, code templates, and essays outlining algorithmic liabilities, compliance audits, and digital law in Brazil."
      },
      {
        name: "Safe AI, Law & Data Newsletter",
        url: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6871418044783099904",
        description: language === "pt"
          ? "Newsletter quinzenal no LinkedIn com mais de 1.559 assinantes focado em engenharia de prompt segura, agentes de IA corporativos e regulação."
          : "Biweekly LinkedIn newsletter with over 1,559 active subscribers focused on secure prompts, enterprise autonomous agents, and strategic compliance."
      }
    ],
    code: [
      {
        name: "GitHub Repository Hub",
        url: "https://github.com/lcaladoferreira",
        description: language === "pt"
          ? "Repositório público contendo implementações locais, servidores MCP customizados, scripts de automação, pipelines ETL e código React."
          : "Public ecosystem containing code structures, customized lightweight MCP servers, automated data flows, ETL loops, and scalable React templates."
      }
    ]
  };

  // Hub definitions matching paths
  const renderBreadcrumbs = (hubName: string) => {
    return (
      <nav className="flex items-center gap-2 mb-8 font-mono text-[10px] uppercase tracking-widest text-[#F27D26]" aria-label="Breadcrumb">
        <button onClick={() => onNavigate("/")} className="hover:underline opacity-60 hover:opacity-100 transition-all cursor-pointer">
          {language === "pt" ? "Início" : "Home"}
        </button>
        <ChevronRight className="w-3 h-3 opacity-30" />
        <button onClick={() => onNavigate("/start-here")} className="hover:underline opacity-60 hover:opacity-100 transition-all cursor-pointer">
          {language === "pt" ? "Portas de Entrada" : "Get Started"}
        </button>
        <ChevronRight className="w-3 h-3 opacity-30" />
        <span className="font-bold">{hubName}</span>
      </nav>
    );
  };

  const renderTitle = (title: string, subtitle: string) => {
    return (
      <header className="mb-12 border-b border-gray-500/10 pb-8">
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-light italic tracking-tight text-[#F27D26] mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {title}
        </h1>
        <p className={`text-sm sm:text-base ${textMutedClass} max-w-3xl leading-relaxed`}>
          {subtitle}
        </p>
      </header>
    );
  };

  const renderKnowledgeGraph = (relations: { source: string; rel: string; target: string }[]) => {
    return null;
  };

  const renderStructuredLinksSection = () => {
    return (
      <section className="mb-12" aria-label="Rede de Propriedades e Autoridade Semântica">
        <h2 
          className="text-xl font-light italic mb-6 text-[#F27D26]"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {language === "pt" ? "Rede de Autoridade e Fontes Oficiais" : "Authority Network & Canonical Sources"}
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[11px] uppercase tracking-widest mb-4 font-bold text-[#5ba8b0]">
                {language === "pt" ? "CONSELHO EDITORIAL E CONTEÚDO" : "EDITORIAL BOARDS & ESSAYS"}
              </h3>
              <ul className="space-y-4">
                {semanticLinks.editorial.map((link, idx) => (
                  <li key={idx} className="border-b border-gray-500/5 pb-3 last:border-0 last:pb-0">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold uppercase tracking-wider hover:text-[#F27D26] transition-colors flex items-center gap-1.5"
                    >
                      {link.name} <ExternalLink className="w-3 h-3 text-[#F27D26]" />
                    </a>
                    <p className={`text-[11px] leading-relaxed mt-1 ${textSubtleClass}`}>
                      {link.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className={`p-6 border rounded-sm ${cardBgClass}`}>
                <h3 className="font-mono text-[11px] uppercase tracking-widest mb-4 font-bold text-[#5ba8b0]">
                  {language === "pt" ? "QUALIFICAÇÕES E PERFIS CORPORATIVOS" : "CREDENTIALS & CORPORATE PROFILES"}
                </h3>
                <ul className="space-y-4">
                  {semanticLinks.professional.map((link, idx) => (
                    <li key={idx} className="border-b border-gray-500/5 pb-3 last:border-0 last:pb-0">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold uppercase tracking-wider hover:text-[#F27D26] transition-colors flex items-center gap-1.5"
                      >
                        {link.name} <ExternalLink className="w-3 h-3 text-[#F27D26]" />
                      </a>
                      <p className={`text-[11px] leading-relaxed mt-1 ${textSubtleClass}`}>
                        {link.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 border rounded-sm ${cardBgClass}`}>
                <h3 className="font-mono text-[11px] uppercase tracking-widest mb-4 font-bold text-[#5ba8b0]">
                  {language === "pt" ? "DESENVOLVIMENTO & SOFTWARE" : "DEVELOPMENT & RUNTIMES"}
                </h3>
                <ul className="space-y-4">
                  {semanticLinks.code.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold uppercase tracking-wider hover:text-[#F27D26] transition-colors flex items-center gap-1.5"
                      >
                        {link.name} <ExternalLink className="w-3 h-3 text-[#F27D26]" />
                      </a>
                      <p className={`text-[11px] leading-relaxed mt-1 ${textSubtleClass}`}>
                        {link.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // RENDER SPECFIC HUBS
  const renderSafeAIHub = () => {
    const hubBooks = filterBooksByHub("ia").slice(0, 3);
    const hubArticles = filterArticlesByCategory("IA & Direito").slice(0, 3);

    const connections = [
      { source: "Leandro Calado", rel: "RESEARCHES_AND_IMPLEMENTS", target: "Safe AI & Alignment" },
      { source: "Leandro Calado", rel: "DESIGNS_DLP_DEFENSE", target: "Prompt Injection Control" },
      { source: "Safe AI", rel: "INTEGRATES_LEGAL_COMPLIANCE", target: "Legaltech Ecosystem" },
      { source: "Manual: ChatGPT for Lawyers", rel: "MAPS_RISKS_OF", target: "Corporate Law Leaks" }
    ];

    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Safe AI & Alinhamento" : "Safe AI & Alignment")}
        
        {/* Dynamic LD-JSON specific injection */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/safe-ai",
                  "url": "https://leandrocaladoferreira.com/safe-ai",
                  "name": "Safe AI and LLM Alignment Hub - Leandro Calado",
                  "description": "Enterprise security frameworks, Prompt Injection preventative guardrails, and compliance analysis tailored for advanced generative models.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                },
                {
                  "@type": "Person",
                  "@id": "https://leandrocaladoferreira.com/#person",
                  "name": "Leandro Calado Ferreira",
                  "knowsAbout": ["Safe AI", "Prompt Injection Defense", "LLM Alignment", "Legaltech Compliance"]
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "Safe AI, Alinhamento & Prevenção a Vulnerabilidades" : "Safe AI, LLM Alignment & Vulnerability Mitigation",
          language === "pt"
            ? "O desenvolvimento e implantação de Inteligência Artificial generativa corporativa sob rigorosos regimes de compliance técnico e segurança de dados (defesa contra Injeção de Prompts e vazamento de informações)."
            : "The architectural framework of developing and deploying enterprise-grade generative intelligence under strict data security and compliance guardrails."
        )}

        {renderKnowledgeGraph(connections)}

        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-4 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Teses de Segurança Operacional & Alinhamento" : "Operational Safety & Alignment Thesis"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed">
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                01 / {language === "pt" ? "BLINDAGEM CONTRA PROMPT INJECTION" : "PROMPT INJECTION DEFENSE"}
              </h3>
              <p>
                {language === "pt"
                  ? "Ataques de Injeção Indireta de Prompt (Indirect Prompt Injection) exploram o fluxo onde dados externos não-confiáveis alimentam as janelas de contexto de LLMs. Estruturo guardrails e validadores estruturais que neutralizam payloads em tempo real."
                  : "Indirect Prompt Injection attacks exploit data pipelines feeding unsafe external inputs into an LLM context. We implement custom strict validation parsers to isolate and drop malicious payloads at ingestion runtime."}
              </p>
            </div>
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                02 / {language === "pt" ? "PRIVACY BY DESIGN & CENSORSHIP" : "PRIVACY BY DESIGN & DLP"}
              </h3>
              <p>
                {language === "pt"
                  ? "Sistemas transacionais devem higienizar dados biométricos, credenciais e dados pessoais (PII) antes que alcancem provedores externos de LLM. Implementação local de regexes e hashes de tokenização seguras."
                  : "Cognitive solutions must scrub raw biometrics, tokens, and PII before shipping context to remote API endpoints. We specialize in building low-latency, localized sanitizing layers."}
              </p>
            </div>
          </div>
        </section>

        {/* Selected Books Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Livros Oficiais Correspondentes" : "Selected Published Manuals"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hubBooks.map(book => (
              <div key={book.id} className={`p-4 border rounded-sm flex flex-col justify-between ${cardBgClass}`}>
                <div>
                  <span className="text-xl" role="img" aria-hidden="true">{book.coverEmoji}</span>
                  <h3 className="font-mono text-[11px] font-bold tracking-tight uppercase mt-2">{book.title}</h3>
                  <p className={`text-[10px] leading-relaxed mt-1 ${textMutedClass}`}>{book.description}</p>
                </div>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-[#F27D26] uppercase font-mono tracking-wider mt-4 flex items-center gap-1 hover:underline">
                  Ver livro <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Articles Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Artigos Científicos & Ensaios Relacionados" : "Associated Papers & Technical Essays"}
          </h2>
          <div className="space-y-4">
            {hubArticles.length > 0 ? (
              hubArticles.map((art, i) => (
                <div key={i} className={`p-4 border rounded-sm ${cardBgClass}`}>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#5ba8b0]">{art.platform} • {art.category}</span>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-tight mt-1">{art.title}</h3>
                  <p className={`text-xs ml-0 mt-1 pb-2 border-b border-gray-500/5 ${textSubtleClass}`}>{art.excerpt}</p>
                  <a href={art.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono font-bold text-[#F27D26] hover:underline mt-2">
                    Ler publicação original <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))
            ) : (
              <p className={`text-xs ${textMutedClass}`}>{language === "pt" ? "Carregando produções do acervo..." : "Populating collection..."}</p>
            )}
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <div className="mt-8 pt-6 border-t border-gray-500/10 text-center">
          <button 
            onClick={() => onNavigate("/")}
            className="px-6 py-2 border border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {language === "pt" ? "Voltar ao Início" : "Back to Home"}
          </button>
        </div>
      </article>
    );
  };

  const renderDataEngineeringHub = () => {
    const hubBooks = filterBooksByHub("dados").slice(0, 3);
    const hubArticles = filterArticlesByCategory("Engenharia de Dados").slice(0, 3);

    const connections = [
      { source: "Leandro Calado", rel: "PRODUCES_BIG_DATA_PIPELINES", target: "Apache Spark / PySpark" },
      { source: "AWS / Azure Cloud", rel: "REDUCES_COST_AND_TIME", target: "Data Lakehouse (Delta Lake)" },
      { source: "JUCESP Registry", rel: "ESTABLISHED_HISTORIC_LAWS", target: "Commercial Indicators" },
      { source: "Governo SP / SDE", rel: "SPEEDS_UP_ETL_BY_25", target: "Azure Synapse & Glue" }
    ];

    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Engenharia de Dados" : "Data Engineering")}
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/data-engineering",
                  "url": "https://leandrocaladoferreira.com/data-engineering",
                  "name": "Cloud Data Engineering Hub - Leandro Calado",
                  "description": "Distributed computing processing, AWS Glue pipelines, Azure Databricks lakes and Spark micro-batch optimization.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "Engenharia de Dados em Larga Escala (Cloud Big Data)" : "Cloud Data Engineering & Enterprise Pipelines",
          language === "pt"
            ? "Mapeando a arquitetura física e lógica de sistemas analíticos complexos. Manipulação eficiente de TBs por meio do Apache Spark, computação serveless, e lagos de dados corporativos (Databricks, S3 Lakehouse, Deltalake)."
            : "Structuring physical databases and parallel distributed pipelines. Leveraging serverless routines, Parquet schema integration, and scalable lakes across AWS and Azure environments."
        )}

        {renderKnowledgeGraph(connections)}

        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-4 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Focos Metodológicos de Engenharia" : "Core Technical Competencies"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed">
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                01 / {language === "pt" ? "COMPUTAÇÃO PARALELA DISTRIBUÍDA" : "DISTRIBUTED COMPUTE TUNING"}
              </h3>
              <p>
                {language === "pt"
                  ? "Tuning fino em clusterizações Spark (Azure Databricks ou AWS Glue). Ajustes cirúrgicos em skew de partições, shuffle partitions, broadcast joins e otimização de cache para conter orçamentos e tempo de execução."
                  : "Surgical performance tuning of Spark runtimes. Managing partition skews, data shuffles, executing broadcast joins, and caching intermediate tables to slash runtime costs up to 30%."}
              </p>
            </div>
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                02 / {language === "pt" ? "MEDIDAS DE GOVERNANÇA DE COMPLIANCE LAKES" : "DATA QUALITY & OBSERVABILITY"}
              </h3>
              <p>
                {language === "pt"
                  ? "Configuração de observability proativa em buckets analíticos, rastreamento de linhagem de dados end-to-end (Data Lineage) e checagem contínua de contratos estatísticos com AWS Athena."
                  : "Developing automated schema guards and schema drift alarms using Serverless Athena alerts, AWS Lambda rules, and structural testing hooks representing secure enterprise policies."}
              </p>
            </div>
          </div>
        </section>

        {/* Selected Books Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Manuais Técnicos Selecionados" : "Published Technical Books"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hubBooks.map(book => (
              <div key={book.id} className={`p-4 border rounded-sm flex flex-col justify-between ${cardBgClass}`}>
                <div>
                  <span className="text-xl" role="img" aria-hidden="true">{book.coverEmoji}</span>
                  <h3 className="font-mono text-[11px] font-bold tracking-tight uppercase mt-2">{book.title}</h3>
                  <p className={`text-[10px] leading-relaxed mt-1 ${textMutedClass}`}>{book.description}</p>
                </div>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-[#F27D26] uppercase font-mono tracking-wider mt-4 flex items-center gap-1 hover:underline">
                  Ver livro <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Articles Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Artigos Técnicos Publicados" : "Technical Articles"}
          </h2>
          <div className="space-y-4">
            {hubArticles.length > 0 ? (
              hubArticles.map((art, i) => (
                <div key={i} className={`p-4 border rounded-sm ${cardBgClass}`}>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#5ba8b0]">{art.platform} • {art.category}</span>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-tight mt-1">{art.title}</h3>
                  <p className={`text-xs ml-0 mt-1 pb-2 border-b border-gray-500/5 ${textSubtleClass}`}>{art.excerpt}</p>
                  <a href={art.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono font-bold text-[#F27D26] hover:underline mt-2">
                    Ler artigo <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))
            ) : (
              <p className={`text-xs ${textMutedClass}`}>{language === "pt" ? "Mapeando repositório de artigos..." : "Loading articles..."}</p>
            )}
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <div className="mt-8 pt-6 border-t border-gray-500/10 text-center">
          <button 
            onClick={() => onNavigate("/")}
            className="px-6 py-2 border border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {language === "pt" ? "Voltar ao Início" : "Back to Home"}
          </button>
        </div>
      </article>
    );
  };

  const renderAIAgentsHub = () => {
    const hubBooks = filterBooksByHub("ia").slice(3, 6);
    const hubArticles = filterArticlesByCategory("IA & Automação").slice(0, 3);

    const connections = [
      { source: "Leandro Calado", rel: "ENGINEERS_COGNITIVE_RUNTIMES", target: "Model Context Protocol" },
      { source: "MCP Client", rel: "EXPOSES_SECURE_RESOURCES", target: "Vetted Core Databases" },
      { source: "Pydantic AI", rel: "FORCES_STRUCTURAL_IO_ON", target: "DeepSeek & Gemini Models" },
      { source: "AI Agent", rel: "AUTOMATES_BUSINESS_LOGICS", target: "n8n Enterprise Flows" }
    ];

    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Agentes de IA & MCP" : "AI Agents & MCP")}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/ai-agents",
                  "url": "https://leandrocaladoferreira.com/ai-agents",
                  "name": "Model Context Protocol (MCP) and AI Agents Hub - Leandro Calado",
                  "description": "Architecting autonomous systems based on the Model Context Protocol (MCP) and visual agent workflows.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "Agentes Cognitivos Autônomos & Model Context Protocol (MCP)" : "Agentic AI, Autonomous Workflows & MCP Servers",
          language === "pt"
            ? "O avanço da inteligência não repousa em prompts avulsos, mas em infraestruturas onde agentes autônomos acessam e alteram estados de sistemas corporativos por meio de canais seguros parametrizados pelo protocolo padrão MCP."
            : "The next phase of enterprise automation utilizes standardized open protocols (MCP) to plug client models securely into filesystems, PostgreSQL pipelines, and live developer sandboxes."
        )}

        {renderKnowledgeGraph(connections)}

        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-4 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Pilares Tecnológicos de Agentes" : "Agentic Architectural Framework"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed">
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                01 / {language === "pt" ? "MODEL CONTEXT PROTOCOL (MCP)" : "MODEL CONTEXT PROTOCOL STANDARD"}
              </h3>
              <p>
                {language === "pt"
                  ? "Sistematização do protocolo aberto desenvolvido pela Anthropic. Projetamos servidores MCP customizados escritos em Node/Python que controlam acessos a APIs privadas, minimizando erros e permitindo transações limpas sem vazar dados."
                  : "Deploying and scaling formal Model Context Protocol nodes. Standardizing structural communication, securing read/write local folder mounts, and feeding clean context directly into LLM prompts."}
              </p>
            </div>
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                02 / {language === "pt" ? "ORQUESTRADORES DE RETRIEVING E MEMÓRIA" : "COGNITIVE ROUTING & MEMORY"}
              </h3>
              <p>
                {language === "pt"
                  ? "Construção de memórias semânticas persistentes em banco de dados vetoriais (RAG) combinados com sistemas de roteamento estatístico baseados em intenção (intent routing)."
                  : "Integrating multi-role routing and structured outputs using Pydantic parameters. Ensuring precise schema generation from reasoning agents while preserving system memory state."}
              </p>
            </div>
          </div>
        </section>

        {/* Selected Books Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Livros Oficiais na Amazon" : "Authored Reference Books"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hubBooks.map(book => (
              <div key={book.id} className={`p-4 border rounded-sm flex flex-col justify-between ${cardBgClass}`}>
                <div>
                  <span className="text-xl" role="img" aria-hidden="true">{book.coverEmoji}</span>
                  <h3 className="font-mono text-[11px] font-bold tracking-tight uppercase mt-2">{book.title}</h3>
                  <p className={`text-[10px] leading-relaxed mt-1 ${textMutedClass}`}>{book.description}</p>
                </div>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-[#F27D26] uppercase font-mono tracking-wider mt-4 flex items-center gap-1 hover:underline">
                  Ver livro <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Articles Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Ensaios Relacionados" : "Related Technical Essays"}
          </h2>
          <div className="space-y-4">
            {hubArticles.length > 0 ? (
              hubArticles.map((art, i) => (
                <div key={i} className={`p-4 border rounded-sm ${cardBgClass}`}>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#5ba8b0]">{art.platform} • {art.category}</span>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-tight mt-1">{art.title}</h3>
                  <p className={`text-xs ml-0 mt-1 pb-2 border-b border-gray-500/5 ${textSubtleClass}`}>{art.excerpt}</p>
                  <a href={art.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono font-bold text-[#F27D26] hover:underline mt-2">
                    Ler publicação original <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))
            ) : (
              <p className={`text-xs ${textMutedClass}`}>{language === "pt" ? "Carregando produções do acervo..." : "Populating collection..."}</p>
            )}
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <div className="mt-8 pt-6 border-t border-gray-500/10 text-center">
          <button 
            onClick={() => onNavigate("/")}
            className="px-6 py-2 border border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {language === "pt" ? "Voltar ao Início" : "Back to Home"}
          </button>
        </div>
      </article>
    );
  };

  const renderAutomationHub = () => {
    const hubBooks = filterBooksByHub("automacao").slice(0, 3);
    const hubArticles = filterArticlesByCategory("IA & Automação").slice(2, 5);

    const connections = [
      { source: "Leandro Calado", rel: "DESIGNS_WORKFLOWS_ON", target: "n8n Enterprise Engine" },
      { source: "n8n Sub-process", rel: "INTEGRATES_SECURE_APIS", target: "Stripe & Corporate ERPs" },
      { source: "DeepSeek R1 / V3", rel: "SAVED_96_PERCENT", target: "Operational Cost Reduction" },
      { source: "PDF Automation", rel: "FAST_EXTACTS_DATA_BY", target: "n8n Document Engines" }
    ];

    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Automação com n8n" : "Enterprise Automation - n8n")}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/automation",
                  "url": "https://leandrocaladoferreira.com/automation",
                  "name": "Enterprise n8n Automation Hub - Leandro Calado",
                  "description": "Building mission-critical business automation workflows using n8n node systems and deep REST integrations.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "Automação Inteligente de Processos (RPA & n8n Enterprise)" : "Adaptive Business Automation & High-Performance n8n Workflows",
          language === "pt"
            ? "Mapeando e otimizando fluxos de processos manuais lentos para loops autônomos. Orquestrações seguras e modulares utilizando a ferramenta visual n8n, integrando webhooks corporativos, APIs complexas, e tratamento de exceções robusto."
            : "Replacing slow, manual enterprise actions with high-efficiency visual automation loops. Harnessing n8n capabilities, recursive sub-processes, webhook error mitigation, and integrated transactional nodes."
        )}

        {renderKnowledgeGraph(connections)}

        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-4 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Políticas de Orquestração Estável" : "Automation Blueprints"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed">
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                01 / {language === "pt" ? "DESENHO DE TRATAMENTO DE EXCEÇÕES" : "HIGH-AVAILABILITY FLOW ERROR-HANDLING"}
              </h3>
              <p>
                {language === "pt"
                  ? "Em produção corporativa, automações não podem simplesmente 'quebrar'. Implemento fluxos de retentativas dinâmicas (retry parameters), buffers de segurança temporários e relatórios estruturados instantâneos via webhook e mensageria."
                  : "We design resilient visual data nets that don't silently collapse. Implementing sub-process loops with backoffs, backup queues, error status routing, and instantaneous health alerts."}
              </p>
            </div>
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                02 / {language === "pt" ? "PROCESSAMENTO EM RECURSOS SECUNDÁRIOS" : "EFFICIENT DOCUMENT SCHEDULING"}
              </h3>
              <p>
                {language === "pt"
                  ? "Configuração de pipelines de leitura assíncrona de arquivos volumosos (PDF/Spreadsheets). Uso cirúrgico de chunking de textos em segundo plano para ingestão vetorial sem bloquear outros processos vivos."
                  : "Structuring high-volume, cost-efficient file parsing servers. Applying localized lightweight extraction engines to isolate parsing tasks from core production CPU limits."}
              </p>
            </div>
          </div>
        </section>

        {/* Selected Books Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Manuais Práticos Correspondentes" : "Selected Core Textbooks"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hubBooks.map(book => (
              <div key={book.id} className={`p-4 border rounded-sm flex flex-col justify-between ${cardBgClass}`}>
                <div>
                  <span className="text-xl" role="img" aria-hidden="true">{book.coverEmoji}</span>
                  <h3 className="font-mono text-[11px] font-bold tracking-tight uppercase mt-2">{book.title}</h3>
                  <p className={`text-[10px] leading-relaxed mt-1 ${textMutedClass}`}>{book.description}</p>
                </div>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-[#F27D26] uppercase font-mono tracking-wider mt-4 flex items-center gap-1 hover:underline">
                  Ver livro <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Articles Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Artigos de Automação Aplicada" : "Published Automation Articles"}
          </h2>
          <div className="space-y-4">
            {hubArticles.length > 0 ? (
              hubArticles.map((art, i) => (
                <div key={i} className={`p-4 border rounded-sm ${cardBgClass}`}>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#5ba8b0]">{art.platform} • {art.category}</span>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-tight mt-1">{art.title}</h3>
                  <p className={`text-xs ml-0 mt-1 pb-2 border-b border-gray-500/5 ${textSubtleClass}`}>{art.excerpt}</p>
                  <a href={art.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono font-bold text-[#F27D26] hover:underline mt-2">
                    Ler artigo <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))
            ) : (
              <p className={`text-xs ${textMutedClass}`}>{language === "pt" ? "Carregando repositório de artigos..." : "Loading articles..."}</p>
            )}
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <div className="mt-8 pt-6 border-t border-gray-500/10 text-center">
          <button 
            onClick={() => onNavigate("/")}
            className="px-6 py-2 border border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {language === "pt" ? "Voltar ao Início" : "Back to Home"}
          </button>
        </div>
      </article>
    );
  };

  const renderLegaltechHub = () => {
    const hubBooks = filterBooksByHub("direito").slice(0, 3);
    const hubArticles = filterArticlesByCategory("IA & Direito").slice(0, 3);

    const connections = [
      { source: "Leandro Calado", rel: "BRIDGES_TECH_AND_LAW_VIA", target: "Algorithmic Audit Standards" },
      { source: "Legal Compliance", rel: "PROTECTS_DATA_UNDER", target: "LGPD & GDPR Mandates" },
      { source: "Biometrics & Cookies", rel: "AUDITED_BY_DENSE", target: "Data Pipelines verification" },
      { source: "Joint Resolution SF/SC 01", rel: "REGULATED_STATE_INCENTIVES", target: "Nota Fiscal Paulista" }
    ];

    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Legaltech & LGPD" : "Legaltech & LGPD Compliance")}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/legaltech",
                  "url": "https://leandrocaladoferreira.com/legaltech",
                  "name": "Legaltech and Regulatory Engineering Hub - Leandro Calado",
                  "description": "Aligning data engineering pipelines with strict legal standards, LGPD structures, and algorithmic decision auditing.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "Legaltech, Engenharia Regulatória & Compliance LGPD" : "Legaltech, Algorithmic Audits & RGPD/LGPD Compliance",
          language === "pt"
            ? "A intersecção fundamental entre a modelagem jurídica tradicional e a tecnologia prática de backend. Estruturando auditoria algorítmica para evitar vieses em linhas de contratação de RH, controle de termo de consentimento e mapeamento de dados biográficos."
            : "The logical intersection of formal legal practice and physical engineering. Constructing automated algorithms audits to prevent discriminative outputs, checking privacy by design cookie policies, and mapping cross-border data movements under LGPD."
        )}

        {renderKnowledgeGraph(connections)}

        <section className="mb-12 text-xs leading-relaxed">
          <h2 
            className="text-xl font-light italic mb-4 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Especialidades de Engenharia Jurídica" : "Core Fields of Regulatory Engineering"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                01 / {language === "pt" ? "AUDITORIA DE ALGORITMOS EM IA RESIDENCIAL" : "HR ALGORITHM BIAS AUDITS"}
              </h3>
              <p>
                {language === "pt"
                  ? "Sistemas automáticos que triam candidatos de empregos podem violar legislações como o ADA (Americans with Disabilities Act) ou mandados civis nacionais de isonomia. Formulamos trilhas de auditoria técnica de inputs/outputs para garantir imparcialidade."
                  : "Integrating legal framework metrics with active system code to ensure automated selection bots don't exhibit illegal discriminatory behavior under labor laws."}
              </p>
            </div>
            <div className={`p-6 border rounded-sm ${cardBgClass}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#5ba8b0] font-black pb-2 border-b border-gray-500/5 mb-3">
                02 / {language === "pt" ? "MAPEAMENTO FÍSICO DE DATA FLOWS (LGPD)" : "DATA FLOW MAPPING & COMPLIANCE"}
              </h3>
              <p>
                {language === "pt"
                  ? "Mapear dados não é um exercício estático em planilhas Excel. Desenhamos diagramas automatizados de linhagem (data lineage) que verificam fisicamente de onde partes de PII surgem e onde residem em S3/ADLS."
                  : "We map critical PII processing loops dynamically in visual diagrams rather than static reports. Ensuring real database actions exactly align with enterprise user declarations."}
              </p>
            </div>
          </div>
        </section>

        {/* Selected Books Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Livros Oficiais Impressos" : "Authored Professional Books"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hubBooks.map(book => (
              <div key={book.id} className={`p-4 border rounded-sm flex flex-col justify-between ${cardBgClass}`}>
                <div>
                  <span className="text-xl" role="img" aria-hidden="true">{book.coverEmoji}</span>
                  <h3 className="font-mono text-[11px] font-bold tracking-tight uppercase mt-2">{book.title}</h3>
                  <p className={`text-[10px] leading-relaxed mt-1 ${textMutedClass}`}>{book.description}</p>
                </div>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-[#F27D26] uppercase font-mono tracking-wider mt-4 flex items-center gap-1 hover:underline">
                  Ver livro <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Articles Related */}
        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Artigos Científicos Publicados" : "Associated Papers & Technical Essays"}
          </h2>
          <div className="space-y-4">
            {hubArticles.length > 0 ? (
              hubArticles.map((art, i) => (
                <div key={i} className={`p-4 border rounded-sm ${cardBgClass}`}>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#5ba8b0]">{art.platform} • {art.category}</span>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-tight mt-1">{art.title}</h3>
                  <p className={`text-xs ml-0 mt-1 pb-2 border-b border-gray-500/5 ${textSubtleClass}`}>{art.excerpt}</p>
                  <a href={art.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono font-bold text-[#F27D26] hover:underline mt-2">
                    Ler publicação original <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))
            ) : (
              <p className={`text-xs ${textMutedClass}`}>{language === "pt" ? "Processando catalogo de peças..." : "Loading publications..."}</p>
            )}
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <div className="mt-8 pt-6 border-t border-gray-500/10 text-center">
          <button 
            onClick={() => onNavigate("/")}
            className="px-6 py-2 border border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {language === "pt" ? "Voltar ao Início" : "Back to Home"}
          </button>
        </div>
      </article>
    );
  };

  const renderConsultingHub = () => {
    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Consultoria Estratégica" : "Consulting Advisory")}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/consulting",
                  "url": "https://leandrocaladoferreira.com/consulting",
                  "name": "LCF Consulting - Data and AI Architectural Advisory",
                  "description": "Custom high-level design of secure data lakes, automated enterprise cognitive workflows, and LGPD algorithmic safety audits.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "Consultoria Estratégica & Desenho Arquitetural" : "LCF Consulting — Architectural & Safety Advisory",
          language === "pt"
            ? "Ajudando corporações em sua transição analítica e cognitiva. Estruturamos desenhos executivos de Data Lakes, esteiras de ingestão distribuida na nuvem e orquestrações seguras com agentes de IA, sob o rigor da LGPD."
            : "Providing clean tech and regulatory advice for global companies. We engineer resilient distributed pipelines on AWS or Azure, design structured model pipelines, and audit system compliance."
        )}

        <section className={`p-8 border rounded-sm mb-12 ${cardBgClass}`}>
          <h2 
            className="text-xl font-light italic mb-4 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Nossas Vertentes de Atuação" : "Selected Consulting Areas"}
          </h2>
          <div className="space-y-6 text-xs leading-relaxed">
            <div className="border-b border-gray-500/5 pb-4 last:border-0 last:pb-0">
              <h3 className="font-mono text-[10px] text-[#5ba8b0] uppercase tracking-widest font-black mb-1">
                01 / {language === "pt" ? "DESENHO ARQUITETURAL PARA DATA LAKES E ETL" : "DISTRIBUTED BIG DATA LAKE ARCHITECTURES"}
              </h3>
              <p className={textMutedClass}>
                {language === "pt"
                  ? "Saneamento de gargalos de alto custo em Databricks e AWS Glue. Modelagem de topologias Bronze/Silver/Gold sólidas, compressões Parquet otimizadas e esteiras seguras."
                  : "Diagnosing processing bottlenecks on Databricks clusters. Formulating standardized ingestion layers (Medallion pattern) and database indexing routines with SQL."}
              </p>
            </div>
            <div className="border-b border-gray-500/5 pb-4 last:border-0 last:pb-0">
              <h3 className="font-mono text-[10px] text-[#5ba8b0] uppercase tracking-widest font-black mb-1">
                02 / {language === "pt" ? "DEFESA ATIVA DE SISTEMAS COGNITIVOS ENERGETICOS" : "AGENTIC AI RISK & COMPLIANCE EVALUATIONS"}
              </h3>
              <p className={textMutedClass}>
                {language === "pt"
                  ? "Auditorias completas em roteamento de Modelos Linguísticos Corporativos (RAG) contra ataques de Injeção de Prompt e testes de vazamento involuntário de dados confidenciais."
                  : "Comprehensive security profiling of LLM context boundaries. Evaluating localized RAG pipelines against dangerous automated injections and certifying safety guidelines."}
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] text-[#5ba8b0] uppercase tracking-widest font-black mb-1">
                03 / {language === "pt" ? "LEGALTECH E COMPLIANCE ALGORÍTMICO" : "COMPREHENSIVE SYSTEMS LGPD AUDITS"}
              </h3>
              <p className={textMutedClass}>
                {language === "pt"
                  ? "Análise formal de processos automatizados contra vieses discriminatórios em pipelines de recrutamento automatizados, checagem automatizada de cookies e auditoria geral LGPD."
                  : "Checking algorithmic decision models for compliance and auditing structural user consent configurations under strict European block rules."}
              </p>
            </div>
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <section className={`p-8 border rounded-sm text-center ${cardBgClass}`}>
          <h2 
            className="text-lg font-light italic mb-2 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Agende um Diagnóstico Inicial" : "Request a Preliminary Assessment"}
          </h2>
          <p className={`text-xs ${textMutedClass} mb-6 max-w-xl mx-auto`}>
            {language === "pt"
              ? "Entre em contato diretamente para debatermos os desafios específicos da sua infraestrutura de dados ou planos de implantação de IA autônoma."
              : "Let's explore custom technical architectures or regulatory requirements tailored exactly for your enterprise requirements."}
          </p>
          <a
            href="mailto:leandrocalado.api@gmail.com"
            className="px-6 py-3 bg-[#F27D26] text-white hover:bg-[#d66513] transition-all text-xs font-mono uppercase tracking-widest inline-block"
          >
            {language === "pt" ? "Falar com Leandro por E-mail" : "Contact Leandro via E-mail"}
          </a>
        </section>
      </article>
    );
  };

  const renderStartHereHub = () => {
    const hubs = [
      { path: "/about", name: language === "pt" ? "Sobre Leandro Calado" : "About Leandro", desc: language === "pt" ? "Trajetória acadêmica, MBA pela USP e conquistas profissionais destacadas." : "Academic credentials, USP MBA, and professional tracks.", icon: <GraduationCap className="w-5 h-5" /> },
      { path: "/books", name: language === "pt" ? "Catálogo de Livros KDP" : "Books Catalog", desc: language === "pt" ? "Biblioteca técnica autoral contendo mais de 116 títulos publicados em 4 idiomas." : "Official professional library housing 116 textbooks published in 4 languages.", icon: <BookOpen className="w-5 h-5" /> },
      { path: "/articles", name: language === "pt" ? "Artigos & Publicações" : "Articles & essays", desc: language === "pt" ? "Análises técnicas no Medium, Jusbrasil e boletim Safe AI, Law & Data." : "Detailed analytics on Medium, Jusbrasil, and LinkedIn Newsletter.", icon: <FileText className="w-5 h-5" /> },
      { path: "/safe-ai", name: language === "pt" ? "Pilar: Safe AI" : "Pillar: Safe AI", desc: language === "pt" ? "Mitigação de injeções de prompt indiretas e alinhamento de LLMs." : "Mitigating indirect prompt injection payloads and alignment.", icon: <ShieldCheck className="w-5 h-5" /> },
      { path: "/data-engineering", name: language === "pt" ? "Pilar: Engenharia de Dados" : "Pillar: Data Engineering", desc: language === "pt" ? "Computação Spark paralela distribuída, pipelines AWS Glue e Azure lakes." : "Distributed Spark environments, AWS Glue pipelines, Azure Databricks.", icon: <Database className="w-5 h-5" /> },
      { path: "/ai-agents", name: language === "pt" ? "Pilar: Agentes de IA" : "Pillar: AI Agents", desc: language === "pt" ? "Sistemas auto-orquestrados, APIs estruturadas e protocolo MCP." : "Autonomous agents, Pydantic AI systems, and MCP connections.", icon: <Cpu className="w-5 h-5" /> },
      { path: "/automation", name: language === "pt" ? "Pilar: Automação Inteligente" : "Pillar: n8n Automation", desc: language === "pt" ? "Criação de fluxos complexos, integração analítica de webhooks em n8n." : "Recursive n8n enterprise workflows, visual rules, and webhooks.", icon: <Zap className="w-5 h-5" /> },
      { path: "/legaltech", name: language === "pt" ? "Pilar: Legaltech & LGPD" : "Pillar: Legaltech & LGPD", desc: language === "pt" ? "Auditoria de algoritmos, privacidade de consentimento e conformidade física." : "Checking algorithm biases, managing cookie consent structures.", icon: <Scale className="w-5 h-5" /> },
      { path: "/consulting", name: language === "pt" ? "Serviços & Consultoria" : "LCF Consulting Services", desc: language === "pt" ? "Trabalhe conosco na modelagem de soluções de segurança e lagos de dados." : "Consulting engagements for pipeline tuning and LLM compliance.", icon: <Briefcase className="w-5 h-5" /> }
    ];

    const graphConnections = [
      { source: "Leandro Calado", rel: "CANONICAL_IDENTITY_FOR", target: "Ecossistema Digital" },
      { source: "Ecosystem Hubs", rel: "CATEGORIZES_AUTHORITY", target: "Data, AI & Regulated Law" },
      { source: "Published Books", rel: "PROVES_KNOWLEDGE_IN", target: "All Selected Pillars" }
    ];

    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Comece Por Aqui" : "Start Here")}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/start-here",
                  "url": "https://leandrocaladoferreira.com/start-here",
                  "name": "Ecosystem Map and Navigation Index - Leandro Calado",
                  "description": "Portão de entrada unificado para explorar a carreira, biblioteca de livros e projetos de Leandro Calado Ferreira.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "Comece Por Aqui: Áreas de Atuação e Ecossistema" : "Start Here: The Ecosystem Directory & Scope",
          language === "pt"
            ? "Bem-vindo ao espaço de visualização integrada do ecossistema intelectual de Leandro Calado Ferreira. Aqui você encontra as principais qualificações acadêmicas, biblioteca autoral e áreas de atuação estruturadas para facilitar sua navegação."
            : "Welcome to the integrated space of Leandro Calado Ferreira's professional estate. Here you can explore academic records, published technical books, data architecture frameworks, and specialized regulatory compliance insights."
        )}

        {renderKnowledgeGraph(graphConnections)}

        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Explore os Hubs de Autoridade" : "Pillars of the Professional Node"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hubs.map((hub, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate(hub.path)}
                className={`p-6 border rounded-sm flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F27D26]/40 ${cardBgClass}`}
              >
                <div>
                  <div className="mb-4 text-[#F27D26] p-2 bg-[#F27D26]/15 rounded-sm inline-block border border-[#F27D26]/30">
                    {hub.icon}
                  </div>
                  <h3 
                    className="text-base font-light italic mb-2 group-hover:text-[#F27D26] transition-colors"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {hub.name}
                  </h3>
                  <p className={`text-[11px] leading-relaxed ${textMutedClass}`}>{hub.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-[9px] uppercase font-mono tracking-widest text-[#F27D26] font-bold">
                  <span>{language === "pt" ? "Entrar no Hub" : "Enter Hub"}</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <div className="mt-8 pt-6 border-t border-gray-500/10 text-center">
          <button 
            onClick={() => onNavigate("/")}
            className="px-6 py-2 border border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {language === "pt" ? "Voltar ao Início" : "Back to Home"}
          </button>
        </div>
      </article>
    );
  };

  const renderAboutHub = () => {
    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Sobre Leandro Calado" : "About Leandro Calado")}
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/about",
                  "url": "https://leandrocaladoferreira.com/about",
                  "name": "About Leandro Calado Ferreira - Profile & Credentials",
                  "description": "Comprehensive academic background, JHU, USP MBA, and professional tracks as coordinating director and cloud systems advisor.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "A Trajetória Intelectual e Credenciais Científicas" : "Academic Credentials, JHU tracks & Career History",
          language === "pt"
            ? "Mapeamento minucioso do percurso formal acadêmico e profissional. De bacharel em Direito e Relações Internacionais a pós-graduado em Data Science pela USP e especialista em IA de Agentes pela Johns Hopkins."
            : "The comprehensive profile of Leandro Calado Ferreira. Merging formal LL.B. backgrounds with deep algorithmic mathematics at USP, software MBA and JHU Agentic architectures standards."
        )}

        <section className={`p-8 border rounded-sm mb-12 ${cardBgClass}`}>
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]" 
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Credenciais Acadêmicas de Destaque" : "Academic Credentials"}
          </h2>
          <div className="space-y-6 text-xs leading-relaxed">
            <div className="border-b border-gray-500/5 pb-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#5ba8b0]">2026 – {language === "pt" ? "Presente" : "Present"}</span>
              <h3 className="text-sm font-bold uppercase mt-1">Johns Hopkins University (JHU)</h3>
              <p className={`italic ${textMutedClass}`}>Certificate Program in Agentic AI</p>
              <p className={`mt-1 ${textSubtleClass}`}>
                {language === "pt" 
                  ? "Especialização de vanguarda com rigor global na engenharia de IA agente, Model Context Protocol (MCP), segurança de LLMs e mitigação preventiva de Prompt Injection."
                  : "Cutting-edge specialization focused on engineering autonomous cognitive agents, the Model Context Protocol standard, and preventative prompt-injection mitigation."}
              </p>
            </div>
            <div className="border-b border-gray-500/5 pb-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#5ba8b0]">2024 – 2025</span>
              <h3 className="text-sm font-bold uppercase mt-1">Universidade de São Paulo (USP)</h3>
              <p className={`italic ${textMutedClass}`}>MBA em Data Science and Analytics</p>
              <p className={`mt-1 ${textSubtleClass}`}>
                {language === "pt"
                  ? "Formação analítica de excelência focada em modelagem matemática estocástica, regressão multivariada estatística, machine learning operacional e forecasting."
                  : "Analytical post-grad core targeting rigorous predictive modeling, mathematics, statistical regression systems, and enterprise analytics libraries."}
              </p>
            </div>
            <div className="border-b border-gray-500/5 pb-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#5ba8b0]">2015 – 2021</span>
              <h3 className="text-sm font-bold uppercase mt-1">Bacharel em Direito (LL.B.) - IESP</h3>
              <p className={`mt-1 ${textSubtleClass}`}>
                {language === "pt"
                  ? "Formação jurídica clássica com ênfase em Direito Administrativo sob regulação federal, compliance e segurança pública municipal."
                  : "Formal legal studies on regulatory law, administrative procedures, federal compliance, and public municipality safety structures."}
              </p>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#5ba8b0]">2008 – 2013</span>
              <h3 className="text-sm font-bold uppercase mt-1">Bacharel em Relações Internacionais - FIRB</h3>
              <p className={`mt-1 ${textSubtleClass}`}>
                {language === "pt"
                  ? "Estudos focados em microeconomia, comércio exterior estruturado, logística alfandegária e controle regulatório do transporte de aviação brasileiro."
                  : "International relations core pointing on microeconomics trade parameters, aerospace civil transport regulations, and global logistics corridors."}
              </p>
            </div>
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <div className="mt-8 pt-6 border-t border-gray-500/10 text-center">
          <button 
            onClick={() => onNavigate("/")}
            className="px-6 py-2 border border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {language === "pt" ? "Voltar ao Início" : "Back to Home"}
          </button>
        </div>
      </article>
    );
  };

  const renderBooksHub = () => {
    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Catálogo de Livros Amazon" : "Amazon Authored Library")}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/books",
                  "url": "https://leandrocaladoferreira.com/books",
                  "name": "Published Technical Books Catalog - Leandro Calado",
                  "description": "Comprehensive structured list of the 116 published titles by Leandro Calado, focusing on AWS Glue, Spark, n8n automation and digital law.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "Biblioteca Autoral e Catálogo KDP (116 Títulos)" : "Published Bookstore Catalog (116 Reference Volumes)",
          language === "pt"
            ? "Leandro Calado é um dos mais produtivos autores técnicos em língua portuguesa e inglesa. Suas obras de prateleira abordam desde fundamentos primários a configurações de microsserviços e segurança defensiva."
            : "An extensive bookstore profile mapping the physical production of 116 published technical textbooks detailing distributed files, models RAG pipelines, and n8n orchestration."
        )}

        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Obras Disponíveis para Estudo" : "Full Digital Collection"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {booksData.map(book => (
              <div key={book.id} className={`p-6 border rounded-sm flex flex-col justify-between ${cardBgClass}`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" role="img" aria-hidden="true">{book.coverEmoji}</span>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#5ba8b0] font-bold px-2 py-0.5 bg-gray-500/5 rounded-sm">{book.lang}</span>
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase mt-3 leading-snug">{book.title}</h3>
                  <p className={`text-[11px] leading-relaxed mt-2 ${textMutedClass}`}>{book.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-500/5 flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-wider opacity-40">ASIN: {book.asin}</span>
                  {book.link.startsWith("/") ? (
                    <button 
                      onClick={() => onNavigate(book.link)} 
                      className="text-[10px] font-bold text-[#F27D26] uppercase font-mono tracking-wider flex items-center gap-1 hover:underline cursor-pointer bg-transparent border-0 focus:outline-none"
                    >
                      {language === "pt" ? "Ver Detalhes" : "View Details"} <ExternalLink className="w-3 h-3" />
                    </button>
                  ) : (
                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-[#F27D26] uppercase font-mono tracking-wider flex items-center gap-1 hover:underline">
                      {language === "pt" ? "Ver na Amazon" : "Buy on Amazon"} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <div className="mt-8 pt-6 border-t border-gray-500/10 text-center">
          <button 
            onClick={() => onNavigate("/")}
            className="px-6 py-2 border border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {language === "pt" ? "Voltar ao Início" : "Back to Home"}
          </button>
        </div>
      </article>
    );
  };

  const renderArticlesHub = () => {
    return (
      <article className="max-w-4xl mx-auto px-6 py-12">
        {renderBreadcrumbs(language === "pt" ? "Artigos & Ensaios" : "Technical Essays & Articles")}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://leandrocaladoferreira.com/articles",
                  "url": "https://leandrocaladoferreira.com/articles",
                  "name": "Published Technical Essays and Articles - Leandro Calado",
                  "description": "High-traffic articles regarding public sound laws, server setups, or data privacy, parsed across Medium and Jusbrasil databases.",
                  "isPartOf": { "@type": "WebSite", "url": "https://leandrocaladoferreira.com" }
                }
              ]
            }
          `}
        </script>

        {renderTitle(
          language === "pt" ? "Artigos Técnicos, Ensaios Geopolíticos & Publicações" : "Technical Papers, Regulated Law Essays & Articles Portfolio",
          language === "pt"
            ? "Mapeamento sistemático de ensaios e artigos científicos com altíssimo volume de leituras recolhidos de plataformas formais indexadas."
            : "Indexing deep papers, public safety analyses, and software manuals tracking thousands of direct global platform views."
        )}

        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Newsletter Oficial no LinkedIn" : "Official LinkedIn Newsletter"}
          </h2>
          <div className={`p-8 border rounded-sm mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 ${cardBgClass}`}>
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 font-mono text-[9px] uppercase tracking-wider text-[#F27D26]">
                <span>By Leandro Calado</span>
                <span className="opacity-40">•</span>
                <span>Published biweekly</span>
                <span className="opacity-40">•</span>
                <span className="font-bold">1,559 Subscribers</span>
              </div>
              <h3 
                className="text-xl font-light italic text-[#F27D26] mb-2"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Safe AI, Law & Data
              </h3>
              <p className={`text-xs leading-relaxed ${textMutedClass}`}>
                {language === "pt"
                  ? "Safe AI, dados e automação para negócios, tecnologia e direito. Uma newsletter escrita quinzenalmente sobre agentes de IA, engenharia de dados e prompts estratégicos."
                  : "Safe AI, data, and automation for business, technology, and law. A biweekly newsletter covering multi-agent platforms, AWS pipelines, and compliant prompt alignments."}
              </p>
            </div>
            <a 
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6871418044783099904" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 cursor-pointer text-[10px] uppercase font-bold tracking-widest transition-all duration-300 rounded-sm bg-[#0A66C2] text-white hover:bg-[#004182] shadow-sm flex items-center gap-2 self-start sm:self-center"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {language === "pt" ? "Inscrever-se no LinkedIn" : "Subscribe on LinkedIn"}
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Artigos do Medium (AI, Nuvem & Desenvolvimento)" : "Medium Articles Catalog (AI & Compute)"}
          </h2>
          <div className="space-y-4">
            {filterArticlesByPlatform("Medium").map((art, idx) => (
              <div key={idx} className={`p-5 border rounded-sm ${cardBgClass}`}>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#5ba8b0]">{art.category}</span>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-tight mt-1 leading-snug">{art.title}</h3>
                    <p className={`text-[11px] leading-relaxed mt-2 pb-2 border-b border-gray-500/5 ${textSubtleClass}`}>{art.excerpt}</p>
                  </div>
                  {art.claps && (
                    <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 shrink-0">👏 {art.claps} claps</span>
                  )}
                </div>
                <div className="mt-3">
                  <a href={art.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-mono font-bold text-[#F27D26] hover:underline">
                    {language === "pt" ? "Acessar publicação no Medium" : "Read full article"} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 
            className="text-xl font-light italic mb-6 text-[#F27D26]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {language === "pt" ? "Ensaios de Direito e Economia no Jusbrasil" : "Jusbrasil Legal & Public Policy Essays"}
          </h2>
          <div className="space-y-4">
            {filterArticlesByPlatform("Jusbrasil").map((art, idx) => (
              <div key={idx} className={`p-5 border rounded-sm ${cardBgClass}`}>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#5ba8b0]">{art.category}</span>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-tight mt-1 leading-snug">{art.title}</h3>
                    <p className={`text-[11px] leading-relaxed mt-1 pb-2 border-b border-gray-500/5 ${textSubtleClass}`}>{art.excerpt}</p>
                  </div>
                  {art.views && (
                    <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 shrink-0">👁️ {art.views} {language === "pt" ? "visualizações" : "views"}</span>
                  )}
                </div>
                <div className="mt-3">
                  <a href={art.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-mono font-bold text-[#F27D26] hover:underline">
                    {language === "pt" ? "Acessar parecer no Jusbrasil" : "Read legal analysis"} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {renderStructuredLinksSection()}
        
        <div className="mt-8 pt-6 border-t border-gray-500/10 text-center">
          <button 
            onClick={() => onNavigate("/")}
            className="px-6 py-2 border border-[#F27D26] text-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {language === "pt" ? "Voltar ao Início" : "Back to Home"}
          </button>
        </div>
      </article>
    );
  };

  // ROUTER CONTROLLING VIEW DISPATCH
  const renderHubContent = () => {
    switch (path) {
      case "/about":
      case "/sobre":
        return renderAboutHub();
      case "/books":
      case "/livros":
        return renderBooksHub();
      case "/books/harness-engineering-ai-coding-agents":
        return (
          <HarnessEngineeringBook 
            isDark={isDark} 
            language={language} 
            onNavigate={onNavigate} 
          />
        );
      case "/articles":
      case "/artigos":
        return renderArticlesHub();
      case "/safe-ai":
        return renderSafeAIHub();
      case "/data-engineering":
        return renderDataEngineeringHub();
      case "/ai-agents":
        return renderAIAgentsHub();
      case "/automation":
        return renderAutomationHub();
      case "/legaltech":
        return renderLegaltechHub();
      case "/consulting":
        return renderConsultingHub();
      case "/start-here":
        return renderStartHereHub();
      default:
        // Fallback placeholder redirecting to index map
        return renderStartHereHub();
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`py-12 min-h-[70vh] ${isDark ? "bg-[#0A0A0A] text-[#F5F5F0]" : "bg-[#F5F5F0] text-[#0A0A0A]"}`}
    >
      {renderHubContent()}
    </motion.section>
  );
}
