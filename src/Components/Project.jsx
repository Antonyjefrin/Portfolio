import React, { useState } from "react";
import arrowRight from "../assets/arrow-right.svg";
import ProjectDetails from "./ProjectDetails";



const Project = ({title,tags,herf,image,description,subDescription,setPreview}) => {

  const [isHidden, setisHidden] = useState(false)

  return (

    <>

    <div className="flex-wrap items-center py-10 gap-7 justify-between space-y-14 sm:flex sm:space-y-0 "
    onMouseEnter={()=>setPreview(image)}
    onMouseLeave={()=>setPreview(null)}
    >
      <div>
        <p className="text-2xl ">{title}</p>
        <div className="flex gap-5 mt-2 text-sand w-full">
             
             {tags.map((tag)=>(
                <span key={tag.id}>{tag.name}</span>
             ))}
              
        </div>
      </div>
      <button
      onClick={()=>setisHidden(true)}
      className="flex items-center gap-1 cursor-pointer hover-animation ">
        Read more
        <img src={arrowRight} alt="" />
      </button>
      <div className='bg-gradient-to-r  from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full '></div>
    </div>
{isHidden &&   <ProjectDetails title = {title} description={description} image={image} subDescription = {subDescription} 
     herf = {herf} tags={tags} closeModel = {()=>setisHidden(false)}
    />}
    </>
  );
};

export default Project;
