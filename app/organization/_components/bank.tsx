import { IBankProps } from "../interface";

const Bank = ({ bankData }: IBankProps) => {
  const { description, features, title } = bankData || {};
  return (
    <section className="py-4 border-y-2 border-y-primary px-4 container mx-auto flex flex-col gap-8">
      <h4 className="title-font-size text-primary font-bold">{title}</h4>
      <p className="p-font-size text-justify">{description}</p>
      <div className="flex flex-col gap-4">
        <p className="text-lg xl:text-3xl font-semibold">
          مزایای همکاری بانک‌ها با ایران‌پی‌مکس:
        </p>
        <ul className="flex flex-col gap-2 list-disc list-inside p-font-size">
          {features?.map((feature, index) => (
            <li key={`bank collarbrating ${index}`}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Bank;
