import Image from "next/image";
import FeaturesSwiper from "./featureSwiper";
import { IFeaturesProps } from "../interface";

const Features = ({ data, solutionData }: IFeaturesProps) => {
  return (
    <>
      <div className="flex flex-col gap-16 md:px-8 mx-auto container">
        <div className="flex flex-col gap-4 px-4">
          <h6 className="landingTitleFontSize font-bold text-primary">
            {data?.title}
          </h6>
          <p className="subTitleFontSize text-gray-600 text-justify">
            {data?.description}
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.3fr] gap-4">
            <div className="h-full">
              {data?.features
                .filter(({ isLargeOne }) => isLargeOne)
                .map(({ description, image, title }) => (
                  <div
                    className="flex flex-row xl:flex-col items-center gap-4 shadow-md shadow-slate-900 rounded-lg px-2 py-1 xl:p-0 h-full"
                    key={`${title}`}
                  >
                    <div className="relative w-24 h-24 xl:h-80 xl:w-full shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${image?.formats?.large?.url}`}
                        alt={title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col gap-2 xl:pb-8 xl:pt-4 xl:px-6">
                      <h6 className="text-sm md:text-xl xl:text-2xl text-primary font-bold border-b-2 border-b-primary lg:max-w-3/4">
                        {title}
                      </h6>
                      <p className="line-clamp-2 xl:line-clamp-[unset] text-xs md:text-base xl:text-xl text-justify">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-3 gap-4">
              {data?.features
                ?.filter(({ isLargeOne }) => !isLargeOne)
                ?.map(({ description, image, title }) => (
                  <div
                    className="flex items-center gap-4 shadow-md shadow-slate-900 rounded-lg px-2 py-1 xl:p-0"
                    key={`${title}`}
                  >
                    <div className="relative w-24 h-24 xl:h-full xl:w-60 shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${image?.formats?.large?.url}`}
                        alt={title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col gap-2 xl:p-6 xl:py-2">
                      <h6 className="text-sm xl:text-lg font-bold text-primary font-bold border-b-2 border-b-primary lg:max-w-3/4">
                        {title}
                      </h6>
                      <p className="line-clamp-2 xl:line-clamp-[unset] text-xs xl:text-base text-justify">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <FeaturesSwiper data={solutionData} />
      </div>
    </>
  );
};

export default Features;
