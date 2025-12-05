import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const About = () => {
  const advantages = [
    {
      icon: 'MapPin',
      title: 'Локация. Самый центр Москвы - Садовое кольцо',
      description: 'Улица без пробок. Удобно добираться из любой точки столицы.'
    },
    {
      icon: 'ParkingCircle',
      title: 'Парковка. Прямо у дверей клуба',
      description: 'Всегда свободная. Цена в 4 раза ниже общественной.'
    },
    {
      icon: 'Eye',
      title: 'Всегда хорошо видно мяч',
      description: 'Темный цвет потолков и синий цвет кортов максимально контрастны желтому мячу.'
    },
    {
      icon: 'ArrowUp',
      title: 'Очень высокие потолки 13 метров',
      description: 'Невозможно оттолкнуть мяч от крыши, даже делая свечу.'
    },
    {
      icon: 'Key',
      title: 'Возможность забронировать VIP-раздевалку',
      description: 'Только на себя или на свою компанию.'
    },
    {
      icon: 'Trophy',
      title: '4 корта с покрытием международного класса',
      description: 'Точный и быстрый отскок мяча.'
    }
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
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Это место — символ<br />энергии, ума и побед!
            </h1>
            <a href="#" className="inline-block">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-xl px-10 py-7 transition-all hover:scale-105 shadow-2xl">
                <Icon name="Calendar" className="mr-3" size={24} />
                Забронировать корт
              </Button>
            </a>
          </div>

          <Card className="mb-16 overflow-hidden animate-fade-in backdrop-blur-sm bg-white/95 border-0 shadow-2xl">
            <CardContent className="p-10 md:p-14">
              <div className="text-center max-w-4xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl text-primary leading-relaxed">
                  В здании с историей, где <span className="font-bold">с 1930 года</span> ковали горячее железо и создавали двигатели. На территории легендарного <span className="font-bold">Завода Владимира Ильича</span>.
                </p>
                <p className="text-2xl md:text-3xl text-accent leading-relaxed font-bold">
                  Теперь здесь куются горячие спортивные игры!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
              Преимущества нашего падел клуба
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/95 backdrop-blur-sm border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/15 flex-shrink-0">
                      <Icon name={advantage.icon as any} size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 leading-tight">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать корт
                </Button>
              </a>
              <Link to="/courts">
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
                  <Icon name="Grid3x3" className="mr-2" size={20} />
                  Посмотреть корты
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </Link>
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

export default About;
