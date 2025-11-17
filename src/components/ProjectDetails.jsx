import {motion} from 'motion/react'
import React from 'react'

const ProjectDetails = ({title, description, subDescription, href, image, tags,closeModal}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center  overflow-hidden backdrop-blur-sm'>
        <motion.div
        initial={{opacity: 0,scale: 0.5}}
        animate={{opacity: 1,scale: 1}}
        
        className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'>
            <button
            onClick={closeModal}
            className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500'>
                <img src="assets/close.svg" className='w-6 h-6'/>
            </button>
            <img src={image} alt={title} className="md:w-md max-sm:w-sm rounded-t-2xl"/>

            <div className='p-5'>
                <h5 className='mb-2 font-bold text-white'>{title}</h5>
                <p>{description}</p>
                {subDescription.map((subDesc,index)=>(
                    <p className='mb-3 font-normal text-neutral-400'>
                    {subDesc}</p>
                    ))}
                <div className='flex items-center justify-between mt-4'>
                    <div className='flex gap-3'>
                        {tags.map((tag)=>(
                            <img
                            src={tag.path}
                            key={tag.id}
                            alt={tag.name}
                            className='rounded-lg size-10 hover-animation'
                            />
                        ))}
                    </div>
                    <a className='inline-flex items-center gap-1 font-medium hover-animation' 
                    href={href}>View Project <img src="assets/arrow-up.svg" className='size-4' />
                        
                    </a>
                </div>
            </div>

        </motion.div>
    </div>
  )
}

export default ProjectDetails