import Hero from "@/app/components/Hero";
import Offer from "./components/Offer";
import AboutSection from "./components/AboutSection";
import WorkExample from "./components/WorkExample";




export default function Home() {
  return (
    <div className="flex flex-col h-auto mb-20 gap-20 md:gap-5 xl:gap-0">
      <Hero/>
      <Offer/>
      <AboutSection/>
      <WorkExample/>
    </div>
  );
}
