import React from 'react'
import sky from '../assets/sky.jpg';
import mountain3 from '../assets/mountain-3.png'
import mountain2 from '../assets/mountain-2.png'
import mountain1 from '../assets/mountain-1.png'
import planets from '../assets/planets.png'
import { motion, useScroll, useSpring, useTransform } from 'motion/react';




const ParalaxBaground = () => {


    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress,{damping:50})
    const mountainY3 = useTransform(x,[0,0.5],["0","5%"])
    const mountainY2 = useTransform(x,[0,0.5],["0","17%"])
    const mountainY1 = useTransform(x,[0,0.5],["0","10%"])
    const planetsX = useTransform(x,[0,0.5],["0","2%"])


  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'> 
            
            
            {/* background-sky */}
             <div className='absolute inset-0 w-full h-screen -z-50'
                  style={{backgroundPosition:"bottom",backgroundSize:"cover", backgroundImage:`url(${sky})`}}
             />

            {/* Mountain Layer-3 */}
             <motion.div  className='absolute inset-0 w-full h-screen -z-40'
                  style={{backgroundPosition:"bottom",backgroundSize:"cover", backgroundImage:`url(${mountain3})`,y:mountainY3}}/>

             {/* planets */}
             <motion.div   className='absolute inset-0 w-full h-screen -z-30'
                  style={{backgroundPosition:"bottom",backgroundSize:"cover", backgroundImage:`url(${planets})`,y:planetsX}} />

             {/* mountain layer-2 */}
             <motion.div   className='absolute inset-0 w-full h-screen -z-20'
                  style={{backgroundPosition:"bottom",backgroundSize:"cover", backgroundImage:`url(${mountain2})`,y:mountainY2}} />

             {/* mountain layer-1 */}
             <motion.div   className='absolute inset-0 w-full h-screen -z-10'
                  style={{backgroundPosition:"bottom",backgroundSize:"cover", backgroundImage:`url(${mountain1})`,y:mountainY1}} />

        </div>
    </section>
  )
}

export default ParalaxBaground