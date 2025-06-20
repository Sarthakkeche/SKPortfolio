import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaAws, FaJava
} from "react-icons/fa";
import {
  SiJavascript, SiMongodb, SiTailwindcss, SiExpress, SiMysql
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "Java", icon: <FaJava />, color: "text-red-400" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-300" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "AWS", icon: <FaAws />, color: "text-yellow-500" },
];

const SkillsSection = () => {
  return (
    <section className="relative text-white py-24 px-6 md:px-20 overflow-hidden z-10">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-orange-400 mb-12 border-l-8 border-orange-400 pl-4"
      >
        My Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:scale-105 transform transition duration-300 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
            <p className="text-sm font-semibold tracking-wide text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
