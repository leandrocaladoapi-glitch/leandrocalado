import { useState, useMemo } from "react";
import { articlesData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Search, HelpCircle, Eye, ArrowUpRight } from "lucide-react";
import { Language, translations } from "../translations";

interface ArticlesProps {
  isDark: boolean;
  language: Language;
}

export default function Articles({ isDark, language }: ArticlesProps) {
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const t = translations[language].articles;

  const platforms = [
    { id: "all", label: t.all },
    { id: "Jusbrasil", label: "Jusbrasil" },
    { id: "Medium", label: language === "ja" ? "Medium (記事)" : "Medium" },
  ];

  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchesPlatform = platformFilter === "all" || article.platform === platformFilter;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.excerpt && article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesPlatform && matchesSearch;
    });
  }, [platformFilter, searchQuery]);

  const getArticleMetas = (article: typeof articlesData[0]) => {
    if (article.views) {
      return language === "pt" ? `${article.views} visualizações` :
             language === "en" ? `${article.views} views` :
             language === "es" ? `${article.views} vistas` :
             language === "fr" ? `${article.views} vues` :
             language === "it" ? `${article.views} visualizzazioni` :
             `${article.views} 閲覧`;
    }
    if (article.claps) {
      return language === "pt" ? `${article.claps} palmas` :
             language === "en" ? `${article.claps} claps` :
             language === "es" ? `${article.claps} aplausos` :
             language === "fr" ? `${article.claps} applaudissements` :
             language === "it" ? `${article.claps} applausi` :
             `${article.claps} 拍手`;
    }
    return "";
  };

  const localSearchPlaceholder = language === "pt" ? "Buscar ensaio..." :
                                 language === "en" ? "Search essay..." :
                                 language === "es" ? "Buscar ensayo..." :
                                 language === "fr" ? "Rechercher un essai..." :
                                 language === "it" ? "Cerca saggio..." :
                                 "エッセイを検索...";

  return (
    <section className={`py-24 border-t ${isDark ? "bg-[#0A0A0A] border-[#2A2A2A]" : "bg-[#F5F5F0] border-[#E5E5DF]"}`} id="artigos">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intros Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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

        {/* Filters Controls bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          {/* Platforms Filter buttons */}
          <div className="flex flex-wrap gap-2 text-left w-full md:w-auto">
            {platforms.map((plat) => (
              <button
                key={plat.id}
                onClick={() => setPlatformFilter(plat.id)}
                className={`text-[10px] uppercase tracking-widest font-bold px-4 py-2.5 rounded-sm border transition-all cursor-pointer ${
                  platformFilter === plat.id
                    ? "bg-[#F27D26] border-[#F27D26] text-white"
                    : isDark
                      ? "bg-[#0F0F0F] border-[#2A2A2A] text-[#8E8E8E] hover:text-[#F5F5F0]"
                      : "bg-white border-[#E5E5DF] text-[#555] hover:text-[#0A0A0A]"
                }`}
              >
                {plat.label}
              </button>
            ))}
          </div>

          {/* Search dynamic input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder={localSearchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full text-xs px-4 py-2.5 pl-10 rounded-sm border focus:outline-none transition-colors ${
                isDark
                  ? "bg-[#0F0F0F] border-[#2A2A2A] text-[#F5F5F0] focus:border-[#F27D26]"
                  : "bg-white border-[#E5E5DF] text-[#0A0A0A] focus:border-[#F27D26]"
              }`}
            />
            <Search className="w-3.5 h-3.5 text-[#8E8E8E] absolute left-3 top-3.5" />
          </div>
        </div>

        {/* Mapped Articles List elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <motion.div
                  key={article.title}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`p-6 sm:p-8 rounded-sm border text-left flex flex-col justify-between transition-colors duration-300 ${
                    isDark
                      ? "bg-[#0F0F0F] border-[#2A2A2A] hover:border-[#F27D26]/40"
                      : "bg-white border-[#E5E5DF] hover:border-[#F27D26]/40"
                  }`}
                >
                  <div>
                    {/* Header: Platform tag + category information */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span
                        className={`text-[9px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-sm font-bold border ${
                          article.platform === "Jusbrasil"
                            ? isDark
                              ? "bg-[#151515] text-[#F27D26] border-[#F27D26]/40"
                              : "bg-[#F5F5F0] text-[#F27D26] border-[#E5E5DF]"
                            : isDark
                              ? "bg-[#151515] text-[#F5F5F0] border-[#2A2A2A]"
                              : "bg-white text-[#0A0A0A] border-[#E5E5DF]"
                        }`}
                      >
                        {article.platform} • {article.category}
                      </span>

                      {/* Stat summary metric indicator if view check is set */}
                      {(article.views || article.claps) && (
                        <div className="flex items-center gap-1.5 opacity-60 text-[10px] font-mono">
                          <Eye className="w-3.5 h-3.5 text-[#F27D26]" />
                          <span>
                            {getArticleMetas(article)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Main title & summary excerpt */}
                    <h3 
                      className="font-light italic text-lg sm:text-xl leading-snug mb-3 text-left"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {article.title}
                    </h3>
                    <p className={`text-xs leading-relaxed text-left mb-6 line-clamp-3 ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Footing link action CTA */}
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase font-bold text-[#F27D26] hover:opacity-80 inline-flex items-center gap-1.5 self-start font-mono transition-opacity"
                  >
                    {t.readCta}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                <HelpCircle className="w-12 h-12 text-gray-500 opacity-50 mb-3" />
                <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  {language === "pt" ? "Nenhum ensaio ou publicação encontrado com os filtros e buscas estabelecidos." :
                   language === "en" ? "No article or publication found with the specified criteria." :
                   language === "es" ? "No se encontró ningún artículo ni publicación con los criterios especificados." :
                   language === "fr" ? "Aucun article ou publication trouvé avec les critères spécifiés." :
                   language === "it" ? "Nessun articolo o pubblicazione trovato con i criteri specificati." :
                   "指定されたフィルタや条件に一致する論文や記事は見つかりませんでした。"}
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Integration Summary footer banner */}
        <div
          className={`p-6 sm:p-8 rounded-sm border text-left mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${
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
              {t.newsletterTitle}
            </h4>
            <p className={`text-xs leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
              {t.newsletterDesc}
            </p>
          </div>
          <a
            href="https://www.linkedin.com/newsletters/lawtech-and-legaltech-6871418044783099904"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 text-[10px] uppercase font-bold tracking-widest transition-all duration-300 border rounded-sm self-start sm:self-center shrink-0 ${
              isDark
                ? "border-[#F5F5F0] text-[#F5F5F0] hover:bg-white hover:text-black"
                : "border-[#0A0A0A] text-[#0A0A0A] hover:bg-black hover:text-white"
            }`}
          >
            {t.newsletterCta}
          </a>
        </div>

      </div>
    </section>
  );
}
