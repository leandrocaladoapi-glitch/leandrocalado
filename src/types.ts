export interface Book {
  id: string;
  title: string;
  category: "ia" | "dados" | "automacao" | "direito" | "internacional";
  asin?: string;
  isbn?: string;
  description: string;
  lang: "Português" | "Inglês" | "Espanhol" | "Alemão";
  coverEmoji: string;
}

export interface Article {
  title: string;
  platform: "Jusbrasil" | "Medium" | "Issuu";
  category: "IA & Direito" | "IA & Automação" | "Engenharia de Dados" | "Power BI & DAX" | "Direito & Sociedade" | "Internacional & Aviação";
  views?: string;
  claps?: string;
  link: string;
  excerpt?: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  type: "academic" | "professional";
}

export interface AuthorityProof {
  iconName: string;
  value: string;
  label: string;
}

export interface ThemeDomain {
  id: string;
  title: string;
  desc: string;
}
