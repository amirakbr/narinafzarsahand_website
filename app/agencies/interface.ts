import { IFeature, StrapiImage } from "../api/interface";

export interface IPrivateAgenciesProps {
  title: string;
  description: string;
}

export interface ISolutionsProps {
  title: string;
  solutions: IFeature[];
  subtitle: string;
}

export interface ITerminalProps {
  terminalData: {
    label: string;
    image: StrapiImage[];
    id: number;
  }[];
}

export interface IJavanseirProsp {
  javanseirData: {
    coverBg: StrapiImage;
    title: string;
    featuresTitle: string;
    description: string;
    features: IFeature[];
  };
}

export interface IKeyFeaturesProps {
  subTitle: string;
  keyFeatures: IFeature[];
  title: string;
}
