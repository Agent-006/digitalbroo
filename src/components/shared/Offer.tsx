import React from 'react'
import Text from './Text'

const Offer = () => {
  return (
    <div className='flex flex-col items-center lg:justify-between justify-center lg:px-28 md:px-14 px-4 mt-16 gap-8 mx-5 bg-blue-200'>
      <div className="flex flex-col items-center p-10 lg:w-full w-90%">
      <p className="lg:text-3xl md:text-2xl text-2xl font-bold text-[#402321] text-center">
          WHAT WE OFFER
        </p>
        <p className='mt-2 text-[#6C3227]'>At Techacee, we help build your product with precision and creativity. Our team specializes  in <br className='hidden md:block'/> transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to <br className='hidden md:block'/> <span className='md:ml-[20rem]'>life</span></p>
      </div>
      <div className="flex md:mt-10 mt-5 w-full flex-col">
        
      </div>
    </div>
  )
}

export default Offer
