import Hero from "../components/home/Hero";
import TrustSection from "../components/home/TrustSection";
import HomeSolutions from "../components/home/HomeSolutions";
import Industries from "../components/home/Industries";
import WhyChoose from "../components/home/WhyChoose";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Process from "../components/home/Process";
import CTA from "../components/common/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <HomeSolutions />
      <Industries />
      <WhyChoose />
      <FeaturedProducts />
      <Process />
      <CTA />
    </>
  );
}