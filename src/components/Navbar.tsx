import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Services", href: "#services", isRoute: false },
  { label: "Case Studies", href: "#cases", isRoute: false },
  { label: "Projects", href: "/projects", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "#contact", isRoute: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const renderNavLink = (item: typeof navItems[0], onClick?: () => void) => {
    if (item.isRoute) {
      return (
        <Link key={item.label} to={item.href} onClick={onClick} className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
          {item.label}
        </Link>
      );
    }
    const href = location.pathname === "/" ? item.href : `/${item.href}`;
    return (
      <a key={item.label} href={href} onClick={onClick} className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
        {item.label}
      </a>
    );
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm" : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
          Nafih<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => renderNavLink(item))}
          <a href="/resume.pdf" download className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">Resume</a>
          <a href="#contact" className="text-[13px] font-semibold bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md">
            Book a Call
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 gap-4">
              {navItems.map((item) => renderNavLink(item, () => setOpen(false)))}
              <a href="/resume.pdf" download onClick={() => setOpen(false)} className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Resume</a>
              <a href="#contact" onClick={() => setOpen(false)} className="text-[13px] font-semibold bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-center shadow-sm">
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
