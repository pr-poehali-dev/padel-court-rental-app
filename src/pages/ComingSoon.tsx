import Icon from '@/components/ui/icon';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-background relative flex items-center justify-center">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/a8b6f311-aa7e-42cb-b70d-c987efb9afa4/files/6061aacc-ad35-4b83-8fcd-61f2cf44d0bc.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 mb-6 animate-pulse">
            <Icon name="Construction" size={48} className="text-accent" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 tracking-tight">
            Страница в разработке
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Мы работаем над созданием чего-то особенного для вас
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;