import { Play } from "lucide-react";

function Video() {
    return (
        <section id="video" className="bg-brand-bg">
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <span className="font-sans text-xs font-semibold text-brand-text uppercase tracking-widest">
                    Conheça de perto
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-text mt-2 mb-10">
                    Veja como é o atendimento
                </h2>

                <div className="aspect-video rounded-3xl bg-brand-muted/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                        <Play className="w-6 h-6 text-brand-text ml-1" fill="currentColor" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Video;