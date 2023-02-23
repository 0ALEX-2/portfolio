import React from 'react'
import {motion} from "framer-motion"

type Props = {}

const ExperienceCards = (props: Props) => {
  return (
   <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
    <motion.img 
    initial={{y:-100,opacity:0}}
    transition={{duration:1.2}}
    whileInView={{opacity:1,y:0}}
    className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
    src="https://chickensbucket.com/static/media/logo.b0892b338ece9cec9cf1.jpeg" alt="photo" />

   <div className='px-0 md:px-10'>
    <h4 className='text-4xl font-light'>CEO of ChickensBucket</h4>
    <p className='font-bold text-2xl mt-1'>chickensbucket.com</p>
    <div className='flex space-x-2 my-2'>
        {/* tech used */}
        <img className='h-10 w-10 rounded-full' src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt="" />
        <img className='h-10 w-10 rounded-full' src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt="" />
        <img className='h-10 w-10 rounded-full' src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt="" />
        <img className='h-10 w-10 rounded-full' src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt="" />
    </div>
    <p className='uppercase py-5 text-gray-300'>Starting and ending date</p>
    <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li>Summery points</li>
        <li>Summery points</li>
        <li>Summery points</li>
        <li>Summery points</li>
        <li>Summery points</li>
    </ul>
   </div>
   </article>
   
  )
}

export default ExperienceCards