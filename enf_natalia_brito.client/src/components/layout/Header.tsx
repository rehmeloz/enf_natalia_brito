import { WHATSAPP_LINK } from "../../constants/links";

const NAV_ITEMS = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
];

function Header() {
    return (
        <header className="bg-brand-bg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-6">

                <a href="#">
                    <h2 className="text-4xl italic font-serif text-brand-muted hover:text-brand-wine transition-colors">
                        Enf. Natália Brito
                    </h2>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="font-sans font-semibold text-sm text-brand-wine hover:text-brand-wine transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold bg-brand-muted text-white font-sans text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-md"
                >
                    Fale Comigo
                </a>
            </div>
        </header>
    );
}

export default Header;