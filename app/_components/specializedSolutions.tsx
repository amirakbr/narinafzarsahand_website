import { CheckCircle, PlayCircle } from "lucide-react";
import { ISpecializedSolutionsProps } from "./interface";

const SpecializedSolutions = ({ data }: ISpecializedSolutionsProps) => {
  console.log("SpecializedSolutions", data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center jusify-center container mx-auto xl:px-8 p-2 max-w-[1351px]">
      <div className="justify-self-center lg:justify-self-start relative w-3/4 h-[28rem] lg:h-[32rem] max-w-[25rem]">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-[-24rem] pt-12 pb-20 px-2 text-white relative rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(/assets/landingImage/specializedSolutions.jpg)`,
          }}
        >
          <span className="absolute inset-0 backdrop-brightness-70"></span>
        </div>
        <span className="absolute bottom-8 -left-6 bg-primary p-2 rounded-xl">
          <PlayCircle color="white" size={70} strokeWidth={1} />
        </span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h2 className="landingTitleFontSize font-semibold text-primary">
          {data?.title}
        </h2>
        <p className="text-sm  md:text-2xl font-medium">{data?.subtitle}</p>
        <p className="text-xs md:text-xl text-gray-600 text-justify  ">
          {data?.description}
        </p>
        <p className="text-xs md:text-xl text-gray-600 border-t-2 border-t-primary pt-2 text-justify">
          {data?.featureSubtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {data?.features?.map((feature, index) => (
            <span
              key={`specialized-feature-${feature?.id}`}
              className="flex items-center gap-1 text-xs md:text-xl"
            >
              <CheckCircle color="blue" />
              {feature?.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializedSolutions;
