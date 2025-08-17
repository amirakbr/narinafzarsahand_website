export interface IMunicipalityData {
  municipalityData: { imagesrc: string }[];
}

export interface IControlGateProps {
  controlGateData: {
    title: string;
    subTitle: string;
    description: string;
    features: string[];
  };
}

export interface IBankProps {
  bankData: {
    title: string;
    description: string;
    features: string[];
  };
}

export interface IInsuranceProps {
  insuranceData: {
    sectionTitle: string;
    title: string;
    description: string;
    featureTitle: string;
    feature: string[];
  };
}
