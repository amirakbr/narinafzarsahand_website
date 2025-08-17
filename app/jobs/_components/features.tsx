"use client";
import { useState } from "react";
import { IFeatureProps } from "../interface";

const Features = ({ item }: IFeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white hover:bg-primary border border-gray-200 rounded-lg shadow-sm flex flex-col p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h5
        className={`
    text-center font-bold text-sm md:text-lg  my-2
    transition-colors duration-300
    ${isHovered ? "text-white" : "text-black"}
  `}
      >
        {item?.title}
      </h5>

      <hr
        className={`
          w-full h-px my-2 border-0 transition-colors duration-300
          ${isHovered ? "bg-white" : "bg-gray-900"}
        `}
      />

      {/* <img
        src={isHovered ? item.hoverImage : item.image}
        alt={item.title}
        width={60}
        className="mx-auto"
      /> */}
      <img
        src={item.image}
        alt="icon"
        className="mx-auto filter grayscale invert group-hover:invert-0"
        width={60}
      />
    </div>
  );
};

export default Features;
