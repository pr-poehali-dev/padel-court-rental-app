import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Home = () => {
  const features = [
    {
      icon: 'Calendar',
      title: 'Быстрое бронирование',
      description: 'Забронируйте корт в несколько кликов',
    },
    {
      icon: 'Clock',
      title: 'Гибкое расписание',
      description: 'Выбирайте удобное время для игры',
    },
    {
      icon: 'Award',
      title: 'Премиум качество',
      description: 'Корты профессионального уровня',
    },
    {
      icon: 'Users',
      title: 'Для всех уровней',
      description: 'От новичков до профессионалов',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-16 min-h-screen flex flex-col md:justify-between">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/a8b6f311-aa7e-42cb-b70d-c987efb9afa4/files/6061aacc-ad35-4b83-8fcd-61f2cf44d0bc.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 md:pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4 md:gap-6">
              <Link to="/about" className="w-full animate-fade-in" style={{ animationDelay: '0ms' }}>
                <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 transition-all hover:scale-[1.02] hover:bg-white/15 hover:shadow-2xl cursor-pointer group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h1 className="relative text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-center">
                    САМЫЙ ЦЕНТРАЛЬНЫЙ<br />ПАДЕЛ КЛУБ СТОЛИЦЫ
                  </h1>
                  <div className="relative flex items-center justify-center gap-2 mt-3 md:mt-4 text-white/70 group-hover:text-white transition-colors">
                    <span className="text-sm md:text-base font-medium">Узнать больше о клубе</span>
                    <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <a href="#" className="w-full animate-fade-in" style={{ animationDelay: '150ms' }}>
                <Button size="lg" className="w-full bg-accent/80 md:bg-accent hover:bg-accent/90 text-primary font-semibold text-lg md:text-xl px-8 py-6 md:py-8 transition-all hover:scale-105 border-0">
                  <Icon name="Calendar" className="mr-3" size={24} />
                  Забронировать корт
                </Button>
              </a>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <Link to="/courts" className="w-full">
                  <Button size="lg" variant="outline" className="w-full bg-white/5 md:bg-white/10 hover:bg-white/20 text-white border-white/20 md:border-white/30 font-semibold text-base md:text-lg px-6 py-5 md:py-6 backdrop-blur-sm transition-all hover:scale-105">
                    <Icon name="Grid3x3" className="mr-2" size={20} />
                    Посмотреть корты
                  </Button>
                </Link>
                <Link to="/pricing" className="w-full">
                  <Button size="lg" variant="outline" className="w-full bg-white/5 md:bg-white/10 hover:bg-white/20 text-white border-white/20 md:border-white/30 font-semibold text-base md:text-lg px-6 py-5 md:py-6 backdrop-blur-sm transition-all hover:scale-105">
                    <Icon name="DollarSign" className="mr-2" size={20} />
                    Тарифы
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 animate-fade-in md:hidden" style={{ animationDelay: '450ms' }}>
                <Link to="/rules" className="w-full">
                  <Button size="lg" variant="outline" className="w-full bg-white/5 hover:bg-white/20 text-white border-white/20 font-semibold text-base px-6 py-5 backdrop-blur-sm transition-all hover:scale-105">
                    <Icon name="BookOpen" className="mr-2" size={20} />
                    Правила
                  </Button>
                </Link>
                <Link to="/about" className="w-full">
                  <Button size="lg" variant="outline" className="w-full bg-white/5 hover:bg-white/20 text-white border-white/20 font-semibold text-base px-6 py-5 backdrop-blur-sm transition-all hover:scale-105">
                    <Icon name="Info" className="mr-2" size={20} />
                    О клубе
                  </Button>
                </Link>
                <Link to="/contact" className="w-full">
                  <Button size="lg" variant="outline" className="w-full bg-white/5 hover:bg-white/20 text-white border-white/20 font-semibold text-base px-6 py-5 backdrop-blur-sm transition-all hover:scale-105">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Контакты
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block container mx-auto px-4 sm:px-6 relative z-10 pb-6 md:pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '450ms' }}>
              <Link to="/rules" className="w-full md:order-2">
                <Button size="lg" variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-6 py-6 backdrop-blur-sm transition-all hover:scale-105">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Правила
                </Button>
              </Link>
              <Link to="/about" className="w-full md:order-1">
                <Button size="lg" variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-6 py-6 backdrop-blur-sm transition-all hover:scale-105">
                  <Icon name="Info" className="mr-2" size={20} />
                  О клубе
                </Button>
              </Link>
              <Link to="/contact" className="w-full md:order-3">
                <Button size="lg" variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-6 py-6 backdrop-blur-sm transition-all hover:scale-105">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Контакты
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Home;