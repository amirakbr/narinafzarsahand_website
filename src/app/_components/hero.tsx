"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@heroui/react";
import { Autoplay } from "swiper/modules";

const Hero = () => {
  const swiperData = [
    {
      title: "پلتفرم جامع مالی، همگام با نیاز هر صنعت",
      description: `در نارین‌افزار سهند، راهکاری را توسعه دادهایم که پرداخت،
تسویه و مدیریت وجوه را هوشمند، شفاف و بدون پیچیدگی انجام
میدهد. این زیرساخت مالی با اتصال به نظام بانکی، راهکاری امن
و منعطف برای کسب‌وکارها و صنایع مختلف فراهم مینماید تا
فرآیندهای مالی خود را ساده، دقیق و یکپارچه مدیریت کنند.`,
      footer: "سکویی برای مدیریت هوشمند مالی",
      button: {
        label: "پلتفرم اختصاصی کسب و کارت رو سفارش بده!",
        link: "/order",
      },
      imageUrl: "/assets/landingImage/1-fintechSolution.png",
    },
    {
      title: "خانواده نارین افزار سهند",
      description: `نارین‌افزار سهند از دل یک تیم کوچک و متعهد متولد شد و
امروز، ما یک خانواده‌ی بزرگ از توسعه‌دهندگان و کارشناسان
متخصص هستیم که در کنار هم، سیستم‌های جامع هوشمند و
بومی‌سازی‌شده را برای صنایع مختلف طراحی و اجرا میکنیم.`,
      footer: "رشد ما نتیجه همکاری، تعهد و تخصص تیم بزرگ نارین افزار است.",
      button: {
        label: "پلتفرم اختصاصی کسب و کارت رو سفارش بده!",
        link: "/order",
      },
      imageUrl: "/assets/landingImage/2-narinFamily.png",
    },
    {
      title: "اولین زیرساخت مالی",
      description: `شرکت نارین افزار سهند، نخستین ارائه‌دهنده پلتفرم جامع مالی در صنعت
حمل‌ونقل مسافربری ایران، با هدف ساماندهی مالی و ارتقای کیفیت خدمات
فعـالیت میکـند. مـا در نـاریـن افـزار سـهنـد بـا بهـرهگیـری از فنـاوریهـای روز و
انعطافپذیری در طراحی، پلتفرمهای مالی بومی‌سازی‌شده و هماهنگ با شرایط و
نیازهای هر صنعت را ارائه میدهیم.`,
      footer: "شروع فعالیت از سال ۱۳۹۷",
      button: {
        label: "پلتفرم اختصاصی کسب و کارت رو سفارش بده!",
        link: "/order",
      },
      imageUrl: "/assets/landingImage/3-firstFintechSolution.png",
    },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
        modules={[Autoplay]}
      >
        {swiperData?.map(
          ({ button, description, footer, title, imageUrl }, index) => (
            <SwiperSlide
              key={`hero slide ${index}`}
              style={{ backgroundImage: `url(${imageUrl})` }}
              className="bg-cover bg-no-repeat bg-[center_0rem] lg:bg-[center_0rem] pt-12 pb-20 px-2 text-white relative"
            >
              <span className="absolute inset-0 !bg-gradient-to-l !from-[#151b59]/80 !to-transparent"></span>
              <div className="z-[10] relative container mx-auto p-2">
                <div className="flex flex-col gap-8 min-h-[20rem] sm:max-w-3/4 md:max-w-1/2">
                  <div className="flex flex-col gap-6">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="border-t-1 border-t-white">{footer}</div>
                  </div>
                  <Button
                    fullWidth={false}
                    variant="bordered"
                    className="text-white w-max"
                    radius="sm"
                  >
                    {button?.label ?? ""}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Hero;
