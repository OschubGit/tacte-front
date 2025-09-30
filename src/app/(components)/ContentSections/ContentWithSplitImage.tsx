export default function ContentWithSplitImage() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt=""
              src="./images/split_image.webp"
              className="absolute inset-0 size-full bg-gray-50 object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            {/* <p className="text-base/7 font-semibold text-indigo-600">
                            
                        </p> */}
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Lo que encontrarás en Tacte
            </h2>
            <p className="mt-6 text-xl/8 text-gray-700">
              En Tacte creemos que el bienestar no es un lujo, sino una parte
              esencial de la vida. Por eso, hemos creado un espacio donde cada
              detalle está pensado para ayudarte a reconectar contigo mismo,
              aliviar tensiones y recuperar tu energía. Nuestro objetivo es que
              cada visita sea una experiencia transformadora, que aporte calma a
              tu mente y vitalidad a tu cuerpo.
            </p>
            <div className="mt-10 max-w-xl text-base/7 text-gray-600 lg:max-w-none">
              {/* <ul
                                role="list"
                                className="mt-8 space-y-8 text-gray-600"
                            >
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Push to deploy.
                                        </strong>{" "}
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            SSL certificates.
                                        </strong>{" "}
                                        Anim aute id magna aliqua ad ad non
                                        deserunt sunt. Qui irure qui lorem
                                        cupidatat commodo.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Database backups.
                                        </strong>{" "}
                                        Ac tincidunt sapien vehicula erat auctor
                                        pellentesque rhoncus. Et magna sit morbi
                                        lobortis.
                                    </span>
                                </li>
                            </ul> */}
              <p className="mt-8">
                <span className="underline font-bold">
                  Atención personalizada,
                </span>{" "}
                cada persona es única, y también lo son sus necesidades. Por eso
                adaptamos nuestras terapias para ofrecerte un acompañamiento
                cercano y a tu medida.{" "}
                <span className="underline font-bold">Ambiente relajante,</span>{" "}
                desde la música hasta la iluminación, hemos diseñado un entorno
                cálido y acogedor en el que puedas dejar atrás el estrés y
                disfrutar de un verdadero momento de paz.{" "}
                <span className="underline font-bold">
                  Profesionales comprometidos,
                </span>{" "}
                nuestro equipo está formado por especialistas con experiencia y
                vocación, que ponen todo su conocimiento y sensibilidad al
                servicio de tu bienestar.
              </p>
              <p className="mt-8">
                Ya sea que busques liberar el estrés acumulado, mejorar tu
                postura, aliviar molestias físicas o simplemente regalarte un
                instante de desconexión, en{" "}
                <span className="underline font-bold">
                  Tacte encontrarás un refugio pensado para ti.
                </span>{" "}
                Cada sesión es una invitación a cuidarte, escucharte y retomar
                tu equilibrio natural.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
