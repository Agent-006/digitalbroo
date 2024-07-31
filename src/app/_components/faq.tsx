import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { faqItem } from '@/constants/faqItem'
import Image from 'next/image'
import React from 'react'

const Faq = () => {
    return (
        <div className='w-full h-full flex items-center py-10 md:px-10'>
            <div className="h-full w-full items-center flex-col">
                <div className="w-full md:px-10 py-5 text-center space-y-4 relative">
                    <div className="top-5 w-full absolute text-center">
                        <h1 className='md:text-7xl text-5xl opacity-10 text-dark-foreground font-bold'>Frequently {" "} Ask {" "} Question</h1>
                    </div>
                    <h1 className='md:text-5xl text-4xl font-bold text-dark'>Frequently Ask Question</h1>
                    <h2 className='text-md text-dark'><span className='text-[#E66E42] border-b-2 border-[#E66E42] cursor-pointer hover:text-dark'>Click Here</span> to know more</h2>
                </div>
                <div className="w-full md:h-[70vh] h-[75vh] flex md:flex-row flex-col md:px-10 gap-5 py-5">
                    <div className="md:w-1/2 w-full h-full">
                        <h1 className='text-black font-bold text-lg'>Popular Questions</h1>
                        <ScrollArea className="h-[60vh] md:h-full w-full rounded-md border">
                            <Accordion type="single" collapsible>
                                {
                                    faqItem.map((item, index) => {
                                        const itemValue = `item -${index}`
                                        return (
                                            <AccordionItem
                                                key={index}
                                                value={itemValue} className='my-2 shadow-lg bg-light px-4'>
                                                <AccordionTrigger>{item.ques}</AccordionTrigger>
                                                <AccordionContent>
                                                    {item.ans}
                                                </AccordionContent>
                                            </AccordionItem>
                                        )
                                    })
                                }
                            </Accordion>
                        </ScrollArea>
                    </div>

                    <div className="md:w-1/2 w-full h-full md:pl-24 xl:pl-24 md:py-20 xl:py-16">
                        <div className="h-full w-full items-center justify-center flex flex-col gap-4 text-center">
                            <Image src={'/g10.png'} alt={'faq'} width={200} height={200} />
                            <h1 className='text-dark font-bold text-3xl'>Any Question?</h1>
                            <h3 className='text-xs text-dark-foreground'>You can ask anything you want to know about Feedback</h3>
                            <div className="w-full flex flex-col text-left gap-2">
                                <h2 className='text-dark-foreground text-sm'>Let me know.</h2>
                                <Input type="email" placeholder="Write Here" />
                                <div className="w-full flex items-center justify-center">
                                    <Button variant={'outline'} className='bg-dark text-white hover:bg-dark-foreground hover:text-white border border-black text-lg rounded-2xl w-24'>Send</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq