import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import {
  PRIMARY_PHONE_LOCAL,
  SECONDARY_PHONE_LOCAL,
  openPhoneCall,
  openWhatsAppChat,
} from "@/lib/contact";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-tech-blue-dark to-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-6 border border-white/20">
            <MessageCircle className="w-5 h-5 text-accent" />
            <span className="text-white font-semibold">Contact Us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Get In <span className="bg-gradient-to-r from-accent to-luxury-gold bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Ready to get started? Contact us today for professional HVAC, refrigeration, and motor services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden group hover:bg-white/15 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white text-xl">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  Call Us Now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/70 text-sm mb-4">Available 24/7 for emergencies</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105"
                    onClick={() => openPhoneCall(PRIMARY_PHONE_LOCAL)}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {PRIMARY_PHONE_LOCAL}
                  </Button>
                  <Button 
                    size="lg"
                    className="bg-luxury-gold hover:bg-luxury-gold/90 text-primary font-bold py-6 rounded-xl shadow-lg shadow-luxury-gold/25 transition-all duration-300 hover:scale-105"
                    onClick={() => openPhoneCall(SECONDARY_PHONE_LOCAL)}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {SECONDARY_PHONE_LOCAL}
                  </Button>
                </div>
                <Button 
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 mt-2"
                  onClick={() => openWhatsAppChat("Hello, I need HVAC services")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </CardContent>
            </Card>
            
            {/* Hours Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden group hover:bg-white/15 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white text-xl">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-luxury-gold" />
                  </div>
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Emergency Only" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/80">{item.day}</span>
                      <span className="font-semibold text-white">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-luxury-gold/20 rounded-xl border border-white/10">
                  <p className="font-bold text-center flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                    24/7 Emergency Services Available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Service Areas & Why Choose Us */}
          <div className="space-y-6">
            {/* Service Areas */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden group hover:bg-white/15 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white text-xl">
                  <div className="w-12 h-12 bg-tech-blue-light/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-tech-blue-light" />
                  </div>
                  Service Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-6">
                  We provide professional HVAC, refrigeration, and motor services across Kenya
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Residential", "Commercial", "Industrial", "Retail"].map((area, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Why Choose Us */}
            <Card className="bg-gradient-to-br from-accent/90 to-tech-blue-light/90 backdrop-blur-md border-accent/30 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <CardHeader className="pb-4 relative">
                <CardTitle className="text-white text-xl font-heading">Why Choose Marcon Expertech?</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-4">
                  {[
                    "Licensed & Insured Technicians",
                    "Free Estimates & Consultations",
                    "Quality Parts & Workmanship Warranty",
                    "Competitive & Transparent Pricing",
                    "Fast Response Time"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-white/95">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
