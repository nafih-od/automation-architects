import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(170 75% 42% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(170 75% 42% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px] bg-primary" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-mono-tech text-primary tracking-wider uppercase">
              AI & Automation Engineer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
            I Build Systems That{" "}
            <span className="text-gradient">Replace Manual Work</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-4">
            Custom web platforms. AI logic integration. API-based automation.
            Scalable backend systems. Designed for businesses that need infrastructure, not just websites.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {["Automation Systems", "Custom Platforms", "AI Integration", "Backend Infrastructure"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono-tech text-muted-foreground border border-border px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-md font-medium text-sm hover:border-primary/50 hover:text-primary transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={20} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
