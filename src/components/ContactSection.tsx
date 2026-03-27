import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { href: "https://wa.me/917594867061", label: "WhatsApp", icon: MessageCircle },
  { href: "https://www.linkedin.com/in/nafih-rahman-a68061352", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/nafih-od", label: "GitHub", icon: Github },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nafih176@gmail.com?subject=Strategy Call — ${encodeURIComponent(form.name)} (${encodeURIComponent(form.company)})&body=${encodeURIComponent(form.message)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-background" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-20 bg-gradient-to-r from-primary to-primary/40" />
              <span className="text-xs font-mono-tech text-primary tracking-[0.2em] uppercase font-medium">Contact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">
              Let's Discuss{" "}
              <span className="text-gradient">Your System</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md text-base leading-relaxed">
              Have a business process that needs automation? A platform that needs building? Let's talk architecture and outcomes.
            </p>

            <div className="space-y-5">
              {[
                { label: "Response time", value: "Within 24 hours" },
                { label: "Availability", value: "International projects" },
                { label: "Engagement", value: "Project-based or retainer" },
                { label: "Minimum project", value: "Custom scoping required" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="text-foreground font-semibold">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-10">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-11 h-11 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all duration-300"
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
                <label className="text-[10px] font-mono-tech text-muted-foreground tracking-[0.15em] uppercase mb-2 block font-medium">Name</label>
                <input
                  type="text" required maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono-tech text-muted-foreground tracking-[0.15em] uppercase mb-2 block font-medium">Company</label>
                <input
                  type="text" maxLength={100}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-mono-tech text-muted-foreground tracking-[0.15em] uppercase mb-2 block font-medium">Email</label>
              <input
                type="email" required maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono-tech text-muted-foreground tracking-[0.15em] uppercase mb-2 block font-medium">Project Details</label>
              <textarea
                required maxLength={1000} rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300 resize-none"
                placeholder="Describe your business challenge, current systems, and what you're looking to build..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
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
