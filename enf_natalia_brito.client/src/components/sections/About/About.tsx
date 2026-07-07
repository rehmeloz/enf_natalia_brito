import { CheckCircle2 } from "lucide-react";
import { INSTAGRAM_LINK } from "../../../constants/links";

const CREDENTIALS = [
    "Enfermeira graduada e especializada",
    "Referência em furo humanizado, correções estéticas e vacinação em Sorocaba",
    "Acompanhamento personalizado antes e depois de cada procedimento",
];

function About() {
    return (
        <section id="sobre" className="bg-brand-bg">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="bg-brand-wine rounded-3xl p-8 md:p-12 grid md:grid-cols-[280px_1fr] gap-10 items-center">
                    {/* Foto */}
                    <div className="aspect-[4/5] rounded-2xl bg-white/10 flex items-center justify-center">
                        <span className="font-sans text-sm text-white/50">
                            [ Foto aqui ]
                        </span>
                    </div>

                    {/* Texto */}
                    <div>
                        <span className="font-sans text-xs font-semibold text-white/70 uppercase tracking-widest">
                            Sobre mim
                        </span>

                        <h2 className="font-serif text-3xl text-white mt-2 mb-4">
                            Enfermeira Natália Brito
                        </h2>

                        <p className="font-sans text-white/85 italic leading-relaxed mb-6">
                            "Meu trabalho une técnica de enfermagem, olhar estético e
                            acolhimento. Cada pessoa que passa pelo meu atendimento merece
                            cuidado individualizado — do primeiro furinho de orelha do bebê
                            à correção estética que devolve autoestima, sem deixar de lado a
                            saúde em cada etapa."
                        </p>

                        <ul className="space-y-2.5 mb-8">
                            {CREDENTIALS.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2.5 font-sans text-sm text-white/90"
                                >
                                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-white/70" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={INSTAGRAM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-white/40 text-white font-sans font-semibold text-xs uppercase tracking-wide px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                            Conhecer minha trajetória
                        </a>                  
                </div>
            </div>
        </div>
    </section >
  );
}

export default About;