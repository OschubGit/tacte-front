const stats = [
  { label: "Años de experiencia", value: "+10" },
  { label: "Servicios de bienestar", value: "+5" },
  { label: "Profesionales especializados", value: "4" },
];

const values = [
  {
    name: "Escucha activa",
    description:
      "Cada persona llega con una historia única. Antes de cualquier tratamiento, nos tomamos el tiempo de escuchar y comprender lo que tu cuerpo y tu mente necesitan.",
  },
  {
    name: "Enfoque global",
    description:
      "No tratamos síntomas aislados. Trabajamos desde una visión integral del ser humano, conectando lo físico, lo emocional y lo mental.",
  },
  {
    name: "Formación continua",
    description:
      "El conocimiento evoluciona y nosotros con él. Nuestro equipo se forma y actualiza de manera constante para ofrecerte siempre lo mejor.",
  },
  {
    name: "Cercanía y confianza",
    description:
      "Creemos que la confianza es la base de cualquier proceso de sanación. Nos importa que te sientas cómodo, respetado y acompañado en cada sesión.",
  },
  {
    name: "Personalización",
    description:
      "No hay dos cuerpos iguales ni dos procesos idénticos. Cada tratamiento se adapta a ti, a tu momento y a tus objetivos.",
  },
  {
    name: "Compromiso real",
    description:
      "No buscamos dependencias, sino autonomía. Nuestro objetivo es que salgas de cada sesión con más herramientas y más bienestar que cuando llegaste.",
  },
];

const team = [
  {
    name: "Alex Monzó",
    role: "Osteopatía y Quiromasaje",
    imageUrl: "/profesionals/alex-ptoffesional.webp",
  },
  {
    name: "Alexandra Poveda",
    role: "Danza y Yoga",
    imageUrl: "/profesionals/alexandra.jpeg",
  },
  {
    name: "Paco Monzó",
    role: "Quiromasajista y Acupuntor",
    imageUrl: "/profesionals/paco-monzo.jpeg",
  },
  {
    name: "Isabel Barberá",
    role: "Estética y Belleza",
    imageUrl: "/profesionals/isabel_barbera.jpg",
  },
];

export default function HistoryPage() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="history-grid"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#history-grid)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                    Nuestra historia
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Un proyecto nacido de la vocación, el legado familiar y el
                    compromiso con el bienestar de las personas. Desde un
                    problema de espalda hasta un centro de salud integral — esta
                    es nuestra historia.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative">
                      <img
                        alt="Masaje deportivo"
                        src="/images/hero_masaje_deportivo.webp"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt="Yoga"
                        src="/images/hero_yoga.webp"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt="Osteopatía"
                        src="/images/hero_osteopatia.webp"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt="Estética"
                        src="/images/hero_estetica.jpg"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt="Bienestar"
                        src="/images/split_image.webp"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Historia + Stats */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              El origen
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto space-y-6 text-base/7 text-gray-700">
                <p className="text-xl/8 text-gray-600">
                  Hace algunos años, mi trayectoria profesional transcurría en
                  el ámbito de la hostelería. Sin embargo, un día mi vida dio un
                  giro inesperado: comencé a padecer intensos problemas de
                  espalda que me obligaron a replantearme mi futuro.
                </p>
                <p>
                  Aquella circunstancia, lejos de detenerme, me impulsó a
                  explorar nuevos horizontes y a iniciar un camino de formación
                  en torno al cuerpo humano y la salud. Fue precisamente ese
                  proceso de aprendizaje el que me permitió descubrir y
                  adentrarme en el ámbito en el que hoy desarrollo mi labor con
                  pasión y compromiso.
                </p>
                <p>
                  En este recorrido, mis padres desempeñaron un papel
                  fundamental como referentes. Mi padre se dedicaba al
                  quiromasaje, mientras que mi madre orientaba su actividad
                  hacia el sector estético. Ambos encarnaban una forma de vida y
                  de servicio que siempre me resultó profundamente inspiradora,
                  al estar centrada en mejorar el bienestar de las personas.
                </p>
                <p>
                  Motivado por ese legado y por mi propia vocación, tomé la
                  decisión de crecer profesionalmente y emprender mi propio
                  proyecto. Comencé en solitario, con esfuerzo y determinación.
                  Con el tiempo, nuestros caminos se unieron, y hoy formamos una
                  familia que comparte un mismo propósito: ofrecer lo mejor de
                  nosotros mismos para ayudar a las personas a comprender y
                  tratar sus dolencias físicas, contribuyendo así a mejorar su
                  calidad de vida.
                </p>
                <p className="font-semibold text-gray-900">
                  Alex Monzó — Fundador de Tacte
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base/7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen full-width */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt="Tacte centro de bienestar"
            src="/images/hero_team.webp"
            className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
          />
        </div>

        {/* Valores */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Nuestros valores
            </h2>
            <p className="mt-6 text-lg/8 text-gray-700">
              El bienestar de las personas es nuestra brújula. Estos son los
              principios que guían cada sesión, cada decisión y cada relación.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Equipo */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8 pb-32">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              El equipo
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Profesionales apasionados que comparten un mismo propósito:
              ayudarte a recuperar y mantener tu bienestar.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-4 lg:mx-0 lg:max-w-none"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="mx-auto size-24 rounded-full object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm/6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
