import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-t border-slate-100"
      data-testid="about-section"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel index="01" label="About" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mt-3">
            Researcher across vision, language and audio.
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-base text-slate-600 leading-relaxed"
            data-testid="about-bio"
          >
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="pt-4 flex flex-wrap gap-2">
              {profile.researchInterests.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200/60"
                  data-testid={`about-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            data-testid="about-affiliations"
          >
            <h3 className="text-xs uppercase tracking-[0.18em] font-medium text-slate-500 mb-5">
              Affiliations
            </h3>
            <ol className="space-y-5 text-sm">
              {profile.affiliations.map((a, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1.5">
                    <span
                      className={`block w-1.5 h-1.5 rounded-full ${
                        a.current ? "bg-slate-900" : "bg-slate-300"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 font-medium leading-snug">
                      {a.role}
                    </p>
                    <p className="text-slate-500 text-[13px] mt-0.5">{a.org}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
      <span className="text-slate-400">{index}</span>
      <span className="inline-block h-px w-8 bg-slate-300" />
      {label}
    </div>
  );
}