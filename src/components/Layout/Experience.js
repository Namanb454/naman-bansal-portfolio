import React from 'react'
import { IoStarHalf } from "react-icons/io5";
function Experience() {
    const experience = [
        {
            "name": "Coding Ninjas",
            "course": "Full Stack Developer Intern",
            "duration": "Dec 2023",
            "destination": "Gurugram",
            "delay": "100"
        },
        {
            "name": "Model Verse",
            "course": "MERN Stack Developer Freelance",
            "duration": "July 2023",
            "destination": "Delhi",
            "delay": "400"
        },
        {
            "name": "Up-bringing",
            "course": "Full Stack Developer Intern",
            "duration": "April 2023",
            "destination": "Delhi",
            "delay": "700"
        },
    ]
    return (
        <div>
            <div className=" grid gap-12 py-4 xl:px-24 px-10 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">

                {experience.map((data) => {
                    return (
                        <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay={data.delay}
                        >
                            <IoStarHalf />
                            <div className='flex w-full'>
                                <h5 className="text-lg font-semibold text-[#fff4d6]">{data.name}</h5>
                                <h6 className="text-xs w-fit ml-auto font-semibold text-[#908a76]">{data.duration}</h6>

                            </div>
                            <div className='flex w-full'>
                                <p className='text-sm w-[60%] text-start text-[#fff4d6]'>{data.course}</p>
                                <p className='text-xs w-fit ml-auto font-semibold text-[#908a76]'>{data.destination}</p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Experience
