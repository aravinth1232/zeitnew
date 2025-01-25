import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroimage from "../assets/hero2.png";
import { ArrowDownRight, ArrowDownUp, ArrowRightCircle, ArrowRightFromLine, ArrowUp, ChevronRight } from "lucide-react";

const Herosection = () => {
  // Intersection Observer
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit :{ opacity: 0, x: -50 }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit : { opacity: 0, x: 50 },
  };

  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-8 md:gap-16">
      {/* Text Section */}
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
        className="text-center md:text-left md:w-1/2 space-y-6"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-primary-100 font-primary">
          Empowering businesses with <br />
          cutting-edge digital marketing solutions
        </h1>
        <p className="text-primary-50 text-sm md:text-base font-medium text-secondary">
          We help businesses thrive by leveraging the latest in technology and
          strategies to deliver measurable results.
        </p>
        
        <button className=" relative inline-block px-4 py-2 font-bold text-red-500 bg-light-bg  hover:text-dark-text-primary  overflow-hidden group">
      <span className="relative z-10 flex flex-row gap-4">
        <h1>Let&apos;s Connect</h1> 
        <ArrowRightFromLine />
        </span>
     
      {/* Background */}
      <span className="absolute skew-x-[45deg] inset-0 w-full h-full bg-red-500 transform -translate-x-40 group-hover:translate-x-0 transition-transform duration-300 ease-out origin-right"></span>
    </button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageVariants}
        className="md:w-1/2 flex justify-center items-center"
      >
        <img
          className="w-full md:w-3/4 h-auto object-contain rounded-lg"
          src={heroimage}
          alt="Zeit Hero"
          loading="lazy"
        />
      </motion.div>
    </main>
  );
};

export default Herosection;
