import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Мы используем файлы cookie</h3>
            <p className="text-sm text-muted-foreground">
              Мы используем файлы cookie для улучшения работы сайта, анализа посещаемости и предоставления персонализированного контента. 
              Продолжая использовать сайт, вы соглашаетесь с использованием cookie.{' '}
              <Link to="/terms" className="underline hover:text-foreground transition-colors">
                Подробнее
              </Link>
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Отклонить
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Принять
            </button>
            <button
              onClick={handleDecline}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Закрыть"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}