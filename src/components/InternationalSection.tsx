import { motion } from "framer-motion";
import { Globe, Clock, FileText, GitBranch } from "lucide-react";

const features = [
  { icon: Globe, title: "Remote-First Collaboration", desc: "Structured workflows designed for async and real-time collaboration across timezones." },
  { icon: Clock, title: "Flexible Timezone Overlap", desc: "Availability windows adapted to your business hours with consistent communication schedules." },
  { icon: FileText, title: "Structured Documentation", desc: "Every project includes technical documentation, architecture diagrams, and handoff guides." },
  { icon: GitBranch, title: "Version Control Workflows", desc: "Git-based development with proper branching, code reviews, and deployment pipelines." },
];

const InternationalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-mono-tech text-primary tracking-wider uppercase">Global</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Available for International Projects
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Clear communication, structured documentation, and professional workflows — regardless of location.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-5 hover:shadow-sm transition-shadow"
            >
              <f.icon className="text-primary mb-3" size={20} />
              <h3 className="text-sm font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
