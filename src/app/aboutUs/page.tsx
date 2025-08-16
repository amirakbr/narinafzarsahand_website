import Baner from "../_components/baner/baner";
import WhySection from "./_components/features";
import Timeline from "./_components/timeLine";
import VideoWithOverlay from "../_components/video";
import Banner from "../_components/banner/banner";

const About = () => {
  const features = [
    "نوآوری: طراحی و اجرای راهکارهای مالی پیشرفته و اختصاصی",
    "نوآوری: طراحی و اجرای راهکارهای مالی پیشرفته و اختصاصی",
    "نوآوری: طراحی و اجرای راهکارهای مالی پیشرفته و اختصاصی",
    "نوآوری: طراحی و اجرای راهکارهای مالی پیشرفته و اختصاصی",
  ];

  return (
    <div>
      <Banner
        backGroundimageAlt="about us banner"
        backGroundimageSrc="/assets/AboutUs/Banner-aboutUS.png"
        description="چرا نارین افزار سهند؟"
        highlightWord={["چرا"]}
        title="داستان ما"
      />
      <div className="mx-5 md:mx-20 2xl:mx-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-10">
          <div className="">
            <div>
              <h4 className="text-right font-bold text-lg lg:text-3xl text-[#4249d8]">
                نارین افزار سهند
              </h4>
              <p className=" mt-3 lg:text-lg text-justify">
                ما، به عنوان اولین ارائهدهنده پلتفرم جامع مالی در صنعت حمل‌ونقل
                مسافربین‌شهری در ایران، با هدف تحول در مدیریت مالی، ارتقای کیفیت
                خدمات و افزایش شفافیت در تراکنش‌ها فعالیت خود را آغاز کردیم. در
                نارین افزار سهند با بهره‌گیری از فناوری‌های نوین، سیستم‌های مالی
                یکپارچه و هوشمند را برای هرنوع کسب و کاری طراحی و پیاده‌سازی
                می‌کنیم.
              </p>
            </div>
            <div className="my-4">
              <p className="text-justify lg:text-lg">
                <span className="font-bold lg:text-xl mx-1">
                  پلتفرم جامع مالی، همگام با نیاز هر صنعت:
                </span>
                نارین افزار سهند با ارائه راهکارهای مالی هوشمند و انعطاف‌پذیر،
                امکان شخصی‌سازی و سازگاری با نیازهای صنایع مختلف را فراهم
                می‌نماید تا کسب‌وکارها بتوانند مدیریت مالی خود را با بالاترین
                بهره‌وری و دقت انجام دهند.
              </p>
            </div>
            <hr className="text-[#4249d8] h-10" />
          </div>
          <div className="hidden md:flex justify-center lg:justify-end ">
            <VideoWithOverlay
              cover={{ url: "/assets/aboutUs/friendly.png", alt: "video" }}
              videoUrl="/assets/aboutUs/video.mp4"
              playButtonStyle="z-10 bg-[#4249d8] p-3 rounded-lg -right-11 bottom-10 xl:bottom-0 -translate-y-1/2"
              playButtonPosition="absolute"
            />
          </div>
        </div>
        <div className="my-2">
          <h4 className="text-right font-bold text-lg lg:text-3xl text-[#4249d8]">
            مأموریت و چشمانداز ما
          </h4>
          <p className=" mt-3 lg:text-lg text-justify">
            <span className="font-bold text-lg lg:text-xl mx-1">
              مأموریت نارین افزار سهند:
            </span>
            ارائه راهکارهای نوآورانه در حوزه فینتک برای مدیریت مالی هوشمند و
            بهینهسازی سیستمهای حملونقل، با تأکید بر افزایش شفافیت مالی، بهبود
            تجربه مسافران و کاهش هزینههای عملیاتی.
          </p>
          <p className=" mt-3 lg:text-lg text-justify">
            <span className="font-bold lg:text-xl mx-1">
              چشم‌انداز نارین افزار سهند:
            </span>
            تبدیل‌شدن به پیشروترین شرکت ارائه‌دهنده خدمات مالی هوشمند در صنعت
            حمل‌ونقل ایران و گسترش دامنه خدمات به سایر صنایع مرتبط با مدیریت
            مالی.
          </p>
        </div>
        <div className="my-12">
          <h4 className="text-right font-bold text-lg lg:text-3xl text-[#4249d8] my-3">
            ارزش‌های نارین افزار سهند
          </h4>

          <ul className="list-disc pr-5 space-y-2 text-right">
            {features?.map((item, index) => (
              <li key={index} className="lg:text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <WhySection />
        <Timeline />
      </div>
    </div>
  );
};
export default About;
