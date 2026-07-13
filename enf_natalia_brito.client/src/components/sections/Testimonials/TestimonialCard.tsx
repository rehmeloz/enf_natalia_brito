import type { Testimonial } from "../../../types";

function TestimonialCard({ quote, name, location }: Testimonial) {
    return (
        <div className="bg-white rounded-2xl p-6">
            <p className="font-serif italic font-semibold text-brand-text leading-relaxed mb-4">
                "{quote}"
            </p>
            <p className="font-sans text-xs font-semibold text-brand-text uppercase tracking-wide">
                {name} <span className="text-brand-muted font-normal">· {location}</span>
            </p>
        </div>
    );
}

export default TestimonialCard;