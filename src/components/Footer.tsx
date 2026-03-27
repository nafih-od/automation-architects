import { Github, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
  { href: "https://wa.me/917594867061", label: "WhatsApp", icon: MessageCircle },
  { href: "https://www.linkedin.com/in/nafih-rahman-a68061352", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/nafih-od", label: "GitHub", icon: Github },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground font-medium">
          © {new Date().getFullYear()} Nafih Rahman. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <link.icon size={18} />
              </a>
            ))}
          </div>
          <div className="h-4 w-px bg-border/60" />
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
            <a href="#services" className="hover:text-foreground transition-colors duration-300">Services</a>
            <a href="/projects" className="hover:text-foreground transition-colors duration-300">Projects</a>
            <a href="/blog" className="hover:text-foreground transition-colors duration-300">Blog</a>
            <a href="#contact" className="hover:text-foreground transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
