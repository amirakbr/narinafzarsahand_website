export interface IPrivateAgenciesProps {
  privateAgenciesData: {
    title: string;
    description: string;
  };
}

export interface ISolutionsProps {
  ourSolution: {
    title: string;
    solutions: string[];
    subtitle: string;
  };
}

export interface ITerminalProps {
  terminalData: {
    imageUrl: string;
    label: string;
  }[];
}

export interface IJavanseirProsp {
  javanseirData: {
    title: string;
    description: string;
    featuresTitle: string;
    features: string[];
  };
}

export interface IKeyFeaturesProps {
  keyFeatures: {
    title: string;
    features: {
      label: string;
      description: string;
    }[];
    description: string;
  };
}
