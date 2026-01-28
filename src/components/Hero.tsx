import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Star, Award, Shield, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-tech-blue-dark/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-luxury-gold/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-accent/15 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white pt-20">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-8 py-3 mb-10 border border-white/20 shadow-lg">
            <Award className="w-5 h-5 text-luxury-gold" />
            <span className="text-sm font-semibold tracking-wide">Licensed & Certified Professionals</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="block text-white drop-shadow-lg">Marcon</span>
            <span className="block bg-gradient-to-r from-accent via-tech-blue-light to-luxury-gold bg-clip-text text-transparent">
              Expertech
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-body font-light text-white/90 mt-2 tracking-wide">
              Services
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/85 leading-relaxed max-w-3xl mx-auto font-body">
            Kenya's premier HVAC specialists delivering cutting-edge cooling solutions, 
            cold room installations, and expert motor rewinding services
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 max-w-4xl mx-auto">
            {[
              { icon: Shield, text: "Licensed & Insured", color: "text-accent" },
              { icon: Star, text: "24/7 Emergency Service", color: "text-luxury-gold" },
              { icon: CheckCircle2, text: "Expert Technicians", color: "text-accent" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
              >
                <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="font-medium text-sm sm:text-base">{item.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-14">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-tech-blue-light hover:from-accent/90 hover:to-tech-blue-light/90 text-white px-8 py-7 text-lg font-semibold shadow-2xl shadow-accent/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 rounded-2xl border border-white/20"
                onClick={() => window.open('tel:0727953604')}
              >
                <Phone className="w-6 h-6 mr-3" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80 font-normal">Call Now</span>
                  <span className="text-lg font-bold tracking-wide">0727 953 604</span>
                </div>
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold/90 hover:to-luxury-gold-light/90 text-primary-foreground px-8 py-7 text-lg font-semibold shadow-2xl shadow-luxury-gold/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 rounded-2xl"
                onClick={() => window.open('tel:0734672200')}
              >
                <Phone className="w-6 h-6 mr-3" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80 font-normal">Alternative</span>
                  <span className="text-lg font-bold tracking-wide">0734 672 200</span>
                </div>
              </Button>
            </div>
            
            <Button 
              asChild
              size="lg" 
              className="border-2 border-white/50 text-white hover:bg-white hover:text-primary px-10 py-7 text-lg font-semibold backdrop-blur-md bg-white/10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Link to="/quote">
                Get Free Quote
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-white/70 text-sm mb-8">
            {["Free Consultations", "Quality Guarantee", "Competitive Pricing"].map((text, index) => (
              <div key={index} className="flex items-center gap-2 hover:text-white/90 transition-colors duration-300">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll to services"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
