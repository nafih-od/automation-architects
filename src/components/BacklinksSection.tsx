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
    <section className="py-16 bg-background relative" aria-label="Find me online">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
            Find Me on GitHub, LinkedIn & AI Platforms
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
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
              className="premium-card flex flex-col items-center gap-2.5 p-6 group"
            >
              <p.icon size={22} className="text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-bold text-foreground">{p.label}</span>
              <span className="text-[11px] text-muted-foreground text-center">{p.desc}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BacklinksSection;
