import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import "./App.css";
import Publication from "./pages/Publication";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const VITE_GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

export default function App() {
  useEffect(() => {
    ReactGA.initialize(VITE_GA_TRACKING_ID);
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/publications/:publicationId" element={<Publication />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}