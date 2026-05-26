import { Database, ShieldCheck, ShieldAlert, BookOpen, Briefcase, Compass } from "lucide-react";
import { Language, translations } from "../translations";

interface EcosystemProps {
  isDark: boolean;
  language: Language;
  onNavigate: (path: string) => void;
}

export default function Ecosystem({ isDark, language, onNavigate }: EcosystemProps) {
  const t = translations[language].ecosystem;

  const localizedDomains = [
    {
      id: "ia-prod",
      path: "/ai-agents",
      title: language === "pt" ? "IA Aplicada em Produção" : 
             language === "en" ? "Applied AI in Production" :
             language === "es" ? "IA Aplicada en Producción" :
             language === "fr" ? "IA Appliquée en Production" :
             language === "it" ? "IA Applicata in Direzione" :
             "本番AI安全社会実装",
      desc: language === "pt" ? "Desenvolvimento e deploy do Model Context Protocol (MCP), orquestrações avançadas com n8n, engenharia de prompts e design de agentes sob padrões de controle operacional." :
            language === "en" ? "Development and deployment of Model Context Protocol (MCP), advanced n8n orchestration, prompt engineering, and agent systems designed under operational standards." :
            language === "es" ? "Desarrollo y despliegue del Model Context Protocol (MCP), orquestaciones n8n avanzadas, ingeniería de prompts y diseño de agentes bajo controles rigurosos." :
            language === "fr" ? "Développement et déploiement du Model Context Protocol (MCP), orchestration n8n avancée, ingénierie de prompts et conception d'agents autonomes opérationnels." :
            language === "it" ? "Sviluppo e rilascio di Model Context Protocol (MCP), orchestrazioni n8n avanzate, ingegneria dei prompt e progettazione di agenti con standard produttivi." :
            "Model Context Protocol (MCP) の開発、n8nによる自律型ワークフロー自動化、プロンプト安全設計、本番用のガバナンス設計。",
    },
    {
      id: "dados-cloud",
      path: "/data-engineering",
      title: language === "pt" ? "Engenharia de Dados em Nuvem" : 
             language === "en" ? "Cloud Data Engineering" :
             language === "es" ? "Ingeniería de Dados en la Nube" :
             language === "fr" ? "Ingénierie de Données Cloud" :
             language === "it" ? "Data Engineering in Cloud" :
             "クラウドデータエンジニアリング",
      desc: language === "pt" ? "Arquitetura e implementação de pipelines ETL/ELT eficientes usando AWS Glue, Databricks, Spark, Athena e governança de dados governamentais ou biográficos na Azure." :
            language === "en" ? "Architecture and implementation of efficient ETL/ELT pipelines using AWS Glue, Databricks, Spark, Athena, and governance of regulated databases on Azure." :
            language === "es" ? "Arquitectura e implementación de flujos ETL/ELT eficientes utilizando AWS Glue, Databricks, Spark, Athena y gobernanza regulada de datos en Azure." :
            language === "fr" ? "Conception de pipelines ETL/ELT performants via AWS Glue, Databricks, Spark, Athena e estruturas de gouvernance cloud sur Azure." :
            language === "it" ? "Architettura e desenvolvimento di flussi ETL/ELT complessi con AWS Glue, Databricks, Spark, Athena e protocolli di governance sicuri in Microsoft Azure." :
            "AWS Glue、Databricks、Spark、Athenaを用いた高性能なETL基盤設計、およびAzure環境下での厳格なガバナンス構築。",
    },
    {
      id: "seguranca-ia",
      path: "/safe-ai",
      title: language === "pt" ? "Segurança de Sistemas com IA" : 
             language === "en" ? "AI Systems Security" :
             language === "es" ? "Seguridad de Sistemas con IA" :
             language === "fr" ? "Sécurité des Systèmes d'IA" :
             language === "it" ? "Sicurezza dei Sistemi IA" :
             "AIシステムセキュリティ設計",
      desc: language === "pt" ? "Investigação emergente de riscos ligados a Prompt Injection (injeção indireta de prompts), engenharia de harnesses e construção de guardrails preventivos contra vazamentos de dados." :
            language === "en" ? "Emerging research on risks linked to indirect Prompt Injection, security harness engineering, and building preventative guardrails against data leakage." :
            language === "es" ? "Investigación activa de riesgos de Prompt Injection indirectos, ingeniería preventiva y construcción de guardrails frente a fugas corporativas." :
            language === "fr" ? "Recherche de pointe sur le Prompt Injection indirect, conception de harnais logiciels de test et barrières de défense contre les fuites de données." :
            language === "it" ? "Analisi e prevenzione dal Prompt Injection indiretto, sviluppo di sistemi di monitoraggio e guardrail per impedire la fuga di dati sensibili." :
            "間接的プロンプトインジェクション(Indirect Prompt Injection)対策、防御策の開発、データ漏洩防止ガードレールの設計。",
    },
    {
      id: "legaltech",
      path: "/legaltech",
      title: language === "pt" ? "Legaltech, LGPD & Compliance" : 
             language === "en" ? "Legaltech, LGPD & Compliance" :
             language === "es" ? "Legaltech, LGPD & Compliance" :
             language === "fr" ? "Legaltech, RGPD & Conformité" :
             language === "it" ? "Legaltech, Privacy & Compliance" :
             "リーガルテック・情報保護法制",
      desc: language === "pt" ? "A união perfeita de competência jurídica formal com Engenharia de Dados para auditar conformidades algorítmicas, consentimento de cookies, biometria e privacidade de dados." :
            language === "en" ? "The strategic alignment of formal legal expertise with Data Engineering to audit algorithm compliance, cookies consent policies, biometric safety, and data privacy." :
            language === "es" ? "Sinergia entre experiencia legal formal e Ingeniería de Datos para auditar algoritmos, consentimiento de cookies, biometría y políticas de privacidad." :
            language === "fr" ? "Alliance de l'expertise juridique et de l'Ingénierie de Données pour auditer la conformité algorithmique, les consentements cookies, la biométrie et la vie privée." :
            language === "it" ? "La perfeita unione tra giurisprudenza teorica e ingegneria dei dati per analizzare la rispondenza algoritmica, l'uso dei cookie e la tutela da privacidade corporativa." :
            "高度なデータパイプライン技術 e 法学解釈を高度に融合し、アルゴリズム判定監査、クッキーポリシー、生物測定処理、個人情報保護法、GDPR適合監査を実施。",
    },
    {
      id: "prod-escala",
      path: "/books",
      title: language === "pt" ? "Produção Intelectual em Escala" : 
             language === "en" ? "Intellectual Production at Scale" :
             language === "es" ? "Producción Intelectual a Escala" :
             language === "fr" ? "Production Intellectuelle à l'Échelle" :
             language === "it" ? "Produzione Intellettuale su Scala" :
             "知見の大規模生産",
      desc: language === "pt" ? "Valores factuais comprovados em mais de 116 títulos publicados em 4 idiomas na Amazon KDP, complementados com dezenas de ensaios e artigos de altíssimo tráfego no Jusbrasil e Medium." :
            language === "en" ? "Fact-based results proven by over 116 published books in 4 languages on Amazon KDP, complemented by high-traffic essays and reviews on Jusbrasil and Medium." :
            language === "es" ? "Resultados comprobados por más de 116 libros publicados en cuatro idiomas en Amazon KDP, complementados por artículos virales en Jusbrasil y Medium." :
            language === "fr" ? "Résultats prouvés par plus de 116 manuels publiés en 4 langues sur Amazon KDP, enrichis de publications de référence sur Jusbrasil et Medium." :
            language === "it" ? "Dimostrata operosità descritta in oltre 116 titoli in 4 lingue su Amazon KDP, integrati da artigos técnicos di successo su Jusbrasil e Medium." :
            "Amazon KDPにおける4つの言語で出版された116冊以上の専門書、Jusbrasil・Mediumにおける数十本もの高度アクセス論考に裏打ちされた無比 of 知的生産能力。",
    },
    {
      id: "geopolitica",
      path: "/about",
      title: language === "pt" ? "Geopolítica, Gestão Pública & Economia" : 
             language === "en" ? "Geopolitics, Public Management & Economics" :
             language === "es" ? "Geopolítica, Gestión Pública y Economía" :
             language === "fr" ? "Géopolitique, Gestion Publique & Économie" :
             language === "it" ? "Geopolitica, Gestione Pubblica ed Economia" :
             "地政学・公共政策・マクロ経済",
      desc: language === "pt" ? "Base analítica densa obtida em Direito e Relações Internacionais aplicados para entender segurança pública, transporte aeroespacial e políticas baseadas em evidências sólidas." :
            language === "en" ? "Dense analytical framework from Law and International Relations to understand public safety, aerospace transport regulations, and solid evidence-based policies." :
            language === "es" ? "Sólida base analítica forjada en Derecho y Relaciones Internacionales para comprender seguridad pública, transporte aeroespacial y políticas con base empírica." :
            language === "fr" ? "Cadre analytique issu du Droit et des Relations Internationales pour décrypter la sécurité publique, le transport aérospatial et les politiques publiques objectives." :
            language === "it" ? "Profondo bagaglio di analisi ricavato da Giurisprudenza e Relazioni Internazionali per studiare segurança pública, mobilità aerea ed economia politica." :
            "法学および国際関係学のバックグラウンド。治安政策、宇宙航空産業コンプライアンス、統計と証拠に基づく現代の政策評価にアプローチ。",
    },
  ];

  // Dynamic mapped icon matching the category for elegant representation
  const getDomainIcon = (id: string) => {
    switch (id) {
      case "ia-prod":
        return <BookOpen className="w-4 h-4 text-[#F27D26]" />;
      case "dados-cloud":
        return <Database className="w-4 h-4 text-[#F27D26]" />;
      case "seguranca-ia":
        return <ShieldAlert className="w-4 h-4 text-[#F27D26]" />;
      case "legaltech":
        return <ShieldCheck className="w-4 h-4 text-[#F27D26]" />;
      case "prod-escala":
        return <BookOpen className="w-4 h-4 text-[#F27D26]" />;
      case "geopolitica":
        return <Briefcase className="w-4 h-4 text-[#F27D26]" />;
      default:
        return <Compass className="w-4 h-4 text-[#F27D26]" />;
    }
  };

  return (
    <section className={`py-24 border-t ${isDark ? "bg-[#0A0A0A] border-[#2A2A2A]" : "bg-[#F5F5F0] border-[#E5E5DF]"}`} id="ecossistema">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intros / Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold mb-3 inline-block">
            {t.badge}
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl leading-[1.12] font-light tracking-tight italic mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.title}
          </h2>
          <p className={`text-sm leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
            {t.desc}
          </p>
        </div>

        {/* Dynamic Grid Mapping the Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizedDomains.map((domain, i) => (
            <div
              key={domain.id}
              onClick={() => onNavigate(domain.path)}
              className={`p-8 rounded-sm border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group cursor-pointer ${
                isDark
                  ? "bg-[#0F0F0F] border-[#2A2A2A] hover:border-[#F27D26]/40"
                  : "bg-white border-[#E5E5DF] hover:border-[#F27D26]/40"
              }`}
            >
              <div>
                {/* Header card info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#F27D26]/10 rounded-sm border border-[#F27D26]/20 shrink-0">
                    {getDomainIcon(domain.id)}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest font-semibold opacity-30 group-hover:opacity-60 transition-opacity">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Body details */}
                <h3 
                  className="text-lg leading-snug font-light italic mb-3 group-hover:text-[#F27D26] transition-colors"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {domain.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
                  {domain.desc}
                </p>
              </div>

              {/* Bottom detail action links or dynamic marker */}
              <div className="mt-6 pt-4 border-t border-gray-500/5 flex items-center justify-between">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#F27D26] font-bold group-hover:underline flex items-center gap-1">
                  {language === "pt" ? "Ver Hub Semântico" : "View Semantic Hub"}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26] opacity-65" />
              </div>
            </div>
          ))}
        </div>

        {/* Small banner summary of cross connection */}
        <div
          className={`mt-12 p-6 sm:p-8 rounded-sm border text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${
            isDark
              ? "bg-[#0F0F0F] border-[#2A2A2A] text-[#F5F5F0]"
              : "bg-white border-[#E5E5DF] text-[#0A0A0A]"
          }`}
        >
          <div className="max-w-2xl">
            <h4 
              className="text-lg sm:text-xl font-light italic leading-snug mb-1"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {t.intersectionTitle}
            </h4>
            <p className={`text-xs leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
              {t.intersectionDesc}
            </p>
          </div>
          <button
            onClick={() => onNavigate("/books")}
            className={`px-6 py-3 text-[10px] uppercase font-bold tracking-widest transition-all duration-300 border rounded-sm self-start sm:self-center shrink-0 cursor-pointer ${
              isDark
                ? "border-[#F5F5F0] text-[#F5F5F0] hover:bg-white hover:text-black"
                : "border-[#0A0A0A] text-[#0A0A0A] hover:bg-black hover:text-white"
            }`}
          >
            {t.ctaLibrary}
          </button>
        </div>

      </div>
    </section>
  );
}
