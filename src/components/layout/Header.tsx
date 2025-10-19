import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-crypto-dark/95 backdrop-blur-md border-b border-crypto-gold/20 shadow-lg shadow-crypto-gold/5 py-3"
          : "bg-transparent py-4"
      )}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            aria-label="חזרה למעלה"
          >
            {/* Logo container with fixed size */}
            <div className="w-14 h-14 flex items-center justify-center overflow-visible">
              <img
                src="public/images/logo.png"
                alt="Company logo"
                className="w-14 h-14 object-contain scale-150 transition-transform group-hover:scale-[1.6]"
              />
            </div>

            <div className="hidden sm:block">
              <div
                className={cn(
                  "font-bold text-lg transition-colors",
                  isScrolled ? "text-white" : "text-white"
                )}
              >
                תומר ספיר
              </div>
              <div
                className={cn(
                  "text-xs transition-colors",
                  isScrolled ? "text-crypto-gold" : "text-gray-300"
                )}
              >
                יועץ קריפטו
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "font-medium transition-colors hover:text-crypto-gold",
                  isScrolled ? "text-white" : "text-white"
                )}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant={isScrolled ? "default" : "gold"}
              onClick={() => scrollToSection("#contact")}
              aria-label="התחל עכשיו - צור קשר"
            >
              התחל עכשיו
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              "text-white hover:bg-white/10"
            )}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-crypto-dark-lighter rounded-lg shadow-lg border border-crypto-gold/20">
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white font-medium hover:text-crypto-gold transition-colors text-left py-2"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="gold"
                className="w-full"
                onClick={() => scrollToSection("#contact")}
                aria-label="התחל עכשיו - צור קשר"
              >
                התחל עכשיו
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
