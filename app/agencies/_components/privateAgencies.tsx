import { IPrivateAgenciesProps } from "../interface";

const PrivateAgencies = ({ title, description }: IPrivateAgenciesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="title-font-size text-primary font-bold">{title}</h2>
      <p className="p-font-size text-justify p-font-size ">{description}</p>
    </div>
  );
};

export default PrivateAgencies;
