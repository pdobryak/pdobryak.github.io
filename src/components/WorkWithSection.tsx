import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WorkWithSection = () => {
  const issues = [
    "Поиск себя, своих целей и мотивации",
    "Непринятие себя",
    "Тревожное состояние, кризисные ситуации, панические атаки",
    "Профессиональное выгорание",
    "Сложности в отношениях",
    "Чувство потери опоры, себя",
    "Низкая самооценка",
    "Чувство одиночества"
  ];

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking-form');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work-with" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            С чем работаю
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Основные запросы, с которыми ко мне обращаются клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {issues.map((issue, index) => (
            <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <p className="text-lg text-foreground font-medium">{issue}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Не видите свой запрос? Это не значит, что я не смогу помочь. 
            Напишите мне — обсудим ваш случай индивидуально.
          </p>
          
          <Button 
            onClick={scrollToBooking}
            variant="therapy"
            size="lg"
            className="font-semibold"
          >
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithSection;