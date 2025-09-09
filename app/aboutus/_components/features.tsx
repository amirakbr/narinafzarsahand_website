"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const items = [
  {
    img: "/assets/aboutUs/همکاری گسترده--color.png",
    title: "همکاری گسترده و موثر با کسب‌وکارها",
  },
  {
    img: "/assets/aboutUs/مدیریت مالی هوشمند-color.png",
    title: "مدیریت مالی هوشمند، شفاف و بدون واسطه",
  },
  {
    img: "/assets/aboutUs/راهکارهای اختصاصی-color.png",
    title: "راهکارهای اختصاصی و بومی‌سازی‌شده",
  },
  {
    img: "/assets/aboutUs/پلتفرم مالی یکپارچه-color.png",
    title: "اولین ارائه‌دهنده پلتفرم مالی یکپارچه",
  },
];

export default function WhySection() {
  return (
    <section className=" text-center">
      <div className="container mx-auto px-4">
        <h4 className="text-right font-bold title-font-size text-primary">
          مأموریت و چشم‌انداز ما
        </h4>
        <div className=" hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
          {items?.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item?.img}
                  alt={item?.title}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <p className="mt-3 lg:text-lg font-medium text-black transition-colors duration-300 group-hover:text-primary">
                {item?.title}
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
          {items?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={item?.img}
                    alt={item?.title}
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover "
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-primary">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
