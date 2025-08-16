import { IAddressProps } from "../interface";

export default function Address({ addressList }: IAddressProps) {
  return (
    <>
      {addressList?.map((item, index) => (
        <div key={index} className="my-1">
          <p className="text-justify"> {item?.address} </p>
          <p> کدپستی : {item?.postalCode} </p>
        </div>
      ))}
    </>
  );
}
