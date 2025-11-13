import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Política de Cookies
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Política de Cookies de Tacte Centro de Bienestar Integral.
          </p>
        </div>
      </div>
      <main className="mx-auto w-full max-w-4xl px-6 pb-16 sm:px-8 lg:pb-24">
        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-gray-500 mb-8">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <p className="mb-6">
                Bienvenida/o a la <strong>POLÍTICA DE COOKIES</strong> de la
                página web de la entidad Alex Monzó Barberá, provista de NIF
                20098073Y, donde te explicaremos en un lenguaje claro y sencillo
                todas las cuestiones necesarias para que puedas tener el control
                sobre ellas en base a tus decisiones personales.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                ¿QUÉ SON LAS COOKIES Y PARA QUÉ LAS USAMOS?
              </h2>
              <p className="mb-4">
                Una <strong>cookie</strong> o galleta informática es un pequeño
                archivo de información que se guarda en tu ordenador,
                "smartphone" o tableta cada vez que visitas nuestra página web.
              </p>
              <p className="mb-4">
                En principio, una cookie es inofensiva: no contiene virus,
                troyanos, gusanos, etc. que puedan dañar tu terminal, pero sí
                tiene cierto impacto sobre tu derecho a la protección de tus
                datos personales, pues recoge determinada información
                concerniente a tu persona (hábitos de navegación, identidad,
                preferencias, etc.).
              </p>
              <p className="mb-6">
                Es por ello que, en base a lo establecido en la normativa
                aplicable (LSSI y normativa vigente de protección de datos
                personales), la activación de determinados tipos de cookies
                necesitará de tu autorización previa.
              </p>

              <p className="mb-4">
                Antes de ello, te daremos alguna información adicional que te
                ayudará a una mejor toma de decisiones al respecto:
              </p>

              <p className="mb-4">
                Las cookies pueden ser de varios tipos en función de su
                finalidad:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Las <strong>cookies técnicas</strong> son necesarias para que
                  nuestra página web pueda funcionar, no necesitan de tu
                  autorización y son las únicas que tenemos activadas por
                  defecto.
                </li>
                <li>
                  El resto de cookies sirven para mejorar nuestra página, para
                  personalizarla en base a tus preferencias, o para poder
                  mostrarte publicidad ajustada a tus búsquedas, gustos e
                  intereses personales.
                </li>
              </ul>

              <p className="mb-6">
                Puedes aceptar todas estas cookies pulsando el botón{" "}
                <strong>ACEPTAR</strong>, rechazarlas pulsando el botón{" "}
                <strong>RECHAZAR</strong> o configurarlas clicando en el
                apartado <strong>CONFIGURACIÓN DE COOKIES</strong>.
              </p>

              <p className="mb-4">
                Algunas cookies son nuestras (las denominaremos{" "}
                <strong>cookies propias</strong>) y otras pertenecen a empresas
                externas que prestan servicios para nuestra página web (las
                denominaremos <strong>cookies de terceros</strong>: un ejemplo
                podrían ser las cookies de proveedores externos como Google).
              </p>

              <p className="mb-4">
                En este sentido, es importante que sepas que algunos de dichos
                proveedores externos pueden estar ubicados fuera de España. A
                nivel mundial, no todos los países tienen un mismo nivel de
                protección de datos, existiendo algunos países más seguros que
                otros (por ejemplo, la Unión Europea es un entorno seguro para
                tus datos).
              </p>

              <p className="mb-4">
                Nuestra política es recurrir a proveedores confiables que, con
                independencia de que se encuentren o no ubicados en la Unión
                Europea, hayan adoptado las garantías adecuadas para la
                protección de tu información personal.
              </p>

              <p className="mb-6">
                No obstante, en el apartado denominado{" "}
                <strong>
                  ¿QUÉ TIPO DE COOKIES SE UTILIZAN ACTUALMENTE EN NUESTRA PÁGINA
                  WEB?
                </strong>
                , puedes consultar las distintas Políticas de privacidad y
                protección de datos de cada uno de los referidos proveedores
                externos, a fin de tomar una decisión consciente sobre la
                activación o no de las cookies de terceros que utiliza nuestra
                página web.
              </p>

              <p className="mb-4">
                Finalmente, indicarte que, en función del plazo de tiempo que
                permanecen activas, las cookies pueden ser de dos tipos:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Cookies de sesión:</strong> expiran automáticamente
                  cuando terminas la sesión en tu ordenador, "smartphone" o
                  tableta. Suelen emplearse para conservar la información
                  necesaria mientras se te presta un servicio en una sola
                  ocasión.
                </li>
                <li>
                  <strong>Cookies persistentes:</strong> permanecen almacenadas
                  en tu ordenador, "smartphone" o tableta durante un periodo
                  determinado, que puede variar desde unos minutos hasta varios
                  años.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                ¿QUÉ TIPO DE COOKIES PODEMOS UTILIZAR EN NUESTRA PÁGINA WEB?
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Cookies Técnicas
              </h3>
              <p className="mb-6">
                Las cookies técnicas son estrictamente necesarias para que
                nuestra página web funcione y puedas navegar por la misma. Este
                tipo de cookies son las que, por ejemplo, nos permiten
                identificarte, darte acceso a determinadas partes restringidas
                de la página si fuese necesario, o recordar diferentes opciones
                o servicios ya seleccionados por ti, como tus preferencias de
                privacidad. Por ello, están activadas por defecto, no siendo
                necesaria tu autorización al respecto. A través de la
                configuración de tu navegador, puedes bloquear o alertar de la
                presencia de este tipo de cookies, si bien dicho bloqueo
                afectará al correcto funcionamiento de las distintas
                funcionalidades de nuestra página web.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Cookies de Análisis
              </h3>
              <p className="mb-6">
                Las cookies de análisis nos permiten estudiar la navegación de
                los usuarios de nuestra página web en general (por ejemplo, qué
                secciones de la página son las más visitadas, qué servicios se
                usan más y si funcionan correctamente, etc.). A partir de la
                información estadística sobre la navegación en nuestra página
                web, podemos mejorar tanto el propio funcionamiento de la página
                como los distintos servicios que ofrece. Por tanto, estas
                cookies no tienen una finalidad publicitaria, sino que
                únicamente sirven para que nuestra página web funcione mejor,
                adaptándose a nuestros usuarios en general. Activándolas
                contribuirás a dicha mejora continua. Puedes activar o
                desactivar estas cookies marcando la casilla correspondiente,
                estando desactivadas por defecto.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Cookies de Funcionalidad y Personalización
              </h3>
              <p className="mb-6">
                Las cookies de funcionalidad nos permiten recordar tus
                preferencias, para personalizar a tu medida determinadas
                características y opciones generales de nuestra página web, cada
                vez que accedas a la misma (por ejemplo, el idioma en que se te
                presenta la información, las secciones marcadas como favoritas,
                tu tipo de navegador, etc.). Por tanto, este tipo de cookies no
                tienen una finalidad publicitaria, sino que activándolas
                mejorarás la funcionalidad de la página web (por ejemplo,
                adaptándose a tu tipo de navegador) y la personalización de la
                misma en base a tus preferencias (por ejemplo, presentando la
                información en el idioma que hayas escogido en anteriores
                ocasiones), lo cual contribuirá a la facilidad, usabilidad y
                comodidad de nuestra página durante tu navegación. Puedes
                activar o desactivar estas cookies marcando la casilla
                correspondiente, estando desactivadas por defecto.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Cookies de Publicidad
              </h3>
              <p className="mb-6">
                Las cookies de publicidad nos permiten la gestión de los
                espacios publicitarios incluidos en nuestra página web en base a
                criterios como el contenido mostrado o la frecuencia en la que
                se muestran los anuncios. Así por ejemplo, si se te ha mostrado
                varias veces un mismo anuncio en nuestra página web, y no has
                mostrado un interés personal haciendo clic sobre él, este no
                volverá a aparecer. En resumen, activando este tipo de cookies,
                la publicidad mostrada en nuestra página web será más útil y
                diversa, y menos repetitiva. Puedes activar o desactivar estas
                cookies marcando la casilla correspondiente, estando
                desactivadas por defecto.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Cookies de Publicidad Comportamental
              </h3>
              <p className="mb-6">
                Las cookies de publicidad comportamental nos permiten obtener
                información basada en la observación de tus hábitos y
                comportamientos de navegación en la web, a fin de poder
                mostrarte contenidos publicitarios que se ajusten mejor a tus
                gustos e intereses personales. Para que lo entiendas de manera
                muy sencilla, te pondremos un ejemplo ficticio: si tus últimas
                búsquedas en la web estuviesen relacionadas con literatura de
                suspense, te mostraríamos publicidad sobre libros de suspense.
                Por tanto, activando este tipo de cookies, la publicidad que te
                mostremos en nuestra página web no será genérica, sino que
                estará orientada a tus búsquedas, gustos e intereses,
                ajustándose por tanto exclusivamente a ti. Puedes activar o
                desactivar estas cookies marcando la casilla correspondiente,
                estando desactivadas por defecto.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                ¿QUÉ TIPO DE COOKIES SE UTILIZAN ACTUALMENTE EN NUESTRA PÁGINA
                WEB?
              </h2>
              <p className="mb-6">
                <a
                  href="/configuracion-politica-de-cookies"
                  className="text-tacte-primary-500 underline bold"
                >
                  Ir a configuración de cookies
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                ¿QUÉ PUEDES HACER CON LAS COOKIES?
              </h2>
              <p className="mb-4">
                Cuando accedes por primera vez a nuestra página web, se te
                muestra una ventana en la que te informamos que las cookies
                pueden ser de varios tipos:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  Las <strong>cookies técnicas</strong> son necesarias para que
                  nuestra página web pueda funcionar, no necesitan de tu
                  autorización y son las únicas que tenemos activadas por
                  defecto.
                </li>
                <li>
                  El resto de cookies sirven para mejorar nuestra página, para
                  personalizarla en base a tus preferencias, o para poder
                  mostrarte publicidad ajustada a tus búsquedas, gustos e
                  intereses personales.
                </li>
              </ul>
              <p className="mb-6">
                Puedes aceptar todas estas cookies pulsando el botón{" "}
                <strong>ACEPTAR</strong>, rechazarlas pulsando el botón{" "}
                <strong>RECHAZAR</strong> o configurarlas clicando en el
                apartado <strong>CONFIGURACIÓN DE COOKIES</strong>.
              </p>

              <p className="mb-6">
                Informarte también que, una vez que hayas activado cualquier
                tipo de cookies, tienes la posibilidad de desactivarlas en el
                momento que desees, con el simple paso de desmarcar la casilla
                correspondiente en el apartado{" "}
                <strong>CONFIGURACIÓN DE COOKIES</strong> de nuestra página web.
                Siempre será tan sencillo para ti activar nuestras cookies
                propias como desactivarlas.
              </p>

              <p className="mb-6">
                Recordarte asimismo que, a través de la configuración de tu
                navegador, puedes bloquear o alertar de la presencia de cookies,
                si bien dicho bloqueo puede afectar al correcto funcionamiento
                de las distintas funcionalidades de nuestra página web en el
                caso de las cookies técnicas necesarias.
              </p>

              <p className="mb-4">
                Por último, indicarte que, si activas cookies de terceros
                (empresas externas que prestan servicios para nuestra página
                web) y posteriormente deseas desactivarlas, podrás hacerlo de
                dos formas:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Usando las herramientas de desactivación de cookies de tu
                  navegador
                </li>
                <li>
                  A través de los propios sistemas habilitados por dichos
                  proveedores externos
                </li>
              </ul>

              <p className="mb-4">
                Para que te sea mucho más fácil, a continuación te relacionamos
                una serie de enlaces a las pautas de desactivación de cookies de
                los navegadores de uso común:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Google Chrome:
                  https://support.google.com/chrome/answer/95647?hl=es
                </li>
                <li>
                  Mozilla Firefox:
                  https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias
                </li>
                <li>
                  Safari:
                  https://support.apple.com/es-es/guide/safari/sfri11471/mac
                </li>
                <li>
                  Safari para IOS (iPhone y iPad):
                  https://support.apple.com/es-es/HT201265
                </li>
                <li>
                  Google Chrome para Android:
                  https://support.google.com/chrome/answer/95647?hl=es&co=GENIE.Platform%3DAndroid
                </li>
                <li>
                  Google Chrome para iPhone y iPad:
                  https://support.google.com/chrome/answer/95647?hl=es&co=GENIE.Platform%3DiOS
                </li>
              </ul>

              <p className="mb-4">
                Así mismo, te relacionamos los enlaces a los sistemas propios
                habilitados por cada uno de los referidos proveedores externos
                para la desactivación de sus cookies:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Por ahora no tenemos ningún proveedor externo que necesite
                  desactivar sus cookies.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
