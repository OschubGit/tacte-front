import React from "react";
import HeroSimpleCentered from "@/app/(components)/HeroSections/HeroSimpleCentered";
import HeroSplitWithImage from "@/app/(components)/HeroSections/HeroSplitWithImage";
import HeroSplitWithScreenshot from "@/app/(components)/HeroSections/HeroSplitWithScreenshot";
import HeroWithBackgroundImage from "@/app/(components)/HeroSections/HeroWithBackgroundImage";
import HeroWithAngleImage from "@/app/(components)/HeroSections/HeroWithAngleImage";

function page() {
    return (
        <>
            <HeroSimpleCentered />
            <HeroSplitWithScreenshot />
            <HeroSplitWithImage />
            <HeroWithBackgroundImage />
            <HeroWithAngleImage />
        </>
    );
}

export default page;
