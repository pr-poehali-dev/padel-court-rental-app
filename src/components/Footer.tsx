import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="backdrop-blur-sm bg-white/5 text-white py-4 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-center md:text-left order-1">
            <p className="text-white/90 text-xs font-semibold">АО «ЗВИ»</p>
            <p className="text-white/70 text-xs">ОГРН 1027700002351 | ИНН 7725008610</p>
            <p className="text-white/70 text-xs">115093, Москва, Партийный пер. д.1</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 order-2">
            <button onClick={() => scrollToSection('hero')} className="text-white/70 hover:text-white text-xs transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-white text-xs transition-colors">
              О клубе
            </button>
            <button onClick={() => scrollToSection('courts')} className="text-white/70 hover:text-white text-xs transition-colors">
              Корты
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-white/70 hover:text-white text-xs transition-colors">
              Тренировки
            </button>
            <button onClick={() => scrollToSection('rules')} className="text-white/70 hover:text-white text-xs transition-colors">
              Правила
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white/70 hover:text-white text-xs transition-colors">
              Контакты
            </button>
          </div>

          <div className="flex gap-2 order-3">
            <a href="tel:+74953633838">
              <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-xs px-3 py-2">
                <Icon name="Phone" size={14} />
              </Button>
            </a>
            <a href="https://wa.me/74953633838" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-green-500/20 hover:bg-green-500/30 text-white border-green-500/50 text-xs px-3 py-2">
                <Icon name="MessageCircle" size={14} />
              </Button>
            </a>
            <a href="https://t.me/zvi_padel" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-blue-500/20 hover:bg-blue-500/30 text-white border-blue-500/50 text-xs px-3 py-2">
                <Icon name="Send" size={14} />
              </Button>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;