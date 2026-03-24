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
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left side - Heading & description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono-tech text-primary tracking-wider uppercase">Global Reach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-foreground leading-tight">
              Built for
              <span className="text-primary"> International</span> Teams
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Professional workflows and clear communication — delivering quality results regardless of geography.
            </p>

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card/80">
              <MapPin size={14} className="text-primary" />
              <span className="text-xs font-medium text-foreground">Based in India</span>
              <span className="text-xs text-muted-foreground">· Serving clients worldwide</span>
            </div>
          </motion.div>

          {/* Right side - Feature cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <f.icon className="text-primary" size={18} />
                </div>
                <h3 className="text-sm font-semibold mb-2 text-foreground">{f.title}</h3>
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
