import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/footer/main";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "شرکت حمل و نقل | خدمات لجستیک و حمل بار",
  description:
    "ارائه خدمات حمل و نقل، لجستیک و حمل بار در سراسر کشور با بهترین کیفیت و قیمت",
  keywords: "حمل و نقل, لجستیک, حمل بار, باربری, ترابری",
  authors: [{ name: "Transportation Company" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "شرکت حمل و نقل | خدمات لجستیک و حمل بار",
    description: "ارائه خدمات حمل و نقل، لجستیک و حمل بار در سراسر کشور",
    type: "website",
    locale: "fa_IR",
  },
};

const iranYekan = localFont({
  src: [
    {
      path: "../public/fonts/IRANYekanXFaNum-UltraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--iran-yekan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`antialiased ${iranYekan?.className} ${iranYekan?.variable} text-[#545454]`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
