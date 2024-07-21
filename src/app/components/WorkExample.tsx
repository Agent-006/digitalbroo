import React from 'react'

const WorkExample = () => {
  return (
    <div className='flex flex-col w-full items-center h-screen overflow-hidden gap-5 xl:gap-10'>


      <div className="flex flex-col w-full items-center h-2/5">
        <h1 className='text-dark text-3xl md:text-4xl xl:text-7xl font-bold xl:font-extrabold xl:mt-40 mt-3'>Some Work Samples</h1>
        <p className='text-dark-foreground xl:text-3xl mt-5 mx-5 text-center'>At Techacee, we help build your product with precision and creativity. Our team specializes in <br className='hidden md:block'/> transforming your ideas into exceptional digital experiences. Partner with us to <br className='hidden md:block'/> bring your vision to life.</p>
      </div>


      <div className="flex flex-col md:flex-row w-full items-center justify-center  h-4/5 gap-3 md:gap-10 xl:gap-20">
        <div className="md:h-full h-2/3 rounded-md md:w-2/4 w-full mx-1 bg-green-600 md:ml-20 shadow-2xl"></div>
        <div className="md:h-full h-2/3 rounded-md md:w-1/3 w-full mx-1 bg-green-600 md:mr-20 shadow-2xl"></div>
      </div>


      <div className="flex flex-col md:flex-row w-full items-center justify-center  h-4/5 gap-3 md:gap-10 xl:gap-20">
        <div className="md:h-full h-2/3 rounded-md md:w-1/3 w-full mx-1 bg-green-600 md:ml-20 shadow-2xl"></div>
        <div className="md:h-full h-2/3 rounded-md md:w-2/4 w-full mx-1 bg-green-600 md:mr-20 shadow-2xl"></div>
      </div>





    </div>
  )
}

export default WorkExample
