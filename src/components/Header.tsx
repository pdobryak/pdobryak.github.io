import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { href: "#services", label: "Услуги" },
    { href: "#why-me", label: "Почему ко мне" },
    { href: "#work-with", label: "С чем работаю" },
    { href: "#education", label: "Образование" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <h1 className="text-xl font-heading font-bold text-foreground">
              Елена Ромахина
            </h1>
            <span className="text-sm text-muted-foreground hidden sm:block">
              Психолог
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button 
              key={item.href}
              onClick={() => handleNavigation(item.href)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <a 
          href="https://t.me/romabulochka"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex"
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            Записаться
          </Button>
        </a>

        {/* Mobile Menu */}
        <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Меню</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-6">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-lg font-medium hover:text-primary transition-colors py-2 text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <a 
                  href="https://t.me/romabulochka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                    Записаться
                  </Button>
                </a>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;