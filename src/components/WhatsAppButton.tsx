import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const phoneNumber = '79361518253';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl transition-all hover:scale-110 group animate-fade-in"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} className="text-white" />
      <span className="absolute right-full mr-3 px-4 py-2 bg-white text-primary font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm">
        Написать в WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
