"use client";
import React from "react";
import EnamadSeal from "./_components/enamadSeal";
import Address from "./_components/addres";
import ContactWays from "./contactWays";
import Services from "./_components/services";

export default function Footer() {
  const adresses = [
    {
      address: "نشانی تهـران: دانشگـاه تربیت مدرس . سـاختـمـان جـوانـه . طبقه دوم.",
      postalCode: "۱۴۱۱۷۱۳۱",
    },
    {
      address: "نشانی مشهد: خیابان پاسداران . برج فیروزه شرق . طبقه اول اداری.",
      postalCode: "۹۱۳۷۸۴۴۰۵۱",
    },
    {
      address: "نشانی تبـریـز: خیابان شهید مدرس ، خیابان شهید بهشتی ، مجتمع اداری عتیق2 ، طبقه 3 واحد 337",
      postalCode: "5136944410",
    },
  ];

  const servics = ["فین تک", "دستگاه پوز", "خدمات مالی", "برنامه نویسی"];

  const contactUs = [
    {
      title: "۰۲۱۶۲۷۴۶۰۰۰",
      url: "/assets/Footer-Photo/Footer-icon/1.svg",
      alt: "test",
      link: "tel:+982162746000",
    },
    {
      title: "narinafzaarsahand@yahoo.com",
      url: "/assets/Footer-Photo/Footer-icon/2.svg",
      alt: "test",
      link: "mailto:narinafzaarsahand@yahoo.com",
    },
    {
      title: "support-narinafzarsahand",
      url: "/assets/Footer-Photo/Footer-icon/3.svg",
      alt: "test",
      link: "https://t.me/support-narinafzarsahand",
    },
  ];
  return (
    <footer dir="rtl" className="relative text-white mt-8">
      <div className="absolute inset-0">
        <img
          src="/assets/Footer-Photo/3.png"
          alt="footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B2A5F] via-[#163D89] to-[#192B5A] opacity-90" />
      </div>
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-7 py-10 px-4 lg:p-10 items-start">
        <div className="flex items-end gap-2">
          <img src="assets/narinLogo.png" alt="لوگو" className="h-12" />
          <h2 className="text-right text-white text-lg font-bold">
            نارین افزار سهند
          </h2>
        </div>
        <div className="hidden lg:flex items-center flex-col">
          <Services services={servics} />
        </div>
        <div className="hidden lg:block col-span-2">
          <Address addressList={adresses} />
        </div>
        <div className="hidden lg:flex flex-col items-center col-span-2">
          <ContactWays contactList={contactUs} />
        </div>
        <div className="flex justify-center">
          {/* <EnamadSeal /> */}
          <img width={120} src="assets/Footer-Photo/eNamad.png" alt="" />
        </div>
        <div className=" flex flex-col lg:hidden col-span-4 my-8">
          <Address addressList={adresses} />
        </div>
        <div className="flex flex-wrap  lg:hidden col-span-2">
          <ContactWays contactList={contactUs} />
        </div>
      </div>
    </footer>
  );
}
