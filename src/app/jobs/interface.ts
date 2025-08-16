import { IImage } from "../_components/baner/interface";

export interface ICardProps {
  image: IImage;
  title: string;
  desc: string;
  location: string;
  status: string;
}

export interface IexperienceCard {
  avatar: IImage;
  name: string;
  job: string;
  desc: string;
}

export interface IExperienceCardProps {
  experienceCard: IexperienceCard[];
}

export interface IFeatureJob {
  title: string;
  image: string;
  hoverImage: string;
}

export interface IFeatureProps {
  item: IFeatureJob;
}
