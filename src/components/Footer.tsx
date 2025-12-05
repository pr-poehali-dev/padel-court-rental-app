import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 md:py-6 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto">
            <Link to="/" className="transition-opacity hover:opacity-80">
              <img 
                src="https://cdn.poehali.dev/files/1343b45f-5684-4263-9a69-79495a0cb5f0.png" 
                alt="ЗВИ Padel Club"
                className="h-10 md:h-12 object-contain object-left self-center md:self-start md:-ml-1 cursor-pointer"
              />
            </Link>
            <div className="text-center md:text-left">
              <p className="text-white/90 text-xs md:text-sm font-semibold">
                АО «ЗВИ»
              </p>
              <p className="text-white/70 text-xs mt-0.5">
                ИНН 7725008610 | КПП 772501001
              </p>
              <p className="text-white/70 text-xs mt-0.5">
                115093, Москва, Партийный пер. д.1
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a href="tel:+74953632100" className="w-full">
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs px-4 py-2"
              >
                <Icon name="Phone" className="mr-1.5" size={14} />
                +7 495 363-21-00
              </Button>
            </a>
            <a href="tel:+74953633838" className="w-full">
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs px-4 py-2"
              >
                <Icon name="Phone" className="mr-1.5" size={14} />
                +7 495 363-38-38
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-white/10 flex flex-row items-center justify-center gap-3 md:gap-4 text-center flex-wrap">
          <Link to="/" className="text-white/70 hover:text-white text-xs transition-colors">
            Главная
          </Link>
          <Link to="/courts" className="text-white/70 hover:text-white text-xs transition-colors">
            Корты
          </Link>
          <Link to="/pricing" className="text-white/70 hover:text-white text-xs transition-colors">
            Тарифы
          </Link>
          <Link to="/about" className="text-white/70 hover:text-white text-xs transition-colors">
            О клубе
          </Link>
          <Link to="/rules" className="text-white/70 hover:text-white text-xs transition-colors">
            Правила
          </Link>
          <Link to="/contact" className="text-white/70 hover:text-white text-xs transition-colors">
            Контакты
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;