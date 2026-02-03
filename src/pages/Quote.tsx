import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Star } from "lucide-react";
import {
  OWNER_EMAIL,
  PRIMARY_PHONE_LOCAL,
  SECONDARY_PHONE_LOCAL,
  openEmailDraft,
  openPhoneCall,
  openWhatsAppChat,
} from "@/lib/contact";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    serviceType: "",
    urgency: "",
    description: "",
    preferredContact: "phone",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.serviceType || !formData.urgency) {
      toast({
        title: "Missing Service Details",
        description: "Please select both service type and urgency level.",
        variant: "destructive",
      });
      return;
    }

    if (formData.preferredContact === "email" && !formData.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to continue with email.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Agreement Required",
        description: "Please agree to our terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Format message for WhatsApp
    const serviceLabels: Record<string, string> = {
      "ac-installation": "AC Installation",
      "ac-repair": "AC Repair & Maintenance",
      "cold-room-installation": "Cold Room Installation",
      "cold-room-repair": "Cold Room Repair & Maintenance",
      "motor-rewinding": "Motor Rewinding & Servicing",
      "multiple": "Multiple Services"
    };

    const urgencyLabels: Record<string, string> = {
      "emergency": "Emergency (Same Day)",
      "urgent": "Urgent (Within 3 Days)",
      "normal": "Normal (Within 1 Week)",
      "planning": "Planning (Within 1 Month)"
    };

    const serviceLabel = serviceLabels[formData.serviceType] || formData.serviceType;
    const urgencyLabel = urgencyLabels[formData.urgency] || formData.urgency;

    const whatsappMessage = `
*NEW QUOTE REQUEST*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}` : ''}
*Location:* ${formData.location}
*Service:* ${serviceLabel}
*Urgency:* ${urgencyLabel}
*Preferred Contact:* ${formData.preferredContact}

*Description:*
${formData.description}
    `.trim();

    const emailSubject = `Quote Request - ${serviceLabel} - ${formData.location}`;
    const emailBody = [
      "Hello Marcon Expertech Team,",
      "",
      "I would like to request a quotation for the service below.",
      "",
      "===== CUSTOMER DETAILS =====",
      `Full Name: ${formData.name}`,
      `Phone Number: ${formData.phone}`,
      `Email Address: ${formData.email || "Not provided"}`,
      `Location: ${formData.location}`,
      "",
      "===== REQUEST DETAILS =====",
      `Service Needed: ${serviceLabel}`,
      `Urgency: ${urgencyLabel}`,
      `Preferred Contact Method: ${formData.preferredContact}`,
      "",
      "===== PROJECT DESCRIPTION =====",
      formData.description,
      "",
      "Thank you,",
      formData.name,
    ].join("\n");

    if (formData.preferredContact === "email") {
      openEmailDraft(emailSubject, emailBody);
      toast({
        title: "Opening Email App",
        description: "Review and send your quote email draft.",
      });
    } else if (formData.preferredContact === "whatsapp") {
      openWhatsAppChat(whatsappMessage);
      toast({
        title: "Opening WhatsApp",
        description: "Complete sending your quote request via WhatsApp.",
      });
    } else {
      openPhoneCall(PRIMARY_PHONE_LOCAL);
      toast({
        title: "Opening Phone Dialer",
        description: "Call to share your quote request details directly.",
      });
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      serviceType: "",
      urgency: "",
      description: "",
      preferredContact: "phone",
      agreeToTerms: false
    });
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Professional HVAC services with transparent pricing and expert consultation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Clock className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                <p className="text-white/80">We respond within 30 minutes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Star className="w-8 h-8 mx-auto mb-4 text-luxury-gold" />
                <h3 className="font-semibold text-lg mb-2">Expert Consultation</h3>
                <p className="text-white/80">Free professional assessment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2">No Hidden Costs</h3>
                <p className="text-white/80">Transparent, competitive pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-primary/15 shadow-xl shadow-primary/10">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">
                    Contact Information
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Get in touch with our experts
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a href={`tel:${PRIMARY_PHONE_LOCAL}`} className="block text-primary hover:underline">
                          {PRIMARY_PHONE_LOCAL}
                        </a>
                        <a href={`tel:${SECONDARY_PHONE_LOCAL}`} className="block text-primary hover:underline">
                          {SECONDARY_PHONE_LOCAL}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">{OWNER_EMAIL}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Service Areas</h4>
                      <p className="text-muted-foreground">Nationwide Coverage in Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <div className="text-sm text-muted-foreground">
                        <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                        <p>Sat: 8:00 AM - 4:00 PM</p>
                        <p>Sun: Emergency Only</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        className="bg-accent hover:bg-accent/90"
                        onClick={() => openPhoneCall(PRIMARY_PHONE_LOCAL)}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => openWhatsAppChat("Hello, I need help with a quote request.")}
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="border-primary/15 shadow-xl shadow-primary/10">
                <CardHeader>
                  <CardTitle className="font-heading text-3xl text-primary">
                    Request Your Free Quote
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you with a detailed quote
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData('name', e.target.value)}
                          required
                          placeholder="Enter your full name"
                          className="h-11"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          required
                          placeholder="0712345678"
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          placeholder="your.email@example.com"
                          className="h-11"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => updateFormData('location', e.target.value)}
                          required
                          placeholder="City, Area or County"
                          className="h-11"
                        />
                      </div>
                    </div>

                    {/* Service Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <Select value={formData.serviceType} onValueChange={(value) => updateFormData('serviceType', value)}>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ac-installation">AC Installation</SelectItem>
                            <SelectItem value="ac-repair">AC Repair & Maintenance</SelectItem>
                            <SelectItem value="cold-room-installation">Cold Room Installation</SelectItem>
                            <SelectItem value="cold-room-repair">Cold Room Repair & Maintenance</SelectItem>
                            <SelectItem value="motor-rewinding">Motor Rewinding & Servicing</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">How Urgent? *</Label>
                        <Select value={formData.urgency} onValueChange={(value) => updateFormData('urgency', value)}>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select urgency level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (Same Day)</SelectItem>
                            <SelectItem value="urgent">Urgent (Within 3 Days)</SelectItem>
                            <SelectItem value="normal">Normal (Within 1 Week)</SelectItem>
                            <SelectItem value="planning">Planning (Within 1 Month)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => updateFormData('description', e.target.value)}
                        required
                        placeholder="Please describe your project requirements, location details, and any specific needs..."
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <div>
                      <Label>Preferred Contact Method</Label>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Choose whether to call, send WhatsApp, or send email.
                      </p>
                      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <label className="flex items-center gap-2 rounded-lg border border-border p-3">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={(e) => updateFormData('preferredContact', e.target.value)}
                          />
                          <span>Phone Call</span>
                        </label>
                        <label className="flex items-center gap-2 rounded-lg border border-border p-3">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="whatsapp"
                            checked={formData.preferredContact === 'whatsapp'}
                            onChange={(e) => updateFormData('preferredContact', e.target.value)}
                          />
                          <span>WhatsApp</span>
                        </label>
                        <label className="flex items-center gap-2 rounded-lg border border-border p-3">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={(e) => updateFormData('preferredContact', e.target.value)}
                          />
                          <span>Email</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => updateFormData('agreeToTerms', checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions and privacy policy *
                      </Label>
                    </div>

                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold"
                    >
                      Continue With Selected Contact Method
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
