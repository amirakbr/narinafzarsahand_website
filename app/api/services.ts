import { IAboutUsPage, IAgenciesPage, ILandingPage } from "./interface";

export const getLandingPage = async (): Promise<ILandingPage> => {
  return fetch(
    `https://betacms.narinsoft.ir/api/landing-page?populate[testimonials][populate]=*&populate[specializedSolutions][populate]=*&populate[organization][populate]=*&populate[features][populate][features][populate]=*&populate[solution][populate][solutions][populate]=*&populate[success][populate]=*&populate[landing_hero][populate]=*`,
    {
      cache: "no-store",
    }
  )
    .then((response) => response?.json())
    .then((data) => data?.data)
    .catch((error) => error);
};

export const getAboutUsPage = async (): Promise<IAboutUsPage> => {
  return fetch(
    `https://betacms.narinsoft.ir/api/about-us-page?populate[banner][populate]=*&populate[values][populate]=*&populate[why_us][populate]=*&populate[video][populate]=*&populate[time_lines][populate]=*&populate[missions][populate]=*`,
    {
      cache: "no-store",
    }
  )
    .then((response) => response?.json())
    .then((data) => data?.data)
    .catch((error) => error);
};

export const getAgenciesPage = async (): Promise<IAgenciesPage> => {
  return fetch(
    `https://betacms.narinsoft.ir/api/agencies-page?populate[banner][populate]=*&populate[Agencie_nonPrivate][populate]=*&populate[Agencie_javanSair][populate]=*&populate[keyFeatures][populate]=*&populate[Agencies_private][populate][terminals][populate]=*&populate[Agencies_private][populate][solutions][populate]=*`,
    {
      cache: "no-store",
    }
  )
    .then((response) => response?.json())
    .then((data) => data?.data)
    .catch((error) => error);
};
