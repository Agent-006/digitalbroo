import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqItem } from '@/constants/faqItem'
import React from 'react'

const Faq = () => {
    return (
        <div className='w-full h-full flex items-center py-10 md:px-20'>
            <div className="bg-red-300 h-full w-full items-center flex-col">
                <div className="w-full px-10 py-5 text-center space-y-4 bg-blue-300">
                    <h1 className='md:text-5xl text-4xl font-bold text-dark'>Frequently Ask Question</h1>
                    <h2 className='text-xs text-dark'>Click Here to know more</h2>
                </div>
                <div className="w-full h-full flex md:flex-row md:px-10">
                    <div className="md:w-1/2 w-full h-full bg-slate-300">
                        {
                            faqItem.map((item) => (
                                <Accordion key={item.id} type="single" collapsible className="px-10">
                                    <AccordionItem value={String(item.id)}>
                                        <AccordionTrigger>{item.ques}</AccordionTrigger>
                                        <AccordionContent>
                                           {item.ans}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))
                        }
                    </div>
                    <div className="md:w-1/2 w-full h-full bg-lime-800"></div>
                </div>
            </div>
        </div>
    )
}

export default Faq