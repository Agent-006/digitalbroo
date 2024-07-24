import Image from 'next/image';
import React from 'react';
import { Button } from '../../components/ui/button';
import { TiArrowRight } from 'react-icons/ti';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row px-2 md:gap-20 gap-20 items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4 w-55%">
        <p className="lg:text-6xl xl:text-6xl md:text-5xl text-3xl font-bold text-dark text-left ">
          We Help to Build <br /> Your Product
        </p>
        <p className="text-left mt-4 text-xs xl:text-2xl text-dark ">
          At Techacee, we help build your product with precision <br/> and creativity. Our team specializes in transforming your <br/> ideas into exceptional digital experiences. Partner with <br/> us to bring your vision to life.
        </p>
        <Button variant="outline" className="border border-dark bg-light rounded-lg mt-5 flex items-center xl:py-6 xl:text-xl w-36">
          Explore More <TiArrowRight className="ml-2" />
        </Button>
      </div>



      <div className="w-45%">
        <div className="w-full relative h-full hidden md:block">
          <Image
            src="/component8.png"
            alt="hero img"
            width={700}
            height={700}
            className="relative max-w-full h-auto w-full md:w-4/5 lg:w-full mx-auto"
          />
          <Image
            src="/frame41.png"
            alt="frame1"
            width={100}
            height={100}
            className="absolute left-2 top-1/4 transform -translate-y-1/2 -translate-x-1/2"
          />
          <Image
            src="/frame40.png"
            alt="frame2"
            width={100}
            height={100}
            className="absolute -right-7 bottom-1/2 transform -translate-y-3/4 -translate-x-1/5"
          />
          <Image
            src="/frame42.png"
            alt="frame3"
            width={100}
            height={100}
            className="absolute top-0 left-2/3 transform -translate-y-1/2 -translate-x-2/3"
          />
        </div>
        <div className="w-full h-full md:hidden">
          <Image src={'/group74.png'} alt={'groupt74'} width={500} height={500}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;


