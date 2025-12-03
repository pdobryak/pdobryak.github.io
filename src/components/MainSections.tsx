import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Shield, Lock, CheckCircle, GraduationCap, Users, Brain, Stethoscope, TrendingUp } from "lucide-react";
import psychologistPhoto from "@/assets/psychologist-photo-final.jpg";
const MainSections = () => {
  // Hero Section
  const HeroSection = () => <section className="py-20 px-4 bg-gradient-warm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
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
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Понимаю вас на личном опыте: 150+ часов моей терапии помогают быть более чуткой и эффективной в помощи вам.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Работаю на результат: Использую научно-доказанные методы КПТ, которые дают конкретные инструменты для управления эмоциями.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Полная конфиденциальность: Ваши переживания останутся между нами. Строго соблюдаю профессиональную этику.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Постоянно расту как специалист: Дипломированный психолог, углубляю знания в магистратуре по клинической психологии, чтобы наша работа была еще качественнее.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://t.me/romabulochka" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="therapy" size="lg" className="font-semibold">
                  Записаться на консультацию
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-therapy rounded-3xl opacity-20 blur-lg"></div>
              <img src={psychologistPhoto} alt="Елена Ромахина, психолог" className="relative w-80 h-96 object-cover rounded-3xl shadow-therapy" />
            </div>
          </div>
        </div>
      </div>
    </section>;

  // Services Section
  const ServicesSection = () => {
    const services = [{
      icon: Heart,
      title: "Первичная консультация",
      duration: "45-55 мин",
      price: "750₽",
      description: "Специальная цена и продолжительность - потому что понимаю, как важно найти своего психолога",
      featured: true
    }, {
      icon: MessageCircle,
      title: "Индивидуальная консультация",
      duration: "50-60 мин",
      price: "2000₽",
      description: "Глубокая работа с вашим запросом, реальные инструменты",
      featured: false
    }];
    return <section id="services" className="py-20 px-4 bg-background">
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
            {services.map((service, index) => <Card key={index} className={`shadow-gentle hover:shadow-therapy transition-all duration-300 border-0 ${service.featured ? 'bg-gradient-warm' : 'bg-card'}`}>
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
                  
                  <a href="https://t.me/romabulochka" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="therapy" className="w-full">
                      Записаться
                    </Button>
                  </a>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>;
  };

  // Why Me Section
  const WhyMeSection = () => {
    const reasons = [{
      icon: Heart,
      title: "Глубокое понимание, а не просто диалог",
      description: "Я знаю, каково это — сидеть «по ту сторону» и искать ответы. Мои 150+ часов личной терапии — это не просто цифра, а прожитый опыт, который помогает мне тоньше чувствовать ваши переживания и быть по-настоящему эмпатичным и бережным специалистом."
    }, {
      icon: Shield,
      title: "Профессионализм, который дает реальные инструменты",
      description: "Я не предлагаю «просто поговорить». Мы работаем в рамках когнитивно-поведенческой терапии (КПТ) — подхода, эффективность которого подтверждена наукой. Наша цель — не только исследовать чувства, но и дать вам практические стратегии для управления тревогой, мыслями и поведением, которые останутся с вами навсегда."
    }, {
      icon: Lock,
      title: "Абсолютная безопасность и уважение к вашим границам",
      description: "Конфиденциальность и четкие профессиональные рамки — это не просто правила, а основа доверия. Вы можете быть уверены, что любая ваша тема будет встречена с уважением и останется между нами. Здесь вы в безопасности."
    }];
    return <section id="why-me" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Мой подход к работе
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <reason.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>;
  };

  // Professional Standards Section
  const ProfessionalStandards = () => {
    const standards = [{
      icon: GraduationCap,
      title: "Образование",
      items: ["Диплом переподготовки по психологии", "Неполное высшее по клинической психологии (в процессе)"]
    }, {
      icon: Users,
      title: "Супервизии",
      items: ["Регулярное обсуждение сложных случаев с экспертами", "30+ часов супервизий"]
    }, {
      icon: Brain,
      title: "Личная терапия",
      items: ["150+ часов собственной терапии", "Чтобы оставаться для вас объективным специалистом"]
    }, {
      icon: Stethoscope,
      title: "Методы",
      items: ["КПТ (когнитивно-поведенческая терапия)", "Научно обоснованные инструменты работы с мыслями и поведением"]
    }, {
      icon: TrendingUp,
      title: "Постоянное обучение и развитие",
      items: ["Постоянное обучение и развитие — мой ключевой принцип."]
    }];
    return <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <CheckCircle className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Профессиональные стандарты
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Моя квалификация и подход к работе соответствуют высоким профессиональным стандартам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {standards.map((standard, index) => <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
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
                    {standard.items.map((item, itemIndex) => <p key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </p>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Все сертификаты и дипломы доступны для ознакомления в разделе{" "}
              <a href="#education" className="text-primary hover:text-primary/80 transition-colors duration-200 underline">
                "Образование"
              </a>
            </p>
          </div>
        </div>
      </section>;
  };

  // Work With Section
  const WorkWithSection = () => {
    const issues = ["Поиск себя, своих целей и мотивации", "Непринятие себя", "Тревожное состояние, кризисные ситуации, панические атаки", "Профессиональное выгорание", "Сложности в отношениях", "Чувство потери опоры, себя", "Низкая самооценка", "Чувство одиночества"];
    return <section id="work-with" className="py-20 px-4 bg-background">
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
            {issues.map((issue, index) => <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-lg text-foreground font-medium">{issue}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Не видите свой запрос? Это не значит, что я не смогу помочь. 
              Напишите мне — обсудим ваш случай индивидуально.
            </p>
            
            <a href="https://t.me/romabulochka" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="therapy" size="lg">
                Записаться на консультацию
              </Button>
            </a>
          </div>
        </div>
      </section>;
  };
  return <>
      <HeroSection />
      <ServicesSection />
      <WhyMeSection />
      <ProfessionalStandards />
      <WorkWithSection />
    </>;
};
export default MainSections;