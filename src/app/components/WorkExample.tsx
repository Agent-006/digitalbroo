import Image from 'next/image'
import React from 'react'

const WorkExample = () => {
  return (
    <div className='flex flex-col w-full items-center h-screen overflow-hidden gap-5 xl:gap-10 max-w-screen-2xl bg-blue-300 py-10'>
      <div className="flex flex-col w-full items-center h-auto bg-green-400">
        <h1 className='text-dark text-3xl md:text-4xl xl:text-6xl font-bold xl:font-extrabold'>Some Work Samples</h1>
        <p className='text-dark-foreground xl:text-2xl text-sm mt-5 mx-5 text-center'>
          At Techacee, we help build your product with precision and creativity. Our team specializes in 
          <br className='hidden md:block' /> transforming your ideas into exceptional digital experiences. Partner with us to 
          <br className='hidden md:block' /> bring your vision to life.
        </p>
      </div>




      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-3 md:gap-10 xl:gap-20 mt-10 bg-green-400">


        <div className="flex flex-col md:flex-row w-full md:w-2/5 h-96 items-center md:items-start rounded-md shadow-xl border-light-200 gap-3 p-5 bg-white">
          <div className="flex flex-col w-full md:w-2/5 text-left gap-3 md:gap-5">
            <h1 className='text-dark font-semibold text-xl md:text-xl xl:text-2xl'>Some Work Samples</h1>
            <p className='text-xs xl:text-xl text-dark-foreground'>
              At Techacee, we help build your product with precision and creativity. Our team specializes in transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to life.
            </p>
          </div>
          <div className="flex items-center w-full md:w-3/5">
            <Image src={'/group94.png'} alt={'mask1'} layout='responsive' width={500} height={300} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-2/5 h-96 items-center md:items-start rounded-md shadow-xl gap-3 p-5 bg-white">
          <div className="flex w-full md:w-1/2">
            <h1 className='text-dark-foreground font-bold text-xl xl:text-2xl'>Some Work Samples</h1>
          </div>
          <div className="flex w-full md:w-3/5 relative">
            <Image src={'/maskgroup95.png'} alt={'mask2'} layout='responsive' width={500} height={300} />
          </div>
        </div>
      </div>





      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-3 md:gap-10 xl:gap-20 mb-10 bg-green-400">


        <div className="flex flex-col md:flex-row w-full md:w-2/5 h-96 items-center md:items-start rounded-md shadow-xl gap-3 p-5 bg-white">
          <div className="flex w-full md:w-1/2">
            <h1 className='text-dark-foreground text-xl xl:text-2xl'>Some Work Samples</h1>
          </div>
          <div className="flex w-full md:w-3/5 relative">
            <Image src={'/maskgroup95.png'} alt={'mask2'} layout='responsive' width={500} height={300} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-2/5 h-96 items-center md:items-start rounded-md shadow-xl border-light-200 gap-3 p-5 bg-white">
          <div className="flex flex-col w-full md:w-2/5 text-left gap-3 md:gap-5">
            <h1 className='text-dark font-semibold text-lg md:text-xl xl:text-2xl'>Some Work Samples</h1>
            <p className='text-xs xl:text-lg text-dark-foreground'>
              At Techacee, we help build your product with precision and creativity. Our team specializes in transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to life.
            </p>
          </div>
          <div className="flex items-center w-full md:w-3/5">
            <Image src={'/group94.png'} alt={'mask1'} layout='responsive' width={500} height={300} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExample
