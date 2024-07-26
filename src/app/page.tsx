
import { MaxWrapper } from "@/components/shared/MaxWrapper";
import Hero from "./_components/hero";
import About from "./_components/about";
import Faq from "./_components/faq";

export default function Home() {
  return (
    <MaxWrapper className="">
      <Hero />
      <About/>
      <Faq/>
    </MaxWrapper>
  );
}
