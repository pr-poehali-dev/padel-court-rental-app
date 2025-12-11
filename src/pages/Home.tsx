import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TermsModal from '@/components/TermsModal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Home = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  const handleBookingClick = (url: string) => {
    const termsAccepted = localStorage.getItem('zvi_terms_accepted');
    if (termsAccepted) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setPendingUrl(url);
      setShowTerms(true);
    }
  };

  const handleTermsAccept = () => {
    setShowTerms(false);
    if (pendingUrl) {
      window.open(pendingUrl, '_blank', 'noopener,noreferrer');
      setPendingUrl(null);
    }
  };

  const handleTermsDecline = () => {
    setShowTerms(false);
    setPendingUrl(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clubPhotos = [
    { url: 'https://cdn.poehali.dev/files/ресепшн2.jpg', alt: 'Ресепшн клуба' },
    { url: 'https://cdn.poehali.dev/files/зал1.jpg', alt: 'Падел корт' },
    { url: 'https://cdn.poehali.dev/files/ресепшн1.jpg', alt: 'Зона ресепшн' },
    { url: 'https://cdn.poehali.dev/files/29 (1).jpg', alt: 'Падел корт с цветными панелями' },
    { url: 'https://cdn.poehali.dev/files/28 (2).jpg', alt: 'Вид на корты' },
    { url: 'https://cdn.poehali.dev/files/24 (2).jpg', alt: 'Зона отдыха у кортов' },
    { url: 'https://cdn.poehali.dev/files/кафе5.jpg', alt: 'Coffee Shop ZVI' },
    { url: 'https://cdn.poehali.dev/files/кафе4.jpg', alt: 'Кафе в клубе' },
    { url: 'https://cdn.poehali.dev/files/ресепшен0 копия.jpg', alt: 'Входная зона клуба' },
    { url: 'https://cdn.poehali.dev/files/кафе3.jpg', alt: 'Кафе с видом на корты' },
    { url: 'https://cdn.poehali.dev/files/кафе2.jpg', alt: 'Зона отдыха Coffee Shop ZVI' },
    { url: 'https://cdn.poehali.dev/files/25 (1).jpg', alt: 'Раздевалка клуба' },
    { url: 'https://cdn.poehali.dev/files/1кафе.jpg', alt: 'Обеденная зона кафе' },
    { url: 'https://cdn.poehali.dev/files/18 (1).jpg', alt: 'Кафе с видом на корты' },
    { url: 'https://cdn.poehali.dev/files/21 (2).jpg', alt: 'Просторная зона кафе' }
  ];

  const advantages = [
    { icon: 'MapPin', title: 'Локация. Самый центр Москвы - Садовое кольцо', description: 'Улица без пробок. Удобно добираться из любой точки столицы.' },
    { icon: 'ParkingCircle', title: 'Парковка. Прямо у дверей клуба', description: 'Всегда свободная. Цена в 4 раза ниже общественной.' },
    { icon: 'Eye', title: 'Всегда хорошо видно мяч', description: 'Темный цвет потолков и синий цвет кортов максимально контрастны желтому мячу.' },
    { icon: 'ArrowUp', title: 'Очень высокие потолки 13 метров', description: 'Невозможно оттолкнуть мяч от крыши, даже делая свечу.' },
    { icon: 'Key', title: 'Возможность забронировать VIP-раздевалку', description: 'Только на себя или на свою компанию.' },
    { icon: 'Trophy', title: '4 корта с покрытием международного класса', description: 'Точный и быстрый отскок мяча.' }
  ];

  const courts = [
    { id: 1, name: 'PANORAMIC', type: 'Крытый', features: ['Кондиционер', 'LED освещение', 'Душевые', 'Раздевалки'], image: 'https://cdn.poehali.dev/files/29 (1).jpg' },
    { id: 2, name: 'ULTRA PANORAMIC', type: 'Крытый', features: ['Кондиционер', 'LED освещение', 'Душевые', 'Раздевалки', 'Панорамный вид'], image: 'https://cdn.poehali.dev/files/зал1.jpg' }
  ];

  const pricingCourts = [
    { name: 'PANORAMIC', price: 6000, icon: 'Grid3x3' },
    { name: 'ULTRA PANORAMIC', price: 7000, icon: 'Maximize2', popular: true }
  ];

  const training = [
    { name: 'ПЕРСОНАЛЬНАЯ ТРЕНИРОВКА', price: 10000, icon: 'User', description: null },
    { name: 'СПЛИТ ТРЕНИРОВКА', price: 11000, icon: 'Users', description: '3-4 человека' },
    { name: 'МИНИ-ГРУППЫ', price: 4000, icon: 'UserPlus', description: null },
    { name: 'ОТКРЫТАЯ ТРЕНИРОВКА ДЛЯ НОВИЧКОВ ПАДЕЛА', price: 0, icon: 'Heart', description: null, free: true }
  ];

  const basicRules = [
    { icon: 'Users', title: 'Формат игры', description: 'Падел — парная игра 2 на 2. Корт меньше теннисного, окружен стеклянными стенами и сеткой.' },
    { icon: 'Circle', title: 'Подача', description: 'Подача выполняется снизу, мяч должен отскочить от земли перед ударом. Подающий стоит за линией подачи.' },
    { icon: 'Zap', title: 'Использование стен', description: 'Мяч может отскакивать от стен после касания корта. Это делает игру динамичной и непредсказуемой!' },
    { icon: 'Target', title: 'Счет', description: 'Система счета как в теннисе: 15, 30, 40, гейм. Матч играется до 2 выигранных сетов.' }
  ];

  const equipmentItems = [
    { icon: 'Hand', title: 'Ракетка', description: 'Специальная ракетка для падела с перфорированной поверхностью, короче теннисной' },
    { icon: 'CircleDot', title: 'Мяч', description: 'Похож на теннисный, но с меньшим давлением для правильного отскока' },
    { icon: 'Shirt', title: 'Одежда', description: 'Удобная спортивная форма и кроссовки с нескользящей подошвой' }
  ];

  const tips = [
    'Играйте в команде — падел требует постоянной коммуникации с партнером',
    'Используйте стены в свою пользу — они ваши союзники',
    'Контролируйте центр корта — это ключевая позиция',
    'Не бойтесь ошибок — падел учит быстро адаптироваться',
    'Следите за позицией соперников и ищите свободные зоны'
  ];

  const contactInfo = [
    { icon: 'Phone', title: 'Телефоны', items: [{ content: '+7 495 363-21-00', link: 'tel:+74953632100' }, { content: '+7 495 363-38-38', link: 'tel:+74953633838' }] },
    { icon: 'MapPin', title: 'Адрес', items: [{ content: 'г. Москва, Партийный пер., дом 1 корп.6', link: 'https://yandex.ru/maps/?text=Москва, Партийный пер., дом 1 корп.6' }] },
    { icon: 'Clock', title: 'Режим работы', items: [{ content: 'Ежедневно 8:00 - 23:00', link: null }] }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="hero" className="relative pt-16 min-h-screen flex flex-col justify-between">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-8 md:pt-16 flex-grow flex items-center">
          <div className="max-w-4xl mx-auto w-full text-center">
            <div className="w-full animate-fade-in" style={{ animationDelay: '0ms' }}>
              <h1 className="font-black leading-tight tracking-tighter mb-6">
                <span className="block text-3xl md:text-5xl lg:text-7xl bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(218,165,32,0.5)] mb-2">
                  САМЫЙ ЦЕНТРАЛЬНЫЙ
                </span>
                <span className="block text-2xl md:text-4xl lg:text-5xl text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] font-extrabold">
                  ПАДЕЛ КЛУБ СТОЛИЦЫ
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
                Партийный переулок, 1к6 • Ежедневно 8:00 - 23:00
              </p>
            </div>
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '150ms' }}>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg md:text-xl px-8 py-4 transition-all hover:scale-105"
                onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
              >
                Забронировать корт
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-6xl font-bold text-black mb-5 tracking-tight leading-tight">
              Это место — символ энергии,<br />ума и побед!
            </h2>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-5 transition-all hover:scale-105"
              onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать корт
            </Button>
          </div>

          <Card className="mb-8 overflow-hidden animate-fade-in backdrop-blur-md bg-white/10 shadow-2xl border-0">
            <CardContent className="p-6 md:p-8">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  В здании с историей, где <span className="font-bold">с 1930 года</span> ковали горячее железо и создавали двигатели. На территории легендарного <span className="font-bold">Завода Владимира Ильича</span>.
                </p>
                <p className="text-xl md:text-2xl text-black leading-relaxed font-bold">
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
                      <Card className="bg-white/5 backdrop-blur-sm border-0">
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
              <CarouselPrevious className="bg-white/10 hover:bg-white/20 text-white" />
              <CarouselNext className="bg-white/10 hover:bg-white/20 text-white" />
            </Carousel>
          </div>

          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center animate-fade-in">
              Преимущества нашего падел клуба
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <Card 
                  key={index}
                  className="p-5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/20 flex-shrink-0">
                      <Icon name={advantage.icon as any} size={24} className="text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-black mb-2 leading-tight">
                        {advantage.title}
                      </h4>
                      <p className="text-white/80 text-base leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="courts" className="py-20 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-black">Наши корты</span>
            </h2>
            <p className="text-lg text-white/90">
              Профессиональные корты для игры в Padel любого уровня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {courts.map((court, index) => (
              <Card
                key={court.id}
                className="overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={court.image}
                    alt={court.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <Badge className="bg-accent text-primary font-bold text-sm px-4 py-1.5 shadow-xl border-2 border-primary">
                      {court.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-black">{court.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 pt-0">
                  <div>
                    <p className="text-xs font-semibold text-white/70 mb-2">
                      Удобства:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {court.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-white/5 border-white/20 text-white/90">
                          <Icon name="Check" size={12} className="mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center pt-3 border-t border-white/20">
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-sm px-4 py-4"
                      onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                    >
                      <Icon name="Calendar" className="mr-2" size={16} />
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block">
              <h2 className="text-5xl md:text-7xl font-bold text-black mb-4 tracking-tight relative">
                Тарифы
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-white/80 mt-8 font-light">
              Выберите подходящий вариант для вашей игры
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block relative">
                <h3 className="text-3xl md:text-4xl font-bold text-black relative z-10">
                  Аренда кортов
                </h3>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingCourts.map((court, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md hover:border-accent/50 group border-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {court.popular && (
                    <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-4 py-2 rounded-bl-xl">
                      ПОПУЛЯРНЫЙ
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                      <Icon name={court.icon as any} size={28} className="text-black group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-black font-bold">{court.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-white">
                        {court.price.toLocaleString('ru-RU')} ₽
                      </span>
                      <span className="text-white/80 ml-1 text-base">/ час</span>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <Button
                      className="w-full font-semibold text-base py-4 bg-accent hover:bg-accent/90 text-primary"
                      onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                    >
                      <Icon name="Calendar" className="mr-2" size={18} />
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block relative">
                <h3 className="text-3xl md:text-4xl font-bold text-black relative z-10">
                  Стоимость тренировок с нашими тренерами
                </h3>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {training.map((item, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md hover:border-accent/50 group border-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {item.free && (
                    <div className="absolute top-0 right-0 bg-green-400 text-primary text-xs font-bold px-4 py-2 rounded-bl-xl">
                      БЕСПЛАТНО
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                      <Icon name={item.icon as any} size={28} className="text-black group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-lg mb-2 text-black font-bold leading-tight">
                      {item.name}
                    </CardTitle>
                    {item.description && (
                      <p className="text-white/70 text-sm">{item.description}</p>
                    )}
                    <div className="mt-2">
                      {item.free ? (
                        <span className="text-3xl font-bold text-green-400">
                          Бесплатно!
                        </span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold text-white">
                            {item.price.toLocaleString('ru-RU')} ₽
                          </span>
                          <span className="text-white/80 ml-1 text-base">/ час</span>
                        </>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <Button
                      className="w-full font-semibold text-base py-4 bg-accent hover:bg-accent/90 text-primary"
                      onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                    >
                      <Icon name="Calendar" className="mr-2" size={18} />
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-3 tracking-tight relative">
                Правила падела
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h2>
            </div>
            <p className="text-lg md:text-xl text-white/80 mt-4 font-light max-w-2xl mx-auto">
              Падел — это микс тенниса и сквоша. Динамичная игра, доступная для новичков и увлекательная для профессионалов
            </p>
          </div>

          <Card className="mb-8 p-6 md:p-8 animate-fade-in bg-white/10 backdrop-blur-md shadow-2xl hover:shadow-2xl transition-all duration-300 border-0">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
              Что такое падел?
            </h3>
            <p className="text-lg text-white/80 text-center max-w-3xl mx-auto">
              Падел (Padel) — это ракеточный вид спорта, который сочетает элементы тенниса и сквоша. 
              Игра проходит на корте, окруженном стеклянными стенами, что делает её невероятно динамичной. 
              Научиться играть можно за одну тренировку, а совершенствоваться — всю жизнь!
            </p>
          </Card>

          <div className="mb-8">
            <div className="text-center mb-6 animate-fade-in">
              <div className="inline-block relative">
                <h3 className="text-2xl md:text-3xl font-bold text-black relative z-10">
                  Основные правила
                </h3>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {basicRules.map((rule, index) => (
                <Card 
                  key={index} 
                  className="p-5 hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md hover:border-accent/50 group border-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/20 flex-shrink-0 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                      <Icon name={rule.icon as any} size={24} className="text-black group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{rule.title}</h4>
                      <p className="text-white/80 text-base">{rule.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="text-center mb-6 animate-fade-in">
              <div className="inline-block relative">
                <h3 className="text-2xl md:text-3xl font-bold text-black relative z-10">
                  Что нужно для игры
                </h3>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {equipmentItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="text-center p-5 hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md border-0 hover:border-accent/50 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-4 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon name={item.icon as any} size={30} className="text-black group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/80 text-base">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="text-center text-white/80 mt-4 text-lg animate-fade-in">
              В клубе ЗВИ вы можете взять всё необходимое оборудование в аренду
            </p>
          </div>

          <Card className="mb-8 p-6 md:p-8 animate-fade-in bg-white/10 backdrop-blur-md shadow-2xl hover:shadow-2xl transition-all duration-300 border-0">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
              Советы начинающим
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-black flex-shrink-0 mt-1" />
                  <p className="text-white/80 text-base">{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-3 tracking-tight relative">
                Контакты
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h2>
            </div>
            <p className="text-lg text-white/80 mt-4 font-light">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md hover:border-accent/50 group border-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-5 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-2xl mb-3 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon name={info.icon as any} size={24} className="text-black group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-black">{info.title}</h3>
                  <div className="space-y-1">
                    {info.items.map((item, idx) => (
                      <div key={idx}>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-white/80 hover:text-black transition-colors font-medium text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-white/80 font-medium text-sm">{item.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-6 animate-fade-in bg-white/10 backdrop-blur-md hover:shadow-2xl transition-all duration-300 border-0">
            <CardContent className="p-5">
              <h3 className="font-bold text-xl mb-4 flex items-center justify-center text-black">
                <Icon name="MapPin" className="mr-2" size={24} />
                Как нас найти
              </h3>
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=16411539476"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md text-white animate-fade-in hover:shadow-2xl transition-all duration-300 border-0">
            <CardContent className="p-6 md:p-8 text-center">
              <Icon name="Headphones" size={48} className="mx-auto mb-4 text-black" />
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Есть вопросы?</h3>
              <p className="text-white/80 mb-6 text-base max-w-2xl mx-auto">
                Позвоните нам по любому из указанных номеров, и мы с радостью ответим на все ваши вопросы о бронировании, тарифах и услугах клуба
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <a href="tel:+74953632100">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold text-sm px-6 py-5"
                  >
                    <Icon name="Phone" className="mr-2" size={18} />
                    +7 495 363-21-00
                  </Button>
                </a>
                <a href="tel:+74953633838">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-8 py-6"
                  >
                    <Icon name="Phone" className="mr-2" size={20} />
                    +7 495 363-38-38
                  </Button>
                </a>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/80 mb-4 text-base">
                  Или напишите нам в мессенджеры:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://wa.me/79361518253"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-[#25D366]/90 hover:bg-[#25D366] text-white border-0 font-semibold text-sm px-6 py-5 transition-all hover:scale-105"
                    >
                      <Icon name="MessageCircle" className="mr-2" size={18} />
                      WhatsApp
                    </Button>
                  </a>
                  <a 
                    href="https://t.me/zvi_padel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-[#0088cc]/90 hover:bg-[#0088cc] text-white border-0 font-semibold text-sm px-6 py-5 transition-all hover:scale-105"
                    >
                      <Icon name="Send" className="mr-2" size={18} />
                      Telegram
                    </Button>
                  </a>
                </div>
              </div>
              <div className="border-t border-white/20 pt-6 mt-6">
                <div className="space-y-1 text-white/60 text-xs">
                  <p className="font-semibold text-white/80">АО «ЗВИ»</p>
                  <p>ОГРН 1027700002351</p>
                  <p>ИНН 7725008610 | КПП 772501001</p>
                  <p>115093, Москва, Партийный пер. д.1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
      <TermsModal 
        open={showTerms} 
        onAccept={handleTermsAccept} 
        onDecline={handleTermsDecline} 
      />
    </div>
  );
};

export default Home;
