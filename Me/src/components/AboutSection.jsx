import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative z-10 text-white py-24 px-6 md:px-20">
      <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-400 mb-8 border-l-8 border-orange-400 pl-4"
        >
          About Me
        </motion.h2>
      <div className="max-w-6xl mx-auto">
        

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-gray-300 space-y-6"
        >
          <p>
            Hello! I'm <span className="text-white font-semibold">Sarthak Keche</span>, a 4rd-year Information Technology student at D. Y. Patil College of Engineering. My passion lies in turning ideas into reality through clean, functional, and aesthetically pleasing web applications.
          </p>
          <p>
            With strong command over the <span className="text-orange-400 font-medium">MERN Stack</span> — MongoDB, Express, React.js, and Node.js — I craft modern full-stack projects and dynamic single-page applications. I also have experience with Tailwind CSS, Java, REST APIs, and Git for collaborative development.
          </p>
          <p>
            I'm a fast learner, team collaborator, and consistently aim to deliver responsive, optimized experiences. Whether it's building a component from scratch or leading a mini project, I love taking ownership and refining every detail.
          </p>
          <p>
            Outside of coding, I enjoy contributing to college tech clubs, mentoring juniors, and exploring AI and cloud tools that push the web forward. I'm also currently building and deploying personal tools and working on impactful hackathon projects.
          </p>
          <p className="italic text-orange-300">“I believe great software isn't just built — it's thoughtfully designed, continuously improved, and crafted with passion.”</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
