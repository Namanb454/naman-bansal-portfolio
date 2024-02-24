import React from 'react'
import Example from '../components/Layout/ImageSlider'
import { motion } from "framer-motion";


function Projects() {
    return (
        <div className='py-24 bg-fixed bg-cover bg-neutral-950'
            style={{
                backgroundImage: 'url(portfolio.jpg)  ',

            }}
        >

            <div class="w-[100%] px-4 py-10 sm:px-6 lg:px-8 lg:py-0 mx-auto">
                <div class="">
                    <motion.div
                        data-aos="zoom-in"
                        data-aos-duration="500"
                        data-aos-delay="200"
                        className="p-0 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                        <h2 className="font-bold xl:text-4xl text-2xl text-[#fff4d6]">
                            Portfolio
                        </h2>
                    </motion.div>
                    <Example />
                </div>
            </div>
        </div>
    )
}

export default Projects
