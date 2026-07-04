import { Heart, RotateCcw, Ear } from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
    {
        icon: Heart,
        title: "Furo de orelha humanizado",
        description:
            "Procedimento acolhedor para bebês e crianças, com técnica anestésica, marcação precisa e brincos de material seguro.",
        features: ["Pomada anestésica", "Ponto neutro anatômico", "Material 100% estéril"],
    },
    {
        icon: RotateCcw,
        title: "Correção de lóbulo rasgado",
        description:
            "Reconstrução estética do lóbulo da orelha em consultório, com técnica minimamente invasiva e cicatrização discreta.",
        features: ["Avaliação individualizada", "Anestesia local", "Retorno para acompanhamento"],
    },
    {
        icon: Ear,
        title: "Correção de orelha de abano",
        description:
            "Técnica estética sem cirurgia para reposicionar a orelha, devolvendo harmonia ao rosto com resultado natural.",
        features: ["Procedimento ambulatorial", "Recuperação rápida", "Resultado imediato"],
    },
];