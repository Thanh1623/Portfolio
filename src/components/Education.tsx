import { motion } from "motion/react";
import { EDUCATION } from "@/src/constants";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Education</h2>
          <p className="text-muted-foreground">
            My academic background and qualifications.
          </p>
        </div>

        <div className="space-y-12">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 border-l border-white/10"
            >
              <div className="absolute left-[-18px] top-0 w-9 h-9 bg-background border border-white/10 rounded-full flex items-center justify-center z-10">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary/70 font-medium">{edu.school}</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-muted-foreground">
                  {edu.period}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
