import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Education from "@/src/components/Education";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative min-h-screen selection:bg-primary selection:text-primary-foreground">
        {/* Background Atmosphere */}
        <div className="atmosphere opacity-50 dark:opacity-100" />
        
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
