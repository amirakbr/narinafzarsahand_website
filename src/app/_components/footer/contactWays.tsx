import { IContactWayProps } from "./interface";

export default function ContactWays({ contactList }: IContactWayProps) {
  return (
    <>
      {contactList?.map((item, index) => (
        <a
          key={index}
          href={item.link}
          rel="noopener noreferrer"
          className="flex justify-start items-center md:mx-4 my-1"
        >
          <img src={item?.url} alt={item?.alt} width={30} />
          <p className="ml-2">{item?.title}</p>
        </a>
      ))}
    </>
  );
}
