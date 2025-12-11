import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackButton from '@/components/BackButton';
import TermsModal from '@/components/TermsModal';

const Courts = () => {
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
      id: 1,
      name: 'PANORAMIC',
      type: 'Крытый',
      features: ['Кондиционер', 'LED освещение', 'Душевые', 'Раздевалки'],
      available: true,
      image: 'https://cdn.poehali.dev/files/29 (1).jpg',
    },
    {
      id: 2,
      name: 'ULTRA PANORAMIC',
      type: 'Крытый',
      features: ['Кондиционер', 'LED освещение', 'Душевые', 'Раздевалки', 'Панорамный вид'],
      available: true,
      image: 'https://cdn.poehali.dev/files/зал1.jpg',
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
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-black">Наши корты</span>
            </h1>
            <p className="text-lg text-white/90">
              Профессиональные корты для игры в Padel любого уровня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {courts.map((court, index) => (
              <Card
                key={court.id}
                className="overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={court.image}
                    alt={court.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <Badge className="bg-accent text-primary font-bold text-sm px-4 py-1.5 shadow-xl border-2 border-primary">
                      {court.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-black">{court.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 pt-0">
                  <div>
                    <p className="text-xs font-semibold text-white/70 mb-2">
                      Удобства:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {court.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-white/5 border-white/20 text-white/90">
                          <Icon name="Check" size={12} className="mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center pt-3 border-t border-white/20">
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-sm px-4 py-4"
                      onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule')}
                    >
                      <Icon name="Calendar" className="mr-2" size={16} />
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Не знаете, какой корт выбрать?
                </h2>
                <p className="text-white/80 mb-4 text-base">
                  Наши консультанты помогут подобрать идеальный корт для вашего уровня игры и предпочтений.
                </p>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-6 py-5">
                    <Icon name="Phone" className="mr-2" size={18} />
                    Связаться с нами
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'Award', title: 'Высокое качество' },
                  { icon: 'Shield', title: 'Безопасность' },
                  { icon: 'Zap', title: 'Современное оборудование' },
                  { icon: 'Heart', title: 'Для всей семьи' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                    <Icon name={item.icon as any} size={28} className="mx-auto mb-2 text-black" />
                    <p className="font-semibold text-white text-xs">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
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

export default Courts;