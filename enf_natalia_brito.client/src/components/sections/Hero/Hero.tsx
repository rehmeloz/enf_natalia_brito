import { WHATSAPP_LINK } from "../../../constants/links";

function Hero() {
    return (
        <section className="py-20 bg-brand-background">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Coluna de texto */}
                <div>
                    <p className="font-sans text-sm uppercase tracking-widest text-brand-muted mb-4">
                        Enfermeira Especialista · Sorocaba-SP
                    </p>

                    <h1 className="font-serif text-5xl md:text-6xl text-brand-wine leading-tight mb-6">
                        Cuidado, técnica e{" "}
                        <span className="text-brand-muted">acolhimento</span> em cada
                        atendimento.
                    </h1>

                    <p className="font-sans text-brand-text text-base leading-relaxed mb-8 max-w-md">
                        Atendimento especializado em furo de orelha humanizado,
                        correção de lóbulo rasgado e correção estética de orelha de
                        abano.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-wine text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-md"
                        >
                            Agendar horário
                        </a>

                        <div>
                            <p className="font-serif text-2xl text-brand-wine">
                                +2.000
                            </p>
                            <p className="font-sans text-[11px] text-brand-text uppercase tracking-wide">
                                Atendimentos realizados
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-end">
                    <div className="aspect-[4/5] w-100 rounded-3xl bg-brand-muted/30 flex items-center justify-center">
                        <span className="font-sans text-sm text-brand-text/60">
                            [ Foto aqui ]
                        </span>
                    </div>

                    {/* Card flutuante na foto */}
                    <div className="absolute bottom-6 left-40 bg-white rounded-xl shadow-lg px-5 py-4 max-w-[220px]">
                        <p className="font-sans text-[11px] font-semibold text-brand-wine uppercase tracking-wide mb-1">
                            Clínica Certificada
                        </p>
                        <p className="font-sans text-xs text-brand-text leading-snug">
                            Ambiente estéril e profissional em Sorocaba.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;