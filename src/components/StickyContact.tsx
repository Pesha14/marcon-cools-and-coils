import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import {
  PRIMARY_PHONE_LOCAL,
  SECONDARY_PHONE_LOCAL,
  openPhoneCall,
  openWhatsAppChat,
} from "@/lib/contact";

const StickyContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Phone Buttons */}
      <div className="flex flex-col gap-2 rounded-2xl border border-primary/20 bg-card/95 p-2 shadow-2xl backdrop-blur-sm">
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full px-6"
          onClick={() => openPhoneCall(PRIMARY_PHONE_LOCAL)}
        >
          <Phone className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">{PRIMARY_PHONE_LOCAL}</span>
          <span className="sm:hidden">Call</span>
        </Button>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full px-6"
          onClick={() => openPhoneCall(SECONDARY_PHONE_LOCAL)}
        >
          <Phone className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">{SECONDARY_PHONE_LOCAL}</span>
          <span className="sm:hidden">Call</span>
        </Button>
      </div>

      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 animate-pulse"
        onClick={() => openWhatsAppChat("Hello, I need HVAC services")}
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        <span className="hidden sm:inline">WhatsApp</span>
        <span className="sm:hidden">Chat</span>
      </Button>
    </div>
  );
};

export default StickyContact;
