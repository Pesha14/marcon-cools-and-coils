import { Shield, Clock, Award, Users, Wrench, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "Fully licensed professionals with industry certifications"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency services available around the clock"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Workmanship warranty on all our services"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained and experienced technicians"
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "State-of-the-art tools and diagnostic equipment"
  },
  {
    icon: ThumbsUp,
    title: "Fair Pricing",
    description: "Competitive rates with no hidden charges"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-6 border border-accent/20">
            <span className="text-accent font-semibold">Why Us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Marcon Expertech</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence in every project with professionalism and integrity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
