import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import WhyMeSection from "@/components/WhyMeSection";
import ProfessionalStandards from "@/components/ProfessionalStandards";
import WorkWithSection from "@/components/WorkWithSection";

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
      
      <WhyMeSection />
      <ProfessionalStandards />
      <WorkWithSection />
    </div>
  );
};

export default Index;
