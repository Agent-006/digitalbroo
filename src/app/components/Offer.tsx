import { Card } from '@/components/ui/card'
import React from 'react'


const Offer = () => {
  return (
    <div className='flex flex-col items-center lg:justify-between justify-center lg:px-28 md:px-14 px-4 mt-16 gap-8 mx-5 lg:mx-20 bg-blue-200'>
      <div className="flex flex-col items-center p-10 lg:w-full w-90%">
      <h1 className="lg:text-3xl md:text-2xl text-2xl font-bold text-[#402321] text-center">
          WHAT WE OFFER
        </h1>
        <p className='mt-2 text-[#6C3227]'>At Techacee, we help build your product with precision and creativity. Our team specializes  in <br className='hidden md:block'/> transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to <br className='hidden md:block'/> <span className='md:ml-[20rem]'>life</span></p>
      </div>
      <div className="flex md:mt-10 mt-5 w-full flex-col">
      <Card className="w-[350px]"></Card>
      </div>
    </div>
  )
}

export default Offer
