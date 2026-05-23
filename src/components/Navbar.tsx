import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const SECTIONS: { id: string; label: string }[] = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200"
      data-testid="site-navbar"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("top")}
          className="text-sm font-semibold tracking-tight text-slate-900 hover:text-slate-700 transition-colors"
          data-testid="nav-home-link"
        >
          {profile.name}
          <span className="ml-2 text-slate-400 font-normal hidden sm:inline">
            · Research Scientist
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              data-testid={`nav-${s.id}-link`}
              className={`text-sm font-medium transition-colors ${
                active === s.id
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {s.label}
              {active === s.id && (
                <span className="block h-px bg-slate-900 mt-1" />
              )}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden p-2 -mr-2 rounded-md hover:bg-slate-100 text-slate-700"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h14" strokeLinecap="round" />
                <path d="M3 10h14" strokeLinecap="round" />
                <path d="M3 14h14" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white" data-testid="nav-mobile-menu">
          <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                data-testid={`nav-mobile-${s.id}-link`}
                className={`text-left py-3 text-sm font-medium border-b border-slate-100 last:border-0 ${
                  active === s.id ? "text-slate-900" : "text-slate-600"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}