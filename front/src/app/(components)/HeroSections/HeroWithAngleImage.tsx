"use client";
import Link from "next/link";
import { PrimaryButton, PrimaryButtonLink } from "../Buttons/Buttons";
import SvgCercleDegradation from "../SVGDecoration/SvgCercleDegradation";

export default function HeroWithAngleImage({
    title,
    description,
    image,
    logo,
}: {
    title: string;
    description: string;
    image: string;
    logo: string;
}) {
    return (
        <div className="bg-tacte-primary-50 relative isolate overflow-hidden">
            <div className="relative">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        {/* <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                        >
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg> */}

                        <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                {/* <div className="hidden sm:mb-10 sm:flex">
                                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                        Anim aute id magna aliqua ad ad non
                                        deserunt sunt.{" "}
                                        <a
                                            href="#"
                                            className="font-semibold whitespace-nowrap text-indigo-600"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            Read more{" "}
                                            <span aria-hidden="true">
                                                &rarr;
                                            </span>
                                        </a>
                                    </div>
                                </div> */}
                                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                                    {title}
                                </h1>
                                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 font-secondary">
                                    {description}
                                </p>
                                <div className="mt-10 flex items-center gap-x-6 font-secondary">
                                    <PrimaryButton href="/reservas">
                                        Reserva tu cita
                                    </PrimaryButton>
                                    {/* <PrimaryButtonLink href="#">
                                        Saber más
                                    </PrimaryButtonLink> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative">
                    <img
                        alt=""
                        src={image}
                        className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
                    />
                </div>
            </div>
            <SvgCercleDegradation
                innerColor="#7775D6"
                color="#E935C1"
                className="absolute top-1/2 left-0 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
            />
            <SvgCercleDegradation
                innerColor="#7775D6"
                color="#E935C1"
                className="absolute top-0 left-300 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
            />
        </div>
    );
}
