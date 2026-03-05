"use client";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/* const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
}); */

/* export const metadata: Metadata = {
    title: "Tacte",
    description: "Bienestar integral",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigate = useRouter();
  useEffect(() => {
    navigate.push("/mantenimiento");
  }, []);
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
