import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="h-[22vh] md:h-full w-full relative">
            <div className="h-full w-full">   
                <Image src={'/Bg.png'} alt='footer' height={900} width={900} className='h-full w-full'/>
            </div>
            <div className="absolute flex flex-row md:top-32 2xl:top-40 top-24 items-center w-full px-2">
                <div className="items-center flex justify-between w-1/2 h-full">
                <h1 className='text-xs md:text-sm 2xl:text-lg text-light px-6'>© 2004-2024, <span className='font-bold'>Techacee.com</span>, Inc. or its affiliates</h1>
                </div>
                <div className="items-center flex justify-between w-1/2 h-full md:px-56 2xl:px-72 px-10 gap-2">
                <Instagram className='cursor-pointer text-light'/>
                <Linkedin className='cursor-pointer text-light'/>
                <Twitter className='cursor-pointer text-light'/>
                <Github className='cursor-pointer text-light'/>
                </div>
            </div>
        </div>
    )
}

export default Footer