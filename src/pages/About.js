import React, { useEffect, useState, useRef } from 'react'
import Aos from 'aos'
import Summary from '../components/Layout/Summary'
import Education from '../components/Layout/Education'
import Experience from '../components/Layout/Experience'
import Achievements from '../components/Layout/Achievements'
import { motion } from "framer-motion";

function About() {
    useEffect(() => {
        Aos.init()
    }, [])

    const links = [
        <Summary />,
        <Education />,
        <Experience />,
        <Achievements />
    ]
    const [currentSlide, setCurrentSlide] = useState(0);


    const summary = () => {
        setCurrentSlide((prevSlide) => (0));
    }
    const education = () => {
        setCurrentSlide((prevSlide) => (1));
    }
    const experience = () => {
        setCurrentSlide((prevSlide) => (2));
    }
    const achievement = () => {
        setCurrentSlide((prevSlide) => (3));
    }

    return (
        <div className='w-[100%] mx-auto py-24 bg-fixed bg-neutral-' id='naman'
            style={{
                backgroundImage: 'url(aboutbg.jpg)  ',
            }}
        >

            <section className="mb-24 text-[#fff4d6]">
                <div className="container mx-auto">
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            // x: -200
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="p-0 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                        <h2 className="font-bold leadi xl:text-4xl text-2xl">About Me</h2>
                    </motion.div>
                    <div className="xl:flex xl:py-8 py-4 ">
                        <div className="flex w-1/2 justify-center mx-auto px-4 col-span-full md:col-span-1 md:flex md:justify-start md:items-start ">
                            <button onClick={summary} className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 text-[#908a76] focus:border-[#fff4d6] focus:text-[#fff4d6] hover:text-[#908a76] transition-all ease-in-out duration-500"
                                data-aos="zoom-in-left"
                                data-aos-duration="500"
                                data-aos-delay="100"
                            >Summary</button>
                            <button onClick={education} className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3  text-[#908a76] focus:border-[#fff4d6] focus:text-[#fff4d6] hover:text-[#908a76] transition-all ease-in-out duration-500"
                                data-aos="zoom-in-left"
                                data-aos-duration="500"
                                data-aos-delay="200"
                            >Education</button>
                            <button onClick={experience} className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 text-[#908a76] focus:border-[#fff4d6] focus:text-[#fff4d6] hover:text-[#908a76] transition-all ease-in-out duration-500"
                                data-aos="zoom-in-left"
                                data-aos-duration="500"
                                data-aos-delay="300"
                            >Experience</button>
                            <button onClick={achievement} className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 text-[#908a76] focus:border-[#fff4d6] focus:text-[#fff4d6] hover:text-[#908a76] transition-all ease-in-out duration-500"
                                data-aos="zoom-in-left"
                                data-aos-duration="500"
                                data-aos-delay="400"
                            >Achievements</button>
                        </div>


                        <div className=" items-center justify-center xl:my-10">
                            <div alt={`Slide ${currentSlide + 1}`} className="w-full">{links[currentSlide]}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
