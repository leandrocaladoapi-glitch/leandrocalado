import { motion } from "motion/react";
import { Award, FileText, CheckCircle2, ShieldCheck, Landmark, ExternalLink } from "lucide-react";
import { Language } from "../translations";

interface HonorsProps {
  isDark: boolean;
  language: Language;
}

interface HonorItem {
  id: string;
  pdfUrl?: string;
  url?: string;
  translations: Record<string, {
    title: string;
    subtitle: string;
    issuedBy: string;
    associatedWith: string;
    description: string;
  }>;
}

const honorsData: HonorItem[] = [
  {
    id: "portaria_49_2021",
    pdfUrl: "https://www.institucional.jucesp.sp.gov.br/downloads/portaria_49_2021.pdf",
    url: "https://www.institucional.jucesp.sp.gov.br/downloads/portaria_49_2021.pdf",
    translations: {
      pt: {
        title: "Portaria Normativa Nº 49/2021",
        subtitle: "De 02 de agosto de 2021",
        issuedBy: "Desenvolvimento integral do projeto até a publicação DOE",
        associatedWith: "Junta Comercial do Estado de São Paulo",
        description: "Liderança operacional e técnica absoluta na especificação legal, de segurança regulatória e integridade processual para a publicação da Portaria."
      },
      en: {
        title: "Normative Ruling No. 49/2021",
        subtitle: "August 2, 2021",
        issuedBy: "End-to-end project development until official print publication",
        associatedWith: "Board of Trade of the State of São Paulo (JUCESP)",
        description: "Complete technical leadership in structural data compliance, corporate integrity, and process validation for the state ruling execution."
      },
      es: {
        title: "Ordenanza Normativa Nº 49/2021",
        subtitle: "02 de agosto de 2021",
        issuedBy: "Desarrollo integral del proyecto hasta la publicación en el diario oficial",
        associatedWith: "Junta Comercial del Estado de São Paulo",
        description: "Dirección operativa y cumplimiento legal regulatorio para la reestructuración procedimental de procesos de registro comercial."
      },
      fr: {
        title: "Ordonnance Normative Nº 49/2021",
        subtitle: "Du 2 août 2021",
        issuedBy: "Développement complet du projet jusqu'à la publication officielle",
        associatedWith: "Registre du Commerce de l'État de São Paulo (JUCESP)",
        description: "Direction technique de l'alignement procédural et de l'intégrité réglementaire pour la publication des règles administratives."
      },
      it: {
        title: "Provvedimento Normativo Nº 49/2021",
        subtitle: "Del 02 agosto 2021",
        issuedBy: "Gestione integrale del disegno procedurale sino alla pubblicazione",
        associatedWith: "Camera di Commercio dello Stato di San Paolo (JUCESP)",
        description: "Coordinamento operativo e compliance per la modernizzazione e autenticazione dei registri d'impresa statali."
      },
      ja: {
        title: "公的規則第49/2021号 執行令",
        subtitle: "2021年8月2日公示",
        issuedBy: "起案から州公式官報官報公示までのエンドツーエンド統括",
        associatedWith: "サンパウロ州商業登記所 (JUCESP)",
        description: "州商業商業取引登記データベースの運用規格整備、情報法適合性整合、および執行までの総合エンジニアリング。"
      }
    }
  },
  {
    id: "nota_fiscal_cultura",
    url: "https://legislacao.fazenda.sp.gov.br/Paginas/resconjsfsc012018.aspx",
    translations: {
      pt: {
        title: "Nota Fiscal Paulista de Cultura",
        subtitle: "Resolução Conjunta SF/SC No. 1 de 23/10/2018",
        issuedBy: "Desenvolvimento integral do Anteprojeto até a sua publicação",
        associatedWith: "Resolução Conjunta SF/SC 1 2018",
        description: "Concepção estrutural, auditoria tributária e consolidação legislativa do Anteprojeto unindo incentivos fiscais e desenvolvimento cultural estelar."
      },
      en: {
        title: "Nota Fiscal Paulista de Cultura",
        subtitle: "Joint Resolution SF/SC No. 1 • Oct 23, 2018",
        issuedBy: "Full formulation of the draft bill until public enactment",
        associatedWith: "Joint Resolution SF/SC 1 2018 (Tax & Culture Secretariats)",
        description: "Structural tax analysis, computational compliance modeling, and legislative draft consolidation coordinating tax-incentives for arts and cultural projects."
      },
      es: {
        title: "Nota Fiscal Paulista de Cultura",
        subtitle: "Resolución Conjunta SF/SC No. 1",
        issuedBy: "Desarrollo integral del Anteproyecto hasta su publicación gubernamental",
        associatedWith: "Resolución Conjunta SF/SC 1 2018",
        description: "Concepción fiscal, diseño de reglas tributarias y consolidación normativa uniendo estímulos económicos y fomento de las artes."
      },
      fr: {
        title: "Nota Fiscal Paulista de Cultura",
        subtitle: "Résolution Conjointe SF/SC No. 1 du 23/10/2018",
        issuedBy: "Élaboration complète de l'avant-projet jusqu'à sa promulgation",
        associatedWith: "Résolution Conjointe SF/SC 1 2018",
        description: "Analyse d'impact budgétaire et modélisation du cadre fiscal incitatif pour le financement de projets artistiques régionaux."
      },
      it: {
        title: "Nota Fiscal Paulista de Cultura",
        subtitle: "Risoluzione Congiunta SF/SC No. 1",
        issuedBy: "Sviluppo strutturale del ddl preliminare sino all'approvazione",
        associatedWith: "Risoluzione Congiunta SF/SC 1 2018",
        description: "Ingegnerizzazione dei flussi di incentivi d'imposta per la tutela della cultura statale d'intesa con le autorità fiscali."
      },
      ja: {
        title: "サンパウロ・文化納税プログラム創設",
        subtitle: "共同決議 SF/SC第1号 (2018年10月23日)",
        issuedBy: "法案設計準備から官報公告、税制監査スキーム構築まで",
        associatedWith: "SF/SC共同決議（税務局・文化局）",
        description: "ブラジル初の税額控除連動型デジタル文化振興の税法分析、処理要件最適化、およびシステム統合設計。"
      }
    }
  },
  {
    id: "plano_juventude_viva",
    url: "https://prefeitura.sp.gov.br/cidade_ademar/noticias/",
    translations: {
      pt: {
        title: "Índice de Acesso à Justiça para Jovens Vulneráveis",
        subtitle: "Plano Juventude Viva",
        issuedBy: "Formulação estatística e modelagem de indicadores",
        associatedWith: "Prefeitura de São Paulo",
        description: "Arquitetura quantitativa e cruzamento avançado de dados territoriais mapeando vulnerabilidades e balizando políticas de combate à violência urbana."
      },
      en: {
        title: "Access to Justice Index for Vulnerable Youth",
        subtitle: "Juventude Viva Federal/Municipal Plan",
        issuedBy: "Statistical indexing and territorial data modeling",
        associatedWith: "Municipal Government of São Paulo",
        description: "Quantitative modeling, spatial data cross-referencing, and socio-vulnerability mapping to optimize human-rights protection allocation."
      },
      es: {
        title: "Índice de Acceso a la Justicia para Jóvenes Vulnerables",
        subtitle: "Plan Juventude Viva",
        issuedBy: "Formulación estadística y modelado de datos sociodemográficos",
        associatedWith: "Prefeitura de São Paulo",
        description: "Arquitectura analítica cruzando variables de vulnerabilidad urbana para sustentar programas proactivos de prevención contra la violencia."
      },
      fr: {
        title: "Indice d'Accès à la Justice pour les Jeunes Vulnérables",
        subtitle: "Plan Juventude Viva",
        issuedBy: "Formulation quantitative et modélisation statistique",
        associatedWith: "Mairie de São Paulo",
        description: "Croisement géostatistique de données de pauvreté et de violence territoriale pour redéployer l'aide juridique d'urgence."
      },
      it: {
        title: "Indice di Accesso alla Giustizia per Giovani Vulnerabili",
        subtitle: "Piano Juventude Viva",
        issuedBy: "Modellazione statistica di indicatori sociali territoriali",
        associatedWith: "Comune di San Paolo",
        description: "Analisi computazionale di flussi cartografici di rischio sociale per istituire presidi di tutela legale decentrati."
      },
      ja: {
        title: "司法アクセス指数および青年脆弱性指標の開発",
        subtitle: "ジュベントゥージ・ヴィーヴァ（Juventude Viva）共同宣言",
        issuedBy: "統計データモデリング、およびエリア脆弱性マッピングの提供（2016年5月）",
        associatedWith: "サンパウロ市役所",
        description: "公的リソース適正配分、人種偏見なき治安維持、および若年層の司法アクセスの機会平等を数値設計により支援。"
      }
    }
  },
  {
    id: "lei_som_ruidos",
    url: "https://www.al.sp.gov.br/repositorio/legislacao/lei/2015/lei-16049-10.12.2015.html",
    translations: {
      pt: {
        title: "Projeto de Lei nº 455/15 (Lei do Psiu)",
        subtitle: "LEI Nº 16.049 de 10 de Dezembro de 2015",
        issuedBy: "Origem executiva do projeto até a sua sanção formal",
        associatedWith: "Dispõe sobre a emissão de ruídos em veículos estacionários",
        description: "Suporte analítico, especificação técnica de decibéis por zoneamento e redação minuciosa de regras operacionais de fiscalização urbana."
      },
      en: {
        title: "Public Health Safety Bill No. 455/15",
        subtitle: "LAW No. 16,049 • December 10, 2015",
        issuedBy: "Sponsored by Representatives Coronel Camilo & Coronel Telhada",
        associatedWith: "Regulation on acoustic vehicle-based sound emissions",
        description: "Technical decibel mapping, zoning analytical parameters, and precise crafting of legislative enforcement rules for public spaces safety."
      },
      es: {
        title: "Proyecto de Ley nº 455/15",
        subtitle: "LEY Nº 16.049 de 10 de Diciembre de 2015",
        issuedBy: "Soporte legislativo y redacción de normas operativas",
        associatedWith: "Regula las emisiones de ruido nocivas de audio móvil",
        description: "Formulación técnica de decibelios por zonificación urbana y estructuración reglamentaria de control municipal para la sana convivencia."
      },
      fr: {
        title: "Projet de Loi d'Ordre Public nº 455/15",
        subtitle: "LOI Nº 16.049 du 10 Décembre 2015",
        issuedBy: "Aide à la modélisation technique et délimitation sonore",
        associatedWith: "Régulation des émissions de bruit des véhicules stationnaires",
        description: "Cartographie géospatiale des décibels maximums par quartier et rédactions de devoirs et règles de contrôle sanitaire."
      },
      it: {
        title: "Disegno di Legge nº 455/15 (Legge Inquinamento Acustico)",
        subtitle: "LEGGE STATALE Nº 16.049",
        issuedBy: "Rapporto tecnico e strutturazione dei parametri di sanzione",
        associatedWith: "Regola l'emissione di rumore da sorgenti sonore ed auto",
        description: "Definizione accurata dei limiti di decibel per piano acustico municipale e procedure operative per agenti urbani di pubblica sicurezza."
      },
      ja: {
        title: "公共騒音環境規制法案 起案支援 (第455/15号)",
        subtitle: "サンパウロ州法 第16,049号（2015年12月10日制定・公布）",
        issuedBy: "コノネル・カミーロ議員およびコノネル・テリャーダ議員との法案策定",
        associatedWith: "車載および携帯音響機器による公共空間の騒音規制",
        description: "ゾーン別最大デシベルの科学的モデリング、公共秩序維持基準の実装規則起案、および現場取締ガイドライン策定。"
      }
    }
  }
];

export default function Honors({ isDark, language }: HonorsProps) {
  // Text assets localized
  const sectionTitle = language === "pt" ? "Honrarias & Projetos de Lei" :
                       language === "en" ? "Honors & Legislative Projects" :
                       language === "es" ? "Honores & Proyectos de Ley" :
                       language === "fr" ? "Honneurs & Projets Législatifs" :
                       language === "it" ? "Onorificenze & Progetti di Legge" :
                       "公的功績・法令プロジェクト";

  const sectionSubtitle = language === "pt" ? "PRÊMIOS E DIREITO REGULATÓRIO" :
                          language === "en" ? "AWARDS & REGULATORY LAW" :
                          language === "es" ? "PREMIOS Y DERECHO REGULATORIO" :
                          language === "fr" ? "PRIX ET DROIT RÉGLEMENTAIRE" :
                          language === "it" ? "PREMI E DIRITTO REGOLATORIO" :
                          "アワード＆パブリックガバナンス";

  const sectionDesc = language === "pt" ? "Reconhecimentos oficiais derivados de atuações chave em anteprojetos de lei, conformidade pública e regulação analítica de alto escalão estadual e municipal." :
                      language === "en" ? "Official accolades resulting from key contributions to municipal and state drafting, data protection compliance, and regulatory engineering." :
                      language === "es" ? "Logros fruto de contribuciones directas en la formulación de leyes y el gobierno técnico de indicadores públicos en el territorio." :
                      language === "fr" ? "Distinctions acquises grâce à d'importants travaux de rédaction normative, conformité et ingénierie réglementaire de l'État." :
                      language === "it" ? "Riconoscimenti legati al supporto legislativo per gli uffici di governo e alla pianificazione della trasparenza." :
                      "法案作成支援、州および市におけるデータモデリング公認プロジェクト、社会的治安に深く寄与したマイルストーン。";

  const assocText = language === "pt" ? "Órgão / Associação" :
                    language === "en" ? "Organization / Association" :
                    language === "es" ? "Organismo / Asociación" :
                    language === "fr" ? "Institution" :
                    language === "it" ? "Istituzione" :
                    "組織・対象機関";

  const issuedText = language === "pt" ? "Expedido por" :
                     language === "en" ? "Issued by" :
                     language === "es" ? "Emitido por" :
                     language === "fr" ? "Émis par" :
                     language === "it" ? "Rilasciato da" :
                     "活動背景・役割";

  const downloadText = language === "pt" ? "Acessar Documento / Link Oficial" :
                       language === "en" ? "Access Official Document / Link" :
                       language === "es" ? "Acceder al Documento / Enlace Oficial" :
                       language === "fr" ? "Consulter le Document / Lien Officiel" :
                       language === "it" ? "Accedi al Documento / Link Ufficiale" :
                       "公式資料・外部リンクを見る";

  return (
    <section className={`py-24 border-t ${isDark ? "bg-[#0A0A0A] border-[#2A2A2A]" : "bg-[#F5F5F0] border-[#E5E5DF]"}`} id="honrarias">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold mb-3 inline-block">
            {sectionSubtitle}
          </span>
          <h2 
            className="text-3xl sm:text-4xl leading-tight font-light italic mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {sectionTitle}
          </h2>
          <p className={`text-sm leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
            {sectionDesc}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {honorsData.map((item, idx) => {
            const lang = language as string;
            const itemTrans = item.translations[lang] || item.translations["pt"];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-sm border hover:border-[#F27D26]/40 transition-colors flex flex-col justify-between ${
                  isDark
                    ? "bg-[#0F0F0F] border-[#2A2A2A]"
                    : "bg-white border-[#E5E5DF]"
                }`}
              >
                <div>
                  {/* Category icon and title */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-sm border select-none shrink-0 bg-[#F27D26]/5 border-[#F27D26]/20">
                      {idx === 0 || idx === 1 ? (
                        <Landmark className="w-5 h-5 text-[#F27D26]" />
                      ) : (
                        <ShieldCheck className="w-5 h-5 text-[#F27D26]" />
                      )}
                    </div>
                    
                    <span className="text-[9px] uppercase tracking-widest bg-[#F27D26]/10 text-[#F27D26] px-2 py-0.5 rounded-sm shrink-0 font-mono font-black">
                      {idx === 0 || idx === 1 ? "PORTARIA / ANTEPROJETO" : "LEI / IMPACTO SOCIAL"}
                    </span>
                  </div>

                  {/* Document Title & Subtitle */}
                  <h3 
                    className="text-lg italic font-light text-[#F27D26] leading-tight mb-1"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {itemTrans.title}
                  </h3>
                  <div className={`text-[10px] font-mono tracking-wide opacity-60 uppercase mb-3 ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
                    {itemTrans.subtitle}
                  </div>

                  {/* Description Paragraph */}
                  <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-[#9E9E9E]" : "text-[#444]"}`}>
                    {itemTrans.description}
                  </p>

                  <div className="border-t border-[#F27D26]/10 pt-3 mt-3 space-y-2">
                    {/* Association metadata */}
                    <div className="text-[10px] leading-relaxed">
                      <span className="font-mono uppercase opacity-40 block">{assocText}:</span>
                      <span className={`font-semibold ${isDark ? "text-gray-300" : "text-gray-800"}`}>{itemTrans.associatedWith}</span>
                    </div>

                    {/* Issued by metadata */}
                    <div className="text-[10px] leading-relaxed">
                      <span className="font-mono uppercase opacity-40 block">{issuedText}:</span>
                      <span className={`opacity-85 ${isDark ? "text-gray-400" : "text-gray-700"}`}>{itemTrans.issuedBy}</span>
                    </div>
                  </div>
                </div>

                {/* Reference button if link exists */}
                {item.url && (
                  <div className="mt-5 pt-3 border-t border-[#F27D26]/10">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[9px] uppercase font-mono tracking-widest font-black inline-flex items-center gap-1.5 transition-all text-[#F27D26] hover:underline`}
                    >
                      {item.url.endsWith(".pdf") ? (
                        <FileText className="w-3 h-3 text-[#F27D26]" />
                      ) : (
                        <ExternalLink className="w-3 h-3 text-[#F27D26]" />
                      )}
                      {downloadText}
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
