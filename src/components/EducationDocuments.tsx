import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import actCertificate from "/lovable-uploads/2e2084cf-d88a-4636-a05d-413ffb051b37.png";
import cbtCertificate from "/lovable-uploads/df2b9e29-7a4c-40a7-9b25-64f79564a099.png";
import diploma from "/lovable-uploads/23e33b3e-41ad-4d20-b7a0-160382f11a96.png";

const EducationDocuments = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const documents = [
    {
      id: "act",
      title: "ACT-терапия",
      description: "Терапия принятия и ответственности как метод развития психологической гибкости клиента",
      image: actCertificate,
      details: "200 часов • 2023"
    },
    {
      id: "cbt", 
      title: "КПП-терапия",
      description: "Современная когнитивно-поведенческая психотерапия",
      image: cbtCertificate,
      details: "144 ак. ч. • 2023"
    },
    {
      id: "diploma",
      title: "Диплом психолога",
      description: "Консультативная психология: эффективные стратегии практической психологической помощи",
      image: diploma,
      details: "1610 часов • 2023"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Образование
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Документы о профессиональной подготовке и повышении квалификации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {documents.map((doc) => (
            <Card key={doc.id} className="border-0 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 hover:shadow-gentle hover:scale-105">
              <CardContent className="p-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer group">
                      <div className="relative overflow-hidden rounded-lg mb-4 bg-white/80 shadow-sm">
                        <img 
                          src={doc.image}
                          alt={doc.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                            <span className="text-sm font-medium text-primary">Увеличить</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {doc.description}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {doc.details}
                      </p>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl w-full p-2 bg-black/95">
                    <div className="relative">
                      <img 
                        src={doc.image}
                        alt={doc.title}
                        className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationDocuments;