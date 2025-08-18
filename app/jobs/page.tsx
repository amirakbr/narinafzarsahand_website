
import Banner from "../_components/banner/banner";
import IntroSection from "../_components/introSection/inddex";
import DetailJob from "./_components/detailJob";
import ExperienceCard from "./_components/experienceCard";
import Features from "./_components/features";

const Jobs = () => {
  const DetailJobd = [
    {
      title: "برنامه نویس BackEnd",
      desc: "اگه باانگیزه، منظم و عاشق برنامهنویسی هستی و دوست داریتوی یه تیم حرفهای رشد کنی، ما منتظر رزومهات هستیم! بیاینباهم فناوریهای مالی رو متحول کنیم!",
      image: {
        url: "/assets/jobs/Photo/برنامه نویس Back-End.png",
        alt: "backend Developer",
      },
      location: "مشهد",
      status: "حضوری / نیمه وقت",
    },
    {
      title: "برنامه نویس BackEnd",
      desc: "اگه باانگیزه، منظم و عاشق برنامهنویسی هستی و دوست داریتوی یه تیم حرفهای رشد کنی، ما منتظر رزومهات هستیم! بیاینباهم فناوریهای مالی رو متحول کنیم!",
      image: {
        url: "/assets/jobs/Photo/برنامه نویس Back-End.png",
        alt: "backend Developer",
      },
      location: "مشهد",
      status: "حضوری / نیمه وقت",
    },
  ];

  const experienceCard = [
    {
      avatar: {
        url: "/assets/jobs/Photo/فاطمه حسن زاده.png",
        alt: "backend Developer",
      },
      name: "فاطمه حسن زاده",
      job: "برنامه نویس فرانت",
      desc: "اگه باانگیزه، منظم و عاشق برنامهنویسی هستی و دوست داریتوی یه تیم حرفهای رشد کنی، ما منتظر رزومهات هستیم! بیاینباهم فناوریهای مالی رو متحول کنیم!",
    },
    {
      avatar: {
        url: "/assets/jobs/Photo/فاطمه حسن زاده.png",
        alt: "backend Developer",
      },
      name: "فاطمه حسن زاده",
      job: "برنامه نویس فرانت",
      desc: "اگه باانگیزه، منظم و عاشق برنامهنویسی هستی و دوست داریتوی یه تیم حرفهای رشد کنی، ما منتظر رزومهات هستیم! بیاینباهم فناوریهای مالی رو متحول کنیم!",
    },
    {
      avatar: {
        url: "/assets/jobs/Photo/فاطمه حسن زاده.png",
        alt: "backend Developer",
      },
      name: "فاطمه حسن زاده",
      job: "برنامه نویس فرانت",
      desc: "اگه باانگیزه، منظم و عاشق برنامهنویسی هستی و دوست داریتوی یه تیم حرفهای رشد کنی، ما منتظر رزومهات هستیم! بیاینباهم فناوریهای مالی رو متحول کنیم!",
    },
  ];

  const fetures = [
    {
      hoverImage: "/assets/jobs/icon/1.svg",
      image: "/assets/jobs/icon/3.svg",
      title: "محیط امن و صمیمی",
    },
    {
      hoverImage: "/assets/jobs/icon/4.svg",
      image: "/assets/jobs/icon/3.svg",
      title: "محیط امن و صمیمی",
    },
    {
      hoverImage: "/assets/jobs/icon/4.svg",
      image: "/assets/jobs/icon/3.svg",
      title: "محیط امن و صمیمی",
    },
    {
      hoverImage: "/assets/jobs/icon/4.svg",
      image: "/assets/jobs/icon/3.svg",
      title: "محیط امن و صمیمی",
    },
    {
      hoverImage: "/assets/jobs/icon/4.svg",
      image: "/assets/jobs/icon/3.svg",
      title: "محیط امن و صمیمی",
    },
    {
      hoverImage: "/assets/jobs/icon/4.svg",
      image: "/assets/jobs/icon/3.svg",
      title: "محیط امن و صمیمی",
    },
    {
      hoverImage: "/assets/jobs/icon/1.svg",
      image: "/assets/jobs/icon/3.svg",
      title: "محیط امن و صمیمی",
    },
  ];
  return (
    <div>
      <Banner
        backGroundimageAlt="jobs banner"
        backGroundimageSrc="/assets/jobs/Photo/Banner-Photo.png"
        description="در کنار نارین افزار سهند"
        highlightWord={["مهارت ", "شما"]}
        title="فرصت‌های شغلی"
        classNames={{ image: "object-top" }}
      />
      <div className="mx-5 md:mx-20 2xl:mx-50 my-10">
        <div className="xl:mx-50">
          <IntroSection
            desc="ما در نارین افزار سهند، به دنبال افراد باانگیزه، خلاق و مشتاق یادگیری هستیم تا در کنار هم، تحولی بزرگ در فناوریهای شما مالی و صنعت حملونقل ایجاد کنیم. اگر دوست دارید در محیطی پویا، حرفهای و دوستانه کار کنید، جایی که ایدههای
شنیده شود و رشد شغلی واقعی را تجربه کنید، جای شما در تیم ما خالی است!"
          />
          <h4 className="text-right font-bold text-lg lg:text-3xl text-primary my-4">
            به تیم نارین افزار سهند بپیوندید!
          </h4>
          {DetailJobd?.map((item, index) => (
            <div key={index} className="my-2">
              <DetailJob
                desc={item.desc}
                title={item.title}
                location={item.location}
                status={item.status}
                image={{
                  url: item?.image?.url,
                  alt: item?.image?.alt || "",
                }}
              />
            </div>
          ))}
          <hr className="text-primary w-2/3 mt-16 h-1" />
          <h4 className="text-right font-bold text-lg lg:text-3xl text-primary my-8">
            تجربه خانواده نارین افزار سهند
          </h4>
        </div>
        <ExperienceCard experienceCard={experienceCard} />
        <div className="xl:mx-50">
          <hr className="text-primary w-2/3 mt-16 h-1" />
          <h4 className="text-right font-bold text-lg lg:text-3xl text-primary my-8">
            ویژگی های همکاری با ما
          </h4>
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fetures?.map((item, index) => (
              <div key={index}>
                <Features item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
