import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import certificateAct from "@/assets/certificate-act.jpg";
import certificateCbt from "@/assets/certificate-cbt.jpg";
import diploma from "@/assets/diploma.jpg";

const Certificates = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      title: "Диплом о профессиональной переподготовке",
      subtitle: "Практический психолог и психолог-консультант",
      description: "1610 часов обучения в Институте прикладной психологии в социальной сфере",
      image: diploma,
      year: "2023"
    },
    {
      title: "Удостоверение о повышении квалификации",
      subtitle: "ACT-терапия (Терапия принятия и ответственности)",
      description: "200 часов обучения как метод развития психологической гибкости клиента",
      image: certificateAct,
      year: "2023"
    },
    {
      title: "Удостоверение о повышении квалификации", 
      subtitle: "Современная когнитивно-поведенческая психотерапия",
      description: "144 академических часа в Институте психотерапии и медицинской психологии",
      image: certificateCbt,
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            На главную
          </Button>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Документы об образовании
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Моя квалификация подтверждена официальными документами об образовании и повышении квалификации
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {certificates.map((cert, index) => (
            <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {cert.year}
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">
                      {cert.title}
                    </h2>
                    <h3 className="text-lg font-medium text-primary">
                      {cert.subtitle}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="max-w-full h-auto rounded-lg shadow-gentle border border-border hover:shadow-therapy transition-all duration-300"
                      style={{ maxHeight: '400px' }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-warm p-8 rounded-lg">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Непрерывное обучение
            </h3>
            <p className="text-muted-foreground mb-6">
              Регулярно прохожу дополнительные курсы и супервизии для повышения качества помощи клиентам
            </p>
            <Button 
              onClick={() => navigate('/')}
              variant="therapy"
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Certificates;