import { IBenefitProps } from "../interface";

const Benefits = ({ benefitsData, title }: IBenefitProps) => {
  return (
    <div className="my-12 flex flex-col gap-4">
      <h4 className="text-right font-bold title-font-size text-primary">
        {title}
      </h4>

      <ul className="list-disc pr-5 space-y-2 text-right">
        {benefitsData?.map((item) => (
          <li key={item?.id} className="p-font-size text-justify">
            {item?.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Benefits;
