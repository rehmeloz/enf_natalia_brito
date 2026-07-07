import type { LucideIcon } from "lucide-react";

export interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
}

export interface Testimonial {
    quote: string;
    name: string;
    location: string;
}