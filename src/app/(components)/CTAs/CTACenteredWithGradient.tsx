"use client";

import Link from "next/link";
import { GlassButton } from "../Buttons/Buttons";
import SvgCercleDegradation from "../SVGDecoration/SvgCercleDegradation";
import { useAuth } from "@/hooks/useAuth";

export default function CTACenteredWithGradient() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="relative isolate overflow-hidden bg-tacte-primary-700">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Mejora ahora tu bienestar
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-tacte-primary-50">
            Reserva tu cita hoy y da el primer paso hacia una vida más
            saludable, equilibrada y plena. No pospongas lo que tu cuerpo y
            mente necesitan: empieza hoy a cuidarte como mereces.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <GlassButton
              href={isAuthenticated ? "/reservas" : "/login?redirect=/reservas"}
            >
              Reserva tu cita
            </GlassButton>
            <Link
              href="/contacto"
              className="text-sm/6 font-semibold text-white hover:text-gray-300"
            >
              Contáctanos <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <SvgCercleDegradation
        innerColor="#7775D6"
        color="#E935C1"
        className="absolute top-0 right-0 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
      />
    </div>
  );
}
