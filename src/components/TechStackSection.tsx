import { motion } from "framer-motion";

const categories = [
  { label: "Frontend", capability: "User-facing platforms and interfaces", items: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend", capability: "Server logic, APIs, and data processing", items: ["Node.js", "Python", "REST APIs", "Webhooks"] },
  { label: "Database", capability: "Data architecture and optimization", items: ["MySQL", "Schema Design", "Query Optimization"] },
  { label: "Integrations", capability: "Third-party system connectivity", items: ["Shopify API", "Meta WhatsApp Cloud API", "Payment Gateways", "Custom Webhooks"] },
  { label: "AI & MCP", capability: "AI agents and context protocol", items: ["MCP Integrations", "AI Logic Systems", "Agent Tooling", "Context Pipelines"] },
  { label: "Infrastructure", capability: "Production deployment and reliability", items: ["Linux VPS", "Server Security", "Performance Monitoring", "CI/CD Pipelines"] },
];

const TechStackSection = () => {
  return (
    <section id="stack" className="py-28 md:py-36 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-16 bg-primary" />
            <span className="text-sm font-mono-tech text-primary tracking-widest uppercase">
              Tech Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-foreground">Engineering Toolkit</h2>
          <p className="text-muted-foreground max-w-xl text-base">
            Not a tool list — system engineering capabilities across the full stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-xs font-mono-tech text-primary tracking-widest uppercase mb-1">{cat.label}</h3>
              <p className="text-[11px] text-muted-foreground mb-5">{cat.capability}</p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80 flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
