import React, { useState } from 'react'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Work = () => {



const data=[
  {
    id:1,
    type:"collab",
    img:"https://admin.meesho.io/content/images/2021/09/1_qkU27P3hb5WKBN1RcDn39w.png",
    github:"https://github.com/santoshy1101/questionable-milk-2896",
    deployed:"https://poetic-cobbler-9476b0.netlify.app/",
    title:"Clone of e-commerce website MEESHO",
    about:"We building this web site with the help of React.js and for state management we use React-Redux and for data base we deployed our data on vercel and use that link to fetch data. For styling we used Tailwind css.",
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
    about:"During building this web site we use HTML, Javascript and CSS for data base we deployed our data on vercel and use that link to fetch data.",
    techUsed:[
      "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
      "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
      "https://w7.pngwing.com/pngs/241/797/png-transparent-cascading-style-sheets-css3-javascript-logo-world-wide-web-blue-angle-text.png",
    ]
  },
  {
    id:3,
    type:"collab",
    img:"https://admin.meesho.io/content/images/2021/09/1_qkU27P3hb5WKBN1RcDn39w.png",
    github:"https://github.com/santoshy1101/questionable-milk-2896",
    deployed:"https://poetic-cobbler-9476b0.netlify.app/",
    title:"Clone of e-commerce website MEESHO",
    about:"During building this web site we use React.js and for state management we use React-Redux and for data base we deployed our data on vercel and use that link to fetch data. For styling we used Tailwind css.",
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
    id:4,
    type:"collab",
    img:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/09/03110157/blog-1.jpg",
    github:"https://github.com/Harshank11/PharmEasy",
    deployed:"https://enchanting-bonbon-ad5692.netlify.app/homepage/index.html",
    title:"Clone of e-commerce medicine selling website PharmEasy",
    about:"During building this web site we use HTML, Javascript and CSS for data base we deployed our data on vercel and use that link to fetch data.",
    techUsed:[
      "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
      "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
      "https://w7.pngwing.com/pngs/241/797/png-transparent-cascading-style-sheets-css3-javascript-logo-world-wide-web-blue-angle-text.png",
    ]
  },
]

 
  return (
    <div className=' pt-[100px] md:mt-0 flex flex-col text-center px-10 justify-evenly mx-auto items-center mb-[100]'>
      
      <p className='uppercase tracking-[20px]  text-2xl text-slate-400'>projects</p>
 
      
    <div className='md:grid mt-10 grid-cols-2 lg:grid-cols-3  gap-5 items-center justify-center md:w-[80%] '>
      {
        data && data.map((ele,index)=>(
          <div key={index} className='mt-10 md:mt-0'>
            <ProjectCard key={ele.id} {...ele}/>
          </div>
          
        ))
      }
    
    </div>
    </div>
  )
}

export default Work