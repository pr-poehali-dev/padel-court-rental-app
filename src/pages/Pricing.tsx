import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Pricing = () => {
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Тарифы
            </h1>
            <p className="text-xl text-white/90">
              Выберите подходящий вариант для вашей игры
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
              Аренда кортов
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {courts.map((court, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 ${
                    court.popular ? 'ring-2 ring-accent' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {court.popular && (
                    <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-4 py-2 rounded-bl-xl">
                      ПОПУЛЯРНЫЙ
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon name={court.icon as any} size={40} className="text-accent" />
                    </div>
                    <CardTitle className="text-3xl mb-4 text-white font-bold">{court.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-accent">
                        {court.price.toLocaleString('ru-RU')} ₽
                      </span>
                      <span className="text-white/80 ml-2 text-xl">/ час</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <a href="#" className="block">
                      <Button
                        className="w-full font-semibold text-lg py-6 bg-accent hover:bg-accent/90 text-primary"
                        size="lg"
                      >
                        <Icon name="Calendar" className="mr-2" size={20} />
                        Забронировать
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
              Стоимость тренировок с нашими тренерами
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {training.map((item, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 ${
                    item.free ? 'ring-2 ring-green-400' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.free && (
                    <div className="absolute top-0 right-0 bg-green-400 text-primary text-xs font-bold px-4 py-2 rounded-bl-xl">
                      БЕСПЛАТНО
                    </div>
                  )}

                  <CardHeader className="text-center pb-6">
                    <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon name={item.icon as any} size={40} className="text-accent" />
                    </div>
                    <CardTitle className="text-2xl mb-3 text-white font-bold leading-tight">
                      {item.name}
                    </CardTitle>
                    {item.description && (
                      <p className="text-white/70 text-lg">{item.description}</p>
                    )}
                    <div className="mt-4">
                      {item.free ? (
                        <span className="text-5xl font-bold text-green-400">
                          Бесплатно!
                        </span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold text-accent">
                            {item.price.toLocaleString('ru-RU')} ₽
                          </span>
                          <span className="text-white/80 ml-2 text-xl">/ час</span>
                        </>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Link to="/contact" className="block">
                      <Button
                        className="w-full font-semibold text-lg py-6 bg-accent hover:bg-accent/90 text-primary"
                        size="lg"
                      >
                        <Icon name="Phone" className="mr-2" size={20} />
                        Записаться
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center animate-fade-in">
            <h3 className="text-3xl font-bold text-white mb-4">
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
      </div>
    </div>
  );
};

export default Pricing;
