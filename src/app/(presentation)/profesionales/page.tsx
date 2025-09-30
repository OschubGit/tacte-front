import Link from "next/link";

const people = [
  {
    name: "Alex Monzó",
    role: "Osteopatía y Quiromasaje",
    imageUrl: "/services/masage-vert-5.webp",
    bio: "Mi propósito es acompañarte a recuperar tu bienestar a través de un enfoque global y adaptado a ti. En cada sesión trabajamos juntos para entender lo que tu cuerpo necesita, liberar tensiones y avanzar en tu proceso de sanación",
    link: "/profesionales/alex-monzo",
    description:
      "Mi propósito es acompañarte a recuperar tu bienestar a través de un enfoque global y adaptado a ti. En cada sesión trabajamos juntos para entender lo que tu cuerpo necesita, liberar tensiones y avanzar en tu proceso de sanación",
  },
  {
    name: "Alexandra Poveda",
    role: "Danza y Yoga",
    imageUrl: "/profesionals/alexandra.webp",
    bio: "Soy graduada en Pedagogía de la Danza y he integrado el yoga en mi camino como una práctica de conexión cuerpo-mente. Mi objetivo es crear un espacio donde cada persona pueda habitar su cuerpo, cultivar calma y transformar su relación consigo misma.",
    link: "/profesionales/alexandra-poveda",
    description:
      "Soy graduada en Pedagogía de la Danza y he integrado el yoga en mi camino como una práctica de conexión cuerpo-mente. Mi objetivo es crear un espacio donde cada persona pueda habitar su cuerpo, cultivar calma y transformar su relación consigo misma.",
  },
  {
    name: "Vera Dominguez",
    role: "Fisioterapia y Pilates",
    imageUrl: "/profesionals/vera.webp",
    bio: "Soy fisioterapeuta graduada por la UMH, con más de 10 años de experiencia y especialización en suelo pélvico, embarazo y posparto. Complemento mi práctica con acupuntura, aromaterapia y ejercicio terapéutico. Mi misión es escuchar, comprender y acompañar a cada paciente en su proceso.",
    link: "/profesionales/vera-dominguez",
    description:
      "Soy fisioterapeuta graduada por la UMH, con más de 10 años de experiencia y especialización en suelo pélvico, embarazo y posparto. Complemento mi práctica con acupuntura, aromaterapia y ejercicio terapéutico. Mi misión es escuchar, comprender y acompañar a cada paciente en su proceso.",
  },
  {
    name: "Laura Amorós",
    role: "Psicología y Acompañamiento Emocional",
    imageUrl: "/profesionals/laura.webp",
    bio: "Soy psicóloga graduada por la Universitat Oberta de Cataluña, con especialización en depresión posparto y terapias de tercera generación. Mi enfoque integra aceptación, autocompasión y regulación emocional para acompañar a niños, adolescentes y adultos en sus procesos vitales.",
    link: "/profesionales/laura-amoros",
    description:
      "Soy psicóloga graduada por la Universitat Oberta de Cataluña, con especialización en depresión posparto y terapias de tercera generación. Mi enfoque integra aceptación, autocompasión y regulación emocional para acompañar a niños, adolescentes y adultos en sus procesos vitales.",
  },
  {
    name: "Raquel Polo",
    role: "Nutricionista",
    imageUrl: "/profesionals/raquel.webp",
    bio: "Soy dietista-nutricionista graduada por la Universidad de Alicante, con especialización en nutrición deportiva y trastornos de la conducta alimentaria. Mi enfoque se basa en crear hábitos saludables y sostenibles, adaptados a tu estilo de vida y objetivos personales.",
    link: "/profesionales/raquel-polo",
    description:
      "Soy dietista-nutricionista graduada por la Universidad de Alicante, con especialización en nutrición deportiva y trastornos de la conducta alimentaria. Mi enfoque se basa en crear hábitos saludables y sostenibles, adaptados a tu estilo de vida y objetivos personales.",
  },
  {
    name: "Isabel Barberá",
    role: "Estética y Belleza",
    imageUrl: "/profesionals/isabel_barbera.jpg",
    bio: "Como experta en estética y bienestar, combino técnicas avanzadas y tradicionales para ofrecer tratamientos faciales y corporales personalizados. Me dedico a potenciar tu belleza natural y bienestar integral, acompañándote con profesionalidad y cercanía en tu camino hacia el equilibrio físico y mental.",
    link: "/profesionales/isabel-barbera",
    description:
      "Como experta en estética y bienestar, combino técnicas avanzadas y tradicionales para ofrecer tratamientos faciales y corporales personalizados. Me dedico a potenciar tu belleza natural y bienestar integral, acompañándote con profesionalidad y cercanía en tu camino hacia el equilibrio físico y mental.",
  },
];

export default function TeamPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <img
          alt=""
          src="/images/hero_team.webp"
          className="absolute inset-0 -z-10 size-full object-cover opacity-10"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Nuestro equipo
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
            Somos un equipo de profesionales apasionados por el bienestar y la
            salud.
          </p>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {/* <Link href={person.link} key={person.name}> */}
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                <img
                  alt="profesional"
                  src={person.imageUrl}
                  className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="flex-auto">
                  <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base/7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base/7 text-gray-600">{person.bio}</p>
                </div>
              </li>
            ))}
            {/* </Link> */}
          </ul>
        </div>
      </div>
    </>
  );
}
