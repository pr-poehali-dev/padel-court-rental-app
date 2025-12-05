import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackButton from '@/components/BackButton';

const Courts = () => {
  const courts = [
    {
      id: 1,
      name: 'PANORAMIC',
      type: 'Крытый',
      features: ['Кондиционер', 'LED освещение', 'Душевые', 'Раздевалки'],
      available: true,
      image: 'https://cdn.poehali.dev/files/8e9d1e41-b64b-48fd-a525-825cfcf5005a.png',
    },
    {
      id: 2,
      name: 'ULTRA PANORAMIC',
      type: 'Крытый',
      features: ['Кондиционер', 'LED освещение', 'Душевые', 'Раздевалки', 'Панорамный вид'],
      available: true,
      image: 'https://cdn.poehali.dev/files/8e9d1e41-b64b-48fd-a525-825cfcf5005a.png',
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      <div className="relative z-10">
        <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-2">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <BackButton />
          </div>
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Наши корты
            </h1>
            <p className="text-xl text-white/90">
              Профессиональные корты для игры в Padel любого уровня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {courts.map((court, index) => (
              <Card
                key={court.id}
                className="overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={court.image}
                    alt={court.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-accent text-primary font-semibold text-sm px-3 py-1 shadow-lg">
                      {court.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-white">{court.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-white/70 mb-3">
                      Удобства:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {court.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm bg-white/5 border-white/20 text-white/90">
                          <Icon name="Check" size={14} className="mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center pt-4 border-t border-white/20">
                    <a href="#" className="w-full">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-6 py-5">
                        <Icon name="Calendar" className="mr-2" size={18} />
                        Забронировать
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 md:p-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Не знаете, какой корт выбрать?
                </h2>
                <p className="text-white/80 mb-6 text-lg">
                  Наши консультанты помогут подобрать идеальный корт для вашего уровня игры и предпочтений.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6">
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
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors">
                    <Icon name={item.icon as any} size={36} className="mx-auto mb-3 text-accent" />
                    <p className="font-semibold text-white text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        <WhatsAppButton />
        <Footer />
      </div>
    </div>
  );
};

export default Courts;