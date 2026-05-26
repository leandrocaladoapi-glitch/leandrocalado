import { useState, useMemo } from "react";
import { timelineData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Briefcase, Calendar, Building, BookOpen } from "lucide-react";
import { Language, translations } from "../translations";

interface TimelineProps {
  isDark: boolean;
  language: Language;
}

export default function Timeline({ isDark, language }: TimelineProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const t = translations[language].timeline;

  const filterOptions = [
    { id: "all", label: t.all, icon: BookOpen },
    { id: "academic", label: t.academic, icon: GraduationCap },
    { id: "professional", label: t.professional, icon: Briefcase },
  ];

  const filteredTimeline = useMemo(() => {
    return timelineData.filter((item) => activeFilter === "all" || item.type === activeFilter);
  }, [activeFilter]);

  const localFooterTip = language === "pt" ? "Clique nos botões superiores de filtro para focar e detalhar sua análise." :
                        language === "en" ? "Click the filter buttons above to focus and detail your analysis." :
                        language === "es" ? "Haga clic en los botones de filtro de arriba para enfocar y detallar su análisis." :
                        language === "fr" ? "Cliquez sur les boutons de filtre ci-dessus pour focaliser et détailler votre analyse." :
                        language === "it" ? "Clicca sui pulsanti di filtro in alto per concentrare e dettagliare la tua analisi." :
                        "上のフィルターボタンをクリックして、詳細表示を切り替えます。";

  const getLocalizedTimelineItem = (item: typeof timelineData[0]) => {
    if (item.period === "2024 – Atualmente") {
      return {
        role: language === "pt" ? "MBA em Inteligência Artificial" :
              language === "en" ? "MBA in Artificial Intelligence" :
              language === "es" ? "MBA en Inteligência Artificial" :
              language === "fr" ? "MBA en Intelligence Artificielle" :
              language === "it" ? "MBA in Intelligenza Artificiale" :
              "人工知能（AI）MBA",
        organization: "USP (ESALQ)",
        description: language === "pt" ? "Pesquisa focada sob orientação da Profa. Dra. Maria Letícia de Souza dedicando processamento avançado de algoritmos de classificação ao risco de decisão, privacidade e conformidade aplicados à LGPD." :
                     language === "en" ? "Focus on decision tree classification algorithms applied to corporate privacy risk management under the Brazilian General Data Privacy Law (LGPD)." :
                     language === "es" ? "Investigación avanzada en algoritmos de redes de decisión aplicables a la gestión de riesgos legales e cumplimiento de protección de datos (LGPD)." :
                     language === "fr" ? "Recherche axée sur l'analyse de réseaux de décision appliqués à la conformité réglementaire et à la protection de la vie privée (LGPD)." :
                     language === "it" ? "Iniziativa di ricerca orientata agli algoritmi di classificazione decisionale per la gestione rischi legati alla privacy e alla conformità LGPD." :
                     "意思決定の不確実性とリスク管理、およびブラジル個人情報保護法（LGPD）への適合性を中心としたディシジョンツリー型アルゴリズムの先行研究。",
      };
    }
    if (item.period === "2024 – 2026") {
      return {
        role: language === "pt" ? "Autor Técnico Internacional" :
              language === "en" ? "International Technical Author" :
              language === "es" ? "Autor Técnico Internacional" :
              language === "fr" ? "Auteur Technique International" :
              language === "it" ? "Autore Tecnico Internazionale" :
              "インターナショナル技術著者",
        organization: "Amazon KDP",
        description: language === "pt" ? "Construção de uma biblioteca técnica imensa com 116 títulos estruturados em quatro idiomas (PT, EN, ES, DE) cobrindo IA de ponta, engenharia de dados, compliance regulatório e nuvem pública." :
                     language === "en" ? "Authored an immense technical library consisting of 116 books across 4 languages (PT, EN, ES, DE) covering state-of-the-art AI, data engineering, public cloud, and regulatory compliance." :
                     language === "es" ? "Publicación de una colección técnica exhaustiva con más de 116 manuales prácticos en 4 idiomas, centrados en IA, ingeniería de datos, compliance y cloud computing." :
                     language === "fr" ? "Création d'une bibliothèque technique majeure de plus de 116 ouvrages en 4 langues (PT, EN, ES, DE), détaillant l'IA, l'ingénierie des données et la conformité." :
                     language === "it" ? "Sviluppo di un catalogo tecnico composto da ben 116 volumi pubblicati in 4 lingue su intelligenza artificiale, infrastrutture dati e regolamentazione." :
                     "最先端のAI、クラウドエンジニアリング、規制コンプライアンスに関するマニュアルを、4つの言語（PT、EN、ES、DE）にて、Amazon KDPストアへ116冊以上出版。",
      };
    }
    if (item.period === "2022 – Atualmente") {
      return {
        role: language === "pt" ? "Fundador" :
              language === "en" ? "Founder" :
              language === "es" ? "Fundador" :
              language === "fr" ? "Fondateur" :
              language === "it" ? "Fondatore" :
              "代表取締役・創業者",
        organization: "LCF Consulting",
        description: language === "pt" ? "Fornecimento de consultoria especializada e arquiteturas empresariais unindo Engenharia de Dados em nuvem, automação robusta via n8n e governança operacional para conformidade com a LGPD." :
                     language === "en" ? "Providing specialized consultancy and corporate architectures linking cloud data engineering, robust automation via n8n, and operational governance for legal compliance under LGPD." :
                     language === "es" ? "Consultoría especializada en arquitectura de datos empresariales, automatización integrada con n8n, gobernanza operacional y adecuación técnica a normas de privacidad (LGPD)." :
                     language === "fr" ? "Consulting spécialisé et ingénierie d'architectures liant flows de données cloud, automatisations avec n8n et conformité réglementaire (LGPD/RGPD)." :
                     language === "it" ? "Fornitura di servizi di consulenza in ingegneria dati cloud, workflow automation stabili mediante n8n e modelli organizzativi per la privacy (LGPD)." :
                     "データマネジメントコンサルティング、n8nインテグレーション、データパイプライン構築、クラウドへのデータ移行支援、およびガバナンス構築。",
      };
    }
    if (item.period === "2021 – 2023") {
      return {
        role: language === "pt" ? "Especializações em Tecnologia" :
              language === "en" ? "Technology Specializations" :
              language === "es" ? "Especialidades Tecnológicas" :
              language === "fr" ? "Spécialisations en Technologie" :
              language === "it" ? "Specializzazioni in Tecnologia" :
              "技術工学各種スペシャリスト認定",
        organization: "IGTI / Digital House / FreeCodeCamp",
        description: language === "pt" ? "Especialização em Desenvolvimento Front-End (444h) pelo IGTI, Desenvolvimento Web Full Stack na Digital House (227h), e domínios estruturados de JavaScript e Responsive Web Design na FreeCodeCamp (300h cada)." :
                     language === "en" ? "Front-End Developer Specialization (444h) at IGTI, Web Full-Stack Development at Digital House (227h), and certifications in Javascript Algorithmics and Responsive Layouts on FreeCodeCamp (300h each)." :
                     language === "es" ? "Especialización en desarrollo Frontend en IGTI (444h), desarrollo Full-stack en Digital House (227h), y certificaciones de Javascript y diseño responsive en FreeCodeCamp." :
                     language === "fr" ? "Parcours de développement Front-End (444h) chez IGTI, Full Stack Web Development chez Digital House (227h), et algorithmes JavaScript avec FreeCodeCamp." :
                     language === "it" ? "Iter formativo in Front-End Development (444h) presso IGTI, Full Stack Web Development con Digital House (227h), e approfondimento Javascript e Responsive Design con FreeCodeCamp." :
                     "IGTIのフロントエンド(444時間)、Digital HouseのフルスタックWeb開発(227時間)、FreeCodeCampのJavaScriptおよびレスポンシブWebデザイン(各300時間)をそれぞれ修了。",
      };
    }
    if (item.period === "2015 – 2021") {
      return {
        role: language === "pt" ? "Bacharel em Direito" :
              language === "en" ? "Bachelor of Laws (LL.B.)" :
              language === "es" ? "Licenciado en Derecho" :
              language === "fr" ? "Licence en Droit" :
              language === "it" ? "Laurea in Giurisprudenza" :
              "法学士（知的財産・公共安全分野）",
        organization: "IESP",
        description: language === "pt" ? "Graduação formal em Direito. Orientação voltada ao cenário regulatório coletivo, com TCC focado no tema 'A Municipalização da Segurança Pública no Brasil'." :
                     language === "en" ? "Formal LL.B. degree. Academic focus centered on regulatory security, legal compliance structures, and municipal-level legislative frameworks." :
                     language === "es" ? "Estudios formales en Derecho, con especial interés en la regulación institucional y el encuadre estatutario municipal de la seguridad." :
                     language === "fr" ? "Diplôme de droit privatif et constitutionnel. Analyse approfondie des rôles régulateurs territoriaux et du droit administratif." :
                     language === "it" ? "Laurea formale in Giurisprudenza, con tesi orientata ai poteri regolatori locali e alla classificazione legislativa dei profili di risco civile." :
                     "ブラジル法学専門課程。地方自治体、行政規制、法解釈論、情報安全分野の公共政策における法制史の調査。",
      };
    }
    if (item.period === "2015 – 2016") {
      return {
        role: language === "pt" ? "Pesquisador de Políticas Públicas" :
              language === "en" ? "Public Policy Researcher" :
              language === "es" ? "Investigador de Políticas Públicas" :
              language === "fr" ? "Chercheur en Politiques Publiques" :
              language === "it" ? "Ricercatore in Politiche Pubbliche" :
              "公共政策アナリスト・統計調査員",
        organization: "Secretaria Municipal de Direitos Humanos de SP",
        description: language === "pt" ? "Trabalho voltado ao 'Mapa da Juventude', estruturando pesquisas qualitativas e quantitativas sobre vulnerabilidade social de jovens para balizar acesso à justiça." :
                     language === "en" ? "Cooperated on the official 'Youth Map', structuring qualitative and quantitative research on youth social vulnerability to support data-driven legal access programs." :
                     language === "es" ? "Colaboró en el 'Mapa de la Juventud', consolidando datos estadísticos y entrevistas empíricas sobre las necesidades jurídicas y socioeconómicas de jóvenes vulnerables." :
                     language === "fr" ? "Chargé d'enquêtes pour le 'Carte de la Jeunesse', organisant les enquêtes statistiques quantitatives sur la précarité et l'accès à la justice des jeunes." :
                     language === "it" ? "Collaborazione accademica e d'indagine per la stesura del 'Mappa dei Giovani', incrociando dati per individuare la vulnerabilità sociale e l'ottimizzazione dell'assistenza legale." :
                     "若年層社会包摂プログラムに関わり、社会開発インフラ構築を裏付けるための法務および統計的データ・インタビュー分析を遂行。",
      };
    }
    if (item.period === "2014 – 2016") {
      return {
        role: language === "pt" ? "Especialização em Economia Urbana e Gestão Pública" :
              language === "en" ? "Specialization in Urban Economics & Public Management" :
              language === "es" ? "Especialidad en Economía Urbana y Gestión Pública" :
              language === "fr" ? "Spécialisation en Économie Urbaine et Gestion Publique" :
              language === "it" ? "Specializzazione in Economia Urbana e Pubblica Amministrazione" :
              "都市経済学および行政管理専門課程",
        organization: "PUC-SP (COGEAE)",
        description: language === "pt" ? "Aprofundamento focado sob orientação do prof. Gabriel Rossini, culminando com o estudo estatístico complexo da atividade da 18ª legislatura de deputados estaduais de SP." :
                     language === "en" ? "Detailed academic training under Prof. Gabriel Rossini, culminating in a complex statistical study of state legislative activities in São Paulo." :
                     language === "es" ? "Especialización avanzada guiada por el Prof. Gabriel Rossini, con foco en modelos de evaluación estadística aplicados a la transparencia y producción legislativa local." :
                     language === "fr" ? "Étude spécialisée sous la supervision de Gabriel Rossini, concrétisée par une analyse économétrique de l'activité législative du parlement de l'État de São Paulo." :
                     language === "it" ? "Corso di specializzazione con il prof. Gabriel Rossini, culminante nello studio statistico rigoroso sull'attività istituzionale della XVIII legislatura statale." :
                     "Gabriel Rossini 教授の指導の下、都市経済構造と政策インセンティブを専攻し、州議会活動の多変量要因の統計的分析を発表。",
      };
    }
    if (item.period === "2009 – 2013") {
      return {
        role: language === "pt" ? "Bacharel em Relações Internacionais" :
              language === "en" ? "Bachelor of International Relations" :
              language === "es" ? "Licenciado en Relaciones Internacionales" :
              language === "fr" ? "Licence en Relations Internationales" :
              language === "it" ? "Laurea in Relazioni Internazionali" :
              "国際関係学学士（地政学・国際政治経済学）",
        organization: "Faculdades Integradas Rio Branco (FIRB)",
        description: language === "pt" ? "Introdução à alta geopolítica clássica e economia política global. TCC dedicado a correlacionar regulação regulatória do transporte aéreo e dependência produtiva." :
                     language === "en" ? "Deep-dive into classic geopolitics and global polit-economics. Bachelor thesis on state regulations of airspace and structural hardware dependencies." :
                     language === "es" ? "Fundamentos en alta geopolítica clásica y economía de desarrollo. Tesi sobre la regulación comercial aérea y las dependencias de suministro global." :
                     language === "fr" ? "Sélection géopolitique et économie politique mondiale. Thèse orientée vers la réglementation de l'aviation de ligne et de fret, et la dépendance industrielle." :
                     language === "it" ? "Iniziazione alle grandi teorie geopolitiche e macroeconomia doganale. Elaborato finale sull'allineamento industriale e i flussi del traffico aereo." :
                     "古典地政学およびグローバル資本論の基礎。航空運輸規則、物流ネットワークと貿易依存度についての論文を執筆。",
      };
    }
    
    return {
      role: item.role,
      organization: item.organization,
      description: item.description,
    };
  };

  return (
    <section className={`py-24 border-t ${isDark ? "bg-[#0A0A0A] border-[#2A2A2A]" : "bg-[#F5F5F0] border-[#E5E5DF]"}`} id="trajetoria">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Introduction */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold mb-3 inline-block">
            {t.badge}
          </span>
          <h2 
            className="text-3xl sm:text-4xl leading-tight font-light italic mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.title}
          </h2>
          <p className={`text-sm leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
            {t.desc}
          </p>
        </div>

        {/* Filters Controls Buttons with geometric design */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 text-left">
          {filterOptions.map((opt) => {
            const IconComp = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`text-[10px] uppercase tracking-widest font-bold px-5 py-3 rounded-sm border flex items-center gap-2 transition-all cursor-pointer ${
                  activeFilter === opt.id
                    ? "bg-[#F27D26] border-[#F27D26] text-white"
                    : isDark
                      ? "bg-[#0F0F0F] border-[#2A2A2A] text-[#8E8E8E] hover:text-[#F5F5F0]"
                      : "bg-white border-[#E5E5DF] text-[#555] hover:text-[#0A0A0A]"
                }`}
              >
                {IconComp && <IconComp className="w-3.5 h-3.5" />}
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Timeline Line Vertical Construction */}
        <div className="relative border-l border-[#2A2A2A]/20 text-left pl-6 sm:pl-8 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredTimeline.map((item, idx) => {
              const localized = getLocalizedTimelineItem(item);
              return (
                <motion.div
                  key={`${item.period}-${item.role}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative"
                >
                  {/* Micro circular target selector on center of vertical rule */}
                  <span className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    isDark ? "bg-[#0A0A0A] border-[#F27D26]" : "bg-[#F5F5F0] border-[#F27D26]"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                  </span>

                  {/* Period Badge */}
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#F27D26]">
                    <Calendar className="w-3.5 h-3.5 opacity-70" />
                    <span>{item.period}</span>
                    
                    {/* Category Type Visual tag */}
                    <span
                      className={`text-[8px] tracking-widest font-mono uppercase font-black px-2 py-0.5 rounded-sm ml-2 border ${
                        item.type === "academic"
                          ? isDark
                            ? "bg-[#0F0F0F] text-[#F27D26] border-[#F27D26]/30"
                            : "bg-[#F5F5F0] text-[#F27D26] border-[#F27D26]/40"
                          : isDark
                            ? "bg-[#0F0F0F] text-[#8E8E8E] border-[#2A2A2A]"
                            : "bg-white text-[#555] border-[#E5E5DF]"
                      }`}
                    >
                      {item.type === "academic" ? t.academicTag : t.professionalTag}
                    </span>
                  </div>

                  {/* Main Card content */}
                  <div
                    className={`p-6 rounded-sm border transition-colors ${
                      isDark
                        ? "bg-[#0F0F0F] border-[#2A2A2A] hover:border-[#F27D26]/40"
                        : "bg-white border-[#E5E5DF] hover:border-[#F27D26]/40"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 
                        className="text-lg italic font-light text-[#F27D26] text-left"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {localized.role}
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E8E8E] flex items-center gap-1.5 self-start sm:self-center">
                        <Building className="w-3.5 h-3.5 opacity-60 text-[#F27D26]" />
                        {localized.organization}
                      </span>
                    </div>

                    <p className={`text-xs leading-relaxed text-left ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
                      {localized.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Timeline Bottom Summary Indicator */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono opacity-50 flex items-center justify-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            {localFooterTip}
          </p>
        </div>

      </div>
    </section>
  );
}
