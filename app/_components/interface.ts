import {
  ILanding_hero,
  ILandingTestimonials,
  ILandingSuccess,
  ILandingSolution,
  ILandingFeatures,
  ILandingOrganization,
  ILandingSpecializedSolutions,
} from "../api/interface";

export interface ISuccessCardProps {
  title: string;
  description: string;
  id: number;
}
export interface IHeroLandingProps {
  heroData: ILanding_hero[];
}
export interface ITestimonialProps {
  data: ILandingTestimonials[];
}
export interface ISpecializedSolutionsProps {
  data: ILandingSpecializedSolutions[];
}
export interface IOrganizationProps {
  data: ILandingOrganization[];
}
export interface IFeaturesProps {
  data: ILandingFeatures[];
  solutionData: ILandingSolution[];
}
export interface ISuccessProps {
  data: ILandingSuccess[];
}
