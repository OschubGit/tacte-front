import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
import IconCoffe from "../icons/IconCoffe";
import IconHomeShield from "../icons/IconHomeShield";
import IconPower from "../icons/IconPower";
import IconTechnologyHerarchity from "../icons/IconTechnologyHerarchity";

const features = [
    {
        name: "Honestidad y cercanía.",
        description:
            "Nos gusta ser transparentes y cercanos a nuestros clientes. Nos gusta escucharles y entenderles.",
        icon: IconCoffe,
    },
    {
        name: "Todo en un mismo lugar.",
        description:
            "Ofrecemos en el mismo centro diferentes servicios relacionados en el ámbito de la salud.",
        icon: IconHomeShield,
    },
    {
        name: "Ganas, ilusión y conocimiento.",
        description:
            "Somos profesionales con ganas de ayudar al paciente y capaces de adaptarnos a sus necesidades.",
        icon: IconPower,
    },
    {
        name: "Tecnología y comodidad en nuestras instalaciones.",
        description:
            "Disponemos de instalaciones modernas y cómodas. La tecnología mejora la calidad de nuestros servicios.",
        icon: IconTechnologyHerarchity,
    },
];

export default function SectionWithScreenShoot() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-indigo-600">
                                Lo que nos diferencia
                            </h2>
                            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Estamos aquí para ti, para mejorar juntos
                            </h2>
                            {/* <p className="mt-6 text-lg/8 text-gray-700">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Maiores impedit perferendis
                                suscipit eaque, iste dolor cupiditate blanditiis
                                ratione.
                            </p> */}
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative pl-9"
                                    >
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon
                                                aria-hidden="true"
                                                color="#553ccc"
                                            />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    <img
                        alt="Product screenshot"
                        /* src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png" */
                        /* src="https://images.unsplash.com/photo-1630835474626-b4de96a25186?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" */
                        src="https://placehold.co/912x556"
                        width={2432}
                        height={1442}
                        className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    );
}
