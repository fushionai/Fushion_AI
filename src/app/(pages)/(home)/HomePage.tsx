import FeaturesSection from "@/components/home-page-components/FeaturesSection";
import HeroSection from "@/components/home-page-components/HeroSection";
import ServicesSection from "@/components/home-page-components/ServicesSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
