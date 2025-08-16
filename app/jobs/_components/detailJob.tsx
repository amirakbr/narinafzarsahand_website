import { ICardProps } from "../interface";
import { MapPin, User } from "lucide-react";

const DetailJob = ({ image, title, desc, location, status }: ICardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
      <div className="p-0">
        <img src={image?.url} alt="" className="h-60 rounded-lg w-full" />
      </div>
      <div className="col-span-2  p-4 md:p-6 flex flex-col justify-between ">
        <div>
          <h2 className="text-right font-bold text-lg lg:text-3xl text-[#4249d8]">
            {title}
          </h2>
          <hr className="text-[#4249d8] w-2/3 mt-1 h-1" />
        </div>
        <p className=" mt-3 lg:text-lg text-justify">{desc}</p>
        <div className="flex gap-8 mt-4">
          <div className="flex items-center">
            <MapPin color="#4249d8" />
            <p> {location} </p>
          </div>
          <div className="flex items-center">
            <User color="#4249d8" />
            <p> {status} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailJob;
