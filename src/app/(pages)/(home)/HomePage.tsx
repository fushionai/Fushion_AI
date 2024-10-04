import FeaturesSection from "@/components/home-page-components/FeaturesSection";
import HeroSection from "@/components/home-page-components/HeroSection";
import ServicesSection from "@/components/home-page-components/ServicesSection";
import ValuesSection from "@/components/home-page-components/ValuesSection";
import TestimonialsSection from "@/components/home-page-components/TestimonialsSection";
import TeamsSection from "@/components/home-page-components/TeamsSection";
import UpFooter from "@/components/home-page-components/UpFooter";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ValuesSection />
      <TestimonialsSection />
      <TeamsSection />
      <UpFooter />
      <Footer />
    </main>
  );
};

export default HomePage;
