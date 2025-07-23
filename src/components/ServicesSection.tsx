import { Heart, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Первичная консультация",
      duration: "45-55 мин",
      price: "750₽",
      description: "Специальная цена и продолжительность - потому что понимаю, как важно найти своего психолога",
      featured: true
    },
    {
      icon: MessageCircle,
      title: "Индивидуальная консультация",
      duration: "50-60 мин", 
      price: "1500₽",
      description: "Глубокая работа с вашим запросом",
      featured: false
    }
  ];

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking-form');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Услуги
          </h2>
          <p className="text-xl text-muted-foreground">
            Чётко и прозрачно о стоимости и формате работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`shadow-gentle hover:shadow-therapy transition-all duration-300 border-0 ${
                service.featured ? 'bg-gradient-warm' : 'bg-card'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <div className="text-lg font-semibold text-muted-foreground mb-2">
                  {service.duration}
                </div>
                
                <div className="text-3xl font-heading font-bold text-primary mb-4">
                  {service.price}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Button 
                  onClick={scrollToBooking}
                  variant={service.featured ? "therapy" : "default"}
                  className="w-full"
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;