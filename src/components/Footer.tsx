import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">SH</span>
              </div>
              <span className="font-bold text-lg">SíťProtiHolubům</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Profesionální instalace ochranných sítí proti holubům pro rodinné domy a bytové domy po celé České republice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sluzby"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Naše služby
                </a>
              </li>
              <li>
                <a
                  href="#vyhody"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Proč nás zvolit
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+420123456789" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@sitprotiholubum.cz" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  info@sitprotiholubum.cz
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/70">Celá Česká republika</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-primary-foreground/50 text-sm">
            © {currentYear} SíťProtiHolubům. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
