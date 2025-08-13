export interface IImage {
  url: string;
  alt: string;
}

export interface banerProps {
  image: IImage;
  title?: string;
  subTitle?: string;
}
