import type { Service } from "../../../types";

function ServiceCard({ icon: Icon, title, description, features }: Service) {
    return (
        <div className="bg-brand-bg rounded-2xl p-8 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6">
                <Icon className="w-5 h-5 text-brand-wine" />
            </div>

            <h3 className="font-bold font-serif text-xl text-brand-wine mb-3">{title}</h3>

            <p className="font-sans text-sm text-brand-text leading-relaxed mb-5">
                {description}
            </p>

            <ul className="space-y-1.5">
                {features.map((feature) => (
                    <li
                        key={feature}
                        className="font-sans text-xs text-brand-muted flex items-center gap-1.5"
                    >
                        <span className="text-brand-wine">·</span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ServiceCard;