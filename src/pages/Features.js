import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from "styled-components";

// import '../Feature.css';
import Aos from 'aos'

const GridComponent = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  const boxData1 = [
    { imageUrl: 'features/js.png', delay: '100', heading: 'JavaScript' },
    { imageUrl: 'features/reactjs.png', delay: '150', heading: 'React JS' },
    { imageUrl: 'features/nextjs.png', delay: '200', heading: 'Next JS' },
    { imageUrl: 'features/mongodb.png', delay: '250', heading: 'MongoDB' },
    { imageUrl: 'features/nodejs.png', delay: '300', heading: 'Node JS' },
    { imageUrl: 'features/django.png', delay: '350', heading: 'Django' },
    { imageUrl: 'features/auth0.png', delay: '400', heading: 'Auth0' },
    { imageUrl: 'features/firebase.png', delay: '450', heading: 'Firebase' },
    { imageUrl: 'features/sanity.png', delay: '500', heading: 'Sanity' },
    { imageUrl: 'features/bootstrap.png', delay: '550', heading: 'Bootstrap' },
    { imageUrl: 'features/tailwind.png', delay: '600', heading: 'Tailwind CSS' },
  ];

  return (
    <div className='w-[100%] bg-neutral-00 mx-auto py-24 bg-fixed'>
      {/* <div class="custom-shape-divider-top-1705513934"
        data-aos="fade-out"
        data-aos-duration="3000"
        data-aos-delay="300">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" ></path>
        </svg>
      </div> */}
      <div className='lg:mx-[10%] mx-[5%] rounded-3xl'>
        <div class="flex flex-col text-center w-full py-5">
          <h1 class="lg:w-[80%] mx-auto lg:text-3xl text-4xl font-bold text-center lg:px-5 py-5 text-[#908a76] tracking-wider" data-aos="zoom-out-right" data-aos-delay="100">Tools &
            <span className='lg:text-4xl text-4xl text-[#fff4d6] tracking-widest'> Skills</span> </h1>
        </div>

        <div class="flex max-w-md lg:max-w-none w-auto lg:w-full flex-wrap items-center justify-center lg:justify-between px-5">
          {boxData1.map(data => {
            return (

              <div class="my-4 lg:w-1/6 w-1/3 flex mx-auto items-center justify-center">
                <div>
                  <img className='lg:w-16 w-14 rounded-full p-2' src={data.imageUrl} alt='skills' data-aos="zoom-out-right" data-aos-delay={data.delay} />
                  <h2 className='text-[#fff4d6] mx-auto w-fit font-bold lg:text-base text-sm' data-aos="zoom-out-right" data-aos-delay={data.delay}>{data.heading}</h2>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
};

export default GridComponent;
