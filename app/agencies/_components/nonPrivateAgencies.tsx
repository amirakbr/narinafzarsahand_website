import { IPrivateAgenciesProps } from "../interface";

const NonPrivateAgencies = ({ title, description }: IPrivateAgenciesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="title-font-size text-primary font-bold">{title}</h2>
      <p className="p-font-size text-justify">{description}</p>
    </div>
  );
};

export default NonPrivateAgencies;
