import { motion } from "framer-motion";
import { Code2, Brain, Database, ShoppingBag, MessageSquare, Server } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Application Development",
    problem: "Off-the-shelf software can't handle your specific business logic.",
    solution: "Full-stack platforms built on React, Node.js, and MySQL with secure auth, admin dashboards, and custom workflows.",
    outcome: "Business platforms, not brochure websites.",
  },
  {
    icon: Brain,
    title: "AI & Workflow Automation Systems",
    problem: "Manual decisions slow down operations and create bottlenecks.",
    solution: "AI-powered decision logic, automated response systems, smart recommendations, and business rule engines.",
    outcome: "Logic-driven automation that scales with your operations.",
  },
  {
    icon: Database,
    title: "ERP & CRM Systems",
    problem: "Scattered data across tools leads to lost revenue and errors.",
    solution: "Inventory tracking, GST logic, order management, lead scoring, and multi-user access control — all unified.",
    outcome: "Single source of truth for your entire business.",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce & Shopify Systems",
    problem: "Standard Shopify setups can't handle complex product or pricing logic.",
    solution: "Custom Shopify development, API extensions, ERP sync, payment integration, and performance optimization.",
    outcome: "eCommerce infrastructure that handles complexity at scale.",
  },
  {
    icon: MessageSquare,
    title: "Messaging & WhatsApp Automation",
    problem: "Customer inquiries pile up and support teams can't keep pace.",
    solution: "Meta Cloud API integration, order status automation, CRM sync, AI-powered conversation flows.",
    outcome: "Automated customer engagement that converts and retains.",
  },
  {
    icon: Server,
    title: "Infrastructure & Backend Engineering",
    problem: "Unreliable hosting and poor architecture limit growth.",
    solution: "Linux VPS deployment, database optimization, secure API architecture, webhooks, and monitoring.",
    outcome: "Production-grade infrastructure built for uptime and scale.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
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
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Systems I Build
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Every engagement follows the same framework: understand the business problem, design the technical solution, deliver measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group card-elevated border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <service.icon className="text-primary mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-4">{service.title}</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground font-mono-tech text-xs uppercase tracking-wider">Problem</span>
                  <p className="text-muted-foreground mt-1">{service.problem}</p>
                </div>
                <div>
                  <span className="text-primary font-mono-tech text-xs uppercase tracking-wider">Solution</span>
                  <p className="text-secondary-foreground mt-1">{service.solution}</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-foreground font-medium text-xs">{service.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
