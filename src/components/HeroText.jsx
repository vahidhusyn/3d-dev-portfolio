import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react';


const HeroText = () => {
    
const words=["Secure","Modern", "Scalable"];

const variants={
    hidden:{opacity:0,x:-50},
    visible:{opacity:1,x:0},
}
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        {/*Desktop View*/}
        <div className='flex-col hidden md:flex c-space'>
            <motion.h1
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1}} 
            className='text-4xl [text-shadow:_0_4px_8px_rgba(255_51_51)] font-medium'>Hi, I am Vahid.</motion.h1>
            <div className='flex flex-col items-start'>
                <motion.p
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.2}} 
                className='text-5xl font-medium text-neutral-300 [text-shadow:_0_4px_8px_rgba(255_51_51)]'>A Developer obsessed with</motion.p>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.5}}
                ><FlipWords 
                className='[text-shadow:_0_4px_8px_rgba(255_51_51)] font-black text-8xl'
                words={words}/></motion.div>
                <motion.p
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.8}}
                className='text-4xl font-medium text-neutral-300 [text-shadow:_0_4px_8px_rgba(255_51_51)]'>Web Solutions.</motion.p>
            </div>
        </div>
        {/* Mobile View */}
        <div className='flex flex-col space-y-6 md:hidden'>
            <motion.p
            variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.2}}
                className='text-4xl [text-shadow:_0_4px_8px_rgba(255_51_51)] font-medium'>Hi, I am Vahid</motion.p>
            <div>
                <motion.p
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.5}}
                className='text-5xl font-black text-neutral-300 [text-shadow:_0_4px_8px_rgba(255_51_51)]'>Building</motion.p>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.8}}
                >
                <FlipWords
                className="[text-shadow:_0_4px_8px_rgba(255_51_51)] font-bold text-white text-7xl"
                words={words}/>
                <p className='text-4xl font-black text-neutral-300 [text-shadow:_0_4px_8px_rgba(255_51_51)]'>Web Apps</p>
                </motion.div>
                
            </div>
        </div>
    </div>
  )
}

export default HeroText
