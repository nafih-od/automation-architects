import { motion } from "framer-motion";
import { Cog, Code2, Database, ShoppingBag, MessageSquare, Server, Plug } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Automation Systems Engineering",
    problem: "Manual processes create bottlenecks that prevent scaling.",
    solution: "Workflow automation, AI-powered logic systems, business rule engines, and process optimization designed to eliminate repetitive operations.",
    outcome: "Reduced manual effort, improved scalability.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    problem: "Off-the-shelf software can't handle unique business logic.",
    solution: "Full-stack platforms on React / Node.js with secure authentication, admin dashboards, role-based access, and MySQL database architecture.",
    outcome: "Business platforms, not brochure sites.",
  },
  {
    icon: Database,
    title: "ERP & CRM Systems",
    problem: "Scattered data across tools causes lost revenue and operational errors.",
    solution: "Inventory management, order processing, GST & tax logic, lead tracking, and multi-user control — unified into one system.",
    outcome: "Centralized operational control.",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce & API Integrations",
    problem: "Standard setups can't handle complex commerce logic.",
    solution: "Shopify customization, payment integrations, webhooks & sync systems, real-time stock automation, and backend extensions.",
    outcome: "Connected, automated commerce ecosystem.",
  },
  {
    icon: MessageSquare,
    title: "Messaging & Communication Automation",
    problem: "Customer inquiries pile up while support teams fall behind.",
    solution: "Meta WhatsApp Cloud API, AI-powered replies, order updates, CRM synchronization, and lead qualification automation.",
    outcome: "Reduced support workload, faster response time.",
  },
  {
    icon: Server,
    title: "Infrastructure & Backend Architecture",
    problem: "Unreliable hosting and poor architecture block growth.",
    solution: "Linux VPS setup, API design, event-driven systems, performance optimization, and secure deployment pipelines.",
    outcome: "Stable, scalable backend foundation.",
  },
  {
    icon: Plug,
    title: "MCP Integrations & AI Tooling",
    problem: "AI agents lack real-time context from business tools and data sources.",
    solution: "Model Context Protocol integrations connecting AI agents to Notion, Linear, Jira, Slack, databases, and custom APIs — enabling context-aware automation workflows.",
    outcome: "AI systems that act on real business data, not prompts.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 md:py-36 relative">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
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
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Systems I Engineer
          </h2>
          <p className="text-muted-foreground max-w-xl text-base">
            Every engagement follows the same framework: understand the business problem, architect the technical solution, deliver measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-card p-8 hover:bg-muted/30 transition-colors duration-500 relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                background: "radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(170 75% 42% / 0.04), transparent 60%)"
              }} />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <service.icon className="text-primary" size={18} />
                  </div>
                  <h3 className="text-base font-semibold">{service.title}</h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-muted-foreground font-mono-tech text-[10px] uppercase tracking-widest">Problem</span>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{service.problem}</p>
                  </div>
                  <div>
                    <span className="text-primary font-mono-tech text-[10px] uppercase tracking-widest">Solution</span>
                    <p className="text-secondary-foreground mt-1 leading-relaxed">{service.solution}</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-primary font-medium text-xs tracking-wide">{service.outcome}</p>
                  </div>
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
