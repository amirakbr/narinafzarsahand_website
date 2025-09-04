import { ISuccessCardProps } from "../interface";

const SuccessCard = ({ description, id, title }: ISuccessCardProps) => {
  return (
    <div
      className="rounded-lg scale-100 hover:scale-115 active:scale-115 transition-all overflow-hidden group cursor-pointer xl:h-[348px] flex flex-col max-w-[323px] justify-self-center"
      key={`success card ${id}`}
    >
      <div className="flex items-center justify-center shadow-md shadow-slate-900 z-[2] py-4 group-hover:bg-primary group-active:bg-primary bg-white border-b-2 border-b-primary">
        <p className="text-center text-black text-xs md:text-lg xl:text-xl font-semibold group-hover:text-white group-active:text-white">
          {title}
        </p>
      </div>
      <div className="bg-white/70 group-hover:bg-white group-active:bg-white transition-all p-2 py-4 text-black block flex-grow-1 px-4">
        <p className="text-sm font-medium text-justify text-xs md:text-base ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;
