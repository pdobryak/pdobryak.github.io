import { Heart, Shield, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyMeSection = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Понимаю ваши сложности",
      points: [
        "Была на вашем месте - знаю, как это волнительно",
        "150+ часов личной терапии - чтобы лучше помогать вам"
      ]
    },
    {
      icon: Shield,
      title: "Профессионально",
      points: [
        "Работаю в доказательных подходах: ACT и КПТ",
        "Фокус на ваших реальных изменениях"
      ]
    },
    {
      icon: Lock,
      title: "Безопасно",
      points: [
        "Строгая конфиденциальность",
        "Чёткие профессиональные границы"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Почему ко мне?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Три главные причины, почему клиенты выбирают работу со мной
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {reason.title}
                </h3>
                
                <div className="space-y-3">
                  {reason.points.map((point, pointIndex) => (
                    <p key={pointIndex} className="text-muted-foreground leading-relaxed">
                      {point}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;