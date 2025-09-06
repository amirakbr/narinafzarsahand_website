import Image from "next/image";
import { ITerminalProps } from "../interface";

const Terminals = ({ terminalData }: ITerminalProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-center gap-4">
      {terminalData.map(({ imageUrl, label }, index) => (
        <div
          className="flex flex-col gap-4 group items-center"
          key={`terminal image ${index} - ${label}`}
        >
          <div className="rounded-lg overflow-hidden">
            <div className="scale-100 group-hover:scale-140 transition-all duration-[3s] ease-linear h-[138px] sm:h-84 md:h-64">
              <Image
                alt={label}
                src={imageUrl}
                width={1000}
                height={1000}
                className="h-full object-center grayscale-100 transition-all group-hover:grayscale-0"
              />
            </div>
          </div>
          <p className="text-slate-500 group-hover:text-primary transition-all ease-linear text-xs md:text-lg 2xl:text-2xl font-semibold">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Terminals;
