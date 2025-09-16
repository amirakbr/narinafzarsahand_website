import { IImage } from "../_components/baner/interface";
import { StrapiImage, StrapiImageFormat } from "../api/interface";

export interface IVideoWithOverlayProps {
  cover: IImage;
  videoUrl: string;
  playButtonPosition?: string;
  playButtonStyle?: string;
}

export interface IWhySectionProps {
  title: string;
  featureArray: {
    id: number;
    label: string;
    image: StrapiImage[];
  }[];
}

export interface ITimeLineProps {
  title: string;
  data: {
    icon: StrapiImageFormat;
    side: string;
    description: string;
    title: string;
    year: string;
  }[];
}
