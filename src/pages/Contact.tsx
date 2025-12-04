import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Заполните все обязательные поля');
      return;
    }

    toast.success('Сообщение отправлено!', {
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@padelclub.ru',
      link: 'mailto:info@padelclub.ru',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'Москва, ул. Спортивная, 10',
      link: 'https://maps.google.com',
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Ежедневно 8:00 - 23:00',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Контакты
            </h1>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MessageSquare" className="mr-2" size={24} />
                    Напишите нам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Телефон
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Сообщение *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Ваше сообщение..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
                      size="lg"
                    >
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={info.icon as any} size={24} className="text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-accent transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary text-white">
                <CardContent className="p-8 text-center">
                  <Icon name="Headphones" size={48} className="mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-2">Поддержка 24/7</h3>
                  <p className="text-white/90 mb-4">
                    Наша команда всегда готова ответить на ваши вопросы
                  </p>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                  >
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Онлайн чат
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Icon name="MapPin" className="mr-2 text-accent" size={20} />
                    Как нас найти
                  </h3>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Icon name="Map" size={48} className="mx-auto mb-2" />
                      <p>Карта загружается...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;