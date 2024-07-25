
import { MaxWrapper } from "@/components/shared/MaxWrapper";
import Hero from "./_components/hero";
import About from "./_components/about";

export default function Home() {
  return (
    <MaxWrapper className="">
      <Hero />
      <About/>
    </MaxWrapper>
  );
}
