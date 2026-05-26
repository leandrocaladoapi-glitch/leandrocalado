import { useState, useMemo } from "react";
import { timelineData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Briefcase, Calendar, Building, BookOpen, MapPin } from "lucide-react";
import { Language, translations } from "../translations";

interface TimelineProps {
  isDark: boolean;
  language: Language;
}

// Highly comprehensive translation mapping for all 15 timeline items across 6 languages
const localizedData: Record<string, Record<string, { role: string; org: string; desc: string; loc?: string; subType?: string; bullets?: string[] }>> = {
  NTA: {
    pt: {
      role: "Coordenador de Pós-Graduação",
      org: "Instituto NTA",
      desc: "Coordenação geral e estratégica dos programas de pós-graduação tecnológica, estruturação de grades para engenharia de dados e infraestrutura de ponta.",
      loc: "São Paulo, Brasil • Remoto",
      subType: "Tempo integral"
    },
    en: {
      role: "Postgraduate Coordinator",
      org: "NTA Institute",
      desc: "Strategic and general coordination of tech postgraduate programs, structuring curricula for high-performance cloud and data engineering courses.",
      loc: "São Paulo, Brazil • Remote",
      subType: "Full-time"
    },
    es: {
      role: "Coordinador de Posgrado",
      org: "Instituto NTA",
      desc: "Coordinación general y estratégica de programas tecnológicos de posgrado, diseño curricular para ingeniería de datos avanzados.",
      loc: "São Paulo, Brasil • Remoto",
      subType: "Tiempo completo"
    },
    fr: {
      role: "Coordinateur de Master",
      org: "Institut NTA",
      desc: "Coordination générale et stratégique des programmes de troisième cycle en technologie, structuration du programme académique de cloud computing.",
      loc: "São Paulo, Brésil • Distanciel",
      subType: "Temps plein"
    },
    it: {
      role: "Coordinatore di Master",
      org: "Istituto NTA",
      desc: "Coordinamento generale e strategico dei corsi di studio post-laurea, strutturazione della didattica avanzata per big data e cloud.",
      loc: "San Paolo, Brasile • Remoto",
      subType: "Tempo pieno"
    },
    ja: {
      role: "大学院プログラム統括責任者",
      org: "NTA インスティテュート",
      desc: "先進テクノロジー大学院コースの戦略的統括、ビッグデータ・インフラストラクチャ講座のカリキュラム設計開発。",
      loc: "サンパウロ、ブラジル • リモート",
      subType: "フルタイム"
    }
  },
  JHU: {
    pt: {
      role: "Certificate Program in Agentic AI",
      org: "The Johns Hopkins University",
      desc: "Especialização de vanguarda focada em engenharia de IA agente, modelagem avançada de sistemas cognitivos autônomos e arquiteturas baseadas em Model Context Protocol (MCP).",
      loc: "Baltimore, EUA"
    },
    en: {
      role: "Certificate Program in Agentic AI",
      org: "The Johns Hopkins University",
      desc: "Cutting-edge specialization program focused on Agentic AI engineering, multi-agent frameworks, and autonomous architectures utilizing Model Context Protocol standards.",
      loc: "Baltimore, USA"
    },
    es: {
      role: "Programa de Certificación en IA Agente",
      org: "The Johns Hopkins University",
      desc: "Programa avanzado de especialización en ingeniería de IA generativa, agentes autónomos y protocolos de contexto de modelos (MCP).",
      loc: "Baltimore, EE. UU."
    },
    fr: {
      role: "Certificate Program in Agentic AI",
      org: "The Johns Hopkins University",
      desc: "Spécialisation avancée dédiée à l'ingénierie d'agents IA autonomes, frameworks multi-agents et protocoles de routage d'information.",
      loc: "Baltimore, USA"
    },
    it: {
      role: "Certificate Program in Agentic AI",
      org: "The Johns Hopkins University",
      desc: "Programma di alta specializzazione incentrato sull'ingegneria dei sistemi di IA ad agenti, pattern multi-agente e Model Context Protocol.",
      loc: "Baltimore, USA"
    },
    ja: {
      role: "自律エージェントAI専門スペシャリスト認定課程",
      org: "ジョンズ・ホプキンス大学",
      desc: "Model Context Protocol（MCP）等を用いたマルチエージェント型大規模自動化システム、自律エージェントの意思決定プロセスの最先端エンジニアリング・プログラム。",
      loc: "米国ボルチモア"
    }
  },
  PC: {
    pt: {
      role: "Engenheiro de Dados",
      org: "Pátria Cidadania",
      desc: "Ingestão escalável e processamento de grandes bases sociais, modelagem analítica robusta de pipelines e implementação de controles de governança de dados públicos.",
      loc: "São Paulo, Brasil • Remoto",
      subType: "Tempo integral",
      bullets: [
        "Processamento escalável de bases de dados sociais e consolidação de data lakes corporativos.",
        "Liderança técnica e otimização de queries analíticas de alto volume para entrega pontual de informações estatísticas."
      ]
    },
    en: {
      role: "Data Engineer",
      org: "Pátria Cidadania",
      desc: "Scalable data ingestion and processing of massive social datasets, robust analytic pipeline modeling, and public data governance integration.",
      loc: "São Paulo, Brazil • Remote",
      subType: "Full-time",
      bullets: [
        "Scalable social database batch ingestion and building centralized structural analytics data stores.",
        "Technical leadership and execution on query performance tuning to ensure real-time reporting availability."
      ]
    },
    es: {
      role: "Ingeniero de Datos",
      org: "Pátria Cidadania",
      desc: "Ingesta y modelado de datos a gran escala para proyectos sociales estatales, desarrollo de canalizaciones robustas y gobierno de metadatos públicos.",
      loc: "São Paulo, Brasil • Remoto",
      subType: "Tiempo completo",
      bullets: [
        "Procesamiento elástico de registros públicos consolidados en almacenes corporativos.",
        "Optimización avanzada de consultas complejas para reportes analíticos de alta dirección."
      ]
    },
    fr: {
      role: "Ingénieur de Données",
      org: "Pátria Cidadania",
      desc: "Déploiement de pipelines analytiques de données gouvernementales à fort débit, coordination des accès et modélisation de data lakes.",
      loc: "São Paulo, Brésil • Distanciel",
      subType: "Temps plein",
      bullets: [
        "Gestion d'ingestions volumétriques de tables sociales et fédération des sources analytiques.",
        "Optimisation de moteurs de requête pour la restitution consolidée d'indicateurs."
      ]
    },
    it: {
      role: "Data Engineer",
      org: "Pátria Cidadania",
      desc: "Processamento e armonizzazione di grandi basi dati sociali nazionali, modellazione di canali per l'estrazione dati e protocolli di audit pubblico.",
      loc: "San Paolo, Brasile • Remoto",
      subType: "Tempo pieno",
      bullets: [
        "Ingestione batch e consolidamento di cataloghi informativi per l'analisi territoriale.",
        "Sviluppo di logiche di accelerazione interrogazioni per cruscotti decisionali critici."
      ]
    },
    ja: {
      role: "データエンジニア",
      org: "パトリア・シダダニア",
      desc: "ブラジル国内の各種公的統計、数千万規模の社会保障データベースの安定集計パイプライン設計、および高セキュアなガバナンス対応。",
      loc: "サンパウロ、ブラジル • リモート",
      subType: "フルタイム",
      bullets: [
        "社会保障データのバッチ・インジェクション、および統合データレイクの構築・整備。",
        "意思決定層向けのリアルタイム分析提供を保証するための、クエリ・チューニングとパイプライン安定稼働の主導。"
      ]
    }
  },
  USP: {
    pt: {
      role: "MBA em Data Science and Analytics",
      org: "Universidade de São Paulo (USP)",
      desc: "Pós-graduação de excelência com forte rigor em modelagem matemática, inteligência artificial integrada, Big Data e tomada de decisão preditiva baseada em dados reais."
    },
    en: {
      role: "MBA in Data Science and Analytics",
      org: "University of São Paulo (USP)",
      desc: "Executive post-graduate program with extensive training in mathematical modeling, machine learning algorithms, and data-driven corporate business solutions."
    },
    es: {
      role: "MBA en Ciencia de Datos y Analítica",
      org: "Universidad de São Paulo (USP)",
      desc: "Formación ejecutiva avanzada con foco en modelado de machine learning, optimización matemática y gobernanza analítica estratégica para la toma de decisiones."
    },
    fr: {
      role: "MBA en Data Science & Analytics",
      org: "Université de São Paulo (USP)",
      desc: "Parcours d'excellence portant sur l'économétrie, la modélisation statistique avancée, le machine learning d'entreprise et l'aide à la décision algorithmique."
    },
    it: {
      role: "MBA in Data Science & Analytics",
      org: "Università di San Paolo (USP)",
      desc: "Master avanzato incentrato sulla modellazione matematica applicata, algoritmi predittivi di machine learning e governance strategica dei flussi analitici."
    },
    ja: {
      role: "データサイエンス＆アナリティクス MBA",
      org: "サンパウロ大学（USP）",
      desc: "数理統計モデリング、予測分析、大容量機械学習アルゴリズムの適用、およびブラジル情報法規則に適合したデータ主導ガバナンスに関する専門修士課程。"
    }
  },
  ITAÚ: {
    pt: {
      role: "Engenheiro de Dados",
      org: "Itaú Unibanco",
      desc: "Otimização e governança de dados financeiros em larga escala em ambiente de nuvem corporativa de alta exigência transacional.",
      loc: "São Paulo, Brasil • Remoto",
      subType: "Contrato Indireto",
      bullets: [
        "Glue Jobs e Athena em alto volume, storage analítico e arquitetura de dados sobre o Amazon S3.",
        "Redesenho de processos e otimizações técnicas que geraram uma economia de mais de 20% no tempo de processamento de pipelines de dados críticos.",
        "Sustentação contínua de esteiras integrando segurança, qualidade e rigoroso controle financeiro e orçamentário de performance."
      ]
    },
    en: {
      role: "Data Engineer",
      org: "Itaú Unibanco",
      desc: "Optimization and governance of high-volume financial data under enterprise-grade secure public cloud infrastructure.",
      loc: "São Paulo, Brazil • Remote",
      subType: "Indirect Contract",
      bullets: [
        "High-volume Glue Jobs and Athena queries orchestration, leveraging structured data catalogs and storage on Amazon S3.",
        "Engineered optimizations and metadata partition strategies that achieved a 20% reduction in execution times for business-critical pipelines.",
        "Managed financial analytics workloads focusing on performance, data quality gates, and system cost reduction."
      ]
    },
    es: {
      role: "Ingeniero de Datos",
      org: "Itaú Unibanco",
      desc: "Optimización y gobernanza de volumen masivo de datos financieros sobre una infraestructura cloud con alto factor de transacciones.",
      loc: "São Paulo, Real • Remoto",
      subType: "Contrato Indirecto",
      bullets: [
        "Obras en AWS Glue Jobs y ejecución de consultas en Athena sobre lagos de datos almacenados en Amazon S3.",
        "Arquitectura de optimización y particionamiento que logró recortar en un 20% los cronogramas de procesamiento crítico.",
        "Monitoreo constante orientado a calidad, escalabilidad del cómputo y reducción de costes operativos."
      ]
    },
    fr: {
      role: "Ingénieur de Données",
      org: "Itaú Unibanco",
      desc: "Optimisation de flux d'informations et gouvernance financière analytique sur un cloud sécurisé de haute disponibilité.",
      loc: "São Paulo, Brésil • Distanciel",
      subType: "Contractant externe (Indireto)",
      bullets: [
        "Développement de tâches AWS Glue Jobs et requêtage Athena sur de larges volumes stockés dans le cloud Amazon S3.",
        "Gains substantiels d'exécution de 20% via la refonte des modèles de partition et optimisation fine de requêtes SQL.",
        "Assurance qualité des flux, surveillance de la conformité et réduction des anomalies de coût (FinOps)."
      ]
    },
    it: {
      role: "Data Engineer",
      org: "Itaú Unibanco",
      desc: "Ottimizzazione e governance di transazioni finanziarie su architetture analitiche cloud conformi ai protocolli bancari.",
      loc: "San Paolo, Brasile • Remoto",
      subType: "Consulente Esterno (Indireto)",
      bullets: [
        "Sviluppo di flussi AWS Glue Jobs ed interrogazioni Athena di larga scala con persistenza analitica su bucket Amazon S3.",
        "Ingegnerizzazione di logiche di partizionamento, ottenendo un'efficienza temporale del 20% nelle finestre di calcolo.",
        "Sostentamento delle catene operative con focus su controlli di qualità, budget e performance FinOps."
      ]
    },
    ja: {
      role: "データエンジニア",
      org: "イタウ・ウニバンコ銀行",
      desc: "南米最大のメガバンクにおける、AWS基盤を用いた大規模な金融取引情報のクエリ高速化・ガバナンス対応。",
      loc: "サンパウロ、ブラジル • リモート",
      subType: "業務委託・外部契約",
      bullets: [
        "Amazon S3データレイク上のデータセットに対する、AWS Glue JobsおよびAthenaによる大容量分散クエリ加工のオーケストレーション。",
        "分散物理パーティション構成의 再設計とクエリチューニング等により、夜間バッチなど業務クリティカルな集計時間を20%削減するパフォーマンス最適化を実行。",
        "インフラコストの最適化（FinOps）およびデータ品質プロセスの運用・保守管理。"
      ]
    }
  },
  KDP: {
    pt: {
      role: "Autor Técnico Internacional",
      org: "Amazon KDP",
      desc: "Construção de uma biblioteca técnica incomparável de 116 volumes de engenharia prática de dados, automações nativas com IA, segurança de LLMs e conformação regulatória distribuída globalmente."
    },
    en: {
      role: "International Technical Author",
      org: "Amazon KDP",
      desc: "Authored an immense, globally coordinated technical library of 116 books published in 4 languages covering next-gen AI systems, data engineering, and data privacy."
    },
    es: {
      role: "Autor Técnico Internacional",
      org: "Amazon KDP",
      desc: "Creación de una colección técnica internacional única con 116 manuales prácticos publicados en 4 idiomas sobre IA autónoma, data lakes y seguridad de LLM."
    },
    fr: {
      role: "Auteur Technique International",
      org: "Amazon KDP",
      desc: "Auteur d'une bibliothèque scientifique majeure de 116 manuels diffusés mondialement en 4 langues, axée sur les agents IA, les pipelines de données et la cybersécurité."
    },
    it: {
      role: "Autore Tecnico Internazionale",
      org: "Amazon KDP",
      desc: "Sviluppo di un catalogo sistematico composto da 116 volumi specialistici in 4 lingue riguardanti l'architettura dei dati, agenti decisionali ed LGPD."
    },
    ja: {
      role: "インターナショナル技術著者",
      org: "Amazon KDP",
      desc: "データエンジニアリング、MCP規格エージェントAI、セキュリティ、EU/ブラジルデータ保護法に関する専門技術ガイドブック116冊を、多言語にてグローバル市場へ執筆・出版。"
    }
  },
  LCF: {
    pt: {
      role: "Fundador",
      org: "LCF Consulting",
      desc: "Liderança consultiva especializada auxiliando companhias no desenho seguro de ecossistemas analíticos, pipelines em nuvem e blindagem regulatória para dados pessoais corporativos sob o rigor da LGPD."
    },
    en: {
      role: "Founder",
      org: "LCF Consulting",
      desc: "Specialized consultancy aligning enterprise cloud architectures, reliable open-source automation streams, and operational privacy controls under Brazilian regulations."
    },
    es: {
      role: "Fundador",
      org: "LCF Consulting",
      desc: "Consultora líder en diseño de infraestructuras analíticas en la nube, optimizaciones de pipelines complejos y directrices técnicas de privacidad adaptadas a la LGPD."
    },
    fr: {
      role: "Fondateur",
      org: "LCF Consulting",
      desc: "Cabinet d'expertise de premier plan pour la structuration de pipelines cloud hautement performants et déploiement de stratégies de protection de la vie privée."
    },
    it: {
      role: "Fondatore",
      org: "LCF Consulting",
      desc: "Fornitura di servizi di consulenza strategico-operativa in disegno flussi dati in cloud pubblici, audit di sicurezza e conformità privacy di tipo LGPD."
    },
    ja: {
      role: "代表取締役・創業者",
      org: "LCF Consulting",
      desc: "クラウドアーキテクチャの評価・改善、大規模ワークフロー自動化（n8n/Python）、および大企業向け個人情報保護方針（LGPD適正監査）等に関する戦略的コンサルティングの提供。"
    }
  },
  "SDE-SP": {
    pt: {
      role: "Engenheiro de Dados",
      org: "Secretaria de Desenvolvimento Econômico de SP",
      desc: "Ingestão e tratamento analítico de grandes barramentos de informações econômicas estatais e elaboração de modelagens complexas estatísticas.",
      loc: "São Paulo, Brasil • Remoto",
      subType: "Contrato Indireto",
      bullets: [
        "Esteiras analíticas com Azure Databricks + PySpark de alto rendimento orquestrados via Azure Data Factory; armazenamento com ADLS Gen2 e Delta Lake.",
        "Estabilização e padronização que geraram +25% de eficiência operacional e decréscimo de até 30% em erros de carga de processamento de dados.",
        "Elaboração de relatórios analíticos de fomento econômico e cruzamento de dados estaduais consumidos por diretores e secretários de planejamento."
      ]
    },
    en: {
      role: "Data Engineer",
      org: "Secretariat of Economic Development of São Paulo",
      desc: "Ingestion and analytic modeling of large public industrial and economic statistics for evidence-based decision making.",
      loc: "São Paulo, Brazil • Remote",
      subType: "Indirect Contract",
      bullets: [
        "High-performance pipelines combining Azure Databricks + PySpark managed by Azure Data Factory (ADF); storage in ADLS Gen2/Delta Lake formats.",
        "Standardized ingestion rules that delivered a 25% optimization in loading performance and prevented 30% of logging/schema format errors.",
        "Developed Python/SQL models and KPIs on municipal development, served directly to directors for socioeconomic strategic planning."
      ]
    },
    es: {
      role: "Ingeniero de Datos",
      org: "Secretaría de Desarrollo Económico de São Paulo",
      desc: "Ingesta y modelado de datos sobre los indicadores comerciales, balanzas mercantiles y fomento industrial del Estado de São Paulo.",
      loc: "São Paulo, Brasil • Remoto",
      subType: "Contrato Indirecto",
      bullets: [
        "Diseño de arquitecturas híbridas empleando Azure Databricks, PySpark y orquestaciones programáticas con Azure Data Factory.",
        "Establecimiento de validaciones sólidas que mejoraron en un 25% la velocidad de ETL y bajaron en un 30% el recuento de errores.",
        "Generación de reportes analíticos de distribución regional procesados mediante Python, estructurados para uso de secretarios ministeriales."
      ]
    },
    fr: {
      role: "Ingénieur de Données",
      org: "Secrétariat au Développement Économique de SP",
      desc: "Valorisation statistique et intégration de flux de données logistiques et sectoriels du gouvernement étatique de São Paulo.",
      loc: "São Paulo, Brésil • Distanciel",
      subType: "Contractant externe (Indireto)",
      bullets: [
        "Flux analytiques volumineux s'appuyant sur Azure Databricks, Spark SQL et PySpark avec ordonnancement Azure Data Factory.",
        "Refonte des protocoles d'ingestion conduisant à 25% d'efficacité et 30% de baisse sur le taux d'erreur de schéma.",
        "Modélisation statistique de performance économique et création d'indicateurs Python/SQL pour les ministères."
      ]
    },
    it: {
      role: "Data Engineer",
      org: "Segretariato per lo Sviluppo Economico di San Paolo",
      desc: "Ingegnerizzazione dati e análise statistico-economica degli indicatori mercantili e industriali per supportare le politiche regionali.",
      loc: "San Paolo, Brasile • Remoto",
      subType: "Consulente Esterno (Indireto)",
      bullets: [
        "Costruzione canali distributivi ad alte prestazioni tramite Azure Databricks + PySpark controllanti da Azure Data Factory (ADF).",
        "Configurazione di pattern di monitoraggio riducendo del 30% gli errori di ingestion ed elevando al 25% l'affidamento pipeline.",
        "Estrazione metriche d'impatto micro-economico processati con Python/SQL ad uso delle cariche direttive e dei pianificatori."
      ]
    },
    ja: {
      role: "データエンジニア",
      org: "サンパウロ州経済開発局",
      desc: "ブラジル最大の経済規模を誇るサンパウロ州における、公的セクター資金調達・地域開発マクロ統計データの集約 e 分析推進。",
      loc: "サンパウロ、ブラジル • リモート",
      subType: "業務委託・外部契約",
      bullets: [
        "Azure Data Factory (ADF)によりオーケストレートされた、Azure Databricks ＋ PySparkおよびDelta Lakeによる最先端データパイプライン構築。",
        "データ検証プロセスの標準化により、ETLロード効率を25%向上させ、スキーマ不整合等のインジェクションエラーを30%削減。",
        "PythonおよびSQLを用いた企業の地域活動KPIのモデリング、州高官や開発計画部門向けの分析ダッシュボード設計支援。"
      ]
    }
  },
  IGTI: {
    pt: {
      role: "MBA em Desenvolvimento de Software",
      org: "IGTI",
      desc: "Pós-graduação focada em tecnologias web escaláveis, arquitetura de sistemas e engenharia de software ágil."
    },
    en: {
      role: "MBA in Software Development",
      org: "IGTI",
      desc: "Post-graduate program focused on high-scale web technologies, system architectures, and agile engineering patterns."
    },
    es: {
      role: "MBA en Desarrollo de Software",
      org: "IGTI",
      desc: "Estudio de posgrado enfocado en arquitecturas web elásticas, patrones de programación escalables y metodologías ágiles."
    },
    fr: {
      role: "MBA en Développement Logiciel",
      org: "IGTI",
      desc: "Spécialisation avancée portant sur la construction de systèmes d'entreprise, méthodes agiles et architectures orientées services."
    },
    it: {
      role: "MBA in Software Development",
      org: "IGTI",
      desc: "Corso di master focalizzato sull'ingegneria del software aziendale, pattern di programmazione e gestione agile dello sviluppo."
    },
    ja: {
      role: "ソフトウェア開発・システム工学 MBA",
      org: "IGTI",
      desc: "スケーラブルなWebサービス、クラウドファースト設計、アジャイル手法、およびDevOpsパイプライン実装に焦点を当てた専門修士課程。"
    }
  },
  OC: {
    pt: {
      role: "Consultor de Proteção de Dados",
      org: "Open Collective",
      desc: "Assessoria em governança operacional, conformação com legislações de privacidade transfronteiriças e adequação ágil de sistemas.",
      loc: "Estados Unidos • Remoto",
      subType: "Contrato",
      bullets: [
        "Atualização em conformidade regulatória com as premissas europeias (GDPR) e brasileiras (LGPD) sobre o trâmite de metadados e privacidade do usuário.",
        "Configuração e otimização de estratégias avançadas de metatags e performance de SEO focados na expansão e posicionamento da comunidade lusófona.",
        "Coparticipação em cerimônias de desenvolvimento de software em squads ágeis visando segurança robusta por design (privacy by design)."
      ]
    },
    en: {
      role: "Data Protection Consultant",
      org: "Open Collective",
      desc: "Expert advisory on international data privacy laws, secure platform integration, and web indexing optimization.",
      loc: "United States • Remote",
      subType: "Contract",
      bullets: [
        "Audited and refactored privacy statements and technical cookie agreements to satisfy GDPR and LGPD requirements.",
        "Designed Portuguese localization strategy, managing meta tag structures and SEO execution for high compliance mapping.",
        "Collaborated inside agile Scrum sprints to enforce secure coding and privacy-by-design standards."
      ]
    },
    es: {
      role: "Consultor de Protección de Datos",
      org: "Open Collective",
      desc: "Asesoramiento sobre normativas globales de privacidad (RGPD/LGPD), cumplimiento técnico y optimización SEO.",
      loc: "Estados Unidos • Remoto",
      subType: "Contrato",
      bullets: [
        "Alineación del tratamiento de metadatos del portal comercial internacional según mandatos estrictos de la protección de datos brasileña y europea.",
        "Mejora de indexación y SEO enfocado en la indexación de metadatos locales y metaetiquetas del sitio en portugués.",
        "Colaboración activa en ceremonias de desarrollo dentro de marcos ágiles proveyendo pautas estricta de seguridad."
      ]
    },
    fr: {
      role: "Data Protection Consultant",
      org: "Open Collective",
      desc: "Conseil en audits réglementaires de données, cybersécurité d'ingestion et gestion SEO globale.",
      loc: "États-Unis • Distanciel",
      subType: "Contrat",
      bullets: [
        "Mise en conformité des règles de collecte et clauses contractuelles relatives au RGPD européen et à la LGPD brésilienne.",
        "Architecture de balises meta (meta tags) et optimisation du référencement naturel SEO pour les sections lusophones.",
        "Régulation de sprint Scrum agile pour insérer des points d'attention face aux flux d'identifiants sensibles."
      ]
    },
    it: {
      role: "Data Protection Consultant",
      org: "Open Collective",
      desc: "Consulenza in adempimento GDPR/LGPD, verifica dei trattamenti transfrontalieri e ottimizzazioni web SEO.",
      loc: "Stati Uniti • Remoto",
      subType: "Contratto",
      bullets: [
        "Monitoraggio e aggiornamento delle informative sulla privacy ed accordi di tracciamento cookie secondo regole Europee GDPR e Brasiliane LGPD.",
        "Miglioramento dell'indicizzazione e setup avanzato dei metadati tecnici SEO para la versione localizzata in portoghese.",
        "Coordinamento dello sviluppo in team agili per impostare validazioni di sicurezza basate sul privacy-by-design."
      ]
    },
    ja: {
      role: "個人情報保護コンサルタント",
      org: "オープン・コレクティブ",
      desc: "グローバルな決済プラットフォームにおける、GDPR（欧州）およびLGPD（ブラジル）データ保護基準の適正化コンサルティング。",
      loc: "米国（リモート）",
      subType: "業務委託・契約",
      bullets: [
        "個人情報および技術的トラッキングCookieの使用基準を、GDPRおよびLGPD規制へ100%適合させるための監査とドキュメント改定。",
        "ポルトガル語話者向けウェブコンテンツのメタタグ設定、およびSEOエンジン評価最適化の設計を主導。",
        "アジャイル開発スプリントにデータコンプライアンスの観点から参画し、プライバシー・バイ・デザイン構造の構築を保証。"
      ]
    }
  },
  JUCESP: {
    pt: {
      role: "Analista de Dados Regulatórios",
      org: "Junta Comercial do Estado de São Paulo",
      desc: "Sustentação de processos analíticos e geração de relatórios de registro empresarial e governança sob a coordenação da Presidência do órgão.",
      loc: "São Paulo, Brasil",
      subType: "Tempo integral",
      bullets: [
        "Mapeamento, extração de dados e estruturação periódica de relatórios dos principais indicadores de atividade societária comercial (aberturas, fusões, aquisições e baixas).",
        "Modelagem e manutenção de dashboards gerenciais de inteligência usando Power BI e planilhas técnicas avançadas voltadas para o suporte direto da alta gestão.",
        "Auditoria instrumental de acervos documentais e veracidade de informações corporativas frente às normativas vigentes.",
        "Coordenação de solicitações processuais de Mandados de Segurança e suporte ao encaminhamento estratégico da Procuradoria Jurídica.",
        "Apoiamento de redação técnica nos atos oficiais governamentais exigindo validação direta e deferimento da Presidência do órgão."
      ]
    },
    en: {
      role: "Regulatory Data Analyst",
      org: "Board of Trade of the State of São Paulo (JUCESP)",
      desc: "Strategic role managing database analytics, business indicators, and executive compliance under the Board's President.",
      loc: "São Paulo, Brazil",
      subType: "Full-time",
      bullets: [
        "Extracted high-density market stats and structured executive reports on business registries (openings, acquisitions, mergers, and shutdowns).",
        "Designed and maintained executive Power BI dashboards and advanced spreadsheets for decision support.",
        "Ensured compliance of legal and administrative corporate records under federal business registry mandates.",
        "Analyzed and managed incoming Mandados de Segurança (Writs of Mandamus), coordinating technical legal insights directly with the legal department.",
        "Supported the preparation of official administrative resolutions requiring the President's executive validation and signature."
      ]
    },
    es: {
      role: "Analista de Datos Regulatorios",
      org: "Junta Comercial del Estado de São Paulo",
      desc: "Soporte analítico estratégico enfocado en regularización de registros comerciales y análisis de cumplimiento gobernados bajo la presidencia.",
      loc: "São Paulo, Brasil",
      subType: "Tiempo completo",
      bullets: [
        "Mapeo de KPIS societarios corporativos y entrega de reportes sobre flujos de constituciones de empresas, fusiones directas y quiebras.",
        "Construcción de dashboards de inteligencia analítica institucional con Power BI facilitando accesos a reportes automatizados.",
        "Auditoría técnica de veracidad documental y legalidad en fusiones complejas de Sociedades anónimas.",
        "Soporte y canalización prioritario para recursos de control de Mandato de Segurança entregados a la procuraduría interna.",
        "Redacción oficial técnica de normativas y de decretos procesados que precisan resolución directa del Presidente."
      ]
    },
    fr: {
      role: "Analyste de Données Réglementaires",
      org: "Greffe du Commerce de São Paulo (JUCESP)",
      desc: "Gestion d'analyses sur le registre de commerce, modélisation d'indices de conformité et support opérationnel à la Présidence.",
      loc: "São Paulo, Brésil",
      subType: "Temps plein",
      bullets: [
        "Analyses et extractions d'indicateurs corporatifs sur la création, les fusions-acquisitions et faillites d'entreprises.",
        "Modélisation de rapports visuels et tableaux de bord décisionnels Power BI à l'attention des conseillers d'administration.",
        "Vérifications juridico-techniques de conformité des dossiers pour les opérations financières complexes.",
        "Analyse de requêtes extraordinaires (Mandados de Segurança) et liaisons stratégiques avec la direction juridique.",
        "Soutien à la mise en forme de décisions administratives nécessitant approbation réglementaire de la Présidence."
      ]
    },
    it: {
      role: "Analista Dati Regolamentari",
      org: "Camera di Commercio dello Stato di San Paolo (JUCESP)",
      desc: "Analisi dati sulle registrazioni delle società, conformità aziendale e supporto strategico per i provvedimenti del Presidente.",
      loc: "San Paolo, Brasile",
      subType: "Tempo pieno",
      bullets: [
        "Estrazione ed incrocio dati societari per l'emissione dei report sugli indici di sviluppo (aperture, fusioni, acquisizioni e liquidazioni).",
        "Creazione ed aggiornamento periodico di quadri decisionali di Power BI a supporto del comitato direttivo.",
        "Assistenza nell'analisi delle risultanze documentali secondo le normative di garanzia vigenti.",
        "Analisi procedurale di Mandati di Sicurezza coordinando le risposte formali d'intesa con l'ufficio legale.",
        "Collaborazione diretta alla redazione e stesura delle decisioni formali che richiedono validazione del Presidente."
      ]
    },
    ja: {
      role: "規制データ分析アナリスト",
      org: "サンパウロ州商業登記所 (JUCESP)",
      desc: "サンパウロ州における全企業の商業登記登記簿のデータ分析、品質監査、および長官・理事会向け法令準拠サポート。",
      loc: "サンパウロ、ブラジル",
      subType: "フルタイム",
      bullets: [
        "新規設立、事業承継、M&A、破産などの登記トランザクションから商業活動KPIをクエリ抽出・レポート作成。",
        "意思決定を迅速化するための、Power BIおよび高度なスプレッドシートベースの長官向けダッシュボード構築。",
        "法的コンプライアンス管理および商業登記記録・重要書類の真正性と監査整合性の確保。",
        "州官公庁に対する「裁判所命令（Mandados de Segurança）」などの緊急公的要請の進捗データ管理と、法律法務部門への敏速な連携回送。",
        "商業登記所長官の承認および正式デジタル署名、公式告示を必要とする行政決裁書類の事前技術審査および起案サポート。"
      ]
    }
  },
  IESP: {
    pt: {
      role: "Bacharel em Direito",
      org: "IESP",
      desc: "Graduação oficial voltada ao ambiente regulatório, contencioso corporativo e direito direito administrativo. Monografia final centrada na estruturação da segurança pública focada no âmbito municipal."
    },
    en: {
      role: "Bachelor of Laws (LL.B.)",
      org: "IESP",
      desc: "Formal professional law degree (LL.B.) focusing on regulatory structures, administrative law, and corporate litigation. Thesis dedicated to municipal public security frameworks."
    },
    es: {
      role: "Licenciado en Derecho",
      org: "IESP",
      desc: "Estudios formales de grado en derecho, centrado en el marco administrativo y litigación corporativa. Monografía centrada en seguridad local."
    },
    fr: {
      role: "Licence en Droit (LL.B.)",
      org: "IESP",
      desc: "Diplôme universitaire en droit avec dominante en droit administratif et constitutionnel. Thèse rédigée sur l'organisation de la sécurité publique à l'échelle des communes."
    },
    it: {
      role: "Laurea in Giurisprudenza",
      org: "IESP",
      desc: "Laurea formale in legge applicata, con orientamento al diritto amministrativo e contenzioso. Elaborato sulla sicurezza dei territori e poteri locali."
    },
    ja: {
      role: "法学士",
      org: "IESP",
      desc: "ブラジル法定法規、行政不服申立て、契約法等を含む学士課程。都市の安全規制制度および行政政策に関する論文を執執筆。"
    }
  },
  "SMDH-SP": {
    pt: {
      role: "Pesquisador de Políticas Públicas",
      org: "Secretaria Municipal de Direitos Humanos de SP",
      desc: "Coprodução científica e formulação estatística amostral para o diagnóstico de vulnerabilidades urbanas visando o fomento à justiça social e inclusão civil."
    },
    en: {
      role: "Public Policy Researcher",
      org: "Municipal Secretariat of Human Rights of São Paulo",
      desc: "Cooperated on public stats modeling to map territorial socio-vulnerability databases, supporting evidence-based equal justice programs."
    },
    es: {
      role: "Investigador de Políticas Públicas",
      org: "Secretaría Municipal de Derechos Humanos de SP",
      desc: "Cooperación en censos y estadísticas territoriales para elaborar diagnósticos de vulnerabilidad social, apoyando el acceso a la justicia."
    },
    fr: {
      role: "Chercheur en Politiques Publiques",
      org: "Secrétariat Municipal aux Droits de l'Homme de SP",
      desc: "Analyses de terrain et traitement statistique d'études territoriales sur les précarités urbaines, visant le déploiement de l'aide légale."
    },
    it: {
      role: "Ricercatore in Politiche Pubbliche",
      org: "Segretariato Municipale dei Diritti Umani di San Paolo",
      desc: "Analisi qualitativa e quantitativa per mappare la vulnerabilità territoriale, supportando programmi di equità sociale basati sulle risultanze dati."
    },
    ja: {
      role: "公共政策・統計分析研究員",
      org: "サンパウロ市人権局",
      desc: "社会的弱者や若年層の保護に関するデータ検証、「若者マップ（Mapa da Juventude）」公共リサーチ活動の計画・実施。"
    }
  },
  "PUC-SP": {
    pt: {
      role: "Especialização em Economia",
      org: "Pontifícia Universidade Católica de São Paulo",
      desc: "Estudos formais avançados estruturando as dimensões do desenvolvimento econômico nacional, macroeconomia aplicada e análise quantitativa setorial."
    },
    en: {
      role: "Specialization in Economics",
      org: "Pontifical Catholic University of São Paulo",
      desc: "Post-graduate specialization in economic development, applied macroeconomics, and statistical sector analysis."
    },
    es: {
      role: "Especialización en Economía",
      org: "Pontificia Universidad Católica de São Paulo",
      desc: "Posgrado enfocado en el análisis de variables económicas estructurales, macroeconomía aplicada y desarrollo de mercados locales."
    },
    fr: {
      role: "Spécialisation en Économie",
      org: "Université Catholique Pontificale de São Paulo",
      desc: "Étude post-universitaire d'analyse de concurrence, économie d'entreprise et macroéconomie quantitative sectorielle."
    },
    it: {
      role: "Specializzazione in Economia",
      org: "Pontificia Università Cattolica di San Paolo",
      desc: "Corso di specializzazione avanzata sul commercio strutturale, analisi dei flussi macroeconomici e mercati industriali."
    },
    ja: {
      role: "計量経済・都市経済学スペシャリスト課程",
      org: "サンパウロ・カトリック大学",
      desc: "地域経済の資本フロー、政策効率性マッピング、および産業分析に関する高等研究証明書。"
    }
  },
  FIRB: {
    pt: {
      role: "Bacharel em Relações Internacionais",
      org: "Faculdades Integradas Rio Branco",
      desc: "Análise analítica de teorias geopolíticas internacionais clássicas, comércio exterior e logística alfandegária. Estudo de graduação focado no modal logístico aéreo nacional."
    },
    en: {
      role: "Bachelor of International Relations",
      org: "Faculdades Integradas Rio Branco",
      desc: "Rigorous training in international political-economics, trade flows, and customs protocols. Focused research on airspace and public transport networks."
    },
    es: {
      role: "Licenciado en Relaciones Internacionales",
      org: "Faculdades Integradas Rio Branco",
      desc: "Formación estructurada sobre geopolítica, dinámicas de aduanas y balanza comercial de bienes. Estudio terminal sobre aviación brasileña."
    },
    fr: {
      role: "Licence en Relations Internationales",
      org: "Faculdades Integradas Rio Branco",
      desc: "Formation intensive en géo-économie mondiale, commerce extérieur et douanes. Thèse finale sur le réseau logistique et régulation aérienne."
    },
    it: {
      role: "Laurea in Relazioni Internazionali",
      org: "Faculdades Integradas Rio Branco",
      desc: "Laurea incentrata sulla geopolitica, flussi economici di import-export e dogane. Ricerca dedicata all'evoluzione dell'aviazione civile."
    },
    ja: {
      role: "国際関係学学士",
      org: "リオ・ブランコ統合大学",
      desc: "地政学理論、貿易、物流、国際関税法等の専攻。ブラジル航空インフラ物流および貿易依存に関連する卒業論文を執筆。"
    }
  }
};

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

  // Gracefully resolve translations with structured fallbacks
  const getLocalizedTimelineItem = (item: typeof timelineData[0]) => {
    const key = item.logoText || "";
    const lang = language as string;
    const fallback = "pt";

    if (key && localizedData[key]) {
      const entry = localizedData[key];
      const localized = entry[lang] || entry[fallback];
      return {
        role: localized.role,
        organization: localized.org,
        description: localized.desc,
        location: localized.loc,
        subType: localized.subType,
        bullets: localized.bullets || []
      };
    }

    // Default structural fallback
    return {
      role: item.role,
      organization: item.organization,
      description: item.description,
      location: item.location,
      subType: item.subType,
      bullets: item.bullets || []
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
                  key={`${item.period}-${item.logoText || item.role}`}
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
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#F27D26]">
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
                    className={`p-6 rounded-sm border transition-colors flex gap-5 items-start ${
                      isDark
                        ? "bg-[#0F0F0F] border-[#2A2A2A] hover:border-[#F27D26]/40"
                        : "bg-white border-[#E5E5DF] hover:border-[#F27D26]/40"
                    }`}
                  >
                    {/* Monogram initials logo for visual rhythm */}
                    {item.logoText && (
                      <div 
                        className={`hidden sm:flex w-12 h-12 rounded-sm border items-center justify-center font-mono text-[11px] font-black tracking-tight shrink-0 select-none ${
                          isDark 
                            ? "bg-[#141414] border-[#222] text-[#F27D26]" 
                            : "bg-gray-50 border-gray-200 text-[#F27D26]"
                        }`}
                      >
                        {item.logoText}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 
                          className="text-lg italic font-light text-[#F27D26] text-left leading-tight"
                          style={{ fontFamily: "'Georgia', serif" }}
                        >
                          {localized.role}
                        </h3>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E8E8E] flex items-center gap-1.5 self-start md:self-center">
                          <Building className="w-3.5 h-3.5 opacity-60 text-[#F27D26]" />
                          {localized.organization}
                        </span>
                      </div>

                      {/* Location and employment type metadata row */}
                      {(localized.location || localized.subType) && (
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-[10px] uppercase tracking-wider font-mono opacity-50">
                          {localized.subType && (
                            <span className={`px-1.5 py-0.5 rounded-sm font-semibold border ${
                              isDark ? "bg-[#161616] border-[#222] text-[#8E8E8E]" : "bg-[#F3F3F3] border-[#E5E5DF] text-gray-600"
                            }`}>
                              {localized.subType}
                            </span>
                          )}
                          {localized.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#F27D26] opacity-70" />
                              {localized.location}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Narrative description */}
                      {localized.description && (
                        <p className={`text-xs leading-relaxed text-left ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
                          {localized.description}
                        </p>
                      )}

                      {/* Bullets lists */}
                      {localized.bullets && localized.bullets.length > 0 && (
                        <ul className="mt-4 space-y-2 border-l-2 border-[#F27D26]/20 pl-4 text-left">
                          {localized.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className={`text-xs leading-relaxed ${isDark ? "text-[#ABABAB]" : "text-[#4A4A4A]"}`}>
                              <span className="text-[#F27D26] mr-1.5 font-bold">•</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Skills Badges Cloud */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-4 text-left">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm font-mono font-medium border ${
                                isDark
                                  ? "bg-[#151515] border-[#2A2A2A] text-[#8E8E8E]"
                                  : "bg-gray-50 border-gray-200 text-gray-600"
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
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
