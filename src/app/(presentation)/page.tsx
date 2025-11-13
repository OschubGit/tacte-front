"use client";
import React, { useEffect, useState } from "react";
import ContentWithSplitImage from "@/app/(components)/ContentSections/ContentWithSplitImage";
import CTACenteredWithGradient from "@/app/(components)/CTAs/CTACenteredWithGradient";
import CTATwoColumnsWithPhoto from "@/app/(components)/CTAs/CTATwoColumnsWithPhoto";
import SectionThreeColumns from "@/app/(components)/FeatureSections/SectionThreeColumns";
import SectionWithScreenShoot from "@/app/(components)/FeatureSections/SectionWithScreenShoot";
import HeroWithAngleImage from "@/app/(components)/HeroSections/HeroWithAngleImage";
import TestimonialsWithStarRating from "@/app/(components)/Testimonials/TestimonialsWithStarRating";
import ModalCookies from "../(components)/Cookies/ModalCookies";
import Cookies from "js-cookie";

const HomePage = () => {
  const [openModalCookies, setOpenModalCookies] = useState(false);

  useEffect(() => {
    const cookiesAccepted =
      Cookies.get("technical-cookies") === "true" ? true : false;
    if (!cookiesAccepted) {
      setOpenModalCookies(true);
    }
  }, []);

  return (
    <>
      <HeroWithAngleImage
        title="Bienestar integral en un solo lugar"
        description="Tacte es un centro de masajes y bienestar con profesionales apasionados por ayudarte a mejorar tu salud física, mental y emocional."
        image="./images/hero_home.webp"
        logo="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
      />
      <SectionThreeColumns />
      <CTACenteredWithGradient />
      <SectionWithScreenShoot />
      <TestimonialsWithStarRating />
      <ContentWithSplitImage />
      <CTATwoColumnsWithPhoto />

      {openModalCookies && (
        <ModalCookies
          open={openModalCookies}
          onClose={() => setOpenModalCookies(false)}
        />
      )}
    </>
  );
};

export default HomePage;
