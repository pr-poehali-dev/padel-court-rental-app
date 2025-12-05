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
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Контакты
            </h1>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Icon name={info.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">{info.title}</h3>
                  <div className="space-y-2">
                    {info.items.map((item, idx) => (
                      <div key={idx}>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-accent transition-colors font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground font-medium">{item.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl mb-4 flex items-center justify-center">
                <Icon name="MapPin" className="mr-2 text-accent" size={24} />
                Как нас найти
              </h3>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center overflow-hidden">
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

          <Card className="bg-primary text-white animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center">
              <Icon name="Headphones" size={64} className="mx-auto mb-6 text-accent" />
              <h3 className="text-3xl font-bold mb-4">Есть вопросы?</h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Позвоните нам по любому из указанных номеров, и мы с радостью ответим на все ваши вопросы о бронировании, тарифах и услугах клуба
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+74953632100">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                  >
                    <Icon name="Phone" className="mr-2" size={20} />
                    +7 495 363-21-00
                  </Button>
                </a>
                <a href="tel:+74953633838">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                  >
                    <Icon name="Phone" className="mr-2" size={20} />
                    +7 495 363-38-38
                  </Button>
                </a>
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