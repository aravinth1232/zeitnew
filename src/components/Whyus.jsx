import React from "react";
import { FaUsers, FaBullhorn, FaLaptopCode } from "react-icons/fa";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

const Whyus = ({scrollYProgress}) => {
  const why = [
    {
      name: "Influencer Network",
      description:
        "We work with a wide network of influencers across various niches to help you reach your target audience with authentic and engaging content.",
      icon: FaUsers,
    },
    {
      name: "Creative Campaigns",
      description:
        "Our team specializes in crafting tailored marketing campaigns that resonate with your audience, driving higher engagement and conversions.",
      icon: FaBullhorn,
    },
    {
      name: "Website Development",
      description:
        "From strategy to design, we build websites that are not only visually stunning but optimized for performance and user experience.",
      icon: FaLaptopCode,
    },
  ];

  // Variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start offscreen and transparent
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and move up
  };

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0])

  return (
    <motion.section
    style={{scale}}
    className="h-screen bg-light-bg sticky top-0  px-6 py-6 md:px-12 md:py-12 flex flex-row items-center justify-center gap-10">
      <div className="  flex flex-col gap-10   ">
        <h2 className="text-4xl  text-primary-500 font-primary font-bold ">Why Zeit?</h2>
        <p className="text-base font-secondary  text-gray-600 opacity-0">
          Zeit is the ultimate partner for brands looking to enhance their
          digital presence. We combine data-driven strategies with creative
          solutions to bring your vision to life.
        </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {why.map(({ name, description, icon: IconComponent }, index) => (
            <motion.div
              key={index}
              className={`p-6 bg-primary-50 rounded-lg shadow-lg flex flex-col gap-4 
                ${index=== 2  ? "col-start-1 col-end-3" : ""}
                `}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% is visible
            >
              <IconComponent className="text-primary-500 text-4xl  opacity-0 " />
              <h3 className="text-xl font-bold text-light-text-primary font-primary">{name}</h3>
              <p className="text-gray-600 opacity-0">{description}</p>
            </motion.div>
          ))}
        </div>
      
    </motion.section>
  );
};

export default Whyus;
