import { ReactNode } from "react";

export interface IBannerProps {
  title?: string;
  description?: string;
  highlightWord?: string[];
  backGroundimageSrc: string;
  backGroundimageAlt: string;
  classNames?: {
    image?: string;
  };
  children?: ReactNode;
}
