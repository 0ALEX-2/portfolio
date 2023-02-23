import Link from 'next/link';
import React from 'react'
import {Cursor,useTypewriter} from "react-simple-typewriter";
import BackgroundCircle from './BackgroundCircle';

type Props = {}

const Hero = (props: Props) => {
    const [text,count]=useTypewriter({
        words:[
            "Hi, This is MD SAKIL AHMED",
            "Full-stack MERN web developer"
        
        ],
        loop:true,
        delaySpeed:1500,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle/>
        <img className='h-36 w-36 relative rounded-full mx-auto object-cover' src="https://avatars.githubusercontent.com/u/98159898?v=4" alt="Photo" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-slate-500 pb-2 tracking-[15px]'>mern stack developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='red'/>
        </h1>

        <div className='pt-5'>
            <Link href="#about"><button className='heroButton'>About</button></Link>
            <Link href="#experience"><button className='heroButton'>Experience</button></Link>
            <Link href="#skills"><button className='heroButton'>Skills</button></Link>
            <Link href="#projects"><button className='heroButton'>Projects</button></Link>
            <Link href="#contact"><button className='heroButton'>contact</button></Link>
        </div>

        </div>
       
    </div>
  )
}

export default Hero