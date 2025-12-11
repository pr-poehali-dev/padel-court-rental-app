import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section id="hero" className="relative pt-16 min-h-screen flex flex-col justify-between">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/%D0%BA%D0%BE%D1%80%D1%82.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 md:pt-24 flex-grow flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <div className="w-full animate-fade-in" style={{ animationDelay: '0ms' }}>
              <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 transition-all hover:scale-[1.02] hover:bg-white/15 hover:shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h1 className="relative text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-center">
                  <span className="text-black">САМЫЙ ЦЕНТРАЛЬНЫЙ</span><br />ПАДЕЛ КЛУБ СТОЛИЦЫ
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="w-full animate-fade-in" style={{ animationDelay: '150ms' }}>
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-lg md:text-xl px-8 py-6 md:py-8 transition-all hover:scale-105"
                onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
              >
                <Icon name="Calendar" className="mr-3" size={24} />
                Забронировать корт
              </Button>
            </div>
          </div>
        </div>

      </section>

      <section id="about" className="relative py-16 md:py-24">
        <div className="fixed inset-0 z-0" style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/%D0%BA%D0%BE%D1%80%D1%82.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-6xl font-bold text-black mb-5 tracking-tight leading-tight">
                Это место — символ энергии,<br />ума и побед!
              </h2>
            </div>

            <Card className="mb-8 overflow-hidden animate-fade-in backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
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
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center animate-fade-in">
                Преимущества нашего падел клуба
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <Card 
                    key={index}
                    className="p-5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20"
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
        </div>
      </section>

      <section id="courts" className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-black">Наши корты</span>
              </h2>
              <p className="text-lg text-white/90">
                Профессиональные корты для игры в Padel любого уровня
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {courts.map((court, index) => (
                <Card
                  key={court.id}
                  className="overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20"
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
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-4">{court.name}</h3>
                    <div className="space-y-2 mb-6">
                      {court.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/80">
                          <Icon name="Check" size={18} className="text-black flex-shrink-0" />
                          <span className="text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-lg py-6"
                      onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                    >
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block">
                <h2 className="text-5xl md:text-7xl font-bold text-black mb-4 tracking-tight relative">
                  Тарифы
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                </h2>
              </div>
              <p className="text-lg text-white/80 mt-6 font-light">
                Выберите подходящий вариант для игры и тренировок
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center animate-fade-in">
                Аренда кортов
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pricingCourts.map((court, index) => (
                  <Card
                    key={index}
                    className={`p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in ${
                      court.popular 
                        ? 'bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent' 
                        : 'bg-white/10 border border-white/20'
                    } backdrop-blur-md relative overflow-hidden`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {court.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-accent text-primary text-xs font-bold px-4 py-1 transform rotate-0 shadow-lg">
                          ПОПУЛЯРНЫЙ
                        </div>
                      </div>
                    )}
                    <div className="text-center pt-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-4">
                        <Icon name={court.icon as any} size={32} className="text-black" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">
                        {court.name}
                      </h4>
                      <div className="mb-6">
                        <span className="text-5xl md:text-6xl font-bold text-white">
                          {court.price}
                        </span>
                        <span className="text-2xl text-white/80 ml-2">₽/час</span>
                      </div>
                      <Button
                        className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-lg py-6"
                        onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                      >
                        <Icon name="Calendar" className="mr-2" size={20} />
                        Забронировать
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center animate-fade-in">
                Тренировки
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {training.map((item, index) => (
                  <Card
                    key={index}
                    className={`p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in ${
                      item.free 
                        ? 'bg-gradient-to-br from-green-500/20 to-green-500/10 border-2 border-green-500' 
                        : 'bg-white/10 border border-white/20'
                    } backdrop-blur-md`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-4">
                        <Icon name={item.icon as any} size={32} className="text-black" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-black mb-2">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-white/70 mb-4 text-base">{item.description}</p>
                      )}
                      <div className="mb-6">
                        {item.free ? (
                          <span className="text-5xl md:text-6xl font-bold text-green-400">
                            Бесплатно
                          </span>
                        ) : (
                          <>
                            <span className="text-4xl md:text-5xl font-bold text-white">
                              {item.price}
                            </span>
                            <span className="text-xl text-white/80 ml-2">₽</span>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rules" className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block">
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tight relative">
                  Правила игры в Падел
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                </h2>
              </div>
              <p className="text-lg text-white/80 mt-6 font-light max-w-2xl mx-auto">
                Узнайте основные правила и начните играть уже сегодня
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center animate-fade-in">
                Основные правила
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {basicRules.map((rule, index) => (
                  <Card
                    key={index}
                    className="p-5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/20 flex-shrink-0">
                        <Icon name={rule.icon as any} size={24} className="text-black" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-black mb-2">{rule.title}</h4>
                        <p className="text-white/80 text-base leading-relaxed">{rule.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center animate-fade-in">
                Необходимое снаряжение
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {equipmentItems.map((item, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-2xl mb-4">
                        <Icon name={item.icon as any} size={28} className="text-black" />
                      </div>
                      <h4 className="text-xl font-bold text-black mb-2">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
                <Icon name="Lightbulb" className="inline mr-2 mb-1" size={28} />
                Полезные советы
              </h3>
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-black flex-shrink-0 mt-1" />
                    <p className="text-white/80 text-base">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
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
                  className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 hover:border-accent/50 group"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationDuration: '0.8s',
                    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
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

            <Card className="mb-6 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-5">
                <h3 className="font-bold text-xl mb-4 flex items-center justify-center text-black">
                  <Icon name="MapPin" className="mr-2" size={24} />
                  Как нас найти
                </h3>
                <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
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

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white animate-fade-in hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 md:p-8 text-center">
                <Icon name="Headphones" size={48} className="mx-auto mb-4 text-black" />
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Есть вопросы?</h3>
                <p className="text-white/80 mb-6 text-base max-w-2xl mx-auto">
                  Позвоните нам по любому из указанных номеров, и мы с радостью ответим на все ваши вопросы о бронировании, тарифах и услугах клуба
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+74953632100">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-8 py-6"
                    >
                      <Icon name="Phone" className="mr-2" size={20} />
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
              </CardContent>
            </Card>
          </div>
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