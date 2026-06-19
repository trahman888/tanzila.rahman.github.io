import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NoticeBar from "../components/NoticeBar";
import Section from "../components/Section";
import Publications from "../components/Publications";
import type { Publication } from "../lib/types";
import { getPublicationContent } from "../lib/utils";

export default function Publication() {
  const { publicationId } = useParams();
  const publication = publicationId ? getPublicationContent(publicationId) : null;
  const { seo, header, sections, footer } = publication?.pageContent || {};
  const [activeSectionId, setActiveSectionId] = useState<string>(sections?.[0]?.id || "");
  const title = `${(seo?.title || publication?.title || "Publication")} · ${publication?.venue || 'Venue'} (${publication?.year || 'Year'})`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="App min-h-screen bg-white text-slate-900 antialiased">
      <NoticeBar />
      <Navbar page="publication" />
      <main>
        {publication?.pageContent ? (
          <>
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={seo?.description || "Publication details"} />
              {seo?.title && <meta property="og:title" content={seo.title} />}
              {seo?.description && (
                <meta property="og:description" content={seo.description} />
              )}
              <meta property="og:type" content="website" />
            </Helmet>
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
              <header className="flex flex-col gap-4 mb-8 pb-6 border-b border-pageBorder
         md:flex-row md:items-center md:justify-between">
                <div className="title-block">
                  <h1 className="text-3xl font-bold mb-4">{header?.title}</h1>
                  {header?.tagline && (
                    <p className="m-0 text-pageMuted">{header.tagline}</p>
                  )}
                  <p className="text-lg text-slate-600 mb-6">{publication?.venue} ({publication?.year})</p>
                </div>
                <div className="text-left text-[0.9rem]">
                  {header?.paper && (
                    <p className="m-0">
                      <strong>Paper:</strong>{" "}
                      <em>{header.paper}</em>
                    </p>
                  )}
                  {publication.authors && (
                    <p className="m-0">
                      <strong>Authors:</strong> {publication.authors}
                    </p>
                  )}
                  {publication.links && (
                    <p className="m-0">
                      <strong>Link:</strong>{" "}
                      {publication.links.arXiv && (
                        <a
                          href={publication.links.arXiv}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {publication.links.arXiv}
                        </a>
                      )}
                      {publication.links.PDF && (
                        <a
                          href={publication.links.PDF}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {publication.links.PDF}
                        </a>
                      )}
                      {publication.links.Video && (
                        <a
                          href={publication.links.Video}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {publication.links.Video}
                        </a>
                      )}
                    </p>
                  )}
                </div>
              </header>

              {/* Nav → sets activeSectionId, no href / scroll */}
              <nav className="my-4 mb-8 py-2 border-b border-pageBorder sticky top-0 bg-pageBg z-10">
                <div className="flex flex-wrap gap-3 text-[0.9rem]">
                  {sections?.map((section) => {
                    const isActive = section.id === activeSectionId;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => setActiveSectionId(section.id)}
                        className={[
                          "px-2 py-1 rounded-full border text-sm transition-colors",
                          isActive
                            ? "bg-pageAccentSoft border-pageAccent text-pageAccent"
                            : "bg-transparent border-transparent text-pageText hover:bg-pageAccentSoft hover:border-pageAccent",
                        ].join(" ")}
                      >
                        {section.navLabel || section.title}
                      </button>
                    );
                  })}
                </div>
              </nav>

              <main className="flex flex-col gap-8">
                {(sections || []).map((section) => (
                  <Section key={section.id} section={section} visible={section.id === activeSectionId} />
                ))}
              </main>

              <footer className="mt-8 text-[0.8rem] text-pageMuted text-center">
                {footer?.text}
              </footer>
            </div>
          </>
        ) : publicationId ? (
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
            <h1 className="text-3xl font-bold mb-4">Publication not found</h1>
            <p className="text-gray-700">The requested publication could not be found.</p>
          </div>
        ) : (
          <Publications />
        )}
        <Footer />
      </main>
    </div>
  );
}