export default function SimpleCommingSoon() {
    return (
        <div className="relative bg-tacte-primary-50 min-h-screen">
            <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1611073615452-4889cb93422e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="size-full object-cover filter grayscale"
                />
                <svg
                    viewBox="0 0 926 676"
                    aria-hidden="true"
                    className="absolute -bottom-24 left-24 w-231.5 transform-gpu blur-[118px]"
                >
                    <path
                        d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                        fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                        fillOpacity=".4"
                    />
                    <defs>
                        <linearGradient
                            id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                            x1="926.392"
                            x2="-109.635"
                            y1=".176"
                            y2="321.024"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#776FFF" />
                            <stop offset={1} stopColor="#FF4694" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
                    <h2 className="text-base/7 font-semibold text-tacte-primary-800">
                        Muy pronto. Tacte masajes.
                    </h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-tacte-primary-800 sm:text-5xl">
                        Estamos trabajando en la mejor experiencia para ti.
                    </p>
                    <p className="mt-6 text-base/7 text-tacte-primary-800">
                        Pronto tendrás nuevas noticias. Mientras puedes reservar
                        tu cita. Horario de lunes a viernes de 08:00h a 13:00h y
                        de 16:00h a 21:00h.
                    </p>
                    <div className="mt-8">
                        <a
                            href="tel:698903934"
                            className="inline-flex rounded-md bg-tacte-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-tacte-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tacte-primary-600"
                        >
                            {" "}
                            ¡Llámanos!{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
