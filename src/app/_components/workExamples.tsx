import Image from 'next/image'
import React from 'react'

const WorkExamples = () => {
    return (
        <div className='w-full h-full flex items-center py-10 md:px-10 2xl:px-5'>
            <div className="flex flex-col gap-5 w-full h-full">
                <div className="w-full md:px-10 py-5 text-center space-y-4 relative">
                    <div className="top-5 w-full absolute text-center">
                        <h1 className='md:text-7xl text-5xl opacity-10 text-dark-foreground font-bold'>Some Work Samples</h1>
                    </div>
                    <h1 className='md:text-5xl text-4xl font-bold text-dark'>Some Work Samples</h1>
                    <p className='md:px-[13rem] text-dark-foreground text-md'>At Techacee, we help build your product with precision and creativity. Our team specializes in transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to life.</p>
                </div>
                <div className="flex flex-col w-full gap-10 md:px-10">
                    <div className="flex flex-col md:flex-row w-full gap-10">
                        <div className="h-[35vh] md:h-[50vh] 2xl:h-[35vh] md:w-3/5 flex flex-row w-full rounded-md shadow-lg border">
                            <div className="w-1/2 h-full flex flex-col gap-3 md:gap-5 py-4 px-2">
                                <h1 className='text-dark text-xl md:text-2xl font-bold'>Some Work Examples</h1>
                                <p className='text-dark-foreground md:text-sm text-xs'>At Techacee, we help build your product with precision and creativity. Our team specializes in transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to life.</p>
                            </div>
                            <div className="w-1/2 h-full">
                                <Image src={'/group94.png'} alt={'group1'} height={600} width={600} className='w-full h-full' />
                            </div>
                        </div>


                        <div className="relative h-[35vh] md:h-[50vh] 2xl:h-[35vh] md:w-2/5 flex flex-row w-full border shadow-lg">
                            <div className="w-1/5 h-full relative">
                                <h1 className='text-dark absolute text-mdl md:text-2xl font-bold top-40 pl-2'>Some Work Examples</h1>
                            </div>
                            <div className="w-4/5 h-full">
                                <Image src={'/maskgroup95.png'} alt={'group-2'} height={600} width={600} className='h-full w-full' />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-10">
                        <div className="relative h-[35vh] md:h-[50vh] 2xl:h-[35vh] md:w-2/5 flex flex-row w-full border shadow-lg">
                            <div className="w-1/5 h-full relative">
                                <h1 className='text-dark absolute text-md md:text-2xl font-bold top-40 pl-2'>Some Work Examples</h1>
                            </div>
                            <div className="w-4/5 h-full">
                                <Image src={'/maskgroup95.png'} alt={'group-2'} height={600} width={600} className='h-full w-full' />
                            </div>
                        </div>

                        <div className="h-[35vh] md:h-[50vh] 2xl:h-[35vh] md:w-3/5 flex flex-row w-full rounded-md shadow-lg border">
                            <div className="w-1/2 h-full flex flex-col gap-3 md:gap-5 py-4 px-2">
                                <h1 className='text-dark text-xl md:text-2xl font-bold'>Some Work Examples</h1>
                                <p className='text-dark-foreground md:text-sm text-xs'>At Techacee, we help build your product with precision and creativity. Our team specializes in transforming your ideas into exceptional digital experiences. Partner with us to bring your vision to life.</p>
                            </div>
                            <div className="w-1/2 h-full">
                                <Image src={'/group94.png'} alt={'group1'} height={600} width={600} className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExamples
