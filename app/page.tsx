import Features from "./_components/features/features";
import Hero from "./_components/hero";
import Organization from "./_components/organization";
import SpecializedSolutions from "./_components/specializedSolutions";
import Success from "./_components/success/success";
import Testimonial from "./_components/testimonial";
import { getLandingPage } from "./api/services";
const Home = async () => {
  const data = await getLandingPage();
  console.log("dataaaaaaaa", data);

  return (
    <main className="min-h-screen bg-white">
      <Hero heroData={data?.landing_hero} />
      <Testimonial data={data?.testimonials} />
      <div className="flex flex-col gap-16">
        <SpecializedSolutions data={data?.specializedSolutions} />
        <Organization data={data?.organization} />
        <Features data={data?.features} solutionData={data?.solution} />
        <Success data={data?.success} />
      </div>
    </main>
  );
};
export default Home;
