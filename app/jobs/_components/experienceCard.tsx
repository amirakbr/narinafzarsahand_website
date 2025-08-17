"use client";
import { IExperienceCardProps } from "../interface";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ExperienceCard = ({ experienceCard }: IExperienceCardProps) => {
  return (
    <>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 mx-30 ">
        {experienceCard.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 p-4 "
          >
            <div className="flex">
              <img
                src={exp.avatar.url}
                alt={exp.avatar.alt}
                className="w-20 h-20 rounded-full object-cover object-top"
              />
              <div className="mx-2 w-1/2">
                <h3 className="text-right font-bold text-lg lg:text-xl mt-2 text-primary">
                  {exp.name}
                </h3>
                <p className="text-md text-rigth text-gray-600 mt-1">
                  {exp.job}
                </p>
                <hr className="text-primary w-full h-1 mt-1" />
              </div>
            </div>

            {exp.desc && (
              <p className="text-md text-gray-500 mt-1 text-justify">
                {exp.desc}
              </p>
            )}
          </div>
        ))}
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
          {experienceCard.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 p-4">
                <div className="flex justify-start">
                  <img
                    src={exp.avatar.url}
                    alt={exp.avatar.alt}
                    className="w-20 h-20 rounded-full object-cover object-top"
                  />
                  <div className="mx-2">
                    <h3 className="text-right font-bold text-lg lg:text-xl mt-2 text-primary">
                      {exp.name}
                    </h3>
                    <p className="text-md text-rigth text-gray-600 mt-1">
                      {exp.job}
                    </p>
                    <hr className="text-primary w-full h-1 mt-1" />
                  </div>
                </div>

                {exp.desc && (
                  <p className="text-md text-gray-500 mt-1 text-justify">
                    {exp.desc}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default ExperienceCard;
