import { ILandingPage } from "./interface";

export const getLandingPage = async (): Promise<ILandingPage> => {
  return fetch(
    `https://betacms.narinsoft.ir/api/landing-page?populate[testimonials][populate]=*&populate[specializedSolutions][populate]=*&populate[organization][populate]=*&populate[features][populate]=*&populate[solution][populate]=*&populate[success][populate]=*`,
    {
      cache: "no-store",
    }
  )
    .then((response) => response?.json())
    .then((data) => data?.data)
    .catch((error) => error);
};
