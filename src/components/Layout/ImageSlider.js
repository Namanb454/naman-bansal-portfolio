import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] ">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative w-[20vw] h-[50vh] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white "> */}
                {/* {card.title} */}
                {/* </p> */}
            </div>
        </div>
    );
};

export default Example;

const cards = [
    { url: 'features/js.png', title: 'JavaScript' },
    { url: 'features/reactjs.png', title: 'React JS' },
    { url: 'features/nextjs.png', title: 'Next JS' },
    { url: 'features/mongodb.png', title: 'MongoDB' },
    { url: 'features/nodejs.png', title: 'Node JS' },
    { url: 'features/django.png', title: 'Django' },
    { url: 'features/auth0.png', title: 'Auth0' },
    { url: 'features/firebase.png', title: 'Firebase' },

];