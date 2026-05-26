import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, BookOpen, Youtube } from "lucide-react";
import { publications, publicationCategories } from "../data/publications";
import { profile } from "../data/profile";
import { authorsLinks } from "../data/authors";
import type { Publication } from "../lib/types";
import { clearRich, makeBoldText, makeLinkText } from "../lib/richTextUtils";
import { RichText } from "./ui/RichText";

const heroName = profile.name;

function setHeroName(str: string) {
  const re = new RegExp(`(${heroName})`, "gi");
  return str.replace(re, makeBoldText("$1"));
}

function setAuthorLinks(str: string) {
  const parts = [];
  let lastIndex = 0;
  const LINK_RE = new RegExp(
    `(${Object.keys(authorsLinks).join("|")})`,
    "gi"
  );
  let match;
  while ((match = LINK_RE.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.slice(lastIndex, match.index));
    }
    const [name] = match;
    const url = authorsLinks[name];
    if (url) {
      parts.push(makeLinkText(name, url));
    } else {
      parts.push(name);
    }

    lastIndex = match.index + name.length;
  }
  if (lastIndex < str.length) {
    parts.push(str.slice(lastIndex));
  }
  return parts.join("");
}

// make bold heroname in authors string, if present
function formatAuthors(authors: string) {
  return setHeroName(setAuthorLinks(authors));
}

export default function Publications() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return publications;
    return publications.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section
      id="research"
      className="py-20 sm:py-28 border-t border-slate-100 bg-slate-50/40"
      data-testid="publications-section"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            <span className="text-slate-400">02</span>
            <span className="inline-block h-px w-8 bg-slate-300" />
            Research
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Selected publications
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Peer-reviewed work in computer vision, multimodal learning, and
            generative AI. Filter by topic, or view{" "}
            <a
              href="https://scholar.google.com/citations?user=7GKKBLkAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-colors"
              data-testid="pubs-scholar-link"
            >
              the full list on Google Scholar
            </a>
            .
          </p>
        </motion.div>

        {/* Filters */}
        <div
          className="mt-10 flex flex-wrap gap-2"
          data-testid="publication-filters"
        >
          {publicationCategories.map((cat) => {
            const isActive = cat === filter;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium border cursor-pointer transition-colors ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* List */}
        <div className="mt-10 flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, idx) => (
              <motion.article
                layout
                key={`${pub.title}-${pub.year}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="publication-card group relative flex flex-col sm:flex-row gap-5 sm:gap-6 border border-slate-200 bg-white rounded-xl p-5 sm:p-6 hover:border-slate-300 hover:-translate-y-[1px] transition-all duration-200"
                data-testid={`publication-card-${idx}`}
              >
                <PublicationThumb pub={pub} idx={idx} />

                <div className="flex-1 flex flex-col gap-2 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="popup inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-900 text-white tracking-wide"
                      data-testid={`pub-venue-${idx}`}
                      data-title={pub.venue}
                    >
                      {pub.venueShort}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {pub.year}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60">
                      {pub.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug tracking-tight">
                    <RichText>{pub.title}</RichText>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <RichText>{formatAuthors(pub.authors)}</RichText>
                  </p>

                  {Object.keys(pub.links || {}).length > 0 && (
                    <div className="pub-links flex flex-wrap items-center gap-2 mt-2">
                      {Object.entries(pub.links).map(([label, url]) => (
                        <a
                          key={label}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          data-testid={`pub-link-${idx}-${label.toLowerCase()}`}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-md px-2.5 py-1 transition-colors"
                        >
                          {label === "PDF" ? (
                            <FileText size={12} />
                          ) : label === "arXiv" ? (
                            <BookOpen size={12} />
                          ) : label === "Video" ? (
                            <Youtube size={12} />
                          ) : (
                            <ExternalLink size={12} />
                          )}
                          {label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-sm text-slate-500" data-testid="no-pubs-msg">
              No publications match this filter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------- Thumbnail -------- */

// A stable hue per publication (based on title hash) for subtle variety
// without ever drifting from the slate palette.
function hashHue(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function PublicationThumb({ pub, idx }: { pub: Publication; idx: number }) {
  // If a real image is provided, render it.
  if (pub.image) {
    return (
      <div
        className="pub-thumb relative w-full sm:w-28 sm:h-28 md:w-32 md:h-32 aspect-[16/9] sm:aspect-square flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100"
        data-testid={`pub-thumb-${idx}`}
      >
        <img
          src={pub.image}
          alt={clearRich(pub.title)}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    );
  }

  // Otherwise, render a tasteful placeholder. Uses the venue acronym
  // (e.g. CVPR, NeurIPS, ICCV) and a subtle deterministic accent.
  const acronym = (pub.venue || "PUB")
    .replace(/preprint/i, "arXiv")
    .replace(/workshop/i, "Wkshp")
    .trim();

  const palettes = [
    { from: "#0F172A", to: "#1E293B" }, // slate
    { from: "#111827", to: "#1F2937" }, // gray
    { from: "#1E293B", to: "#334155" }, // slate light
    { from: "#0B1220", to: "#1E293B" }, // deep slate
  ];
  const p = palettes[hashHue(pub.title + pub.year) % palettes.length];

  return (
    <div
      className="pub-thumb relative w-full sm:w-28 sm:h-28 md:w-32 md:h-32 aspect-[16/9] sm:aspect-square flex-shrink-0 overflow-hidden rounded-lg border border-slate-200"
      style={{
        backgroundImage: `linear-gradient(135deg, ${p.from} 0%, ${p.to} 100%)`,
      }}
      data-testid={`pub-thumb-placeholder-${idx}`}
      aria-hidden="true"
    >
      {/* dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "10px 10px",
        }}
      />
      {/* corner gloss */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 60%)" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
        <span className="text-white font-bold tracking-tight text-base sm:text-[15px] md:text-base leading-none">
          {acronym}
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-300 font-medium">
          {pub.year}
        </span>
      </div>

      {/* bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
    </div>
  );
}