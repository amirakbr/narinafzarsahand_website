import Image from "next/image";
import { IBannerProps } from "./interface";
import { Fragment } from "react";

const Banner = ({
  backGroundimageAlt,
  backGroundimageSrc,
  description,
  highlightWord,
  title,
  classNames = { image: "", container: "" },
  children = undefined,
}: IBannerProps) => {
  return (
    <div className="text-white relative min-h-[250px] lg:min-h-[300px] xl:min-h-[450px] flex items-center">
      <span className="absolute inset-0 !bg-gradient-to-l !from-primary-900 !to-transparent to-[50%] z-[1]"></span>
      <div className="absolute inset-0">
        <Image
          alt={backGroundimageAlt}
          src={`${backGroundimageSrc}`}
          about={backGroundimageAlt}
          fill
          className={`object-cover ${classNames.image}`}
          priority
          fetchPriority="high"
        />
      </div>
      <div
        className={`z-[10] relative container mx-auto p-2 ${classNames.container}`}
      >
        {children ? (
          children
        ) : (
          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
            <p className="text-base md:text-xl">
              {description?.split(" ")?.map?.((word, index) =>
                highlightWord?.includes(word) ? (
                  <span key={`${word} - ${index}`} className="text-primary-300">
                    {word + " "}
                  </span>
                ) : (
                  <Fragment key={`${word} - ${index}`}>{word + " "}</Fragment>
                )
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
