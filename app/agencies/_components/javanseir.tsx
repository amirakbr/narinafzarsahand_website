import Banner from "../../_components/banner/banner";
import { IJavanseirProsp } from "../interface";

const Javanseir = ({ javanseirData }: IJavanseirProsp) => {
  const { description, features, featuresTitle, title, coverBg } =
    javanseirData || {};
  return (
    <Banner
      backGroundimageAlt="image of an empty road"
      backGroundimageSrc={`${process.env.NEXT_PUBLIC_API_URL}${
        coverBg?.formats?.large?.url || coverBg?.url
      }`}
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
              {features?.map((item) => (
                <li
                  className="text-base lg:text-lg xl:text-xl"
                  key={`javanseir feature ${item?.id}`}
                >
                  {item?.text}
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
