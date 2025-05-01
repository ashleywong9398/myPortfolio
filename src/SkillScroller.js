import React, { useEffect, useRef } from "react";
import "./App.css";

const skills = [
  "JavaScript",
  "Git",
  "Jira",
  "React",
  "HTML",
  "CSS",
  "Frontend",
  "GitHub",
  "Angular",
  "SVN",
];

export default function SkillScroller() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    let animationFrame;

    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="skills-scroll-react" ref={containerRef}>
      <div className="skills-content">
        {[...skills, ...skills].map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
