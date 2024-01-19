import React, { useEffect, useState, useRef } from 'react'
// import { Aboutuscontent } from '../components/Layout/Aboutuscontent';
import Aos from 'aos'
import Summary from '../components/Layout/Summary'
import Education from '../components/Layout/Education'
import Experience from '../components/Layout/Experience'
import Achievements from '../components/Layout/Achievements'

function About() {
    useEffect(() => {
        Aos.init()
    }, [])
    // const [isOpen1, setIsOpen1] = useState(false);
    // const [isOpen2, setIsOpen2] = useState(false);
    // const [isOpen3, setIsOpen3] = useState(false);
    // const [isOpen4, setIsOpen4] = useState(false);
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
        <div className='w-[100%] bg-neutral-00 mx-auto py-24 bg-fixed' id='naman'
            style={{
                backgroundImage: 'url(aboutbg.jpg)  ',

            }}
        >
            {/* shape divider */}
            {/* <div class="custom-shape-divider-top-1705513934"
                data-aos="fade-out"
                data-aos-duration="3000"
                data-aos-delay="300"
            >

                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" ></path>
                </svg>
            </div> */}
            <section className="mb-24 text-[#fff4d6]">
                <div className="container mx-auto">
                    <div className="p-0 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                        <h2 className="font-bold leadi xl:text-4xl text-2xl">About Me</h2>
                        {/* <p className="px-8 my-4">Graeco causae vim cu, alii option ancillae sea ut. Ad mea alii pertinax, ei sed falli ponderum adipisci. Vis iisque scripta cu. Sea ex mollis consulatu dissentiet, dicta viris volutpat mea an, et nec discere epicuri</p> */}
                    </div>
                    <div className="xl:flex xl:py-8 py-4 ">
                        <div className="flex w-1/2 justify-center mx-auto px-4 col-span-full md:col-span-1 md:flex md:justify-start md:items-start ">
                            <button onClick={summary} className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 text-[#908a76] focus:border-[#fff4d6] focus:text-[#fff4d6] hover:text-[#908a76] transition-all ease-in-out duration-500">Summary</button>
                            <button onClick={education} className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3  text-[#908a76] focus:border-[#fff4d6] focus:text-[#fff4d6] hover:text-[#908a76] transition-all ease-in-out duration-500">Education</button>
                            <button onClick={experience} className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 text-[#908a76] focus:border-[#fff4d6] focus:text-[#fff4d6] hover:text-[#908a76] transition-all ease-in-out duration-500">Experience</button>
                            <button onClick={achievement} className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 text-[#908a76] focus:border-[#fff4d6] focus:text-[#fff4d6] hover:text-[#908a76] transition-all ease-in-out duration-500">Achievements</button>
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
