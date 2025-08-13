import { IImage } from "../_components/baner/interface";

export interface IVideoWithOverlayProps {
  cover: IImage;
  videoUrl: string;
  playButtonPosition?: string;
  playButtonStyle?: string;
}
