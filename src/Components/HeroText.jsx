import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {

  const varinats= {
    hidden:{opacity:0,x:-50},
    show:{opacity:1,x:0},
  };
     
  const words = ["Secure", "Modern", "Scalable"];
  return (
    <div className="mt-20 z-20 md:mt-40 md:text-left text-center rounded-3xl bg-clip-text text-neutral-300 ">
      <div className="flex-col hidden md:flex c-space ">
        <motion.h1 variants={varinats} initial="hidden" animate="show" transition={{delay:1}} className="text-4xl font-medium mb-4">
          Hi I am Jefrin
        </motion.h1>
        <div className="flex flex-col  items-start ">
          <motion.p variants={varinats} initial="hidden" animate="show" transition={{delay:1.2}} className="text-5xl font-medium">
            A Development<br /> Dedicated to Crafting
          </motion.p>
          <motion.div variants={varinats} initial="hidden" animate="show" transition={{delay:1.4}}>
            <FlipWords
              className="text-8xl font-black text-white"
              words={words}
            />
          </motion.div>
          <motion.p variants={varinats} initial="hidden" animate="show" transition={{delay:1.6}} className="text-2xl font-medium">web solutions</motion.p>
        </div>
      </div>

      <div className=" lex flex-col md:hidden  space-y-6">
        <motion.p variants={varinats} initial="hidden" animate="show" transition={{delay:1}} className="text-3xl sm:text-4xl font-medium text-neutral-300">
          Hi I am Jefrin
        </motion.p >
        <div>
          <motion.p variants={varinats} initial="hidden" animate="show" transition={{delay:1.2}} className="text-3xl sm:text-4xl font-medium text-neutral-300">
            Building
          </motion.p >
          <motion.div variants={varinats} initial="hidden" animate="show" transition={{delay:1.4}}>
            <FlipWords
            className="text-6xl sm:text-7xl font-black text-white"
            words={words}/>
            </motion.div>

          <motion.p variants={varinats} initial="hidden" animate="show" transition={{delay:1.6}} className="text-3xl sm:text-4xl font-medium text-neutral-300">
            Web Applications
          </motion.p >
        </div>
      </div>
    </div>
  );
};

export default HeroText;
