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

const features = [
  {
    name: "Pérdida de grasa",
    description:
      "Logra resultados visibles y sostenibles sin dietas extremas. Aprende a disfrutar de la comida mientras adquieres hábitos duraderos para tu salud.",
  },
  {
    name: "Aumento de masa muscular",
    description:
      "Nutrición adaptada a tu entrenamiento para ganar fuerza, energía y motivación de manera saludable.",
  },
  {
    name: "Mejora de la relación con la comida",
    description:
      "Supera la culpa, la ansiedad o el descontrol alimentario. Aprende a escuchar a tu cuerpo y a disfrutar de la comida sin restricciones.",
  },
  {
    name: "Dietoterapia",
    description:
      "Acompañamiento nutricional en condiciones de salud como diabetes, hipertensión, colesterol elevado o SOP, siempre con base científica.",
  },
  {
    name: "Salud digestiva",
    description:
      "Si sufres de hinchazón, gases o digestiones pesadas, trabajaremos juntos para recuperar tu equilibrio digestivo y tu energía diaria.",
  },
  {
    name: "Rendimiento deportivo",
    description:
      "Optimiza tu alimentación para entrenar mejor, recuperarte antes y rendir al máximo en tu vida activa o competiciones.",
  },
];

const benefits = [
  {
    name: "Mejora tu salud a largo plazo",
    description:
      "Planes sostenibles que previenen enfermedades y mejoran tu calidad de vida sin recurrir a dietas milagro.",
    href: "#mejora-salud",
  },
  /*  {
        name: "Recupera tu energía",
        description:
            "Una alimentación equilibrada optimiza tu vitalidad diaria, favoreciendo el descanso y la concentración.",
        href: "#recupera-energia",
    }, */
  {
    name: "Disfruta sin culpa",
    description:
      "Aprende a relacionarte con la comida de forma sana y flexible, sin prohibiciones ni ansiedad.",
    href: "#disfruta-sin-culpa",
  },
  {
    name: "Rinde al máximo",
    description:
      "La nutrición deportiva te ayuda a entrenar mejor, recuperarte antes y alcanzar tus objetivos físicos.",
    href: "#rinde-al-maximo",
  },
];

const faqs = [
  {
    question: "¿Trabajas con dietas estrictas?",
    answer:
      "No. Mi enfoque es no restrictivo. Diseñamos juntos un plan nutricional flexible, realista y sostenible.",
  },
  {
    question: "¿Cuánto dura el proceso?",
    answer:
      "Depende de tus objetivos y necesidades. Algunas personas alcanzan cambios en pocas semanas, mientras que otras requieren un acompañamiento más prolongado.",
  },
  {
    question: "¿Puedo combinarlo con entrenamientos?",
    answer:
      "Claro. La nutrición es clave para mejorar tu rendimiento deportivo y optimizar la recuperación.",
  },
  {
    question: "¿Qué pasa si tengo una condición de salud?",
    answer:
      "Trabajo con dietoterapia adaptada a patologías como diabetes, hipertensión, colesterol elevado o SOP, siempre con base científica.",
  },
  {
    question: "¿Haces consultas online?",
    answer:
      "Sí, ofrezco tanto consultas presenciales como online para que puedas elegir la modalidad que mejor se adapte a ti.",
  },
];

const LandingNutricion = ({ service }: { service: string }) => {
  return (
    <>
      <LandingHero
        title="Alimentación consciente, resultados reales"
        description="Acompañamiento nutricional personalizado para mejorar tu salud, energía y relación con la comida, sin dietas extremas."
        type="nutricion"
        ctaPrimary={{
          text: "Reservar cita",
          href: "/reservas",
        }}
      />
      <LandingAboutMe
        subtitle="Sobre mi"
        title="Raquel Polo"
        content="Graduada en Nutrición Humana y Dietética por la Universidad de Alicante, me apasiona acompañar a las personas en la mejora de su alimentación desde un enfoque no restrictivo y basado en evidencia científica. Mi especialización en nutrición deportiva y salud digestiva me permite ayudarte a alcanzar tus objetivos con un plan realista y sostenible. Para mí, comer no es prohibirse, sino ganar salud, energía y equilibrio."
      />
      <LandingFeatureSection
        features={features}
        title="Un plan nutricional adaptado a ti"
        subtitle="Conseguirás"
        description="Cada persona es diferente, por eso diseño estrategias nutricionales personalizadas que se adaptan a tus objetivos y estilo de vida."
      />
      <LandingBenefits benefits={benefits} />
      <SimpleCarrousel />
      <CTACenteredWithGradient />
      <LandingFaqs faqs={faqs} />
      <FooterSimpleCentered darkMode={false} />
    </>
  );
};

export default LandingNutricion;
