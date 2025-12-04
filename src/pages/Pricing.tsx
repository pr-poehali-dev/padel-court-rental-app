import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Разовое посещение',
      price: 2000,
      period: 'час',
      description: 'Идеально для пробного визита',
      features: [
        'Доступ к любому корту',
        'Стандартное время игры - 1 час',
        'Базовое оборудование',
        'Доступ к раздевалкам',
      ],
      popular: false,
      icon: 'Clock',
    },
    {
      name: 'Абонемент 10 часов',
      price: 17000,
      period: '10 часов',
      description: 'Выгодное предложение для регулярных игр',
      features: [
        'Скидка 15% от разовой цены',
        'Приоритетное бронирование',
        'Все корты доступны',
        'Персональный шкафчик',
        'Срок действия - 3 месяца',
      ],
      popular: true,
      icon: 'Zap',
    },
    {
      name: 'VIP абонемент',
      price: 45000,
      period: 'месяц',
      description: 'Безлимитный доступ премиум класса',
      features: [
        'Безлимитное посещение',
        'VIP корт в приоритете',
        'Персональный тренер (4 занятия)',
        'Доступ в лаунж-зону',
        'Бесплатная парковка',
        'Скидка на инвентарь 20%',
      ],
      popular: false,
      icon: 'Crown',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/a8b6f311-aa7e-42cb-b70d-c987efb9afa4/files/6061aacc-ad35-4b83-8fcd-61f2cf44d0bc.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
      </div>
      <div className="relative z-10">
        <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Тарифы
            </h1>
            <p className="text-lg text-muted-foreground">
              Выберите подходящий вариант для вашей игры
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in ${
                  plan.popular ? 'ring-2 ring-accent shadow-xl scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={plan.icon as any} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-accent">
                      {plan.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Icon
                          name="Check"
                          size={18}
                          className="text-accent mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/booking" className="block mt-6">
                    <Button
                      className={`w-full font-semibold ${
                        plan.popular
                          ? 'bg-accent hover:bg-accent/90 text-primary'
                          : 'bg-primary hover:bg-primary/90 text-white'
                      }`}
                      size="lg"
                    >
                      <Icon name="ArrowRight" className="mr-2" size={18} />
                      Выбрать тариф
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <Card className="bg-primary text-white">
              <CardContent className="p-8">
                <Icon name="Users" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Корпоративные тарифы</h3>
                <p className="text-white/90 mb-6">
                  Специальные условия для компаний. Организуйте корпоративные турниры и тимбилдинги на наших кортах.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Узнать подробнее
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Icon name="Gift" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Подарочные сертификаты</h3>
                <p className="text-muted-foreground mb-6">
                  Подарите своим близким незабываемые впечатления. Сертификаты на любую сумму с красивым оформлением.
                </p>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="font-semibold">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Заказать сертификат
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-muted rounded-2xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Остались вопросы о тарифах?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Наши менеджеры помогут выбрать оптимальный тариф и ответят на все ваши вопросы
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </div>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;