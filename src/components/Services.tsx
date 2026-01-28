import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Snowflake, 
  Wrench, 
  Thermometer, 
  Settings, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

// Import service images
import acInstallationImg from "@/assets/ac-installation.jpg";
import acRepairImg from "@/assets/ac-repair.jpg";
import coldRoomImg from "@/assets/cold-room.jpg";
import coldRoomRepairImg from "@/assets/cold-room-repair.jpg";
import motorRewindingImg from "@/assets/motor-rewinding.jpg";

const services = [
  {
    icon: Thermometer,
    title: "AC Installation",
    description: "Professional air conditioning installation for residential and commercial properties with quality assurance and warranty.",
    features: ["Energy Efficient Systems", "Professional Installation", "1-Year Warranty", "All Major Brands"],
    image: acInstallationImg
  },
  {
    icon: Wrench,
    title: "AC Repair & Maintenance",
    description: "Expert repair services and preventive maintenance to keep your AC systems running efficiently year-round.",
    features: ["24/7 Emergency Service", "Preventive Maintenance", "Quick Response", "Genuine Parts"],
    image: acRepairImg
  },
  {
    icon: Snowflake,
    title: "Cold Room Installations",
    description: "Complete cold room setup for businesses requiring temperature-controlled storage solutions.",
    features: ["Custom Design", "Temperature Control", "Industrial Grade", "Energy Efficient"],
    image: coldRoomImg
  },
  {
    icon: Settings,
    title: "Cold Room Repair & Maintenance",
    description: "Professional maintenance and repair services to ensure your cold storage systems operate at peak performance.",
    features: ["Regular Maintenance", "Emergency Repairs", "System Optimization", "Temperature Monitoring"],
    image: coldRoomRepairImg
  },
  {
    icon: Zap,
    title: "Motor Rewinding & Servicing",
    description: "Specialized motor rewinding and comprehensive servicing for industrial and commercial electric motors.",
    features: ["AC/DC Motors", "Pumps & Compressors", "Welding Machines", "Alternators"],
    image: motorRewindingImg,
    isHighlighted: true,
    expandedServices: [
      "Electric Motors (AC/DC)",
      "Water Pumps",
      "Bitzer Compressors",
      "Car Washing Machines",
      "Automobile Alternators",
      "Welding Machines"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6 border border-primary/20">
            <Star className="w-5 h-5 text-luxury-gold" />
            <span className="text-primary font-semibold">Our Services</span>
            <Star className="w-5 h-5 text-luxury-gold" />
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Expert <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">HVAC</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive heating, ventilation, air conditioning, and electrical solutions 
            delivered by certified professionals with over a decade of experience
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card border-primary/10 overflow-hidden animate-slide-up ${
                service.isHighlighted ? 'lg:col-span-1 ring-2 ring-luxury-gold/50' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                {service.isHighlighted && (
                  <div className="absolute top-4 right-4 bg-luxury-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                
                {/* Expanded services for motor rewinding */}
                {service.expandedServices && (
                  <div className="mb-4 p-4 bg-secondary/50 rounded-xl border border-primary/10">
                    <p className="text-sm font-semibold text-primary mb-3">We Service:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.expandedServices.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Emergency Support" },
            { number: "100%", label: "Customer Satisfaction" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary via-tech-blue to-accent rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-luxury-gold/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Need Professional HVAC Services?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Get expert consultation and competitive quotes for all your cooling, refrigeration, and motor rewinding needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg"
                  onClick={() => window.open('tel:0727953604')}
                >
                  📞 Call 0727953604
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg rounded-xl"
                  asChild
                >
                  <Link to="/quote">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
