import Hero from "@/components/Hero";
import Services from "@/components/Services"; 
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="font-body">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
