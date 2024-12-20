import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';

const iconVariants = (duration) =>({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2 
            className='my-20 text-center text-4xl'
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}>
                Technologies
        </motion.h2>
        <motion.div 
            className='flex flex-wrap justify-center items-center gap-4'
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x:-100}}
            transition={{duration: 1.5}}>
            <motion.div
                initial= "initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                    <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
                initial= "initial"
                animate="animate"
                variants={iconVariants(3)}
                className='p-4'>
                    <TbBrandNextjs className='text-7xl'/>
            </motion.div>
            <motion.div
                initial= "initial"
                animate="animate"
                variants={iconVariants(5)}
                className='p-4'>
                    <SiJavascript className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div
                initial= "initial"
                animate="animate"
                variants={iconVariants(2)}
                className='p-4'>
                    <FaCss3 className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div 
                initial= "initial"
                animate="animate"
                variants={iconVariants(6)}
                className='p-4'>
                    <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>            
            <motion.div 
                initial= "initial"
                animate="animate"
                variants={iconVariants(4)}
                className='p-4'>
                    <RiTailwindCssFill className='text-7xl text-cyan-600'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
