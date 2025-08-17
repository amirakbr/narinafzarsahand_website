import InfoBox from "./infoBox";

const Info = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <InfoBox label="شماره تماس" value="۰۲۱ ۶۲۷ ۴۶۰۰۰" />
        <InfoBox label="فکس" value="۰۱۲۳۴۵۶۷۸۹۰۰۰۰۰۰" />
        <InfoBox label="ایمیل" value="support@narinafzarsahand.com" />
        <InfoBox label="تلگرام" value="support-narinafzarsahand" />
      </div>
        <div className="flex flex-col gap-2">
          <p className="text-slate-500">آدرس</p>
          <div className="flex flex-col gap-2 border border-slate-500 rounded p-2">
            <p className="text-slate-500 text-lg font-bold">
              نشانی تهـران: دانشگـاه تربیت مدرس . سـاختـمـان جـوانـه . طبقه دوم.
              کدپستی: ۱۴۱۱۷۱۳۱
            </p>
            <p className="text-slate-500 text-lg font-bold">
              نشانی مشهد: خیابان پاسداران . برج فیروزه شرق . طبقه اول اداری.
              کدپستی: ۹۱۳۷۸۴۴۰۵۱
            </p>
            <p className="text-slate-500 text-lg font-bold">
              نشانی تبـریـز: خیابان شهید مدرس ، خیابان شهید بهشتی ، مجتمع اداری عتیق2 ، طبقه 3 واحد 337 کدپستی: 5136944410
            </p>
          </div>
        </div>
    </div>
  );
};

export default Info;
