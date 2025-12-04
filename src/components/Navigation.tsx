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
    { path: '/contact', label: 'Контакты', icon: 'Phone' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-sm tracking-tight">ЗВИ</span>
          </div>
          <span className="text-white font-bold text-xl font-['Montserrat']">Padel Club</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? 'secondary' : 'ghost'}
                className={`text-white hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : ''
                }`}
              >
                <Icon name={item.icon as any} size={18} className="mr-2" />
                {item.label}
              </Button>
            </Link>
          ))}
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
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-sidebar-accent text-sidebar-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span className="text-lg">{item.label}</span>
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