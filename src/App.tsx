import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Ecosystem from "./components/Ecosystem";
import Books from "./components/Books";
import Articles from "./components/Articles";
import Timeline from "./components/Timeline";
import Honors from "./components/Honors";
import Contact from "./components/Contact";
import Hubs from "./components/Hubs";
import { AICrimeSpotlight } from "./components/AICrimeFiles";
import { Language, translations } from "./translations";
import { ExternalLink } from "lucide-react";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [language, setLanguage] = useState<Language>("en");
  const [currentPath, setCurrentPath] = useState<string>("/");

  // Sync path status on mount and listen to window path
  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    updatePath();

    // Attach dynamic state listener for back/forward buttons
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navTranslations = translations[language].navbar;

  const footerTagline = language === "pt" ? "Engenheiro de Dados • Autor Técnico Internacional" :
                        language === "en" ? "Data Engineer • International Technical Author" :
                        language === "es" ? "Ingeniero de Datos • Autor Técnico Internacional" :
                        language === "fr" ? "Ingénieur de Données • Auteur Technique International" :
                        language === "it" ? "Data Engineer • Autore Tecnico Internazionale" :
                        "データエンジニア • インターナショナル技術著者";

  const footerRights = language === "pt" ? "Todos os direitos reservados." :
                       language === "en" ? "All rights reserved." :
                       language === "es" ? "Todos los derechos reservados." :
                       language === "fr" ? "Tous droits réservés." :
                       language === "it" ? "Tutti i diritti riservati." :
                       "All rights reserved.";

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        isDark ? "bg-[#0A0A0A] text-[#F5F5F0]" : "bg-[#F5F5F0] text-[#0A0A0A]"
      }`}
    >
      {/* Navbar with smooth routing capabilities */}
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        language={language} 
        setLanguage={setLanguage} 
        currentPath={currentPath}
        onNavigate={navigate}
      />

      {/* Main Layout contents */}
      <main className="relative pt-20">
        {currentPath === "/" || currentPath === "" ? (
          <>
            <Hero isDark={isDark} language={language} />
            <About isDark={isDark} language={language} />
            <Ecosystem isDark={isDark} language={language} onNavigate={navigate} />
            <Books isDark={isDark} language={language} onNavigate={navigate} />
            <AICrimeSpotlight onNavigate={navigate} />
            <Articles isDark={isDark} language={language} />
            <Timeline isDark={isDark} language={language} />
            <Honors isDark={isDark} language={language} />
            <Contact isDark={isDark} language={language} />
          </>
        ) : (
          <Hubs 
            isDark={isDark} 
            language={language} 
            currentPath={currentPath} 
            onNavigate={navigate} 
          />
        )}
      </main>

      {/* Structured Footer element */}
      <footer
        className={`py-16 border-t ${
          isDark ? "bg-[#0F0F0F] border-[#2A2A2A]" : "bg-white border-[#E5E5DF]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-10 border-b border-gray-500/5">
            <div className="text-left">
              <p 
                className="text-2xl font-light italic leading-none mb-1 text-[#F27D26]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Leandro Calado Ferreira
              </p>
              <p className="text-[10px] uppercase tracking-wider opacity-60 mt-1 font-mono">
                {footerTagline}
              </p>
            </div>

            {/* Nav Footer Links shortcuts using client routing */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest font-mono font-bold">
              <button 
                onClick={() => navigate("/about")} 
                className="hover:text-[#F27D26] transition-colors cursor-pointer focus:outline-none"
              >
                {navTranslations.about}
              </button>
              <button 
                onClick={() => navigate("/start-here")} 
                className="hover:text-[#F27D26] transition-colors cursor-pointer focus:outline-none"
              >
                {navTranslations.ecosystem}
              </button>
              <button 
                onClick={() => navigate("/books")} 
                className="hover:text-[#F27D26] transition-colors cursor-pointer focus:outline-none"
              >
                {navTranslations.books}
              </button>
              <button
                onClick={() => navigate("/ai-crime-files")}
                className="hover:text-[#F27D26] transition-colors cursor-pointer focus:outline-none"
              >
                AI Crime Files
              </button>
              <button
                onClick={() => navigate("/articles")} 
                className="hover:text-[#F27D26] transition-colors cursor-pointer focus:outline-none"
              >
                {navTranslations.articles}
              </button>
              <button 
                onClick={() => navigate("/consulting")} 
                className="hover:text-[#F27D26] transition-colors cursor-pointer focus:outline-none"
              >
                {language === "pt" ? "Consultoria" : "Consulting"}
              </button>
              <button 
                onClick={() => navigate("/start-here")} 
                className="hover:text-[#F27D26] transition-colors cursor-pointer focus:outline-none"
              >
                {language === "pt" ? "Comece Por Aqui" : "Start Here"}
              </button>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-[11px] opacity-50 font-mono">
            <span>
              © {new Date().getFullYear()} Leandro Calado Ferreira. {footerRights}
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href="https://github.com/lcaladoferreira"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F27D26] transition-colors inline-flex items-center gap-1 font-bold uppercase tracking-wider"
              >
                GitHub <ExternalLink className="w-3 h-3 text-[#F27D26]" />
              </a>
              <a
                href="https://www.linkedin.com/in/lcaladoferreira/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F27D26] transition-colors inline-flex items-center gap-1 font-bold uppercase tracking-wider"
              >
                LinkedIn <ExternalLink className="w-3 h-3 text-[#F27D26]" />
              </a>
              <a
                href="https://leandrocalado.jusbrasil.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F27D26] transition-colors inline-flex items-center gap-1 font-bold uppercase tracking-wider"
              >
                Jusbrasil <ExternalLink className="w-3 h-3 text-[#F27D26]" />
              </a>
              <a
                href="https://leandrocaladoferreira.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F27D26] transition-colors inline-flex items-center gap-1 font-bold uppercase tracking-wider"
              >
                Medium <ExternalLink className="w-3 h-3 text-[#F27D26]" />
              </a>
              <a
                href="http://lattes.cnpq.br/0050162670485497"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F27D26] transition-colors inline-flex items-center gap-1 font-bold uppercase tracking-wider"
              >
                Lattes <ExternalLink className="w-3 h-3 text-[#F27D26]" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
