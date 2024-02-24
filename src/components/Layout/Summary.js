import React from 'react'
import { Aboutuscontent } from './Aboutuscontent'

function Summary() {
    return (
        <div>
            <div className="lg:flex gap-0 text-center sm:grid-cols-2 col-span-full md:col-span-2 md:text-left transition-all"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="100"
            >
                <div className="flex lg:w-fit md:w-1/2 w-full mb-10 md:mb-0"
                >
                    <h2 className=' py-3 w-fit h-fit mx-auto xl:px-0 lg:text-left text-center lg:text-6xl text-2xl font-bold tracking-widest'
                    >
                        <div className='xl:flex-wrap flex'>
                            <div className='xl:w-full w-1/2 lg:text-2xl my-3 text-xl tracking-wider text-[#908a76]'
                                data-aos="zoom-out-right"
                                data-aos-duration="500"
                                data-aos-delay="100"
                            >Creating
                            </div>
                            {/* <br /> */}
                            <div className='xl:w-full w-1/2 lg:text-3xl  my-3 text-xl text-[#fff4d6]'
                                data-aos="zoom-out-right"
                                data-aos-duration="500"
                                data-aos-delay="200"
                            >Unforgettable
                            </div>
                        </div>
                        <div className='xl:flex-wrap flex'>
                            {/* <br /> */}
                            <div className='w-full lg:pr-20 lg:text-2xl text-xl my-3 tracking-wider text-[#908a76]'
                                data-aos="zoom-out-right"
                                data-aos-duration="500"
                                data-aos-delay="300"
                            >Digital </div>
                            {/* <br /> */}
                            <div className='w-full lg:text-3xl text-xl my-3  text-[#fff4d6]'
                                data-aos="zoom-out-right"
                                data-aos-duration="500"
                                data-aos-delay="400"
                            >Experiences
                            </div>
                        </div>
                    </h2>
                </div>
                <div className='w-fit px-5 '>
                    <Aboutuscontent />
                </div>
            </div>

        </div >
    )
}

export default Summary
