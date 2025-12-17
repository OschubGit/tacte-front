import React from "react";
import LandingHero from "../LandingHero";
import LandingFeatureSection from "../LandingFeatureSection";
import SimpleCarrousel from "../../Carrousel/SimpleCarrousel";
import LandingBenefits from "../LandingBenefits";
import CTACenteredWithGradient from "../../CTAs/CTACenteredWithGradient";
import LandingAboutMeSticky from "../LandingAboutMeSticky";
import LandingFaqs from "../LandingFaqs";
import LandingAboutMe from "../AboutMe";
import { Services } from "@/lib/enums";

const features = [
  {
    name: "Niños y jóvenes",
    description:
      "Entrenamientos dinámicos y divertidos que mejoran coordinación, equilibrio y fuerza, fomentando el movimiento consciente y hábitos saludables desde edades tempranas.",
  },
  {
    name: "Adultos",
    description:
      "Sesiones adaptadas para mejorar fuerza funcional, resistencia y movilidad, facilitando un mejor rendimiento en las actividades diarias y laborales.",
  },
  {
    name: "Personas mayores",
    description:
      "Trabajo específico de equilibrio, estabilidad y fuerza del core para mantener autonomía, prevenir caídas y mejorar la calidad de vida.",
  },
  {
    name: "Enfoque funcional",
    description:
      "Entrenamientos basados en movimientos naturales y multiarticulares, utilizando peso corporal y material como bandas elásticas, TRX, mancuernas y fitball.",
  },
];

const benefits = [
  {
    name: "Fuerza útil y real",
    description:
      "Desarrolla fuerza aplicada a movimientos cotidianos, mejorando tu rendimiento físico de forma práctica y eficiente.",
    href: "#fuerza-util",
  },
  {
    name: "Prevención de lesiones",
    description:
      "El trabajo de movilidad, estabilidad y core ayuda a reducir el riesgo de lesiones y mejora la postura corporal.",
    href: "#prevencion",
  },
  {
    name: "Entrenamiento adaptado",
    description:
      "Ejercicios ajustados a tu nivel y condición física, permitiendo progresar de forma segura y personalizada.",
    href: "#adaptado",
  },
];

const faqs = [
  {
    question: "¿Necesito experiencia previa para entrenar?",
    answer:
      "No. El entrenamiento funcional se adapta a cualquier nivel, desde principiantes hasta personas con experiencia deportiva.",
  },
  {
    question: "¿Qué tipo de ejercicios se realizan?",
    answer:
      "Se trabajan movimientos completos y naturales que combinan fuerza, resistencia, movilidad, coordinación y estabilidad.",
  },
  {
    question: "¿Se utilizan máquinas de gimnasio?",
    answer:
      "No principalmente. Se emplea peso corporal y material funcional como bandas elásticas, TRX, mancuernas o fitball.",
  },
  {
    question: "¿Es adecuado para todas las edades?",
    answer:
      "Sí. El entrenamiento funcional es apto para todas las edades, ya que los ejercicios se ajustan a las capacidades de cada persona.",
  },
];

const LandingDeporteFuncional = ({ service }: { service: string }) => {
  return (
    <>
      <LandingHero
        title="Entrenamiento funcional para tu vida diaria"
        description="Mejora tu fuerza, movilidad y equilibrio con un entrenamiento funcional adaptado a ti. Movimientos reales, efectivos y seguros para sentirte más fuerte en tu día a día."
        type={Services.FUNCTIONAL_TRAINING}
        ctaPrimary={{
          text: "Reservar cita",
          href: "/reservas",
        }}
        phone="#"
        announcement={{
          text: "Entrenamiento funcional para todos los niveles",
          linkText: "Descubre cómo funciona",
          linkHref: "#que-es",
        }}
        backgroundImage="/images/hero_psicologia.jpg"
      />
      <LandingAboutMe
        subtitle="Sobre mi"
        title="Laura Amorós"
        content="Soy graduada en Psicología por la Universitat Oberta de Cataluña y me he formado en terapias de tercera generación, un enfoque que combina aceptación, autocompasión y regulación emocional. Cuento con especialización en depresión posparto y una trayectoria acompañando a niños, adolescentes y adultos en diferentes etapas de la vida. Mi misión es crear un espacio seguro, cercano y libre de juicios donde puedas ser escuchado, comprendido y acompañado en tu proceso de crecimiento personal y bienestar emocional."
        imagesVert={[
          "/services/psicologia-vert-1.webp",
          "/services/psicologia-vert-2.webp",
          "/services/psicologia-vert-3.webp",
          "/services/psicologia-vert-4.webp",
        ]}
      />
      <LandingFeatureSection
        title="Acompañamiento adaptado a cada etapa de la vida"
        description="Cada persona vive y siente de manera única. Por eso adapto el proceso terapéutico a tus necesidades y momento vital, ofreciendo un espacio cercano y práctico."
        features={features}
        imagesVert={["/services/psicologia-vert-5.webp"]}
      />
      <LandingBenefits benefits={benefits} />
      <SimpleCarrousel />
      <CTACenteredWithGradient phone="623432322" />
      <LandingFaqs faqs={faqs} />
    </>
  );
};

export default LandingDeporteFuncional;
