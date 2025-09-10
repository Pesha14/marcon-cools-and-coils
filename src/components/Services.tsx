import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Snowflake, 
  Wrench, 
  Thermometer, 
  Settings, 
  Zap 
} from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "AC Installation",
    description: "Professional air conditioning installation for residential and commercial properties with quality assurance and warranty."
  },
  {
    icon: Wrench,
    title: "AC Repair & Maintenance",
    description: "Expert repair services and preventive maintenance to keep your AC systems running efficiently year-round."
  },
  {
    icon: Snowflake,
    title: "Cold Room Installations",
    description: "Complete cold room setup for businesses requiring temperature-controlled storage solutions."
  },
  {
    icon: Settings,
    title: "Cold Room Repair & Maintenance",
    description: "Professional maintenance and repair services to ensure your cold storage systems operate at peak performance."
  },
  {
    icon: Zap,
    title: "Motor Rewinding & Servicing",
    description: "Specialized motor rewinding and comprehensive servicing for industrial and commercial electric motors."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HVAC and electrical solutions delivered by certified professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/90 border-primary/10"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;