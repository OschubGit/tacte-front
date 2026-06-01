import { redirect } from "next/navigation";
// YOGA_DISABLED
// import React from "react";
// import LandingYoga from "@/app/(components)/Landings/services/LandingYoga";

const page = () => {
  // return <LandingYoga service={"yoga"} />;
  redirect("/");
};

export default page;
