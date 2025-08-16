"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
const FeaturesSwiper = () => {
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
      },
      {
        label: " ساختار مشارکتی",
        image: "/assets/landingImage/partnership.png",
      },
      {
        label: "پلتفرم جامع مالی",
        image: "/assets/landingImage/fintechPlatform.png",
      },
      {
        label: "درگاه پرداخت",
        image: "/assets/landingImage/paymentGateway-1.png",
      },
    ],
  };
  return (
    <div className="flex flex-col gap-4 px-4">
      <h6 className="text-2xl font-bold text-primary">{yourNeeds.title}</h6>
      <p className="text-sm text-gray-600">{yourNeeds.description}</p>
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
                objectFit="fill"
                objectPosition="center"
              />
            </div>
            <h6 className="text-center text-primary text-lg font-semibold border-b-2 border-b-primary pb-1">
              {label}
            </h6>
          </div>
        ))}
      </div>
      <div className="block md:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            scale: 0.9,
          }}
          autoplay={{ delay: 40000 }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
        >
          {yourNeeds.solutions?.map(({ image, label }, index) => (
            <SwiperSlide key={`feature slide ${index}`}>
              <div
                className={`flex flex-col items-center gap-4 grayscale-0 xl:grayscale-100 xl:hover:!grayscale-0 transition-all group`}
              >
                <div className="relative transition-all h-60 group:hover:scale-105  rounded-xl overflow-hidden w-64">
                  <Image
                    alt="your need"
                    src={image}
                    fill
                    objectFit="fill"
                    objectPosition="center"
                  />
                </div>
                <h6 className="text-center text-primary text-lg font-semibold border-b-2 border-b-primary pb-1">
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
