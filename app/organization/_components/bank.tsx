import { IBankProps } from "../interface";

const Bank = ({ bankData }: IBankProps) => {
  const { description, features, title } = bankData || {};
  return (
    <section className="py-4 border-y-2 border-y-primary px-4 container mx-auto flex flex-col gap-8">
      <h4 className="text-2xl text-primary font-bold">{title}</h4>
      <p className="text-lg text-justify">{description}</p>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">
          مزایای همکاری بانک‌ها با ایران‌پی‌مکس:
        </p>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          {features?.map((feature, index) => (
            <li key={`bank collarbrating ${index}`}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Bank;
