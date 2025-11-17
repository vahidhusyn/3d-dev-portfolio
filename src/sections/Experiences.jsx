import React from 'react'
import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'


const Experiences = () => {
  return (
    <div className='w-full mx-0 px-0 bg-midnight py-2'>
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experiences