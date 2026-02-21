import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    const mailtoLink = `mailto:contact@nafihrahman.com?subject=Strategy Call — ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono-tech text-primary tracking-wider uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Discuss Your System
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Have a business process that needs automation? A platform that needs building? Let's talk architecture.
            </p>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Response time:</span> Within 24 hours
              </p>
              <p>
                <span className="text-foreground font-medium">Availability:</span> International projects welcome
              </p>
              <p>
                <span className="text-foreground font-medium">Engagement:</span> Project-based or retainer
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <label className="text-xs font-mono-tech text-muted-foreground tracking-wider uppercase mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-mono-tech text-muted-foreground tracking-wider uppercase mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs font-mono-tech text-muted-foreground tracking-wider uppercase mb-2 block">
                Project Details
              </label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Describe your business challenge or project requirements..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Send Message
              <ArrowRight size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
