import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Example = () => {

    return (
        <div className="">
            {/* <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll down
                </span>
            </div> */}
            <HorizontalScrollCarousel />
            {/* <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll up
                </span>
            </div> */}
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] w-[100%]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden mx-auto xl:w-fit w-[100%]">
                <motion.div

                    style={{ x }} className={`flex gap-4 group`} >
                    {cards.map((card) => {
                        return <Card card={card} key={card.id}

                        />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card, index }) => {
    return (
        <motion.div

            key={card.id}
            className="hover:backdrop-blur-sm group-hover:scale-50 group-hover:transition-transform group-hover:ease-in-out group-hover:duration-700 hover:!scale-125 hover:z-10 hover:transition-transform hover:ease-in-out hover:duration-700 relative lg:w-[20vw] w-80 h-[60vh] overflow-hidden shadow-md shadow-white"
        >

            <div className="h-[30vh] w-[100%] mx-auto">
                <motion.img
                    src={card.url}
                    className=" inset- z- w-[100%] aspect-[16/9]  my-auto mx-auto bg bg-no-repeat transition-transform duration-300 group-hover:scale-"
                />
            </div>
            <div className=" inset- z-">
                <div className="flex">

                    <p className="text-lg mx-auto font-black uppercase text-white h-10 my-auto group-transition-transform group-ease-in-out group-duration-300 group-hover:tracking-wider">
                        {card.title}
                    </p>

                    <div class="w-fit mx-auto group relative">
                        <Link to={card.link}>
                            <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 stroke-white hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            <span class="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Code<span>
                            </span></span>
                        </Link>
                    </div>
                </div>
                <p className=" text-xs group-hover:text-[10px] scale-[0] group-hover:scale-90 font-thin uppercase text-white tracking-wider">
                    {card.description}
                </p>



            </div>
        </motion.div >
    );
};

export default Example;

const cards = [
    { url: 'projects/sitescript.png', title: 'siteScript', description: 'Platform is designed to enhance the user experience and offers a multitude of features to achieve this goal.', link: 'https://sitescript.in', delay: 100 },
    { url: 'projects/Apninews.png', title: 'Apni News', description: 'News application using news api, helps to get 24 hours latest news build on ReactJS.', link: 'https://github.com/Namanb454/Apni-News', delay: 200 },
    { url: 'projects/Trendify.png', title: 'Trendify', description: 'Led the development of an ecommerce web application, driving a substantial 35% boost in online sales for smart accessories. Successfully integrated and optimized features with Sanity CMS, resulting in a 20% increase in user engagement.', link: 'https://github.com/Namanb454/MERNStackEcommerce', delay: 300 },
    { url: 'projects/ModelVerse.jpg', title: 'Trendify', description: 'Led the development of an ecommerce web application, driving a substantial 35% boost in online sales for smart accessories. Successfully integrated and optimized features with Sanity CMS, resulting in a 20% increase in user engagement.', link: 'https://model-verse-ai.vercel.app/', delay: 300 },
    {
        url: 'projects/Medlinc.png', title: 'Medlinc', description: "Deigned and implemented a web-based healthcare application that provides a comprehensive range of medical services on a unified platform. Provides 3 distinct services: medical consultation, laboratory testing, and medical product delivery. Offers essential services, including 24/7 emergency assistance (SOS).", link: 'https:/ / github.com / Namanb454 / HealthCare', delay: 400
    },
];