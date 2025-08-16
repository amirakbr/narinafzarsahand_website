import { IIntroSectionProps } from "./interface";

const IntroSection = ({ desc, icon, iconTitle, title }: IIntroSectionProps) => {
  return (
    <div>
      <h3 className="text-right font-bold text-lg lg:text-3xl text-[#4249d8]">
        {title}
      </h3>
      {desc && <p className="mt-3 lg:text-lg text-justify">{desc}</p>}
      {icon && (
        <div className="flex justify-start mt-3">
          <img src={icon?.url} alt={icon?.alt} />
          <p className="lg:text-lg text-[#4249d8]">{iconTitle}</p>
        </div>
      )}
      <hr className="text-[#4249d8] w-1/2 mt-5 h-1" />
    </div>
  );
};
export default IntroSection;
