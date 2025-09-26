import React from "react";
import LandingHero from "../LandingHero";
import LandingFeatureSection from "../LandingFeatureSection";
import SimpleCarrousel from "../../Carrousel/SimpleCarrousel";
import LandingBenefits from "../LandingBenefits";
import CTACenteredWithGradient from "../../CTAs/CTACenteredWithGradient";
import FooterSimpleCentered from "../../Footers/FooterSimpleCentered";
import LandingAboutMeSticky from "../LandingAboutMeSticky";
import LandingFaqs from "../LandingFaqs";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";
import LandingAboutMe from "../AboutMe";

/* 

interface LandingHeroProps {
    navigation?: NavigationItem[];
    logo?: {
        src: string;
        alt: string;
    };
    title?: string;
    description?: string;
    backgroundImage?: string;
    ctaPrimary?: {
        text: string;
        href: string;
    };
    ctaSecondary?: {
        text: string;
        href: string;
    };
    announcement?: {
        text: string;
        linkText: string;
        linkHref: string;
    };
}
*/

const features = [
    {
        name: "Osteopatía estructural",
        description:
            "Enfocada en músculos, articulaciones y postura. Ideal para aliviar dolores de espalda, cuello y mejorar la movilidad.",
    },
    {
        name: "Osteopatía visceral",
        description:
            "Mejora la movilidad y función de órganos internos como el hígado, estómago o intestinos.",
    },
    {
        name: "Osteopatía craneal",
        description:
            "Trabaja sobre el cráneo y sistema nervioso central. Recomendada para migrañas, estrés, insomnio y vértigos.",
    },
    {
        name: "Enfoque integral",
        description:
            "Combina distintas técnicas para acompañar procesos de recuperación física, emocional y postural.",
    },
];

const benefits = [
    {
        name: "Recuperación del equilibrio corporal",
        description:
            "La osteopatía restablece la armonía entre músculos, articulaciones y sistema nervioso, mejorando la postura, la movilidad y la vitalidad en tu día a día.",
        href: "#",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Alivio del dolor y reducción de tensiones",
        description:
            "A través de técnicas manuales específicas, libera bloqueos y contracturas, disminuyendo dolores musculares, articulares y molestias derivadas del estrés.",
        href: "#",
        icon: LockClosedIcon,
    },
    {
        name: "Mejora del bienestar integral",
        description:
            "Favorece la conexión entre el sistema musculoesquelético, visceral y craneal, ayudando al cuerpo a funcionar de manera más eficiente y a recuperar su capacidad de autorregulación.",
        href: "#",
        icon: ArrowPathIcon,
    },
];

const faqs = [
    {
        question: "¿Qué es la osteopatía?",
        answer: "Es una terapia manual que ayuda a equilibrar el cuerpo actuando sobre músculos, articulaciones, órganos y sistema nervioso para mejorar la salud de forma integral.",
    },
    {
        question: "¿Qué problemas puede tratar?",
        answer: "Dolores de espalda, cuello y articulaciones, migrañas, vértigos, insomnio, problemas digestivos y respiratorios, secuelas de traumatismos, estrés y disfunciones posturales.",
    },
    {
        question: "¿Es segura la osteopatía?",
        answer: "Sí, la osteopatía es una práctica no invasiva y segura cuando se realiza por un profesional cualificado.",
    },
    {
        question: "¿Puedo combinarla con otros tratamientos?",
        answer: "Por supuesto. La osteopatía es complementaria a la medicina tradicional, fisioterapia, nutrición, psicología y otros enfoques de salud.",
    },
    {
        question: "¿Cuántas sesiones necesito?",
        answer: "Depende de cada caso. Algunas molestias mejoran en pocas sesiones, mientras que en procesos crónicos se recomienda un tratamiento más prolongado.",
    },
];

const LandingQuiromasaje = ({ service }: { service: string }) => {
    return (
        <>
            <LandingHero
                title="Recupera tu cuerpo con Osteopatía"
                description="Terapia manual integral para aliviar dolores, mejorar tu movilidad y ayudarte a reconectar con tu bienestar natural."
                backgroundImage="/services/quiromasaje-alexandra.png"
                ctaPrimary={{
                    text: "Reservar cita",
                    href: "tel:666666666",
                }}
                ctaSecondary={{
                    text: "Ver horarios",
                    href: "#",
                }}
                announcement={{
                    text: "Reserva tu cita aquí",
                    linkText: "Reservar",
                    linkHref: "/reservas",
                }}
                navigation={[{ name: "Quiromasaje", href: "/" }]}
            />
            <LandingAboutMe
                title="Alex Monzó"
                subtitle="Sobre mi"
                content="Soy especialista en osteopatía estructural, visceral y craneal. Mi misión es ayudarte a mejorar tu calidad de vida mediante un enfoque integral y personalizado. Cada sesión está orientada a escuchar tu cuerpo, identificar bloqueos y acompañarte en tu proceso de recuperación."
            />
            {/* <LandingAboutMeSticky
                subtitle="Sobre mi"
                title="Alex Monzó"
                content="Soy especialista en osteopatía estructural, visceral y craneal. Mi misión es ayudarte a mejorar tu calidad de vida mediante un enfoque integral y personalizado. Cada sesión está orientada a escuchar tu cuerpo, identificar bloqueos y acompañarte en tu proceso de recuperación."
                imageSrc="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Osteópata en consulta"
            /> */}
            <LandingFeatureSection
                subtitle="Beneficios de la osteopatía"
                title="Un tratamiento integral para tu bienestar"
                description="La osteopatía ayuda a mejorar la movilidad, aliviar dolores y promover el equilibrio natural del cuerpo a través de técnicas manuales."
                features={features}
                image={{
                    src: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    alt: "Product screenshot",
                    width: 2432,
                    height: 1442,
                    className:
                        "w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228",
                }}
                showIcons={false}
            />
            <LandingBenefits benefits={benefits} />
            <SimpleCarrousel />
            <CTACenteredWithGradient />
            <LandingFaqs faqs={faqs} />
        </>
    );
};

export default LandingQuiromasaje;
