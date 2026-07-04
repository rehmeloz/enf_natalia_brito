import { services } from "../../../data/services";
import ServiceCard from "./ServicesCard";

function Services() {
    return (
        <section id="servicos" className="bg-white">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <span className="font-sans text-xs font-semibold text-brand-text uppercase tracking-widest">
                        O que eu faço
                    </span>
                    <h2 className="underline underline-offset-wine font-serif text-3xl md:text-4xl text-brand-wine mt-2">
                        Serviços especializados
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;