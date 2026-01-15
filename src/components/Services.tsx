import { Home, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import houseImage from "@/assets/service-house.jpg";
import apartmentImage from "@/assets/service-apartment.jpg";

const services = [
  {
    icon: Home,
    title: "Rodinné domy",
    description:
      "Diskrétní a efektivní ochrana balkónů, teras, střech a dalších částí rodinných domů. Sítě přizpůsobíme přesně vašim potřebám.",
    features: ["Balkóny a terasy", "Střechy a podkroví", "Okna a světlíky", "Pergoly a přístřešky"],
    image: houseImage,
  },
  {
    icon: Building2,
    title: "Bytové domy a paneláky",
    description:
      "Komplexní řešení pro bytové domy a SVJ. Spolupracujeme s bytovými družstvy a zajišťujeme ochranu celých objektů.",
    features: ["Lodžie a balkóny", "Společné prostory", "Fasády budov", "Technické prostory"],
    image: apartmentImage,
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sluzby" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Naše služby</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Ochrana pro každý typ budovy
          </h2>
          <p className="text-muted-foreground text-lg">
            Nabízíme profesionální instalaci sítí proti holubům pro rodinné domy i velké bytové komplexy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground">{service.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group/btn" onClick={scrollToContact}>
                  Nezávazná poptávka
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
