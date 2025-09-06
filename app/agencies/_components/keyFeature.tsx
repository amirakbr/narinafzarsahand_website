import { Dot } from "lucide-react";
import { IKeyFeaturesProps } from "../interface";

const KeyFeatures = ({ keyFeatures }: IKeyFeaturesProps) => {
  const { description, features, title } = keyFeatures || {};
  return (
    <div className="flex flex-col gap-8">
      <h3 className="title-font-size text-primary font-bold">{title}</h3>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        {features.map(({ description, label }, index) => (
          <li
            className="flex items-center gap-2"
            key={`narin afzar sahand solution ${index}`}
          >
            <Dot size={40} />
            <span className="p-font-size font-medium">{label} :</span>
            <span className="p-font-size">{description}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg text-justify p-font-size">{description}</p>
    </div>
  );
};

export default KeyFeatures;
