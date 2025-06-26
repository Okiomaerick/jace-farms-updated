import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // WhatsApp number for Jace Farms
  const phoneNumber = '254743304659'; // +254 743 304 659 without spaces or plus sign
  const message = 'Hello Jace Farms, I would like to inquire about your products and services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
