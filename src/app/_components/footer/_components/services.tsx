import { IServicesProps } from "../interface";

export default function Services({ services }: IServicesProps) {
  return (
    <>
      <div>
        <h4 className="font-bold text-xl text-rigth">خدمات</h4>
        <ul className="list-disc pr-5 space-y-2 text-right">
          {services?.map((item, index) => (
            <li key={index} className="lg:text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
