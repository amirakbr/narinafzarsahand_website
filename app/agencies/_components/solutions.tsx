import { ISolutionsProps } from "../interface";

const Solutions = ({ ourSolution }: ISolutionsProps) => {
  const { solutions, subtitle, title } = ourSolution || {};
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-semibold">{title}</p>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        {solutions.map((solution, index) => (
          <li key={`narin afzar sahand solution ${index}`}>{solution}</li>
        ))}
      </ul>
      <p className="font-semibold text-primary">{subtitle}</p>
    </div>
  );
};

export default Solutions;
