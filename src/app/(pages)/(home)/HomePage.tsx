import FeaturesSection from "@/components/home-page-components/FeaturesSection";
import HeroSection from "@/components/home-page-components/HeroSection";
import ServicesSection from "@/components/home-page-components/ServicesSection";
import ValuesSection from "@/components/home-page-components/ValuesSection";
import TestimonialsSection from "@/components/home-page-components/TestimonialsSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ValuesSection />
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;
