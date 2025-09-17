import Banner from "../_components/banner/banner";
import IntroSection from "../_components/introSection/inddex";
import VideoWithOverlay from "../_components/video/index";
import { getEventPage } from "../api/services";
import Benefits from "./_components/benefits";

const Events = async () => {
  const data = await getEventPage();

  return (
    <>
      <Banner
        backGroundimageAlt="event banner"
        backGroundimageSrc={`${process.env.NEXT_PUBLIC_API_URL}${
          data?.banner?.cover?.formats?.large?.url || data?.banner?.cover?.url
        }`}
        description={data?.banner?.description}
        highlightWord={[data?.banner?.highlightedValue?.text]}
        title={data?.banner?.title}
      />
      <div className="mx-5 md:mx-20 2xl:mx-50 mt-10">
        <IntroSection title={data?.title} desc={data?.description} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-right font-bold title-font-size text-primary">
              {data?.PilgrimTransport?.title}
            </h4>
            <p className="p-font-size text-justify">
              {data?.PilgrimTransport?.description}
            </p>
          </div>
          <div className="w-full">
            <VideoWithOverlay
              cover={{
                url: `${process.env.NEXT_PUBLIC_API_URL}${
                  data?.PilgrimTransport_video?.videoCover?.formats?.large
                    ?.url || data?.PilgrimTransport_video?.videoCover?.url
                }`,
                alt: "video",
              }}
              videoUrl="/assets/aboutUs/video.mp4"
              playButtonPosition="absolute"
              playButtonStyle="inset-0 flex items-center justify-center"
            />
          </div>
        </div>
        <div className="w-full">
          <Benefits
            title={data?.ArbaeenTransitBenefits_title}
            benefitsData={data?.ArbaeenTransitBenefits}
          />
          <p className="my-3 p-font-size text-justify">{data?.footerDesc}</p>
        </div>
      </div>
    </>
  );
};
export default Events;
