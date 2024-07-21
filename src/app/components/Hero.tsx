import Image from 'next/image';
import React from 'react';
import { Button } from '../../components/ui/button';
import { TiArrowRight } from 'react-icons/ti';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 h-screen max-h-screen-xl w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col items-start md:w-1/2 w-full lg:mt-0 md:mt-10 mt-20 lg:pr-8">
        <p className="lg:text-5xl md:text-4xl text-2xl font-bold text-dark text-left">
          We Help to Build <br /> Your Product
        </p>
        <p className="text-left mt-4 text-sm xl:text-lg text-dark">
          At Techacee, we help build your product with precision and creativity. Our team specializes in transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to life.
        </p>
        <Button variant="outline" className="border border-dark bg-light rounded-lg mt-5 flex items-center px-6 py-3">
          Explore More <TiArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="flex justify-center items-center lg:w-1/2 w-full md:mt-8 mt-20 lg:mt-0">
        <Image 
          src="/component8.png" 
          alt="hero img" 
          width={600} 
          height={600} 
          className="max-w-full h-auto w-full md:w-4/5 lg:w-full" 
        />
      </div>
    </div>
  );
};

export default Hero;
