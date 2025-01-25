import React from "react";
import { FaUsers, FaBullhorn, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Whyus = () => {
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

  return (
    <section className="py-16 container mx-auto text-center">
      <div className="  ">
        <h2 className="text-4xl font-bold text-red-500 mb-8">Why Zeit?</h2>
        <p className="text-lg mb-12">
          Zeit is the ultimate partner for brands looking to enhance their
          digital presence. We combine data-driven strategies with creative
          solutions to bring your vision to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {why.map(({ name, description, icon: IconComponent }, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% is visible
            >
              <IconComponent className="text-red-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-red-500 mb-4">{name}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyus;
