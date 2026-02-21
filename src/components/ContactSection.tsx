import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { href: "https://wa.me/917594867061", label: "WhatsApp", icon: MessageCircle },
  { href: "https://www.linkedin.com/in/nafihrahman/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/nafihrahman", label: "GitHub", icon: Github },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@nafihrahman.com?subject=Strategy Call — ${encodeURIComponent(form.name)} (${encodeURIComponent(form.company)})&body=${encodeURIComponent(form.message)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-muted/20" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-16 bg-primary" />
              <span className="text-sm font-mono-tech text-primary tracking-widest uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Discuss{" "}
              <span className="text-gradient">Your System</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md text-base leading-relaxed">
              Have a business process that needs automation? A platform that needs building? Let's talk architecture and outcomes.
            </p>

            <div className="space-y-5">
              {[
                { label: "Response time", value: "Within 24 hours" },
                { label: "Availability", value: "International projects welcome" },
                { label: "Engagement", value: "Project-based or retainer" },
                { label: "Minimum project", value: "Custom scoping required" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="text-foreground font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono-tech text-muted-foreground tracking-widest uppercase mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-background border border-border rounded-md px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono-tech text-muted-foreground tracking-widest uppercase mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  maxLength={100}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-background border border-border rounded-md px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-mono-tech text-muted-foreground tracking-widest uppercase mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border border-border rounded-md px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono-tech text-muted-foreground tracking-widest uppercase mb-2 block">
                Project Details
              </label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border border-border rounded-md px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                placeholder="Describe your business challenge, current systems, and what you're looking to build..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
