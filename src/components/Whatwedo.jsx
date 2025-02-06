import React from "react";
import { FaUsers, FaBullhorn, FaLaptopCode } from "react-icons/fa";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

const Whatwedo = ({scrollYProgress}) => {
  const why = [
    {
      name: "Content Creation",
      description:
        "Create high-quality, engaging content that resonates with your audience and strengthens your brand identity.",
      icon: FaLaptopCode, // Replace this with a content-related icon
    },
    {
      name: "Web Development",
      description:
        "Design and build custom websites that deliver seamless user experiences and align with your business goals.",
      icon: FaLaptopCode,
    },
    {
      name: "Brand Strategy",
      description:
        "Develop a comprehensive brand strategy to ensure consistent messaging and a strong connection with your audience.",
      icon: FaBullhorn, // Replace this with a branding-related icon
    },

    ,{
      name: "Social Media Marketing",
      description:
        "Boost your brand online presence with effective social media strategies, engaging content, and analytics-driven campaigns.",
      icon: FaBullhorn,
    },
    {
      name: "Search Engine Optimization (SEO)",
      description:
        "Improve your website visibility on search engines with cutting-edge SEO techniques, keyword optimization, and performance tracking.",
      icon: FaLaptopCode, // Replace this with an SEO-related icon if needed
    },
    {
      name: "Pay-Per-Click Advertising (PPC)",
      description:
        "Drive traffic and increase conversions with targeted PPC campaigns on platforms like Google Ads and social media.",
      icon: FaUsers, // Replace this with an ad-related icon if needed
    },
    
  ];
  
  // Variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start offscreen and transparent
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and move up
  };

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.section
    // style={{scale, rotate}}
    className=" bg-dark-bg relative px-6 py-6 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center justify-center gap-4">
      <div className="  flex flex-col gap-10   ">
        <h2 className="text-4xl  text-primary-100 font-primary font-bold ">What we do ?</h2>
        <p className="text-base font-secondary text-primary-50 ">
          Zeit is the ultimate partner for brands looking to enhance their
          digital presence. We combine data-driven strategies with creative
          solutions to bring your vision to life.
        </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {why.map(({ name, description, icon: IconComponent }, index) => (
            <motion.div
              key={index}
              className={`p-6 bg-transparent rounded-lg shadow-lg flex flex-col justify-start items-start gap-5 
               
                `}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% is visible
            >
              <div className="flex flex-col gap-2 ">
              <IconComponent className="text-primary-100 text-2xl   " />
              <h3 className="text-lg font-primary text-primary-100 ">{name}</h3>
              </div>
                         
                <p className=" text-primary-50 text-base font-secondary ">{description}</p>
                

            </motion.div>
          ))}
        </div>
      
    </motion.section>
  );
};

export default Whatwedo;
