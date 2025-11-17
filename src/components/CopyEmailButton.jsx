import { AnimatePresence, motion } from 'motion/react';
import React from 'react'
import { useState } from 'react'

  
const CopyEmailButton = () => {
    const [copied,setCopied] = useState(false);
    const email = "vahidhusyn@gmail.com"
    const copyToClipboard =()=>{
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        }, 2000)
    }

    return (
    <motion.button 
    onClick={copyToClipboard}
    whileHover={{y:-5}}
    whileTap={{scale:1.05}}
    className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'>

        <AnimatePresence mode='wait'>        {copied ? (
            <motion.p
            key="copied"
            initial={{opacity:0,y:-10}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-10}}
            transition={{duration:0.1,ease:"easeInOut"}}
            className='flex items-center justify-center gap-2'>
            <img 
            className='w-5' alt="copy-icon"
            src="assets/copy-done.svg"/>
            Email has been copied</motion.p>)
            :
        (<motion.p className='flex items-center justify-center gap-2'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            key="copy"
            transition={{duration:0.1}}>
            
            
            <img alt='copy icon' className='w-5' src="assets/copy.svg"/>
            Copy Email Address
        </motion.p>)}
        </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton
