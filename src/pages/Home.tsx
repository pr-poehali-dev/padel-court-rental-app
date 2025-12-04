import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

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
            backgroundImage: 'url(https://cdn.poehali.dev/projects/a8b6f311-aa7e-42cb-b70d-c987efb9afa4/files/0c107f36-7781-4a84-9a7a-1c8b3dd79c76.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Премиальные корты для игры в Padel
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Забронируйте корт мгновенно и наслаждайтесь игрой в комфортной атмосфере
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать корт
                </Button>
              </Link>
              <Link to="/courts">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-8 py-6 backdrop-blur-sm">
                  <Icon name="Grid3x3" className="mr-2" size={20} />
                  Посмотреть корты
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создали идеальные условия для игры в Padel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать играть?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Забронируйте корт прямо сейчас и получите лучший опыт игры в Padel
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6">
              <Icon name="ArrowRight" className="mr-2" size={20} />
              Забронировать сейчас
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
