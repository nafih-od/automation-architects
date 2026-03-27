import { motion } from "framer-motion";
import { Cog, Code2, Database, ShoppingBag, MessageSquare, Server, Plug, BarChart3 } from "lucide-react";

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
  {
    icon: Code2,
    title: "Website Development",
    problem: "Businesses need professional online presence — static or dynamic.",
    solution: "Static marketing sites, dynamic web applications, and Shopify store development with responsive design, SEO optimization, and performance-first architecture.",
    outcome: "Fast, modern websites that convert visitors.",
  },
  {
    icon: BarChart3,
    title: "Project Scoping & Strategy",
    problem: "Unclear requirements lead to wasted budgets and failed projects.",
    solution: "Technical discovery sessions, architecture planning, feasibility analysis, and detailed project roadmaps — before a single line of code is written.",
    outcome: "Clear direction, realistic timelines, confident execution.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 md:py-36 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-background" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-primary to-primary/40" />
            <span className="text-xs font-mono-tech text-primary tracking-[0.2em] uppercase font-medium">
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-foreground">
            Systems I Engineer
          </h2>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            Every engagement follows the same framework: understand the business problem, architect the technical solution, deliver measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="premium-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center">
                  <service.icon className="text-primary" size={18} />
                </div>
                <h3 className="text-[15px] font-bold text-foreground">{service.title}</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-muted-foreground font-mono-tech text-[10px] uppercase tracking-[0.15em]">Problem</span>
                  <p className="text-muted-foreground mt-1.5 leading-relaxed">{service.problem}</p>
                </div>
                <div>
                  <span className="text-primary font-mono-tech text-[10px] uppercase tracking-[0.15em]">Solution</span>
                  <p className="text-foreground/80 mt-1.5 leading-relaxed">{service.solution}</p>
                </div>
                <div className="pt-4 border-t border-border/60">
                  <p className="text-primary font-semibold text-xs tracking-wide">{service.outcome}</p>
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
