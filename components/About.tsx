import React from 'react'
import {motion} from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col relative md:text-left text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute uppercase tracking-[20px] top-24 text-2xl text-slate-400'>about</h3>

        <motion.img 
        initial={{
            x: -200,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            x:0,
            opacity:1
        }}

        className="mt-20 md:mt-0 flex-shrink-0 object-cover rounded-lg h-96 w-64 xl:w-[500px] xl:h-[600px] xl:-mb-20"
        src="https://avatars.githubusercontent.com/u/98159898?v=4" alt="image" />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[red]'>little</span> background</h4>
            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, labore commodi quia sed quis harum, vel quasi, libero tempore doloribus omnis? Ut aspernatur iusto inventore rem. Voluptates cumque illum quos at vero possimus doloremque, ipsum voluptatum modi et iste nostrum molestias velit sapiente debitis quibusdam saepe laborum. Ipsum, mollitia aliquid!</p>
        </div>
    </div>
  )
}

export default About