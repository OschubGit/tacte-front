"use client";

import { PrimaryButton } from "../Buttons/Buttons";
import SvgCercleDegradation from "../SVGDecoration/SvgCercleDegradation";
import { useAuth } from "@/hooks/useAuth";

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
  const { isAuthenticated } = useAuth();
  return (
    <div className="bg-tacte-primary-50 relative isolate overflow-hidden">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                  {title}
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 font-secondary">
                  {description}
                </p>
                <div className="mt-10 flex items-center gap-x-6 font-secondary">
                  <PrimaryButton
                    href={
                      isAuthenticated
                        ? "/reservas"
                        : "/login?redirect=/reservas"
                    }
                  >
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
