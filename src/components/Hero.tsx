import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Marcon Expertech
            <span className="block text-accent">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Professional HVAC Solutions & Technical Services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-lg">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span>Expert Technicians</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0727953604
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;