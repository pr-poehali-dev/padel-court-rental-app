import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackButton from '@/components/BackButton';
import TermsModal from '@/components/TermsModal';

const Pricing = () => {
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
  const courts = [
    {
      name: 'PANORAMIC',
      price: 6000,
      icon: 'Grid3x3',
    },
    {
      name: 'ULTRA PANORAMIC',
      price: 7000,
      icon: 'Maximize2',
      popular: true,
    },
  ];

  const training = [
    {
      name: 'ПЕРСОНАЛЬНАЯ ТРЕНИРОВКА',
      price: 10000,
      icon: 'User',
      description: null,
    },
    {
      name: 'СПЛИТ ТРЕНИРОВКА',
      price: 11000,
      icon: 'Users',
      description: '3-4 человека',
    },
    {
      name: 'МИНИ-ГРУППЫ',
      price: 4000,
      icon: 'UserPlus',
      description: null,
    },
    {
      name: 'ОТКРЫТАЯ ТРЕНИРОВКА ДЛЯ НОВИЧКОВ ПАДЕЛА',
      price: 0,
      icon: 'Heart',
      description: null,
      free: true,
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-2">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <BackButton />
          </div>
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 tracking-tight relative">
                Тарифы
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/80 mt-8 font-light">
              Выберите подходящий вариант для вашей игры
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block relative">
                <h2 className="text-3xl md:text-4xl font-bold text-black relative z-10">
                  Аренда кортов
                </h2>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {courts.map((court, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md hover:border-accent/50 group ${
                    court.popular ? 'ring-2 ring-accent' : ''
                  }`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationDuration: '0.8s',
                    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
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
                <h2 className="text-3xl md:text-4xl font-bold text-black relative z-10">
                  Стоимость тренировок с нашими тренерами
                </h2>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {training.map((item, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md hover:border-accent/50 group ${
                    item.free ? 'ring-2 ring-green-400 hover:ring-green-300' : ''
                  }`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationDuration: '0.8s',
                    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
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
                      <Icon name="Phone" className="mr-2" size={18} />
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block relative">
                <h2 className="text-3xl md:text-4xl font-bold text-black relative z-10">
                  Корпоративные и частные мероприятия
                </h2>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-all duration-300 animate-fade-in overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <Icon name="PartyPopper" size={64} className="mx-auto mb-6 text-black" />
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                    Проведите интересный и объединяющий новогодний корпоратив на кортах
                  </h3>
                  <div className="space-y-4 text-lg md:text-xl text-white/80 mb-8">
                    <p className="leading-relaxed">
                      С нашими тренерами и ведущим создайте незабываемую атмосферу командного духа
                    </p>
                    <p className="leading-relaxed">
                      А после вас ждет разнообразный кейтеринг и любые напитки
                    </p>
                  </div>
                  <Link to="/contact" className="inline-block w-full max-w-md mx-auto">
                    <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-sm md:text-lg px-4 md:px-10 py-5 md:py-7 transition-all hover:scale-105">
                      Обсудим ваш праздник по телефону
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center animate-fade-in">
            <h3 className="text-3xl font-bold text-black mb-4">
              Остались вопросы о тарифах?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Наши менеджеры помогут выбрать оптимальный тариф и ответят на все ваши вопросы
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6">
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </div>
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

export default Pricing;