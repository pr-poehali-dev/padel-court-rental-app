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
    { url: 'https://cdn.poehali.dev/files/зал1.jpg', alt: 'Падел корт' },
    { url: 'https://cdn.poehali.dev/files/29 (1).jpg', alt: 'Падел корт с цветными панелями' },
    { url: 'https://cdn.poehali.dev/files/ресепшн2.jpg', alt: 'Ресепшн клуба' },
    { url: 'https://cdn.poehali.dev/files/ресепшн1.jpg', alt: 'Зона ресепшн' },
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

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-40 md:pt-16 flex-grow flex items-center">
          <div className="max-w-4xl mx-auto w-full text-center">
            <div className="w-full animate-fade-in" style={{ animationDelay: '0ms' }}>
              <h1 className="font-black leading-tight tracking-tighter mb-6">
                <span className="block text-3xl md:text-5xl lg:text-7xl bg-gradient-to-r from-accent via-yellow-400 via-yellow-300 to-accent to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(218,165,32,0.5)] mb-2 animate-gradient">
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

      <section id="about" className="relative py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="block bg-gradient-to-r from-white via-accent via-yellow-300 to-accent to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] animate-gradient">
                  Это место — символ энергии,
                </span>
                <span className="block text-accent drop-shadow-[0_2px_10px_rgba(218,165,32,0.6)] font-extrabold">
                  ума и побед!
                </span>
              </h2>
            </div>

            <div className="mb-8 animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  В здании с историей, где <span className="font-bold text-accent">с 1930 года</span> ковали горячее железо и создавали двигатели. На территории легендарного <span className="font-bold text-accent">Завода Владимира Ильича</span>.
                </p>
                <p className="text-xl md:text-2xl text-accent leading-relaxed font-bold">
                  Теперь здесь куются горячие спортивные игры!
                </p>
              </div>
            </div>

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

            <div className="text-center mb-8 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-5 transition-all hover:scale-105"
                onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать корт
              </Button>
            </div>

            <div className="mb-6 max-w-4xl mx-auto">
              <div className="text-center mb-6 animate-fade-in">
                <h3 className="text-3xl md:text-5xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-white via-accent via-yellow-300 to-accent to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] animate-gradient">
                    Преимущества нашего падел клуба
                  </span>
                </h3>
              </div>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-xl md:text-2xl font-bold text-accent mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courts" className="relative py-8 md:py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-accent via-yellow-300 to-accent to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] animate-gradient">
                  Наши корты
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 mb-8">
              {courts.map((court, index) => (
                <div
                  key={court.id}
                  className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-6 group">
                    <img
                      src={court.image}
                      alt={court.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">{court.name}</h3>
                  <div className="space-y-2 mb-6">
                    {court.features.map((feature, idx) => (
                      <p key={idx} className="text-lg md:text-xl text-white/90 leading-relaxed">
                        • {feature}
                      </p>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-lg py-6"
                    onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Забронировать
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-8 md:py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-accent via-yellow-300 to-accent to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] animate-gradient">
                  Тарифы
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6 text-center animate-fade-in">
                  Аренда кортов
                </h3>
                <div className="space-y-6">
                  {pricingCourts.map((court, index) => (
                    <div
                      key={index}
                      className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl md:text-2xl font-bold text-accent">
                          {court.name}
                        </h4>
                        <div className="text-right">
                          <span className="text-3xl md:text-4xl font-bold text-white">
                            {court.price}
                          </span>
                          <span className="text-xl text-white/80 ml-2">₽/час</span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-lg py-6"
                        onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                      >
                        <Icon name="Calendar" className="mr-2" size={20} />
                        Забронировать
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6 text-center animate-fade-in">
                  Тренировки
                </h3>
                <div className="space-y-6">
                  {training.map((item, index) => (
                    <div
                      key={index}
                      className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl md:text-2xl font-bold text-accent mb-2">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="text-lg text-white/80">{item.description}</p>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0">
                          {item.free ? (
                            <span className="text-2xl md:text-3xl font-bold text-green-400">
                              Бесплатно
                            </span>
                          ) : (
                            <>
                              <span className="text-3xl md:text-4xl font-bold text-white">
                                {item.price}
                              </span>
                              <span className="text-xl text-white/80 ml-2">₽</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8 animate-fade-in">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-5 transition-all hover:scale-105"
                    onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться на тренировку
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="corporate" className="relative py-8 md:py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-accent via-yellow-300 to-accent to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] animate-gradient">
                  Корпоративные мероприятия
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center mb-6">
                <p className="text-xl md:text-2xl text-accent leading-relaxed mb-6 font-bold">
                  Организуем незабываемые корпоративные мероприятия для вашей команды
                </p>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Падел — идеальный формат для тимбилдинга. Динамичная командная игра, которая объединяет коллег и создает позитивную атмосферу.
                </p>
              </div>

              <div className="space-y-6">
                <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">
                    Что мы предлагаем
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    • Аренда всех 4 кортов для вашего мероприятия
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    • Профессиональные тренеры для обучения новичков
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    • Организация турниров и соревнований
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    • VIP-раздевалки для комфорта команды
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    • Фуршет и напитки в зоне кафе
                  </p>
                </div>

                <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">
                    Для команд от 8 до 30 человек
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Мы адаптируем программу под размер вашей команды и уровень подготовки участников. Подходит как для опытных игроков, так и для тех, кто впервые берет ракетку в руки.
                  </p>
                </div>

                <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">Обсудим детали?</h3>
                  <p className="text-lg md:text-xl text-white/90 mb-6">
                    Свяжитесь с нами, и мы подберем идеальный формат мероприятия для вашей компании
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="tel:+74953632100">
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-8 py-6"
                      >
                        +7 495 363-21-00
                      </Button>
                    </a>
                    <a href="tel:+74953633838">
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-8 py-6"
                      >
                        +7 495 363-38-38
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trainers" className="relative py-8 md:py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-accent via-yellow-300 to-accent to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] animate-gradient">
                  Наши тренеры
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center mb-6">
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Профессиональные тренеры с международным опытом помогут вам освоить падел и повысить уровень игры
                </p>
              </div>

              <div className="space-y-6">
                <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-accent mb-3">
                    Программы обучения
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-3">
                    <span className="font-bold text-accent">Для новичков</span> — базовая техника, правила игры, тактика передвижения по корту
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-3">
                    <span className="font-bold text-accent">Средний уровень</span> — отработка ударов, игра от стены, парные комбинации
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    <span className="font-bold text-accent">Продвинутый уровень</span> — турнирная подготовка, сложные тактические схемы
                  </p>
                </div>

                <div className="text-center my-8 animate-fade-in">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-5 transition-all hover:scale-105"
                    onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться на тренировку
                  </Button>
                </div>

                <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-accent mb-3">
                    Форматы тренировок
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4">
                      <p className="text-lg font-bold text-white mb-2">Персональные</p>
                      <p className="text-base text-white/80">Индивидуальная работа с тренером</p>
                      <p className="text-xl font-bold text-accent mt-2">10 000 ₽</p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4">
                      <p className="text-lg font-bold text-white mb-2">Сплит (3-4 человека)</p>
                      <p className="text-base text-white/80">Тренировка в малой группе</p>
                      <p className="text-xl font-bold text-accent mt-2">11 000 ₽</p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4">
                      <p className="text-lg font-bold text-white mb-2">Мини-группы</p>
                      <p className="text-base text-white/80">Групповые занятия до 8 человек</p>
                      <p className="text-xl font-bold text-accent mt-2">4 000 ₽</p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4">
                      <p className="text-lg font-bold text-white mb-2">Открытые тренировки</p>
                      <p className="text-base text-white/80">Для новичков падела</p>
                      <p className="text-xl font-bold text-green-400 mt-2">Бесплатно</p>
                    </div>
                  </div>
                </div>

                <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-accent mb-3">
                    Почему выбирают наших тренеров
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    • Сертифицированные специалисты с опытом игры на международных турнирах
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    • Индивидуальный подход к каждому ученику
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    • Современные методики обучения
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    • Видеоанализ техники игры
                  </p>
                </div>

                <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">Записаться на тренировку</h3>
                  <p className="text-lg md:text-xl text-white/90 mb-6">
                    Позвоните нам, и мы подберем удобное время и формат тренировки
                  </p>
                  <div className="flex justify-center">
                    <a href="tel:+74953632100">
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-8 py-6"
                      >
                        +7 495 363-21-00
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rules" className="relative py-8 md:py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-accent via-yellow-300 to-accent to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] animate-gradient">
                  Правила игры в Падел
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6 text-center animate-fade-in">
                  Основные правила
                </h3>
                <div className="space-y-6">
                  {basicRules.map((rule, index) => (
                    <div
                      key={index}
                      className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h4 className="text-xl md:text-2xl font-bold text-accent mb-2">
                        {rule.title}
                      </h4>
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6 text-center animate-fade-in">
                  Необходимое снаряжение
                </h3>
                <div className="space-y-6">
                  {equipmentItems.map((item, index) => (
                    <div
                      key={index}
                      className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h4 className="text-xl md:text-2xl font-bold text-accent mb-2">
                        {item.title}
                      </h4>
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6 text-center animate-fade-in">
                  Полезные советы
                </h3>
                <div className="space-y-4 animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6">
                  {tips.map((tip, index) => (
                    <p key={index} className="text-lg md:text-xl text-white/90 leading-relaxed">
                      • {tip}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-8 md:py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-accent via-yellow-300 to-accent to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] animate-gradient">
                  Контакты
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-accent mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.items.map((item, idx) => (
                        <div key={idx}>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-lg md:text-xl text-white/90 hover:text-white transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-lg md:text-xl text-white/90">{item.content}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">
                  Как нас найти
                </h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=16411539476"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

              <div className="animate-fade-in backdrop-blur-sm bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">Есть вопросы?</h3>
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
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
              </div>
            </div>
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