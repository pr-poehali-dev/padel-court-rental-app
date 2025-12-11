import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="text-center animate-fade-in">
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 md:p-16 shadow-2xl">
          <Icon name="Construction" size={80} className="text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            В разработке
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Сайт скоро будет готов
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
