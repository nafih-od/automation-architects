import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Business Workflow Analysis", desc: "Deep-dive into current operations, pain points, bottlenecks, and growth objectives." },
  { num: "02", title: "System Architecture Design", desc: "Blueprint the technical solution — data models, APIs, integrations, and deployment strategy." },
  { num: "03", title: "Data & Integration Mapping", desc: "Map every data touchpoint and integration to eliminate redundancy and ensure consistency." },
  { num: "04", title: "Backend Engineering", desc: "Build secure, scalable backend systems with proper authentication, error handling, and logging." },
  { num: "05", title: "AI Logic Implementation", desc: "Layer intelligent automation — decision engines, smart routing, predictive models, and rule engines." },
  { num: "06", title: "Testing & Validation", desc: "Rigorous testing, edge case handling, staged rollout, and stakeholder validation." },
  { num: "07", title: "Deployment & Monitoring", desc: "Production deployment with monitoring, alerting, and ongoing performance optimization." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-muted/20" />
      
      <div className="relative max-w-7xl mx-auto px-6">
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
              Process
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            How I Work
          </h2>
          <p className="text-muted-foreground max-w-xl text-base">
            A structured, repeatable engineering process that turns business requirements into production-grade systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-7 gap-px bg-border rounded-lg overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-card p-5 flex flex-col"
            >
              <span className="text-2xl font-bold text-primary/20 mb-3 font-mono-tech">{step.num}</span>
              <h3 className="text-sm font-semibold mb-2 leading-tight">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
