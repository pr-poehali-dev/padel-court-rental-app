import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackButton from '@/components/BackButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const About = () => {
  const clubPhotos = [
    {
      url: 'https://cdn.poehali.dev/files/ресепшн2.jpg',
      alt: 'Ресепшн клуба'
    },
    {
      url: 'https://cdn.poehali.dev/files/зал1.jpg',
      alt: 'Падел корт'
    },
    {
      url: 'https://cdn.poehali.dev/files/ресепшн1.jpg',
      alt: 'Зона ресепшн'
    },
    {
      url: 'https://cdn.poehali.dev/files/29 (1).jpg',
      alt: 'Падел корт с цветными панелями'
    },
    {
      url: 'https://cdn.poehali.dev/files/28 (2).jpg',
      alt: 'Вид на корты'
    },
    {
      url: 'https://cdn.poehali.dev/files/24 (2).jpg',
      alt: 'Зона отдыха у кортов'
    },
    {
      url: 'https://cdn.poehali.dev/files/кафе5.jpg',
      alt: 'Coffee Shop ZVI'
    },
    {
      url: 'https://cdn.poehali.dev/files/кафе4.jpg',
      alt: 'Кафе в клубе'
    }
  ];

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
      
      <div className="container mx-auto px-4 pt-24 pb-2">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <BackButton />
          </div>
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-6xl font-bold text-accent mb-5 tracking-tight leading-tight">
              Это место — символ энергии,<br />ума и побед!
            </h1>
            <a href="https://www.fitness1c.ru/club/140c8d1f-aef1-42dc-943d-2f7e06d636a2" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-5 transition-all hover:scale-105">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать корт
              </Button>
            </a>
          </div>

          <Card className="mb-8 overflow-hidden animate-fade-in backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
            <CardContent className="p-6 md:p-8">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  В здании с историей, где <span className="font-bold">с 1930 года</span> ковали горячее железо и создавали двигатели. На территории легендарного <span className="font-bold">Завода Владимира Ильича</span>.
                </p>
                <p className="text-xl md:text-2xl text-accent leading-relaxed font-bold">
                  Теперь здесь куются горячие спортивные игры!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 animate-fade-in">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-2xl mx-auto"
            >
              <CarouselContent>
                {clubPhotos.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="border-white/20 bg-white/5 backdrop-blur-sm">
                        <CardContent className="flex aspect-video items-center justify-center p-2">
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white/10 hover:bg-white/20 text-white border-white/30" />
              <CarouselNext className="bg-white/10 hover:bg-white/20 text-white border-white/30" />
            </Carousel>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 text-center animate-fade-in">
              Преимущества нашего падел клуба
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <Card 
                  key={index}
                  className="p-5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/20 flex-shrink-0">
                      <Icon name={advantage.icon as any} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-accent mb-2 leading-tight">
                        {advantage.title}
                      </h3>
                      <p className="text-white/80 text-base leading-relaxed">
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
              <a href="https://www.fitness1c.ru/club/140c8d1f-aef1-42dc-943d-2f7e06d636a2" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-6 py-5">
                  <Icon name="Calendar" className="mr-2" size={18} />
                  Забронировать корт
                </Button>
              </a>
              <Link to="/courts">
                <Button size="lg" variant="outline" className="font-semibold text-base px-6 py-5 bg-white/10 hover:bg-white/20 text-white border-white/30">
                  <Icon name="Grid3x3" className="mr-2" size={18} />
                  Посмотреть корты
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-semibold text-base px-6 py-5 bg-white/10 hover:bg-white/20 text-white border-white/30">
                  <Icon name="Phone" className="mr-2" size={18} />
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