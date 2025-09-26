import SvgCercleDegradation from "@/app/(components)/SVGDecoration/SvgCercleDegradation";

export default function Contacto() {
    return (
        <div className="relative px-6 py-24 sm:py-32 lg:px-8">
            <div className="relative z-0 w-full overflow-hidden">
                <SvgCercleDegradation
                    innerColor="#A5A4E0" // antes #7775D6 (violeta más suave)
                    color="#F08BD9"
                    className="absolute top-0 left-0 z-0 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
                />
            </div>

            <div className="mx-auto max-w-2xl text-center relative z-10">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                    ¡Escribenos!
                </h2>
                <p className="mt-2 text-lg/8 text-gray-600">
                    Si tienes cualquier duda puedes contactar a través de este
                    formulario. Responderemos a la brevedad.
                </p>
            </div>
            <form
                action="#"
                method="POST"
                className="mx-auto mt-16 max-w-xl sm:mt-20 relative z-10"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Nombre
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-[#ffffff4f] px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-tacte-primary-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-tacte-primary-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="last-name"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Apellidos
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-[#ffffff4f] px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-tacte-primary-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-tacte-primary-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-[#ffffff4f] px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-tacte-primary-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-tacte-primary-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phone-number"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Teléfono
                        </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md bg-[#ffffff4f] outline-1 -outline-offset-1 outline-tacte-primary-100 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-tacte-primary-600">
                                {/* <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    >
                                        <option>ES</option>
                                        <option>FR</option>
                                        <option>EU</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div> */}
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="text"
                                    placeholder="+34 1234567890"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 focus:outline-tacte-primary-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Mensaje
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md bg-[#ffffff4f] px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-tacte-primary-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-tacte-primary-600"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-tacte-rimary-600 transition-colors duration-200 ease-in-out has-checked:bg-tacte-primary-600 has-focus-visible:outline-2">
                                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                                <input
                                    id="agree-to-policies"
                                    name="agree-to-policies"
                                    type="checkbox"
                                    aria-label="Agree to policies"
                                    className="absolute inset-0 appearance-none focus:outline-hidden"
                                />
                            </div>
                        </div>
                        <label
                            htmlFor="agree-to-policies"
                            className="text-sm/6 text-gray-600"
                        >
                            Al seleccionar esto, aceptas nuestra{" "}
                            <a
                                href="#"
                                className="font-semibold whitespace-nowrap text-tacte-primary-600"
                            >
                                política de privacidad
                            </a>
                            .
                        </label>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-tacte-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-tacte-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tacte-primary-600 cursor-pointer"
                    >
                        ¡Hablemos!
                    </button>
                </div>
            </form>
        </div>
    );
}
