import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='w-full h-full flex items-center py-10 md:px-10'>
      <div className="w-full md:h-[30rem] h-[40rem] flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col gap-5 text-left py-10 md:py-40 px-5 md:px-16">
        <h1 className='text-dark font-bold text-3xl md:text-4xl'>Don’t Believe Us Check What Our Clint Think about Us</h1>
        <Button variant={'outline'} className='border border-dark bg-light w-[11rem]  hover:bg-dark hover:text-light transition-all duration-300 ease-in-out items-center gap-2 rounded-xl font-semibold text-lg'>View More{" "}<MoveRight className="size-6" /></Button>
        </div>
        <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col gap-5 items-center py-10 md:py-40 px-5 md:px-1 bg-red-400"></div>
      </div>
    </div>
  )
}

export default Testimonials
