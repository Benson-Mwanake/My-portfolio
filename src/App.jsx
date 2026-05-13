import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-background">
      <CustomCursor />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* Add About, Skills, Contact here following the same pattern */}
      <footer className="p-12 text-center border-t border-border opacity-30 text-sm">
        &copy; 2026 BENSON MWANAKE. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}

export default App;
