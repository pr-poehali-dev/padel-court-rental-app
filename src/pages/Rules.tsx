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

const Rules = () => {
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
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      <div className="relative z-10">
        <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-2">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <BackButton />
          </div>
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-accent mb-3 tracking-tight relative">
                Правила падела
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/80 mt-4 font-light max-w-2xl mx-auto">
              Падел — это микс тенниса и сквоша. Динамичная игра, доступная для новичков и увлекательная для профессионалов
            </p>
          </div>

          <Card className="mb-8 p-6 md:p-8 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4 text-center">
              Что такое падел?
            </h2>
            <p className="text-lg text-white/80 text-center max-w-3xl mx-auto">
              Падел (Padel) — это ракеточный вид спорта, который сочетает элементы тенниса и сквоша. 
              Игра проходит на корте, окруженном стеклянными стенами, что делает её невероятно динамичной. 
              Научиться играть можно за одну тренировку, а совершенствоваться — всю жизнь!
            </p>
          </Card>

          <div className="mb-8">
            <div className="text-center mb-6 animate-fade-in">
              <div className="inline-block relative">
                <h2 className="text-2xl md:text-3xl font-bold text-accent relative z-10">
                  Основные правила
                </h2>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {basicRules.map((rule, index) => (
                <Card 
                  key={index} 
                  className="p-5 hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 hover:border-accent/50 group"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationDuration: '0.8s',
                    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/20 flex-shrink-0 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                      <Icon name={rule.icon as any} size={24} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{rule.title}</h3>
                      <p className="text-white/80 text-base">{rule.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="text-center mb-6 animate-fade-in">
              <div className="inline-block relative">
                <h2 className="text-2xl md:text-3xl font-bold text-accent relative z-10">
                  Что нужно для игры
                </h2>
                <div className="absolute inset-0 bg-accent/20 blur-2xl -z-10 scale-110" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {equipmentItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="text-center p-5 hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 hover:border-accent/50 group"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationDuration: '0.8s',
                    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-4 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon name={item.icon as any} size={30} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-base">{item.description}</p>
                </Card>
              ))}
            </div>
            <p className="text-center text-white/80 mt-4 text-lg animate-fade-in">
              В клубе ЗВИ вы можете взять всё необходимое оборудование в аренду
            </p>
          </div>

          <Card className="mb-8 p-6 md:p-8 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 text-center">
              Советы начинающим
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-white/80 text-base">{tip}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
              Готовы попробовать?
            </h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Забронируйте корт и приходите на первую тренировку. Наши инструкторы помогут освоить основы игры!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6"
                onClick={() => handleBookingClick('https://www.fitness1c.ru/club/140c8d1f-aef1-42dc-943d-2f7e06d636a2')}
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать корт
              </Button>
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
      <TermsModal 
        open={showTerms} 
        onAccept={handleTermsAccept} 
        onDecline={handleTermsDecline} 
      />
    </div>
  );
};

export default Rules;