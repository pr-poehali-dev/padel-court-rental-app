import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const phoneNumber = '79361518253';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#25D366]/80 hover:bg-[#25D366] backdrop-blur-sm rounded-full shadow-xl transition-all hover:scale-110 group animate-bounce-slow"
      aria-label="Написать в WhatsApp"
      style={{
        animation: 'bounce-gentle 3s ease-in-out infinite'
      }}
    >
      <Icon name="MessageCircle" size={22} className="text-white" />
      <span className="absolute right-full mr-3 px-4 py-2 bg-white text-primary font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm">
        Написать в WhatsApp
      </span>
      <style>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;