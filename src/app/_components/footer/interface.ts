// interface.ts
export interface IAddressItem {
  address: string;
  postalCode: string;
}

export interface IAddressProps {
  addressList: IAddressItem[];
}
export interface IContactItem {
  url: string;
  alt: string;
  title: string;
  link: string;
}

export interface IContactWayProps {
  contactList: IContactItem[];
}

export interface IServicesProps {
  services: string[];
}
