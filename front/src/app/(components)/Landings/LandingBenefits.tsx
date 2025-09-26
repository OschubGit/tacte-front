import React from "react";

const LandingBenefits = ({
    benefits,
}: {
    benefits: {
        name: string;
        description: string;
        href: string;
        icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
}) => {
    return (
        <div className="bg-white py-24 sm:py-32 dark:bg-tacte-primary-700">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
                        Beneficios que irás cultivando
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                        Cada clase es un viaje hacia un estado de bienestar más
                        profundo.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {benefits.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900 dark:text-white">
                                    {/* <feature.icon
                                        aria-hidden="true"
                                        className="size-5 flex-none text-indigo-600 dark:text-indigo-400"
                                    /> */}
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-tacte-primary-50 dark:text-tacte-primary-50">
                                    <p className="flex-auto">
                                        {feature.description}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default LandingBenefits;
