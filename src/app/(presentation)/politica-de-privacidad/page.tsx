import React from "react";

const PoliticaDePrivacidadPage = () => {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
            Política de Privacidad
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
                datos personales
              </h2>
              <p className="mb-6">
                En Europa y en España existen normas de protección de datos
                pensadas para proteger su información personal de obligado
                cumplimiento para nuestra entidad. Por ello, es muy importante
                para nosotros que entienda perfectamente qué vamos a hacer con
                los datos personales que le pedimos. Así, seremos transparentes
                y le daremos el control de sus datos, con un lenguaje sencillo y
                opciones claras que le permitirán decidir qué haremos con su
                información personal.
              </p>
              <p className="mb-6">
                Por favor, si una vez leída la presente información le queda
                alguna duda, no dude en preguntarnos. Muchas gracias por su
                colaboración.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Quiénes somos?
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Nuestra denominación:</strong> Alex Monzó Barberá
                </li>
                <li>
                  <strong>Nuestro CIF / NIF:</strong> 20098073Y
                </li>
                <li>
                  <strong>Nuestra actividad principal:</strong> FISIOTERAPEUTA
                </li>
                <li>
                  <strong>Nuestra dirección:</strong> Carlos Tortosa Juan 10,
                  03640 - Monover/Monovar (Alicante)
                </li>
                <li>
                  <strong>Nuestro teléfono de contacto:</strong> 633615655
                </li>
                <li>
                  <strong>
                    Nuestra dirección de correo electrónico de contacto:
                  </strong>{" "}
                  alexmonzobarbera94@gmail.com
                </li>
                <li>
                  <strong>Nuestra página web:</strong>{" "}
                  <a
                    href="http://www.tactesalud.com/"
                    className="text-tacte-primary-600 hover:text-tacte-primary-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://www.tactesalud.com/
                  </a>
                </li>
              </ul>

              <p className="mb-6">
                Para su confianza y seguridad, le informamos que somos una
                entidad inscrita en el siguiente Registro Mercantil / Registro
                Público:
              </p>

              <p className="mb-6">
                Nuestra actividad principal está sujeta a un régimen de
                autorización administrativa previa. Para su confianza y
                seguridad, le facilitamos los datos relativos a dicha
                autorización y los identificativos del órgano competente de
                nuestra supervisión:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Autorización administrativa:</strong> (EN CASO DE QUE
                  LA ACTIVIDAD ESTÉ SUJETA A UN RÉGIMEN DE AUTORIZACIÓN
                  ADMINISTRATIVA)
                </li>
                <li>
                  <strong>Órgano encargado de nuestra supervisión:</strong> (EN
                  CASO DE QUE LA ACTIVIDAD ESTÉ SUJETA A UN RÉGIMEN DE
                  AUTORIZACIÓN ADMINISTRATIVA)
                </li>
              </ul>

              <p className="mb-6">
                El responsable de esta página web ejerce una profesión regulada,
                para lo cual le facilitamos la siguiente información:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Colegio profesional al que pertenece:</strong> (EN
                  CASO DE QUE EL RESPONSABLE DE LA PÁGINA WEB EJERZA UNA
                  PROFESIÓN REGULADA)
                </li>
                <li>
                  <strong>Título académico oficial o profesional:</strong> (EN
                  CASO DE QUE EL RESPONSABLE DE LA PÁGINA WEB EJERZA UNA
                  PROFESIÓN REGULADA)
                </li>
                <li>
                  <strong>
                    Estado de la Unión Europea en que se expidió dicho título:
                  </strong>{" "}
                  (EN CASO DE QUE EL RESPONSABLE DE LA PÁGINA WEB EJERZA UNA
                  PROFESIÓN REGULADA)
                </li>
                <li>
                  <strong>
                    Normas profesionales aplicables al ejercicio de la
                    profesión:
                  </strong>{" "}
                  (EN CASO DE QUE EL RESPONSABLE DE LA PÁGINA WEB EJERZA UNA
                  PROFESIÓN REGULADA)
                </li>
              </ul>

              <p className="mb-6">
                Estamos a su disposición, no dude en contactar con nosotros.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Para qué vamos a usar sus datos?
              </h3>
              <p className="mb-4">
                Con carácter general, sus datos personales serán usados para
                poder relacionarnos con usted y poder prestarle nuestros
                servicios.
              </p>
              <p className="mb-6">
                Asimismo, también pueden ser usados para otras actividades, como
                enviarle publicidad o promocionar nuestras actividades.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Por qué necesitamos usar sus datos?
              </h3>
              <p className="mb-6">
                Sus datos personales son necesarios para poder relacionarnos con
                usted y poder prestarle nuestros servicios. En este sentido,
                pondremos a su disposición una serie de casillas que le
                permitirán decidir de manera clara y sencilla sobre el uso de su
                información personal.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Quién va a conocer la información que le pedimos?
              </h3>
              <p className="mb-4">
                Con carácter general, sólo el personal de nuestra entidad que
                esté debidamente autorizado podrá tener conocimiento de la
                información que le pedimos.
              </p>
              <p className="mb-4">
                De igual modo, podrán tener conocimiento de su información
                personal aquellas entidades que necesiten tener acceso a la
                misma para que podamos prestarle nuestros servicios. Así por
                ejemplo, nuestro banco conocerá sus datos si el pago de nuestros
                servicios se realiza mediante tarjeta o transferencia bancaria.
              </p>
              <p className="mb-4">
                Asimismo, tendrán conocimiento de su información aquellas
                entidades públicas o privadas a las cuales estemos obligados a
                facilitar sus datos personales con motivo del cumplimiento de
                alguna ley. Poniéndole un ejemplo, la Ley Tributaria obliga a
                facilitar a la Agencia Tributaria determinada información sobre
                operaciones económicas que superen una determinada cantidad.
              </p>
              <p className="mb-6">
                En el caso de que, al margen de los supuestos comentados,
                necesitemos dar a conocer su información personal a otras
                entidades, le solicitaremos previamente su permiso a través de
                opciones claras que le permitirán decidir a este respecto.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Cómo vamos a proteger sus datos?
              </h3>
              <p className="mb-6">
                Protegeremos sus datos con medidas de seguridad eficaces en
                función de los riesgos que conlleve el uso de su información.
                Para ello, nuestra entidad ha aprobado una Política de
                Protección de Datos y se realizan controles y auditorías anuales
                para verificar que sus datos personales están seguros en todo
                momento.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Enviaremos sus datos a otros países?
              </h3>
              <p className="mb-4">
                En el mundo hay países que son seguros para sus datos y otros
                que no lo son tanto. Así por ejemplo, la Unión Europea es un
                entorno seguro para sus datos.
              </p>
              <p className="mb-6">
                Nuestra política es no enviar su información personal a ningún
                país que no sea seguro desde el punto de vista de la protección
                de sus datos. En el caso de que, con motivo de prestarle el
                servicio, sea imprescindible enviar sus datos a un país que no
                sea tan seguro como España, siempre le solicitaremos previamente
                su permiso y aplicaremos medidas de seguridad eficaces que
                reduzcan los riesgos del envío de su información personal a otro
                país.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Durante cuánto tiempo vamos a conservar sus datos?
              </h3>
              <p className="mb-6">
                Conservaremos sus datos durante nuestra relación y mientras nos
                obliguen las leyes. Una vez finalizados los plazos legales
                aplicables, procederemos a eliminarlos de forma segura y
                respetuosa con el medio ambiente.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Cuáles son sus derechos de protección de datos?
              </h3>
              <p className="mb-4">
                En cualquier momento puede dirigirse a nosotros para saber qué
                información tenemos sobre usted, rectificarla si fuese
                incorrecta y eliminarla una vez finalizada nuestra relación, en
                el caso de que ello sea legalmente posible.
              </p>
              <p className="mb-4">
                También tiene derecho a solicitar el traspaso de su información
                a otra entidad. Este derecho se llama "portabilidad" y puede ser
                útil en determinadas situaciones.
              </p>
              <p className="mb-4">
                Para solicitar alguno de estos derechos, deberá realizar una
                solicitud escrita a nuestra dirección, para poder identificarle.
                En las oficinas de nuestra entidad disponemos de formularios
                específicos para solicitar dichos derechos y le ofrecemos
                nuestra ayuda para su cumplimentación.
              </p>
              <p className="mb-6">
                Para saber más sobre sus derechos de protección de datos, puede
                consultar la página web de la{" "}
                <a
                  href="https://www.aepd.es"
                  className="text-tacte-primary-600 hover:text-tacte-primary-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agencia Española de Protección de Datos (www.aepd.es)
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Puede retirar su consentimiento si cambia de opinión en un
                momento posterior?
              </h3>
              <p className="mb-6">
                Usted puede retirar su consentimiento si cambia de opinión sobre
                el uso de sus datos en cualquier momento. Así por ejemplo, si
                usted en su día estuvo interesado/a en recibir publicidad de
                nuestros productos o servicios, pero ya no desea recibir más
                publicidad, puede hacérnoslo constar a través del formulario de
                oposición al tratamiento disponible en las oficinas de nuestra
                entidad.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                En caso de que entienda que sus derechos han sido desatendidos,
                ¿dónde puede formular una reclamación?
              </h3>
              <p className="mb-4">
                En caso de que entienda que sus derechos han sido desatendidos
                por nuestra entidad, puede formular una reclamación en la
                Agencia Española de Protección de Datos, a través de alguno de
                los medios siguientes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Sede electrónica:</strong>{" "}
                  <a
                    href="https://www.aepd.es"
                    className="text-tacte-primary-600 hover:text-tacte-primary-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.aepd.es
                  </a>
                </li>
                <li>
                  <strong>Dirección postal:</strong> Agencia Española de
                  Protección de Datos C/ Jorge Juan, 6 28001-Madrid
                </li>
                <li>
                  <strong>Vía telefónica:</strong> Telf. 901 100 099 / Telf. 91
                  266 35 17
                </li>
              </ul>
              <p className="mb-6">
                Formular una reclamación en la Agencia Española de Protección de
                Datos no conlleva ningún coste y no es necesaria la asistencia
                de abogado ni procurador.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Elaboraremos perfiles sobre usted?
              </h3>
              <p className="mb-4">
                Nuestra política es no elaborar perfiles sobre los usuarios de
                nuestros servicios.
              </p>
              <p className="mb-6">
                No obstante, pueden existir situaciones en las que, con fines de
                prestación del servicio, comerciales o de otro tipo, necesitemos
                elaborar perfiles de información sobre usted. Un ejemplo pudiera
                ser la utilización de su historial de compras o servicios para
                poder ofrecerle productos o servicios adaptados a sus gustos o
                necesidades. En tal caso, aplicaremos medidas de seguridad
                eficaces que protejan su información en todo momento de personas
                no autorizadas que pretendan utilizarla en su propio beneficio.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ¿Usaremos sus datos para otros fines?
              </h3>
              <p className="mb-6">
                Nuestra política es no usar sus datos para otras finalidades
                distintas a las que le hemos explicado. Si, no obstante,
                necesitásemos usar sus datos para actividades distintas, siempre
                le solicitaremos previamente su permiso a través de opciones
                claras que le permitirán decidir al respecto.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PoliticaDePrivacidadPage;
