import Hero from "@/components/home/Hero";
import ServicesList from "@/components/home/ServicesList";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import CTABand from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesList />
      <About />
      <Testimonials />
      <CTABand />
    </>
  );
}
