import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
import React from "react";

interface Feature {
    name: string;
    description: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    showIcon?: boolean;
}

interface LandingFeatureSectionProps {
    subtitle?: string;
    title?: string;
    description?: string;
    features?: Feature[];
    image?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        className?: string;
    };
    showIcons?: boolean;
    className?: string;
    containerClassName?: string;
}

const defaultFeatures: Feature[] = [
    {
        name: "Movimiento consciente para despertar y cuidar el cuerpo.",
        description:
            "Cada postura y transición está diseñada para que tu cuerpo recupere movilidad, fuerza y flexibilidad de manera natural. No se trata solo de ejercitar, sino de habitar el cuerpo con atención, despertar su energía y aprender a escucharlo.",
        icon: CloudArrowUpIcon,
        showIcon: false,
    },
    {
        name: "Respiración profunda como puente hacia la calma mental.",
        description:
            "La respiración es el hilo que conecta lo que sientes, piensas y haces. A través de técnicas de pranayama y respiración consciente, aprenderás a regular tu energía, soltar tensiones y encontrar serenidad en medio del día a día.",
        icon: LockClosedIcon,
        showIcon: false,
    },
    {
        name: "Observación interior para reconocer hábitos, emociones y sensaciones.",
        description:
            "La práctica no termina en el cuerpo: es también un espacio de autoconocimiento. Mediante la atención plena, descubrirás cómo se manifiestan tus emociones y pensamientos, y aprenderás a transformar esos patrones para vivir con más claridad y equilibrio.",
        icon: ServerIcon,
        showIcon: false,
    },
];

const LandingFeatureSection: React.FC<LandingFeatureSectionProps> = ({
    subtitle = "Para experimentar",
    title = "¿Qué encontrarás en mis clases?",
    description = "",
    features = defaultFeatures,
    image = {
        src: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Product screenshot",
        width: 2432,
        height: 1442,
        className:
            "w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228",
    },
    showIcons = false,
    className = "overflow-hidden bg-white py-24 sm:py-32",
    containerClassName = "mx-auto max-w-7xl px-6 lg:px-8",
}) => {
    return (
        <div className={className}>
            <div className={containerClassName}>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                        <div className="lg:max-w-lg">
                            {subtitle && (
                                <h2 className="text-base/7 font-semibold text-tacte-primary-900">
                                    {subtitle}
                                </h2>
                            )}
                            {title && (
                                <h2 className="mt-2 text-4xl font-bold tracking-tight text-pretty text-tacte-primary-700 sm:text-5xl">
                                    {title}
                                </h2>
                            )}
                            {description && (
                                <p className="mt-6 text-lg/8 text-gray-600">
                                    {description}
                                </p>
                            )}
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.name || index}
                                        className="relative pl-9"
                                    >
                                        <dt className="inline font-semibold text-gray-900">
                                            {showIcons &&
                                                feature.showIcon &&
                                                feature.icon && (
                                                    <feature.icon
                                                        aria-hidden="true"
                                                        className="absolute top-1 left-1 size-5 text-indigo-600"
                                                    />
                                                )}
                                            .{feature.name}
                                        </dt>{" "}
                                        <dd className="inline">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-first">
                        <img
                            alt={image.alt}
                            src="https://placehold.co/912x730"
                            width={image.width}
                            height={image.height}
                            className={image.className}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingFeatureSection;
