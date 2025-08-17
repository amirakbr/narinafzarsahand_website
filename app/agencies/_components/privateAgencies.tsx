import { IPrivateAgenciesProps } from "../interface";

const PrivateAgencies = ({ privateAgenciesData }: IPrivateAgenciesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-primary font-bold">
        {privateAgenciesData.title}
      </h2>
      <p className="text-lg text-justify">{privateAgenciesData.description}</p>
    </div>
  );
};

export default PrivateAgencies;
