import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white/90 text-sm md:text-base">
              © 2025 Падел клуб ЗВИ
            </p>
            <p className="text-white/70 text-xs md:text-sm mt-1">
              г. Москва, Партийный пер., дом 1 корп.6
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a href="tel:+74953632100">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
              >
                <Icon name="Phone" className="mr-2" size={16} />
                +7 495 363-21-00
              </Button>
            </a>
            <a href="tel:+74953633838">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
              >
                <Icon name="Phone" className="mr-2" size={16} />
                +7 495 363-38-38
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <Link to="/" className="text-white/70 hover:text-white text-sm transition-colors">
            Главная
          </Link>

          <Link to="/courts" className="text-white/70 hover:text-white text-sm transition-colors">
            Корты
          </Link>
          <Link to="/pricing" className="text-white/70 hover:text-white text-sm transition-colors">
            Тарифы
          </Link>
          <Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors">
            О клубе
          </Link>
          <Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">
            Контакты
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;