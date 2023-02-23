import React from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion"

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div className="flex flex-row items-center "
      initial={{
        x:-500,
        opacity:0,
        scale:1
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5
      }}
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div className="flex flex-row items-center text-gray-300 cursor-pointer"
      initial={{
        x:500,
        opacity:0,
        scale:1
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5
      }}
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="hidden md:inline uppercase text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
