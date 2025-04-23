// src/App.js
import "./App.css";
import profilePic from "./profile.jpg";

function App() {
  return (
    <div className="container">
      <header className="top-section">
        <div className="email-group">
          <div className="email-box">
            <span className="email-text">ashley59398@gmail.com</span>
            <button
              onClick={() =>
                navigator.clipboard.writeText("Ashley59398@gmail.com")
              }
            >
              Copy
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
        <div className="skills-scroll">
          <div className="skills-track">
            <span>JavaScript</span>
            <span>Git</span>
            <span>Jira</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Frontend</span>
            <span>GitHub</span>
            <span>Angular</span>
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
          <button>Email Me</button>
          <button>WhatsApp</button>
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
