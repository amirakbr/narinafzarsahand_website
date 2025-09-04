import { IPrivateAgenciesProps } from "../interface";

const PrivateAgencies = ({ privateAgenciesData }: IPrivateAgenciesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="title-font-size text-primary font-bold">
        {privateAgenciesData.title}
      </h2>
      <p className="p-font-size text-justify p-font-size ">
        {privateAgenciesData.description}
      </p>
    </div>
  );
};

export default PrivateAgencies;
