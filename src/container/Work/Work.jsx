import React, { useEffect, useState } from 'react'
import ProjectCard from '../../components/projectCard/ProjectCard'
import {motion} from "framer-motion"


const initialData=[
  {
    id:1,
    type:"collab",
    img:"https://admin.meesho.io/content/images/2021/09/1_qkU27P3hb5WKBN1RcDn39w.png",
    github:"https://github.com/santoshy1101/questionable-milk-2896",
    deployed:"https://poetic-cobbler-9476b0.netlify.app/",
    title:"Clone of e-commerce website MEESHO",
    about:"This is a group project. We build this website with the help of React.js and for state management we use React-Redux and for data base we deployed our data on vercel and use that link to fetch data. For styling we used Tailwind css. We deploy this web-app on netlify. All the pages of this website is not mobile responsive yet.",
    techUsed:[
      "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
      "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
      "https://w7.pngwing.com/pngs/241/797/png-transparent-cascading-style-sheets-css3-javascript-logo-world-wide-web-blue-angle-text.png",
      "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
      "https://img.icons8.com/color/480/redux.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU"
    ]
  },
  {
    id:2,
    type:"collab",
    img:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/09/03110157/blog-1.jpg",
    github:"https://github.com/Harshank11/PharmEasy",
    deployed:"https://enchanting-bonbon-ad5692.netlify.app/homepage/index.html",
    title:"Clone of e-commerce medicine selling website PharmEasy",
    about:"This is a collaborative work. During building this web site we use HTML, Javascript and CSS for data base we deployed our data on vercel and use that link to fetch data. This website is not mobile responsive yet.",
    techUsed:[
      "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
      "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
      "https://w7.pngwing.com/pngs/241/797/png-transparent-cascading-style-sheets-css3-javascript-logo-world-wide-web-blue-angle-text.png",
    ]
  },
  {
    id:3,
    type:"collab",
    img:"https://s3-eu-west-1.amazonaws.com/vogue-careers/talent/wordpress/wp-content/uploads/2020/03/YNAP-SS20-Banner-16x9-1.jpg",
    github:"https://github.com/saikhmirsat/Yoox.com-Clone",
    deployed:"https://yoox-com.vercel.app/",
    title:"Clone of e-commerce website YOOX",
    about:"This is a collaborative project. During building this website we use React.js and for state management we use context api and for data base we deployed our data on vercel and use that link to fetch data with the help of axios. We deploy the web app on vercel.  All the pages of this website is not mobile responsive yet.",
    techUsed:[
      "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
      "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
      "https://w7.pngwing.com/pngs/241/797/png-transparent-cascading-style-sheets-css3-javascript-logo-world-wide-web-blue-angle-text.png",
      "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    ]
  },
  {
    id:4,
    type:"single",
    img:"https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/9affffb4ec5c115b8f742cd34b663cff/best_to_do_apps.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760",
    github:"https://github.com/0ALEX-2/todo-assignment",
    deployed:"https://peaceful-fenglisu-8fbd55.netlify.app/",
    title:"Full-stack MERN Todo Web App",
    about:"This is a full-stack MERN web app. The frontend is made up of ReactJS and for styling I used Tailwind CSS. And for backend I used NodeJS, ExpressJS and MongoDB database. I Deployed the app on Netlify for frontend and Render.com for backend.",
    techUsed:[
      "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
      "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
      "https://w7.pngwing.com/pngs/241/797/png-transparent-cascading-style-sheets-css3-javascript-logo-world-wide-web-blue-angle-text.png",
      "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
      "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png",
      "https://w7.pngwing.com/pngs/232/470/png-transparent-circle-js-node-node-js-programming-round-icon-popular-services-brands-vol-icon-thumbnail.png",
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-thumbnail.png",
      "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
    ]
  },
 
]


const Work = () => {

const [data,setData]=useState(initialData)
let groupProjects=[]
let ownProjects=[]

initialData.map((ele)=>{
  if(ele.type==="collab"){
    groupProjects.push(ele)
  }else if(ele.type==="single"){
    ownProjects.push(ele)
  }
})

const handleGroupProjects=()=>{
setData(groupProjects)
}
const handleOwnProjects=()=>{
setData(ownProjects)
}
 
  return (
    <div className=' pt-[100px] md:mt-0 flex flex-col text-center px-10 justify-evenly mx-auto items-center mb-[100]'>
      
      <p className='uppercase tracking-[20px]  text-2xl text-slate-400'>projects</p>
 
          <div className='flex justify-evenly gap-2 lg:w-[60%] mt-8 '>

           <div><button className='rounded-full bg-blue-500 px-4 text-white font-semibold hover:bg-blue-700' onClick={()=>setData(initialData)}>ALL PROJECTS</button></div>
           <div><button className='rounded-full bg-blue-500 px-4 text-white font-semibold hover:bg-blue-700' onClick={handleGroupProjects}>GROUP PROJECTS</button></div>
           <div><button className='rounded-full bg-blue-500 px-4 text-white font-semibold hover:bg-blue-700' onClick={handleOwnProjects}>MY OWN PROJECTS</button></div>
          
          </div>

      
    <motion.div 
     initial={{
      y: -200,
      opacity: 0,
    }}
    transition={{
      duration: 1.2,
    }}
    whileInView={{
      x: 0,
      opacity: 1,
    }}
    className='md:grid mt-[250px] grid-cols-2 lg:grid-cols-3  gap-5 items-center justify-center md:w-[80%] '>
      {
        data && data.map((ele,index)=>(
          <div key={index} className='mt-10 md:mt-0'>
            <ProjectCard key={ele.id} {...ele}/>
          </div>
          
        ))
      }
    
    </motion.div>
    </div>
  )
}

export default Work