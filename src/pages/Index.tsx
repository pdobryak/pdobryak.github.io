import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyMeSection from "@/components/WhyMeSection";
import ProfessionalStandards from "@/components/ProfessionalStandards";
import WorkWithSection from "@/components/WorkWithSection";
import EducationDocuments from "@/components/EducationDocuments";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyMeSection />
      <ProfessionalStandards />
      <WorkWithSection />
      <EducationDocuments />
      <Footer />
    </div>
  );
};

export default Index;
