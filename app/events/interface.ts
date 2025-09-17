import { IImage } from "../_components/baner/interface";
import { IFeature } from "../api/interface";

export interface IVideoWithOverlayProps {
  cover: IImage;
  videoUrl: string;
  playButtonPosition?: string;
  playButtonStyle?: string;
}

export interface IBenefitProps {
  benefitsData: IFeature[];
  title: string;
}
