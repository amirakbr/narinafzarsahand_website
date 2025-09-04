import Image from "next/image";
import Banner from "../../_components/banner/banner";
import { IControlGateProps } from "../interface";

const ControlGate = ({ controlGateData }: IControlGateProps) => {
  const { description, features, subTitle, title } = controlGateData || {};
  return (
    <Banner
      backGroundimageAlt="image of an empty road"
      backGroundimageSrc="/assets/organization/controlGate.png"
      classNames={{
        container: "!p-0 self-stretch",
        image: "object-center",
      }}
    >
      <div className="flex flex-col gap-8 h-full p-2 py-8 justify-center mx-auto">
        <h3 className="title-font-size font-bold">{title}</h3>
        <p className="text-base xl:text-3xl">{subTitle}</p>
        <p className="p-font-size text-justify">{description}</p>
        <div className="flex flex-col lg:flex-row gap-8 justify-between relative">
          <ul className="flex flex-col gap-2 list-disc list-inside p-font-size">
            {features?.map((feature, index) => (
              <li key={`control gate feature ${index}`}>{feature}</li>
            ))}
          </ul>
          <div className="justify-self-end self-center lg:self-end relative lg:absolute left-0 lg:-bottom-8 xl:-bottom-12">
            <Image
              alt="bus image"
              src={"/assets/organization/busImage.svg"}
              width={400}
              height={100}
              className="object-center object-cover"
            />
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default ControlGate;
