import { Camera, MessageCircle } from "lucide-react";
import {
    WHATSAPP_LINK,
    WHATSAPP_DISPLAY,
    INSTAGRAM_LINK,
} from "../../constants/links";

function Footer() {
    return (
        <footer className="bg-white border-t border-brand-muted/20">
            <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div>
                    <h3 className="font-serif text-4xl text-brand-wine mb-3">
                        Onde me encontrar
                    </h3>

                    <p className="font-sans text-md text-brand-text leading-relaxed max-w-sm mb-4">
                        Atendimento em clínica parceira e a domicílio. Horários flexíveis
                        para o conforto da sua família.
                    </p>

                    <p className="font-sans text-md font-semibold text-brand-wine mb-1">
                        Sorocaba e região — SP
                    </p>
                    <p className="font-sans text-md text-brand-text">{WHATSAPP_DISPLAY}</p>
                </div>

                <div className="flex items-center gap-3">

                <a
                    href={INSTAGRAM_LINK}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Instagram"
                     className="w-9 h-9 rounded-full bg-brand-wine flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <Camera className="w-4 h-4" />
                </a>

                <a
                    href={WHATSAPP_LINK}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="WhatsApp"
                     className="w-9 h-9 rounded-full bg-brand-wine flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <MessageCircle className="w-4 h-4" />
                    </a>

            </div>
          </div >

        <div className="border-t border-brand-muted/20">
            <p className="max-w-6xl mx-auto px-6 py-5 font-sans text-xs text-brand-text/70 text-center md:text-left">
                © {new Date().getFullYear()} Natália Brito · Enfermagem & Estética
            </p>
        </div>
    </footer >
  );
}

export default Footer;