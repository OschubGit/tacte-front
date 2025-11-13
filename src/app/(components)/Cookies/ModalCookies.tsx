"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function ModalCookies({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  const handleAccept = () => {
    Cookies.set("technical-cookies", "true", { expires: 365 });
    onClose();
  };

  const handleConfigure = () => {
    router.push("/configuracion-politica-de-cookies");
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Política de cookies 🍪
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Una cookie o galleta informática es un pequeño archivo
                        de información que se guarda en tu ordenador,
                        “smartphone” o tableta cada vez que visitas nuestra
                        página web. Algunas cookies son nuestras y otras
                        pertenecen a empresas externas que prestan servicios
                        para nuestra página web.
                        <br />
                        <br /> Las cookies pueden ser de varios tipos: las
                        cookies técnicas son necesarias para que nuestra página
                        web pueda funcionar, no necesitan de tu autorización y
                        son las únicas que tenemos activadas por defecto.
                        <br />
                        <br /> El resto de cookies sirven para mejorar nuestra
                        página, para personalizarla en base a tus preferencias,
                        o para poder mostrarte publicidad ajustada a tus
                        búsquedas, gustos e intereses personales. Puedes aceptar
                        todas estas cookies pulsando el botón ACEPTAR,
                        rechazarlas pulsando el botón RECHAZAR o configurarlas
                        clicando en el apartado CONFIGURACIÓN DE COOKIES.
                        <br />
                        <br />
                        Si quieres más información, consulta la POLÍTICA DE
                        COOKIES de nuestra página web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex justify-between sm:px-6">
                <div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs hover:bg-red-100 border border-red-600 text-red-600 sm:ml-3 sm:w-auto cursor-pointer"
                  >
                    Cancelar
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    data-autofocus
                    onClick={handleConfigure}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto cursor-pointer"
                  >
                    Configurar cookies
                  </button>
                  <button
                    type="button"
                    data-autofocus
                    onClick={handleAccept}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-tacte-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-xs inset-ring inset-ring-gray-300 hover:bg-tacte-primary-300 sm:mt-0 sm:w-auto cursor-pointer"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
