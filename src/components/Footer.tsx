import { Github, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
  { href: "https://wa.me/917594867061", label: "WhatsApp", icon: MessageCircle },
  { href: "https://linkedin.com/in/nafihrahman", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/nafihrahman", label: "GitHub", icon: Github },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nafih Rahman. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#cases" className="hover:text-primary transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
