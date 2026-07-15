import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../../constants/links";

function WhatsAppButton() {
    return (
    <a
        href = { WHATSAPP_LINK }
        target = "_blank"
        rel = "noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className = "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-text text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity">
        <FaWhatsapp className="w-7 h-7" />
    </a >
  );
}

export default WhatsAppButton;