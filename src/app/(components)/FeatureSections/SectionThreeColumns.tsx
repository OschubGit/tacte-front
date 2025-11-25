"use client";

import IconNutrition from "../icons/IconNutrition";
import IconPsicology from "../icons/IconPsicology";
import IconYoga from "../icons/IconYoga";
import IconMassage from "../icons/IconMassage";
import Link from "next/link";
import iconHand from "../icons/iconHand";

const features = [
  {
    name: "Masaje Técnico y Relajante",
    description:
      "Ayudamos a las personas a mejorar su calidad de vida con masajes y también a evaluar estructuras para saber como poder enfocar un tratamiento.",
    href: "/servicios/masaje",
    icon: IconMassage,
  },
  {
    name: "Nutrición",
    description:
      "Incluye mediciones (antropometrías), planing de comidas y recetas adaptadas a tus necesidades y horarios de tu dia a dia.",
    href: "/servicios/nutricion",
    icon: IconNutrition,
  },
  {
    name: "Psicología",
    description:
      "El objetivo es comprender como sentimos y pensamos. Puede aplicarse en la salud mental, la educación, el trabajo o el desarrollo personal.",
    href: "/servicios/psicologia",
    icon: IconPsicology,
  },
  {
    name: "Yoga",
    description:
      "Clases enfocadas en buscar la funcionalidad de nuestro cuerpo y mejorar nuestra postura y reforzar el equilibrio tanto mental como físico.",
    href: "/servicios/yoga",
    icon: IconYoga,
  },
  {
    name: "Fisioterapia y Pilates",
    description:
      "En fisioterapia y pilates evaluamos tus patologías y con ello trabajar para mejorar tu calidad de vida, la fuerza, equilibrio, resistencia y respiración.",
    href: "/servicios/fisioterapia-pilates",
    icon: IconYoga,
  },
  {
    name: "Estética",
    description:
      "La misión es cuidar tu parte mas externa de tu cuerpo. El cuerpo hay que tratarlo bien con masajes y mimarlo con los mejores tratamientos.",
    href: "/servicios/esteticien",
    icon: iconHand,
  },
];

export default function SectionThreeColumns() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            ¿Quiénes somos y qué ofrecemos?
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Somos un centro de masajes y bienestar. Ofrecemos una variedad de
            servicios relacionados con la salud en un mismo lugar. Nuestro
            equipo está compuesto por profesionales comprometidos con tu
            evolución y salud.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-tacte-primary-600">
                    <feature.icon
                      aria-hidden="true"
                      /* className="size-6" */
                      color="#ffffff"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm/6 font-semibold text-tacte-primary-600 hover:text-tacte-primary-300"
                    >
                      Ver servicio <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
