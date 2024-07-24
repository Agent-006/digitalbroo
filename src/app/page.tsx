import Hero from "@/app/components/Hero";
import Offer from "./components/Offer";
import AboutSection from "./components/AboutSection";
import WorkExample from "./components/WorkExample";
import Client from "./components/client";






export default function Home() {
  return (
    
    <div className="w-full px-2 md:px-10 xl:px-[10rem]">
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


// {navItems.map((item) => {
//   const isActive = path === item.path;
//   return (
//     <li key={item.path}>
//       <Link
//         href={item.path}
//         className={`${
//           isActive ? "border-b-2 border-[#6A3834]" : ""
//         } lg:text-[16px] md:text-[12px] xl:text-xl text-[#6A3834]`}
//       >
//         {item.name}
//       </Link>
//     </li>
//   );
// })}
