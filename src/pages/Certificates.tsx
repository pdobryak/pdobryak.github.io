import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, GraduationCap, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import certificateAct from "@/assets/certificate-act.jpg";
import certificateCbt from "@/assets/certificate-cbt.jpg";
import diploma from "@/assets/diploma.jpg";

const Certificates = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      title: "Диплом о профессиональной переподготовке",
      subtitle: "Консультативная психология; эффективные стратегии практической психологической помощи",
      description: "1610 часов обучения в АНО ДПО «Институт прикладной психологии в социальной сфере»",
      details: [
        "Практический психолог и дополнительной квалификации психолог-консультант",
        "Регистрационный номер: 978",
        "Дата выдачи: 20.03.2023",
        "Город: Москва"
      ],
      registrationNumber: "772419119714",
      image: diploma,
      year: "2023"
    },
    {
      title: "Удостоверение о повышении квалификации",
      subtitle: "Терапия принятия и ответственности (ACT-терапия) как метод развития психологической гибкости клиента",
      description: "200 часов обучения в ООО «НЦРДО» (Национальный центральный институт развития дополнительного образования)",
      details: [
        "Лицензия № Л035-01298-77/00180383",
        "Регистрационный номер: 2798-у",
        "Дата выдачи: 21 декабря 2023 года",
        "Город: Москва"
      ],
      registrationNumber: "772420159090",
      image: certificateAct,
      year: "2023"
    },
    {
      title: "Удостоверение о повышении квалификации", 
      subtitle: "Современная когнитивно-поведенческая психотерапия",
      description: "144 академических часа в Институте психотерапии и медицинской психологии им. Б.Д. Карвасарского",
      details: [
        "Регистрационный номер: С23-2322",
        "Дата выдачи: 18.06.2023",
        "Город: Санкт-Петербург",
        "Базовые лицензии № 0098 Комитета по образованию Санкт-Петербурга"
      ],
      registrationNumber: "782700327004",
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
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                   <div className="space-y-6">
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
                     
                     <div className="space-y-2">
                       <h4 className="font-semibold text-foreground">Детали документа:</h4>
                       <ul className="space-y-1">
                         {cert.details.map((detail, idx) => (
                           <li key={idx} className="text-sm text-muted-foreground flex items-start">
                             <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                             {detail}
                           </li>
                         ))}
                       </ul>
                     </div>
                     
                     <div className="bg-muted/30 p-4 rounded-lg">
                       <p className="text-sm text-muted-foreground">
                         <strong>Номер документа:</strong> {cert.registrationNumber}
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex flex-col items-center space-y-4">
                     <div className="relative group">
                       <img 
                         src={cert.image} 
                         alt={cert.title}
                         className="max-w-full h-auto rounded-lg shadow-gentle border border-border transition-all duration-300"
                         style={{ maxHeight: '400px' }}
                       />
                       <Dialog>
                         <DialogTrigger asChild>
                           <Button
                             variant="secondary"
                             size="sm"
                             className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           >
                             <Eye className="w-4 h-4 mr-2" />
                             Увеличить
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
                     <Button
                       variant="outline"
                       size="sm"
                       asChild
                     >
                       <Dialog>
                         <DialogTrigger>
                           <Eye className="w-4 h-4 mr-2" />
                           Просмотреть в полном размере
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
                     </Button>
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