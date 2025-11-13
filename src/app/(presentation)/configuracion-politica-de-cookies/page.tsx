"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const page = () => {
  // Función helper para leer cookies con valores por defecto
  const getCookieValue = (
    cookieName: string,
    defaultValue: boolean
  ): boolean => {
    if (typeof window === "undefined") return defaultValue;
    const cookieValue = Cookies.get(cookieName);
    if (cookieValue === undefined || cookieValue === null) return defaultValue;
    return cookieValue === "true";
  };

  useEffect(() => {
    Cookies.set("technical-cookies", "true", { expires: 365 });
    setTechnicalCookies(true);
  }, []);

  // Inicializar estados
  const [technicalCookies, setTechnicalCookies] = useState(false);
  const [analysisCookies, setAnalysisCookies] = useState(false);
  const [
    functionalityAndPersonalizationCookies,
    setFunctionalityAndPersonalizationCookies,
  ] = useState(false);
  const [advertisingCookies, setAdvertisingCookies] = useState(false);
  const [behavioralAdvertisingCookies, setBehavioralAdvertisingCookies] =
    useState(false);

  // Cargar valores de cookies al montar el componente
  useEffect(() => {
    // Asegurar que technicalCookies se lea correctamente después del montaje
    // Esto corrige cualquier problema de timing o hidratación
    const technicalCookieValue = getCookieValue("technical-cookies", true);
    setTechnicalCookies(technicalCookieValue);
    // Cargar las demás cookies
    setAnalysisCookies(getCookieValue("analysis-cookies", false));
    setFunctionalityAndPersonalizationCookies(
      getCookieValue("functionality-and-personalization-cookies", false)
    );
    setAdvertisingCookies(getCookieValue("advertising-cookies", false));
    setBehavioralAdvertisingCookies(
      getCookieValue("behavioral-advertising-cookies", false)
    );
  }, []);

  // Función helper para guardar cookies
  const saveCookie = (cookieName: string, value: boolean) => {
    if (typeof window !== "undefined") {
      Cookies.set(cookieName, value ? "true" : "false", { expires: 365 });
    }
  };

  // Handlers para actualizar estado y guardar cookies
  const handleTechnicalCookiesChange = (checked: boolean) => {
    setTechnicalCookies(checked);
    saveCookie("technical-cookies", checked);
  };

  const handleAnalysisCookiesChange = (checked: boolean) => {
    setAnalysisCookies(checked);
    saveCookie("analysis-cookies", checked);
  };

  const handleFunctionalityCookiesChange = (checked: boolean) => {
    setFunctionalityAndPersonalizationCookies(checked);
    saveCookie("functionality-and-personalization-cookies", checked);
  };

  const handleAdvertisingCookiesChange = (checked: boolean) => {
    setAdvertisingCookies(checked);
    saveCookie("advertising-cookies", checked);
  };

  const handleBehavioralAdvertisingCookiesChange = (checked: boolean) => {
    setBehavioralAdvertisingCookies(checked);
    saveCookie("behavioral-advertising-cookies", checked);
  };

  return (
    <div className="bg-white">
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Configuración de cookies
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Configura las cookies que deseas aceptar o rechazar para mejorar tu
            experiencia en nuestra página web.
          </p>
        </div>
      </div>
      <main className="mx-auto w-full max-w-4xl px-6 pb-16 sm:px-8 lg:pb-24">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700">
            <section>
              <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-900">
                    COOKIES TÉCNICAS NECESARIAS
                  </p>
                  <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div className="max-w-xl text-sm text-gray-500">
                      <p id="renew-subscription-description">
                        Para que nuestra página web pueda funcionar. Activadas
                        por defecto.{" "}
                      </p>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
                      <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
                        <input
                          name="technical-cookies"
                          checked={technicalCookies}
                          onChange={(e) =>
                            handleTechnicalCookiesChange(e.target.checked)
                          }
                          type="checkbox"
                          aria-label="Cookies técnicas necesarias"
                          aria-describedby="renew-subscription-description"
                          className="absolute inset-0 appearance-none focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section id="technical-cookies-info" className="mt-6">
                <div className="bg-white sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <p className="text-base text-gray-900">
                      Las cookies técnicas son estrictamente necesarias para que
                      nuestra página web funcione y puedas navegar por la misma.
                      Este tipo de cookies son las que, por ejemplo, nos
                      permiten identificarte, darte acceso a determinadas partes
                      restringidas de la página si fuese necesario, o recordar
                      diferentes opciones o servicios ya seleccionados por ti,
                      como tus preferencias de privacidad. Por ello, están
                      activadas por defecto, no siendo necesaria tu autorización
                      al respecto. A través de la configuración de tu navegador,
                      puedes bloquear o alertar de la presencia de este tipo de
                      cookies, si bien dicho bloqueo afectará al correcto
                      funcionamiento de las distintas funcionalidades de nuestra
                      página web.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-white shadow sm:rounded-lg mt-10">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-900">COOKIES DE ANÁLISIS</p>
                  <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div className="max-w-xl text-sm text-gray-500">
                      <p id="renew-subscription-description">
                        Para la mejora continua de nuestra página web. Puedes
                        activarlas o desactivarlas.{" "}
                      </p>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
                      <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
                        <input
                          name="analysis-cookies"
                          checked={analysisCookies}
                          onChange={(e) =>
                            handleAnalysisCookiesChange(e.target.checked)
                          }
                          type="checkbox"
                          aria-label="Cookies de análisis"
                          aria-describedby="renew-subscription-description"
                          className="absolute inset-0 appearance-none focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section id="analysis-cookies-info" className="mt-6">
                <div className="bg-white sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <p className="text-base text-gray-900">
                      Las cookies de análisis nos permiten estudiar la
                      navegación de los usuarios de nuestra página web en
                      general (por ejemplo, qué secciones de la página son las
                      más visitadas, qué servicios se usan más y si funcionan
                      correctamente, etc.). A partir de la información
                      estadística sobre la navegación en nuestra página web,
                      podemos mejorar tanto el propio funcionamiento de la
                      página como los distintos servicios que ofrece. Por tanto,
                      estas cookies no tienen una finalidad publicitaria, sino
                      que únicamente sirven para que nuestra página web funcione
                      mejor, adaptándose a nuestros usuarios en general.
                      Activándolas contribuirás a dicha mejora continua. Puedes
                      activar o desactivar estas cookies marcando la casilla
                      correspondiente, estando desactivadas por defecto
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-white shadow sm:rounded-lg mt-10">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-900">
                    COOKIES DE FUNCIONALIDAD Y PERSONALIZACIÓN
                  </p>
                  <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div className="max-w-xl text-sm text-gray-500">
                      <p id="renew-subscription-description">
                        Para mejorar la funcionalidad y personalización de
                        nuestra página web en base a tus preferencias. Puedes
                        activarlas o desactivarlas.{" "}
                      </p>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
                      <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
                        <input
                          name="functionality-and-personalization-cookies"
                          checked={functionalityAndPersonalizationCookies}
                          onChange={(e) =>
                            handleFunctionalityCookiesChange(e.target.checked)
                          }
                          type="checkbox"
                          aria-label="Cookies de funcionalidad y personalización"
                          aria-describedby="renew-subscription-description"
                          className="absolute inset-0 appearance-none focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section
                id="functionality-and-personalization-cookies-info"
                className="mt-6"
              >
                <div className="bg-white sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <p className="text-base text-gray-900">
                      Las cookies de funcionalidad nos permiten recordar tus
                      preferencias, para personalizar a tu medida determinadas
                      características y opciones generales de nuestra página
                      web, cada vez que accedas a la misma (por ejemplo, el
                      idioma en que se te presenta la información, las secciones
                      marcadas como favoritas, tu tipo de navegador, etc.). Por
                      tanto, este tipo de cookies no tienen una finalidad
                      publicitaria, sino que activándolas mejorarás la
                      funcionalidad de la página web (por ejemplo, adaptándose a
                      tu tipo de navegador) y la personalización de la misma en
                      base a tus preferencias (por ejemplo, presentando la
                      información en el idioma que hayas escogido en anteriores
                      ocasiones), lo cual contribuirá a la facilidad, usabilidad
                      y comodidad de nuestra página durante tu navegación.
                      Puedes activar o desactivar estas cookies marcando la
                      casilla correspondiente, estando desactivadas por defecto.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-white shadow sm:rounded-lg mt-10">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-900">
                    COOKIES DE PUBLICIDAD
                  </p>
                  <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div className="max-w-xl text-sm text-gray-500">
                      <p id="renew-subscription-description">
                        Para mejorar la gestión de la publicidad mostrada en
                        nuestra página web, a fin de que sea más útil y diversa,
                        y menos repetitiva. Puedes activarlas o desactivarlas.
                      </p>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
                      <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
                        <input
                          name="advertising-cookies"
                          checked={advertisingCookies}
                          onChange={(e) =>
                            handleAdvertisingCookiesChange(e.target.checked)
                          }
                          type="checkbox"
                          aria-label="Cookies de publicidad"
                          aria-describedby="renew-subscription-description"
                          className="absolute inset-0 appearance-none focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section id="advertising-cookies-info" className="mt-6">
                <div className="bg-white sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <p className="text-base text-gray-900">
                      Las cookies de publicidad nos permiten la gestión de los
                      espacios publicitarios incluidos en nuestra página web en
                      base a criterios como el contenido mostrado o la
                      frecuencia en la que se muestran los anuncios. Así por
                      ejemplo, si se te ha mostrado varias veces un mismo
                      anuncio en nuestra página web, y no has mostrado un
                      interés personal haciendo clic sobre él, este no volverá a
                      aparecer. En resumen, activando este tipo de cookies, la
                      publicidad mostrada en nuestra página web será más útil y
                      diversa, y menos repetitiva. Puedes activar o desactivar
                      estas cookies marcando la casilla correspondiente, estando
                      desactivadas por defecto.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-white shadow sm:rounded-lg mt-10">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-900">
                    COOKIES DE PUBLICIDAD COMPORTAMENTAL
                  </p>
                  <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div className="max-w-xl text-sm text-gray-500">
                      <p id="renew-subscription-description">
                        Para mostrarte publicidad ajustada a tus búsquedas,
                        gustos e intereses personales.
                      </p>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
                      <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
                        <input
                          name="behavioral-advertising-cookies"
                          checked={behavioralAdvertisingCookies}
                          onChange={(e) =>
                            handleBehavioralAdvertisingCookiesChange(
                              e.target.checked
                            )
                          }
                          type="checkbox"
                          aria-label="Cookies de publicidad comportamental"
                          aria-describedby="renew-subscription-description"
                          className="absolute inset-0 appearance-none focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section
                id="behavioral-advertising-cookies-info"
                className="mt-6"
              >
                <div className="bg-white sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <p className="text-base text-gray-900">
                      Las cookies de publicidad comportamental nos permiten
                      obtener información basada en la observación de tus
                      hábitos y comportamientos de navegación en la web, a fin
                      de poder mostrarte contenidos publicitarios que se ajusten
                      mejor a tus gustos e intereses personales. Para que lo
                      entiendas de manera muy sencilla, te pondremos un ejemplo
                      ficticio: si tus últimas búsquedas en la web estuviesen
                      relacionadas con literatura de suspense, te mostraríamos
                      publicidad sobre libros de suspense. Por tanto, activando
                      este tipo de cookies, la publicidad que te mostremos en
                      nuestra página web no será genérica, sino que estará
                      orientada a tus búsquedas, gustos e intereses, ajustándose
                      por tanto exclusivamente a ti. Puedes activar o desactivar
                      estas cookies marcando la casilla correspondiente, estando
                      desactivadas por defecto.
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
