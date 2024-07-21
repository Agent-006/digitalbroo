import { Card } from '@/components/ui/card';
import React from 'react';

const Offer = () => {
  return (
    <div className='flex flex-col items-center mt-16 gap-8 mx-auto min-h-screen w-full'>
      <div className="flex flex-col items-center lg:w-[57rem] w-full">
        <h1 className="text-center text-[#402321] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl xl:font-extrabold">
          WHAT WE OFFER
        </h1>
        <p className='mt-2 text-center text-[#6C3227] text-lg xl:text-3xl'>
          At Techacee, we help build your product with precision and creativity. Our team specializes in
          <br className='hidden md:block' />
          transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to
          <br className='hidden md:block' />
          <span>life</span>
        </p>
      </div>
      <div className="flex mt-1 w-full md:w-[50rem] lg:w-full flex-col md:flex-row gap-9 items-center md:justify-center mx-5 lg:mx-20 xl:mx-40">
        <Card className='w-[25rem] h-[15rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[16rem] xl:w-[28rem] xl:h-[25rem]'>
          hello
        </Card>
        <Card className='w-[25rem] h-[15rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[16rem] xl:w-[28rem] xl:h-[25rem]'>
          hello
        </Card>
        <Card className='w-[25rem] h-[15rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[16rem] xl:w-[28rem] xl:h-[25rem]'>
          hello
        </Card>
        <Card className='w-[25rem] h-[15rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[16rem] xl:w-[28rem] xl:h-[25rem]'>
          hello
        </Card>
      </div>
    </div>
  );
};

export default Offer;
