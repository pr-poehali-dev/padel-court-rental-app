import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (window.history.length > 1 && document.referrer.includes(window.location.host)) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Button
      onClick={handleBack}
      variant="outline"
      size="lg"
      className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm font-semibold"
    >
      <Icon name="ArrowLeft" className="mr-2" size={20} />
      Назад
    </Button>
  );
};

export default BackButton;