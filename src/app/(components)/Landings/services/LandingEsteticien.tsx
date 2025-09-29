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

const LandingEsteticien = ({ service }: { service: string }) => {
  // Hero Section props
  const landingHero = {
    logo: {
      src: "/images/logo.png",
      alt: "Centro de Estética y Belleza",
    },
    title: "Descubre el arte de la estética y el bienestar",
    description:
      "Bienvenidos al universo de la belleza, donde cada tratamiento es una experiencia única. Tratamientos faciales, corporales, masajes y rituales holísticos diseñados para cuidar tu piel, tu cuerpo y tu mente.",
    backgroundImage: "/images/hero-bg.jpg",
    ctaPrimary: {
      text: "Reserva tu cita",
      href: "/reserva",
    },
    ctaSecondary: {
      text: "Ver tratamientos",
      href: "/tratamientos",
    },
    announcement: {
      text: "Promoción especial en tratamientos faciales",
      linkText: "Descúbrela aquí",
      linkHref: "/promociones",
    },
  };

  // Features props
  const landingFeatures = {
    subtitle: "Nuestros tratamientos",
    title: "Excelencia en estética y bienestar",
    description:
      "Diseñamos protocolos personalizados basados en diagnósticos profesionales para ofrecer resultados visibles y duraderos.",
    features: [
      {
        name: "Tratamientos faciales",
        description:
          "Higiene facial, antiarrugas, radiofrecuencia, presoterapia ocular y más. Un protocolo adaptado a tus necesidades para una piel luminosa y rejuvenecida.",
      },
      {
        name: "Tratamientos corporales",
        description:
          "Reducción, reafirmación, cavitación, presoterapia y técnicas combinadas para cumplir tus objetivos con resultados visibles.",
      },
      {
        name: "Masajes y terapias holísticas",
        description:
          "Shiatsu, aromaterapia, piedras volcánicas, reiki, cuencos tibetanos y envolturas corporales. El arte del bienestar en manos expertas.",
      },
      {
        name: "Belleza y cuidado",
        description:
          "Maquillaje para bodas y eventos, manicura, pedicura, diseño de cejas, lifting de pestañas y depilación tradicional o láser.",
      },
    ],
    image: {
      src: "/images/feature-image.jpg",
      alt: "Tratamientos de estética profesional",
    },
    showIcons: false,
  };

  // Benefits props
  const benefits = [
    {
      name: "Protocolos personalizados",
      description:
        "Cada piel y cada cuerpo es único. Nuestros diagnósticos permiten crear tratamientos exclusivos para ti.",
      href: "/diagnostico",
    },
    {
      name: "Tecnología avanzada",
      description:
        "Aparatología innovadora como radiofrecuencia, Indiba, presoterapia y cavitación para resultados eficaces.",
      href: "/tecnologia",
    },
    {
      name: "Bienestar integral",
      description:
        "No solo cuidamos tu piel, también tu energía y equilibrio emocional con masajes y terapias holísticas.",
      href: "/bienestar",
    },
  ];

  // FAQs props
  const faqs = [
    {
      question: "¿Cómo sé qué tratamiento necesito?",
      answer:
        "Realizamos un diagnóstico personalizado de tu piel o cuerpo para recomendarte el tratamiento más adecuado a tus necesidades.",
    },
    {
      question: "¿Qué marcas cosméticas utilizáis?",
      answer:
        "Trabajamos con firmas de prestigio como Skeyndor, Bocaré, Hatis, Bruno Vassari y Belnatur, garantizando calidad y eficacia.",
    },
    {
      question: "¿Puedo regalar un tratamiento?",
      answer:
        "Sí, disponemos de tarjetas regalo para masajes, faciales, corporales o packs de cuidado completo.",
    },
    {
      question: "¿Ofrecéis depilación láser?",
      answer:
        "Sí, contamos con depilación láser y láser azul para eliminar vello, verrugas y manchas de manera segura y eficaz.",
    },
  ];
  return (
    <>
      <LandingHero {...landingHero} />
      <LandingAboutMe
        subtitle="Sobre mi"
        title="Isabel Barberá"
        content="Soy una profesional apasionada por la estética y el bienestar, con experiencia en tratamientos faciales, corporales y terapias holísticas. Mi enfoque se basa en crear protocolos personalizados que unen tecnología avanzada y técnicas tradicionales, logrando resultados visibles y una experiencia de cuidado integral. Mi misión es ayudarte a resaltar tu belleza natural y a recuperar el equilibrio entre cuerpo y mente, siempre con un trato cercano y profesional."
      />
      <LandingFeatureSection {...landingFeatures} />
      <LandingBenefits benefits={benefits} />
      <SimpleCarrousel />
      <CTACenteredWithGradient />
      <LandingFaqs faqs={faqs} />
    </>
  );
};

export default LandingEsteticien;
