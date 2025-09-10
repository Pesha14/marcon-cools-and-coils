import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Star, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-luxury-gold/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
            <Award className="w-5 h-5 text-luxury-gold" />
            <span className="text-sm font-medium">Licensed & Certified Professionals</span>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Marcon
            <span className="block text-accent bg-gradient-to-r from-accent to-luxury-gold bg-clip-text text-transparent">
              Expertech
            </span>
            <span className="block text-4xl md:text-6xl font-body font-light text-white/90">
              Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto font-body">
            Kenya's premier HVAC specialists delivering cutting-edge cooling solutions, 
            cold room installations, and expert motor services
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="w-6 h-6 text-accent" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Star className="w-6 h-6 text-luxury-gold" />
              <span className="font-medium">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span className="font-medium">Expert Technicians</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105 rounded-xl"
                onClick={() => window.open('tel:0727953604')}
              >
                <Phone className="w-6 h-6 mr-3" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-90">Call Now</span>
                  <span className="text-lg font-bold">0727953604</span>
                </div>
              </Button>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 rounded-xl"
                onClick={() => window.open('tel:0734672200')}
              >
                <Phone className="w-6 h-6 mr-3" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-90">Alternative</span>
                  <span className="text-lg font-bold">0734672200</span>
                </div>
              </Button>
            </div>
            
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/10 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/quote">
                Get Quote
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Free Consultations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Quality Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Competitive Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;