import React, { useEffect, useRef } from "react";
import Herosection from "../components/Herosection";
import Whyus from "../components/Whyus";
import { useScroll, useTransform, motion } from "framer-motion";

import Lenis from 'lenis';
import Whatwedo from "../components/Whatwedo";
import Whyus2 from "../components/Whyus2";
import Form from "../components/Form";

const Home = () => {
  

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect( () => {
    

    const lenis = new Lenis({
      duration: 1.2, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true, // Enable smooth scroll
    });

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [])


  
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <>
    <main 
    ref={container}
    className=" relative  ">
      
        <Herosection scrollYProgress={scrollYProgress} />    
        <Whyus scrollYProgress={scrollYProgress} />
       
        <Whyus2  scrollYProgress={scrollYProgress}/>     
      
    </main>
    <Whatwedo scrollYProgress={scrollYProgress} />
    <Form />



    </>

  );
};

export default Home;
