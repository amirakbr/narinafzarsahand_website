import { Building, LightbulbIcon, Map, Newspaper } from "lucide-react";
import { ITestimonialProps } from "./interface";
import Image from "next/image";

const Testimonial = ({ data }: ITestimonialProps) => {

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-8 -top-20 xl:-top-30 relative z-[11] container mx-auto px-2 sm:px-4 xl:px-12 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white flex items-center p-2 sm:p-4 rounded-sm shadow-md shadow-slate-800 2xl:w-[90%] xl:h-[230px]"
          >
            <div className="w-full">
              <div className="flex  items-center gap-4 mb-2 border-b-2 border-b-primary pb-2 ">
                <Image
                  alt="icon"
                  src={`${process.env.NEXT_PUBLIC_API_URL}${item?.icon?.url}`}
                  width={30}
                  height={30}
                />

                <h3 className="text-base md:text-lg xl:text-2xl font-bold">
                  {item?.title}
                </h3>
              </div>

              <div className="flex flex-col justify-center gap-2 my-6">
                <div className="flex items-center gap-2">
                  <span className="w-1 md:w-2 h-1 md:h-2 bg-gray-700 rounded-full"></span>
                  <p className="text-xs md:text-sm xl:text-base">
                    {item?.subtitle1}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 md:w-2 h-1 md:h-2 bg-gray-700 rounded-full"></span>
                  <p className="text-xs md:text-sm xl:text-base">
                    {item?.subtitle2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
