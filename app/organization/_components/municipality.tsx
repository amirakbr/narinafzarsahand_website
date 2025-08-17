import { IMunicipalityData } from "../interface";
import MunicipalityImageContainer from "./municipalityImageContainer";

const Municipality = ({ municipalityData }: IMunicipalityData) => {
  return (
    <section className="container mx-auto flex flex-col xl:flex-row justify-between gap-16 xl:items-center">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl text-primary font-bold">شهرداری</h2>
        <p className="text-lg text-justify max-w-3xl">
          یکی از منابع پایدار درآمد شهرداری‌ها، دریافت عوارض از جابه‌جایی
          مسافران در حوزه حمل‌ونقل بین‌شهری است. شرکت نارین افزار سهند، به‌عنوان
          نخستین مجموعه فعال در این زمینه، با طراحی و پیاده‌سازی یک سامانه مالی
          اختصاصی، توانسته فرآیند شناسایی، محاسبه و وصول این عوارض را به‌صورت
          هوشمند و مکانیزه انجام دهد. این سامانه در قالب قرارداد رسمی با
          شهرداری‌ها به به بهره‌برداری رسیده و بستری فراهم نموده است تا ضمن
          افزایش شفافیت مالی و تسهیل نظارت، در تأمین به‌موقع و دقیق منابع درآمدی
          شهرداری‌ها کمک شایانی نماید.
        </p>
      </div>
      <MunicipalityImageContainer municipalityData={municipalityData} />
    </section>
  );
};

export default Municipality;
