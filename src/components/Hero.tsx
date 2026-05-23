import { motion, type MotionNodeAnimationOptions } from "framer-motion";
import { Mail, Linkedin, GraduationCap, FileText, ArrowDown } from "lucide-react";
import { profile } from "../data/profile";

const fade = (delay = 0): MotionNodeAnimationOptions => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const scrollToResearch = () => {
    const el = document.getElementById("research");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="pt-16 pb-20 sm:pt-24 sm:pb-28" data-testid="hero-section">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-10 md:gap-16 items-center md:items-end">
          {/* Title block */}
          <motion.div {...fade(0.05)} className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              <span className="inline-block h-px w-8 bg-slate-300" />
              {profile.title}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]"
              data-testid="hero-name"
            >
              {profile.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {profile.title} at{" "}
              <span className="text-slate-900 font-medium">
                {profile.institution}
              </span>
              . Researching computer vision, generative AI, and multimodal
              learning across vision, text, and audio.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.links.googleScholar}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-scholar-link"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                <GraduationCap size={16} />
                Google Scholar
              </a>
              <a
                href={`mailto:${profile.emails[0]}`}
                data-testid="hero-email-link"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-linkedin-link"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              {profile.links.cv && (
                <a
                  href={profile.links.cv}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="hero-cv-link"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <FileText size={16} />
                  Resume
                </a>
              )}
            </div>

            <button
              onClick={scrollToResearch}
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors w-fit group"
              data-testid="hero-scroll-cta"
            >
              View research
              <ArrowDown
                size={14}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </button>
          </motion.div>

          {/* Avatar */}
          <motion.div {...fade(0.15)} className="w-full flex md:justify-end">
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProfileImage() {
  if (profile.photo) {
    return (
      <div
        className="relative aspect-square w-44 sm:w-56 md:w-full md:max-w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
        data-testid="hero-photo"
      >
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }
  // Tasteful initials placeholder until a real photo is added.
  return (
    <div
      className="relative aspect-square w-44 sm:w-56 md:w-full md:max-w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center"
      data-testid="hero-photo-placeholder"
    >
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)",
        backgroundSize: "14px 14px",
      }} />
      <span className="relative text-6xl md:text-7xl font-bold tracking-tight text-slate-900">
        {profile.initials}
      </span>
      <span className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-[0.18em] text-slate-400 text-center">
        Photo coming soon
      </span>
    </div>
  );
}