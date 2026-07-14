import { WHATSAPP_LINK } from "../../../constants/links";
import { FaWhatsapp } from "react-icons/fa";

function ContactCTA() {
    return (
        <section id="contato" className="bg-white">
            <div className="max-w-3xl mx-auto px-6 py-20">
                <div className="bg-brand-bg rounded-3xl p-10 md:p-14 text-center shadow-sm">
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-4">
                        Vamos conversar sobre o seu atendimento?
                    </h2>

                    <p className="font-sans text-brand-text leading-relaxed mb-8 max-w-md mx-auto">
                        Atendimento domiciliar e exclusivo em Sorocaba e região. Envie uma mensagem
                        para tirar dúvidas ou agendar sua avaliação.
                    </p>

                    <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-text text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-md">
                        <FaWhatsapp className="w-4 h-4" />
                        Falar pelo WhatsApp
                </a>
            </div>
        </div>
    </section >
  );
}

export default ContactCTA;