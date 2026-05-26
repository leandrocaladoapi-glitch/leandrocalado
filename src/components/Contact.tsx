import { Sparkles, BookOpen } from "lucide-react";
import { Language, translations } from "../translations";

interface ContactProps {
  isDark: boolean;
  language: Language;
}

export default function Contact({ isDark, language }: ContactProps) {
  const t = translations[language].contact;

  const ctas = [
    {
      title: t.b2bTitle,
      desc: t.b2bDesc,
      icon: Sparkles,
      actionText: t.b2bCta,
      href: "https://www.lcfconsulting.com.br",
    },
    {
      title: t.workshopsTitle,
      desc: t.workshopsDesc,
      icon: BookOpen,
      actionText: t.workshopsCta,
      href: "mailto:leandrocalado.api@gmail.com",
    },
  ];

  return (
    <section className={`py-24 border-t relative ${isDark ? "bg-[#0A0A0A] border-[#2A2A2A]" : "bg-[#F5F5F0] border-[#E5E5DF]"}`} id="contato">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Intros Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[#F27D26] font-bold mb-3 inline-block">
            {t.badge}
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-light italic mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t.title}
          </h2>
          <p className={`text-sm leading-relaxed ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
            {t.desc}
          </p>
        </div>

        {/* Simplified Geometric CTA Cards layout symmetrically placed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {ctas.map((item, i) => {
            const IconComp = item.icon;
            return (
              <div
                key={i}
                className={`p-8 rounded-sm border flex flex-col justify-between transition-colors hover:border-[#F27D26]/40 ${
                  isDark ? "bg-[#0F0F0F] border-[#2A2A2A]" : "bg-white border-[#E5E5DF]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-[#F27D26]/10 border border-[#F27D26]/20 rounded-sm shrink-0">
                      <IconComp className="w-4.5 h-4.5 text-[#F27D26]" />
                    </div>
                    <h3 
                      className="font-light italic text-lg sm:text-xl tracking-tight"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className={`text-xs leading-relaxed mb-6 ${isDark ? "text-[#8E8E8E]" : "text-[#555]"}`}>
                    {item.desc}
                  </p>
                </div>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-widest font-bold text-[#F27D26] hover:opacity-80 flex items-center gap-1.5 font-mono transition-opacity mt-4"
                >
                  {item.actionText}
                  <span>→</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
