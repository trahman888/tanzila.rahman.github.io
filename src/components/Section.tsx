import { motion } from "framer-motion";
import type { PublicationSection } from "../lib/types";
import { RichText } from "./ui/RichText";

export default function Section({ section, visible }: { section: PublicationSection; visible: boolean }) {
  const { id, pill, title, blocks = [] } = section;

  return (
    <section id={id} className={`bg-pageBgAlt p-[20px_18px] rounded-lg border border-pageBorder ${visible ? 'block' : 'hidden'}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        {pill && <span className="inline-block px-2 py-0.5 rounded-full bg-pageAccentSoft text-pageAccent text-[0.75rem] uppercase tracking-[0.05em] mb-1">
          {pill}
        </span>}
        {title && <h2 className="mt-0 mb-2 text-xl">{title}</h2>}

        {blocks.map((block, idx) => {
          switch (block.type) {
            case "text":
              return (
                <p key={idx}>
                  <RichText>{block.text}</RichText>
                </p>
              );

            case "list":
              return (
                <ul key={idx}>
                  {(block.items || []).map((item, i) => (
                    <li key={i}><RichText>{item}</RichText></li>
                  ))}
                </ul>
              );

            case "hero-grid":
              return (
                <div key={idx} className="grid grid-cols-1 gap-[18px] items-center
          md:grid-cols-[1.1fr_1fr]">
                  <div>
                    {(block.left || []).map((txt, i) => (
                      <p key={i}><RichText>{txt}</RichText></p>
                    ))}
                  </div>
                  <div className="rounded-md border border-dashed border-pageBorder
          bg-[#f3f6ff] p-2.5 text-[0.85rem] text-pageMuted">
                    {block.rightPlaceholder ||
                      "Hero illustration placeholder"}
                  </div>
                </div>
              );

            case "gallery":
              return (
                <div key={idx} className="grid gap-[10px] mt-3
          grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
                  {(block.items || []).map((it, i) => (
                    <div key={i} className="rounded-md border border-dashed border-pageBorder
            bg-[#fafafa] p-2 text-[0.8rem] text-pageMuted">
                      <strong>{it.title}</strong>
                      <br />
                      <span><RichText>{it.description}</RichText></span>
                    </div>
                  ))}
                </div>
              );

            case "comparison":
              return (
                <div key={idx} className="grid gap-4 mt-3
          grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
                  {(block.columns || []).map((col, i) => (
                    <div key={i} className="p-[10px] rounded-md border border-pageBorder
            bg-[#fafafa] text-[0.9rem]">
                      <strong>{col.title}</strong>
                      <ul>
                        {(col.items || []).map((item, j) => (
                          <li key={j}><RichText>{item}</RichText></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );

            default:
              return null;
          }
        })}
      </motion.div>
    </section>
  );
}