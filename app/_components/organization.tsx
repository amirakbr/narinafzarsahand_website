import Image from "next/image";
import { IOrganizationProps } from "./interface";

const Organization = ({ data }: IOrganizationProps) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/assets/landingImage/organization.jpg)`,
        }}
        className="bg-cover bg-no-repeat bg-[-13rem] xl:bg-[0rem] p-4 sm:p-10 text-white relative bg-fixed"
      >
        <span className="absolute inset-0 backdrop-grayscale-100 backdrop-blur-sm"></span>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 p-4 py-6 rounded-lg bg-gradient-to-r from-primary-400/50 to-primary-900/90 text-white z-[10] relative container mx-auto max-w-[1351px] min-h-[394px]">
          <div className="flex flex-col gap-5">
            <h4 className="landingTitleFontSize font-bold">{data?.title}</h4>
            <p className="text-sm md:text-2xl font-medium text-justify">
              {data?.subtitle}
            </p>
            <p className="text-sm md:text-xl text-justify font-thin">
              {data?.description}
            </p>
          </div>
          <div className="flex flex-col  gap-10">
            <div className="flex flex-col gap-3 text-sm">
              <p className="text-sm md:text-lg xl:text-2xl font-medium w-max border-1 rounded-lg border-white py-1 px-2">
                سازمان‌های غیرخصوصی
              </p>
              <p className="text-sm md:text-lg xl:text-2xl font-normal border-1 rounded-lg border-white py-1 px-2">
                {data?.nonPrivate}
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <p className="text-sm md:text-lg xl:text-2xl font-medium w-max border-1 rounded-lg border-white py-1 px-2">
                ارگان‌ها
              </p>
              <p className="text-sm md:text-lg xl:text-2xl border-1 rounded-lg border-white py-1 px-2 font-normal">
                {data?.organization}
              </p>
            </div>
            <p className="text-[19px] font-semibold text-center text-primary-900 bg-white p-2 rounded-lg hidden lg:block">
              پلتفرم اختصاصی کسب و کار خود را سفارش بده!
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="text-sm md:text-lg xl:text-2xl font-medium w-max border-1 rounded-lg border-white py-1 px-2">
              سازمان‌های خصوصی
            </p>
            <div className="overflow-auto h-[269px] grid grid-cols-4 gap-4 border-1 rounded-lg border-white py-1 px-2">
              {data?.organizationsImage?.map((item) => (
                <Image
                  alt={item?.name}
                  key={item?.id}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${item?.formats?.thumbnail?.url}`}
                  width={50}
                  height={50}
                  className="justify-self-center object-cover object-center"
                />
              ))}
            </div>
          </div>
          <p className="block lg:hidden text-sm font-semibold text-center text-primary-900 bg-white p-2 rounded-lg">
            پلتفرم اختصاصی کسب و کار خود را سفارش بده!
          </p>
        </div>
      </div>
    </>
  );
};

export default Organization;
