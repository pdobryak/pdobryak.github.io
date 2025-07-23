import { Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking-form');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контактная информация */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Контакты
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:lena.romakhina@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>lena.romakhina@gmail.com</span>
              </a>
              <a 
                href="https://t.me/elena_romakhina" 
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Telegram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Информация о работе */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Формат работы
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Онлайн консультации</p>
              <p>Telegram, WhatsApp, Zoom</p>
              <p>Ответ в течение 24 часов</p>
            </div>
          </div>

          {/* Быстрые действия */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Записаться на приём
            </h3>
            <div className="space-y-3">
              <Button 
                onClick={scrollToBooking}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Заполнить форму
              </Button>
              <p className="text-sm text-muted-foreground">
                Или напишите напрямую в Telegram
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground">
              <p>&copy; 2024 Елена Ромахина. Все права защищены.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a 
                href="/certificates" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Документы об образовании
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;