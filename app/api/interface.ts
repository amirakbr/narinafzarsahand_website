import { StepId } from "framer-motion";

export interface IStrapiConf {
  id?: number;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface IBanner extends IStrapiConf {
  description: string;
  title: string;
  highlightedValue: {
    text: string;
  };
  cover: StrapiImage;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
  };
  hash?: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: any;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface IFeature {
  id: number;
  text: string;
}

export interface ILanding_hero extends IStrapiConf {
  title: string;
  description: string;
  subtitle: string;
  sliderCover: StrapiImage;
  callToAction: ICallToAction;
}
export interface ILandingTestimonials extends IStrapiConf {
  title: string;
  subtitle2: string;
  subtitle1: string;
  icon: StrapiImageFormat;
}
export interface ILandingSpecializedSolutions extends IStrapiConf {
  title: string;
  subtitle: string;
  description: string;
  featureSubtitle: string;
  features: IFeature[];
}
export interface ILandingOrganization extends IStrapiConf {
  title: string;
  subtitle: string;
  description: string;
  organization: string;
  nonPrivate: string;
  organizationsImage: StrapiImage[];
}
export interface ILandingFeatures extends IStrapiConf {
  title: string;
  description: string;
  features: {
    id: number;
    title: string;
    description: string;
    isLargeOne: boolean;
    image: StrapiImage;
  }[];
}
export interface ILandingSolution extends IStrapiConf {
  title: string;
  description: string;
  solutions: {
    id: number;
    label: string;
    image?: StrapiImage[];
  }[];
}
export interface ILandingSuccess extends IStrapiConf {
  title: string;
  description: string;
  cover: StrapiImage;
  successCards: {
    id: number;
    value: string;
    label: string;
  }[];
}

export interface ICallToAction {
  id: number;
  titleButton: String;
  url: string;
}
export interface ILandingPage extends IStrapiConf {
  landing_hero: ILanding_hero[];
  testimonials: ILandingTestimonials[];
  specializedSolutions: ILandingSpecializedSolutions[];
  organization: ILandingOrganization[];
  features: ILandingFeatures[];
  solution: ILandingSolution[];
  success: ILandingSuccess[];
}

export interface IAboutUsPage extends IStrapiConf {
  titlePage: string;
  description: string;
  missionTitle: string;
  timeLineTitle: string;
  why_us_title: string;
  valuesTitle: string;
  banner: IBanner;
  values: IFeature[];
  why_us: {
    id: number;
    label: string;
    image: StrapiImage[];
  }[];
  video: {
    id: number;
    video: null;
    videoCover: StrapiImage;
  };
  time_lines: {
    icon: StrapiImageFormat;
    side: string;
    description: string;
    title: string;
    year: string;
  }[];
  missions: {
    id: number;
    label: string;
    value: string;
  }[];
}

export interface IAgenciesPage extends IStrapiConf {
  banner: IBanner;
  keyFeatureTitle: string;
  keyFeatures: IFeature[];
  keyFeatureSubtitle: string;
  Agencies_private: {
    title: string;
    description: string;
    solutionsTitle: string;
    solutions: IFeature[];
    subtitleSolution: string;
    terminals: {
      label: string;
      image: StrapiImage[];
      id: number;
    }[];
  };
  Agencie_nonPrivate: {
    description: string;
    title: string;
  };
  Agencie_javanSair: {
    coverBg: StrapiImage;
    title: string;
    featuresTitle: string;
    description: string;
    features: IFeature[];
  };
}
