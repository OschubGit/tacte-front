import { ChevronRightIcon } from "@heroicons/react/20/solid";

const links = [
    {
        name: "Instagram @tacte_masajes",
        href: "https://www.instagram.com/tacte_masajes/",
        description: "Síguenos en Instagram",
    },
    {
        name: "Email tacte.masajes@gmail.com",
        href: "#",
        description: "Envíanos un correo a tacte.masajes@gmail.com",
    },
    {
        name: "Llámanos al 999 999 999",
        href: "#",
        description: "Llámanos de lunes a viernes de 9:00 a 18:00",
    },
];

export default function NotFound() {
    return (
        <div className="bg-white">
            <main className="mx-auto w-full max-w-7xl px-6 pt-10 pb-16 sm:pb-24 lg:px-8">
                <img
                    alt="Tacte"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto sm:h-12"
                />
                <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
                    <p className="text-base/8 font-semibold text-gray-900">
                        404
                    </p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                        Página no encontrada
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Lo sentimos, no pudimos encontrar la página que estás
                        buscando.
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
                    <h2 className="sr-only">
                        Encuentranos en nuestras redes sociales
                    </h2>
                    <ul
                        role="list"
                        className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
                    >
                        {links.map((link, linkIdx) => (
                            <li
                                key={linkIdx}
                                className="relative flex gap-x-6 py-6"
                            >
                                {/* <div className="flex size-10 flex-none items-center justify-center rounded-lg shadow-xs outline-1 outline-gray-900/10">
                                    <link.icon
                                        aria-hidden="true"
                                        className="size-6 text-indigo-600"
                                    />
                                </div> */}
                                <div className="flex-auto">
                                    <h3 className="text-sm/6 font-semibold text-gray-900">
                                        <a href={link.href}>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            {link.name}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm/6 text-gray-600">
                                        {link.description}
                                    </p>
                                </div>
                                <div className="flex-none self-center">
                                    <ChevronRightIcon
                                        aria-hidden="true"
                                        className="size-5 text-gray-400"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="mt-10 flex justify-center">
                        <a
                            href="#"
                            className="text-sm/6 font-semibold text-indigo-600"
                        >
                            <span aria-hidden="true">&larr;</span>
                        </a>
                    </div> */}
                </div>
            </main>
            <footer className="border-t border-gray-100 py-6 sm:py-10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
                    <p className="text-sm/7 text-gray-400">
                        &copy; Tacte. Todos los derechos reservados.
                    </p>
                    <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-gray-200" />
                    {/* <div className="flex gap-x-4">
                        {social.map((item, itemIdx) => (
                            <a
                                key={itemIdx}
                                href={item.href}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </a>
                        ))}
                    </div> */}
                </div>
            </footer>
        </div>
    );
}
