// components/Timeline.js
import Image from "next/image";
import { ITimeLineProps } from "../interface";

export default function Timeline({ title, data }: ITimeLineProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-16 hidden md:block">
        <h2 className="title-font-size font-bold text-primary text-center my-12">
          {title}
        </h2>
        <div className="relative">
          {/* خط وسط */}
          <div className="absolute left-1/2 w-1 bg-gray-200 h-[calc(100%-24px)] -translate-x-1/2" />

          {data?.map((item, index) => (
            <div
              key={index}
              className={`mb-16 flex w-full items-start ${
                item?.side === "left" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="w-5/12" />

              {/* آیکون + خط اتصال */}
              <div className="w-2/12 flex justify-center relative">
                {/* خط افقی */}
                <div
                  className={`absolute top-1/2 translate-y-[-50%] w-[calc(100%+40px)] h-[2px] bg-gray-300 z-0 ${
                    item?.side === "left" ? "left-1/2" : "right-1/2"
                  }`}
                />

                {/* دایره آبی */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item?.icon?.url}`}
                    alt={item?.icon?.name}
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              {/* کارت */}
              <div className="w-5/12  rounded-lg p-6 relative z-10">
                <span
                  className={`flex  top-1/2 -translate-y-1/2 md:text-xl xs:text-3xl bg-white rounded-md py-4 px-4 shadow-md text-primary ${
                    item?.side === "left"
                      ? "justify-self-end"
                      : "justify-self-start"
                  }`}
                >
                  {item?.year}
                </span>
                <h3 className="md:text-lg xs:text-2xl font-bold text-gray-700  mb-3">
                  {item?.title}
                </h3>
                <p className="text-gray-600 leading-relaxed md:text-lg xl:text-2xl text-justify">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden px-5 mt-16">
        <h2 className="title-font-size font-bold text-primary text-center ">
          مسیر رشد و توسعه نازین افزار سهند
        </h2>
        {data?.map((item, index) => (
          <div
            key={index}
            className={`w-full p-6 relative z-10 border border-gray-300
        ${index === 0 ? "border-t-0" : ""}
        border-b-0
        ${item?.side === "left" ? "border-l-0" : "border-r-0"}
      `}
          >
            <div
              className={`absolute flex items-center gap-2
          ${item?.side === "left" ? "-right-6 flex-row-reverse" : "-left-6"}
        `}
            >
              <span className="flex font-bold text-base bg-white rounded-md py-2 px-3 shadow-md text-primary">
                {item?.year}
              </span>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${item?.icon?.url}`}
                  alt={item?.icon?.name}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="mt-14">
              <h3 className=" font-semibold text-gray-700 mb-3 text-sm justify-text">
                {item?.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-justify text-xs">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
