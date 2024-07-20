import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-start justify-center lg:px-28 md:px-14 px-4 mt-16 gap-0  mx-5">
      <div className="flex items-start  p-1 lg:w-[30rem] w-full h-72 lg:h-auto mt-5">
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#402321] text-left">We Help to Build <br/> 
        Your Product</p>
      </div>
      <div className="flex justify-center items-center p-6 lg:w-2/3 w-full h-72 lg:h-auto">
        <Image src="/component8.png" alt="hero img" width={500} height={500} className="max-w-full h-auto"/>
      </div>
    </div>
  );
};

export default Hero;
