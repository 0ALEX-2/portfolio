import React from 'react'
import Skill from '../../components/Skill/Skill'


//type Props = {}

const Skills = () => {

  const data=[
    {
      img:"https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
      status:"80%"
    },
    {
      img:"https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
      status:"75%"
    },
    {
      img:"https://w7.pngwing.com/pngs/241/797/png-transparent-cascading-style-sheets-css3-javascript-logo-world-wide-web-blue-angle-text.png",
      status:"70%"
    },
    {
      img:"https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
      status:"80%"
    },
    {
      img:"https://img.icons8.com/color/480/redux.png",
      status:"85%"
    },
    {
      img:"https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
      status:"90%"
    },
    {
      img:"https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg",
      status:"35%"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU",
      status:"70%"
    },
    {
      img:"https://image.pngaaa.com/770/3801770-middle.png",
      status:"50%"
    },
    {
      img:"https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol.png",
      status:"75%"
    },
    {
      img:"https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      status:"70%"
    },
    {
      img:"https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg",
      status:"60%"
    }, {
      img:"https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
      status:"80%"
    }
  ]
  return (
    <div className=' pt-[100px] flex flex-col relative md:text-left text-center  max-w-[2000px] justify-center mx-auto items-center pb-10'>
         <h3 className='uppercase tracking-[20px] top-24 text-2xl text-slate-400 '>Skills</h3>
         
         <p className=' top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill to know current progress</p>

         <div className='grid grid-cols-3 gap-5  mt-10 md:grid-cols-4 lg:grid-cols-5'>
           {
            data.map((ele,index)=>(   
            <Skill
            key={index}
           {...ele}
            />
             
            ))
           }
         </div>
    </div>
  )
}

export default Skills