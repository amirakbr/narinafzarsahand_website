"use client";

import { useState } from "react";
import { IMunicipalityData } from "../interface";
import Image from "next/image";

const MunicipalityImageContainer = ({
  municipalityData,
}: IMunicipalityData) => {
  const [selectedImage, setSelectedImage] = useState(municipalityData?.[0]);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:hidden shrink-0">
        {municipalityData.map(({ imagesrc }) => (
          <div className="rounded-lg overflow-hidden" key={imagesrc}>
            <Image
              alt={imagesrc}
              src={imagesrc}
              width={400}
              height={100}
              className="object-center object-cover h-full scale-100 hover:scale-130 transition-all linear duration-[4s] w-full"
              sizes="100%"
            />
          </div>
        ))}
      </div>
      <div className="hidden xl:flex items-end gap-4 justify-end shrink-0">
        <div className="flex flex-col gap-2">
          {municipalityData
            ?.filter(({ imagesrc }) => imagesrc !== selectedImage?.imagesrc)
            ?.map(({ imagesrc }) => (
              <Image
                alt={imagesrc}
                src={imagesrc}
                key={imagesrc}
                width={150}
                height={400}
                className={`h-full object-center object-cover rounded-lg cursor-pointer ${
                  imagesrc === selectedImage?.imagesrc ? "opacity-50" : "opacity-100"
                }`}
                onClick={() => setSelectedImage({ imagesrc })}
              />
            ))}
        </div>
        <div className="h-96 rounded-lg overflow-hidden">
          <Image
            alt={selectedImage?.imagesrc}
            src={selectedImage?.imagesrc}
            width={300}
            height={400}
            className="h-full object-center object-cover scale-100 hover:scale-130 transition-all linear duration-[4s]"
            style={{ opacity: selectedImage?.imagesrc ? 1 : 0.5 }}
          />
        </div>
      </div>
    </>
  );
};

export default MunicipalityImageContainer;
