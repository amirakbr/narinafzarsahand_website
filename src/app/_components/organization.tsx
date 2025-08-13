import Image from "next/image";

const Organization = () => {
  const organizationData = {
    title: "تکیه گاه امِن شما",
    description: `نارین افزار سهند از سال ۱۳۹۷ فعالیت خود را آغاز کرده و با افتخار مورد
    اعتماد بیش از ۴۰۰ شرکت قرارگرفته است`,
    comment: `ایجاد نظم و مدیریت مالی، عالوه بر تسهیل فرایندها و پیشرفت کسب وکارها،
    سبب شده در ارتباط با ارگانهای مربوط هر حوزه مانند شهـرداری، بیمـه و...
    سسیتم منظـم تـر و رضـایت بخشی شکل بگیرد`,
    nonPrivate: "شرکت حمل و نقل جوان سیر ایثار",
    organization: "شهرداری کرمان ، بیمه",
    private: [
      { url: "1" },
      { url: "2" },
      { url: "3" },
      { url: "4" },
      { url: "5" },
      { url: "6" },
      { url: "7" },
      { url: "8" },
      { url: "9" },
      { url: "10" },
      { url: "11" },
      { url: "12" },
      { url: "13" },
      { url: "14" },
      { url: "15" },
      { url: "16" },
      { url: "17" },
      { url: "18" },
      { url: "19" },
      { url: "20" },
      { url: "21" },
      { url: "22" },
      { url: "23" },
      { url: "24" },
      { url: "25" },
      { url: "26" },
      { url: "27" },
      { url: "28" },
      { url: "29" },
      { url: "30" },
      { url: "31" },
      { url: "32" },
      { url: "33" },
      { url: "34" },
      { url: "35" },
      { url: "36" },
      { url: "37" },
      { url: "38" },
    ],
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/assets/landingImage/organization.jpg)`,
        }}
        className="bg-cover bg-no-repeat bg-[-13rem] xl:bg-[0rem] p-4 sm:p-10 text-white relative bg-fixed"
      >
        <span className="absolute inset-0 backdrop-grayscale-100 backdrop-blur-sm"></span>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 p-4 py-6 rounded-lg bg-gradient-to-r from-primary-400/50 to-primary-900/90 text-white z-[10] relative container mx-auto max-w-[80rem]">
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-bold">{organizationData.title}</h4>
            <p className="text-lg font-semibold">
              {organizationData.description}
            </p>
            <p className="text-sm font-thin">{organizationData.comment}</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 text-sm">
              <p className="font-semibold w-max border-1 rounded-lg border-white py-1 px-2">
                سازمان‌های غیرخصوصی
              </p>
              <p className="border-1 rounded-lg border-white py-1 px-2">
                {organizationData.nonPrivate}
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <p className="font-semibold w-max border-1 rounded-lg border-white py-1 px-2">
                ارگان‌ها
              </p>
              <p className="border-1 rounded-lg border-white py-1 px-2">
                {organizationData.organization}
              </p>
            </div>
            <p className="text-xs font-semibold text-center text-primary-900 bg-white p-2 rounded-lg">
              پلتفرم اختصاصی کسب و کار خود را سفارش بده!
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="font-semibold w-max border-1 rounded-lg border-white py-1 px-2">
              سازمان‌های غیرخصوصی
            </p>
            <div className="overflow-auto h-[10rem] grid grid-cols-4 gap-4 border-1 rounded-lg border-white py-1 px-2">
              {organizationData.private.map(({ url }) => (
                <Image
                  alt={`${url} image`}
                  key={`private organization ${url}`}
                  src={`/assets/landingImage/privateOrganization/${url}.png`}
                  width={50}
                  height={50}
                  objectFit="cover"
                  objectPosition="center"
                  className="justify-self-center"
                />
              ))}
            </div>
          </div>
          <p className="block lg:hidden text-xs font-semibold text-center text-primary-900 bg-white p-2 rounded-lg">
            پلتفرم اختصاصی کسب و کار خود را سفارش بده!
          </p>
        </div>
      </div>
    </>
  );
};

export default Organization;
