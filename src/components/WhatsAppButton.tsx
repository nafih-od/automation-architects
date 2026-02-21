import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917594867061"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-white shadow-lg hover:scale-105 transition-transform duration-200"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
