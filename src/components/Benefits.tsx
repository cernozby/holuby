import { Shield, Clock, Award, Wrench, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Záruka 5 let",
    description: "Na všechny naše instalace poskytujeme plnou záruku 5 let včetně servisu.",
  },
  {
    icon: Clock,
    title: "Rychlá realizace",
    description: "Od obhlídky po instalaci obvykle do 7 pracovních dnů.",
  },
  {
    icon: Award,
    title: "Kvalitní materiály",
    description: "Používáme pouze certifikované sítě odolné proti UV záření a povětrnostním vlivům.",
  },
  {
    icon: Wrench,
    title: "Profesionální montáž",
    description: "Naši technici jsou vyškoleni a mají dlouholeté zkušenosti v oboru.",
  },
  {
    icon: Users,
    title: "Bezplatná konzultace",
    description: "Přijedeme, prohlédneme prostor a připravíme nezávaznou cenovou nabídku zdarma.",
  },
];

const Benefits = () => {
  return (
    <section id="vyhody" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Proč nás zvolit</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Vaše spokojenost je naší prioritou
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
