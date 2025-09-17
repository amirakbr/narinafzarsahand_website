import Banner from "../_components/banner/banner";
import { getAgenciesPage } from "../api/services";
import Javanseir from "./_components/javanseir";
import KeyFeatures from "./_components/keyFeature";
import NonPrivateAgencies from "./_components/nonPrivateAgencies";
import PrivateAgencies from "./_components/privateAgencies";
import Solutions from "./_components/solutions";
import Terminals from "./_components/terminals";

const Agencies = async () => {
  const data = await getAgenciesPage();

  return (
    <>
      <div className="flex flex-col gap-16">
        <Banner
          backGroundimageAlt="agencies banner"
          backGroundimageSrc={`${process.env.NEXT_PUBLIC_API_URL}${
            data?.banner?.cover?.formats?.large?.url || data?.banner?.cover?.url
          }`}
          description={data?.banner?.description}
          highlightWord={[data?.banner?.highlightedValue.text]}
          title={data?.banner?.title}
        />
        <div className="flex flex-col gap-16 max-w-10xl container mx-auto px-6 md:px-0">
          <PrivateAgencies
            title={data?.Agencies_private?.title}
            description={data?.Agencies_private?.description}
          />
          <Solutions
            title={data?.Agencies_private?.solutionsTitle}
            subtitle={data?.Agencies_private?.subtitleSolution}
            solutions={data?.Agencies_private?.solutions}
          />
          <Terminals terminalData={data?.Agencies_private?.terminals} />
          <NonPrivateAgencies
            title={data?.Agencie_nonPrivate?.title}
            description={data?.Agencie_nonPrivate?.description}
          />
        </div>
        <Javanseir javanseirData={data?.Agencie_javanSair} />
        <div className="flex flex-col gap-16 max-w-10xl container mx-auto px-6 md:px-0">
          <KeyFeatures
            title={data?.keyFeatureTitle}
            subTitle={data?.keyFeatureSubtitle}
            keyFeatures={data?.keyFeatures}
          />
        </div>
      </div>
    </>
  );
};

export default Agencies;
