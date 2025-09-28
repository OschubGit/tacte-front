"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/hooks/useAuth";

interface NavigationItem {
  name: string;
  href: string;
}

interface LandingHeroProps {
  type?: string;
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

const defaultNavigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function LandingHero({
  type,
  navigation = defaultNavigation,
  logo = {
    src: "/logo-tacte.png",
    alt: "Tacte",
  },
  title,
  description,
  backgroundImage = "/services/yoga-alexandra.png",
  ctaPrimary = {
    text: "Reservar clase",
    href: "#",
  },
  ctaSecondary = {
    text: "Ver horarios",
    href: "#",
  },
  announcement = {
    text: "Reserva tu clase aquí",
    linkText: "Reservar",
    linkHref: "/reservas",
  },
}: LandingHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          /* src={backgroundImage} */
          src="https://placehold.co/1530x928/0f0f0d/0f0f0d"
          className="absolute inset-0 -z-10 size-full object-cover filter blur-xs"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm/6 text-tacte-primary-50 ring-1 ring-tacte-primary-50 hover:ring-tacte-primary-100">
                                {announcement.text}{" "}
                                <a
                                    href={announcement.linkHref}
                                    className="font-bold text-tacte-primary-50 hover:text-tacte-primary-100"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0"
                                    />
                                    {announcement.linkText}{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div> */}
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                {title}
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-tacte-primary-50 sm:text-xl/8">
                {description}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {type !== "yoga" ? (
                  <a
                    href={"tel:+34698903934"}
                    className="rounded-md bg-tacte-primary-50 px-3.5 py-2.5 text-sm font-semibold text-tacte-primary-800 shadow-xs hover:bg-tacte-primary-100 hover:text-tacte-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tacte-primary-500"
                  >
                    {ctaPrimary.text}
                  </a>
                ) : (
                  <>
                    <a
                      href={
                        isAuthenticated
                          ? "/reservas"
                          : "/login?redirect=/reservas"
                      }
                      className="rounded-md bg-tacte-primary-50 px-3.5 py-2.5 text-sm font-semibold text-tacte-primary-800 shadow-xs hover:bg-tacte-primary-100 hover:text-tacte-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tacte-primary-500"
                    >
                      {ctaPrimary.text}
                    </a>
                    {/* <a
                      href={ctaSecondary.href}
                      className="text-sm/6 font-semibold text-white"
                    >
                      {ctaSecondary.text} <span aria-hidden="true">→</span>
                    </a> */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
