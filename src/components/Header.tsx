import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking-form');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-heading font-bold text-foreground">
            Елена Ромахина
          </h1>
          <span className="text-sm text-muted-foreground hidden sm:block">
            Психолог
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#why-me" className="text-sm font-medium hover:text-primary transition-colors">
            Почему ко мне
          </a>
          <a href="#work-with" className="text-sm font-medium hover:text-primary transition-colors">
            С чем работаю
          </a>
          <a href="https://preview--zenith-path-guide.lovable.app/certificates" className="text-sm font-medium hover:text-primary transition-colors">
            Образование
          </a>
          <a href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Блог
          </a>
        </nav>

        <Button 
          onClick={scrollToBooking}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
        >
          Записаться
        </Button>
      </div>
    </header>
  );
};

export default Header;