"use client";
import React from "react";
import { useParams } from "next/navigation";
import LandingAboutMeSticky from "@/app/(components)/Landings/LandingAboutMeSticky";
import Calendar from "@/app/(components)/Calendar/Calendar";

const ProfessionalPage = () => {
    const { person } = useParams();
    return (
        <div className="bg-white py-24 sm:py-32">
            <LandingAboutMeSticky
                title={person as string}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.`}
            />
            <div className="h-[600px] w-auto mx-auto mt-10 max-w-7xl">
                <Calendar />
            </div>
        </div>
    );
};

export default ProfessionalPage;
