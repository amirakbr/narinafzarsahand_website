import { ISuccessCardContainerProps } from "../interface";
import SuccessCard from "./successCard";

const SuccessCardContainer = ({
  cover,
  successCards,
}: ISuccessCardContainerProps) => {


  return (
    <div
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${
          cover?.formats?.large?.url || cover?.url
        })`,
      }}
      className="bg-cover bg-no-repeat xl:bg-[center_-10rem] p-4 sm:px-10 md:py-20 text-white relative flex items-center"
    >
      <span className="absolute inset-0 backdrop-grayscale-100"></span>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 container mx-auto px-4 z-[1]">
        {successCards?.map((item, index) => (
          <SuccessCard {...item} key={`success card ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default SuccessCardContainer;
