import { motion } from "framer-motion";
import { Github, Linkedin, Globe, MessageCircle } from "lucide-react";

const platforms = [
  { icon: Github, label: "GitHub", href: "https://github.com/nafih-od", desc: "Open-source contributions & projects" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nafih-rahman-a68061352", desc: "Professional network & insights" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/917594867061", desc: "Direct business inquiries" },
  { icon: Globe, label: "Portfolio", href: "https://nafihrahman.com", desc: "AI engineering case studies" },
];

const BacklinksSection = () => {
  return (
    <section className="py-16 bg-secondary/30" aria-label="Find me online">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Find Me on GitHub, LinkedIn & AI Platforms
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Connect with me across developer and professional platforms for AI engineering insights, collaboration, and project inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {platforms.map((p, i) => (
            <motion.a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center gap-2 p-5 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <p.icon size={22} className="text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-foreground">{p.label}</span>
              <span className="text-[11px] text-muted-foreground text-center">{p.desc}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BacklinksSection;
