import Link from "next/link";

const people = [
    {
        name: "Alex Monzó",
        role: "Osteopatía y Quiromasaje",
        imageUrl: "https://placehold.co/208x260",
        bio: "Mi propósito es acompañarte a recuperar tu bienestar a través de un enfoque global y adaptado a ti. En cada sesión trabajamos juntos para entender lo que tu cuerpo necesita, liberar tensiones y avanzar en tu proceso de sanación",
        link: "/profesionales/alex-monzo",
        description:
            "Mi propósito es acompañarte a recuperar tu bienestar a través de un enfoque global y adaptado a ti. En cada sesión trabajamos juntos para entender lo que tu cuerpo necesita, liberar tensiones y avanzar en tu proceso de sanación",
    },
    {
        name: "Alexandra Poveda",
        role: "Danza y Yoga",
        imageUrl: "https://placehold.co/208x260",
        bio: "Soy graduada en Pedagogía de la Danza y he integrado el yoga en mi camino como una práctica de conexión cuerpo-mente. Mi objetivo es crear un espacio donde cada persona pueda habitar su cuerpo, cultivar calma y transformar su relación consigo misma.",
        link: "/profesionales/alexandra-poveda",
        description:
            "Soy graduada en Pedagogía de la Danza y he integrado el yoga en mi camino como una práctica de conexión cuerpo-mente. Mi objetivo es crear un espacio donde cada persona pueda habitar su cuerpo, cultivar calma y transformar su relación consigo misma.",
    },
    {
        name: "Vera Dominguez",
        role: "Fisioterapia y Pilates",
        imageUrl: "https://placehold.co/208x260",
        bio: "Soy fisioterapeuta graduada por la UMH, con más de 10 años de experiencia y especialización en suelo pélvico, embarazo y posparto. Complemento mi práctica con acupuntura, aromaterapia y ejercicio terapéutico. Mi misión es escuchar, comprender y acompañar a cada paciente en su proceso.",
        link: "/profesionales/vera-dominguez",
        description:
            "Soy fisioterapeuta graduada por la UMH, con más de 10 años de experiencia y especialización en suelo pélvico, embarazo y posparto. Complemento mi práctica con acupuntura, aromaterapia y ejercicio terapéutico. Mi misión es escuchar, comprender y acompañar a cada paciente en su proceso.",
    },
    {
        name: "Laura Amorós",
        role: "Psicología y Acompañamiento Emocional",
        imageUrl: "https://placehold.co/208x260",
        bio: "Soy psicóloga graduada por la Universitat Oberta de Cataluña, con especialización en depresión posparto y terapias de tercera generación. Mi enfoque integra aceptación, autocompasión y regulación emocional para acompañar a niños, adolescentes y adultos en sus procesos vitales.",
        link: "/profesionales/laura-amoros",
        description:
            "Soy psicóloga graduada por la Universitat Oberta de Cataluña, con especialización en depresión posparto y terapias de tercera generación. Mi enfoque integra aceptación, autocompasión y regulación emocional para acompañar a niños, adolescentes y adultos en sus procesos vitales.",
    },
    {
        name: "Raquel Polo",
        role: "Nutricionista",
        imageUrl: "https://placehold.co/208x260",
        bio: "Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna.",
        link: "/profesionales/raquel-polo",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
];

export default function TeamPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Conoce a nuestro equipo
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Somos un equipo de profesionales apasionados por el
                        bienestar y la salud.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {/* <Link href={person.link} key={person.name}> */}
                    {people.map((person) => (
                        <li
                            key={person.name}
                            className="flex flex-col gap-6 xl:flex-row"
                        >
                            <img
                                alt="profesional"
                                src={person.imageUrl}
                                className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                            />
                            <div className="flex-auto">
                                <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                                    {person.name}
                                </h3>
                                <p className="text-base/7 text-gray-600">
                                    {person.role}
                                </p>
                                <p className="mt-6 text-base/7 text-gray-600">
                                    {person.bio}
                                </p>
                            </div>
                        </li>
                    ))}
                    {/* </Link> */}
                </ul>
            </div>
        </div>
    );
}
