import React from "react";

interface LandingAboutMeStickyProps {
    subtitle?: string;
    title?: string;
    content?: string;
    imageSrc?: string;
    imageAlt?: string;
}

const LandingAboutMeSticky: React.FC<LandingAboutMeStickyProps> = ({
    subtitle = "Sobre mi",
    title = "Alexandra Poveda",
    content = `El movimiento siempre ha sido mi manera de
    comprender el mundo. Desde muy pequeña descubrí
    que a través del cuerpo podía expresarme,
    explorar mis emociones y darle sentido a lo que
    me rodeaba. A los tres años empecé a bailar y,
    desde entonces, mi cuerpo se convirtió en un
    lugar sagrado de aprendizaje, un espacio donde
    descubrí que cada gesto y cada respiración
    tienen un significado profundo.
    <br />
    <br />
    Con el tiempo entendí que moverse no es solo un
    acto físico: es también una forma de cuidar la
    mente, escucharme con honestidad y aprender a
    estar presente. El movimiento me enseñó que
    habitar el cuerpo con conciencia es la mejor
    manera de acercarnos a lo que deseamos en la
    vida.
    <br />
    <br />
    Soy graduada en Pedagogía de la Danza, y mi
    recorrido me ha llevado a entrelazar este camino
    con el yoga. Ambas disciplinas me han mostrado
    que el cuerpo es mucho más que un vehículo: es
    el fundamento de nuestra salud mental, emocional
    y espiritual. En mis clases parto siempre de
    este principio, guiando cada sesión para que sea
    una experiencia de presencia y conexión.
    <br />
    <br />
    Cuando aprendemos a habitar el cuerpo con
    atención, se abre un camino profundo de
    autoconocimiento. La práctica se convierte
    entonces en un refugio: un espacio donde
    encontramos calma, claridad y la posibilidad de
    reencontrarnos con nuestra esencia.`,
    imageSrc = "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt = "",
}) => {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:bg-white">
            {/* <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-tacte-primary-50"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg
                        x="50%"
                        y={-1}
                        className="overflow-visible fill-gray-50 dark:fill-tacte-100/50"
                    >
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                    />
                </svg>
            </div> */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-tacte-primary-700 dark:text-tacte-primary-700">
                                {subtitle}
                            </p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-tacte-primary-700 sm:text-5xl dark:text-tacte-primary-700">
                                {title}
                            </h1>
                            <p
                                className="mt-6 text-xl/8 text-tacte-primary-700 dark:text-tacte-primary-700"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt={imageAlt}
                        src={imageSrc}
                        className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228 dark:bg-gray-800 dark:ring-white/10"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingAboutMeSticky;
