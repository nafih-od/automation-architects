import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const trustIndicators = [
  "AI automation & ML pipelines",
  "Multi-store inventory platforms (50+ users)",
  "Shopify & API integrations",
  "MCP integrations & AI agent tooling",
  "VPS-based backend deployments",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background" aria-label="Hero">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
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
            <div className="h-px w-20 bg-gradient-to-r from-primary to-primary/40" />
            <span className="text-xs font-mono-tech text-primary tracking-[0.2em] uppercase font-medium">
              AI Systems Engineer
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tight text-foreground">
            AI Systems Engineer{" "}
            <br className="hidden sm:block" />
            Building{" "}
            <span className="text-gradient">ML & Automation Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            I'm Nafih Rahman — an AI Systems Engineer specializing in machine learning pipelines, 
            AI-powered automation, and scalable backend infrastructure that eliminates 
            operational bottlenecks for growing businesses.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-14 max-w-lg">
            {trustIndicators.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                <span className="text-xs text-muted-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-sm hover:bg-secondary hover:border-primary/20 transition-all duration-300"
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
          <ChevronDown size={20} className="text-muted-foreground/60 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
