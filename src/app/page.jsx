import BlueprintSection from "@/pages/BlueprintSection";
import CourseCurriculum from "@/pages/CourseCurriculum";

import FeatureIntro from "@/pages/FeatureIntro";
import Hero from "@/pages/Hero";
import PricingCard from "@/pages/PricingCard";
import StruggleSection from "@/pages/StruggleSection";
import Testimonials from "@/pages/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="overview">
        <Hero />
      </section>
      <StruggleSection />
      <FeatureIntro />
      <BlueprintSection />
      <section id="curriculum">
        <CourseCurriculum />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <PricingCard />
      </section>
    </div>
  );
}
