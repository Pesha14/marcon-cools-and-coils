import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Import images
import acInstallationImg from "@/assets/ac-installation.jpg";
import acRepairImg from "@/assets/ac-repair.jpg";
import coldRoomImg from "@/assets/cold-room.jpg";
import coldRoomRepairImg from "@/assets/cold-room-repair.jpg";
import motorRewindingImg from "@/assets/motor-rewinding.jpg";

const galleryImages = [
  { src: motorRewindingImg, title: "Motor Rewinding", category: "Electrical" },
  { src: acInstallationImg, title: "AC Installation", category: "HVAC" },
  { src: coldRoomImg, title: "Cold Room Setup", category: "Refrigeration" },
  { src: acRepairImg, title: "AC Maintenance", category: "HVAC" },
  { src: coldRoomRepairImg, title: "Cold Room Controls", category: "Refrigeration" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-luxury-gold/10 rounded-full px-6 py-3 mb-6 border border-luxury-gold/20">
            <span className="text-luxury-gold font-semibold">Our Work</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Project <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our completed projects and see the quality of our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-semibold text-accent mb-2 block">{image.category}</span>
                  <h3 className="text-xl font-heading font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Gallery preview"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
