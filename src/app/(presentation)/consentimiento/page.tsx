"use client";

import { useState, useMemo } from "react";
import { api } from "@/lib/api";

export default function ConsentimientoPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Validación de campos
  const isFormValid = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.first_name.trim() !== "" &&
      formData.last_name.trim() !== "" &&
      formData.email.trim() !== "" &&
      emailRegex.test(formData.email)
    );
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar errores al cambiar campos
    if (error) setError(null);
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!isFormValid) {
      setError("Por favor, complete todos los campos correctamente.");
      return;
    }

    setIsLoading(true);

    try {
      // Enviar información al endpoint
      const response = await api.accepetConsent(
        formData.first_name,
        formData.last_name,
        formData.email
      );

      if (response.success || response.message) {
        setSuccess(true);
        // Limpiar formulario después de enviar
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
        });
      } else {
        setError(
          response.message ||
            "Error al enviar el formulario. Intente nuevamente."
        );
      }
    } catch (error) {
      console.error("Error al enviar consentimiento:", error);
      setError("Error de conexión. Por favor, intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="xl:pl-72">
          <div className="bg-white py-8 sm:py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Uso de consentimiento
                </h2>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Al rellenar este formulario, entiendo y acepto el uso de mis
                  datos y tratamiento del uso profesional.
                </p>
              </div>
            </div>
          </div>
          <main>
            {/* Settings forms */}
            <div className="divide-y divide-gray-200">
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <form onSubmit={handleSubmit} className="md:col-span-2">
                  {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                      {error}
                    </div>
                  )}
                  {success && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                      Formulario enviado correctamente. Gracias por su
                      consentimiento.
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Nombre
                      </label>
                      <div className="mt-2">
                        <input
                          id="first_name"
                          name="first_name"
                          type="text"
                          value={formData.first_name}
                          onChange={handleChange}
                          required
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Apellidos
                      </label>
                      <div className="mt-2">
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          value={formData.last_name}
                          onChange={handleChange}
                          required
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex">
                    <button
                      type="submit"
                      disabled={isLoading || !isFormValid}
                      className="rounded-md bg-tacte-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-tacte-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tacte-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Enviando..." : "Enviar"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
