import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import TermsModal from '@/components/TermsModal';

const Navigation = () => {
  const [open, setOpen] = useState(false);
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
    setOpen(false);
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

  const scrollToSection = (sectionId: string) => {
    setOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { section: 'hero', label: 'Главная', icon: 'Home' },
    { section: 'about', label: 'О клубе', icon: 'Info' },
    { section: 'courts', label: 'Корты', icon: 'Grid3x3' },
    { section: 'pricing', label: 'Тарифы', icon: 'DollarSign' },
    { section: 'rules', label: 'Правила', icon: 'BookOpen' },
    { section: 'contact', label: 'Контакты', icon: 'Phone' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img 
            src="https://cdn.poehali.dev/files/лог.png" 
            alt="ЗВИ Padel Club" 
            className="w-12 h-12 object-contain rounded-full"
          />
          <span className="text-white font-bold text-xl font-['Montserrat']">ZVI Padel club</span>
        </button>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.section}
              variant="ghost"
              className="text-white hover:text-accent hover:bg-white/10"
              onClick={() => scrollToSection(item.section)}
            >
              {item.label}
            </Button>
          ))}
          <Button 
            className="bg-accent hover:bg-accent/90 text-primary font-semibold ml-2"
            onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule&type=rent&club_id=53c417e2-c5db-11f0-9578-00505683cb0f')}
          >
            Забронировать
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Icon name="Menu" size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="h-auto bg-sidebar/98 backdrop-blur-md mt-16 border-0">
            <div className="flex flex-col space-y-3 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="p-3 rounded-lg transition-colors text-sidebar-foreground hover:bg-sidebar-accent text-center"
                >
                  <span className="text-lg">{item.label}</span>
                </button>
              ))}
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-6"
                onClick={() => handleBookingClick('https://www.fitness1c.ru/schedule_new/140c8d1f-aef1-42dc-943d-2f7e06d636a2#page=schedule&type=rent&club_id=53c417e2-c5db-11f0-9578-00505683cb0f')}
              >
                Забронировать корт
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <TermsModal 
        open={showTerms} 
        onAccept={handleTermsAccept} 
        onDecline={handleTermsDecline} 
      />
    </nav>
  );
};

export default Navigation;