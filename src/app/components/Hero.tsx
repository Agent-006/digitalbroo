import Image from 'next/image';
import React from 'react';
import { Button } from '../../components/ui/button';
import { TiArrowRight } from 'react-icons/ti';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:px-16 md:px-10 px-4 h-screen">
      <div className="flex flex-col items-start lg:w-1/2 w-full lg:mt-0 mt-10 lg:pr-8">
        <p className="text-dark text-left font-bold text-3xl md:text-4xl lg:text-5xl xl:text-7xl xl:font-extrabold xl:mt-10">
          We Help to Build <br /> Your Product
        </p>
        <p className="text-left mt-4 text-lg xl:text-3xl text-dark-foreground">
          At Techacee, we help build your product with precision and creativity. Our team specializes in transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to life.
        </p>
        <Button variant="outline" className="border border-dark bg-light rounded-lg mt-5 flex items-center">
          Explore More <TiArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="flex justify-center items-center lg:w-1/2 w-full mt-8 lg:mt-0">
        <Image src="/component8.png" alt="hero img" width={600} height={600} className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
