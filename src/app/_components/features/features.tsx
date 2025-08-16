import Image from "next/image";
import FeaturesSwiper from "./featureSwiper";

const Features = () => {
  const featureData = {
    title: "شتاب دهندهی موفقیت شما",
    description: `نـارین افـزار سهنـد بـا طـراحی پلتفـرمهـای مـالی هـوشمند و محصـوالت خـاص که متنـاسب بـا
    نیـازهـای هـرصنـعت است، مسیـر رشـد و بهـرهوری را بـرای کسبوکارهـا همـوار مینمـاید.
    همـراه شمـا هستیم تـا موفقیت شمـا سریعتر و پایدارتـر حاصل شـود.`,
    features: [
      {
        label: "دستگاه پوز چندپرداختی",
        description: `شرکت نارین افزار سهند از سال ۱۳۹۹ به ارائه دستگاههای پوزهای ویژهای پرداخته
        که امکان خرید و چـاپ بلیط اتوبوس را برای مسافران فراهم کرده اسـت. این
        دستگاهها با استقرار در نقاط کلیدی سطح شهر، فرآیند تهیه بلیط راتسهیل کرده و بـه
        افـزایش سـرعـت خـدمـت رسـانی و رضـایـت مسافـران کمک شـایـانی مینمایند. این
        طـرح بـا حذف هزینههـای سربار، حفاظـت از محیط زیست، کاهش بینظمی، بهبود
        شفافیت مالی و گسترش دسترسی برای تهیه بلیط، گامی مؤثر در مسیر یکپارچهسازی
        و ارتقای سیستم حملونقل مسافربری بین شهری کشوربرداشته است.`,
        image: "/assets/landingImage/pos.png",
        isLargerOne: true,
      },
      {
        label: "پلتفرم مالی",
        description: `درساختار سنتی مالی شرکتها، فرایندهایی نظیر؛ تعیین فرد
        امین، حساب متمرکز، تقسیم سهم شرکا و... پیچیده، زمانبر
        و مستعد خطا هستند. اما نارین افزار سهند با طراحی سیستم
        نوین و هوشمند مالی ضمن حذف این فرایند، زمینه بهبود و
        شفافیت بیشتر گردش مالی فراهم کرده است
        `,
        image: "/assets/landingImage/fintech.png",
      },
      {
        label: "درگاه پرداخت",
        description: `امروزه که تمام فعالیتها به صورت آنالین صورت میگیرد،
        اتصال مستقیم شبکههای پرداخت اینترنتی و بانکی با کسب
        و کارها یک دغدغه مهم و کارآمد است. اما مسئله فقط اتصال
        درگاه بانکی نیست! نارین افزار سهند با احساس نیاز در این
        حوزه، به ارائه درگاههای پرداخت کامال شخصی سازی شده،
        اقدام نموده است.`,
        image: "/assets/landingImage/paymentGateway.png",
      },
      {
        label: "تورمجازی",
        description: `از مشکالت اصلی در خرید غیرحضوری بلیط، عدم آگاهی از
        وضعیت و امکانات اتوبوسها است. در پی حل این مسئله،
        نارین افزار سهند امکانی ایجاد کرده است تا مسافران
        تصاویر سهبعدی اتوبوسها را مشاهده نمایند و قبل از خرید
        بلیط، از امکانات و وضعیت آنها مطمئن شوند.`,
        image: "/assets/landingImage/virtualTour.png",
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col gap-16 px-8 mx-auto container">
        <div className="flex flex-col gap-4 px-4">
          <h6 className="text-2xl font-bold text-primary">
            {featureData.title}
          </h6>
          <p className="text-sm text-gray-600">{featureData.description}</p>
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.3fr] gap-4">
            <div className="h-full">
              {featureData.features
                .filter(({ isLargerOne }) => isLargerOne)
                .map(({ description, image, label }) => (
                  <div
                    className="flex flex-row xl:flex-col items-center gap-4 shadow-md shadow-slate-900 rounded-lg px-2 py-1 xl:p-0 h-full"
                    key={`${label}`}
                  >
                    <div className="relative w-24 h-24 xl:h-80 xl:w-full flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={label}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col gap-2 xl:pb-8 xl:pt-4 xl:px-6">
                      <h6 className="text-lg text-primary font-bold border-b-2 border-b-primary lg:max-w-3/4">
                        {label}
                      </h6>
                      <p className="line-clamp-2 xl:line-clamp-[unset] text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-3 gap-4">
              {featureData.features
                .filter(({ isLargerOne }) => !isLargerOne)
                .map(({ description, image, label }) => (
                  <div
                    className="flex items-center gap-4 shadow-md shadow-slate-900 rounded-lg px-2 py-1 xl:p-0"
                    key={`${label}`}
                  >
                    <div className="relative w-24 h-24 xl:h-full xl:w-60 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={label}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col gap-2 xl:p-6 xl:py-2">
                      <h6 className="text-lg text-primary font-bold border-b-2 border-b-primary lg:max-w-3/4">
                        {label}
                      </h6>
                      <p className="line-clamp-2 xl:line-clamp-[unset] text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <FeaturesSwiper />
      </div>
    </>
  );
};

export default Features;
