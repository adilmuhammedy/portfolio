"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [portfolioData.about.role, "Backend Developer", "Problem Solver"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => {
      clearInterval(ticker);
    };
  }, [displayText, isDeleting]);

  const tick = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setTypingSpeed(50);
    } else {
      setTypingSpeed(150);
    }

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(400); // Pause before next word starts
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Ambient glowing backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium mb-12 text-gray-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        Available for new opportunities
      </div>
      
      <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 text-white leading-tight">
        Hi, I'm <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 inline-block px-2">{portfolioData.about.name}</span>
      </h1>
      
      <div className="h-12 md:h-16 mt-4 mb-4 flex items-center justify-center">
        <p className="text-2xl md:text-4xl text-gray-300 font-medium">
          A <span className="text-white border-r-2 border-purple-500 pr-1 animate-pulse">{displayText}</span>
        </p>
      </div>
      
      <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed mb-12 mx-auto">
        {portfolioData.about.description1}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
        <a
          href="#projects"
          className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
        >
          View Projects
        </a>
        <a
          href={portfolioData.about.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-transparent border-2 border-white/10 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
}