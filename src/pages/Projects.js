import React from 'react'
import Example from '../components/Layout/ImageSlider'
import { motion, useTransform, useScroll } from "framer-motion";


function Projects() {
    return (
        <div className='py-24 bg-fixed bg-cover'
            style={{
                backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-modern-minimalist-wallpaper-screen-background_1194-589075.jpg?t=st=1705693895~exp=1705697495~hmac=c1787a0491d4dea7203fa3fad1dba63fc7bc43899dd198207c97fc9954bab45f&w=996)  ',

            }}
        >

            <div class="w-[100%] px-4 py-10 sm:px-6 lg:px-8 lg:py-0 mx-auto">
                <div class="">
                    <div className="p-0 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                        <h2 className="font-bold leadi xl:text-4xl text-2xl text-[#fff4d6]">Portfolio</h2>
                        {/* <p className="px-8 my-4">Graeco causae vim cu, alii option ancillae sea ut. Ad mea alii pertinax, ei sed falli ponderum adipisci. Vis iisque scripta cu. Sea ex mollis consulatu dissentiet, dicta viris volutpat mea an, et nec discere epicuri</p> */}
                    </div>
                    <Example />
                </div>
            </div>
        </div>
    )
}

export default Projects
