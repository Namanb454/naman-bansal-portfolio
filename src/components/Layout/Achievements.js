import React from 'react'
import { RiMedal2Fill } from "react-icons/ri";

function Achievements() {
    const achievement = [
        {
            "name": "1st-Position Innovasion Invasion",
            "delay": "100"
        },
        {
            "name": "Runner-up Nasa Challenge",
            "delay": "400"
        },
        {
            "name": "2nd-Position Inter College Volleyball",
            "delay": "700"
        },
    ]
    return (
        <div>
            <div className=" grid gap-12 py-4 px-10 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">

                {achievement.map((data) => {
                    return (
                        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center justify-center space-y-1 md:justify-start md:items-start"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay={data.delay}
                        >

                            <RiMedal2Fill />
                            <div className='flex w-full'>
                                <h5 className="text-lg px-3 text-center mx-auto font-semibold text-[#fff4d6]">{data.name}</h5>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Achievements
