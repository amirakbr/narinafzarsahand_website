import { IInfoBoxProps } from "../interface";

const InfoBox = ({ label, value }: IInfoBoxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-slate-500">{label}</p>
      <p className="text-slate-500 border border-slate-500 rounded text-lg font-bold p-2">
        {value}
      </p>
    </div>
  );
};

export default InfoBox;
