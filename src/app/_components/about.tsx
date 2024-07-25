import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="h-[80vh] w-full py-10 flex items-center">
      <div className="w-full h-full flex items-center justify-between px-10">
        <div className="w-[50%] h-full relative">
            <div className="w-60 h-40 bg-light shadow-xl absolute top-0 left-0 rounded-lg">
card1
            </div>
            <div className="w-60 h-40 bg-light shadow-xl absolute bottom-0 left-0 rounded-lg">
card2
            </div>
            <div className="w-[14rem] h-[15rem] bg-light shadow-xl absolute top-24 right-14 rounded-lg">
card3
            </div>
        </div>
        <div className="w-[50%] flex flex-col space-y-6 items-start justify-start">
          <h1 className="text-5xl font-bold text-dark">About Us</h1>
          <p className="text-lg font-medium text-dark-foreground leading-8 2xl:leading-10 w-[90%]">
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
            Know More<MoveRight className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
