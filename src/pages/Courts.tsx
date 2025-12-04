import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

const Courts = () => {
  const courts = [
    {
      id: 1,
      name: 'Корт 1 - Премиум крытый',
      type: 'Крытый',
      features: ['Кондиционер', 'LED освещение', 'Душевые', 'Раздевалки'],
      price: 2000,
      available: true,
      image: 'https://cdn.poehali.dev/projects/a8b6f311-aa7e-42cb-b70d-c987efb9afa4/files/0c107f36-7781-4a84-9a7a-1c8b3dd79c76.jpg',
    },
    {
      id: 2,
      name: 'Корт 2 - Открытый',
      type: 'Открытый',
      features: ['Натуральное покрытие', 'Трибуны', 'Парковка', 'Кафе'],
      price: 1500,
      available: true,
      image: 'https://cdn.poehali.dev/projects/a8b6f311-aa7e-42cb-b70d-c987efb9afa4/files/0c107f36-7781-4a84-9a7a-1c8b3dd79c76.jpg',
    },
    {
      id: 3,
      name: 'Корт 3 - VIP зона',
      type: 'Крытый VIP',
      features: ['Приватная зона', 'Премиум оборудование', 'Персональный тренер', 'Лаунж-зона'],
      price: 3500,
      available: true,
      image: 'https://cdn.poehali.dev/projects/a8b6f311-aa7e-42cb-b70d-c987efb9afa4/files/0c107f36-7781-4a84-9a7a-1c8b3dd79c76.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Наши корты
            </h1>
            <p className="text-lg text-muted-foreground">
              Профессиональные корты для игры в Padel любого уровня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courts.map((court, index) => (
              <Card
                key={court.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={court.image}
                    alt={court.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-primary font-semibold">
                      {court.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{court.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      Удобства:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {court.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <Icon name="Check" size={12} className="mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Стоимость</p>
                      <p className="text-2xl font-bold text-accent">{court.price} ₽<span className="text-sm font-normal text-muted-foreground">/час</span></p>
                    </div>
                    <Link to="/booking">
                      <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                        <Icon name="Calendar" className="mr-2" size={18} />
                        Забронировать
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-muted rounded-2xl p-8 md:p-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Не знаете, какой корт выбрать?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Наши консультанты помогут подобрать идеальный корт для вашего уровня игры и предпочтений.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Связаться с нами
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'Award', title: 'Высокое качество' },
                  { icon: 'Shield', title: 'Безопасность' },
                  { icon: 'Zap', title: 'Современное оборудование' },
                  { icon: 'Heart', title: 'Для всей семьи' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background rounded-lg p-4 text-center">
                    <Icon name={item.icon as any} size={32} className="mx-auto mb-2 text-accent" />
                    <p className="font-semibold text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courts;
