
import voiceX from "../assets/projects/voicex.png"
import bornagain from "../assets/projects/BornAgain.png"
import thirty from "../assets/projects/thirty.png"
import mumbai from "../assets/projects/mumbaiDrive.png"

import react from  "../assets/logos/react.svg" 
import python from  "../assets/logos/python.svg" 
import mysql from  "../assets/logos/mysql.svg" 
import yolo from  "../assets/logos/yolo.svg" 
import html from  "../assets/logos/html5.svg" 
import css from  "../assets/logos/css3.svg" 
import js from  "../assets/logos/javascript.svg" 
import gsap from  "../assets/logos/gsap.svg" 
import java from  "../assets/logos/java.svg" 
import firebase from  "../assets/logos/firebase.svg" 
import flask from  "../assets/logos/Flask.svg" 
import anroidstudio from  "../assets/logos/Android.svg" 



export const myProjects = [
  {
    id: 1,
    title: "Voice X",
    description:
      "AI-powered web app that converts complex flowcharts into clear audio explanations, enhancing accessibility for visually impaired users.",
    subDescription: [
      "Developed using React.js with Tailwind CSS for responsive UI across devices.",
      "Achieved over 85% ML accuracy using Python, YOLO, and EasyOCR to detect and interpret handwritten flowcharts.",
      "Backed by MySQL with Python-based logic for audio generation and data management.",
      "Targeted toward improving academic understanding through inclusive audio output.",
    ],
    href: "/", // Add actual link after deployment
    logo: "",
    image: voiceX, 
    tags: [
      { id: 1, name: "React", path: react },
      { id: 2, name: "Flask", path: flask },
      { id: 3, name: "Python", path: python },
      { id: 4, name: "MySQL", path:  mysql},
      { id: 5, name: "YOLO", path: yolo },       // You might need to create this
    ],
  },
  {
    id: 2,
    title: "Born Again",
    description:
      "Web app that helps users overcome social media addiction through personalized task-based rehabilitation.",
    subDescription: [
      "Built with React and Firebase, handling user-generated tasks and customized challenges based on responses.",
      "Used GSAP, Framer Motion, and other JS libraries for interactive animations and engaging transitions.",
      "Dynamic form logic tailored for over 30+ question/answer paths, encouraging habit change.",
    ],
    href: "/",
    logo: "",
    image: bornagain,
    tags: [
      { id: 1, name: "Html", path: html },
      { id: 2, name: "CSS3", path: css},
      { id: 3, name: "JavaScript", path: js },
      { id: 4, name: "Firebase", path: firebase },
      { id: 5, name: "GSAP", path: gsap},           // You might need to download this
    ],
  },
  {
    id: 3,
    title: "Mumbai Drive",
    description:
      "Android app that helps locals and tourists explore over 200 budget-friendly and hidden travel spots in Mumbai.",
    subDescription: [
      "Developed using Java in Android Studio with Firebase integration for storing and fetching data.",
      "Designed city-wide travel assistance for both known and lesser-known places.",
      "Planned future expansion into web platforms using modern frontend frameworks.",
    ],
    href: "/",
    logo: "",
    image: mumbai,
    tags: [
      { id: 1, name: "Java", path: java},
      { id: 2, name: "Firebase", path: firebase},
      { id: 3, name: "Android Studio", path: anroidstudio}, // You may need this icon
    ],
  },
   {
    id: 4,
    title: "ThirtySixty studio clone",
    description:
      "Android app that helps locals and tourists explore over 200 budget-friendly and hidden travel spots in Mumbai.",
    subDescription: [
      "Developed using Java in Android Studio with Firebase integration for storing and fetching data.",
      "Designed city-wide travel assistance for both known and lesser-known places.",
      "Planned future expansion into web platforms using modern frontend frameworks.",
    ],
    href: "/",
    logo: "",
    image: thirty,
    tags: [
      { id: 1, name: "react", path: react},
      { id: 2, name: "javascript", path: js},
      { id: 3, name: "gsap", path: gsap}, // You may need this icon
    ],
  },
];
