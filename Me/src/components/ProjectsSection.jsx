import React from "react";
import { motion } from "framer-motion";

const projects = [
 {
  title: "QuickFix",
  desc: "A smart QR-based complaint reporting and tracking platform for campus infrastructure. Faculties scan classroom QR codes to report issues (fans, lights, projectors), while admins manage and resolve complaints via a real-time dashboard with status updates and history logging.",
  tech: ["React", "MongoDB", "Express", "Node.js", , "QR Integration"],
  link: "https://dypcoequickfix.in",
},

  {
  title: "FarmRev",
  desc: "A robust platform connecting farmers and merchants, enabling crop listings, real-time chat, secure authentication, and role-based dashboards. Farmers can showcase their produce, while merchants can browse, negotiate, and manage crop requirements — streamlining agricultural trade through a digital-first approach.",
  tech: ["MERN Stack", "Socket.io", "JWT", "Tailwind"],
  link: "https://farm-rev-git-main-sarthakkeches-projects.vercel.app/",
}
,
  {
  title: "International Conference Website",
  desc: "A comprehensive web platform designed to manage international academic conferences efficiently. Features include online paper submission, automated review workflows, author registration, dynamic session scheduling, and real-time updates for participants. The site also integrates publishing guidelines, digital proceedings, and role-based dashboards for authors, reviewers, and organizers.",
  tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  link: "https://dypcoe.iccss2025.org",
}
,
  {
  title: "Paper Publish Site",
  desc: "A research publishing platform that allows authors to upload, convert, and display their papers in a standardized format. It includes formatting automation using DOCX parsing, metadata extraction, and user-friendly dashboards for managing submissions and updates across institutions.",
  tech: ["React", "Express", "MongoDB", "Word Doc Parser"],
  link: "https://ijspr-sarthakkeches-projects.vercel.app/",
}
,
];

const ProjectsSection = () => {
  return (
    <section className="relative text-white py-28 px-6 md:px-20 overflow-hidden z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-orange-400 mb-16 border-l-8 border-orange-400 pl-5"
      >
        My Creative Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-orange-500/40 transform transition duration-500 hover:scale-[1.04] group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3 className="text-2xl font-bold text-orange-300 mb-3 group-hover:text-white transition duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-orange-500/10 text-orange-300 px-3 py-1 rounded-full font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-400 hover:text-orange-400 font-medium transition"
            >
              Visit Project ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
