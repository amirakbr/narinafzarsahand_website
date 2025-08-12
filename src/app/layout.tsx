import React from "react";
import type { Metadata } from "next";
import { HeroUIProvider } from "@heroui/react";
import "./globals.css";
import { Providers } from "./provider";
import Header from "./_components/Header";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-vazir">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
