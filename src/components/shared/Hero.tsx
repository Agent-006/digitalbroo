import Image from 'next/image';
import React from 'react';
import Text from './Text';
import { Button } from '../ui/button';
import { TiArrowRight } from 'react-icons/ti';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:px-28 md:px-14 px-4 mt-16 gap-8 mx-5">
      <div className="flex flex-col items-start p-4 lg:w-1/2 w-full">
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold text-dark text-left">
          We Help to Build <br /> Your Product
        </p>
        <p className="text-left mt-4 text-sm text-dark">At Techacee, we help build your product with precision and creativity. Our team specializes in transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to life.</p>
        <Button variant={'outline'} className='border border-dark rounded-lg mt-5'>Explore More {" "} <TiArrowRight /></Button>
      </div>
      <div className="flex justify-center items-center lg:w-1/2 w-full">
        <Image src="/component8.png" alt="hero img" width={500} height={500} className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
