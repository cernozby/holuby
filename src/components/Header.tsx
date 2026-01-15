import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SH</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">SíťProtiHolubům</span>
              <span className="text-xs text-muted-foreground block -mt-1">Profesionální ochrana</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sluzby")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection("vyhody")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Proč my
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+420739549728" className="flex items-center gap-2 text-sm font-medium text-primary">
              <Phone className="w-4 h-4" />
              +420 739 549 728
            </a>
            <Button variant="accent" onClick={() => scrollToSection("kontakt")}>
              Nezávazná poptávka
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sluzby")}
                className="text-left py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                Služby
              </button>
              <button
                onClick={() => scrollToSection("vyhody")}
                className="text-left py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                Proč my
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-left py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                Kontakt
              </button>
              <a
                href="tel:+420739549728"
                className="flex items-center gap-2 py-2 text-primary font-medium"
              >
                <Phone className="w-4 h-4" />
                +420 739 549 728
              </a>
              <Button variant="accent" className="w-full mt-2" onClick={() => scrollToSection("kontakt")}>
                Nezávazná poptávka
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
