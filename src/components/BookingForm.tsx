import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    telegram: "",
    request: "",
    contactMethods: {
      telegram: false,
      email: false,
      phone: false
    }
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите ваше имя",
        variant: "destructive"
      });
      return;
    }

    // Here would be the actual form submission logic
    toast({
      title: "Спасибо за доверие!",
      description: "Подготовьте, пожалуйста, ваш запрос подробнее - свяжусь с вами в течение 24 часов",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      telegram: "",
      request: "",
      contactMethods: {
        telegram: false,
        email: false,
        phone: false
      }
    });
  };

  const handleContactMethodChange = (method: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      contactMethods: {
        ...prev.contactMethods,
        [method]: checked
      }
    }));
  };

  return (
    <Card id="booking-form" className="w-full max-w-2xl mx-auto shadow-gentle">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-heading font-bold text-foreground">
          Записаться на приём
        </CardTitle>
        <p className="text-muted-foreground">
          Заполните форму - я свяжусь с вами для уточнения деталей
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Имя <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Как к вам обращаться?"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Телефон
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+7 (xxx) xxx-xx-xx"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telegram" className="text-sm font-medium">
              Telegram/VK (логин)
            </Label>
            <Input
              id="telegram"
              value={formData.telegram}
              onChange={(e) => setFormData(prev => ({ ...prev, telegram: e.target.value }))}
              placeholder="@username или ссылка на профиль"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="request" className="text-sm font-medium">
              Ваш запрос
            </Label>
            <Textarea
              id="request"
              value={formData.request}
              onChange={(e) => setFormData(prev => ({ ...prev, request: e.target.value }))}
              placeholder="Коротко опишите, с чем хотите поработать"
              rows={4}
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Удобный способ связи
            </Label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="contact-telegram"
                  checked={formData.contactMethods.telegram}
                  onCheckedChange={(checked) => 
                    handleContactMethodChange("telegram", checked as boolean)
                  }
                />
                <Label htmlFor="contact-telegram" className="text-sm">
                  Telegram
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="contact-email"
                  checked={formData.contactMethods.email}
                  onCheckedChange={(checked) => 
                    handleContactMethodChange("email", checked as boolean)
                  }
                />
                <Label htmlFor="contact-email" className="text-sm">
                  Email
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="contact-phone"
                  checked={formData.contactMethods.phone}
                  onCheckedChange={(checked) => 
                    handleContactMethodChange("phone", checked as boolean)
                  }
                />
                <Label htmlFor="contact-phone" className="text-sm">
                  Звонок
                </Label>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3"
          >
            Отправить запрос
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a href="https://1d216603-515c-4e5c-8631-78476b658f7b.lovableproject.com/privacy" className="text-primary hover:underline">
              политикой конфиденциальности
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;