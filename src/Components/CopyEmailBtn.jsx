import React, { useState } from "react";
import Copy from "../assets/copy.svg";
import CopyDone from "../assets/copy-done.svg"
import { AnimatePresence, motion } from "motion/react";
const CopyEmailBtn = () => {

    

    const [isCopied, setisCopied] = useState(false);
    
    const email = "antonyjefrin022003@gmail.com";

    const copyToClipBoard = ()=>{
        navigator.clipboard.writeText(email);
        setisCopied(true);
    }

    setTimeout(()=>{
        setisCopied(false);
    },3000)

  return (
    <motion.button
    whileHover={{y:-10}}
    whileTap={{scale:1.2}}
    onClick={copyToClipBoard}
    className="bg-black sm:px-3 sm:py-4 rounded-full sm:w-[15rem] font-bold text-[0.9rem] py-3 px-2 w-[12rem]">
   
     
<AnimatePresence mode="wait">
        {isCopied ? 
          <motion.p
          key="copied"
          initial={{opacity:0,x:-10}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,y:-10}}
          transition={{duration:0.1,ease:"easeInOut"}}
          className="flex items-center justify-center gap-2 cursor-pointer">
          <img className="w-5 " src={CopyDone} alt="" />
          Email Adderss Copied
       </motion.p>

       :
       <motion.p
       key="copy"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:0.1}}
       className="flex items-center justify-center gap-2 cursor-pointer">
          <img className="w-5 " src={Copy} alt="" />
          Copy Email Address
       </motion.p>}
</AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailBtn;
