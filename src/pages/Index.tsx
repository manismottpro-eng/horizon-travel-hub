import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import ReviewCards from "@/components/ReviewCards";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <ReviewCards />
      <BlogSection />
    </div>
  );
};

export default Index;
