import React from 'react'
import Example from '../components/Layout/ImageSlider'

function Projects() {
    return (
        <div className='py-24 bg-fixed bg-cover'
            style={{
                // backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-modern-minimalist-wallpaper-screen-background_1194-589075.jpg?t=st=1705693895~exp=1705697495~hmac=c1787a0491d4dea7203fa3fad1dba63fc7bc43899dd198207c97fc9954bab45f&w=996)  ',

            }}
        >
            {/* <div class="custom-shape-divider-top-1705513934"
            // data-aos="fade-out"
            // data-aos-duration="3000"
            // data-aos-delay="300"
            >
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" ></path>
                </svg>
            </div> */}
            <div class="w-[80%] px-4 py-10 sm:px-6 lg:px-8 lg:py-0 mx-auto">
                <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                    <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="sm:flex">
                            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                            </div>

                            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                    Studio by Preline
                                </h3>
                                <p class="mt-3 text-gray-600 dark:text-gray-400">
                                    Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                                </p>
                                <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                    Read more
                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </p>
                            </div>
                        </div>
                    </a>

                    <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="sm:flex">
                            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="Image Description" />
                            </div>

                            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                    Onsite
                                </h3>
                                <p class="mt-3 text-gray-600 dark:text-gray-400">
                                    Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
                                </p>
                                <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                    Read more
                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </p>
                            </div>
                        </div>
                    </a>

                    <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="sm:flex">
                            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
                            </div>

                            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                    The complete guide to OKRs
                                </h3>
                                <p class="mt-3 text-gray-600 dark:text-gray-400">
                                    How to make objectives and key results work for your company
                                </p>
                                <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                    Read more
                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </p>
                            </div>
                        </div>
                    </a>

                    <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="sm:flex">
                            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                            </div>

                            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                    People program models
                                </h3>
                                <p class="mt-3 text-gray-600 dark:text-gray-400">
                                    Six approaches to bringing your People strategy to life
                                </p>
                                <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                    Read more
                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
