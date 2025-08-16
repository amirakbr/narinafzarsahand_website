import React from "react";
import EnamadSeal from "./_components/enamadSeal";
import Address from "./_components/addres";
import ContactWays from "./contactWays";
import Services from "./_components/services";

export default function Footer() {
  const adresses = [
    {
      address: "نشانی تهران: دانشگاه تربیت مدرس . سـاختمـان جـوانـه . طبقه دوم",
      postalCode: "١۴١١٧١٣١١۶",
    },
    {
      address: "نشانی تهران: دانشگاه تربیت مدرس . سـاختمـان جـوانـه . طبقه دوم",
      postalCode: "١۴١١٧١٣١١۶",
    },
    {
      address: "نشانی تهران: دانشگاه تربیت مدرس . سـاختمـان جـوانـه . طبقه دوم",
      postalCode: "١۴١١٧١٣١١۶",
    },
  ];

  const servics = [
    "فــیـن تـــــــک",
    "فــیـن تـــــــک",
    "فــیـن تـــــــک",
    "فــیـن تـــــــک",
  ];

  const contactUs = [
    {
      title: "مشاوره و ثبت درخواست",
      url: "/assets/Footer-Photo/telegramIcon.png",
      alt: "test",
    },
    {
      title: "مشاوره و ثبت درخواست",
      url: "/assets/Footer-Photo/telegramIcon.png",
      alt: "test",
    },
    {
      title: "مشاوره و ثبت درخواست",
      url: "/assets/Footer-Photo/telegramIcon.png",
      alt: "test",
    },
    {
      title: "مشاوره و ثبت درخواست",
      url: "/assets/Footer-Photo/telegramIcon.png",
      alt: "test",
    },
  ];
  return (
    <footer dir="rtl" className="relative text-white">
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
