import Hero from "@/app/components/Hero";
import "./globals.css";

export default function Home() {
  return (
    <div className="w-full px-2 md:px-4 xl:px-32">
      <div className="flex flex-col gap-20 md:gap-5 max-w-wrapper">
        <Hero/>
        {/* <Offer/>
        <AboutSection/>
        <WorkExample/>
        <Client/> */}
      </div>
    </div>
  );
}
