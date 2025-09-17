import { Dot } from "lucide-react";
import { IKeyFeaturesProps } from "../interface";

const KeyFeatures = ({ title, keyFeatures, subTitle }: IKeyFeaturesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="title-font-size text-primary font-bold">{title}</h3>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        {keyFeatures?.map((item) => (
          <li
            className="flex items-center gap-2"
            key={`narin afzar sahand solution ${item?.id}`}
          >
            <Dot size={40} />
            {/* <span className="p-font-size font-medium">{item?.text}</span> */}
            <span className="p-font-size">{item?.text}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg text-justify p-font-size">{subTitle}</p>
    </div>
  );
};

export default KeyFeatures;
