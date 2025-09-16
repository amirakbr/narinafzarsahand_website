"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { IWhySectionProps } from "../interface";

export default function WhySection({ title, featureArray }: IWhySectionProps) {
  return (
    <section className=" text-center">
      <div className="container mx-auto px-4">
        <h4 className="text-right font-bold title-font-size text-primary">
          {title}
        </h4>
        <div className=" hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
          {featureArray?.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${item?.image?.[0]?.formats?.large?.url}`}
                  alt={item?.image?.[0]?.name}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <p className="mt-3 lg:text-lg font-medium text-black transition-colors duration-300 group-hover:text-primary">
                {item?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden mt-3">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {featureArray?.map((item, index) => (
            <SwiperSlide key={item?.id}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item?.image?.[0]?.formats?.large?.url}`}
                    alt={item?.image?.[0]?.name}
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover "
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-primary">
                  {item?.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
