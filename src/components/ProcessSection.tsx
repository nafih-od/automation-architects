import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Business Workflow Analysis", desc: "Deep-dive into current operations, pain points, and growth objectives." },
  { num: "02", title: "System Architecture Design", desc: "Blueprint the technical solution with data models, APIs, and integration points." },
  { num: "03", title: "Data Flow Mapping", desc: "Map every data touchpoint to eliminate redundancy and ensure consistency." },
  { num: "04", title: "Backend & API Engineering", desc: "Build secure, scalable backend systems with proper authentication and error handling." },
  { num: "05", title: "AI Logic Integration", desc: "Layer intelligent automation — decision engines, smart routing, and predictive models." },
  { num: "06", title: "Testing & Deployment", desc: "Rigorous testing, staged rollout, and production deployment on reliable infrastructure." },
  { num: "07", title: "Ongoing Optimization", desc: "Monitor, iterate, and optimize based on real usage data and business feedback." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/30">
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
              Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How I Work
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A structured, repeatable process that turns business requirements into production-grade systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative flex gap-6 items-start"
              >
                <div className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border text-primary font-mono-tech text-xs font-semibold shrink-0">
                  {step.num}
                </div>
                <div className="pt-1.5 md:pt-2.5">
                  <h3 className="text-base font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
