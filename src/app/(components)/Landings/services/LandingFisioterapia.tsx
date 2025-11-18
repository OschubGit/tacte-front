import React from "react";
import LandingHero from "../LandingHero";
import LandingFeatureSection from "../LandingFeatureSection";
import SimpleCarrousel from "../../Carrousel/SimpleCarrousel";
import LandingBenefits from "../LandingBenefits";
import CTACenteredWithGradient from "../../CTAs/CTACenteredWithGradient";
import FooterSimpleCentered from "../../Footers/FooterSimpleCentered";
import LandingAboutMeSticky from "../LandingAboutMeSticky";
import LandingFaqs from "../LandingFaqs";
import LandingAboutMe from "../AboutMe";
import { Services } from "@/lib/enums";

const features = [
  {
    name: "Terapia manual",
    description:
      "Masaje y técnicas manuales como base de la mayoría de tratamientos, buscando aliviar el dolor, relajar y generar confianza.",
    showIcon: true,
  },
  {
    name: "Ejercicio terapéutico",
    description:
      "Ejercicios personalizados y clases grupales de fisiopilates para recuperar movilidad, crear hábitos saludables y empoderarte en tu recuperación.",
    showIcon: true,
  },
  {
    name: "Aromaterapia y acupuntura",
    description:
      "Técnicas complementarias para acompañar los procesos de dolor, reducir el estrés y ofrecer un abordaje más integral.",
    showIcon: true,
  },
  {
    name: "Técnica Raindrop",
    description:
      "Un tratamiento que combina masaje y aceites esenciales para equilibrar cuerpo y mente, reducir tensiones y recuperar energía vital.",
    showIcon: true,
  },
];

const benefits = [
  {
    name: "Alivio del dolor",
    description:
      "Tratamientos personalizados para reducir molestias musculares, articulares y tensionales.",
    href: "#alivio",
  },
  {
    name: "Recuperación activa",
    description:
      "A través del ejercicio terapéutico aprenderás a moverte con mayor seguridad y confianza.",
    href: "#recuperacion",
  },
  {
    name: "Bienestar integral",
    description:
      "Un abordaje que combina fisioterapia con técnicas complementarias para cuidar cuerpo y mente.",
    href: "#integral",
  },
  /* {
        name: "Confianza y acompañamiento",
        description:
            "Un espacio donde ser escuchado, comprendido y guiado de manera cercana y profesional.",
        href: "#confianza",
    }, */
];

const faqs = [
  {
    question: "¿Necesito una derivación médica para acudir a fisioterapia?",
    answer:
      "No, puedes acudir directamente a consulta. Sin embargo, si ya cuentas con diagnóstico médico, lo integramos en tu tratamiento.",
  },
  {
    question: "¿Qué debo llevar a mi primera sesión?",
    answer:
      "Ropa cómoda que te permita moverte, cualquier informe médico que tengas y, sobre todo, ganas de empezar tu recuperación.",
  },
  {
    question: "¿Con qué frecuencia debería acudir?",
    answer:
      "Depende de tu situación. Tras la primera evaluación, te recomendaré la frecuencia adecuada según tu evolución.",
  },
  {
    question: "¿Ofreces también tratamientos de mantenimiento o prevención?",
    answer:
      "Sí, además de tratar lesiones y patologías, trabajamos en la prevención y en el cuidado continuo de tu bienestar físico.",
  },
];

const LandingFisioterapia = ({ service }: { service: string }) => {
  return (
    <>
      <LandingHero
        title="Recupera tu bienestar desde un enfoque integral"
        description="Fisioterapia, ejercicio terapéutico y técnicas complementarias para aliviar el dolor, reconectar con tu cuerpo y recuperar la calidad de vida."
        backgroundImage="/images/hero_yoga.webp"
        type={Services.PILATES}
        phone="644561382"
      />
      <LandingAboutMe
        subtitle="Sobre mi"
        title="Vera Dominguez"
        content="Me gradué en Fisioterapia por la UMH hace más de 10 años y desde entonces he seguido un camino de aprendizaje y especialización en suelo pélvico, embarazo y posparto. Complementé mi formación con acupuntura y moxibustión, siguiendo la escuela de mis padres. Actualmente investigo sobre el dolor crónico y aplico un enfoque integral que combina terapia manual, ejercicio terapéutico, técnicas complementarias como aromaterapia y acupuntura, y propuestas innovadoras como la Técnica Raindrop. Mi misión es escucharte, comprender tu situación y acompañarte en el proceso de recuperar la confianza en tu cuerpo y tu bienestar."
        imagesVert={[
          "/services/pilates-vert-1.webp",
          "/services/pilates-vert-2.webp",
          "/services/pilates-vert-3.webp",
          "/services/pilates-vert-4.webp",
        ]}
      />
      <LandingFeatureSection
        title="Un enfoque integral y humano de la fisioterapia"
        description="Cada tratamiento es personalizado, adaptado a tus necesidades y revisado en cada sesión. Mi prioridad es escucharte y acompañarte en tu proceso de recuperación."
        features={features}
        imagesVert={["/services/pilates-vert-5.webp"]}
      />
      <LandingBenefits benefits={benefits} />
      <SimpleCarrousel />
      <CTACenteredWithGradient />
      <LandingFaqs faqs={faqs} />
    </>
  );
};

export default LandingFisioterapia;
