import { ISolutionsProps } from "../interface";

const Solutions = ({ ourSolution }: ISolutionsProps) => {
  const { solutions, subtitle, title } = ourSolution || {};
  return (
    <div className="flex flex-col gap-4">
      <p className="p-font-size font-semibold">{title}</p>
      <ul className="flex flex-col gap-2 list-disc list-inside subTitleFontSize">
        {solutions.map((solution, index) => (
          <li key={`narin afzar sahand solution ${index}`}>{solution}</li>
        ))}
      </ul>
      <p className="font-semibold text-primary p-font-size">{subtitle}</p>
    </div>
  );
};

export default Solutions;
