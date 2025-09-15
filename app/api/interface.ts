export interface IStrapiConf {
  id?: number;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface ImageFormat {
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

export interface MediaFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormat;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  // eslint-disable-next-line
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IFeature {
  id: number;
  text: string;
}

export interface ILanding_hero extends IStrapiConf {
  title: string;
  description: string;
  subtitle: string;
}
export interface ILandingTestimonials extends IStrapiConf {
  title: string;
  subtitle2: string;
  subtitle1: string;
  icon: MediaFile;
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
  organizationsImage: MediaFile[];
}
export interface ILandingFeatures extends IStrapiConf {
  title: string;
  description: string;
  features: {
    id: number;
    title: string;
    description: string;
    isLargeOne: boolean;
  }[];
}
export interface ILandingSolution extends IStrapiConf {
  title: string;
  description: string;
}
export interface ILandingSuccess extends IStrapiConf {
  title: string;
  description: string;
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
