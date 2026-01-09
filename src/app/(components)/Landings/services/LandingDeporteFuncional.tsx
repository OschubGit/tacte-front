import React from "react";
import LandingHero from "../LandingHero";
import LandingFeatureSection from "../LandingFeatureSection";
import SimpleCarrousel from "../../Carrousel/SimpleCarrousel";
import LandingBenefits from "../LandingBenefits";
import CTACenteredWithGradient from "../../CTAs/CTACenteredWithGradient";
import LandingFaqs from "../LandingFaqs";
import LandingAboutMe from "../AboutMe";
import { Services } from "@/lib/enums";

const features = [
  {
    name: "Evaluación inicial personalizada",
    description:
      "Análisis de tu condición física, objetivos y limitaciones para diseñar un plan de entrenamiento completamente adaptado a tus necesidades específicas.",
  },
  {
    name: "Progresión gradual y segura",
    description:
      "Entrenamientos estructurados que evolucionan contigo, aumentando la intensidad y complejidad de forma progresiva para maximizar resultados sin riesgo de lesiones.",
  },
  {
    name: "Movimientos funcionales reales",
    description:
      "Ejercicios que replican acciones de tu vida cotidiana, mejorando tu capacidad para realizar actividades diarias con mayor facilidad y eficiencia.",
  },
  {
    name: "Material versátil y adaptable",
    description:
      "Utilizamos peso corporal, bandas elásticas, TRX, mancuernas y fitball para crear entrenamientos variados y efectivos que se ajustan a cualquier nivel.",
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
        backgroundImage="/services/dep-1.png"
      />
      <LandingAboutMe
        subtitle="¿Qué es el entrenamiento funcional?"
        title="Entrenamientos"
        content="
        El entrenamiento funcional es un enfoque que se centra en el desarrollo de habilidades y capacidades físicas para mejorar la calidad de vida y la capacidad de adaptación a diferentes situaciones. Se basa en movimientos naturales y multiarticulares, utilizando peso corporal y material como bandas elásticas, TRX, mancuernas y fitball.
        "
        imagesVert={[
          "/services/dep-2.png",
          "/services/dep-3.png",
          "/services/dep-4.png",
          "/services/dep-5.png",
        ]}
      />
      <LandingFeatureSection
        title="Entrenamientos adaptados a ti"
        description="Cada persona tiene objetivos, nivel físico y necesidades diferentes. Por eso diseño programas de entrenamiento funcional personalizados que se ajustan a tu condición actual, objetivos y ritmo de progresión, garantizando resultados efectivos y seguros."
        features={features}
        imagesVert={["/services/dep-6.png"]}
      />
      <LandingBenefits benefits={benefits} />
      <SimpleCarrousel />
      <CTACenteredWithGradient phone="623432322" />
      <LandingFaqs faqs={faqs} />
    </>
  );
};

export default LandingDeporteFuncional;
