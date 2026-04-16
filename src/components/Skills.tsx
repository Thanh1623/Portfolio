import { motion } from "motion/react";
import { SKILLS } from "@/src/constants";
import { Badge } from "@/src/components/ui/badge";
import {
  Atom,
  Rocket,
  FileJson,
  FileCode,
  Globe,
  Palette,
  Wind,
  Server,
  GitBranch,
  Layers,
  Box,
  Cpu,
  Layout,
  Feather,
  Database,
  Send,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Atom,
  Rocket,
  FileJson,
  FileCode,
  Globe,
  Layers,
  Box,
  Cpu,
  Wind,
  Layout,
  Palette,
  Feather,
  Server,
  Database,
  GitBranch,
  Send,
};

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-muted/20 dark:bg-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to
            bring digital visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-primary/70">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.filter((s) => s.category === category).map((skill) => {
                  const Icon = iconMap[skill.icon || "Code2"];
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <Icon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform text-primary/80" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
