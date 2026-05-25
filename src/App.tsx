import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function Home() {
  return (
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}