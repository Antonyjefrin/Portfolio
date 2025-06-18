import { motion } from "motion/react";

const SkillDrag = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      style={style}
      src={image}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
    />
  ) : (
    <motion.div
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      style={style}
      className="absolute  px-1 py-4 text-xl text-center rounded-full bg-storm ring ring-gray-700 w-[9rem] sm:w-[12rem] cursor-grab font-bold"
    >
      {text}
    </motion.div>
  );
};

export default SkillDrag;
