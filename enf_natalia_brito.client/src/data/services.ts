import { Heart, RotateCcw, Ear, Syringe } from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
    {
        // PRIMEIRO FURINHO
        icon: Heart,
        title: "Primeiro Furinho Humanizado",
        description:
            "Perfuração realizada com técnica humanizada, avaliação individual e atendimento acolhedor, proporcionando uma experiência segura, delicada e tranquila em todas as idades.",
        features: ["Bebês", "Crianças", "Adultos"],
    },
    {
        // CORREÇÃO DE ORELHAS RASGADAS
        icon: RotateCcw,
        title: "Correção de Orelhas Rasgadas",
        description:
            "Tratamento especializado para reconstrução do lóbulo da orelha, devolvendo sua estética e possibilitando uma nova perfuração quando indicado.",
        features: ["Avaliação individualizada", "Anestesia local", "Retorno para acompanhamento"],
    },
    {
        // CORREÇÃO DE ORELHA DE ABANO EM BEBES
        icon: Ear,
        title: "Correção de Orelhas de Abano em Bebês",
        description:
            "Molde auricular não cirúrgico realizado nos primeiros meses de vida, aproveitando a maleabilidade natural da cartilagem para promover a correção de forma confortável e segura.",
        features: ["Procedimento ambulatorial", "Recuperação rápida", "Resultado imediato"],
    },
    {
        // CORREÇÃO DE ORELHA DE ABANO EM CRIANÇAS A PARTIR DE 10 ANOS E ADULTOS
        icon: Ear,
        title: "Correção de Orelhas de Abano em crianças a partir de 10 anos e adultos",
        description:
            "Tratamento não cirúrgico com técnica específica para crianças e adultos, realizado após avaliação individual para promover a remodelação das orelhas com segurança e resultados permanentes.",
        features: ["Procedimento ambulatorial", "Recuperação rápida", "Resultado imediato"],
    },
    {
        // VACINAÇÃO INFANTIL
        icon: Syringe,
        title: "Vacinação Infantil",
        description:
            "Aplicação de vacinas com atendimento humanizado, orientação personalizada e todo o cuidado necessário para proporcionar mais segurança, conforto e tranquilidade às crianças e suas famílias.",
        features: ["Atendimento no consultório ou em domicílio"],
    },
];