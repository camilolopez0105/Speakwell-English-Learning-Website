"use client";

import { Phone, Mail, Globe, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Phone, href: "#", label: "WhatsApp" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: MapPin, href: "#", label: "Location" },
  { icon: Mail, href: "mailto:hello@speakwell.com", label: "Email" },
];

const footerLinks = [
  { label: "Método", href: "#method" },
  { label: "Precios", href: "#pricing" },
  { label: "Testimonios", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-bg-base border-t border-border-soft">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-text-primary">SpeakWell</h3>
            <p className="text-text-muted mt-1">
              Aprende a hablar inglés con confianza
            </p>
          </div>

          <nav className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-bg-card border border-border-soft flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="text-center text-text-muted text-sm">
          <p>© {new Date().getFullYear()} SpeakWell. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}