import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import fullBody from "../assets/sarthak.jpg"; // seated image (right side)

const HeroSection = () => {
  return (
    <section className="relative min-h-screen text-white flex items-center justify-center px-6 pt-24 md:pt-32">
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        {/* Left: Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 px-11"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-orange-400 drop-shadow">
            Hey, I’m <span className="text-white">Sarthak Keche</span>
          </h1>

          <TypeAnimation
            sequence={["MERN Stack Developer", 2000, "Frontend Engineer", 2000, "Creative Web Builder", 2000]}
            speed={50}
            repeat={Infinity}
            wrapper="p"
            className="text-lg md:text-xl text-orange-300"
          />

          <p className="text-gray-300 max-w-xl leading-relaxed">
            I'm a passionate software developer focused on building beautiful, responsive web apps. Currently pursuing IT at
            D. Y. Patil College of Engineering.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1wzEQgx7jlPRjXikdWxoOZHuvgoxCI26Z/view?usp=drive_link"
              download
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition shadow-lg"
            >
              Download Resume
            </a>
            <div className="flex space-x-4 text-xl">
              <a href="https://github.com/Sarthakkeche" target="_blank" className="hover:text-orange-400">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/sarthakkeche" target="_blank" className="hover:text-orange-400">
                <FaLinkedin />
              </a>
              <a href="mailto:sarthakkeche@gmail.com" className="hover:text-orange-400">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex justify-center"
>
 
    <div className="p-[5px] rounded-2xl bg-orange-500">
       <div className="p-[5px] rounded-3xl bg-white">
      <div className="overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img
          src={fullBody}
          alt="Sarthak on sofa"
          className="w-full h-auto object-cover max-h-[80vh]"
        />
      </div>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
