import Banner from "../_components/banner/banner";
import IntroSection from "../_components/introSection/inddex";
import VideoWithOverlay from "../_components/video/index";
import Benefits from "./_components/benefits";

const Events = () => {
  return (
    <>
      <Banner
        title="رویداد ها"
        description="در مسیر رشد و نوآوری"
        backGroundimageAlt="event banner"
        backGroundimageSrc="/assets/events/4.png"
        highlightWord={["در", "مسیر"]}
      />
      <div className="mx-5 md:mx-20 2xl:mx-50 mt-10">
        <IntroSection
          title="تازه‌ترین اخبار"
          desc="با ما همراه باشید تا از بهروزترین تحولات، طرحهای اختصاصی و پروژههای در حال اجرای نارین افزار سهند مطلع شوید."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-right font-bold title-font-size text-primary">
              سامانه هوشمند مدیریت حمل‌ونقل زائران
            </h4>
            <p className="p-font-size text-justify">
              اربعین حسینی، بزرگترین اجتماع مذهبی جهان، سالانه میلیونها زائر را
              به کربلا جذب میکند. اما بازگشت این حجم عظیم زائران به شهرهای داخلی
              ایران همواره با چالشهای متعددی همراه بوده است. مشکلاتی همچون
              ازدحام در پایانهها، ناهماهنگی در توزیع ظرفیت ناوگانها، و صفهای
              طولانی برای خرید بلیط، تجربه بازگشت زائران را دشوار و خستهکننده
              کرده است. سامانه هوشمند مدیریت حملونقل زائران اربعین، با استفاده
              از فناوریهای نوین، بهعنوان راهکاری جامع طراحی شده است تا این
              مشکلات را به حداقل برساند و خدمات شایستهای درخور شأن زائران اربعین
              ارائه کند. سامانه هوشمند مدیریت حملونقل زائران هـا رویداد در مسیر
              رشد و نوآوری این سامانه با برنامهریزی هوشمند، تخصیص بهینه ظرفیت
              ناوگان و ارائه فرآیندهای خرید بلیط آنلاین، امکان بازگشت سریع، منظم
              و بدون دغدغه زائران را فراهم میکند. از طریق این سیستم، ازدحام کاهش
              یافته، زمان انتظار به حداقل میرسد و ناوگان حملونقل بهصورت هماهنگ و
              یکپارچه مدیریت میشود. هدف ما ایجاد سفری ایمن، آسان و منظم برای
              زائران اربعین حسینی است
            </p>
          </div>
          <div className="w-full">
            <VideoWithOverlay
              cover={{ url: "/assets/events/7.png", alt: "video" }}
              videoUrl="/assets/aboutUs/video.mp4"
              playButtonPosition="absolute"
              playButtonStyle="inset-0 flex items-center justify-center"
            />
          </div>
        </div>
        <div className="w-full">
          <Benefits />
          <p className="my-3 p-font-size text-justify">
            سرعت خدمترسانی، رفع ازدحام در پایانهها، مدیریت پایانه، سهولت در تهیه
            بلیط، استفاده بهینه از زیرساختها، تنظیم ظرفیتها با نیاز زائرین،
            مدیریت تقاضای لحظهای و تامین رفاه زائران از جمله مزیتهای طرح
            پیشنهادی است.
          </p>
        </div>
      </div>
    </>
  );
};
export default Events;
