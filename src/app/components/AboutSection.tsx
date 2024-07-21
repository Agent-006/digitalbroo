import { Button } from '@/components/ui/button';
import React from 'react';
import { TiArrowRight } from 'react-icons/ti';

const AboutSection = () => {
    return (
        <div className='flex md:flex-row flex-col gap-5 w-full h-screen items-center justify-center'>
            <div className="flex md:flex-row flex-col w-full h-full">
                <div className="flex flex-col md:w-1/2 w-full md:h-full h-1/2 flex-wrap">
                    <div className="flex flex-col w-1/2 h-full items-center justify-center gap-10">
                        <div className="w-4/5 h-2/5 bg-light shadow-xl rounded-md border border-spacing-0">
                            <div className="text-left flex flex-col ml-3 mt-1 md:mt-2 xl:mt-10 xl:gap-5">
                            <h1 className='font-extrabold text-xl xl:text-5xl text-dark'>Product Users</h1>
                            <h2 className='text-green-800 text-sm md:text-xs xl:text-xl font-bold'>1.0 K Followers</h2>
                            </div>
                        </div>
                        <div className="w-4/5 h-2/5 bg-light shadow-xl rounded-md border border-spacing-0 text-center flex flex-col gap-2 xl:gap-5">
                        <h1 className='text-dark text-xl md:text-4xl xl:text-6xl font-extrabold mt-3 md:mt-9 xl:mt-20'>1.2k</h1>
                            <p className='font-bold md:text-lg xl:text-4xl text-dark'>Instagram Followers</p>
                            <p className='text-sm xl:text-xl text-dark-foreground'>At Techacee, we help build <br /> your product with <br /> precision and creativity.</p>
                        </div>
                    </div>
                    <div className="flex w-1/2 h-full items-center justify-center gap-3">
                        <div className="w-4/5 h-2/5 bg-light shadow-xl rounded-md border border-spacing-0 text-center flex flex-col gap-2">
                            <h1 className='mt-3 md:mt-5 xl:mt-20 font-extrabold text-xl md:text-4xl text-dark xl:text-6xl'>95%</h1>
                            <h2 className='font-bold text-dark xl:text-4xl'>Positive Feedback</h2>
                            <p className='text-xs xl:text-xl text-dark-foreground
                            '>At Techacee, we help build <br /> your product with precision <br /> and creativity. At Techacee, we <br /> help build your product with <br /> precision and creativity. </p>
                        </div>
                    </div>
                </div>

                <div className="flex md:w-1/2 w-full md:h-full h-1/2 items-center justify-center">
                    <div className="flex flex-col h-4/5 md:w-4/5 w-full md:text-left text-center gap-2">
                        <h1 className='text-dark text-2xl md:text-4xl xl:text-7xl font-bold xl:font-extrabold xl:mt-40'>About Us</h1>
                        <p className='text-dark-foreground xl:text-3xl mt-10'>
                            At Techacee, we help build your product with precision <br /> 
                            and creativity. Our team specializes in transforming your  <br />  
                            ideas into exceptional digital experiences. Partner with <br /> 
                            us to bring your vision to life.
                        </p>
                        <p className='text-dark-foreground xl:text-3xl mt-5'>
                            At Techacee, we help build your product with precision <br /> 
                            and creativity.
                        </p>
                        
                        <div className="flex justify-center md:justify-start">
                            <Button variant="outline" className="border border-dark bg-light rounded-lg mt-5 flex items-center w-40">
                                Explore More <TiArrowRight className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
