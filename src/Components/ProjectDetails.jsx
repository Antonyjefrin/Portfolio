import React from "react";
import cross from "../assets/close.svg";
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  tags,
  herf,
  image,
  closeModel
}) => {
  return (
    <div className="h-full w-full fixed inset-0 flex items-center justify-center backdrop-blur-sm overflow-hidden ">
      <motion.div
         
         initial={{opacity:0,scale:0.5}}
         animate={{opacity:1,scale:1}}

        className="max-w-2xl relative border shadow-sm rounded-2xl 
        bg-gradient-to-l from-midnight to-navy border-white/10
        "
      >
        <button
        onClick={closeModel}
        className=" p-2 absolute rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500">
          <img className="h-6 w-6" src={cross} alt="" />
        </button>

        <img className="w-full rounded-2xl" src={image}/>
        <div className="mt-5 ml-5">
          <h5 className="text-2xl font-bold">{title}</h5>
          <p className="mt-2 text-neutral-500">{description}</p>
          {subDescription.map((desc)=>(
            <p className="text-neutral-500 mt-1">{desc}</p>
          ))}
        </div>
        <div className="flex items-center justify-between w-full ml-5 mt-3 mb-4">
           <div className="flex gap-3 ">
                {tags.map((tag)=>(
                  <img 
                  className="sm:h-10 sm:w-10 h-7 w-7 hover-animation"
                  key={tag.id} src={tag.path} alt={tag.name} />
                ))}
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
