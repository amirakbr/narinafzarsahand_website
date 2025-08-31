import SuccessCardContainer from "./successCardContainer";

const Success = () => {
  const successData = {
    title: "دستاوردهای نارین افزار سهند",
    description: `این دستآوردها گواهی بر تالشها و ابتکارات شرکت نارین افزار سهند در جهت تحول
    صنایع و ارائه راهحلهای نوین در حوزه حسابداری و مدیریت مالی هستند که عالوه بر تامین
    سـود شرکتهـا و صنایع، درجهـت رضایت و نفع مـشتریـان عمـل میکند.`,
  };
  return (
    <div className="flex flex-col gap-16">
      <div className="px-8 mx-auto container flex flex-col gap-4 px-8">
        <h6 className="titleFontSize font-bold text-primary">
          {successData.title}
        </h6>
        <p className="subTitleFontSize text-gray-600">
          {successData.description}
        </p>
      </div>
      <SuccessCardContainer />
    </div>
  );
};

export default Success;
