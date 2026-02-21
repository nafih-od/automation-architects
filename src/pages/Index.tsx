import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import InternationalSection from "@/components/InternationalSection";
import ClosingSection from "@/components/ClosingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VoiceAgent from "@/components/VoiceAgent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TechStackSection />
      <ProcessSection />
      <InternationalSection />
      <ClosingSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <VoiceAgent />
    </div>
  );
};

export default Index;
