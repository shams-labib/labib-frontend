import BlueprintSection from "@/pages/BlueprintSection";
import CourseCurriculum from "@/pages/CourseCurriculum";
import FeatureIntro from "@/pages/FeatureIntro";
import Hero from "@/pages/Hero";
import StruggleSection from "@/pages/StruggleSection";
import Testimonials from "@/pages/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <StruggleSection />
      <FeatureIntro />
      <BlueprintSection />
      <CourseCurriculum />
      <Testimonials />
    </div>
  );
}
