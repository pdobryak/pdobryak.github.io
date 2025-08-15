
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import ServicesSection from "@/components/ServicesSection";
import WhyMeSection from "@/components/WhyMeSection";
import ProfessionalStandards from "@/components/ProfessionalStandards";
import WorkWithSection from "@/components/WorkWithSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <div className="py-20 px-4 bg-gradient-warm">
        <div className="container mx-auto">
          <BookingForm />
        </div>
      </div>
      
      <ServicesSection />
      <WhyMeSection />
      <ProfessionalStandards />
      <WorkWithSection />
      <EducationSection />
      <Footer />
    </div>
  );
};

export default Index;
