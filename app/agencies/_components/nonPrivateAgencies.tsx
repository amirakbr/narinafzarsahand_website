import { IPrivateAgenciesProps } from "../interface";

const NonPrivateAgencies = ({ privateAgenciesData }: IPrivateAgenciesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="title-font-size text-primary font-bold">
        {privateAgenciesData.title}
      </h2>
      <p className="p-font-size text-justify">
        {privateAgenciesData.description}
      </p>
    </div>
  );
};

export default NonPrivateAgencies;
