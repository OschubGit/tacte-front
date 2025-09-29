"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import IconYoga from "../icons/IconYoga";
import IconPsicology from "../icons/IconPsicology";
import IconMassage from "../icons/IconMassage";
import IconNutrition from "../icons/IconNutrition";
import IconRegisterUser from "../icons/IconRegisterUser";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import IconCalendar from "../icons/IconCalendar";

const products = [
  {
    name: "Quiromasaje y Osteopatía",
    description: "Para relajar y mejorar la salud de tu cuerpo",
    href: "/servicios/quiromasaje-osteopatia",
    icon: IconMassage,
  },
  {
    name: "Psicología",
    description: "Para mejorar tu bienestar mental",
    href: "/servicios/psicologia",
    icon: IconPsicology,
  },
  {
    name: "Fisioterapia y Pilates",
    description: "Para mejorar tu bienestar físico",
    href: "/servicios/fisioterapia-pilates",
    icon: IconYoga,
  },
  {
    name: "Yoga",
    description: "Trabaja con tu cuerpo y mente",
    href: "/servicios/yoga",
    icon: IconYoga,
  },
  /* {
    name: "Esteticien",
    description: "Siente bien y cuida tu cuerpo",
    href: "/servicios/esteticien",
    icon: iconHand,
  }, */
  {
    name: "Nutrición",
    description: "La base de tu bienestar",
    href: "/servicios/nutricion",
    icon: IconNutrition,
  },
];

export default function HeaderWithFlyoutMenu() {
  const { isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const callsToAction = [
    {
      name: !isAuthenticated ? "Regístrate" : "Reservas",
      href: !isAuthenticated ? "/register" : "/reservas",
      icon: !isAuthenticated ? IconRegisterUser : IconCalendar,
    },
    { name: "Reserva", href: "tel:698903934", icon: PhoneIcon },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cerrar el menú móvil cuando cambie la URL
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white z-100">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tacte</span>
            <img
              alt="Tacte"
              src="/logo-tacte.png"
              className="h-8 w-auto"
              style={{
                filter: "invert(1)",
              }}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 z-100">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Servicios
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        color="#553ccc"
                        aria-hidden="true"
                        /* className="size-6" */
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                      color="#553ccc"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link
            href="/profesionales"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Profesionales
          </Link>
          <Link
            href={"/reservas"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Reservas
          </Link>
          <Link
            href="/contacto"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Contacto
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isAuthenticated ? (
            <div
              className="text-sm/6 font-semibold text-gray-900 cursor-pointer text-blue-500"
              onClick={() => logout()}
            >
              Cerrar sesión <span aria-hidden="true">&rarr;</span>
            </div>
          ) : (
            <Link
              href="/login"
              className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
            >
              Inciar sesión <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Tacte</span>
              <img
                alt=""
                src="/logo-tacte.png"
                className="h-8 w-auto"
                style={{
                  filter: "invert(1)",
                }}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Servicios
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href={
                    isAuthenticated ? "/reservas" : "/login?redirect=/reservas"
                  }
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Reservas
                </Link>
                <Link
                  href="/contacto"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </Link>
                <Link
                  href="/profesionales"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Profesionales
                </Link>
              </div>
              <div className="py-6">
                {isAuthenticated ? (
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    Cerrar sesión
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    Iniciar sesión
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
