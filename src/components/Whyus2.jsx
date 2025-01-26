import React from "react";
import { FaUsers, FaBullhorn, FaLaptopCode } from "react-icons/fa";
import { useScroll, useTransform, motion } from "framer-motion";

const Whyus2 = ({ scrollYProgress }) => {
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

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  const scale = useTransform(scrollYProgress, [0, 0], [1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0])

  return (
    <motion.section 
    
    className="h-screen bg-transparent relative px-6 py-6 md:px-12 md:py-12 flex flex-row items-center justify-center gap-10">
      <div className="flex flex-col gap-10">
        {/* Animated heading */}
        <motion.h2
          className="text-4xl text-primary-500 font-primary font-bold  opacity-0"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Zeit?
        </motion.h2>

        {/* Animated paragraph */}
        <motion.p
          className="text-base font-secondary text-gray-600"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 1 }}
        >
          Zeit is the ultimate partner for brands looking to enhance their
          digital presence. We combine data-driven strategies with creative
          solutions to bring your vision to life.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {why.map(({ name, description, icon: IconComponent }, index) => (
          <motion.div
            key={index}
            className={`p-6 bg-transparent flex flex-col gap-4 
                ${index === 2 ? "col-start-1 col-end-3" : ""}
                `}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 1 }}

            // viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% is visible
          >
            <IconComponent className="text-primary-500 text-4xl" />
            <motion.h3
              className="text-2xl font-bold text-light-text-primary opacity-0 "
            //   variants={cardVariants}
            >
              {name}
            </motion.h3>
            <motion.p className="text-gray-600 font-secondary" variants={cardVariants}>
              {description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Whyus2;
