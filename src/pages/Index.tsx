import Header from "@/components/Header";
import MainSections from "@/components/MainSections";
import EducationDocuments from "@/components/EducationDocuments";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MainSections />
      <EducationDocuments />
      <Footer />
    </div>
  );
};

export default Index;
