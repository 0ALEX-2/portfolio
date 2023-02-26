import React from 'react'
import {motion} from "framer-motion"


const BackgroundCircle = () => {
  return (
    <motion.div initial={{
      opacity:0,
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
      borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{
      duration:2.5,
    }} className='relative flex justify-center items-center'>
        <div className='absolute border border-[#686fcc] rounded-full h-[250px] w-[250px] mt-52 animate-ping'/>
        <div className='border border-[#2153af] rounded-full h-[350px] w-[300px] absolute mt-52 animate-pulse'/>
        <div className='border border-[#2153af] rounded-full h-[450px] w-[400px] mt-52 absolute animate-pulse'/>
        <div className='border border-[#2153af] rounded-full h-[550px] w-[500px] mt-52 absolute animate-pulse'/>
        <div className='border border-[#af2139] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse absolute'/>
        <div className='border border-[#9eb8e7] rounded-full h-[800px] w-[800px] mt-52 absolute'/>
    </motion.div>
  )
}

export default BackgroundCircle