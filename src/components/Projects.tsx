import { motion } from "motion/react";
import { PROJECTS } from "@/src/constants";
import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured Work</h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of my recent projects, demonstrating my expertise in building complex, user-centric applications.
            </p>
          </div>
          <a href="#" className="text-sm font-semibold uppercase tracking-widest hover:text-primary transition-colors">
            View all projects →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-dark border-white/5 overflow-hidden group h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.liveUrl} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.githubUrl} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <Badge key={t} variant="secondary" className="bg-white/5 text-[10px] uppercase tracking-wider">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                   <a href={project.liveUrl} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
