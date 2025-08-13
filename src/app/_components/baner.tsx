"use client";

import Image from "next/image";

const Baner = () => {
  return (
    <div className="relative w-full h-[320px] overflow-hidden">
      <Image
        src={"/assets/aboutUs/Banner-aboutUS.png"}
        alt="بنر"
        fill
        className="object-cover opacity-100"
        priority
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgba(10,31,68,0.9) 0%, rgba(10,31,68,0.5) 25%, rgba(10,31,68,0) 50%)",
        }}
      ></div>

      <div className="absolute right-10  md:right-20 xl:right-50 top-1/2 text-white text-right">
        <h2 className="text-xl md:text-5xl md:font-bold mb-2">داستان ما</h2>
        <p className="text-xl md:text-3xl">چرا نارین افزار سهند؟</p>
      </div>
    </div>
  );
};

export default Baner;
