"use client";
import Banner from "../_components/banner/banner";
import BlogCard from "./_components/blogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogList = () => {
  const blogPosts = [
    {
      title: "مدیریت مالی در حمل ونقل",
      summary:
        "مدیریت مالی در صنعت حمل ونقل، به ویژه برای شرکت های مسافربری، یکی از مهم ترین ارکان موفقیت و پایداری کسب وکار است...",
      date: "تیر ماه ۱۴۰۴",
      isFeatures: true,
      blogImage: "/assets/blog/4.png",
      rate: 1,
    },
    {
      title: "اهمیت فین تک در توسعه پایدار",
      summary:
        "بازار بزرگ مرتبط با فین تک شامل پرداخت های دیجیتال، سرمایه گذاری دیجیتال و جذب سرمایه دیجیتال، دارایی های دیجیتال و نئوبانکینگ است که...",
      date: "مرداد ماه ۱۴۰۴",
      blogImage: "/assets/blog/5.png",
      rate: 2,
    },
    {
      title: "الگوی توسعه صنعت فین تک",
      summary:
        "مجموعه ای از راهکارها، چارچوب ها و استراتژی هایی که به رشد، نوآوری و گسترش خدمات مالی دیجیتال کمک می کنند و...",
      date: "تیر ماه ۱۴۰۴",
      blogImage: "/assets/blog/12.png",
      rate: 3,
    },
    {
      title: "نیاز صنایع به پلتفرم مالی",
      summary:
        "در دنیای امروز، مدیریت مالی کارآمد یکی از چالش های اساسی صنایع مختلف است. شرکت ها و سازمان ها نیاز به پلتفرم های مالی یکپارچه، هوشمند و منعطف دارند...",
      date: "تیر ماه ۱۴۰۴",
      blogImage: "/assets/blog/7.png",
      rate: 4,
    },
    {
      title: "نقش فین تک در تحول صنعت حمل ونقل",
      summary:
        "فین تک (Fintech) یا فناوری مالی، انقلابی در مدیریت تراکنش ها و سیستم های مالی ایجاد کرده است. صنعت حمل ونقل نیز از این تحول مستثنا نیست...",
      date: "مرداد ماه ۱۴۰۴",
      blogImage: "/assets/blog/8.png",
      rate: 5,
    },
    {
      title: "خط قرمز پلتفرم های رمزارز",
      summary:
        "حریم خصوصی کاربران، خط قرمز پلتفرم های رمزارز ایران است. طی شش ماه گذشته حوادث متعددی موجب نگرانی گسترده کاربران سکوهای تبادل در ایران شد اما...",
      date: "خرداد ماه ۱۴۰۴",
      blogImage: "/assets/blog/9.png",
      rate: 1.5,
    },
    {
      title: "انقلابی در بازارهای مالی",
      summary:
        "فین تک (فناوری مالی) در حال تجربه تحولات گسترده ای است که ساختارهای سنتی مالی را دگرگون می کند. این تغییرات به واسطه نوآوری های تکنولوژیک و...",
      date: "خرداد ماه ۱۴۰۴",
      blogImage: "/assets/blog/10.png",
      rate: 4.5,
    },
    {
      title: "نقش فین تک در رشد کسب وکارها",
      summary:
        "فین تک (FinTech) با نوآوری در سیستم های مالی، کسب وکارها را از روش های سنتی پرداخت و مدیریت مالی جدا کرده و به سمت راهکارهای هوشمند و...",
      date: "اردیبهشت ماه ۱۴۰۴",
      isFeatures: true,
      blogImage: "/assets/blog/11.png",
      rate: 3.5,
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <Banner
        backGroundimageAlt="blog image banner"
        backGroundimageSrc="/assets/blog/banner.png"
        classNames={{ image: "object-center" }}
        description="جدیدترین اخبار و مقاالت"
        highlightWord={["جدیدترین"]}
        title="بلاگ"
      />
      <div className="flex flex-col gap-8 container mx-auto px-4 md:px-8 mt-10">
        <p className="text-justify p-font-size font-medium pb-8 border-b-2 border-b-primary">
          در دنیای امروز، مدیریت مالی هوشمند و یکپارچه نقش کلیدی در بهبود عملکرد
          صنایع مختلف دارد. در وبلاگ نارین افزار سهند میتوانید با جدیدترین
          فناوری‌های مالی، روندهای دیجیتال، نوآوری‌های فین‌تک و راهکارهای مدیریت
          مالی آشنا شوید. همراه ما باشید تا در مسیرتحول دیجیتال و ارتقای
          سیستم‌های مالی، اطلاعات دقیق و کاربردی در اختیار شما قرار دهیم.
        </p>
        <div className="flex flex-col gap-8">
          <h2 className="text-base lg:text-xl font-bold text-primary">
            جدیدترین مقاالت و رویدادها
          </h2>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.3fr_1fr]">
            <div className="flex xl:hidden mb-10">
              <Swiper
                breakpoints={{
                  100: {
                    slidesPerView: 1,
                  },
                  700: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                autoplay={{ delay: 1000 }}
                modules={[Autoplay, Pagination]}
                pagination={{ type: "bullets", clickable: true }}
                wrapperClass="pb-10"
              >
                {blogPosts?.map(
                  (
                    { isFeatures, blogImage, date, rate, summary, title },
                    index
                  ) => (
                    <div key={index}>
                      {isFeatures ? (
                        <SwiperSlide key={`blog slide ${index}`}>
                          <BlogCard
                            imageUrl={blogImage}
                            publishDate={date}
                            rate={rate}
                            size="large"
                            summary={summary}
                            title={title}
                            key={`featured blog ${index}`}
                          />
                        </SwiperSlide>
                      ) : null}
                    </div>
                  )
                )}
              </Swiper>
            </div>
            <div className="flex flex-col gap-4">
              {blogPosts?.map(
                (
                  { isFeatures, blogImage, date, rate, summary, title },
                  index
                ) =>
                  !isFeatures ? (
                    <div key={index}>
                      <BlogCard
                        imageUrl={blogImage}
                        publishDate={date}
                        rate={rate}
                        size="small"
                        summary={summary}
                        title={title}
                        key={`blog ${index}`}
                      />
                    </div>
                  ) : null
              )}
            </div>
            <div className="hidden xl:grid grid-cols-1 grid-rows-1 lg:grid-rows-2 gap-4">
              {blogPosts?.map(
                (
                  { isFeatures, blogImage, date, rate, summary, title },
                  index
                ) =>
                  isFeatures ? (
                    <div key={index}>
                      <BlogCard
                        imageUrl={blogImage}
                        publishDate={date}
                        rate={rate}
                        size="large"
                        summary={summary}
                        title={title}
                        key={`featured blog ${index}`}
                      />
                    </div>
                  ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
