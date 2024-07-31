
import { MaxWrapper } from "@/components/shared/MaxWrapper";
import Hero from "./_components/hero";
import About from "./_components/about";
import Faq from "./_components/faq";
import ChooseUs from "./_components/chooseUs";
import WorkExamples from "./_components/workExamples";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <MaxWrapper className="">
      <Hero />
      <About/>
      <ChooseUs/>
      <WorkExamples/>
      <Testimonials/>
      <Faq/>
    </MaxWrapper>
  );
}
