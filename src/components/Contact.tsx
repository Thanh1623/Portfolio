import { useState } from "react";
import { motion } from "motion/react";
import { SOCIAL_LINKS } from "@/src/constants";
import { Github, Mail, Check } from "lucide-react";

const iconMap: Record<string, any> = {
  Github,
  Mail,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Have a project in mind or just want to chat? Feel free to reach out through my social channels.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon];
              
              if (link.name === "Email") {
                return (
                  <button
                    key={link.name}
                    onClick={() => copyToClipboard(link.url.replace("mailto:", ""))}
                    className="p-4 glass rounded-2xl hover:bg-white/10 transition-all duration-300 group flex items-center gap-2"
                    aria-label={link.name}
                  >
                    {copied ? <Check className="w-6 h-6 text-green-500" /> : <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />}
                    <span className="text-sm font-medium">{copied ? "Copied!" : link.url.replace("mailto:", "")}</span>
                  </button>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="p-4 glass rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
