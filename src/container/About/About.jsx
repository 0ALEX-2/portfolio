import React from "react";
import { motion } from "framer-motion";
import resume from "./resume.pdf";

const About = () => {
  return (
    <div className="pt-[150px] mb-[100px] md:mt-[100px] md:pt-50">
      <h3 className=" uppercase tracking-[20px] top-20 text-2xl text-slate-400 text-center">
        about
      </h3>
      <div className="flex mt-[50px] flex-col relative lg:text-left text-center lg:flex-row  px-10 justify-evenly mx-auto items-center md:w-[80%]">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="mt-10 md:mt-0 flex-shrink-0 object-cover rounded-lg h-96 w-64 xl:w-[500px] xl:h-[600px] xl:-mb-20"
          src="https://avatars.githubusercontent.com/u/98159898?v=4"
          alt="image"
        />

        <div className="space-y-10 px-0 md:px-10 mt-3">
          <h4 className="text-4xl font-semibold text-slate-600">
            Who is this guy?
          </h4>
          <p className="text-2xl font-thin text-slate-600 ">
            A highly motivated and enthusiastic Full Stack Web Developer(MERN)
            with a strong foundation in front-end and back-end technologies.
            Possessing excellent problem-solving and analytical skills, and a
            passion for creating dynamic and engaging websites. Proficient in
            using modern web development frameworks such as React.js, and
            familiar with Redux, Next.js, Firebase, Tailwind css and many more,
            is looking for a role in the similar field to contribute and to
            learn ins and outs of a new industry and provide ample value to it.{" "}
            <a href="#contact" className="text-blue-400">
              Let's build something unique togather!
            </a>{" "}
          </p>

          <div className="mt-5">
            <motion.a
              href={resume}
              download
              className="bg-blue-500 text-2xl p-2 font-bold text-white rounded-md hover:bg-blue-700"
              whileTap={{ scale: 0.6 }}
            >
              Download Resume
            </motion.a>
          </div>

          <div className="flex justify-center space-x-8 md:justify-start items-center">
            <motion.a
              href="https://www.linkedin.com/in/programmersakil/"
              target="_blank"
              whileTap={{scale:0.6}}
            >
              <img
                src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-2003.png"
                alt="linkedin"
                className="w-[100px] p-2 h-[50px] md:w-[150px] md:h-[60px] hover:border border-blue-500 rounded-full"
              />
            </motion.a>

            <motion.a href="https://github.com/0ALEX-2" target="_blank" whileTap={{scale:0.6}}>
              <img
                src="https://pngimg.com/d/github_PNG15.png"
                alt="github"
                className="w-[100px] p-1 h-[50px] md:w-[150px] md:h-[50px] hover:border border-blue-500 rounded-full"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
