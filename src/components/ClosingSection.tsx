import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="py-28 md:py-36 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="text-xs font-mono-tech text-primary tracking-[0.2em] uppercase font-medium">Next Step</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-foreground">
            If your operations are fragmented or manual,{" "}
            <span className="text-gradient">I design systems that fix that.</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Let's discuss your business challenges and explore what a purpose-built system can do for your operations.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book a Strategy Call
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
