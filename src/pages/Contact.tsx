import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackButton from '@/components/BackButton';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефоны',
      items: [
        { content: '+7 495 363-21-00', link: 'tel:+74953632100' },
        { content: '+7 495 363-38-38', link: 'tel:+74953633838' }
      ]
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      items: [
        { content: 'г. Москва, Партийный пер., дом 1 корп.6', link: 'https://yandex.ru/maps/?text=Москва, Партийный пер., дом 1 корп.6' }
      ]
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      items: [
        { content: 'Ежедневно 8:00 - 23:00', link: null }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-2">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <BackButton />
          </div>
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-3 tracking-tight relative">
                Контакты
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h1>
            </div>
            <p className="text-lg text-white/80 mt-4 font-light">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md hover:border-accent/50 group"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationDuration: '0.8s',
                  animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <CardContent className="p-5 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-2xl mb-3 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon name={info.icon as any} size={24} className="text-black group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-black">{info.title}</h3>
                  <div className="space-y-1">
                    {info.items.map((item, idx) => (
                      <div key={idx}>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-white/80 hover:text-black transition-colors font-medium text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-white/80 font-medium text-sm">{item.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-6 animate-fade-in bg-white/10 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-5">
              <h3 className="font-bold text-xl mb-4 flex items-center justify-center text-black">
                <Icon name="MapPin" className="mr-2" size={24} />
                Как нас найти
              </h3>
              <div className="bg-white/5 rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=16411539476"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md text-white animate-fade-in hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 md:p-8 text-center">
              <Icon name="Headphones" size={48} className="mx-auto mb-4 text-black" />
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Есть вопросы?</h3>
              <p className="text-white/80 mb-6 text-base max-w-2xl mx-auto">
                Позвоните нам по любому из указанных номеров, и мы с радостью ответим на все ваши вопросы о бронировании, тарифах и услугах клуба
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <a href="tel:+74953632100">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold text-sm px-6 py-5"
                  >
                    <Icon name="Phone" className="mr-2" size={18} />
                    +7 495 363-21-00
                  </Button>
                </a>
                <a href="tel:+74953633838">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-8 py-6"
                  >
                    <Icon name="Phone" className="mr-2" size={20} />
                    +7 495 363-38-38
                  </Button>
                </a>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/80 mb-4 text-base">
                  Или напишите нам в мессенджеры:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://wa.me/79361518253"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-[#25D366]/90 hover:bg-[#25D366] text-white border-0 font-semibold text-sm px-6 py-5 transition-all hover:scale-105"
                    >
                      <Icon name="MessageCircle" className="mr-2" size={18} />
                      WhatsApp
                    </Button>
                  </a>
                  <a 
                    href="https://t.me/zvi_padel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-[#0088cc]/90 hover:bg-[#0088cc] text-white border-0 font-semibold text-sm px-6 py-5 transition-all hover:scale-105"
                    >
                      <Icon name="Send" className="mr-2" size={18} />
                      Telegram
                    </Button>
                  </a>
                </div>
              </div>
              <div className="border-t border-white/20 pt-6 mt-6">
                <div className="space-y-1 text-white/60 text-xs">
                  <p className="font-semibold text-white/80">АО «ЗВИ»</p>
                  <p>ОГРН 1027700002351</p>
                  <p>ИНН 7725008610 | КПП 772501001</p>
                  <p>115093, Москва, Партийный пер. д.1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

        <WhatsAppButton />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;