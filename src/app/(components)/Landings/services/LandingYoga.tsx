import React from "react";
import LandingHero from "../LandingHero";
import LandingFeatureSection from "../LandingFeatureSection";
import SimpleCarrousel from "../../Carrousel/SimpleCarrousel";
import LandingBenefits from "../LandingBenefits";
import CTACenteredWithGradient from "../../CTAs/CTACenteredWithGradient";
import LandingFaqs from "../LandingFaqs";
import LandingAboutMe from "../AboutMe";

const features = [
  {
    name: "Movimiento consciente",
    description:
      "Ejercicios de danza y yoga que ayudan a escuchar el cuerpo, soltar tensiones y recuperar energía vital.",
  },
  {
    name: "Respiración guiada",
    description:
      "Prácticas de respiración para calmar la mente, mejorar la concentración y potenciar la claridad emocional.",
  },
  {
    name: "Observación y autoconocimiento",
    description:
      "Un espacio para reconocer hábitos, emociones y sensaciones, abriendo la puerta al crecimiento personal.",
  },
  {
    name: "Acompañamiento y comunidad",
    description:
      "Un entorno seguro y cercano para compartir experiencias, crecer junto a otros y sentirse acompañado en el proceso.",
  },
];

const benefits = [
  {
    name: "Bienestar físico",
    description:
      "Mejora tu flexibilidad, fuerza y postura a través de movimientos conscientes que revitalizan el cuerpo.",
    href: "#bienestar-fisico",
    /* icon: (props) => <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 20c4.418 0 8-3.582 8-8S16.418 4 12 4 4 7.582 4 12s3.582 8 8 8z"/><path d="M12 8v4l3 3"/></svg> */
  },
  {
    name: "Equilibrio emocional",
    description:
      "Aprende a reconocer y soltar tensiones internas, cultivando calma y claridad en tu vida cotidiana.",
    href: "#equilibrio-emocional",
    /* icon: (props) => <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 3v18m9-9H3"/></svg> */
  },
  {
    name: "Autoconocimiento",
    description:
      "Explora tus sensaciones y emociones a través de la respiración y la observación consciente.",
    href: "#autoconocimiento",
    /* icon: (props) => <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> */
  },
  /* {
        name: "Conexión integral",
        description:
            "Encuentra la unión entre cuerpo, mente y espíritu en cada práctica, creando un espacio sagrado de crecimiento.",
        href: "#conexion-integral",
        icon: (props) => <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}><path d="M4.5 12.75l6 6 9-13.5"/></svg>
    }, */
];

const faqs = [
  {
    question: "¿Necesito experiencia previa en danza o yoga?",
    answer:
      "No, las clases están diseñadas para adaptarse a cualquier nivel. Lo importante es traer apertura y ganas de explorar.",
  },
  {
    question: "¿Qué debo llevar a las sesiones?",
    answer:
      "Ropa cómoda que permita moverte con libertad, una esterilla de yoga y, si lo deseas, una botella de agua.",
  },
  {
    question: "¿Qué beneficios puedo esperar?",
    answer:
      "Mejorar la flexibilidad, liberar tensiones físicas y mentales, conectar con tus emociones y ganar claridad en tu día a día.",
  },
  {
    question: "¿Las clases son individuales o en grupo?",
    answer:
      "Ambas opciones están disponibles: sesiones personalizadas o grupos reducidos para compartir la experiencia.",
  },
];

const LandingYoga = ({ service }: { service: string }) => {
  return (
    <>
      <LandingHero
        title="Encuentra equilibrio a través del yoga"
        description="Conecta con tu cuerpo. Calma tu mente. Respira presente."
        type="yoga"
      />
      <LandingAboutMe
        subtitle="Sobre mi"
        title="Alexandra Poveda"
        content="El movimiento siempre ha sido mi manera de comprender el mundo. Desde muy pequeña descubrí que a través del cuerpo podía expresarme, explorar mis emociones y darle sentido a lo que me rodeaba. A los tres años empecé a bailar y, desde entonces, mi cuerpo se convirtió en un lugar sagrado de aprendizaje, un espacio donde descubrí que cada gesto y cada respiración tienen un significado profundo."
        imagesVert={[
          "/services/yoga-vert-1.webp",
          "/services/yoga-vert-2.webp",
          "/services/yoga-vert-3.webp",
          "/services/yoga-vert-4.webp",
        ]}
      />
      {/*  <LandingAboutMeSticky
                subtitle="Sobre mi"
                title="Alexandra Poveda"
                content="El movimiento siempre ha sido mi manera de comprender el mundo. Desde muy pequeña descubrí que a través del cuerpo podía expresarme, explorar mis emociones y darle sentido a lo que me rodeaba. A los tres años empecé a bailar y, desde entonces, mi cuerpo se convirtió en un lugar sagrado de aprendizaje, un espacio donde descubrí que cada gesto y cada respiración tienen un significado profundo."
                imageSrc="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt=""
            /> */}
      <LandingFeatureSection
        features={features}
        imagesVert={["/services/yoga-vert-5.webp"]}
      />
      <LandingBenefits benefits={benefits} />
      <SimpleCarrousel />
      <CTACenteredWithGradient />
      <LandingFaqs faqs={faqs} />
    </>
  );
};

export default LandingYoga;
