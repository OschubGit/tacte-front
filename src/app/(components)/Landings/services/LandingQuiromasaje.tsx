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
    name: "Masaje relajante",
    description:
      "Técnica suave y fluida enfocada en reducir el estrés, relajar la musculatura y generar una sensación profunda de bienestar.",
  },
  {
    name: "Masaje terapéutico",
    description:
      "Trabajo manual específico para aliviar contracturas, sobrecargas y molestias musculares derivadas de posturas, tensión o esfuerzo físico.",
  },
  {
    name: "Masaje descontracturante",
    description:
      "Aplicación de maniobras más profundas para liberar nudos musculares, mejorar la movilidad y reducir dolores persistentes.",
  },
  {
    name: "Enfoque personalizado",
    description:
      "Cada sesión se adapta a tu estado físico y emocional, combinando técnicas de masaje según tus necesidades para un resultado eficaz y duradero.",
  },
];

const benefits = [
  {
    name: "Reducción del estrés y mayor bienestar",
    description:
      "El masaje activa la relajación del sistema nervioso, disminuye la tensión emocional y favorece un estado de calma y equilibrio.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Alivio del dolor y liberación muscular",
    description:
      "Mediante técnicas manuales específicas se reducen contracturas, rigidez y molestias musculares asociadas a la vida diaria o al esfuerzo físico.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Mejora de la movilidad y la circulación",
    description:
      "El masaje estimula la circulación sanguínea y linfática, favoreciendo la oxigenación de los tejidos y una mayor flexibilidad corporal.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const faqs = [
  {
    question: "¿Qué es un masaje terapéutico?",
    answer:
      "Es una técnica manual que actúa sobre la musculatura y los tejidos blandos para reducir tensiones, aliviar molestias y mejorar el bienestar general.",
  },
  {
    question: "¿Qué problemas puede ayudar a mejorar?",
    answer:
      "Dolores musculares, contracturas, tensión cervical, sobrecargas por estrés, fatiga, rigidez, molestias lumbares, falta de descanso y problemas derivados de una mala postura.",
  },
  {
    question: "¿Es seguro recibir un masaje?",
    answer:
      "Sí, siempre que lo realice un masajista cualificado. Es una técnica no invasiva y apta para la mayoría de personas.",
  },
  {
    question: "¿Puedo combinar el masaje con otros tratamientos?",
    answer:
      "Por supuesto. El masaje complementa la fisioterapia, osteopatía, entrenamiento físico, terapias de bienestar y enfoques de salud integrativa, entre otros.",
  },
  {
    question: "¿Cuántas sesiones necesito?",
    answer:
      "Depende de tu objetivo. Una sola sesión puede aliviar tensiones puntuales, pero para molestias recurrentes o estrés acumulado se recomiendan sesiones regulares.",
  },
];

const LandingQuiromasaje = ({ service }: { service: string }) => {
  return (
    <>
      <LandingHero
        title="Recupera. Revitaliza."
        description="Terapia manual integral para aliviar dolores, mejorar tu movilidad y ayudarte a reconectar con tu bienestar natural."
        backgroundImage="/images/hero_osteopatia.webp"
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
        content="Especialista en masajes técnicos y relajantes. Mi misión es ayudarte a mejorar tu calidad de vida mediante un enfoque integral y personalizado. Cada sesión está orientada a escuchar tu cuerpo, identificar bloqueos y acompañarte en tu proceso de recuperación."
        imagesVert={[
          "/services/masage-vert-1.webp",
          "/services/masage-vert-2.webp",
          "/services/masage-vert-3.webp",
          "/services/masage-vert-4.webp",
        ]}
      />
      <LandingFeatureSection
        subtitle="Beneficios de los masajes"
        title="Un tratamiento integral para tu bienestar"
        description="Alivia tensiones, reduce el estrés y mejora la funcionalidad del cuerpo en el día a día."
        features={features}
        image={{
          src: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Product screenshot",
          width: 2432,
          height: 1442,
          className:
            "w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228",
        }}
        imagesVert={["/services/massage-vertical-1.webp"]}
        showIcons={false}
      />
      <LandingBenefits benefits={benefits} />
      <SimpleCarrousel />
      <CTACenteredWithGradient phone="+34698903934" />
      <LandingFaqs faqs={faqs} />
    </>
  );
};

export default LandingQuiromasaje;
