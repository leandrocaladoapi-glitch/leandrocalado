import { motion } from "motion/react";
import { Cpu, ShieldCheck, Database, Award, Link, PenTool } from "lucide-react";
import { Language, translations } from "../translations";

interface AboutProps {
  isDark: boolean;
  language: Language;
}

export default function About({ isDark, language }: AboutProps) {
  const t = translations[language].about;

  const skills = t.skills;

  const highlights = [
    {
      icon: Database,
      title: language === "pt" ? "Arquitetura Produtiva" : 
             language === "en" ? "Production Architecture" :
             language === "es" ? "Arquitectura Productiva" :
             language === "fr" ? "Architecture de Production" :
             language === "it" ? "Architettura Produttiva" :
             "本番アーキテクチャ",
      desc: language === "pt" ? "Lidando de forma pragmática e prática com fluxos de ingestão ETL escaláveis, lagos de dados em nuvem comercial e observabilidade analítica confiável." :
            language === "en" ? "Handling scalable ETL ingestion flows, enterprise cloud data lakes, and reliable analytical observability in a fully pragmatic way." :
            language === "es" ? "Manejando flujos de ingesta ETL escalables, lagos de datos en la nube empresarial y observabilidad analítica de manera pragmática." :
            language === "fr" ? "Gestion pragmatique de flux d'ingestion ETL scalables, de lacs de données cloud d'entreprise et d'une observabilité analytique fiable." :
            language === "it" ? "Gestione pragmatica di flussi di ingestione ETL scalabili, data lake cloud aziendali e osservabilità analitica affidabile." :
            "スケーラブルなETLデータ統合、エンタープライズクラウド上のデータレイク、信頼性の高いオブザーバビリティを実践的に管理。",
    },
    {
      icon: ShieldCheck,
      title: language === "pt" ? "Raciocínio Regulatório" : 
             language === "en" ? "Regulatory Reasoning" :
             language === "es" ? "Razonamiento Regulatorio" :
             language === "fr" ? "Raisonnement Réglementaire" :
             language === "it" ? "Ragionamento Regolatorio" :
             "規制・法的思考",
      desc: language === "pt" ? "Formação em Direito para resolver riscos civis, contratuais e regulatórios invisíveis na implantação comercial de sistemas de decisão automatizados." :
            language === "en" ? "Formally trained in Law to resolve unseen civil, contractual, and regulatory risks when deploying automated decision systems commercially." :
            language === "es" ? "Formación en Derecho para resolver riesgos civiles, contractuales y regulatorios invisibles en el despliegue de sistemas automatizados." :
            language === "fr" ? "Formation en Droit pour résoudre les risques civils, contractuels et réglementaires lors du déploiement de systèmes décisionnels automatisés." :
            language === "it" ? "Laurea in Giurisprudenza per risolvere rischi civili, contrattuali e normativi insiti nel rilascio di sistemi decisionali automatizzati." :
            "自動意思決定システムの社会実装における、契約・コンプライアンス上の見えない法的リスクを解きほぐす法学知識。",
    },
    {
      icon: PenTool,
      title: language === "pt" ? "Produção Intelectual" : 
             language === "en" ? "Intellectual Production" :
             language === "es" ? "Producción Intelectual" :
             language === "fr" ? "Production Intellectuelle" :
             language === "it" ? "Produzione Intellettuale" :
             "執筆・知的生産",
      desc: language === "pt" ? "Liderança autoral real, documentada em mais de 100 livros distribuídos no mercado sobre tendências tecnológicas críticas em quatro idiomas." :
            language === "en" ? "Proven authorial leadership, documented in more than 100 titles distributed on the global market covering critical tech trends in four languages." :
            language === "es" ? "Liderazgo autoral probado, documentado en más de 100 títulos distribuidos en el mercado global sobre tecnologías críticas en cuatro idiomas." :
            language === "fr" ? "Leadership d'auteur validé, documenté dans plus de 100 ouvrages distribués à l'international sur les technologies critiques en quatre langues." :
            language === "it" ? "Leadership d'autore documentata in oltre 100 libri distribuiti a livello globale sulle tecnologie emergenti in quattro lingue." :
            "技術トレンドを網羅した100冊以上の多言語・技術マニュアルのアクティブな出版実績に裏付けられたリーダーシップ。",
    },
  ];

  return (
    <section className={`py-24 border-t ${isDark ? "bg-[#0A0A0A] border-[#2A2A2A]" : "bg-[#F5F5F0] border-[#E5E5DF]"}`} id="sobre">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block - Narrative biography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold mb-3 block">
              {t.badge}
            </span>
            <h2 
              className="text-3xl sm:text-4xl leading-[1.15] font-light tracking-tight italic mb-8"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {t.title}
            </h2>

            <div className={`space-y-6 text-sm leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
              <p>{t.p4}</p>
            </div>

            {/* Specialized Competency Tags */}
            <div className="mt-12 pt-8 border-t border-gray-500/10 w-full text-left">
              <h3 className="text-[10px] uppercase tracking-widest text-[#F27D26] mb-5 font-bold">
                {t.domainTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`text-[11px] px-3.5 py-1.5 rounded-sm font-medium transition-colors border ${
                      isDark
                        ? "bg-[#0F0F0F] text-[#8E8E8E] border-[#2A2A2A] hover:border-[#F27D26]"
                        : "bg-white text-[#555] border-[#E5E5DF] hover:border-[#F27D26]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block - Verification metrics / highlights index */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Cards index */}
            <div className="space-y-4">
              {highlights.map((item, id) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={id}
                    className={`p-6 rounded-sm border flex gap-4 transition-transform hover:-translate-y-1 ${
                      isDark
                        ? "bg-[#0F0F0F] border-[#2A2A2A] text-[#F5F5F0]"
                        : "bg-white border-[#E5E5DF] text-[#0A0A0A]"
                    }`}
                  >
                    <div className="p-3 bg-[#F27D26]/10 rounded-sm border border-[#F27D26]/20 shrink-0 h-fit self-start">
                      <IconComp className="w-4 h-4 text-[#F27D26]" />
                    </div>
                    <div className="text-left">
                      <h4 
                        className="font-light italic text-lg leading-tight mb-2"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {item.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Badge Certificações */}
            <div
              className={`p-6 rounded-sm border relative overflow-hidden ${
                isDark
                  ? "bg-[#0F0F0F]/80 border-[#2A2A2A] text-[#F5F5F0]"
                  : "bg-white border-[#E5E5DF] text-[#0A0A0A]"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-4.5 h-4.5 text-[#F27D26]" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#F27D26]">
                  {t.governanceBadge}
                </span>
              </div>
              <h4 
                className="text-lg italic font-light tracking-tight mb-3"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {t.mbaTitle}
              </h4>
              <p className={`text-xs leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
                {t.mbaField}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
