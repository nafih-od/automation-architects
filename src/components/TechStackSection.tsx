import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "REST APIs", "Webhooks"],
  },
  {
    label: "Database",
    items: ["MySQL"],
  },
  {
    label: "Integrations",
    items: ["Shopify API", "Meta WhatsApp Cloud API", "Payment Gateways"],
  },
  {
    label: "Infrastructure",
    items: ["Linux VPS", "Cloud Deployment", "Server Security", "Performance Tuning"],
  },
];

const TechStackSection = () => {
  return (
    <section id="stack" className="py-24 md:py-32">
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
            <span className="text-sm font-mono-tech text-primary tracking-wider uppercase">
              Tech Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engineering Toolkit
          </h2>
          <p className="text-muted-foreground max-w-xl">
            System engineering expertise across the full stack — from frontend interfaces to production infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-elevated border border-border rounded-lg p-5"
            >
              <h3 className="text-xs font-mono-tech text-primary tracking-wider uppercase mb-4">
                {cat.label}
              </h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-secondary-foreground flex items-center gap-2">
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
