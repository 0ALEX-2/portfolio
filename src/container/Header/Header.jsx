
import React from 'react'
import {Cursor,useTypewriter} from "react-simple-typewriter";
import BackgroundCircle from '../../components/BackgroundCircle/BackgroundCircle';



const Header = () => {

  const [text]=useTypewriter({
    words:[
        "Hi, This is MD SAKIL AHMED",
        "Full-stack MERN web developer"
    
    ],
    loop:true,
    delaySpeed:1500,
})
  return (
    <div className='pb-10 h-screen flex flex-col space-y-8 items-center justify-center text-center pt-[330px]'>
     
    <BackgroundCircle/>
    <img className='h-36 w-36 relative rounded-full mx-auto object-cover' src="https://avatars.githubusercontent.com/u/98159898?v=4" alt="Photo" />
    <div className='z-30'>
        <p className='text-lg font-extrabold uppercase text-slate-500 pb-2 tracking-[5px] lg:tracking-[15px]'>web developer</p>
    <h1 className='text-4xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3 text-blue-700'>{text}</span>
        <Cursor cursorColor='red'/>
    </h1>
   </div>
   </div>
  );
};

export default Header;
