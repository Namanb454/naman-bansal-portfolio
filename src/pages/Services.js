import { useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { services } from '../content'
import Aos from 'aos'
import { CgPerformance } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";

function Services() {
    useEffect(() => {
        Aos.init()
    }, [])
    const services = [
        {
            'id': 8,
            'img': <CgWebsite />,
            'heading': 'MERN Stack Development',
            'desc': "Offering technical assistance and resolving any problems that may occur subsequent to the launch.",
            delay: '900'
        },
        {
            'id': 4,
            'img': 'itconsultancy.png',
            'heading': 'E-commerce',
            'desc': "Your objectives and preferences are given utmost importance as we customize web design experiences that surpass your expectations.",
            delay: '500'
        },
        {
            'id': 5,
            'img': 'dataanalyst.png',
            'heading': 'Shopify',
            'desc': 'Transform data into actionable insights. Our data analysis services decode the information maze, guiding your decisions with precision.',
            delay: '700'
        },
        {
            'id': 2,
            'img': <DiResponsive />,
            'heading': 'Responsive Designs',
            'desc': 'Our proficiency lies in creating captivating user experiences across various devices, guaranteeing optimal levels of engagement and conversion rates.',
            delay: '300'
        },
        {
            'id': 6,
            'img': 'seo.png',
            'heading': 'Web Hosting and Deployment',
            'desc': 'Helping clients choose suitable hosting solutions. Deploying websites to hosting servers and configuring domain settings.',
            delay: '600'
        },
        {
            'id': 1,
            'img': <CgPerformance />,
            'heading': 'Performance Optimization',
            'desc': 'Improving website loading speed and overall performance. Minimizing code and asset size, implementing caching, and optimizing server configurations.',
            delay: '200'
        },
        {
            'id': 3,
            'img': 'blockchain.png',
            'heading': 'Flexibility & Scalability',
            'desc': 'Our flexible solutions effectively cater to the growth and expansion of your business, enabling you to maintain a competitive edge.',
            delay: '400'
        },



        {
            'id': 7,
            'img': 'graphicdesign.png',
            'heading': 'Content Management',
            'desc': 'The task at hand involves the establishment and customization of content management systems for clients, enabling them to conveniently modify and update the content of their websites.',
            delay: '800'
        },
    ]

    return (
        <div id='services' className='w-[100%] bg-neutral-00 mx-auto py-24 bg-fixed'
            style={{
                backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-geometric-background_23-2150853539.jpg?t=st=1705695451~exp=1705699051~hmac=da54c495f5dece263f6a87afad98660e2dd6447bc7fc4c69cebd93be649d1c11&w=996)'
                
            }}
        >
            {/* <div class="custom-shape-divider-top-1705513934"
                data-aos="fade-out"
                data-aos-duration="3000"
                data-aos-delay="300">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div> */}
            <section className="text-[#fff4d6] body-font w-[80%] mx-auto">
                <div className="container px-5 mx-auto">

                    <h2 className='lg:text-3xl text-xl mb-5 font-bold text-center px-5 text-[#908a76] tracking-wider'>
                        <span data-aos="zoom-out-right" data-aos-delay="100">Offer</span><span data-aos="zoom-out-right" data-aos-delay="200"> Professional</span><span className="lg:text-4xl text-2xl text-[#fff4d6]" data-aos="zoom-out-right" data-aos-delay="300"> Services</span></h2>
                    <div className="flex flex-wrap -m-4">
                        {services.map(data => {
                            return (
                                <div key={data.id} className="py-10 px-5 lg:w-1/3 bg-cover lg:h-[60vh] h-[40vh]"
                                    data-aos="zoom-out-right" data-aos-delay={data.delay}
                                >
                                    <div className="xl:space-y-5 space-y-3 gradient-border1 h-full bg-transparent border-[#908a76] hover:shadow-md hover:shadow-[#fff4d6] transition-all border-[1px] bg-opacity-75 lg:px-10 px-2 pt-10 pb-10 rounded-lg overflow-hidden relative ease-in-out duration-300">
                                        <div className='flex'>
                                            <h1 className="w-full title-font lg:text-xl text-xl items-center lg:my-0 my-auto lg:text-left font-bold  lg:tracking-widest tracking-wide text-[#fff4d6]">{data.heading}</h1>
                                            <div className='w-1/5 h-1/5 lg:mx-0 mx-auto' alt='img'>{data.img}</div>
                                        </div>
                                        <p className="text-balance leading-relaxed text-[#908a76] font-semibold lg:text-left text-sm  tracking-wide">{data.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/*text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-violet-500 to-white */}
            </section>
        </div>
    )
}

export default Services
