import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/courts', label: 'Корты', icon: 'Grid3x3' },
    { path: '/pricing', label: 'Тарифы', icon: 'DollarSign' },
    { path: '/about', label: 'О клубе', icon: 'Info' },
    { path: '/rules', label: 'Правила', icon: 'BookOpen' },
    { path: '/contact', label: 'Контакты', icon: 'Phone' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/98 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="https://cdn.poehali.dev/files/1343b45f-5684-4263-9a69-79495a0cb5f0.png" 
            alt="ЗВИ Padel Club"
            className="h-12 object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? 'default' : 'ghost'}
                size="lg"
                className={`font-semibold text-base transition-all ${
                  isActive(item.path) 
                    ? 'bg-accent hover:bg-accent/90 text-primary shadow-lg' 
                    : 'text-white hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon name={item.icon as any} size={20} className="mr-2" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <Icon name="Menu" size={28} />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="h-auto bg-primary/98 backdrop-blur-md mt-20 border-0 border-b border-white/10">
            <div className="flex flex-col space-y-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center space-x-3 p-4 rounded-lg transition-all font-semibold text-lg ${
                    isActive(item.path)
                      ? 'bg-accent text-primary shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={24} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;