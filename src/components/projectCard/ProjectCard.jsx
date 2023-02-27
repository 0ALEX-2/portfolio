import {motion} from "framer-motion"

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
   
  } from "@material-tailwind/react";
  
   
  export default function ProjectCard({img,title,about,techUsed,github,deployed}) {
    return (
      <Card 
      className="w-full shadow-lg h-[700px]">
        <CardHeader floated={false} color="blue-gray">
          <motion.img
           initial={{
            x: 200,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
            src={img}
            alt="ui/ux review check"
            className="h-[300px]"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
             {title}
            </Typography>
           
          </div>
          <Typography color="gray" className='md:h-[100px]'>
           {about}
          </Typography>
          <motion.div 
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
          className="group mt-[50px] inline-flex flex-wrap items-center gap-3">
           {
         techUsed.map((ele,index)=>( 
            <div key={index} className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-1 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
               <img src={ele} alt="logos" className="h-10 w-10"/> 
          </div>
         ))}
           
          </motion.div>
        </CardBody>
        <CardFooter className="mb-2 flex items-end">
            <div className="w-full flex space-x-1 items-end">
            <motion.a href={github} target="_blank" className="bg-blue-400 w-[50%] rounded-md text-2xl font-bold text-white hover:bg-blue-600 py-3" whileTap={{scale:0.6}}>
            GitHub
          </motion.a>
          <motion.a href={deployed} target="_blank" className="bg-blue-400 w-[50%] rounded-md text-2xl font-bold text-white hover:bg-blue-600 py-3" whileTap={{scale:0.6}}>
            Demo
          </motion.a>
            </div>
         
        </CardFooter>
      </Card>
    );
  }