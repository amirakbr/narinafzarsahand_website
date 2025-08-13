import { ISuccessCardProps } from "../interface";

const SuccessCard = ({ description, id, title }: ISuccessCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden" key={`success card ${id}`}>
      <div className="flex items-center justify-center shadow-sm shadow-slate-500 z-[2] p-2 bg-primary">
        <p className="text-center">{title}</p>
      </div>
      <div className="bg-white p-2">
        <p className="text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default SuccessCard;
