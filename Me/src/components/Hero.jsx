import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkiilsSection";
import ProjectsSection from "./ProjectsSection";
 import ContactSection from "./ContactSection";

const Hero = () => {
  useEffect(() => {
    const fireflies = [];
    const wrapper = document.querySelector("#firefly-bg");

    if (!wrapper) return;

    for (let i = 0; i < 60; i++) {
      const dot = document.createElement("div");
      dot.className = "firefly";
      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = Math.random() * 100 + "%";
      dot.style.animationDelay = Math.random() * 5 + "s";
      dot.style.animationDuration = `${Math.random() * 5 + 8}s`;
      dot.style.width = dot.style.height = `${Math.random() * 4 + 2}px`;
      wrapper.appendChild(dot);
      fireflies.push(dot);
    }

    return () => {
      fireflies.forEach(dot => dot.remove());
    };
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* 🔆 Combined Background Effects */}
      <div id="firefly-bg" className="fixed inset-0 z-0 pointer-events-none">
        {/* Corner Glow Effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500 opacity-10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 opacity-10 blur-[120px] rounded-full animate-ping" />
      </div>

      {/* ✨ Sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* 🔥 Firefly CSS */}
      <style>{`
        .firefly {
          position: absolute;
          background: white;
          border-radius: 9999px;
          opacity: 0;
          animation: twinkle-fall linear infinite;
        }

        @keyframes twinkle-fall {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
