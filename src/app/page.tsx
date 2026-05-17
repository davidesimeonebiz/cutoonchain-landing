import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { LeadCta } from "@/components/sections/LeadCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Problem />
      <Services />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Faq />
      <LeadCta />
    </>
  );
}
