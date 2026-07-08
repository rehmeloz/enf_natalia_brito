import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "../../constants/links";

const NAV_ITEMS = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-brand-bg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 md:py-6">
                <a href="#">
                    <h2 className="text-2xl md:text-4xl italic font-serif text-brand-muted hover:text-brand-wine transition-colors">
                        Enf. Natália Brito
                    </h2>
                </a>

                {/* Nav desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="font-sans font-semibold text-sm text-brand-wine hover:text-brand-muted transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* CTA desktop */}
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-block font-semibold bg-brand-muted text-white font-sans text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-md"
                >
                    Fale Comigo
                </a>

                {/* Botão hambúrguer - só mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    className="md:hidden text-brand-wine"
                >
                    {isMenuOpen ? (
                        <X className="w-7 h-7" />
                    ) : (
                        <Menu className="w-7 h-7" />
                    )}
                </button>
            </div>

            {/* Menu mobile - dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-brand-bg border-t border-brand-muted/20 px-6 py-6 flex flex-col gap-5">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="font-sans font-semibold text-sm text-brand-wine"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="font-semibold bg-brand-muted text-white font-sans text-sm text-center px-5 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
                    >
                        Fale Comigo
                    </a>
                </div>
            )}
        </header>
    );
}

export default Header;