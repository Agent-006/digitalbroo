import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import React from 'react';


const Offer = () => {
  return (
    <div className='flex flex-col items-center mt-16 gap-8 mx-auto min-h-screen w-full'>
      <div className="flex flex-col items-center  lg:w-[57rem] w-full">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#402321] text-center">
          WHAT WE OFFER
        </h1>
        <p className='mt-2 text-[#6C3227] text-center text-lg'>
          At Techacee, we help build your product with precision and creativity. Our team specializes in
          <br className='hidden md:block' />
          transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to
          <br className='hidden md:block' />
          <span>life</span>
        </p>
      </div>
      <div className="flex mt-1 w-full md:w-[50rem] lg:w-[70rem] flex-col md:flex-row md:gap-20 items-center md:justify-center">
        <CardContainer className="lg:w-[300px] lg:h-[300px] w-full h-full">
          <CardBody className="bg-medium flex items-center justify-center -mt-2">
            <CardItem className="text-center text-lg font-bold">
              home
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="lg:w-[300px] lg:h-[250px] w-full h-full md:mt-0 -mt-[9rem]">
          <CardBody className="bg-medium flex items-center justify-center">
            <CardItem className="text-center text-lg font-bold">
              home
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="lg:w-[300px] lg:h-[300px] w-full h-full  md:mt-0 -mt-[9rem]">
          <CardBody className="bg-medium flex items-center justify-center">
            <CardItem className="text-center text-lg font-bold">
              home
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Offer;
