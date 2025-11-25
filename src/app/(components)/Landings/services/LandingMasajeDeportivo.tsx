import React from "react";
import LandingHero from "../LandingHero";
import LandingFeatureSection from "../LandingFeatureSection";
import SimpleCarrousel from "../../Carrousel/SimpleCarrousel";
import LandingBenefits from "../LandingBenefits";
import CTACenteredWithGradient from "../../CTAs/CTACenteredWithGradient";
import FooterSimpleCentered from "../../Footers/FooterSimpleCentered";
import LandingAboutMeSticky from "../LandingAboutMeSticky";
import LandingFaqs from "../LandingFaqs";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import LandingAboutMe from "../AboutMe";
import { Services } from "@/lib/enums";

/* 

interface LandingHeroProps {
    navigation?: NavigationItem[];
    logo?: {
        src: string;
        alt: string;
    };
    title?: string;
    description?: string;
    backgroundImage?: string;
    ctaPrimary?: {
        text: string;
        href: string;
    };
    ctaSecondary?: {
        text: string;
        href: string;
    };
    announcement?: {
        text: string;
        linkText: string;
        linkHref: string;
    };
}
*/

const features = [
  {
    name: "Preparación muscular",
    description:
      "Técnicas específicas para activar la musculatura antes del entrenamiento o la competición, mejorando el rendimiento y la respuesta física.",
  },
  {
    name: "Recuperación post-entrenamiento",
    description:
      "Maniobras orientadas a reducir la fatiga, aliviar la sobrecarga muscular y acelerar la recuperación después del esfuerzo.",
  },
  {
    name: "Trabajo profundo y preventivo",
    description:
      "Intervención sobre puntos de tensión, adherencias y desequilibrios musculares para prevenir lesiones y optimizar la función corporal.",
  },
  {
    name: "Enfoque técnico y personalizado",
    description:
      "Cada sesión se adapta al deporte que practicas, tu estado muscular y tus objetivos: rendimiento, prevención o recuperación.",
  },
];

const benefits = [
  {
    name: "Prevención de lesiones",
    description:
      "Ayuda a detectar y liberar tensiones acumuladas, evitando sobrecargas y desequilibrios musculares que pueden derivar en lesiones.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Recuperación muscular más rápida",
    description:
      "Favorece la eliminación de toxinas, reduce la fatiga y disminuye el dolor muscular post-entrenamiento o post-competición.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Mejora del rendimiento deportivo",
    description:
      "Aumenta la flexibilidad, la movilidad y la eficiencia muscular, optimizando la capacidad del cuerpo para entrenar y competir.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const faqs = [
  {
    question: "¿Qué es el masaje deportivo?",
    answer:
      "Es una técnica manual especializada que trabaja de forma profunda la musculatura implicada en la actividad física, ayudando a preparar, mantener y recuperar el cuerpo del deportista.",
  },
  {
    question: "¿Para quién está indicado?",
    answer:
      "Para cualquier persona que practique deporte, desde aficionados hasta atletas. También es útil para quienes realizan trabajos físicos o movimientos repetitivos.",
  },
  {
    question: "¿Ayuda a mejorar el rendimiento?",
    answer:
      "Sí. El masaje deportivo mejora la movilidad, la función muscular, la circulación y la recuperación, lo que favorece un mejor rendimiento en entrenamientos y competiciones.",
  },
  {
    question: "¿Es doloroso?",
    answer:
      "Puede incluir maniobras más profundas que un masaje relajante, pero siempre dentro de un rango tolerable y adaptado a cada persona.",
  },
  {
    question: "¿Con qué frecuencia debería recibirlo?",
    answer:
      "Depende de la intensidad de tu actividad física. En deportistas activos se recomienda semanal o quincenal. Antes o después de competiciones es especialmente útil.",
  },
];

const LandingMasajeDeportivo = ({ service }: { service: string }) => {
  return (
    <>
      <LandingHero
        title="Mejora tu rendimiento"
        description="Cuida y recupera la musculatura implicada en el ejercicio físico con un enfoque técnico y personalizado."
        backgroundImage="/images/hero_masaje_deportivo.webp"
        type={Services.OSTEOPATHY}
        phone="698903934"
        ctaPrimary={{
          text: "Reservar cita",
          href: "tel:698903934",
        }}
        ctaSecondary={{
          text: "Ver horarios",
          href: "#",
        }}
        announcement={{
          text: "Reserva tu cita aquí",
          linkText: "Reservar",
          linkHref: "/reservas",
        }}
        navigation={[{ name: "Quiromasaje", href: "/" }]}
      />
      <LandingAboutMe
        title="Alex Monzó"
        subtitle="Sobre mi"
        content="Especialista en masaje deportivo, un tipo de masaje técnico y específico dirigido a personas que practican actividad física, independientemente del nivel. Se aplica antes, durante o después del ejercicio para preparar los músculos, mejorar su rendimiento y acelerar su recuperación. Con maniobras profundas, movilizaciones y estiramientos para trabajar la musculatura implicada en el deporte de forma precisa y efectiva."
        imagesVert={[
          "/services/masage-vert-1.webp",
          "/services/masage-vert-2.webp",
          "/services/masage-vert-3.webp",
          "/services/masage-vert-4.webp",
        ]}
      />
      <LandingFeatureSection
        subtitle="Preparación, mantenimiento y recuperación muscular"
        title="Mejora tu rendimiento y acelera tu recuperación"
        description="Perfecto para deportistas, practicantes habituales de actividad física o personas con sobrecargas por movimientos repetitivos."
        features={features}
        image={{
          src: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Product screenshot",
          width: 2432,
          height: 1442,
          className:
            "w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228",
        }}
        imagesVert={["/services/vertical-masaje-deportivo.webp"]}
        showIcons={false}
      />
      <LandingBenefits benefits={benefits} />
      <SimpleCarrousel />
      <CTACenteredWithGradient phone="+34698903934" />
      <LandingFaqs faqs={faqs} />
    </>
  );
};

export default LandingMasajeDeportivo;
