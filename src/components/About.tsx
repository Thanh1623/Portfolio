import { motion } from "motion/react";
import { ABOUT_CONTENT } from "@/src/constants";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              {ABOUT_CONTENT.text}
            </p>

            <div className="grid grid-cols-3 gap-8">
              {ABOUT_CONTENT.stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl -rotate-6" />
            <div className="absolute inset-0 glass rounded-3xl rotate-3 flex items-center justify-center overflow-hidden">
               <img 
                src="https://picsum.photos/seed/alex/600/600" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
