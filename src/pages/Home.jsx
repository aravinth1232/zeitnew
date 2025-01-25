import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Herosection from "../components/Herosection";
import Whyus from "../components/Whyus";

const Home = () => {
  const { scrollY } = useScroll();

  // Define scroll ranges for animations
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const whyY = useTransform(scrollY, [300, 600], [100, 0]);
  const whyOpacity = useTransform(scrollY, [300, 600], [0, 1]);

  return (
    <main className="w-full   ">
      {/* Hero Section */}
      <motion.section
        className="bg-dark-bg flex items-center justify-center  "
        style={{
          x: heroY,
          opacity: heroOpacity,
        }}
      >
        <Herosection />
      </motion.section>

      {/* Why Us Section */}
      <motion.section
        className=" bg-light-bg flex items-center justify-center  "
        style={{
          y: whyY,
          opacity: whyOpacity,
        }}
      >
        <Whyus />
      </motion.section>
    </main>
  );
};

export default Home;
