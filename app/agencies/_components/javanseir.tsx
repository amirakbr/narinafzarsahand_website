import Banner from "../../_components/banner/banner";
import { IJavanseirProsp } from "../interface";
import { CheckCircle, PlayCircle } from "lucide-react";

const Javanseir = ({ javanseirData }: IJavanseirProsp) => {
  const { description, features, featuresTitle, title } = javanseirData || {};
  return (
    <Banner
      backGroundimageAlt="image of an empty road"
      backGroundimageSrc="/assets/organization/insurance.png"
      classNames={{
        container: "self-stretch p-4",
        image: "object-center",
      }}
    >
      <div className="flex flex-col gap-8 h-full p-6 justify-center w-full mx-auto border-2 border-primary rounded-xl">
        <h3 className="title-font-size font-bold">{title}</h3>
        <p className="p-font-size text-justify">{description}</p>
        <div className="flex flex-col lg:flex-row gap-8 justify-between relative">
          <div className="flex flex-col gap-4">
            <p className="title-font-size">{featuresTitle}</p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 gap-x-6 list-disc list-inside">
              {features?.map((feature, index) => (
                <li
                  className="text-base lg:text-lg xl:text-xl"
                  key={`javanseir feature ${index}`}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default Javanseir;
