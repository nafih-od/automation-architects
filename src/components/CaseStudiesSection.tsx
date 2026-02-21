import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    tag: "ERP + eCommerce",
    title: "AI-Enhanced ERP with Shopify Integration",
    challenge: "A growing retail brand managed inventory across Shopify and manual spreadsheets, leading to overselling, delayed fulfillment, and inaccurate GST reporting.",
    architecture: "Built a custom ERP system that syncs bidirectionally with Shopify via REST API. Integrated AI-based demand forecasting to auto-adjust reorder points. GST calculation engine handles multi-state tax logic automatically.",
    stack: ["React", "Node.js", "MySQL", "Shopify API", "Python ML"],
    integrations: "Shopify webhooks → ERP sync → Inventory engine → AI forecast module → Dashboard",
    impact: [
      "92% reduction in manual inventory updates",
      "Zero overselling incidents post-deployment",
      "GST reporting time reduced from 2 days to 15 minutes",
    ],
  },
  {
    id: 2,
    tag: "Messaging Automation",
    title: "WhatsApp CRM Automation for International Client",
    challenge: "An international service provider handled 500+ daily WhatsApp inquiries manually, with no CRM integration and zero lead qualification.",
    architecture: "Deployed Meta WhatsApp Cloud API with custom conversation flow engine. AI-powered intent classification routes leads to appropriate workflows. CRM auto-updates with conversation summaries and lead scores.",
    stack: ["Node.js", "Meta Cloud API", "MySQL", "Python NLP"],
    integrations: "WhatsApp → Intent Classifier → CRM Pipeline → Auto-Response Engine → Analytics",
    impact: [
      "85% of inquiries handled without human intervention",
      "Lead qualification accuracy improved by 3x",
      "Response time reduced from hours to under 30 seconds",
    ],
  },
  {
    id: 3,
    tag: "Multi-Store System",
    title: "Multi-Store Inventory Trading System",
    challenge: "A trading network of 50+ stores managed inter-store transfers and pricing through phone calls and paper records, causing massive discrepancies.",
    architecture: "Custom multi-tenant platform with role-based access per store. Real-time inventory sync across locations with conflict resolution. Automated pricing engine with margin calculations and approval workflows.",
    stack: ["React", "Node.js", "MySQL", "REST APIs", "Linux VPS"],
    integrations: "Store Terminals → Central API → Inventory Engine → Pricing Module → Reports",
    impact: [
      "50+ stores connected on a single platform",
      "Inventory discrepancies reduced by 97%",
      "Inter-store transfer time cut from days to minutes",
    ],
  },
  {
    id: 4,
    tag: "AI Web Application",
    title: "Custom AI-Based Web Application",
    challenge: "A consultancy firm needed a client-facing platform that could analyze uploaded documents, extract key insights, and generate structured reports — replacing a team of 3 analysts.",
    architecture: "Built a secure web application with document upload, AI-powered extraction pipeline, and dynamic report generation. Role-based access ensures data isolation between clients.",
    stack: ["React", "Python", "Node.js", "MySQL", "AI/ML APIs"],
    integrations: "Upload Module → Document Parser → AI Analysis Engine → Report Generator → Client Portal",
    impact: [
      "Report generation time reduced from 4 hours to 12 minutes",
      "Operational cost reduced by 60%",
      "Client satisfaction score improved to 96%",
    ],
  },
];

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);
  const active = caseStudies[activeCase];

  return (
    <section id="cases" className="py-24 md:py-32 bg-secondary/30">
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
              Case Studies
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Systems in Production
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Real systems solving real business problems. Architecture decisions, technical details, and measurable outcomes.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActiveCase(i)}
              className={`text-sm px-4 py-2 rounded-md border transition-all duration-200 ${
                activeCase === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cs.tag}
            </button>
          ))}
        </div>

        {/* Active case */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card-elevated border border-border rounded-lg p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold mb-6">{active.title}</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-mono-tech text-primary tracking-wider uppercase mb-2">
                Business Challenge
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {active.challenge}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-mono-tech text-primary tracking-wider uppercase mb-2">
                Technical Architecture
              </h4>
              <p className="text-secondary-foreground text-sm leading-relaxed">
                {active.architecture}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-xs font-mono-tech text-muted-foreground tracking-wider uppercase mb-3">Stack</h4>
              <div className="flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span key={s} className="text-xs border border-border text-foreground px-2.5 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs font-mono-tech text-muted-foreground tracking-wider uppercase mb-3">Integration Flow</h4>
              <p className="text-xs font-mono-tech text-primary/80">{active.integrations}</p>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h4 className="text-xs font-mono-tech text-muted-foreground tracking-wider uppercase mb-4">Measurable Impact</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {active.impact.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <ExternalLink size={14} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
