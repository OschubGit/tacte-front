"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";

type ModalLegalTermsProps = {
  open: boolean;
  onClose: () => void;
  onAccepted?: () => void;
};

export default function ModalLegalTerms({
  open,
  onClose,
  onAccepted,
}: ModalLegalTermsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const user = useAuthStore((state) => state.user);

  const resetState = () => {
    setError(null);
    setSuccess(null);
  };

  const handleClose = () => {
    if (isLoading) return;
    resetState();
    onClose();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await api.acceptLegalTerms(user?.id.toString() || "");

      if (response?.success) {
        setSuccess("Hemos registrado tu aceptación de los términos legales.");
        onAccepted?.();
      } else {
        setError(
          response?.message ||
            "No se pudo registrar la aceptación. Inténtalo nuevamente."
        );
      }
    } catch (err) {
      console.error("Error al enviar consentimiento:", err);
      setError("Error de conexión. Por favor, intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
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
            <form onSubmit={handleSubmit}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Aceptación de términos legales
                    </DialogTitle>
                    <p className="mt-2 text-sm text-gray-600">
                      Confírmanos que aceptas nuestras condiciones legales para
                      poder continuar.
                    </p>

                    {error && (
                      <div className="mt-4 rounded border border-red-400 bg-red-50 px-3 py-2 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    {success && (
                      <div className="mt-4 rounded border border-green-400 bg-green-50 px-3 py-2 text-sm text-green-700">
                        {success}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex w-full justify-center rounded-md bg-tacte-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-tacte-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tacte-primary-600 disabled:cursor-not-allowed disabled:opacity-60 sm:ml-3 sm:w-auto"
                >
                  {isLoading ? "Enviando..." : "Aceptar términos"}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cerrar
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
