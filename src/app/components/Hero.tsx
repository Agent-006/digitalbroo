import Image from 'next/image';
import React from 'react';
import { Button } from '../../components/ui/button';
import { TiArrowRight } from 'react-icons/ti';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 h-screen max-h-screen-xl w-full max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-start md:w-1/2 xl:w-1/2 w-full md:mt-0 mt-20 lg:pr-8">
        <p className="lg:text-5xl xl:text-7xl md:text-4xl text-2xl font-bold text-dark text-left md:ml-14 xl:ml-0">
          We Help to Build <br /> Your Product
        </p>
        <p className="text-left mt-4 text-sm xl:text-2xl text-dark xl:mt-10 md:ml-14 xl:ml-0">
          At Techacee, we help build your product with precision <br className='hidden md:block'/> and creativity. Our team specializes in transforming your <br className='hidden md:block' /> ideas into exceptional digital experiences. Partner with <br className='hidden md:block'/> us to bring your vision to life.
        </p>
        <Button variant="outline" className="border border-dark bg-light rounded-lg mt-5 flex items-center px-6 xl:py-6 py-3 xl:text-xl xl:mt-10 md:ml-14 xl:ml-0">
          Explore More <TiArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="flex items-center md:w-2/5 xl:w-1/2 w-full md:mt-8 mt-20 lg:mt-0">
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
