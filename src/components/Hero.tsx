import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HERO_CONTENT } from "@/src/constants";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = HERO_CONTENT.roles[roleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(100);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % HERO_CONTENT.roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative inline-block"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-tr from-primary/50 via-white/10 to-transparent animate-float">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-background glass">
                <img
                  src="./Image_CV.jpg"
                  alt="Avatar"
                  className="w-full h-full object-cover brightness-110 contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
          >
            Available for new opportunities
          </motion.span>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            {HERO_CONTENT.name}
          </h1>

          <h2 className="text-xl md:text-3xl font-medium text-muted-foreground mb-8 h-12">
            I'm a <span className="text-primary">{currentText}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 group"
              onClick={() => (location.href = "#projects")}
            >
              {HERO_CONTENT.ctaPrimary}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a href="/Nguyen-Duy-Thanh-CV.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 glass cursor-pointer"
              >
                <Download className="mr-2 w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
