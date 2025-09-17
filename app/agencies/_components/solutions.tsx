import { ISolutionsProps } from "../interface";

const Solutions = ({ subtitle, solutions, title }: ISolutionsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="p-font-size font-semibold">{title}</p>
      <ul className="flex flex-col gap-2 list-disc list-inside subTitleFontSize">
        {solutions?.map((item) => (
          <li key={`narin afzar sahand solution ${item?.id}`}>{item?.text}</li>
        ))}
      </ul>
      <p className="font-semibold text-primary p-font-size mt-8">{subtitle}</p>
    </div>
  );
};

export default Solutions;
