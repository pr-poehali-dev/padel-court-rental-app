import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const phoneNumber = '79361518253';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const telegramUrl = 'https://t.me/zvi_padel';

  return (
    <>
      <style>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-40 flex items-center justify-center w-12 h-12 bg-[#25D366]/40 hover:bg-[#25D366]/70 backdrop-blur-md rounded-full shadow-xl transition-all hover:scale-110"
        aria-label="Написать в WhatsApp"
        style={{
          animation: 'bounce-gentle 3s ease-in-out infinite'
        }}
      >
        <Icon name="MessageCircle" size={22} className="text-white" />
      </a>

      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-20 z-40 flex items-center justify-center w-12 h-12 bg-[#0088cc]/40 hover:bg-[#0088cc]/70 backdrop-blur-md rounded-full shadow-xl transition-all hover:scale-110"
        aria-label="Написать в Telegram"
        style={{
          animation: 'bounce-gentle 3s ease-in-out infinite',
          animationDelay: '1.5s'
        }}
      >
        <Icon name="Send" size={22} className="text-white" />
      </a>
    </>
  );
};

export default WhatsAppButton;