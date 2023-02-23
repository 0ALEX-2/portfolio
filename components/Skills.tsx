import React from 'react'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='h-screen flex flex-col relative md:text-left text-center xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center min-h-screen xl:space-y-0'>
         <h3 className='absolute uppercase tracking-[20px] top-24 text-2xl text-slate-400'>Skills</h3>
         <p className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill currently proficiency</p>

         <div className='grid grid-cols-4 gap-5'>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
         </div>
    </div>
  )
}

export default Skills