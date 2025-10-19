import { Linkedin, Twitter, Github, Mail, TrendingUp } from "lucide-react";
import { contactInfo, navLinks } from "@/data/content";

const iconMap = {
  Linkedin,
  Twitter,
  Github,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-crypto-dark text-white border-t border-crypto-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-crypto-gold flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-white">תומר ספיר</div>
                <div className="text-sm text-crypto-gold">יועץ קריפטו</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              ייעוץ מומחה במטבעות דיגיטליים וכלכלה למשקיעים, עסקים ומוסדות.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">קישורים מהירים</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-gray-400 hover:text-crypto-gold transition-colors"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">צור קשר</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-crypto-gold transition-colors"
                aria-label={`Email ${contactInfo.email}`}
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="block text-sm text-gray-400 hover:text-crypto-gold transition-colors"
                  aria-label={`Call ${contactInfo.phone}`}
                >
                  {contactInfo.phone}
                </a>
              )}
              {contactInfo.location && (
                <p className="text-sm text-gray-400">{contactInfo.location}</p>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">התחבר</h3>
            <div className="flex gap-3">
              {contactInfo.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return IconComponent ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-crypto-gold/10 border border-crypto-gold/20 flex items-center justify-center hover:bg-crypto-gold hover:border-crypto-gold transition-all"
                    aria-label={`Visit ${social.platform} profile`}
                  >
                    <IconComponent className="w-5 h-5 text-crypto-gold hover:text-white transition-colors" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-crypto-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} תומר ספיר. כל הזכויות שמורות.
            </p>
            <div className="flex gap-6">
              <button className="hover:text-crypto-gold transition-colors font-medium">
                מדיניות פרטיות
              </button>
              <button className="hover:text-crypto-gold transition-colors font-medium">
                תנאי שימוש
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
