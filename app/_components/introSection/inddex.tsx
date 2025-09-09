import { IIntroSectionProps } from "./interface";

const IntroSection = ({ desc, icon, iconTitle, title }: IIntroSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-right font-bold text-lg lg:text-2xl text-primary">
        {title}
      </h3>
      {desc && <p className="p-font-size text-justify">{desc}</p>}
      {icon && (
        <div className="flex justify-start mt-3">
          <img src={icon?.url} alt={icon?.alt} />
          <p className="p-font-size text-primary">{iconTitle}</p>
        </div>
      )}
      <hr className="text-primary w-1/2 mt-5 h-1" />
    </div>
  );
};
export default IntroSection;
