"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import { IFeaturesSwiperProps } from "../interface";
const FeaturesSwiper = ({ data }: IFeaturesSwiperProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>();
  return (
    <div className="flex flex-col gap-4 px-4">
      <h6 className="landingTitleFontSize font-bold text-primary">
        {data?.title}
      </h6>
      <p className="subTitleFontSize text-gray-600 text-justify">
        {data?.description}
      </p>
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {data?.solutions?.map(({ image, label }, index) => (
          <div
            className={`flex flex-col items-center gap-4 grayscale-0 md:grayscale-100 md:hover:!grayscale-0 transition-all group`}
            key={`feature ${index}`}
          >
            <div className="relative transition-all h-60 group-hover:scale-110  rounded-xl overflow-hidden w-64">
              <Image
                alt="your need"
                src={`${process.env.NEXT_PUBLIC_API_URL}${image?.[0]?.formats?.large?.url}`}
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
          {data?.solutions?.map(({ image, label, id }, index) => (
            <SwiperSlide key={id}>
              <div
                className={`p-4 flex flex-col items-center justify-center gap-2 transition-all  ${
                  currentIndex === index
                    ? "scale-[1.2] z-[10000] grayscale-0"
                    : "scale-100 -z-10000 grayscale-100"
                }`}
              >
                <div className="relative transition-all h-60 group:hover:scale-105  rounded-xl overflow-hidden w-64">
                  {/* <Image
                    alt="your need"
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item?.formats?.thumbnail?.url}`}
                    fill
                    className="object-cover object-center"
                  /> */}
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
