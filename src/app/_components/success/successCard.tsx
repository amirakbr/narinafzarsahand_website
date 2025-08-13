import { ISuccessCardProps } from "../interface";

const SuccessCard = ({ description, id, title }: ISuccessCardProps) => {
  return (
    <div
      className="rounded-lg scale-100 hover:scale-105 transition-all overflow-hidden group cursor-pointer h-full flex flex-col"
      key={`success card ${id}`}
    >
      <div className="flex items-center justify-center shadow-md shadow-slate-900 z-[2] p-2 group-hover:bg-primary bg-white border-b-2 border-b-primary">
        <p className="text-center text-black group-hover:text-white">{title}</p>
      </div>
      <div className="bg-white/70 group-hover:bg-white transition-all p-2 py-4 text-black block flex-grow-1">
        <p className="text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default SuccessCard;
