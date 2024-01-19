import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants, useScroll } from "framer-motion";

import { Link } from 'react-router-dom';

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


const Navbar = () => {
    const { scrollYProgress } = useScroll()
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    // const [isNavOpen, setIsNavOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    const navbar = [
        // { 'id': '1', 'nav': 'Intro', 'link': '#' },
        { 'id': '2', 'nav': 'About', 'link': '#about' },
        { 'id': '5', 'nav': 'Projects', 'link': '#projects' },
        { 'id': '3', 'nav': 'Services', 'link': '#services' },
        { 'id': '5', 'nav': 'Skills', 'link': '#features' },
        { 'id': '4', 'nav': 'Pricing', 'link': '#pricing' },
        // { 'id': '4', 'nav': 'Contact Us', 'link': '#contack' },
    ];
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const [textcolor, settextcolor] = useState("[#908a76]");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("[#908a76]") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("5rem");
        window.scrollY > 10 ? settextcolor("#6527BE") : settextcolor("[#908a76]");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <nav className='xl:w-[70%] w-[100%] mx-auto backdrop-blur-3xl rounded-full my-5' style={{
            // backgroundColor: navColor,
            // height: navSize,
            // color: textcolor,
            transition: "all 0.5s",
        }}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex items-center justify-between py-2">
                    <motion.div className=" w-full flex items-center container" variants={container} initial="hidden"
                        animate="visible"
                    >
                        <div className="flex-shrink-0">
                            <a href='#' className='flex lg:text-xl text-lg text-[#908a76] font-semibold tracking-wider'>
                                <img src="profile2.png" alt="Profile" className='items-start w-8 bg-[#908a76] mx-auto rounded-full h-full transition-transform' />
                                Naman Bansal</a>
                        </div>
                        <motion.div className="hidden md:block ml-auto ">
                            <div className="ml-10 flex items-baseline space-x-6">
                                {navbar.map(data => {

                                    return (
                                        <motion.a key={data.id}
                                            href={data.link}
                                            className="transition-all relative group tracking-wide px-1 py-2 rounded-md text-[15px] hover:tracking-widest scroll-smooth hover:scroll-auto item hover:text-[#908a76] text-[#fff4d6]" variants={item}
                                        >
                                            <span>{data.nav}</span>
                                            <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 left-1/2 w-0 h-[2px] bg-[#fff4d6] group-hover:w-1/2 group-hover:transition-all "></span>
                                            <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 right-1/2 w-0 h-[2px] bg-[#fff4d6] group-hover:w-1/2 group-hover:transition-all"></span>
                                            <span className="absolute left-0 -bottom-1 w-full rounded-full h-[2px] bg-[#fff4d6] transition-all ease-in-out duration-1000 -z-10 group-hover:h-full group-hover:transition-all"></span>
                                        </motion.a>

                                    )
                                })}

                                <a
                                    href="#contact"
                                    className="tracking-wider items-end justify-end text-[#fff4d6] font-semibold bg-neutral-700 hover:bg-[#fff4d6] hover:text-neutral-900 px-5 py-[5px] rounded-xl text-[15px] transition-all ease-in-out duration-500"
                                >
                                    Get In Touch</a>

                            </div>
                        </motion.div>
                    </motion.div>





                    <motion.section initial={false}
                        animate={isOpen ? "open" : "closed"} className="MOBILE-MENU ml-auto flex lg:hidden md:ml-auto " ref={menuRef}>

                        {/* <motion.div
                            className="HAMBURGER-ICON space-y-2"
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="block h-0.5 w-7 bg-[#6527BE] transition-all ease-in-out duration-1000"></span>
                            <span className="block h-0.5 w-7 bg-[#6527BE] transition-all ease-in-out duration-1000"></span>
                            <span className="block h-0.5 w-7 bg-[#6527BE] transition-all ease-in-out duration-1000"></span>
                        </motion.div> */}
                        <div
                            className={`HAMBURGER-ICON space-y-2 ${isOpen ? "hidden" : "block"}`}
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-4 ml-auto bg-[#fff4d6] "></span>
                            <span className="block h-0.5 w-7 ml-auto bg-[#fff4d6] "></span>
                            <span className="block h-0.5 w-5 ml-auto bg-[#fff4d6] "></span>
                        </div>

                        <div className={isOpen ? "showMenuNav rounded-b-2xl transition-all ease-in-out duration-1000 backdrop-blur-3xl" : "hideMenuNav"}>
                            <div
                                className="absolute top-0 right-0 md:px-10 px-3 py-[2%] transition-all ease-in-out duration-1000 "
                                onClick={() => setIsOpen(false)}
                            >
                                <svg
                                    className="h-9 w-10 text-[#fff4d6] transition-all ease-in-out duration-1000"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <div
                                className={`${isOpen ? 'block' : 'hidden'
                                    } md:hidden transition-all w-full px-2 ease-in-out duration-1000`}
                                id="mobile-Homeu"
                                ref={menuRef}
                            >
                                <motion.div
                                    variants={{
                                        open: {
                                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                                            transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.7,
                                                delayChildren: 0.3,
                                                staggerChildren: 0.05
                                            }
                                        },
                                    }}
                                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                                    className="px-2 py-2 pb-3 space-y-5 sm:px-3 transition-all ease-in-out duration-1000" ref={menuRef}>

                                    <a href='#'
                                        onClick={() => setIsOpen(false)}
                                        className={`flex-shrink-0 flex transition-all ease-in-out duration-100 `}>
                                        <img src="profile2.png" alt="Profile" className='items-start w-8 rounded-full h-full transition-transform' />
                                        <Link to='/' className='lg:text-xl text-[#908a76] text-lg font-semibold tracking-wider'>Naman Bansal</Link>
                                    </a>

                                    {navbar.map(data => {
                                        return (
                                            <motion.a variants={itemVariants} key={data.id}
                                                href={data.link}
                                                onClick={() => setIsOpen(false)}
                                                className="text-[#fff4d6] text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 py-2 rounded-md text-base"
                                            >
                                                {data.nav}
                                            </motion.a>
                                        )
                                    })}
                                    <a
                                        href="#contact"
                                        onClick={() => setIsOpen(false)}
                                        className="w-fit text-[#fff4d6] font-semibold bg-[#908a76] hover:bg-[#fff4d6] transition-all hover:text-[#908a76] block px-5 py-[5px] rounded-xl text-base"
                                    >
                                        Get In Touch
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: [#908a76];
        z-index: 10;
        display: flex;
        flex-direction: column;
        // justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>
            </div>

            {/* Mobile Homeu, toggle classes based on Homeu state */}
            <motion.div
                className="w-[75%] mx-auto fixed h-1 bg-[#fff4d6] progress-bar rounded-full"
                style={{ scaleX: scrollYProgress }}
            />

        </nav>
    );
};

export default Navbar;
