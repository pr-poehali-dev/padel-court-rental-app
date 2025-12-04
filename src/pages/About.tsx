import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              О клубе ЗВИ
            </h1>
            <p className="text-lg text-muted-foreground">
              История, энергия и спорт в одном месте
            </p>
          </div>

          <Card className="mb-12 overflow-hidden animate-fade-in">
            <div className="relative h-64 md:h-96">
              <img
                src="https://cdn.poehali.dev/projects/a8b6f311-aa7e-42cb-b70d-c987efb9afa4/files/6061aacc-ad35-4b83-8fcd-61f2cf44d0bc.jpg"
                alt="Падел клуб ЗВИ"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>
            <CardContent className="p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-primary leading-relaxed font-medium mb-6">
                  В здании с историей, где ковали горячее железо и создавали двигатели. На территории легендарного Завода им. Владимира Ильича.
                </p>
                <p className="text-xl md:text-2xl text-primary leading-relaxed font-medium mb-6">
                  Это место — символ энергии, ума и силы.
                </p>
                <p className="text-2xl md:text-3xl text-accent leading-relaxed font-bold">
                  Теперь здесь куются горячие спортивные игры!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Icon name="Building2" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Историческое место</h3>
              <p className="text-muted-foreground">
                Легендарный Завод им. Владимира Ильича
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Icon name="Zap" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">4 премиум корта</h3>
              <p className="text-muted-foreground">
                Крытые корты с современным оборудованием
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Премиум сервис</h3>
              <p className="text-muted-foreground">
                Раздевалки, душевые, лаунж-зона
              </p>
            </Card>
          </div>

          <Card className="mb-12 p-8 md:p-10 animate-fade-in bg-muted/50">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Новейшие корты профессионального уровня
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Мы установили абсолютно новые корты с качественным покрытием последнего поколения. 
              Современные материалы обеспечивают идеальный отскок мяча и комфортную игру для всех уровней подготовки. 
              Каждый корт оборудован профессиональным LED-освещением, кондиционированием и системой вентиляции.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 animate-fade-in hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 flex-shrink-0">
                  <Icon name="Trophy" size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Система рейтинга игроков</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    В ближайшее время мы запустим уникальную систему рейтинга для всех участников клуба. 
                    Каждая игра будет учитываться в личной статистике. Игроки с высоким рейтингом получат 
                    специальные награды, бонусы и приоритетное бронирование кортов!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-fade-in hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 flex-shrink-0">
                  <Icon name="Target" size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Регулярные турниры</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Планируем проводить еженедельные и ежемесячные соревнования для игроков всех уровней. 
                    Призы, кубки, медали и возможность проявить себя в дружеской конкурентной атмосфере. 
                    Следите за анонсами турниров в нашем клубе!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Готовы присоединиться?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать корт
                </Button>
              </a>
              <Link to="/courts">
                <Button size="lg" variant="outline" className="font-semibold">
                  <Icon name="Grid3x3" className="mr-2" size={20} />
                  Посмотреть корты
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-semibold">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;