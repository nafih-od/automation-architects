import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const trustIndicators = [
  "ERP & CRM automation systems",
  "Multi-store inventory platforms (50+ users)",
  "Shopify & API integrations",
  "MCP integrations & AI agent tooling",
  "VPS-based backend deployments",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "linear-gradient(hsl(170 75% 42% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(170 75% 42% / 0.4) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Primary orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06] blur-[150px] bg-primary" />
      {/* Secondary orb */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px] bg-primary" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="h-px w-16 bg-primary" />
            <span className="text-sm font-mono-tech text-primary tracking-widest uppercase">
              AI Systems Engineer
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-8 tracking-tight">
            I Engineer AI-Powered{" "}
            <br className="hidden sm:block" />
            Infrastructure for{" "}
            <span className="text-gradient">Scaling Companies</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Custom web platforms. AI logic integration. API-driven automation. 
            Scalable backend systems designed to eliminate operational bottlenecks.
          </p>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-12 max-w-lg">
            {trustIndicators.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-xs text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-md font-medium text-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={20} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
