import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/src/components/Navbar";
import ScrollToTop from "@/src/components/ScrollToTop";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Education from "@/src/components/Education";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import AllProjects from "./pages/AllProjects";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen selection:bg-primary selection:text-primary-foreground">
          <div className="atmosphere opacity-50 dark:opacity-100" />
          
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-projects" element={<AllProjects />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
