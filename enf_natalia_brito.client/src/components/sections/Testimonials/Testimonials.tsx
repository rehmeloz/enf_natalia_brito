import { testimonials } from "../../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    return (
        <section id="depoimentos" className="bg-brand-bg">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <span className="font-sans text-xs font-semibold text-brand-text uppercase tracking-widest">
                        Depoimentos
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-text mt-2">
                        Quem confia no meu trabalho
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;