import { OrbitingCircles } from "./OrbitingCircles";
import azure from "../assets/logos/azure.svg";
import css3 from "../assets/logos/css3.svg";
import git from "../assets/logos/git.svg";
import html5 from "../assets/logos/html5.svg";
import microsoft from "../assets/logos/microsoft.svg";
import vitejs from "../assets/logos/vitejs.svg";
import reactjs from "../assets/logos/react.svg";
import github from "../assets/logos/github.svg";
import redux from "../assets/logos/redux.svg";
//skills2
import javascript from "../assets/logos/javascript.svg";
import nodejs from "../assets/logos/nodejs-icon.svg";
import threejs from "../assets/logos/threejs.svg";
import tailwind from "../assets/logos/tailwindcss.svg";
import java from "../assets/logos/java.svg";
import mysql from "../assets/logos/mysql.svg";
import firebase from "../assets/logos/firebase.svg";
import android from "../assets/logos/Android.svg";
import motion from "../assets/logos/framer-motion.svg";
import gsap from "../assets/logos/gsap.svg";
import python from "../assets/logos/python.svg";









export function Frameworks() {
  const skills = [azure, css3, redux, reactjs, git, vitejs, html5, github, microsoft, firebase, android, motion, gsap ];
  const skills1 = [javascript, nodejs, threejs, tailwind, java, mysql, python]
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={30}
        radius={100}
        reverse={true}
        speed={2}
      >
         {skills1.map((skill, index) => (
          <Icon key={index} src={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
export default Frameworks;

const Icon = ({ src }) => (
  <img src={src} alt="" className="duration-200 rounded-sm hover:scale-110" />
);
