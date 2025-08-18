import Banner from "../_components/banner/banner";
import Municipality from "./_components/municipality";
import ControlGate from "./_components/controlGate";
import Bank from "./_components/bank";
import Insurance from "./_components/insurance";

export default function Home() {
  const municipalityData = [
    { imagesrc: "/assets/organization/municipality1.png" },
    { imagesrc: "/assets/organization/municipality2.png" },
    { imagesrc: "/assets/organization/municipality3.png" },
  ];

  const controlGateData = {
    title: "ایستگاه پایش",
    subTitle: "راهکاری هوشمند برای مدیریت حمل‌ونقل",
    description: `نارین افزار سهند با طراحی و اجرای طرح ایستگاه پایش برای شهرداری‌ها، گامی مؤثر در بهینه‌سازی مدیریت ناوگان حمل‌ونقل بین‌شهری برداشته است. در این طرح،
    تعداد مسافرین هر اتوبوس ۳۰ کیلومتر بعد از پایانه شمارش میشود تا تمامی سفرهای انجام‌شده، از جمله مسافرانی که خارج از پایانه سوار اتوبوس میشوند،
    ثبت و مدیریت شوند.`,
    features: [
      `بهبود توزیع عادلانه درآمدها بین ذینفعان`,
      `جلوگیری از هدررفت منابع و افزایش شفافیت مالی`,
      `تأمین همزمان منافع مالکان، شهرداری و شرکتهای مسافربری`,
      `مدیریت بهینه ظرفیت ناوگان و جلوگیری از سفرهای بدون ثبت`,
    ],
  };

  const bankData = {
    title: "بانک",
    description: `نارین‌افزار سهند با بهره‌گیری از دانش فنی و تجربه در طراحی زیرساخت‌های
        مالی، به بانک‌ها این امکان را میدهد تا خدمات پرداخت خود را با نیازهای
        صنایع مختلف هم‌راستا سازند. درگاه پرداخت ایران‌پیمکس، محصول این رویکرد،
        درگاهی امن، سریع و بومی‌سازی‌شده است که به‌عنوان یک پرداختیار رسمی بانک
        مرکزی، نقش واسط میان کسب‌وکارها و شبکه بانکی کشور را ایفا میکند.`,
    features: [
      `تسهیل تسویه‌حساب‌ها و بهینه‌سازی فرآیندهای مالی`,
      `افزایش امنیت، شفافیت و کنترل در تراکنش‌های مالی`,
      `گسترش پوشش خدمات بانکی در صنایع سنتی و نوین`,
      `افزایش تعامل موثر بانک‌ها با شرکت‌های فین‌تکی پیشرو`,
      `ارائه درگاه‌های پرداخت اختصاصی برای کسب‌وکارهای مختلف و متناسب با نیاز هر صنعت`,
    ],
  };

  const insuranceData = {
    sectionTitle: "بیمه",
    title: "نقش نارین افزار سهند در صنعت حمل‌ونقل و بیمه",
    description: `نارین افزار سهند با طراحی یک پلتفرم فین‌تک اختصاصی برای حمل‌‌ونقل بین‌شهری، فرآیندهای مالی را هوشمند و یکپارچه کرده است. در این سیستم، پس از
      خرید بلیط، پرداخت هزینه و تأیید صورت‌وضعیت حرکت اتوبوس، مبلغ بیمه ب‌هصورت سیستمی محاسبه و به‌طور خودکار و آنی به حساب بیمه واریز میشود. این
      راهکار، دقت، شفافیت و سرعت را در تسویه مالی بین شرکت‌های مسافربری و بیمه‌ها بهبود میبخشد.`,
    featureTitle:
      "مزایای طرح یکپارچه مالی نارین افزار سهند در صنعت حمل‌ونقل و بیمه",
    feature: [
      `کاهش هزینه‌های اجرایی`,
      `پرداخت خودکار و آنی بیمه`,
      `افزایش سرعت عملیات مالی`,
      `بهینه‌سازی فرآیندهای حمل‌ونقل`,
      `کاهش خطای انسانی`,
      `شـفافیت مالی`,
      `تسهیـل امور مالی`,
      `امنیت مالی بالا`,
    ],
  };
  return (
    <>
      <Banner
        backGroundimageAlt="organization banner"
        backGroundimageSrc="/assets/organization/banner.png"
        description="همکاری هوشمند مدیریت کارآمد"
        highlightWord={["همکاری", "هوشمند"]}
        title="ارگانها"
      />
      <div className="flex flex-col gap-8 mx-w-6xl mx-auto px-4 my-8">
        <Municipality municipalityData={municipalityData} />
        <ControlGate controlGateData={controlGateData} />
        <Bank bankData={bankData} />
      </div>
      <Insurance insuranceData={insuranceData} />
    </>
  );
}
