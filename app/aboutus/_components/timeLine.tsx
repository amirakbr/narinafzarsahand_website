// components/Timeline.js
import Image from "next/image";

const timelineData = [
  {
    year: "۱۳۹۷-۱۳۹۹",
    title: "شروع فعالیت برند تجاری نازین افزار سهند",
    description:
      "به عنوان نخستین شتاب‌دهنده خدمات مالی در زمینه حمل‌ونقل مسافر بین‌شهری، از سال ۱۳۹۷ با هدف ساماندهی مالی و هوشمندسازی این صنعت فعالیت خود را آغاز کردیم و با تکیه بر تجربه و فناوری روز، تحول سیستم‌های مالی را رقم زدیم.",
    icon: "/assets/aboutUs/icons8-time-60.png",
    side: "left",
  },
  {
    year: "۱۳۹۹-۱۴۰۰",
    title: "توسعه اولین پلتفرم جامع مالی و طراحی محصولات",
    description:
      "انعطاف‌پذیری بالا و قابلیت بومی‌سازی برای هر شهر و صنعت، امکان سامانه‌های مالی، مدیریت تراکنش‌ها و افزایش شفافیت را برای شرکت‌های مسافربری، شهرداری‌ها و سایر نهادهای مرتبط فراهم می‌نماید.",
    icon: "/assets/aboutUs/icons8-time-60.png",
    side: "right",
  },
  {
    year: "۱۴۰۰-۱۴۰۱",
    title: "همکاری گسترده با ارگان‌ها و راه‌اندازی سیستم مدیریت مالی یکپارچه",
    description:
      "با همکاری شهرداری‌ها، شرکت‌های مسافربری و بانک‌ها راهکارهای مالی نوین برای مدیریت پرداخت‌ها ارائه دادیم.",
    icon: "/assets/aboutUs/icons8-time-60.png",
    side: "left",
  },
  {
    year: "۱۴۰۱-۱۴۰۲",
    title: "افزایش پوشش خدمات و گسترش شبکه پرداخت آنلاین",
    description:
      "با طراحی راهکارهای هوشمند و متناسب با نیاز کسب‌وکارها، فعالیت خود را در صنعت حمل‌ونقل گسترش دادیم.",
    icon: "/assets/aboutUs/icons8-time-60.png",
    side: "right",
  },
  // {
  //   year: "1402-03-05",
  //   title: "ورود امیر اکبرزاده به شرکت",
  //   description:
  //     "از ابتدای این زمان با تلاش و کوشش مهندس مجاوری و امیر اکبرزاده ، شرکت در ریل و مسیر پیشرفت به صورت صعودی قرار گرفت .",
  //   icon: "/assets/aboutUs/icons8-time-60.png",
  //   side: "right",
  // },
  {
    year: "۱۴۰۲-۱۴۰۳",
    title: "طراحی و اجرای زیرساخت‌های اختصاصی و بومی‌سازی شده",
    description:
      "در نازین افزار سهند با تکیه بر توانمندی‌های بومی و درک عمیق از چالش‌های صنعت، زیرساخت‌های مالی را طراحی و اجرا می‌کنیم.",
    icon: "/assets/aboutUs/icons8-time-60.png",
    side: "left",
  },
];

export default function Timeline() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-16 hidden md:block">
        <h2 className="text-2xl font-bold text-primary text-center my-12">
          مسیر رشد و توسعه نازین افزار سهند
        </h2>
        <div className="relative">
          {/* خط وسط */}
          <div className="absolute left-1/2 w-1 bg-gray-200 h-[calc(100%-24px)] -translate-x-1/2" />

          {timelineData.map((item, index) => (
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
                    src={item?.icon}
                    alt={item?.title}
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              {/* کارت */}
              <div className="w-5/12  rounded-lg p-6 relative z-10">
                <span
                  className={`flex  top-1/2 -translate-y-1/2 font-bold text-lg bg-white rounded-md py-4 px-4 shadow-md text-primary ${
                    item?.side === "left"
                      ? "justify-self-end"
                      : "justify-self-start"
                  }`}
                >
                  {item?.year}
                </span>
                <h3 className="lg:text-lg font-semibold text-gray-700  mb-3">
                  {item?.title}
                </h3>
                <p className="text-gray-600 leading-relaxed ">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden px-5 mt-16">
        <h2 className="text-lg font-bold text-primary text-center ">
          مسیر رشد و توسعه نازین افزار سهند
        </h2>
        {timelineData?.map((item, index) => (
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
              <span className="flex font-bold text-lg bg-white rounded-md py-2 px-3 shadow-md text-primary">
                {item?.year}
              </span>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Image
                  src={item?.icon}
                  alt={item?.title}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="mt-14">
              <h3 className=" font-semibold text-gray-700 mb-3">
                {item?.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-justify">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
