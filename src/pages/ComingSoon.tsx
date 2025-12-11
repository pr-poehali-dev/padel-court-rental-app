import Icon from '@/components/ui/icon';

const ComingSoon = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="container mx-auto px-4">
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
  );
};

export default ComingSoon;