import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-full w-full py-8 flex items-center">
      <div className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-10">
        <div className="w-full md:w-[50%] h-full py-5 flex items-center justify-center gap-3.5 md:gap-10">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
            <div className="w-40 md:w-60 h-[7rem] md:h-[9rem] bg-light shadow-xl rounded-lg relative flex flex-col items-start justify-start px-4 py-4">
              <h1 className="font-semibold text-lg md:text-xl text-dark-foreground">
                Product Users
              </h1>
              <h1 className="text-[0.9rem] md:text-[1.1rem] text-emerald-600 font-semibold">
                1.0 K users
              </h1>
              <Image
                alt="wave"
                src="./wave.svg"
                width={80}
                height={50}
                className="absolute bottom-3 md:bottom-5 right-2 md:right-4 select-none pointer-events-none w-[35%]"
              />
            </div>
            <div className="w-[10rem] md:w-60 h-[10rem] md:h-[13rem] bg-light shadow-xl rounded-lg flex flex-col items-center justify-center px-1 md:px-4 space-y-1">
              <h1 className="font-bold text-2xl md:text-4xl text-dark-foreground">
                1.2
                <span className="text-sm md:text-lg">K</span>
              </h1>
              <p className="font-semibold  text-dark-foreground text-[0.9rem] md:text-xl md:tracking-wide">
                Instagram Followers
              </p>
              <p className="font-medium text-dark-foreground text-[0.8rem] md:text-sm text-center w-full md:w-[90%]">
                At Techacee, we help build your product with precision and
                creativity.
              </p>
            </div>
          </div>
          <div className="w-[16rem] md:w-[15rem] h-[15rem] bg-light shadow-xl rounded-lg flex flex-col space-y-1 items-center justify-center px-2 md:px-4">
            <h1 className="font-bold text-3xl md:text-5xl text-dark-foreground">
              95
              <span className="text-lg md:text-2xl pl-1">%</span>
            </h1>
            <p className="font-semibold text-dark-foreground text-[0.9rem] md:text-xl md:tracking-wide">
              Positive Feedback
            </p>
            <p className="font-medium text-dark-foreground text-[0.8rem] md:text-sm text-center w-full md:w-[90%]">
              At Techacee, we help build your product with precision and
              creativity. At Techacee, we help build your product with precision
              and creativity.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col space-y-5 md:space-y-6 items-start justify-start">
          <h1 className="text-4xl md:text-5xl font-bold text-dark">About Us</h1>
          <p className="text-[1rem] md:text-lg font-medium text-dark-foreground leading-6 md:leading-8 2xl:leading-10 w-full md:w-[90%]">
            At Techacee, we help build your product with precision and
            creativity. Our team specializes in transforming your ideas into
            exceptional digital experiences. Partner with us to bring your
            vision to life. <br />
            At Techacee, we help build your product with precision and
            creativity.
          </p>
          <Button
            variant={"outline"}
            className="flex items-center gap-2 border border-dark rounded-lg text-center bg-light hover:bg-dark hover:text-light transition-all duration-300 ease-in-out text-dark-foreground xl:text-xl"
          >
            Know More
            <MoveRight className="size-5 md:size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
