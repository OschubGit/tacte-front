import React from "react";

const PoliticaProteccionesDatosPage = () => {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
            Política de Protección de Datos
          </h1>

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
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                1. Información en cumplimiento de la normativa de protección de
                datos personales.
              </h2>
              <p className="mb-4">
                Sus datos personales serán usados para nuestra relación y poder
                prestarle nuestros servicios. Dichos datos son necesarios para
                poder relacionarnos con usted, lo que nos permite el uso de su
                información personal dentro de la legalidad. Asimismo, también
                pueden ser usados para otras actividades, como enviarle
                publicidad o promocionar nuestras actividades.
                <br />
                <br />
                Sólo el personal de nuestra entidad que esté debidamente
                autorizado podrá tener conocimiento de la información que le
                pedimos. Asimismo, podrán tener conocimiento de su información
                aquellas entidades que necesiten tener acceso a la misma para
                que podamos prestarle nuestros servicios.Igualmente, tendrán
                conocimiento de su información aquellas entidades públicas o
                privadas a las cuales estemos obligados a facilitar sus datos
                personales con motivo del cumplimiento de alguna ley.
                <br />
                <br /> No está prevista la transferencia de su información
                personal fuera del Espacio Económico Europeo.
                <br />
                <br />
                Conservaremos sus datos durante nuestra relación y mientras nos
                obliguen las leyes. Una vez finalizados los plazos legales
                aplicables, procederemos a eliminarlos de forma segura.
                <br />
                <br />
                En cualquier momento puede dirigirse a nosotros para saber qué
                información tenemos sobre usted, rectificarla si fuese
                incorrecta y eliminarla una vez finalizada nuestra relación, en
                el caso de que ello sea legalmente posible. También tiene
                derecho a solicitar el traspaso de su información a otra entidad
                (portabilidad). Para solicitar alguno de estos derechos, deberá
                realizar una solicitud escrita a nuestra dirección, para poder
                identificarle: Alex Monzó Barberá Carlos Tortosa Juan 10, 03640
                - Monover/Monovar (Alicante) En caso de que entienda que sus
                derechos han sido desatendidos por nuestra entidad, puede
                formular una reclamación en la Agencia Española de Protección de
                Datos (www.aepd.es).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                2. Permisos específicos
              </h2>
              <p className="mb-4">
                - Consiento el uso de los datos sobre mi salud para poder
                recibir los servicios solicitados. Consiento que se utilice mi
                número de teléfono para que Alex Monzó Barberá pueda comunicarse
                conmigo a través de la plataforma de mensajería multiplataforma
                WhatsApp, mejorando así la rapidez y eficacia de las distintas
                gestiones y comunicaciones.
                <br />
                <br />
                - Consiento que se utilice mi imagen para su publicación a
                través de las redes sociales con el fin de dar a conocer la
                entidad y difundir su actividad.
                <br />
                <br />
                - Consiento la publicación de mi imagen en Internet y otros
                medios similares para difundir las actividades de su entidad.
                <br />
                <br />
                - Podrá retirar estos consentimientos en cualquier momento.
                <br />
                <br />- En el caso de personas menores de 14 años o incapaces,
                deberá otorgar su permiso el padre, madre o tutor del menor o
                incapaz.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PoliticaProteccionesDatosPage;
