"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
const FeaturesSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState<number>();
  const yourNeeds = {
    title: "همگام با نیاز شما",
    description: `شرکت نارین افزار سهند با درک عمیق از نیازهای متنوع هر صنعت و الزامات شهری، اقدام
        به طراحی و اجرای پروژههایی اختصاصی نمودهاست. هر شهر، هر کسبوکار و هر سازمان،
        ویـژگیهـا و نیـازهـای منحصـر بـه فـرد خـود را دارنـد! بـه همیـن دلیـل، پـلتفـرمهـای مـالی مـا
        متنــاسـب بـا شـرایـط و خـواستـههـای خــاص
        ًال
        نـه تنهـا جـامـع و پیشـرفتـه هستند، بلکـه کام
        هـر منطقـه بـومـیسـازی میشـونـد.`,
    solutions: [
      {
        label: "ایستگاه پایش",
        image: "/assets/landingImage/controlGate.png",
        id: 1,
      },
      {
        label: " ساختار مشارکتی",
        image: "/assets/landingImage/partnership.png",
        id: 2,
      },
      {
        label: "پلتفرم جامع مالی",
        image: "/assets/landingImage/fintechPlatform.png",
        id: 12,
      },
      {
        label: "درگاه پرداخت",
        image: "/assets/landingImage/paymentGateway-1.png",
        id: 14,
      },
    ],
  };
  return (
    <div className="flex flex-col gap-4 px-4">
      <h6 className="landingTitleFontSize font-bold text-primary">
        {yourNeeds.title}
      </h6>
      <p className="subTitleFontSize text-gray-600 text-justify">
        {yourNeeds.description}
      </p>
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {yourNeeds.solutions?.map(({ image, label }, index) => (
          <div
            className={`flex flex-col items-center gap-4 grayscale-0 md:grayscale-100 md:hover:!grayscale-0 transition-all group`}
            key={`feature ${index}`}
          >
            <div className="relative transition-all h-60 group-hover:scale-110  rounded-xl overflow-hidden w-64">
              <Image
                alt="your need"
                src={image}
                fill
                className="object-cover object-center"
              />
            </div>
            <h6 className="text-center text-primary text-2xl font-semibold border-b-2 border-b-primary pb-1">
              {label}
            </h6>
          </div>
        ))}
      </div>
      <div className="block md:hidden w-full">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            scale: 0.9,
          }}
          autoplay={{ delay: 3000 }}
          // loop={true}
          modules={[Autoplay, EffectCoverflow]}
          dir="rtl"
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
          }}
          onSlideChange={({ realIndex }) => {
            setCurrentIndex(realIndex);
          }}
          wrapperClass="h-full pt-8"
        >
          {yourNeeds.solutions?.map(({ image, label, id }, index) => (
            <SwiperSlide key={id}>
              <div
                className={`p-4 flex flex-col items-center justify-center gap-2 transition-all  ${
                  currentIndex === index
                    ? "scale-[1.2] z-[10000] grayscale-0"
                    : "scale-100 -z-10000 grayscale-100"
                }`}
              >
                <div className="relative transition-all h-60 group:hover:scale-105  rounded-xl overflow-hidden w-64">
                  <Image
                    alt="your need"
                    src={image}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h6 className="text-center text-primary text-sm font-semibold border-b-2 border-b-primary pb-1">
                  {label}
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturesSwiper;
