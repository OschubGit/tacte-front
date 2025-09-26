import React from "react";
import LandingHero from "../LandingHero";
import LandingFeatureSection from "../LandingFeatureSection";
import SimpleCarrousel from "../../Carrousel/SimpleCarrousel";
import LandingBenefits from "../LandingBenefits";
import CTACenteredWithGradient from "../../CTAs/CTACenteredWithGradient";
import FooterSimpleCentered from "../../Footers/FooterSimpleCentered";
import LandingAboutMeSticky from "../LandingAboutMeSticky";
import LandingFaqs from "../LandingFaqs";

const LandingEsteticien = ({ service }: { service: string }) => {
    return (
        <>
            <LandingHero
                title="Encuentra equilibrio a través del yoga"
                description="Conecta con tu cuerpo. Calma tu mente. Respira presente."
            />
            {/* <LandingAboutMe /> */}
            <LandingAboutMeSticky
                subtitle="Sobre mi"
                title="Alexandra Poveda"
                content="El movimiento siempre ha sido mi manera de comprender el mundo. Desde muy pequeña descubrí que a través del cuerpo podía expresarme, explorar mis emociones y darle sentido a lo que me rodeaba. A los tres años empecé a bailar y, desde entonces, mi cuerpo se convirtió en un lugar sagrado de aprendizaje, un espacio donde descubrí que cada gesto y cada respiración tienen un significado profundo."
                imageSrc="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt=""
            />
            <LandingFeatureSection />
            <LandingBenefits />
            <SimpleCarrousel />
            <CTACenteredWithGradient />
            <LandingFaqs />
            <FooterSimpleCentered darkMode={false} />
        </>
    );
};

export default LandingEsteticien;
