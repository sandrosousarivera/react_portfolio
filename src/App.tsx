import "./App.css";
import Navbar from "./components/molecules/navbar";
import { LanguageProvider } from "./contexts/LanguageContext";
import Hero from "./components/molecules/hero";
import About from "./components/molecules/about";
import Projects from "./components/molecules/projects";
import Skills from "./components/molecules/skills";
import Contact from "./components/molecules/contact";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
