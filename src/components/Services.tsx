import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Snowflake, 
  Wrench, 
  Thermometer, 
  Settings, 
  Zap,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Thermometer,
    title: "AC Installation",
    description: "Professional air conditioning installation for residential and commercial properties with quality assurance and warranty.",
    features: ["Energy Efficient Systems", "Professional Installation", "1-Year Warranty"]
  },
  {
    icon: Wrench,
    title: "AC Repair & Maintenance",
    description: "Expert repair services and preventive maintenance to keep your AC systems running efficiently year-round.",
    features: ["24/7 Emergency Service", "Preventive Maintenance", "Quick Response"]
  },
  {
    icon: Snowflake,
    title: "Cold Room Installations",
    description: "Complete cold room setup for businesses requiring temperature-controlled storage solutions.",
    features: ["Custom Design", "Temperature Control", "Industrial Grade"]
  },
  {
    icon: Settings,
    title: "Cold Room Repair & Maintenance",
    description: "Professional maintenance and repair services to ensure your cold storage systems operate at peak performance.",
    features: ["Regular Maintenance", "Emergency Repairs", "System Optimization"]
  },
  {
    icon: Zap,
    title: "Motor Rewinding & Servicing",
    description: "Specialized motor rewinding and comprehensive servicing for industrial and commercial electric motors.",
    features: ["Expert Rewinding", "Motor Testing", "Performance Restoration"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <span className="text-primary font-medium">Our Services</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Expert HVAC Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive heating, ventilation, air conditioning, and electrical solutions 
            delivered by certified professionals with over a decade of experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-card to-card/90 border-primary/10 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                  <service.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link to="/quote">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Need Professional HVAC Services?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Get expert consultation and competitive quotes for all your cooling and electrical needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
                onClick={() => window.open('tel:0727953604')}
              >
                Call 0727953604
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4"
                asChild
              >
                <Link to="/quote">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;