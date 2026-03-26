import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "multi-store-inventory-platform",
    title: "Multi-Store Inventory & Order Platform",
    problem: "A retail chain with 5+ stores struggled with fragmented inventory data, manual stock counts, and order mismatches across locations.",
    solution: "Built a centralized ERP platform with real-time inventory sync, automated reorder alerts, and role-based dashboards for 50+ users.",
    stack: ["React", "Node.js", "MySQL", "REST APIs", "Linux VPS"],
    architecture: "Microservice-based backend with event-driven inventory sync, WebSocket real-time updates, and automated reporting pipelines.",
    results: ["90% reduction in stock discrepancies", "50+ active users across stores", "Real-time cross-store visibility"],
  },
  {
    slug: "ai-customer-support-automation",
    title: "AI-Powered Customer Support Automation",
    problem: "Support team overwhelmed with repetitive inquiries, slow response times, and no intelligent routing for complex issues.",
    solution: "Designed an AI agent system with NLP-based intent classification, automated responses, and smart escalation workflows.",
    stack: ["Python", "AI/ML Models", "Webhooks", "REST APIs", "Node.js"],
    architecture: "Pipeline architecture with intent classification → response generation → escalation decision engine → human handoff.",
    results: ["70% of queries auto-resolved", "3x faster response time", "Seamless agent handoff for complex cases"],
  },
  {
    slug: "shopify-multi-channel-integration",
    title: "Shopify Multi-Channel Integration",
    problem: "E-commerce business running multiple Shopify stores with disconnected inventory and no unified order management.",
    solution: "Engineered a custom integration layer syncing inventory, orders, and fulfillment across multiple Shopify stores and sales channels.",
    stack: ["Shopify API", "Node.js", "Webhooks", "MySQL", "Custom Middleware"],
    architecture: "Centralized middleware orchestrating bi-directional sync between Shopify stores with conflict resolution and audit logging.",
    results: ["Zero inventory conflicts across channels", "Unified order dashboard", "Automated fulfillment routing"],
  },
  {
    slug: "whatsapp-business-automation",
    title: "WhatsApp Business Automation Platform",
    problem: "Manual WhatsApp communications for a service business — slow follow-ups, missed leads, and no message tracking.",
    solution: "Built an automated WhatsApp messaging platform using Meta Cloud API with template management, auto-replies, and analytics.",
    stack: ["Meta WhatsApp Cloud API", "Node.js", "React", "MySQL", "Webhooks"],
    architecture: "Event-driven messaging pipeline with template engine, webhook receivers, delivery tracking, and conversation analytics.",
    results: ["5x faster lead response", "Automated follow-up sequences", "Full conversation analytics dashboard"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projects</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            AI engineering and systems architecture projects — each designed to solve real business challenges with scalable, production-grade solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              id={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-border rounded-lg p-8 hover:border-primary/20 transition-all"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xs font-mono-tech text-primary tracking-widest uppercase mb-2">Problem</h3>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-mono-tech text-primary tracking-widest uppercase mb-2">Solution</h3>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xs font-mono-tech text-primary tracking-widest uppercase mb-2">Architecture</h3>
                <p className="text-sm text-muted-foreground">{project.architecture}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-[11px] px-3 py-1 rounded-full bg-secondary text-foreground/70">{tech}</span>
                ))}
              </div>

              <div>
                <h3 className="text-xs font-mono-tech text-primary tracking-widest uppercase mb-2">Results</h3>
                <div className="flex flex-wrap gap-4">
                  {project.results.map((r) => (
                    <div key={r} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span className="text-sm text-foreground/80">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/#contact" className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
            Have a similar challenge? Let's talk <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
