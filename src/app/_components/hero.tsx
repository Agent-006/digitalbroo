import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex w-full md:h-full py-14 items-center">
      <div className="items-center justify-center flex flex-col md:flex-row w-full h-full px-4">
        <div className="md:w-1/2 w-full md:h-full h-1/2 py-5 md:py-10 flex flex-col space-y-5">
          <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold text-dark text-left">
            We Help to Build Your Product
          </h1>

          <p className="text-left mt-4 text-sm md:text-sm xl:text-lg text-dark ">
            At Techacee, we help build your product with precision and
            creativity. Our team specializes in transforming your ideas into
            exceptional digital experiences. Partner with us to bring your
            vision to life.
          </p>
          <Button
            variant={"outline"}
            className="border border-dark bg-light w-[11rem]  hover:bg-dark hover:text-light transition-all duration-300 ease-in-out items-center gap-2 rounded-xl font-semibold text-lg"
          >
            Explore More <MoveRight className="size-6" />
          </Button>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative pr-6">
          <div className="relative h-full w-full top-5 xl:top-10 hidden md:block">
            <Image
              src="/group73.png"
              alt="hero img"
              width={700}
              height={700}
              className="w-full h-auto lg:w-full md:w-4/5 xl:w-full mx-auto"
            />
            <Image
         src="/frame41.png"
         alt="frame1"
         width={150}
         height={150}
         className="absolute -left-3 2xl:left-2 top-1/4 transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/4 pointer-events-none select-none"
       />
       <Image
         src="/frame40.png"
         alt="frame2"
         width={150}
         height={150}
         className="absolute -right-12 bottom-1/2 transform -translate-y-3/4 -translate-x-1/5 pointer-events-none select-none"
       />
       <Image
         src="/frame42.png"
         alt="frame3"
         width={150}
         height={150}
         className="absolute top-0 left-2/3 transform -translate-y-1/2 -translate-x-2/3 pointer-events-none select-none"
       />
          </div>
          <div className="md:hidden">
            <Image
              src={"/group74.png"}
              alt={"groupt74"}
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
