import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Rules = () => {
  const basicRules = [
    {
      icon: 'Users',
      title: 'Формат игры',
      description: 'Падел — парная игра 2 на 2. Корт меньше теннисного, окружен стеклянными стенами и сеткой.'
    },
    {
      icon: 'Circle',
      title: 'Подача',
      description: 'Подача выполняется снизу, мяч должен отскочить от земли перед ударом. Подающий стоит за линией подачи.'
    },
    {
      icon: 'Zap',
      title: 'Использование стен',
      description: 'Мяч может отскакивать от стен после касания корта. Это делает игру динамичной и непредсказуемой!'
    },
    {
      icon: 'Target',
      title: 'Счет',
      description: 'Система счета как в теннисе: 15, 30, 40, гейм. Матч играется до 2 выигранных сетов.'
    }
  ];

  const equipmentItems = [
    {
      icon: 'Hand',
      title: 'Ракетка',
      description: 'Специальная ракетка для падела с перфорированной поверхностью, короче теннисной'
    },
    {
      icon: 'CircleDot',
      title: 'Мяч',
      description: 'Похож на теннисный, но с меньшим давлением для правильного отскока'
    },
    {
      icon: 'Shirt',
      title: 'Одежда',
      description: 'Удобная спортивная форма и кроссовки с нескользящей подошвой'
    }
  ];

  const tips = [
    'Играйте в команде — падел требует постоянной коммуникации с партнером',
    'Используйте стены в свою пользу — они ваши союзники',
    'Контролируйте центр корта — это ключевая позиция',
    'Не бойтесь ошибок — падел учит быстро адаптироваться',
    'Следите за позицией соперников и ищите свободные зоны'
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Правила падела
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Падел — это микс тенниса и сквоша. Динамичная игра, доступная для новичков и увлекательная для профессионалов
            </p>
          </div>

          <Card className="mb-16 p-10 md:p-12 animate-fade-in bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Что такое падел?
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Падел (Padel) — это ракеточный вид спорта, который сочетает элементы тенниса и сквоша. 
              Игра проходит на корте, окруженном стеклянными стенами, что делает её невероятно динамичной. 
              Научиться играть можно за одну тренировку, а совершенствоваться — всю жизнь!
            </p>
          </Card>

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
              Основные правила
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {basicRules.map((rule, index) => (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/95 backdrop-blur-sm border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 flex-shrink-0">
                      <Icon name={rule.icon as any} size={28} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{rule.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
              Что нужно для игры
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {equipmentItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="text-center p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/95 backdrop-blur-sm border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/15 mb-6">
                    <Icon name={item.icon as any} size={36} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="text-center text-white/90 mt-8 text-xl animate-fade-in">
              В клубе ЗВИ вы можете взять всё необходимое оборудование в аренду
            </p>
          </div>

          <Card className="mb-16 p-10 md:p-12 animate-fade-in bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Советы начинающим
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы попробовать?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Забронируйте корт и приходите на первую тренировку. Наши инструкторы помогут освоить основы игры!
            </p>
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
                  Задать вопрос
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

export default Rules;