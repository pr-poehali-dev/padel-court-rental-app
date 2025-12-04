import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedCourt, setSelectedCourt] = useState<number | null>(null);

  const courts = [
    { id: 1, name: 'Корт 1', type: 'Крытый' },
    { id: 2, name: 'Корт 2', type: 'Открытый' },
    { id: 3, name: 'Корт 3', type: 'Крытый VIP' },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
  ];

  const handleBooking = () => {
    if (!date || !selectedTime || !selectedCourt) {
      toast.error('Выберите дату, время и корт');
      return;
    }

    const court = courts.find(c => c.id === selectedCourt);
    toast.success(`Бронирование подтверждено!`, {
      description: `${court?.name} на ${date.toLocaleDateString('ru-RU')} в ${selectedTime}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Бронирование корта
            </h1>
            <p className="text-lg text-muted-foreground">
              Выберите удобное время и корт для игры
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" className="mr-2" size={24} />
                  Выберите дату и время
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border mx-auto"
                    disabled={(date) => date < new Date()}
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Доступное время</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? 'default' : 'outline'}
                        className={selectedTime === time ? 'bg-accent text-primary hover:bg-accent/90' : ''}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Выберите корт</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {courts.map((court) => (
                      <Card
                        key={court.id}
                        className={`cursor-pointer transition-all ${
                          selectedCourt === court.id
                            ? 'ring-2 ring-accent shadow-lg'
                            : 'hover:shadow-md'
                        }`}
                        onClick={() => setSelectedCourt(court.id)}
                      >
                        <CardContent className="p-4 text-center">
                          <Icon name="Grid3x3" size={32} className="mx-auto mb-2 text-accent" />
                          <h4 className="font-semibold">{court.name}</h4>
                          <p className="text-sm text-muted-foreground">{court.type}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-fit animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="FileText" className="mr-2" size={24} />
                  Детали бронирования
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Дата</p>
                  <p className="font-semibold">
                    {date ? date.toLocaleDateString('ru-RU', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    }) : 'Не выбрана'}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Время</p>
                  <p className="font-semibold">{selectedTime || 'Не выбрано'}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Корт</p>
                  <p className="font-semibold">
                    {selectedCourt
                      ? courts.find(c => c.id === selectedCourt)?.name
                      : 'Не выбран'}
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Длительность</span>
                    <span className="font-semibold">1 час</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-muted-foreground">Стоимость</span>
                    <span className="text-2xl font-bold text-accent">2000 ₽</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
                  size="lg"
                  onClick={handleBooking}
                >
                  <Icon name="Check" className="mr-2" size={20} />
                  Подтвердить бронирование
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;