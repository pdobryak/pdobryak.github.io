
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCap, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EducationSection = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      title: "ACT-терапия",
      subtitle: "200 часов, НЦРДО",
      description: "Терапия принятия и ответственности как метод развития психологической гибкости",
      year: "2023",
      image: "/lovable-uploads/50337ced-e309-4902-aeba-747f3aed5c6f.png"
    },
    {
      title: "КПТ", 
      subtitle: "144 часа, СПб",
      description: "Современная когнитивно-поведенческая психотерапия",
      year: "2023",
      image: "/lovable-uploads/377f5e58-38a3-4cef-aa79-5777cfde313f.png"
    },
    {
      title: "Диплом",
      subtitle: "1610 часов, Москва", 
      description: "Консультативная психология и практическая психологическая помощь",
      year: "2023",
      image: "/lovable-uploads/79c9d27b-8ffb-49be-97f8-3e25ef863d68.png"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Образование
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Официальные документы о профессиональной подготовке и повышении квалификации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {cert.year}
                  </div>
                  
                  <div className="relative group">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-48 object-cover rounded-lg shadow-gentle border border-border transition-all duration-300"
                    />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                        <div className="relative">
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {cert.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/certificates')}
            variant="outline"
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Посмотреть все документы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
