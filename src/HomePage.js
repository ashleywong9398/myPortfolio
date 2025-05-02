// src/HomePage.js
import React, { useState, useEffect, useRef } from "react";
import profilePic from "./profile.jpg";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [copiedTop, setCopiedTop] = useState(false);
  const [copiedBottom, setCopiedBottom] = useState(false);
  const scrollRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollSpeed = 0.2;

    function step() {
      if (!scrollContainer) return;
      positionRef.current += scrollSpeed;
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (positionRef.current >= maxScroll) {
        positionRef.current = 0;
      }
      scrollContainer.scrollLeft = positionRef.current;
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
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
          <Link to="#">Home</Link>
          <span>/</span>
          <Link to="/blog">Blog</Link>
          <span>/</span>
          <Link to="/contact">Contact</Link>
          <span>/</span>
          <Link to="#">Resume</Link>
        </div>
      </header>

      <main className="intro-section">
  <div className="avatar-wrapper">
    <img src={profilePic} alt="Avatar" className="avatar" />
  </div>
  <div className="intro-text">
    <h1>Hi, I'm Ashley!</h1>
    <p>
     I'm a product designer specializing in UI design, web functionality,
              and desktop support. I craft intuitive interfaces and ensure seamless
              user experiences across platforms.   
               </p>
  </div>
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
            <a
              href="https://ashleywong9398.github.io/WEBD152/FinalProjectA/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/shoreline.png" alt="Shoreline Dining" />
            </a>
            <h3>Shoreline Dining</h3>
            <p>La Jolla's waterfront fine dining experience.</p>
          </div>
          <div className="project-card">
            <a
              href="https://darling-kleicha-77c66b.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Movelog.jpg" alt="MoveLog" />
            </a>
            <h3>MoveLog</h3>
            <p>A project tracking daily movement.</p>
          </div>
          <div className="project-card">
            <a
              href="https://ashleywong9398.github.io/WEBD191/Assignment9/404.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/exchangelog.png" alt="ExchangeLog" />
            </a>
            <h3>ExchangeLog</h3>
            <p>
              Uh-oh! The foreign exchange tracker app is missing. Head to our <strong>404 page</strong>.
            </p>
          </div>
          <div className="project-card">
            <a
              href="https://ashleywong9398.github.io/WEBD191/Assignment9/404.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/404.png" alt="404 Project" />
            </a>
            <h3>404 Project</h3>
            <p>This is a placeholder for something even more exciting.</p>
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
          <Link to="/contact" className="contact-link-button">
  Get in Touch
</Link>

        </div>
      </section>

      <footer className="footer">
        <div className="footer-bar">
          <p>&copy; 2025 Ashley. All rights reserved.</p>
          <div className="footer-links">
          <Link to="#">Home</Link>
         
          <Link to="/blog">Blog</Link>
          
          <Link to="/contact">Contact</Link>
        
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
