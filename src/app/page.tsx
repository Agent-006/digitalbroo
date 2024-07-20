import Hero from "@/components/shared/Hero";
import Offer from "@/components/shared/Offer";



export default function Home() {
  return (
    <div className="flex flex-col h-auto mb-20">
      <Hero/>
      <Offer/>
    </div>
  );
}
