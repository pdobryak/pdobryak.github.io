import { CheckCircle, GraduationCap, Users, Brain, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProfessionalStandards = () => {
  const standards = [
    {
      icon: GraduationCap,
      title: "Образование",
      items: [
        "Диплом переподготовки по психологии",
        "Неполное высшее по клинической психологии (в процессе)"
      ]
    },
    {
      icon: Users,
      title: "Супервизии",
      items: [
        "Регулярное обсуждение сложных случаев с экспертами",
        "30+ часов супервизий"
      ]
    },
    {
      icon: Brain,
      title: "Личная терапия",
      items: [
        "150+ часов собственной терапии",
        "Чтобы оставаться для вас объективным специалистом"
      ]
    },
    {
      icon: Stethoscope,
      title: "Методы",
      items: [
        "ACT (терапия принятия и ответственности)",
        "КПТ (работа с мыслями и поведением)"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <CheckCircle className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Профессиональные стандарты
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Моя квалификация и подход к работе соответствуют высоким профессиональным стандартам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((standard, index) => (
            <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <standard.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {standard.title}
                </h3>
                
                <div className="space-y-2">
                  {standard.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Все сертификаты и дипломы доступны для ознакомления
          </p>
          <a 
            href="/certificates" 
            className="text-primary hover:text-primary/80 underline font-medium"
          >
            Посмотреть документы об образовании
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalStandards;