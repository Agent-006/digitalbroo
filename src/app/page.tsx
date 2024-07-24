import Hero from "@/app/components/Hero";
import "./globals.css";
import Offer from "./components/Offer";
import { MaxWrapper } from "@/components/shared/MaxWrapper";

export default function Home() {
  return (
    <MaxWrapper className="">
      <Hero />
    </MaxWrapper>
  );
}
