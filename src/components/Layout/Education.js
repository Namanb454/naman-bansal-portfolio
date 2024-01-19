import React from 'react'
import { IoSchoolOutline } from "react-icons/io5";

function Education() {

    const educations = [
        {
            "name": "ADGIPS, GGSIPU",
            "course": "B.Tech - Information Technology",
            "duration": "June 2025",
            "score": "CGPA: 8.5/10",
            "delay": "100"
        },
        {
            "name": "HRSSSS",
            "course": "Senion Secondary - (10+2)",
            "duration": "April 2021",
            "score": "Percentage: 80",
            "delay": "400"
        },
        {
            "name": "SRCP",
            "course": "Higher Secondary - (10)",
            "duration": "April 2019",
            "score": "Percentage: 82",
            "delay": "700"
        },
    ]

    return (
        <div>
            <div className=" grid gap-12 py-4 px-10 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">

                {educations.map((data) => {
                    return (
                        <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay={data.delay}
                        >
                            <IoSchoolOutline />
                            <div className='flex w-full'>
                                <h5 className="text-lg font-semibold text-[#fff4d6]">{data.name}</h5>
                                <h6 className="text-xs w-fit ml-auto font-semibold text-[#908a76]">{data.duration}</h6>

                            </div>
                            <div className='flex w-full'>
                                <p className='text-sm w-[60%] text-start text-[#fff4d6]'>{data.course}</p>
                                <p className='text-xs w-fit ml-auto font-semibold text-[#908a76]'>{data.score}</p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Education
