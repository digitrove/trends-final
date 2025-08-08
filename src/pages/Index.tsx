import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import KeyFactorsSection from "@/components/KeyFactorsSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import ManufacturingSection from "@/components/ManufacturingSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import ProfileSection from "@/components/ProfileSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <KeyFactorsSection />
        <ObjectivesSection />
        <ManufacturingSection />
        <ClientsSection />
        <ProfileSection/>
        <ContactSection />
        <GallerySection/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;