import Features from "./_components/features";
import Header from "./_components/Header";
import Hero from "./_components/hero";
import Organization from "./_components/organization";
import SpecializedSolutions from "./_components/specializedSolutions";
import Testimonial from "./_components/testimonial";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Testimonial />
      <SpecializedSolutions />
      <Organization />
      <Features />
    </main>
  );
}
