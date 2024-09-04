import React from 'react'
import arrow from "./media/arrow.png"
import { useInView } from "framer-motion";
import { useRef } from 'react'
import {
  ChakraProvider,
  Container,
} from "@chakra-ui/react";
import { motion } from 'framer-motion'
import EarthCanvas from '../canvas/Earth';

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};




export default function Home() {

  return (
    <div className='main'>
      <div className="content">

      <ChakraProvider>
      <Container centerContent maxW={2000}>
      <motion.div
      initial={{ x: 100, opacity: 0, scale: 1 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0,
        ease: [0, 0.5, 0.2, 1.01]
      }}>

            <div className='about-heading-large'>Hey there 👋</div><br/> 
            </motion.div>
      <motion.div
      initial={{ x: -100, opacity: 0, scale: 1 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        ease: [0, 0.5, 0.2, 1.01]
      }}>
            <div className='about-heading'>
            I'm Krishnan, an software developer specializing in Full Stack,<br/>
            Deep Learning and Data Science. 
         </div><br/><br/>
      </motion.div>
      <motion.div
      initial={{ y: 100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.6,
        ease: [0, 0.5, 0.2, 1.01]
      }}>
         <div className='about-heading'>
          As an engineer, I strive to provide unique and optimized solutions <br/>
          to problems from all domains of software development.
         </div>
         </motion.div>
      <br/><br/><br/><br/><br/><br/>
      <motion.div
      initial={{ y: -100, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.9,
        ease: [0, 0.5, 0.2, 1.01]
      }}>
      <div className="link btn" onClick={scrollToBottom}>
          <img src={arrow} height="60px" width="60px" />
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
      </motion.div>
      </Container>
    </ChakraProvider>
        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3,
        delay: 0.3,
        ease: [0, 0.5, 0.2, 1.01] }}
      variants={{
        visible: { x: 0, opacity: 1, scale: 1 },
        hidden: { x: -100, opacity: 0, scale: 1 }
      }}
    >
      
      <br/><br/><br/><br/><br/>
        <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
        <div className='about-content'>
        <p>Welcome to my digital world! I’m a passionate software engineer, blending technology and creativity to craft innovative solutions. Fluent in C++, Python, and Java, I thrive in the dynamic realm of code.</p>

<p>🌟 My expertise? Artificial Intelligence! I’m deeply immersed in AI, from predictive analytics to large language models. The evolving AI landscape keeps me eager to learn and innovate.</p>

<p>💻 Beyond AI, I’m a web development enthusiast. I love creating sleek, user-friendly interfaces and tackling both front-end and back-end challenges. Let’s build something amazing together!</p>
         </div>
         <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'> 
            <EarthCanvas/>
          </div>
          </div>
          <br/><br/><br/><br/><br/><br/>
        </motion.div>

</div>
    </div>

  )
}
