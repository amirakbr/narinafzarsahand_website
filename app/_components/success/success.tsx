import { ISuccessProps } from "../interface";
import SuccessCardContainer from "./successCardContainer";

const Success = ({ data }: ISuccessProps) => {

  return (
    <div className="flex flex-col gap-16">
      <div className="px-4 mx-auto container flex flex-col gap-4">
        <h6 className="landingTitleFontSize font-bold text-primary">
          {data?.title}
        </h6>
        <p className="subTitleFontSize text-gray-600 text-justify">
          {data.description}
        </p>
      </div>
      <SuccessCardContainer cover={data?.cover} successCards={data?.successCards}/>
    </div>
  );
};

export default Success;
