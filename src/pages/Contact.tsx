import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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
    <div className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/a8b6f311-aa7e-42cb-b70d-c987efb9afa4/files/6061aacc-ad35-4b83-8fcd-61f2cf44d0bc.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      <div className="relative z-10">
        <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight relative">
                Контакты
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/80 mt-8 font-light">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 hover:border-accent/50 group"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationDuration: '0.8s',
                  animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-4 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon name={info.icon as any} size={32} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-white">{info.title}</h3>
                  <div className="space-y-2">
                    {info.items.map((item, idx) => (
                      <div key={idx}>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-white/80 hover:text-accent transition-colors font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-white/80 font-medium">{item.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="font-bold text-2xl mb-6 flex items-center justify-center text-white">
                <Icon name="MapPin" className="mr-2 text-accent" size={28} />
                Как нас найти
              </h3>
              <div className="bg-white/5 rounded-lg h-96 flex items-center justify-center overflow-hidden border border-white/10">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.676574,55.698745&z=17&text=Москва, Партийный пер., дом 1 корп.6"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white animate-fade-in hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 md:p-12 text-center">
              <Icon name="Headphones" size={64} className="mx-auto mb-6 text-accent" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Есть вопросы?</h3>
              <p className="text-white/80 mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Позвоните нам по любому из указанных номеров, и мы с радостью ответим на все ваши вопросы о бронировании, тарифах и услугах клуба
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+74953632100">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold text-base px-8 py-6"
                  >
                    <Icon name="Phone" className="mr-2" size={20} />
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
              <div className="border-t border-white/20 pt-8">
                <p className="text-white/80 mb-6 text-lg">
                  Или напишите нам в мессенджеры:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/79361518253"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-[#25D366]/90 hover:bg-[#25D366] text-white border-0 font-semibold text-base px-8 py-6 transition-all hover:scale-105"
                    >
                      <Icon name="MessageCircle" className="mr-2" size={20} />
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
                      className="bg-[#0088cc]/90 hover:bg-[#0088cc] text-white border-0 font-semibold text-base px-8 py-6 transition-all hover:scale-105"
                    >
                      <Icon name="Send" className="mr-2" size={20} />
                      Telegram
                    </Button>
                  </a>
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