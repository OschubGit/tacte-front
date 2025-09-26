import React from "react";
import ContentWithSplitImage from "@/app/(components)/ContentSections/ContentWithSplitImage";
import CTACenteredWithGradient from "@/app/(components)/CTAs/CTACenteredWithGradient";
import CTATwoColumnsWithPhoto from "@/app/(components)/CTAs/CTATwoColumnsWithPhoto";
import SectionThreeColumns from "@/app/(components)/FeatureSections/SectionThreeColumns";
import SectionWithScreenShoot from "@/app/(components)/FeatureSections/SectionWithScreenShoot";
import HeroWithAngleImage from "@/app/(components)/HeroSections/HeroWithAngleImage";
import TestimonialsWithStarRating from "@/app/(components)/Testimonials/TestimonialsWithStarRating";

const HomePage = () => {
    return (
        <>
            <HeroWithAngleImage
                title="Bienestar integral en un solo lugar"
                description="Tacte es un centro de masajes y bienestar con profesionales apasionados por ayudarte a mejorar tu salud física, mental y emocional."
                image="https://placehold.co/1002x856"
                logo="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            />
            <SectionThreeColumns />
            <CTACenteredWithGradient />
            <SectionWithScreenShoot />
            <TestimonialsWithStarRating />
            <ContentWithSplitImage />
            <CTATwoColumnsWithPhoto />
        </>
    );
};

export default HomePage;
