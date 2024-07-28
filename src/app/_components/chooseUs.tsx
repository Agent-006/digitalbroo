import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { testimonials } from '@/constants/chooseUsItem'
import React from 'react'

const ChooseUs = () => {
    return (
        <div className='w-full h-full  flex items-center py-10 md:px-10'>
            <div className="flex flex-col items-center gap-5 h-full w-full">
                <div className="w-full md:px-10 py-5 text-center space-y-4 relative">
                    <div className="top-5 w-full absolute text-center">
                        <h1 className='md:text-7xl text-5xl opacity-10 text-dark-foreground font-bold'>Why You Choose Us</h1>
                    </div>
                    <h1 className='md:text-5xl text-4xl font-bold text-dark'>Why You Choose Us</h1>
                </div>
                <div className="w-full h-full py-5 md:py-2 2xl:py-5">
                    <div className="h-full w-full text-white">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="left"
                            speed="slow"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs
