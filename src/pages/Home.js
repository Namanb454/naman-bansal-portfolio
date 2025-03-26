import React, { useEffect } from 'react'
import Aos from 'aos'
import { GoProjectSymlink } from "react-icons/go";
import { MdLink } from "react-icons/md";
import { FaAws, FaCss3, FaGithub, FaHtml5, FaLinux, FaNode, FaReact } from 'react-icons/fa6';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiExpress, SiFramer, SiMysql, SiNextdotjs, SiSanity, SiSupabase, SiTailwindcss } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { IoLogoFirebase } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section>
      <div class="p-4 text-balance poppins">
        <div
          class="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4"
        >
          <div
            class="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-neutral-900 dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"
          >

            {/* Bio */}
            <div class="relative flex items-center gap-x-4">
              <img
                src="/avatar.jpg"
                alt=""
                class="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-primary text-white">
                  <Link to="/">
                    <span class="absolute inset-0"></span>
                    Naman Bansal
                  </Link>
                </p>
                <p class=" text-zinc-400">
                  Fullstack Web Developer
                </p>
              </div>
            </div>
            <p
              class="text-3xl mt-6 font-semibold lg:text-4xl tracking-tight text-primary text-white"
            >
              Hey, welcome to my site!
            </p>
            <p
              class="mt-4  text-zinc-400 font-medium text-sm"
            >
              I am a passionate developer with a strong foundation in MERN Stack and other libraries & frameworks complemented by expertise in Deployment.
              <br />
              <br />
              Beyond screens, I find solace and joy riding bike and tech content on Instagram. My life blends tech and nature, coding sessions, and travel.
            </p>
          </div>
          <div
            class="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-neutral-900  dark:bg-secondary"
          >
            {/* Social Links */}
            <div class="w-full">
              <p
                class="text-xl font-normal tracking-tight text-primary text-white lg:text-8xl"
              >
                Find me on
              </p>
            </div>
            <div class="grid mt-4 grid-cols-3 md:grid-cols-8 lg:grid-cols-3 gap-y-2 gap-0 justify-center w-full">
              <a
                href="mailto: namanb454@gmail.com"
                class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-neutral-100 bg-neutral-900 ring-1 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary text-white hover:text-neutral-900 group-hover text-primary:text-white/50"
                  viewBox="0 0 24 24"
                  stroke-width="0.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                  d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                ></path><path d="M3 7l9 6l9 -6"></path></svg
                >
              </a>
              <a
                href="https://github.com/Namanb454"
                class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-neutral-100 bg-neutral-900 ring-1 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary text-white group-hover:text-neutral-900 group-hover text-primary:text-white/50"
                  viewBox="0 0 24 24"
                  stroke-width="0.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                ></path></svg
                >
              </a>
              <a
                href="https://www.instagram.com/namanwebworks/"
                class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-neutral-100 bg-neutral-900 ring-1 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary text-white group-hover:text-neutral-900 group-hover text-primary:text-white/50"
                  viewBox="0 0 24 24"
                  stroke-width="0.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                  d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
                ></path></svg
                >
              </a>

              <a
                href="https://twitter.com/Naman251342"
                class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-neutral-100 bg-neutral-900 ring-1 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary text-white group-hover:text-neutral-900 group-hover text-primary:text-white/50"
                  viewBox="0 0 24 24"
                  stroke-width="0.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                  d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path
                    d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg
                >
              </a>
              <a
                href="https://www.linkedin.com/in/naman-bansal-9585nb/"
                class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-neutral-100 bg-neutral-900 ring-1 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary text-white group-hover:text-neutral-900 group-hover text-primary:text-white/50"
                  viewBox="0 0 24 24"
                  stroke-width="0.8"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                  d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                ></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"
                ></path><path d="M12 16l0 -5"></path><path
                  d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg
                >
              </a>
            </div>
          </div>

          {/* Projects */}
          <div
            href="/"
            class="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-neutral-900 dark:bg-secondary shadow-xl dark:shadow-thick"
          >
            <div>
              <p
                class="text-xl tracking-tight font-medium text-primary text-white md:text-6xl"
              >
                My Projects
              </p>
              <p
                class="ext-xl tracking-tight font-medium text-primary text-white md:text-4xl mt-6"
              >
                <h2 className=''>
                  Tipriyo
                  <a href='https://tipriyo.ai/' target='blank'>
                    <MdLink />
                  </a>
                </h2>
              </p>
              <p class="mt-4 text-sm  text-zinc-400">
                <span className='text-2xl'>*</span> Created a web-based virtual staging application that enables users to choose a particular room category along with its style.
                The application features over 7 categories of rooms and their respective styles and helps you to save 90% of the cost.

              </p>
              <p
                class="ext-xl tracking-tight font-medium text-primary text-white md:text-4xl mt-6"
              >
                <h2 className=''>
                  Npm Js
                  <a href='https://npmjs-clone-two.vercel.app/' target='blank'>
                    <MdLink />
                  </a>
                </h2>
              </p>
              <p class="mt-4 text-sm  text-zinc-400">
                <span className='text-2xl'>*</span>Developed and clone the most famous and lovalble website of developers&nbsp;<span className='font-bold'>npm Js.&nbsp;</span>Search & install your favourite npm package.
              </p>

              <p
                class="ext-xl tracking-tight font-medium text-primary text-white md:text-4xl mt-6"
              >
                <h2 className=''>
                  Horizon
                  <a href='https://github.com/Namanb454/BankingApp' target='blank'>
                    <MdLink />
                  </a>
                </h2>
              </p>
              <p class="mt-4 text-sm  text-zinc-400">
                <span className='text-2xl'>*</span> Build a platform that helps to connect with 50+ together and display transactions in real time.
              </p>

              <p
                class="ext-xl tracking-tight font-medium text-primary text-white md:text-4xl mt-6"
              >
                <h2 className=''>
                  Reamor UI
                  <a href='https://reamor-ui.vercel.app/' target='blank'>
                    <MdLink />
                  </a>
                </h2>
              </p>
              <p class="mt-4 text-sm  text-zinc-400">
                <span className='text-2xl'>*</span> Developed an open source for UI developer to perform parallax animation.
              </p>
              <p
                class="text-xl tracking-tight font-medium text-primary text-white md:text-4xl mt-6"
              >
                <h2 className=''>
                  E-commerce
                  <a href='https://github.com/Namanb454/MERNStackEcommerce' target='blank'>
                    <MdLink />
                  </a>
                </h2>
              </p>
              <p class="mt-4 text-sm  text-zinc-400">
                <span className='text-2xl'>*</span> The ecommerce application is built on the MERN stack, utilizing ReactJS for the front end with Bootstrap for the user
                interface. The backend is developed using Node.js, and MongoDB is used as the database.
              </p>

            </div>

          </div>
          {/* Resume  */}
          <div
            class="ring-1 dark:ring-white/10  ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8  bg-neutral-900 dark:bg-secondary overflow-hidden text-center lg:text-left"
          >
            <div>
              <p
                class="text-xl text-primary text-white lg:text-7xl tracking-tight"
              >
                Grab my résumé!
              </p>
              <p class="mt-4 text-sm  text-zinc-400 md:max-w-xs lg:max-w-none">
                Unlock the doors to explore the rich tapestry of my professional
                journey and accomplishments.
              </p>
            </div>
            <div class="w-full mt-8 md:max-w-xs lg:max-w-none">
              <a href='https://drive.google.com/file/d/1UBKuspee0BXMPwTazdh4jhGTzDc1i2mT/view' target='blank' download
                class="text-sm py-2 w-full px-4 h-12 font-semibold ring-2 rounded-lg bg-primary dark:bg-white text-primary dark:hover:text-white hover:text-primary dark:hover:bg-neutral-900/5 hover:bg-primary/10 flex duration-200 ring-offset-2 focus:ring-inline-flex items-center justify-between text-white"
              >
                Get my CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-download w-4 h-4"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                  d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><path
                    d="M7 11l5 5l5 -5"></path><path d="M12 4l0 12"></path></svg
                >
              </a>
            </div>
          </div>
          <div
            class="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-neutral-900 text-white dark:bg-secondary shadow-xl dark:shadow-thick"
          >
            {/* Skills */}
            <div className='grid xl:grid-cols-3 grid-cols-4 gap-10 xl:text-4xl text-2xl'>
              <FaHtml5 />
              <FaCss3 />
              <RiJavascriptFill />
              <SiTailwindcss />
              <FaReact />
              <SiNextdotjs />
              <DiMongodb />
              <SiMysql />
              <SiExpress />
              <FaNode />
              <FaLinux />
              <FaAws />
              <IoLogoFirebase />
              <SiSupabase />
              <SiSanity />
              <FaGithub />
              <SiFramer />
            </div>
            <p
              class="text-xl  text-primary text-white lg:text-2xl mt-6"
            >
              Skill Set
            </p>
          </div>
          <div
            class="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-neutral-900 dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl  p-8"
          >

            {/* Experiences */}
            <div class="mt-">
              <div class="flex flex-wrap">
                <div
                  class="text-white"
                >
                  <span class="font-semibold">Experiences</span>
                </div>
              </div>
              <div className='space-y-16'>

                <div class="space-y-2 tracking-tight text-primary text-white md:text-2xl mt-6 font-semibold">
                  <h2>
                    Techype - <span className='md:font-normal md:text-lg'>SDE Intern</span>
                  </h2>
                  <p className='md:text-lg font-normal'>
                    Dec 2024 - Present
                  </p>
                </div>
                <div class="space-y-2 tracking-tight text-primary text-white md:text-2xl mt-6 font-semibold">
                  <h2>
                    Model Verse - <span className='md:font-normal md:text-lg'>Full Stack Developer Intern</span>
                  </h2>
                  <p className='md:text-lg font-normal'>
                    Jan 2024 - Aug 2024
                  </p>
                </div>
                <div class="space-y-2 tracking-tight text-primary text-white md:text-2xl mt-6 font-semibold">
                  <h2>
                    Coding Ninjas - <span className='md:font-normal md:text-lg'>SDE Intern</span>
                  </h2>
                  <p className='md:text-lg font-normal'>
                    Nov 2023 - Jan 2024
                  </p>
                </div>
                <div class="space-y-2 tracking-tight text-primary text-white md:text-2xl mt-6 font-semibold">
                  <h2>
                    siteScript - <span className='md:font-normal md:text-lg'>Self Employed</span>
                  </h2>
                  <p className='md:text-lg font-normal'>
                    Aug 2023 - Nov 2024
                  </p>
                </div>
                <div class="space-y-2 tracking-tight text-primary text-white md:text-2xl mt-6 font-semibold">
                  <h2>
                    E-Cell - <span className='md:font-normal md:text-lg'>Member</span>
                  </h2>
                  <p className='md:text-lg font-normal'>
                    Jan 2023 - Jan 2024
                  </p>
                </div>
                <div class="space-y-2 tracking-tight text-primary text-white md:text-2xl mt-6 font-semibold">
                  <h2>
                    GDSC - <span className='md:font-normal md:text-lg'>Web Developer</span>
                  </h2>
                  <p className='md:text-lg font-normal'>
                    Jan 2022 - Jan 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="ring-1 ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-neutral-900 dark:bg-secondary shadow-xl dark:shadow-thick"
          >


            <div class="relative p-8 text-center w-full">
              <p
                class="text-xl tracking-tight font-medium text-primary text-white md:text-6xl"
              >
                Subscribe <span class="lg:block">to my newsletter</span>
              </p>
              <form class="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
                <label for="email-address" class="sr-only">Email address</label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autocomplete="email"
                  required=""
                  class="block w-full h-12 px-4 py-2 text-sm  bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
                <div class="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    class="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-neutral-900 text-primary dark:hover:text-white hover:text-primary dark:hover:bg-neutral-900/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                  >Subscribe</button
                  >
                </div>
              </form>
            </div>
          </div>
          <div
            class="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-neutral-900 dark:bg-secondary"
          >
            <p
              class="text-xl tracking-tight font-medium text-primary text-white md:text-4xl"
            >
              Testimonials
            </p>
            <div class="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
              <div class="mt-4">
                <p class="text-sm text-pink-500 text-pink-400">
                  "He was recommended to me by a colleague for site development and design, and I can assure you that working with him would be beneficial. He is really imaginative and attentive to your needs, and suddenly presto—the job is done. He continued to communicate even after the project was turned over to see if anything needed to be changed and whether everything was going well. I endorse him. Bravo to you, friend 👍"
                </p>
                <p class="text-xs mt-2 ">
                  <span class="block text-xs">Mr. Ravi</span>
                  <span class="block text-xs">Founder - Prime Care Alliance</span>
                </p>
              </div>
              <div class="mt-4">
                <p class="text-sm text-orange-500 text-orange-300">
                  "From the initial concept to the final product, siteScript exceeded our expectations every step of the way."
                </p>
                <p class="text-xs mt-2 ">
                  <span class="block text-xs">Srijan Mehrotra</span>
                  <span class="block text-xs">Founder - Ubilang</span>
                </p>
              </div>
            </div>
          </div>
          <div
            class="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-neutral-900 dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"
          >
            <p
              class="text-xl md:text-3xl tracking-tight font-medium text-primary text-white"
            >
              I have successfully developed numerous websites that showcase my dedication to delivering excellence.
              <br />
              Let us embark on this journey together to transform your ideas into remarkable digital experiences.
            </p>
            <p class="text-primary text-white mt-4">~ Naman Bansal</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home
