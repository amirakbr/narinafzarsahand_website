import Image from "next/image";
import Banner from "../../_components/banner/banner";
import { IInsuranceProps } from "../interface";

const Insurance = ({ insuranceData }: IInsuranceProps) => {
  const { description, feature, featureTitle, sectionTitle, title } =
    insuranceData || {};
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-8 container mx-auto px-4">
        <h4 className="text-2xl text-primary font-bold">{sectionTitle}</h4>
      </div>
      <Banner
        backGroundimageAlt="image of an empty road"
        backGroundimageSrc="/assets/organization/insurance.png"
        classNames={{
          container: "!p-0 self-stretch",
          image: "object-center",
        }}
      >
        <div className="flex flex-col gap-8 h-full p-2 py-8 justify-center xl:max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg">{description}</p>
          <div className="flex flex-col lg:flex-row gap-8 justify-between relative">
            <div className="flex flex-col gap-4">
              <p className="text-lg">{featureTitle}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside">
                {feature?.map((feature, index) => (
                  <li key={`control gate feature ${index}`}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="justify-self-end self-center lg:self-end relative lg:absolute left-0 lg:-bottom-8 xl:-bottom-8">
              <Image
                alt="shield image"
                src={"assets/organization/shield.svg"}
                width={180}
                height={100}
                className="object-center object-cover"
              />
            </div>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export default Insurance;
