import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, Fingerprint, ShieldAlert } from "lucide-react";
import { Language } from "../translations";
import {
  AI_CRIME_BASE_PATH,
  AI_CRIME_BOOK_COVER,
  AI_CRIME_BOOK_URL,
  AICrimeCase,
  aiCrimeCases,
  getAICrimeCase,
} from "../aiCrimeData";

interface AICrimeFilesProps {
  isDark: boolean;
  language: Language;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const trackBookClick = (placement: string) => {
  const analytics = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  analytics?.("event", "amazon_book_click", {
    book_asin: "B0HHHDL9TB",
    placement,
  });
};

function BookCTA({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`relative overflow-hidden border border-red-500/25 bg-gradient-to-br from-red-950/35 via-[#111] to-[#0b0b0b] ${compact ? "p-6" : "p-8 sm:p-10"}`}>
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-600/10 blur-3xl" />
      <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center">
        {!compact && (
          <img
            src={AI_CRIME_BOOK_COVER}
            alt="Cover of Nobody Told It to Lie by Leandro Calado"
            className="w-32 shrink-0 border border-white/15 shadow-2xl shadow-red-950/50"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        )}
        <div>
          <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-red-400">The AI Crime Files · Case 001</p>
          <h2 className="font-serif text-2xl font-light italic leading-tight text-white sm:text-3xl">Nobody Told It to Lie</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
            The documented story of the rogue AI agent that invented two humans and tried to plant malware on GitHub.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={AI_CRIME_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackBookClick(compact ? "article_inline" : "feature")}
              className="inline-flex items-center gap-2 bg-red-600 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-500"
            >
              Read on Amazon <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">84 pages · English · Kindle $2.99</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function EvidenceBadge({ kind }: { kind: "Primary" | "Independent" }) {
  return (
    <span className={`shrink-0 border px-2 py-1 font-mono text-[8px] font-bold uppercase tracking-widest ${
      kind === "Primary" ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-400" : "border-sky-500/30 bg-sky-500/5 text-sky-400"
    }`}>
      {kind} source
    </span>
  );
}

function CaseCard({ item, onNavigate }: { key?: string; item: AICrimeCase; onNavigate: (path: string) => void }) {
  const href = `${AI_CRIME_BASE_PATH}/${item.slug}`;
  return (
    <article className="group flex h-full flex-col border border-white/10 bg-[#101010] transition-all hover:-translate-y-1 hover:border-red-500/40">
      <div className="border-b border-white/10 p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-red-400">Case {item.caseNumber}</span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-600">Verified file</span>
        </div>
        <h2 className="font-serif text-2xl font-light italic leading-tight text-white transition-colors group-hover:text-red-400">{item.shortTitle}</h2>
        <p className="mt-3 text-xs leading-relaxed text-zinc-400">{item.excerpt}</p>
      </div>
      <div className="grid grid-cols-3 border-b border-white/10">
        {item.metrics.map((metric) => (
          <div key={metric.label} className="border-r border-white/10 p-3 last:border-r-0">
            <strong className="block font-mono text-sm text-white">{metric.value}</strong>
            <span className="mt-1 block text-[8px] uppercase leading-tight tracking-wide text-zinc-600">{metric.label}</span>
          </div>
        ))}
      </div>
      <button
        onClick={() => onNavigate(href)}
        className="mt-auto flex w-full cursor-pointer items-center justify-between p-5 text-left font-mono text-[9px] font-bold uppercase tracking-widest text-red-400 transition-colors hover:bg-red-500/5"
      >
        Open the evidence file <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}

function CrimeIndex({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="bg-[#090909] text-zinc-100">
      <header className="relative overflow-hidden border-b border-red-500/20 px-6 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(239,68,68,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,.18) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-7 flex items-center gap-3">
            <Fingerprint className="h-5 w-5 text-red-500" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-red-400">Documented autonomous AI crime</span>
          </div>
          <h1 className="max-w-4xl font-serif text-5xl font-light italic leading-[0.94] text-white sm:text-7xl lg:text-8xl">The AI Crime Files</h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Real systems. Real victims. Real evidence. Investigations into criminal acts executed by AI agents with the power to scan, deceive, steal and act.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 font-mono text-[9px] font-bold uppercase tracking-widest">
            <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400">No fiction</span>
            <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400">No hypothetical cases</span>
            <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400">Sources attached</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <section aria-labelledby="case-files-title">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-red-400">Open investigations</p>
              <h2 id="case-files-title" className="mt-2 font-serif text-3xl font-light italic text-white sm:text-4xl">Read the case files</h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-zinc-500">Each file separates verified action, degree of autonomy and legal status. Sensationalism ends where the evidence ends.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {aiCrimeCases.map((item) => <CaseCard key={item.slug} item={item} onNavigate={onNavigate} />)}
          </div>
        </section>

        <section className="my-20 grid gap-8 border-y border-white/10 py-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <ShieldAlert className="h-7 w-7 text-red-500" />
            <h2 className="mt-5 font-serif text-3xl font-light italic text-white">What earns a place in this archive</h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "A named incident documented by a primary or accountable source."],
              ["02", "An AI agent performed actions inside a live operational system."],
              ["03", "The conduct maps to a specific criminal act, not a vague AI failure."],
              ["04", "The file states what is proven, alleged, unsuccessful or uncharged."],
            ].map(([number, text]) => (
              <li key={number} className="border border-white/10 bg-white/[0.02] p-5">
                <span className="font-mono text-[9px] font-bold text-red-400">{number}</span>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <BookCTA />
      </main>
    </div>
  );
}

function CrimeArticle({ item, onNavigate }: { item: AICrimeCase; onNavigate: (path: string) => void }) {
  return (
    <article className="bg-[#090909] text-zinc-100">
      <header className="border-b border-white/10 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <button onClick={() => onNavigate(AI_CRIME_BASE_PATH)} className="mb-10 flex cursor-pointer items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-red-400">
            <ArrowLeft className="h-3.5 w-3.5" /> All case files
          </button>
          <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.22em]">
            <span className="bg-red-600 px-3 py-1.5 text-white">Case {item.caseNumber}</span>
            <span className="text-red-400">Verified investigation</span>
          </div>
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-500">{item.kicker}</p>
          <h1 className="font-serif text-4xl font-light italic leading-[1.02] text-white sm:text-6xl">{item.title}</h1>
          <p className="mt-7 max-w-3xl text-base leading-relaxed text-zinc-400">{item.excerpt}</p>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
            <span>By Leandro Calado</span>
            <span>Published {item.published}</span>
            <span>Incident {item.eventDate}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:py-20">
        <div className="min-w-0">
          <section className="mb-12 grid grid-cols-3 border border-white/10" aria-label="Case metrics">
            {item.metrics.map((metric) => (
              <div key={metric.label} className="border-r border-white/10 p-4 last:border-r-0 sm:p-5">
                <strong className="block font-mono text-base text-white sm:text-xl">{metric.value}</strong>
                <span className="mt-1 block text-[8px] uppercase leading-tight tracking-wide text-zinc-600">{metric.label}</span>
              </div>
            ))}
          </section>

          {item.sections.map((section, index) => (
            <section key={section.heading} className="mb-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[9px] font-bold text-red-500">0{index + 1}</span>
                <h2 className="font-serif text-2xl font-light italic text-white sm:text-3xl">{section.heading}</h2>
              </div>
              <div className="space-y-5 text-[15px] leading-7 text-zinc-300">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.bullets && (
                <ul className="mt-6 space-y-3 border-l border-red-500/40 pl-5 text-sm leading-relaxed text-zinc-400">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
              {index === 1 && item.caseNumber === "001" && <div className="mt-9"><BookCTA compact /></div>}
            </section>
          ))}

          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="font-serif text-3xl font-light italic text-white">Evidence desk</h2>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">Open the documents used to verify this file. Primary sources are identified separately from independent reporting.</p>
            <div className="mt-6 space-y-3">
              {item.sources.map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-red-500/40">
                  <div>
                    <span className="block text-sm text-zinc-200">{source.label}</span>
                    <span className="mt-1 block font-mono text-[9px] uppercase tracking-wider text-zinc-600">{source.publisher}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <EvidenceBadge kind={source.kind} />
                    <ExternalLink className="h-4 w-4 shrink-0 text-red-400" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <div className="mt-14"><BookCTA /></div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border border-white/10 bg-[#101010] p-5">
            <div className="mb-5 flex items-center gap-2 text-red-400"><Fingerprint className="h-4 w-4" /><span className="font-mono text-[9px] font-bold uppercase tracking-widest">Case classification</span></div>
            <dl className="space-y-5">
              <div><dt className="font-mono text-[8px] uppercase tracking-widest text-zinc-600">Criminal conduct</dt><dd className="mt-1 text-xs leading-relaxed text-zinc-300">{item.criminalConduct}</dd></div>
              <div><dt className="font-mono text-[8px] uppercase tracking-widest text-zinc-600">Agent autonomy</dt><dd className="mt-1 text-xs leading-relaxed text-zinc-300">{item.autonomy}</dd></div>
              <div><dt className="font-mono text-[8px] uppercase tracking-widest text-zinc-600">Legal status</dt><dd className="mt-1 text-xs leading-relaxed text-zinc-300">{item.legalStatus}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    </article>
  );
}

export function AICrimeSpotlight({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="border-t border-red-500/20 bg-[#090909] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <div className="mb-5 flex items-center gap-3 text-red-400"><Fingerprint className="h-5 w-5" /><span className="font-mono text-[9px] font-bold uppercase tracking-[0.28em]">New investigation series</span></div>
          <h2 className="font-serif text-4xl font-light italic leading-tight sm:text-5xl">Crimes executed by autonomous AI are no longer hypothetical.</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400">The AI Crime Files follows documented cases where agents crossed from generated text into live systems, real victims and criminal operations.</p>
          <button onClick={() => onNavigate(AI_CRIME_BASE_PATH)} className="mt-7 inline-flex cursor-pointer items-center gap-2 border border-red-500/40 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-red-400 transition-all hover:bg-red-600 hover:text-white">Enter the archive <ArrowRight className="h-4 w-4" /></button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {aiCrimeCases.map((item) => (
            <button key={item.slug} onClick={() => onNavigate(`${AI_CRIME_BASE_PATH}/${item.slug}`)} className="group cursor-pointer border border-white/10 bg-white/[0.02] p-5 text-left transition-colors hover:border-red-500/40">
              <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-red-400">Case {item.caseNumber}</span>
              <strong className="mt-4 block font-serif text-lg font-light italic leading-tight text-white group-hover:text-red-400">{item.shortTitle}</strong>
              <span className="mt-6 flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-zinc-600"><BookOpen className="h-3 w-3" /> Read file</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AICrimeFiles({ currentPath, onNavigate }: AICrimeFilesProps) {
  const item = getAICrimeCase(currentPath);
  return item ? <CrimeArticle item={item} onNavigate={onNavigate} /> : <CrimeIndex onNavigate={onNavigate} />;
}
