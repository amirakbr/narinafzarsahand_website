"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@heroui/react";
import { Autoplay } from "swiper/modules";
import { IHeroLandingProps } from "./interface";

const Hero = ({ heroData }: IHeroLandingProps) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
        modules={[Autoplay]}
      >
        {heroData?.map(
          (
            { callToAction, description, subtitle, title, sliderCover },
            index
          ) => (
            <SwiperSlide
              key={`hero slide ${index}`}
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${
                  sliderCover?.formats?.large?.url || sliderCover?.url
                })`,
              }}
              className="bg-cover bg-no-repeat bg-[center_0rem] lg:bg-[center_0rem] pt-12 pb-20 xl:pb-40 px-2 text-white relative"
            >
              <span className="absolute inset-0 !bg-gradient-to-l !from-[#151b59]/80 !to-transparent"></span>
              <div className="z-[10] relative container mx-auto p-2">
                <div className="flex flex-col gap-8 min-h-[20rem] sm:max-w-3/4 md:max-w-1/2">
                  <div className="flex flex-col gap-6 xl:pl-16">
                    <h1 className="font-semibold text-base md:text-3xl">
                      {title}
                    </h1>
                    <p className="font-medium text-sm md:text-xl leading-relaxed text-justify ">
                      {description}
                    </p>
                    <div className="border-t-1 border-t-white text-xs md:text-xl pt-1">
                      {subtitle}
                    </div>
                  </div>
                  <Button
                    fullWidth={false}
                    variant="bordered"
                    className="text-white w-max text-xs xl:text-base"
                    radius="sm"
                  >
                    {callToAction?.titleButton ?? ""}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Hero;
