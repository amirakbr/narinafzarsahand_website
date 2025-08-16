import { CheckCircle, PlayCircle } from "lucide-react";

const SpecializedSolutions = () => {
  const SpecializedSolutionsData = {
    title: "راهکارهای تخصصی",
    label: "نارین افزار سهند ارائه دهنده راهکار‌های مالی برای کسب و کار شما",
    description: `در دنیای پرشتاب امروز، مدیریت مالی یکی از مهمترین ارکان موفقیت هر کسبوکاری است.
    با سالها تجربه در حوزه ارائه خدمـات و راهکارهـای مـالی، بـه شمـا کمک
    "نارین افزار سهند"
    مینمـاید تـا بـا خیـالی آسـوده بـر رشد و تـوسعـه کسبوکار خـود تمـرکـز کنید.`,
    featuring: `مـا در نـارین افـزار سهنـد، بـا بهـرهگیری از تیمـی متخصص و ابـزارهـای نـویـن، خدمـاتی کاملا
    سفـارشی و مطابق بـا نیـازهـای خاص شمـا ارائه میدهیم.`,
    features: [
      {
        label: "مشاوره و نیازسنجی",
      },
      {
        label: "پشتیبانی و آموزش",
      },
      {
        label: "طراحی پلتفرم تخصصی مالی",
      },
      {
        label: "طراحی پلتفرم تخصصی مالی",
      },
      {
        label: "ارتقا و توسعه کسبوکارها",
      },
      {
        label: "هوشمندسازی فرایند مالی",
      },
    ],
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center jusify-center container mx-auto xl:px-8 p-2">
      <div className="justify-self-center lg:justify-self-start relative w-3/4 h-[28rem] lg:h-[32rem] max-w-[25rem]">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-[-24rem] pt-12 pb-20 px-2 text-white relative rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(/assets/landingImage/specializedSolutions.jpg)`,
          }}
        >
          <span className="absolute inset-0 backdrop-brightness-70"></span>
        </div>
        <span className="absolute bottom-8 -left-6 bg-primary p-2 rounded-xl">
          <PlayCircle color="white" size={70} strokeWidth={1} />
        </span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-2xl font-bold text-primary">
          {SpecializedSolutionsData.title}
        </h2>
        <p className="text-lg">{SpecializedSolutionsData.label}</p>
        <p className="text-sm text-gray-600">
          {SpecializedSolutionsData.description}
        </p>
        <p className="text-sm text-gray-600 border-t-2 border-t-primary pt-2">
          {SpecializedSolutionsData.featuring}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {SpecializedSolutionsData.features.map((feature, index) => (
            <span
              key={`specialized-feature-${index}`}
              className="flex items-center gap-1"
            >
              <CheckCircle color="blue" />
              {feature.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializedSolutions;
