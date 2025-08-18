import Banner from "../_components/banner/banner";
import Javanseir from "./_components/javanseir";
import KeyFeatures from "./_components/keyFeature";
import NonPrivateAgencies from "./_components/nonPrivateAgencies";
import PrivateAgencies from "./_components/privateAgencies";
import Solutions from "./_components/solutions";
import Terminals from "./_components/terminals";

const Agencies = () => {
  const bannerData = {
    title: "سـازمـانهـا",
    keyWord: ["تکیه‌گاه"],
    description: "تکیه‌گاه بیش از ۴۰۰ شرکت",
    imageUrl: "/assets/agencies/banner.png",
    imageAlt: "agencies banner",
  };

  const privateAgenciesData = {
    title: "سازمان‌های خصوصی",
    description: `در دنیای امروز، سازمان‌های خصوصی در صنایع مختلف برای افزایش بهره‌وری، مدیریت بهتر
    جریان‌های مالی و کاهش هزینه‌ها، به پلتفرم‌های مالی یکپارچه و شفاف نیاز دارند. نارین
    افزار سهند، به‌عنوان اولین ارائه‌دهنده پلتفرم جامع مالی در صنعت حمل‌ونقل مسافربری،
    این امکان را فراهم کرده است که سازمانها در حوزههای حمل‌ونقل بین شهری و سایر
    صنایع، فرآیندهای مالی خود را هوشمند، یکپارچه و کارآمد مدیریت کنند.`,
  };

  const ourSolution = {
    title: "راه حل‌های نارین افزار سهند",
    solutions: [
      `تسویه آنی و بدون واسطه برای کسب‌وکارها و تأمین‌کنندگان`,
      `مدیریت هوشمند مالی و تراکنش‌ها برای شرکت‌های خدماتی و تجاری`,
      `یکپارچه‌سازی پرداخت‌ها برای بهبود نقدینگی و افزایش شفافیت مالی`,
    ],
    subtitle:
      "با راهکارهای نوآورانه، پلتفرمی متناسب با نیاز صنعت شما ارائه میدهیم.",
  };

  const terminalData = [
    {
      imageUrl: "/assets/agencies/lahijanTerminal.png",
      label: "پایانه مسافربری لاهیجان",
    },
    {
      imageUrl: "/assets/agencies/mashhadTerminal.png",
      label: "پایانه مسافربری مشهد",
    },
    {
      imageUrl: "/assets/agencies/shirazTerminal.png",
      label: "پایانه مسافربری شیراز",
    },
    {
      imageUrl: "/assets/agencies/kermanshahTerminal.png",
      label: "پایانه مسافربری کرمانشاه",
    },
    {
      imageUrl: "/assets/agencies/tabrizTerminal.png",
      label: "پایانه مسافربری تبریز",
    },
  ];

  const nonPrivateAgenciesData = {
    title: "سازمان‌های غیرخصوصی",
    description: `سازمان‌های دولتی و نهادهای عمومی، برای مدیریت مالی شفاف، نظارت دقیق و تسهیل
    فرآیندهای مالی، به راهکارهای هوشمند نیاز دارند. نارین افزار سهند با ارائه پلتفرم جامع
    مالی، به این سازمان‌ها کمک میکند تا جریان‌های مالی خود را بهینه سازند، پرداخت‌ها را
    مدیریت نمایند و تعامل مؤثرتری با سایر بخشها داشته باشند.`,
  };

  const javanseirData = {
    title: "شرکت جوان سیر ایثار",
    description: `شرکت نارین افزار سهند، با طراحی و توسعه یک نرم‌افزار جامع و اختصاصی، صفر تا صد
    زیرساخت‌های مالی و عملیاتی شرکت جوان سیر ایثار را فراهم است. این پلتفرم به‌صورت
    یکپارچه و هوشمند، کلیه نیازهای ترمینالی را در قالب یک راهکار متمرکز و بومی‌سازی‌شده
    برطرف می‌نماید.`,
    featuresTitle: `قابلیتهای کلیدی این نرم‌افزار عبارت‌اند از:`,
    features: [
      `زیرساخت هوشمند مدیریت یارانه‌های حمل‌ونقل`,
      `سیستم اتوماسیون صدور صورت‌وضعیت‌های مالی`,
      `سامانه تسهیل پرداخت دیون و بدهی‌های سازمانی`,
      `ماژول مدیریت احکام، قراردادها و تسویه حساب با ذینفعان`,
      `پلتفرم مالی اختصاصی برای مدیریت درآمدها، هزینه‌ها و تسویه‌حساب‌ها`,
      `سامانه یکپارچه مدیریت ترمینال برای کنترل عملیات روزانه و نظارت دقیق`,
    ],
  };

  const keyFeatures = {
    title: "ویژگی‌های کلیدی پلتفرم نارین افزار سهند",
    features: [
      {
        label: "مدیریت شفاف مالی",
        description:
          "ردیابی دقیق پرداخت‌ها و تسویه‌حساب‌ها در سامانه‌ای یکپارچه",
      },
      {
        label: "بهینه‌سازی پرداختها",
        description: "تسهیل پـرداخت‌های بین نهادی و مدیریت بودجه با دقت بالا",
      },
      {
        label: "افزایش نظارت و کنترل",
        description: "ارائه گزارش‌های تحلیلی جهت بهبود تصمیم‌گیری‌های کلان",
      },
      {
        label: "اتصال به شبکه بانکی و پرداختی",
        description: "هماهنگی سیستم مالی با بانکها و مؤسسات اعتباری",
      },
    ],
    description: `همکاری با شهرداری‌ها، وزارتخانه‌ها، اداره کل راهداری و سایر سازمان‌های دولتی، نشان‌دهنده کارایی و انعطاف‌‌‌پذیری پلتفرم مالی نارین افزار سهند است. ما در کنار
    سازمان‌های شما ایستاده‌ایم تا تحولی مدرن را در سیستم‌های مالی به ارمغان بیاوریم.`,
  };

  return (
    <>
      <div className="flex flex-col gap-16">
        <Banner
          backGroundimageAlt={bannerData.imageAlt}
          backGroundimageSrc={bannerData.imageUrl}
          description={bannerData.description}
          highlightWord={bannerData.keyWord}
          title={bannerData.title}
        />
        <div className="flex flex-col gap-16 max-w-7xl container mx-auto">
          <PrivateAgencies privateAgenciesData={privateAgenciesData} />
          <Solutions ourSolution={ourSolution} />
          <Terminals terminalData={terminalData} />
          <NonPrivateAgencies privateAgenciesData={nonPrivateAgenciesData} />
        </div>
        <Javanseir javanseirData={javanseirData} />
        <div className="flex flex-col gap-16 max-w-7xl container mx-auto">
          <KeyFeatures keyFeatures={keyFeatures} />
        </div>
      </div>
    </>
  );
};

export default Agencies;
