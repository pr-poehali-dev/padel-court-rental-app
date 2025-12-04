import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
      
      <section className="relative pt-16 min-h-screen flex items-center">
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

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20">
          <div className="max-w-3xl animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать корт
                </Button>
              </Link>
              <Link to="/courts" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 backdrop-blur-sm">
                  <Icon name="Grid3x3" className="mr-2" size={20} />
                  Посмотреть корты
                </Button>
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 backdrop-blur-sm">
                  <Icon name="DollarSign" className="mr-2" size={20} />
                  Тарифы
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;