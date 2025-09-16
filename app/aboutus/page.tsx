import WhySection from "./_components/features";
import Timeline from "./_components/timeLine";
import VideoWithOverlay from "../_components/video";
import Banner from "../_components/banner/banner";
import { getAboutUsPage } from "../api/services";

const About = async () => {
  const data = await getAboutUsPage();
  console.log("dataaaaaaaa", data);

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
        backGroundimageSrc={`${process.env.NEXT_PUBLIC_API_URL}${
          data?.banner?.cover?.formats?.large?.url || data?.banner?.cover?.url
        }`}
        description={data?.banner?.description}
        highlightWord={[data?.banner?.highlightedValue.text]}
        title={data?.banner?.title}
      />
      <div className="mx-5 md:mx-20 2xl:mx-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-10">
          <div className="">
            <div className="flex flex-col gap-4">
              <h4 className="text-right font-bold title-font-size text-primary">
                {data?.titlePage}
              </h4>
              <p className="p-font-size text-justify">{data?.description}</p>
            </div>
            {/* <div className="my-4">
              <p className="text-justify p-font-size">
                <span className="font-bold p-font-size mx-1">
                  پلتفرم جامع مالی، همگام با نیاز هر صنعت:
                </span>
                نارین افزار سهند با ارائه راهکارهای مالی هوشمند و انعطاف‌پذیر،
                امکان شخصی‌سازی و سازگاری با نیازهای صنایع مختلف را فراهم
                می‌نماید تا کسب‌وکارها بتوانند مدیریت مالی خود را با بالاترین
                بهره‌وری و دقت انجام دهند.
              </p>
            </div> */}
            <hr className="text-primary h-10" />
          </div>
          <div className="hidden md:flex justify-center lg:justify-end ">
            <VideoWithOverlay
              cover={{
                url: `${process.env.NEXT_PUBLIC_API_URL}${
                  data?.video?.videoCover?.formats?.large?.url ||
                  data?.video?.videoCover?.url
                }`,
                alt: "video",
              }}
              videoUrl=""
              playButtonStyle="z-10 bg-primary p-3 rounded-lg -right-11 bottom-10 xl:bottom-0 -translate-y-1/2"
              playButtonPosition="absolute"
            />
          </div>
        </div>
        <div className="my-2">
          <h4 className="text-right font-bold title-font-size text-primary">
            {data?.missionTitle}
          </h4>

          {data?.missions?.map((item) => (
            <div key={item?.id}>
              <p className=" mt-3 p-font-size text-justify">
                <span className="font-bold p-font-size mx-1">{item.label}</span>
                {item?.value}
              </p>
            </div>
          ))}

          {/* <p className=" mt-3 p-font-size text-justify">
            <span className="font-bold p-font-size mx-1">
              چشم‌انداز نارین افزار سهند:
            </span>
            تبدیل‌شدن به پیشروترین شرکت ارائه‌دهنده خدمات مالی هوشمند در صنعت
            حمل‌ونقل ایران و گسترش دامنه خدمات به سایر صنایع مرتبط با مدیریت
            مالی.
          </p> */}
        </div>
        <div className="my-12">
          <h4 className="text-right font-bold title-font-size text-primary my-3">
            {data?.valuesTitle}
          </h4>

          <ul className="list-disc pr-5 space-y-2 text-right">
            {data?.values?.map((item) => (
              <li key={item?.id} className="p-font-size">
                {item?.text}
              </li>
            ))}
          </ul>
        </div>
        <WhySection title={data?.why_us_title} featureArray={data?.why_us} />
        <Timeline title={data?.timeLineTitle} data={data?.time_lines} />
      </div>
    </div>
  );
};
export default About;
