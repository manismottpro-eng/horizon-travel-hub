import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DestinationsSection from "@/components/DestinationsSection";
import ReviewCards from "@/components/ReviewCards";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <HowItWorksSection />
      <DestinationsSection />
      <ReviewCards />
      <BlogSection />
    </div>
  );
};

export default Index;
