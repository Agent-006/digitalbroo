import { Card } from '@/components/ui/card';
import React from 'react';

const Offer = () => {
  return (
    <div className='flex flex-col items-center  gap-8 mx-auto min-h-screen w-full max-w-screen-2xl bg-blue-300'>
      <div className="flex flex-col items-center lg:w-[57rem] w-full">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#402321] text-center">
          WHAT WE OFFER
        </h1>
        <p className='mt-2 text-[#6C3227] text-center mb:text-lg text-sm'>
          At Techacee, we help build your product with precision and creativity. Our team specializes in
          <br className='hidden md:block' />
          transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to
          <br className='hidden md:block' />
          <span>life</span>
        </p>
      </div>
      <div className="flex mt-1 w-full md:w-[50rem] lg:w-full flex-col md:flex-row gap-9 items-center md:justify-center mx-5 lg:mx-20 xl:mx-40">
        <Card className='lg:w-[15rem] xl:w-[22rem] md:w-[13rem] md:h-[13rem] lg:h-[16rem] xl:h-[20rem] h-[15rem] w-[25rem]'>
          hello
        </Card>
        <Card className='lg:w-[15rem] xl:w-[22rem] md:w-[13rem] md:h-[13rem] lg:h-[16rem] xl:h-[20rem] h-[15rem] w-[25rem]'>
          hello
        </Card>
        <Card className='lg:w-[15rem] xl:w-[22rem] md:w-[13rem] md:h-[13rem] lg:h-[16rem] xl:h-[20rem] h-[15rem] w-[25rem]'>
          hello
        </Card>
        <Card className='lg:w-[15rem] xl:w-[22rem] md:w-[13rem] md:h-[13rem] lg:h-[16rem] xl:h-[20rem] h-[15rem] w-[25rem]'>
          hello
        </Card>
      </div>
    </div>
  );
};

export default Offer;