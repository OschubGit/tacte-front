import React from "react";
import LandingHero from "../LandingHero";
import LandingFeatureSection from "../LandingFeatureSection";
import SimpleCarrousel from "../../Carrousel/SimpleCarrousel";
import LandingBenefits from "../LandingBenefits";
import CTACenteredWithGradient from "../../CTAs/CTACenteredWithGradient";
import LandingAboutMeSticky from "../LandingAboutMeSticky";
import LandingFaqs from "../LandingFaqs";
import LandingAboutMe from "../AboutMe";

const features = [
  {
    name: "Niños",
    description:
      "Acompañamiento en la gestión de emociones, trabajo en autoestima y habilidades sociales mediante dinámicas y juegos terapéuticos.",
  },
  {
    name: "Adolescentes",
    description:
      "Un espacio para comprender emociones, gestionar los cambios propios de la edad y afrontar retos como presión social, inseguridad o ansiedad.",
  },
  {
    name: "Adultos",
    description:
      "Atención psicológica en estrés, ansiedad, autoestima, conflictos personales y procesos vitales complejos que generan desbordamiento emocional.",
  },
  {
    name: "Enfoque innovador",
    description:
      "Trabajo con terapias de tercera generación, integrando aceptación, autocompasión y regulación emocional para una vida más consciente.",
  },
];

const benefits = [
  {
    name: "Espacio seguro",
    description:
      "Un lugar de confianza donde expresarte sin juicios y sentirte escuchado.",
    href: "#espacio-seguro",
  },
  {
    name: "Herramientas prácticas",
    description:
      "Estrategias y recursos que puedes aplicar en tu día a día para manejar tus emociones con mayor claridad.",
    href: "#herramientas-practicas",
  },
  {
    name: "Cercanía y acompañamiento",
    description:
      "Un proceso terapéutico humano, cálido y adaptado a ti en cada momento vital.",
    href: "#cercania",
  },
];

const faqs = [
  {
    question: "¿Necesito estar en un momento de crisis para acudir a terapia?",
    answer:
      "No necesariamente. La terapia es un espacio para cuidarte, conocerte mejor y aprender herramientas que pueden ayudarte en cualquier etapa de tu vida.",
  },
  {
    question: "¿Con qué enfoques trabajas?",
    answer:
      "Trabajo principalmente con terapias de tercera generación, que integran aceptación, autocompasión y regulación emocional, siempre adaptándome a cada persona.",
  },
  {
    question: "¿Atiendes tanto online como presencial?",
    answer:
      "Sí, ofrezco ambas modalidades para que puedas elegir la que mejor se adapte a ti y a tus necesidades.",
  },
  {
    question: "¿Es confidencial lo que comparta en sesión?",
    answer:
      "Absolutamente. Todo lo que se comparte en consulta es tratado con total confidencialidad y respeto.",
  },
];

const LandingPsicologia = ({ service }: { service: string }) => {
  return (
    <>
      <LandingHero
        title="Un espacio seguro para tu bienestar emocional"
        description="Acompañamiento psicológico para niños, adolescentes y adultos. Encuentra herramientas para gestionar tus emociones, afrontar desafíos y reconectar contigo mismo con más calma y seguridad."
        type="psicologia"
        ctaPrimary={{
          text: "Reservar cita",
          href: "/reservas",
        }}
      />
      <LandingAboutMe
        subtitle="Sobre mi"
        title="Laura Amorós"
        content="Soy graduada en Psicología por la Universitat Oberta de Cataluña y me he formado en terapias de tercera generación, un enfoque que combina aceptación, autocompasión y regulación emocional. Cuento con especialización en depresión posparto y una trayectoria acompañando a niños, adolescentes y adultos en diferentes etapas de la vida. Mi misión es crear un espacio seguro, cercano y libre de juicios donde puedas ser escuchado, comprendido y acompañado en tu proceso de crecimiento personal y bienestar emocional."
      />
      {/* <LandingAboutMeSticky
                subtitle="Sobre mi"
                title="Laura Amorós"
                content="Soy graduada en Psicología por la Universitat Oberta de Cataluña y me he formado en terapias de tercera generación, un enfoque que combina aceptación, autocompasión y regulación emocional. Cuento con especialización en depresión posparto y una trayectoria acompañando a niños, adolescentes y adultos en diferentes etapas de la vida. Mi misión es crear un espacio seguro, cercano y libre de juicios donde puedas ser escuchado, comprendido y acompañado en tu proceso de crecimiento personal y bienestar emocional."
                imageSrc="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Psicóloga ofreciendo acompañamiento emocional"
            /> */}
      <LandingFeatureSection
        title="Acompañamiento adaptado a cada etapa de la vida"
        description="Cada persona vive y siente de manera única. Por eso adapto el proceso terapéutico a tus necesidades y momento vital, ofreciendo un espacio cercano y práctico."
        features={features}
      />
      <LandingBenefits benefits={benefits} />
      <SimpleCarrousel />
      <CTACenteredWithGradient />
      <LandingFaqs faqs={faqs} />
    </>
  );
};

export default LandingPsicologia;
