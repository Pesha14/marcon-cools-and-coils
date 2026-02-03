import { Button } from "@/components/ui/button";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PRIMARY_PHONE_LOCAL,
  SECONDARY_PHONE_LOCAL,
  openWhatsAppChat,
} from "@/lib/contact";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>🕒 Mon-Fri: 8AM-6PM | Emergency 24/7</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${PRIMARY_PHONE_LOCAL}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              {PRIMARY_PHONE_LOCAL}
            </a>
            <span>|</span>
            <a href={`tel:${SECONDARY_PHONE_LOCAL}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              {SECONDARY_PHONE_LOCAL}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 shadow-sm backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl text-primary">Marcon</h1>
                <p className="text-xs text-muted-foreground -mt-1">Expertech Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/quote" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/quote') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                Get Quote
              </Link>
              <div className="flex items-center gap-2">
                <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
                  <a href={`tel:${PRIMARY_PHONE_LOCAL}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-green-500/40 text-green-700 hover:bg-green-50"
                  onClick={() => openWhatsAppChat("Hello, I need HVAC services")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive('/') ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/quote" 
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive('/quote') ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
                <div className="flex flex-col gap-2 pt-2">
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
                    <a href={`tel:${PRIMARY_PHONE_LOCAL}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {PRIMARY_PHONE_LOCAL}
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={`tel:${SECONDARY_PHONE_LOCAL}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {SECONDARY_PHONE_LOCAL}
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-500/40 text-green-700 hover:bg-green-50"
                    onClick={() => openWhatsAppChat("Hello, I need HVAC services")}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
