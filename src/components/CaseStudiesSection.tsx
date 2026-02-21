import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    tag: "ERP + eCommerce",
    title: "AI-Enhanced ERP with Shopify Sync System",
    challenge: "A growing retail brand managed inventory across Shopify and manual spreadsheets, leading to chronic overselling, delayed fulfillment, and inaccurate GST reporting across multiple states.",
    architecture: "Designed a custom ERP that syncs bidirectionally with Shopify via REST API. Integrated AI-based demand forecasting to auto-adjust reorder points. Built a GST calculation engine handling multi-state tax logic with automated compliance reports.",
    stack: ["React", "Node.js", "MySQL", "Shopify API", "Python ML"],
    dataFlow: "Shopify Webhooks → ERP Sync Engine → Inventory State Machine → AI Forecast Module → Admin Dashboard → GST Report Generator",
    impact: [
      "92% reduction in manual inventory updates",
      "Zero overselling incidents post-deployment",
      "GST reporting reduced from 2 days to 15 minutes",
    ],
  },
  {
    id: 2,
    tag: "WhatsApp CRM",
    title: "WhatsApp CRM Automation for Import/Export Company",
    challenge: "An international import/export company handled 500+ daily WhatsApp inquiries manually across multiple agents, with no CRM integration, no lead scoring, and zero automation.",
    architecture: "Deployed Meta WhatsApp Cloud API with a custom conversation flow engine. AI-powered intent classification routes leads to appropriate qualification workflows. CRM auto-updates with conversation summaries, lead scores, and follow-up scheduling.",
    stack: ["Node.js", "Meta Cloud API", "MySQL", "Python NLP", "REST APIs"],
    dataFlow: "WhatsApp Incoming → NLP Intent Classifier → Lead Scoring Engine → CRM Pipeline Update → Auto-Response Router → Agent Dashboard",
    impact: [
      "85% of inquiries resolved without human intervention",
      "Lead qualification accuracy improved by 3x",
      "Average response time under 30 seconds",
    ],
  },
  {
    id: 3,
    tag: "Multi-Store Platform",
    title: "Multi-Store Inventory Trading Platform (50+ Users)",
    challenge: "A trading network of 50+ stores managed inter-store transfers and dynamic pricing through phone calls and paper records, causing massive inventory discrepancies and margin losses.",
    architecture: "Built a multi-tenant platform with granular role-based access per store. Real-time inventory synchronization across all locations with conflict resolution algorithms. Automated pricing engine with margin calculations and multi-level approval workflows.",
    stack: ["React", "Node.js", "MySQL", "REST APIs", "Linux VPS"],
    dataFlow: "Store Terminals → Central API Gateway → Inventory Sync Engine → Pricing Calculator → Approval Workflow → Reporting Module",
    impact: [
      "50+ stores connected on a unified platform",
      "Inventory discrepancies reduced by 97%",
      "Transfer processing from days to under 5 minutes",
    ],
  },
  {
    id: 4,
    tag: "AI Web App",
    title: "Custom Automation-Driven Web Application",
    challenge: "A consultancy firm needed a client-facing platform to analyze uploaded documents, extract key insights, and generate structured reports — replacing a team of 3 full-time analysts.",
    architecture: "Engineered a secure web application with document upload pipeline, AI-powered text extraction and analysis engine, and dynamic report templating system. Role-based access ensures complete data isolation between client accounts.",
    stack: ["React", "Python", "Node.js", "MySQL", "AI/ML APIs"],
    dataFlow: "Document Upload → Parser & OCR → AI Extraction Engine → Structured Data Store → Report Template Engine → Client Portal",
    impact: [
      "Report generation from 4 hours to 12 minutes",
      "Operational cost reduced by 60%",
      "Client satisfaction score of 96%",
    ],
  },
];

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);
  const active = caseStudies[activeCase];

  return (
    <section id="cases" className="py-28 md:py-36 relative">
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
              Case Studies
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Systems in Production
          </h2>
          <p className="text-muted-foreground max-w-xl text-base">
            Architecture decisions, technical depth, and measurable business outcomes from real deployments.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActiveCase(i)}
              className={`text-sm px-5 py-2.5 rounded-md border transition-all duration-300 ${
                activeCase === i
                  ? "bg-primary text-primary-foreground border-primary glow"
                  : "text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cs.tag}
            </button>
          ))}
        </div>

        {/* Active case study */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card-elevated border border-border rounded-xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 md:p-10 border-b border-border">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono-tech text-primary tracking-widest uppercase">{active.tag}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">{active.title}</h3>
          </div>

          {/* Body */}
          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div>
                <h4 className="text-xs font-mono-tech text-muted-foreground tracking-widest uppercase mb-3">
                  Business Challenge
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {active.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono-tech text-muted-foreground tracking-widest uppercase mb-3">
                  System Architecture
                </h4>
                <p className="text-secondary-foreground text-sm leading-relaxed">
                  {active.architecture}
                </p>
              </div>
            </div>

            {/* Data flow diagram */}
            <div className="mb-10 p-5 rounded-lg bg-background border border-border">
              <h4 className="text-xs font-mono-tech text-muted-foreground tracking-widest uppercase mb-3">
                Data Flow
              </h4>
              <p className="text-xs font-mono-tech text-primary leading-loose">
                {active.dataFlow}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-xs font-mono-tech text-muted-foreground tracking-widest uppercase mb-3">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {active.stack.map((s) => (
                    <span key={s} className="text-xs border border-border text-foreground px-3 py-1.5 rounded-md bg-background">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="border-t border-border pt-8">
              <h4 className="text-xs font-mono-tech text-muted-foreground tracking-widest uppercase mb-5">
                Measurable Impact
              </h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {active.impact.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA below case studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4 transition-all"
          >
            Discuss a similar system
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
