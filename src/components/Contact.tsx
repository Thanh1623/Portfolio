import { motion } from "motion/react";
import { SOCIAL_LINKS } from "@/src/constants";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Have a project in mind or just want to chat? Feel free to reach out through the form or via my social channels.
            </p>

            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className="p-4 glass rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input placeholder="John Doe" className="bg-white/5 border-white/10 rounded-xl py-6" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 rounded-xl py-6" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-white/5 border-white/10 rounded-xl py-6" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="Tell me about your project..." className="bg-white/5 border-white/10 rounded-xl min-h-[150px]" />
              </div>
              <Button className="w-full py-6 rounded-xl text-sm font-bold uppercase tracking-widest group">
                Send Message
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
