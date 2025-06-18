import React from "react";

import HeroText from "../Components/HeroText";
import ParalaxBaground from "../Components/ParalaxBaground";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "../Components/Astronaut";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div id="home" className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space ">
      <HeroText />
      <ParalaxBaground />
      <figure
        className="absolute inset-0 "
        style={{ height: "100vh", width: "100vw" }}
      >
        <Canvas
         shadows={false}
         dpr={[1, 1.5]} 
         gl={{ antialias: false }}
         camera={{ position: [0, 1, 3] }}>

          <Float>
            <Astronaut
              scale={isMobile && 0.23}
              position={isMobile && [0, -1.7, 0]}
            />
          </Float>            

        </Canvas>
      </figure>
    </div>
  );
};

export default Hero;
