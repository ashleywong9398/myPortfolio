
import React, { useState, useRef, useEffect } from "react";
import profilePic from "./profile.jpg";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [copiedTop, setCopiedTop] = useState(false);
  const [copiedBottom, setCopiedBottom] = useState(false);
  const skillsRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = skillsRef.current;
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
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>

        </div>
      </header>

      <main className="intro-section">
        <div className="avatar-wrapper">
          <img src={profilePic} alt="Avatar" className="avatar" />
        </div>
        <div className="intro-text">
          <h1>Hi, I'm Ashley!</h1>
          <p>
          I love designing clean, easy-to-use websites. I'm especially into layout and UI details that make everything feel just right. I'm hoping to work on projects where thoughtful design really makes a difference.
          It’s something I truly enjoy doing.
          </p>
        </div>
      </main>

      <section className="skills-section">
        <div
          className="skills-scroll-react"
          ref={skillsRef}
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

        <div className="project-list" >
          <div className="project-card">
            <a href="https://ashleywong9398.github.io/WEBD152/FinalProjectA/index.html" target="_blank" rel="noopener noreferrer">
              <img src="/shoreline.png" alt="Shoreline Dining" />
            </a>
            <h3 style={{ textAlign: "center" }}>
    <a
      href="https://ashleywong9398.github.io/WEBD152/FinalProjectA/index.html"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      🌊 ShorelineDining
    </a>
  </h3>
            <p>This was one of the first websites I created when I started learning web development. It includes four main pages, an embedded video, and a styled menu table.</p> 
            <p>The design was inspired by a beautiful seaside restaurant. I aimed for a soft, welcoming style to match the peaceful coastal vibe.</p> 
            <p><strong>Built with: HTML, CSS</strong></p>
           
          </div>

          <div className="project-card">
            <a href="https://darling-kleicha-77c66b.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src="/Movelog.jpg" alt="MoveLog" />
            </a>
            <h3 style={{ textAlign: "center" }}>
    <a
      href="https://darling-kleicha-77c66b.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      My Moving Journal
    </a>
  </h3>
            <p>I created My Moving Journal while planning my move from San Diego to Houston. I needed a simple tool to track tasks, compare weather, and stay organized.</p> 
            <p>It includes a calendar, dual-city weather via OpenWeatherMap, and a daily log. My favorite part is viewing both cities’ weather at once — it helped me adjust to Houston’s unpredictability.</p> <p>Unlike a regular calendar, LifeLog is focused, visual, and tailored to me.</p> 
            <p><strong>Built with: React, JavaScript, HTML, CSS, OpenWeatherMap API, localStorage | Deployed on Netlify</strong></p>
          </div>

          <div className="project-card">
            <a href="https://exchange-rate-tracker-self.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/exchangelog.png" alt="ExchangeLog" />
            </a>
            <h3 style={{ textAlign: "center" }}>
    <a
      href="https://exchange-rate-tracker-self.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      Exchange Rate Tracker
    </a>
  </h3>
            <p> This app was created to help manage currency exchange while preparing for my parents’ visit from China. I wanted something simple that could track exchange rates and log transactions clearly. </p> 
            <p> Users can view real-time exchange rates, convert currencies instantly, and use a calendar to track when and how much was exchanged. </p> <p> My favorite part is the transaction log — it turns a basic converter into a simple finance tracker I can access anytime. </p>
            <p><strong>Built with: Angular, real-time Exchange Rate API | Deployed via Vercel and GitHub</strong></p>
          </div>

          <div className="project-card">
            <a href="https://ashleywong9398.github.io/heart-canvas/heart.html" target="_blank" rel="noopener noreferrer">
              <img src="/heart.jpg" alt="heart.jpg" />
            </a>
            <h3 style={{ textAlign: "center" }}>
    <a
      href="https://ashleywong9398.github.io/heart-canvas/heart.html"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
     💗 HeartCanvas
    </a>
  </h3>
            <p> Inspired by a romantic scene from a TV show about coders, this animated page paints a stream of heart-shaped particles using HTML5 Canvas. </p> 
            <p> I loved the idea of visualizing emotion through code — so I recreated it, complete with soft motion and gentle background music. </p> 
            <p><strong>Built with: HTML, CSS, JavaScript, Canvas</strong></p>
          </div>
          <div className="project-card">
            <a href="https://ashleywong9398.github.io/WEBD191/Assignment9/404.html" target="_blank" rel="noopener noreferrer">
              <img src="/404.png" alt="404 Project" />
            </a>
            <h3 style={{ textAlign: "center" }}>
    <a
      href="https://ashleywong9398.github.io/WEBD191/Assignment9/404.html"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      404 Project
    </a>
  </h3>
            <p> This project was a thoughtful take on a 404 error page. I wanted users to feel calm, not frustrated, when landing on a broken link. </p> <p> Instead of just saying “Not Found,” the page gently explains the issue and offers a hopeful message — “Something better may be coming next.” </p> 
            <p> Though simple in code, it’s designed to comfort users when they least expect it. </p>
            <p><strong>Built with: HTML, CSS</strong></p>
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
