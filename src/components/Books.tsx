import { useState, useMemo } from "react";
import { booksData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Search, HelpCircle, ArrowUpRight } from "lucide-react";
import { Language, translations } from "../translations";

interface BooksProps {
  isDark: boolean;
  language: Language;
}

export default function Books({ isDark, language }: BooksProps) {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const t = translations[language].books;

  const tabs = [
    { id: "all", label: t.all },
    { id: "ia", label: t.ai },
    { id: "dados", label: t.data },
    { id: "automacao", label: t.automation },
    { id: "direito", label: t.law },
  ];

  // Filters search queries and tab selections efficiently
  const filteredBooks = useMemo(() => {
    return booksData.filter((book) => {
      const matchesTab = selectedTab === "all" || book.category === selectedTab;
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (book.asin && book.asin.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTab && matchesSearch;
    });
  }, [selectedTab, searchQuery]);

  const displayBookLang = (lang: string) => {
    if (lang === "Português") {
      return language === "pt" ? "Português" :
             language === "en" ? "Portuguese" :
             language === "es" ? "Portugués" :
             language === "fr" ? "Portugais" :
             language === "it" ? "Portoghese" :
             "ポルトガル語";
    }
    if (lang === "Inglês") {
      return language === "pt" ? "Inglês" :
             language === "en" ? "English" :
             language === "es" ? "Inglés" :
             language === "fr" ? "Anglais" :
             language === "it" ? "Inglese" :
             "英語";
    }
    if (lang === "Espanhol") {
      return language === "pt" ? "Espanhol" :
             language === "en" ? "Spanish" :
             language === "es" ? "Español" :
             language === "fr" ? "Espagnol" :
             language === "it" ? "Spagnolo" :
             "スペイン語";
    }
    return lang;
  };

  return (
    <section className={`py-24 border-t ${isDark ? "bg-[#0A0A0A] border-[#2A2A2A]" : "bg-[#F5F5F0] border-[#E5E5DF]"}`} id="livros">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intros Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left max-w-2xl">
            <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold mb-3 inline-block">
              {t.badge}
            </span>
            <h2 
              className="text-3xl sm:text-4xl leading-tight font-light italic mb-3"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {t.title}
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
              {t.desc}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full text-xs px-4 py-3 pl-10 rounded-sm border focus:outline-none transition-colors ${
                isDark
                  ? "bg-[#0F0F0F] border-[#2A2A2A] text-[#F5F5F0] focus:border-[#F27D26]"
                  : "bg-white border-[#E5E5DF] text-[#0A0A0A] focus:border-[#F27D26]"
              }`}
            />
            <Search className="w-3.5 h-3.5 text-[#8E8E8E] absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Tab Filters with geometric design */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-[#2A2A2A]/20 text-left">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`text-[10px] uppercase tracking-widest font-bold px-4 py-2.5 rounded-sm border transition-all cursor-pointer ${
                selectedTab === tab.id
                  ? isDark
                    ? "bg-[#F27D26] border-[#F27D26] text-white"
                    : "bg-[#0A0A0A] border-[#0A0A0A] text-white"
                  : isDark
                    ? "border-transparent text-[#8E8E8E] hover:text-[#F5F5F0]"
                    : "border-transparent text-[#555] hover:text-[#0A0A0A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Books Grid with minimal card design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className={`flex flex-col justify-between p-6 rounded-sm border transition-colors ${
                    isDark
                      ? "bg-[#0F0F0F] border-[#2A2A2A] hover:border-[#F27D26]/40"
                      : "bg-white border-[#E5E5DF] hover:border-[#F27D26]/40"
                  }`}
                >
                  <div>
                    {/* Header: book emoji + category */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-sm bg-[#F27D26]/10 border border-[#F27D26]/20 flex items-center justify-center text-xl">
                        {book.coverEmoji}
                      </div>

                      {/* Info labels */}
                      <div className="flex flex-col gap-1 items-end">
                        <span className="text-[9px] uppercase font-mono tracking-widest text-[#F27D26] font-bold">
                          {book.category === "ia"
                            ? "AI Agents"
                            : book.category === "dados"
                              ? "Data & Cloud"
                              : book.category === "automacao"
                                ? (language === "ja" ? "自動化" : "Automation")
                                : book.category === "direito"
                                  ? (language === "ja" ? "法務安全" : "Law & Gov")
                                  : "R. Intel"}
                        </span>
                        
                        {book.asin && (
                          <span className="text-[8px] font-mono opacity-50 uppercase">
                            ASIN: {book.asin}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Book name and brief description */}
                    <h3 
                      className="font-light italic text-base leading-snug mb-2 line-clamp-2 h-11 text-left"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {book.title}
                    </h3>
                    <p className={`text-xs leading-relaxed text-left line-clamp-3 mb-6 h-15 ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
                      {book.description}
                    </p>
                  </div>

                  {/* Footing: Language metadata + Amazon link */}
                  <div className="pt-4 border-t border-gray-500/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono opacity-60">
                      {language === "ja" ? "対応言語: " : "Language: "}<span className="font-sans font-semibold">{displayBookLang(book.lang)}</span>
                    </span>

                    <a
                      href="https://www.amazon.com/stores/author/B0DCTM3LGP/allbooks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-wider font-bold text-[#F27D26] flex items-center gap-1 hover:opacity-80 font-mono transition-opacity"
                    >
                      KDP Amazon
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <HelpCircle className="w-12 h-12 text-gray-500 opacity-50 mb-3" />
                <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  {language === "pt" ? "Nenhum livro técnico encontrado com as diretrizes indicadas." :
                   language === "en" ? "No technical manual found with the given criteria." :
                   language === "es" ? "No se encontró ningún manual técnico con los criterios dados." :
                   language === "fr" ? "Aucun manuel technique trouvé avec les critères indiqués." :
                   language === "it" ? "Nessun manuale tecnico trovato con i criteri indicati." :
                   "指定された条件に一致する技術マニュアルが見つかりませんでした。"}
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic total warning metrics */}
        <div className="mt-12 text-center">
          <p className={`text-xs font-mono inline-block px-4 py-2 border rounded-sm ${isDark ? "bg-[#0F0F0F] border-[#2A2A2A] text-[#8E8E8E]" : "bg-white border-[#E5E5DF] text-[#555]"}`}>
            {t.footerText1} <strong className="text-[#F27D26]">{filteredBooks.length}</strong> {t.footerText2}{" "}
            <strong className="text-[#F27D26]">{booksData.length}</strong> {t.footerText3}
          </p>
        </div>

      </div>
    </section>
  );
}
