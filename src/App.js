import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import profilePic from "./profile.jpg";

function App() {
  const [copiedTop, setCopiedTop] = useState(false);
  const [copiedBottom, setCopiedBottom] = useState(false);
  const scrollRef = useRef(null);
  const scrollSpeedRef = useRef(0.5); // 使用 useRef 保存 scrollSpeed

  useEffect(() => {
    let animationId;
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollSpeedRef.current;
        const maxScroll =
          scrollRef.current.scrollWidth / 2 + scrollRef.current.offsetWidth;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="container">
      <header className="top-section">
        <div className="email-group">
          <div className="email-box">
            <span className="email-text">ashley59398@gmail.com</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText("ashley59398@gmail.com");
                setCopiedTop(true);
                setTimeout(() => setCopiedTop(false), 2000);
              }}
            >
              {copiedTop ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <div className="right">
          <a href="#">Facebook</a>
          <span>/</span>
          <a href="#">GitHub</a>
          <span>/</span>
          <a href="#">Instagram</a>
        </div>
      </header>

      <main className="intro-section">
        <img src={profilePic} alt="Avatar" className="avatar" />
        <h1>Hi, I'm Ashley!</h1>
        <p>
          I'm a product designer specializing in UI design, web functionality,
          and desktop support. I craft intuitive interfaces and ensure seamless
          user experiences across platforms.
        </p>
      </main>

      <section className="skills-section">
        <div
          className="skills-scroll-react"
          ref={scrollRef}
          style={{ display: "flex", overflow: "hidden", whiteSpace: "nowrap" }}
        >
          <div className="skills-content" style={{ display: "flex" }}>
            <span>JavaScript</span>
            <span>Git</span>
            <span>Jira</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Angular</span>
            <span>GitHub</span>
            <span>SVN</span>
            <span>JavaScript</span>
            <span>Git</span>
            <span>Jira</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Angular</span>
            <span>GitHub</span>
            <span>SVN</span>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-header">
          <h2>Featured Work</h2>
        </div>
        <div className="project-list">
          <div className="project-card">
            <img src="/Movelog.png" alt="MoveLog" />
            <h3>MoveLog</h3>
            <p>A project tracking daily movement.</p>
          </div>
          <div className="project-card">
            <img src="/exchangelog.png" alt="ExchangeLog" />
            <h3>ExchangeLog</h3>
            <p>A foreign exchange tracker app.</p>
          </div>
          <div className="project-card">
            <img src="/shoreline.png" alt="Shoreline Dining" />
            <h3>Shoreline Dining</h3>
            <p>Website for a local restaurant.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Let’s build something amazing together!</h2>
        <div className="contact-buttons">
          <button
            onClick={() => {
              navigator.clipboard.writeText("ashley59398@gmail.com");
              setCopiedBottom(true);
              setTimeout(() => setCopiedBottom(false), 2000);
            }}
          >
            {copiedBottom ? "Copied!" : "Email Me"}
          </button>
          <button>View Resume</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-bar">
          <p>&copy; 2025 Ashley. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Facebook</a>
            <a href="#">GitHub</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;