import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Publications from "./components/Publications";
import News from "./components/News";
import Footer from "./components/Footer";
import Impact from "./components/Impact";

function App() {
  return (
    <div className="App min-h-screen bg-white text-slate-900 antialiased">
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

export default App;