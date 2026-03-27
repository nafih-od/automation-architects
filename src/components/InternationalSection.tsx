import { motion } from "framer-motion";
import { Globe, Clock, FileText, GitBranch, MapPin } from "lucide-react";

const features = [
  { icon: Globe, title: "Remote-First Collaboration", desc: "Structured workflows designed for async and real-time collaboration across timezones." },
  { icon: Clock, title: "Flexible Timezone Overlap", desc: "Availability windows adapted to your business hours with consistent communication schedules." },
  { icon: FileText, title: "Structured Documentation", desc: "Every project includes technical documentation, architecture diagrams, and handoff guides." },
  { icon: GitBranch, title: "Version Control Workflows", desc: "Git-based development with proper branching, code reviews, and deployment pipelines." },
];

const InternationalSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-primary to-primary/40" />
              <span className="text-xs font-mono-tech text-primary tracking-[0.2em] uppercase font-medium">Global Reach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-foreground leading-tight">
              Built for
              <span className="text-primary"> International</span> Teams
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Professional workflows and clear communication — delivering quality results regardless of geography.
            </p>

            <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-card shadow-sm">
              <MapPin size={14} className="text-primary" />
              <span className="text-xs font-semibold text-foreground">Based in India</span>
              <span className="text-xs text-muted-foreground">· Serving clients worldwide</span>
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="premium-card p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={18} />
                </div>
                <h3 className="text-sm font-bold mb-2 text-foreground">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
