import { Building, Calculator, CreditCard, Globe, Users } from "lucide-react";
import Banner from "../_components/banner/banner";
import Image from "next/image";
import IntroSection from "../_components/introSection/inddex";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="flex flex-col gap-8">
        <Banner
          backGroundimageSrc="/assets/services/banner.png"
          backGroundimageAlt="a man hand holding a pen and writing on apaper"
          description="تحول مالی کسب‌وکار شما"
          highlightWord={["تحول"]}
          title="خدمات"
          classNames={{
            image:
              "object-[center_0] sm:object-[center_20%] xl:object-[center_30%]",
          }}
        />
        <div className="container container mx-auto px-4 sm:px-0">
          <IntroSection
            desc="
            نارین افزار سهند با ارائه راهکارهای جامع مالی و فناوریهای نوین،
            کسبوکارها را در مسیر تحول، مدیریت مالی هوشمند و افزایش بهرهوری
            همراهی مینماید. ما با توسعه پلتفرمهای مالی اختصاصی، پرداختیاری،
            نرمافزارهای مالی و خدمات فین‌تک، فرایندهای مالی را سادهتر، شفافتر و
            کارآمدتر میسازیم. از مدیریت پرداختها تا یکپارچهسازی سیستمهای مالی،
            نارین افزار سهند کنار شماست تا بهترین راهکار را برای کسبوکار شما
            ارائه دهد."
          />
        </div>
      </section>
      <div className="mt-8 flex flex-col gap-12 mx-2">
        <section className="container mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="title-font-size font-bold text-primary ">
                فین‌تک
              </h2>
              <p className="text-gray-700 p-font-size text-justify">
                در دنیایی که تراکنش‌های مالی روزبه‌روز گسترده‌تر و پیچیده‌تر
                میشوند، روشهای سنتی دیگر جوابگو نیستند. امنیت پایین، زمانبر بودن
                پرداختها، نبود تحلیل‌های دقیق مالی و عدم شفافیت، همگی مشکلاتی
                هستند که کسب‌وکارها و حتی کاربران عادی با آن مواجه‌اند.نارین
                افزار سهند با ارائه راهکارهای پیشرفته فین‌تک، مرزهای سنتی دنیای
                مالی را جابجا کرده است. اگر به دنبال تراکنشهای سریع، امن و
                هوشمند هستید یا میخواهید سیستم مالی کسبوکار خود را به سطحی
                حرفه‌ای‌تر ارتقا دهید، فناوری مالی ما دقیقًا همان چیزی است که
                نیاز دارید.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:w-max lg:justify-self-end">
              <Image
                alt="fintech globe image"
                src={"/assets/services/globe.svg"}
                width={150}
                height={150}
                className="justify-self-center mx-auto hidden lg:block"
              />
              <p className="w-full lg:max-w-xl bg-primary text-white p-font-size text-left lg:text-center p-2 rounded-lg relative">
                تجربه‌ای هوشمند برای رشد کسبوکار شما
                <Image
                  alt="fintech globe image"
                  src={"/assets/services/globe.svg"}
                  width={80}
                  height={150}
                  className="justify-self-center mx-auto block lg:hidden absolute -bottom-2 right-4"
                />
              </p>
            </div>
          </div>
        </section>

        {/* Software Development Section */}
        <section className="flex flex-col gap-6 container mx-auto px-4 sm:px-0">
          <h2 className="title-font-size font-bold text-primary">
            توسعه نرم‌افزار
          </h2>
          <p className="p-font-size text-justify">
            امروزه دیگر بدون یک نرم‌افزار قدرتمند، هیچ کسب‌وکاری نمی‌تواند
            پاسخ‌گوی نیازهای مشتری باشد یا از رقبای خود جلوتر باشد. اما بسیاری
            از شرکت‌ها هنوز با روش‌های قدیمی کسب‌وکار می‌کنند که نه تنها سرعت
            کار را کاهش می‌دهد بلکه باعث از دست دادن مشتریان نیز می‌شود. استفاده
            کنندگان یک پیام ساده دارند: یا با زمان همگام شوید یا جایگاه‌تان را
            به رقبای‌تان واگذار کنید. تارین افزار سهند با درنظرگیری همین نیازها،
            نرم‌افزارهای سفارشی طراحی می‌کند که نه تنها نیازهای فعلی شما را پاسخ
            می‌دهد بلکه برای آینده نیز آماده‌تان می‌کند.
          </p>

          <div className="flex flex-col gap-6 sm:max-w-7xl mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-white">
              <div className="p-0 ">
                <img
                  src={"/assets/services/javanseir.png"}
                  alt=""
                  className="h-full rounded-lg w-full"
                />
              </div>
              <div className="col-span-2 p-6 flex flex-col gap-4  shadow-sm">
                <h3 className="landingTitleFontSize font-bold text-primary flex items-center">
                  <CreditCard className="w-6 h-6 ml-2" />
                  نرم افزار جامع جوان سیر ایثار
                </h3>
                <span className="border-b-2 border-b-primary sm:max-w-lg"></span>
                <p className="p-font-size text-justify">
                  نارین افزار سهند با طراحی یک نرم‌افزار جامع تحت وب و متمرکز،
                  مدیریت قراردادهای مالی، احکام و تخصیص اتوبوس‌ها را برای شرکت
                  جوان سیر ساده و یکپارچه ساخته است. این سیستم، تمام شعب را پوشش
                  میدهد و فرآیندهای مالی را با دقت، سرعت و شفافیت بالا مدیریت
                  مینماید.
                </p>
              </div>
            </div>
            <span className="border-b-2 border-b-primary w-full"></span>
          </div>

          <div className="flex flex-col gap-2 my-8">
            <p className="p-font-size font-medium text-justify">
              ما نرم‌افزارهای اختصاصی را برای شما طراحی میکنیم که دقیقا مطابق با
              نیازهای کسب‌وکارتان باشند:
            </p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li className="p-font-size text-justify">
                اپلیکیشن‌های موبایل و تحت وب که فعالیتهای شما را مکانیزه و بهینه
                می‌سازند.
              </li>
              <li className="p-font-size text-justify">
                نرم‌افزارهای یکپارچه سازمانی که ارتباطات داخلی و مدیریت مشتریان
                را بهبود می‌بخشند.
              </li>
              <li className="p-font-size text-justify">
                سیستم‌های سفارشی که نه‌تنها مشکلات امروز شما را حل میکنند، بلکه
                آینده را نیز در نظر میگیرند.
              </li>
            </ul>
          </div>
        </section>

        {/* POS Systems Section */}
        <section className="container mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[2fr_1fr] gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="title-font-size font-bold text-primary">
                نرم‌افزار مالی دستگاه پوز
              </h4>
              <p className="p-font-size text-justify">
                برای کسب‌وکارهایی که پرداخت حضوری دارند، داشتن یک نرم‌افزار مالی
                دقیق و هماهنگ با دستگاه‌های پوز ضروری است. نارین‌افزار سهند با
                ارائه دستگاههای پوز چندپرداختی، امکان فروش بلیت برای چند شرکت
                مسافربری را تنها با یک دستگاه فراهم کرده است. در هر تراکنش، وجوه
                به‌صورت مکانیزه به حساب‌ها مشخص شده واریز میشود.{" "}
                <span className="font-bold">ساده، هوشمند و یکپارچه!</span>
              </p>
              <Image
                alt="a man hand holding a pos device and a customer gives his credit card"
                src={"/assets/services/pos.png"}
                width={1000}
                height={100}
                className="max-h-96 object-center object-cover rounded-xl"
              />
            </div>
            <div className="w-full relative">
              <Image
                alt="a man hand holding his credit card on a pos device"
                src={"/assets/services/pos1.png"}
                fill
                className="object-center object-cover rounded-xl"
              />
            </div>
          </div>
          <hr className="text-primary w-full mt-5 h-2" />
        </section>

        {/* Payment Processing Section */}
        <section className="container mx-auto px-4 sm:px-0">
          <div className="flex flex-col gap-4">
            <div className="my-8">
              <h4 className="title-font-size font-bold text-primary">
                پرداخت یاری
              </h4>
              <p className="p-font-size text-justify">
                در دنیای امروز، سرعت، امنیت و یکپارچگی در پرداخت‌ها، جزو نیازهای
                اصلی هر کسب‌وکار محسوب میشود. نارین‌افزار سهند با بهره‌گیری از
                مجوز پرداختیاری، مجموعه‌ای از راهکارهای متنوع شامل درگاه پرداخت
                را ارائه میدهد.این زیرساخت‌ها امکان انجام تراکنش‌های مالی سریع،
                دقیق و بدون نیاز به فرآیندهای پیچیده را فراهم می‌نمایند و تجربه
                پرداخت را برای مشتریان و کسب‌وکارها سادهتر و هوشمندتر می‌سازند.
              </p>
            </div>
            <Image
              alt="iranpaymex.com logo"
              src={"/assets/services/iranpaymex.png"}
              width={100}
              height={100}
            />
            <p className="p-font-size text-justify">
              شرکت نارین افزار سهند با برند تجاری ایران‌پی‌مکس با احساس نیاز در
              حوزه ساماندهی مالی، فعالیت خود را شروع کرد. امروزه که تمام
              فعالیت‌ها به صورت غیرحضوری و آنلاین صورت میگیرد، اتصال مستقیم
              شبکههای پرداخت اینترنتی و بانکی با کسب و کارها یک دغدغه مهم و
              کارآمد است. اما مسئله فقط اتصال درگاه بانکی نیست! ایرانپیمکس یک
              پرداختیار پیشرو در ارائه راهکارهای مالی و پرداختی است که با تکیه
              بر انعطافپذیری، امنیت و سفارشیسازی، امکان مدیریت تراکنشهای مالی را
              برای انواع کسبوکارها فراهم مینماید. ما معتقدیم که هر کسبوکار
              نیازهای منحصربهفردی دارد و به همین دلیل، راهکارهای پرداختی را به
              سبک شما طراحی میکنیم.
            </p>
          </div>
        </section>
      </div>
      <section className="flex flex-col gap-4 mt-8 container mx-auto px-4 sm:px-0">
        <Banner
          backGroundimageSrc="/assets/services/banner.png"
          backGroundimageAlt="a man hand holding a pen and writing on apaper"
          classNames={{
            image:
              "object-[center_0] sm:object-[center_20%] xl:object-[center_30%]",
          }}
        >
          <div className="flex flex-col md:flex-row items-center md:gap-12">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h6 className="title-font-size font-bold">خدمات مالی</h6>
                <p className="p-font-size text-justify font-medium">
                  یکی از بزرگترین دلایل شکست کسب‌وکارها، عدم مدیریت مالی صحیح
                  است. شفافیت پایین در تراکنش‌ها، نبود گزارش‌های دقیق و اشتباهات
                  حسابداری میتوانند باعث ضررهای بزرگ شوند.نارین افزار سهند با
                  ارائه نرم‌افزارهای مالی و خدمات مشاورهای، امور مالی شما را به
                  یک مزیت رقابتی تبدیل میکند!
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h6 className="title-font-size font-bold">
                  چرا نارین افزار سهند؟
                </h6>
                <p className="p-font-size text-justify">
                  چون ما اعتقاد داریم که شفافیت مالی، کلید موفقیت کسب‌وکار
                  شماست!
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                alt="chart image"
                src={"/assets/services/chart.svg"}
                width={800}
                height={200}
              />
            </div>
          </div>
        </Banner>
      </section>
    </div>
  );
};

export default Services;
