import { motion } from "motion/react";
import { ABOUT_CONTENT } from "@/src/constants";
import {
  Users,
  Briefcase,
  GraduationCap,
  Trophy,
  Sparkles,
  Code2,
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const icons = [Briefcase, Trophy, Users];

  return (
    <section
      id="about"
      className="py-32 px-6 relative overflow-hidden bg-background"
    >
      {/* Decorative Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>Behind the Code</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40 italic">
              Passion Meets Purpose
            </h2>
          </motion.div>

          {/* Main Content & Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Extended Bio Card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-8 p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent group"
            >
              <div className="h-full glass-dark p-8 md:p-12 rounded-[inherit] flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-primary" />
                  My Narrative
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                  "{ABOUT_CONTENT.text}"
                </p>
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
                    Frontend Specialist
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats Column */}
            <div className="md:col-span-4 grid grid-cols-1 gap-6">
              {ABOUT_CONTENT.stats.map((stat, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="p-1 rounded-3xl bg-gradient-to-tr from-white/5 to-transparent hover:scale-[1.02] transition-transform duration-500"
                  >
                    <div className="glass p-6 rounded-[inherit] flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-black">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Philosophy / Bottom Row Overlay */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-8 glass-dark rounded-3xl border border-white/5 flex flex-col md:flex-row gap-6 items-start">
              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <Sparkles className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">
                  Design Philosophy
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I believe that true beauty in software lies at the
                  intersection of robust engineering and human-centric design.
                  Every pixel serves a conversation with the user.
                </p>
              </div>
            </div>

            <div className="p-8 glass-dark rounded-3xl border border-white/5 flex flex-col md:flex-row gap-6 items-start">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">
                  Lifelong Learning
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The web evolves every day, and so do I. From optimizing TTI to
                  exploring Web3, my curiosity is the engine that keeps my
                  technical arsenal sharpened.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
