import Image from 'next/image'
import React from 'react'

const WorkExample = () => {
  return (
    <div className='flex flex-col w-full items-center h-auto overflow-hidden gap-5 xl:gap-10 max-w-screen-2xl bg-blue-300'>


      <div className="flex flex-col w-full items-center h-2/5">
        <h1 className='text-dark text-3xl md:text-4xl xl:text-7xl font-bold xl:font-extrabold xl:mt-40 mt-3'>Some Work Samples</h1>
        <p className='text-dark-foreground xl:text-3xl mt-5 mx-5 text-center'>At Techacee, we help build your product with precision and creativity. Our team specializes in <br className='hidden md:block' /> transforming your ideas into exceptional digital experiences. Partner with us to <br className='hidden md:block' /> bring your vision to life.</p>
      </div>


      <div className="flex flex-col md:flex-row w-full items-center justify-center  h-4/5 gap-3 md:gap-10 xl:gap-20 mt-10">

        <div className="md:h-full h-3/4 rounded-md md:w-2/5 w-[25rem] md:ml-20 shadow-xl flex flex-row border-light-200 ">
          <div className="flex flex-col w-1/2 md:w-2/5 text-left gap-3 md:gap-5">
            <h1 className='text-dark font-semibold text-xl md:text-2xl xl:text-5xl ml-2 md:ml-3 mt-2'>Some Work <br /> Samples</h1>
            <p className='text-xs md:text-s xl:text-xl ml-2 md:ml-3 text-dark-foreground'>At Techacee, we help build your <br /> product with precision and <br /> creativity. Our team specializes <br /> in transforming your ideas into <br /> exceptional digital experiences. <br /> Partner with us to bring your <br /> vision to life.</p>
          </div>
          <div className="flex items-center w-3/5">

            <Image src={'/group94.png'} alt={'mask1'} height={100} width={500} />
          </div>
        </div>


        <div className="md:h-full h-3/4 rounded-md md:w-2/5 w-[25rem] mx-1 md:mr-20 shadow-xl flex flex-row">
          <div className="flex w-1/2">
          <h1 className='ml-5 md:ml-[7rem] text-dark-foreground font-bold text-xl xl:text-3xl mt-[8rem]'>Some Work <br /> Samples
          </h1>

          </div>
          <div className="flex w-3/5 relative">
            <Image src={'/maskgroup95.png'} alt={'mask2'} height={100} width={500} />
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row w-full items-center justify-center  h-4/5 gap-3 md:gap-10 xl:gap-20 mb-10">
        <div className="flex flex-row md:h-full h-3/4 rounded-md md:w-2/5 w-[25rem] mx-1 md:ml-20 shadow-xl ">
          <div className="flex w-1/2 ">
          <h1 className='ml-5 md:ml-[7rem] text-dark-foreground text-xl xl:text-3xl mt-[8rem]'>Some Work <br /> Samples
          </h1>

          </div>
          <div className="flex w-3/5 relative">
            <Image src={'/maskgroup95.png'} alt={'mask2'} height={100} width={500} />
          </div>
        </div>

        <div className="md:h-full h-3/4 rounded-md md:w-2/5 w-[25rem] md:mr-20 shadow-xl flex flex-row border-light-200 ">
          <div className="flex flex-col w-1/2 md:w-2/5 text-left gap-3 md:gap-5">
            <h1 className='text-dark font-semibold text-xl md:text-2xl xl:text-5xl ml-2 md:ml-3 mt-2'>Some Work <br /> Samples</h1>
            <p className='text-xs md:text-s xl:text-xl ml-2 md:ml-3 text-dark-foreground'>At Techacee, we help build your <br /> product with precision and <br /> creativity. Our team specializes <br /> in transforming your ideas into <br /> exceptional digital experiences. <br /> Partner with us to bring your <br /> vision to life.</p>
          </div>
          <div className="flex items-center w-3/5">

            <Image src={'/group94.png'} alt={'mask1'} height={100} width={500} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExample
