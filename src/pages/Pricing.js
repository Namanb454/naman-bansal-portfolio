import React, { useEffect } from 'react'
import { Meteors } from '../components/Layout/Meteors'
import { motion } from "framer-motion";
import Aos from 'aos'

function Pricing() {
    useEffect(() => {
        Aos.init()
    }, [])

    const price = [
        {
            "title": "Essential",
            "price": "₹ 800/hour",
            "desc1": "Require few pages only.",
            "desc2": "Delineation of work's scope lacks clarity.",
            "desc3": "Fix something in the website.",
            "desc4": "Adding Data.",
            "desc5": "Economically viable",
            "desc6": "Prompt and Efficient Delivery",
            delay: '200'
        },
        {
            "title": "Project Oriented",
            "price": "Personalized Quotation",
            "desc1": "Comprehensive website.",
            "desc2": "Clear Scope of Work.",
            "desc3": "Unlimited services",
            "desc4": "Easily Scalable",
            "desc5": "Advance Functionality",
            "desc6": "Prompt and Efficient Delivery",
            delay: '300'
        },
        {
            "title": "Progression",
            "price": "Personalized Quotation",
            "desc1": "Data-Driven Designs",
            "desc2": "Comprehensive website",
            "desc3": "Custom Solutions",
            "desc4": "High Performance.",
            "desc5": "Advance Functionality",
            "desc6": "Priority Support",
            delay: '400'
        }
    ]
    const style = {
        // fontFamily: 'Trebuchet MS',
    }
    const buttonstyle = {
        // boxShadow: "10px 10px ",
    }
    return (
        <div className='pb-24'>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 lg:py-20 py-20 mx-auto">

                    <div class="flex flex-col text-center w-full">
                        <h1 class="lg:w-[80%] mx-auto lg:text-3xl text-xl font-bold text-center lg:px-5 py-5 text-[#908a76] tracking-wider" style={style} data-aos="zoom-out-right" data-aos-delay="100">All Businesses Can Benefit from
                            <span className='lg:text-4xl text-2xl text-[#fff4d6] tracking-widest' data-aos="zoom-out-right" data-aos-delay="300"> Flexible Payment</span> Options.</h1>

                    </div>
                    <div class="flex flex-wrap -m-4">

                        {price.map(data => {
                            return (

                                <div class="lg:py-10 py-2 lg:px-5 xl:w-1/3 md:w-1/2 w-full "
                                    data-aos="zoom-out-right" data-aos-delay={data.delay}
                                >
                                    <div class="h-full p-6 rounded-lg  flex flex-col relative overflow-hidden">
                                        <div className="absolute inset-0 h-full w-full rounded-full blur-3xl" />
                                        <div className="relative shadow-xl  bg-gradient-to-br from-white/10 via-white/30 to-black  border-2 border-[#908a76]  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col ">
                                            <h1 class="text-3xl text-center font-bold tracking-widest text-[#fff4d6] pb-4 mb-4 border-b border-[#fff4d6] leading-none">{data.title}</h1>

                                            <h1 class="text-xl text-center items-center font-bold tracking-wide py-2 mb-4 shadow-sm shadow-[#fff4d6]  border-[#fff4d6]/80 leading-none  text-[#fff4d6]/60 rounded-full bg-black/10  ">{data.price}</h1>

                                            <p class="flex items-center text-black/70 font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#fff4d6] flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc1}
                                            </p>
                                            <p class="flex items-center text-black/70 font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center text-[#fff4d6] rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc2}
                                            </p>
                                            <p class="flex items-center text-black/70 font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-[#fff4d6] rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc3}
                                            </p>
                                            <p class="flex items-center text-black/70 font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-[#fff4d6] rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc4}
                                            </p>
                                            <p class="flex items-center text-black/70 font-semibold tracking-wider mb-2">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-[#fff4d6] rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc5}
                                            </p>
                                            <p class="flex items-center text-black/70 font-semibold tracking-wider mb-6">
                                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-[#fff4d6] rounded-full flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </span>{data.desc6}
                                            </p>
                                            <motion.a
                                                whileTap={{
                                                    scale: 0.8,
                                                    borderRadius: "100%",
                                                }}
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                href='#contact' class="flex items-center mt-auto text-[#fff4d6]/80 bg-gradient-to-r from-black/60 to-[#fff4d6]/80 border-0 shadow-md shadow-[#fff4d6] py-2 px-4 w-fit mx-auto focus:outline-none hover:bg-[#fff4d6] font-bold rounded ease-in-out duration-200" style={buttonstyle} >Start Building
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                                // </div>
                            )
                        })}
                    </div>
                    <div class="flex flex-col text-center w-full">
                        <p class="w-full mx-auto lg:text-sm text-xs text-center text-[#908a76] tracking-wider" style={style}>All Do you require assistance in selecting the optimal plan? Feel free to <span className='text-[#fff4d6] font-bold'>Contact Us</span> without any hesitation.</p>

                    </div>
                </div>

            </section >
        </div >
    )
}

export default Pricing
