import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-mono-tech text-primary tracking-widest uppercase">Next Step</span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
            If your operations are fragmented or manual,{" "}
            <span className="text-gradient">I design systems that fix that.</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Let's discuss your business challenges and explore what a purpose-built system can do for your operations.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors shadow-md"
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
