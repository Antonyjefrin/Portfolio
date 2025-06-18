import React, { useRef } from "react";
import codingImg from "../assets/coding-pov.png";
import SkillDrag from "../Components/SkillDrag";
import ReactLogo from "../assets/logos/react.svg"
import Tailwind from "../assets/logos/tailwindcss.svg"
import NodeJs from "../assets/logos/nodejs-icon.svg"
import Git from "../assets/logos/git.svg"
import CopyEmailBtn from "../Components/CopyEmailBtn";
import Frameworks from "../Components/Frameworks";
import { Globe } from "../Components/Globe";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";




const About = () => {


  const reference = useRef()

const skills = [
  { containerRef:reference,   style:  { rotate: "50deg", top: "40%", left: "-1%" }, text: "JavaScript" },
  { containerRef:reference,   style:  { rotate: "30deg", top: "13%", right: "40%"}, text: "Redux" },
  { containerRef:reference,   style:  { rotate: "-70deg", top: "40%", right: "1%"}, text: "Three JS" },
  { containerRef:reference,   style:  { rotate: "-50deg", bottom: "20%", left: "30%" }, text: "SQL" },
  { containerRef:reference,   style:  { rotate: "-50deg", bottom: "20%", left: "30%" }, image: ReactLogo },
  { containerRef:reference,   style:  { rotate: "-50deg", top: "50%", left: "5%" }, image: Tailwind },
  { containerRef:reference,   style:  { rotate: "-50deg", top: "20%", right: "25%" }, image: NodeJs },
  { containerRef:reference,   style:  { rotate: "-50deg", bottom: "5%", right: "25%" }, image: Git },
];

  return (
    <section id="about" className="c-space section-spacing ">
      <h2 className="text-heading">About me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-3">
        {/* grid1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={codingImg}
            alt="image"
            className="absolute scale-[1.75] -right-[12rem] bottom-[2rem] md:scale-[3] md:-right-[13rem]
                md:bottom-[13rem] lg:scale-[2.4]           
            "
          />
          
          <div className="z-10">
             <p className="font-bold text-xl">Hi I'm Antony Jefrin</p>
             <p className="text-[0.8rem] sm:text-[1rem] mt-3 font-normal">
              Frontend developer skilled in JavaScript, React, and Next.js, with a passion for building responsive, animated web experiences. Focused on clean design, performance, and continuous learning.</p>
          </div>

        </div>

        <div className="grid-default-color  grid-2">
          <div ref={reference} className="h-full w-full flex items-center justify-center">
            <p className="sm:text-4xl text-3xl text-gray-400 text-center font-bold">CODE IS CRAFT</p>
             
             {skills.map((item,index)=>(
              <SkillDrag containerRef={item.containerRef}  key={index} text={item.text} image={item.image} style={item.style} />
             ))}

          </div>
        </div>

       {/* grid3 */}

        <div className="grid-black-color grid-3 overflow-visible relative">

          <div className="w-[50%] z-10">
               <p className="headtext">Time Zone</p>
               <p className="subtext">
                I'm based in India, and open to remote work worldwide
               </p>
          </div>

<figure
  className="absolute right-0 top-1/2 translate-x-[45%] -translate-y-[45%]  w-[1900px] h-[1900px] z-0" 
  
>

    <Canvas camera={{ position: [3, 5, 5] }}>
      <ambientLight intensity={1} />
      <Globe scale={[1, 1, 1]} position={[0, 0, 0]} />
<OrbitControls
  enableZoom={false}
  enablePan={false}
  minPolarAngle={Math.PI / 2}
  maxPolarAngle={Math.PI / 2}
/>


    </Canvas>
</figure>


        </div>
        <div className="grid-special-color  grid-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center size-full">
               <p>Do you want to start a project <br /> together?</p>
               <CopyEmailBtn/>
          </div>
        </div>
        {/* grid-5 */}
        <div className="grid-black-color  grid-5">
              <div className="w-[50%] z-10">
             <p className="texthead">Tech Stack</p>
             <p className="subtext">
              I specialize in various languages, frameworks and tools 
              that allows me to build robust and scalable applications
             </p>
            </div>
          <div className="absolute inset-y-0 md:insert-y-9 w-full h-full start-[50%] md:scale-125 ">

               <Frameworks/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
