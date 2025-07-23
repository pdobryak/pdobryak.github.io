import { Button } from "@/components/ui/button";
import psychologistPhoto from "@/assets/psychologist-photo.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking-form');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Помогаю найти
                <span className="block text-primary">опору в себе</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Психолог, который прошла путь от клиента к специалисту. 
                Знаю, как это — искать поддержку и понимание.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">150+ часов личной терапии</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Доказательные подходы: ACT и КПТ</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Полная конфиденциальность</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToBooking}
                variant="therapy"
                size="lg"
                className="font-semibold"
              >
                Записаться на консультацию
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => {
                  const aboutElement = document.getElementById('about');
                  if (aboutElement) {
                    aboutElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Узнать больше
              </Button>
            </div>

            <div className="pt-6 space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-primary">Первичная консультация:</span> 750₽ (45-55 мин)
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-primary">Индивидуальная сессия:</span> 1500₽ (50-60 мин)
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-therapy rounded-3xl opacity-20 blur-lg"></div>
              <img
                src={psychologistPhoto}
                alt="Елена Ромахина, психолог"
                className="relative w-80 h-96 object-cover rounded-3xl shadow-therapy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;