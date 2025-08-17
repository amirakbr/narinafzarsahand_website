import Banner from "../../_components/banner/banner";
import { IJavanseirProsp } from "../interface";

const Javanseir = ({ javanseirData }: IJavanseirProsp) => {
  const { description, features, featuresTitle, title } = javanseirData || {};
  return (
    <Banner
      backGroundimageAlt="image of an empty road"
      backGroundimageSrc="/assets/organization/insurance.png"
      classNames={{
        container: "self-stretch",
        image: "object-center",
      }}
    >
      <div className="flex flex-col gap-8 h-full p-4 justify-center xl:max-w-7xl mx-auto border-2 border-primary rounded-xl">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
        <div className="flex flex-col lg:flex-row gap-8 justify-between relative">
          <div className="flex flex-col gap-4">
            <p className="text-lg">{featuresTitle}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-6 list-disc list-inside">
              {features?.map((feature, index) => (
                <li key={`javanseir feature ${index}`}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default Javanseir;
