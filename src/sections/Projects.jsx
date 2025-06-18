import React, { useState } from 'react'
import { myProjects } from '../Constants'
import Project from '../Components/Project'
import { motion, useMotionValue, useSpring } from 'motion/react'




const Projects = () => {


  const [Preview, setPreview] = useState(null)

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x,{damping:10,stiffness:50});
  const springY = useSpring(y,{damping:10,stiffness:50});


  const handlemouse = (e)=>{
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  }

  return (
    <section id='projects' onMouseMove={handlemouse} className='c-space section-spacing relative'>
        <h2 className='text-heading'>My Projects</h2>
        <div className='bg-gradient-to-r  from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full '></div>
        {myProjects.map((project)=>(
           <Project key={project.id} {...project} setPreview={setPreview} />
        ))}

{  Preview  &&     (<motion.img 
        src= {Preview}
        style={{x:springX,y:springY}}
        className='fixed left-0 top-0 h-56 object-cover z-50 rounded-lg shadow-lg pointer-events-none w-80 hidden sm:block '/>)
}
       

    </section>
)
}

export default Projects