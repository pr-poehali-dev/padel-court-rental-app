import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackButton from '@/components/BackButton';

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
      
      <div className="container mx-auto px-4 pt-24 pb-2">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <BackButton />
          </div>
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight relative">
                Правила падела
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/80 mt-8 font-light max-w-2xl mx-auto leading-relaxed">
              Падел — это микс тенниса и сквоша. Динамичная игра, доступная для новичков и увлекательная для профессионалов
            </p>
          </div>

          <Card className="mb-16 p-10 md:p-12 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Что такое падел?
            </h2>
            <p className="text-xl text-white/80 text-center max-w-3xl mx-auto leading-relaxed">
              Падел (Padel) — это ракеточный вид спорта, который сочетает элементы тенниса и сквоша. 
              Игра проходит на корте, окруженном стеклянными стенами, что делает её невероятно динамичной. 
              Научиться играть можно за одну тренировку, а совершенствоваться — всю жизнь!
            </p>
          </Card>

          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                  Основные правила
                </h2>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {basicRules.map((rule, index) => (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 hover:border-accent/50 group"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationDuration: '0.8s',
                    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/20 flex-shrink-0 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                      <Icon name={rule.icon as any} size={28} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{rule.title}</h3>
                      <p className="text-white/80 text-lg leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                  Что нужно для игры
                </h2>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {equipmentItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="text-center p-8 hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 hover:border-accent/50 group"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationDuration: '0.8s',
                    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/20 mb-6 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon name={item.icon as any} size={36} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 text-lg leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="text-center text-white/80 mt-8 text-xl animate-fade-in">
              В клубе ЗВИ вы можете взять всё необходимое оборудование в аренду
            </p>
          </div>

          <Card className="mb-16 p-10 md:p-12 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Советы начинающим
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-white/80 text-lg leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы попробовать?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Забронируйте корт и приходите на первую тренировку. Наши инструкторы помогут освоить основы игры!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать корт
                </Button>
              </a>
              <Link to="/courts">
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
                  <Icon name="Grid3x3" className="mr-2" size={20} />
                  Посмотреть корты
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
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