"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const router = useRouter();
  const { register, isLoading, error, isAuthenticated, clearError } = useAuth();

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    const success = await register(
      formData.name,
      formData.email,
      formData.password,
      formData.password_confirmation
    );

    if (success) {
      // Registro exitoso - el usuario ya está logueado
      router.push("/");
    }
  };

  return (
    <>
      <div className="flex h-screen bg-white">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                alt="Your Company"
                src="/logo-tacte.png"
                className="h-6 w-auto"
                style={{
                  filter: "invert(1)",
                }}
              />
              <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
                Registrarse
              </h2>
              <p className="mt-2 text-sm/6 text-gray-500">
                Ya estás registrado?{" "}
                <a
                  href="/login"
                  className="font-semibold text-tacte-primary-600 hover:text-tacte-primary-500"
                >
                  Iniciar sesión aquí
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Nombre
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-tacte-primary-300 focus:outline-2 focus:-outline-offset-2 focus:outline-tacte-primary-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
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
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-tacte-primary-300 focus:outline-2 focus:-outline-offset-2 focus:outline-tacte-primary-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Contraseña
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-tacte-primary-300 focus:outline-2 focus:-outline-offset-2 focus:outline-tacte-primary-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password_confirmation"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Confirmar contraseña
                    </label>
                    <div className="mt-2">
                      <input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        required
                        autoComplete="new-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-tacte-primary-300 focus:outline-2 focus:-outline-offset-2 focus:outline-tacte-primary-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-between">
                                        <div className="text-sm/6">
                                            <a
                                                href="#"
                                                className="font-semibold text-tacte-primary-600 hover:text-tacte-primary-500"
                                            >
                                                Olvidé mi contraseña
                                            </a>
                                        </div>
                                    </div> */}

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex w-full justify-center rounded-md bg-tacte-primary-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-tacte-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tacte-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Iniciando registro..." : "Registrarse"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            alt=""
            src="https://placehold.co/487x755/000000/fdfdfd"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
