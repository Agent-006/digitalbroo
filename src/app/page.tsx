import Hero from "@/app/components/Hero";
import Offer from "./components/Offer";




export default function Home() {
  return (
    <div className="flex flex-col h-auto mb-20">
      <Hero/>
      <Offer/>
    </div>
  );
}
