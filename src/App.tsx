import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactGA from "react-ga4";

import "./App.css";
import Navbar from "./components/Navbar";
import NoticeBar from "./components/NoticeBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Publications from "./components/Publications";
import News from "./components/News";
import Footer from "./components/Footer";
import Impact from "./components/Impact";
import NotFound from "./components/NotFound";
import { generateSchema } from "./data";
import type { PersonSchema } from "./lib/types";

function Home() {
  const [schemaData, setSchemaData] = useState<PersonSchema | null>(null);
  
  useEffect(() => {
    const schema = generateSchema(); // Generate the schema data dynamically
    setSchemaData(schema);
  }, []);

  return (
    <>
      {schemaData && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>
      )}
      <div className="App min-h-screen bg-white text-slate-900 antialiased">
        <NoticeBar />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Impact />
          <Publications />
          <News />
          <Footer />
        </main>
      </div>
    </>
  );
}

const VITE_GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

export default function App() {
  useEffect(() => {
    ReactGA.initialize(VITE_GA_TRACKING_ID);
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}