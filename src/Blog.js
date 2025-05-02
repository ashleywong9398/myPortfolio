// src/Blog.js
import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Blog.css"; 

function BlogPage() {
  const [copiedTop, setCopiedTop] = useState(false);

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
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/blog">Blog</Link>
          <span>/</span>
          <Link to="/contact">Contact</Link>
          <span>/</span>
          <Link to="#">Resume</Link>
        </div>
      </header>

      <main className="intro-section">
      <h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "-60px" }}>
  The Birth of My Portfolio
</h1>

        <h3 style={{ textAlign: "center", marginTop: "10px" }}>
          What This Blog Is About
        </h3>
        <p style={{ maxWidth: "800px", margin: "10px auto", textAlign: "center" }}>
          Hello and welcome! This blog is a little story about how I brought my personal portfolio
          website to life. It’s not a fancy tutorial, just a simple walk-through of the steps I took
          — kind of like a recipe or a hair-dye guide, but for websites! I’m a mom, a learner, and
          someone who enjoys turning ideas into pages. Here’s how it all started…
        </p>
      </main>

      <section className="skills-section" >
        <h2>How I Built It</h2>
        <div className="steps-row reverse">
        <img src="/step1.jpg" alt="Step 1" className="step-image rotate-right" />
          <div className="step-text">
            <h3>Step 1: The very first version — my Axure layout draft.</h3>
            <p>
              It all started with an idea in my head, which I mapped out using Axure RP.
              My goal was to create a simple, clean, and gentle-looking webpage.
              That initial layout was my starting point, and it reflected my early vision of something soft and easy to navigate.
            </p>
          </div>
        </div>


        <div className="steps-row">
        <img src="/step2.jpg" alt="Step 2" className="step-image rotate-left" />
          <div className="step-text">
            <h3>Step 2: Adding color, images, and style.</h3>
            <p>
              Next, I took that black-and-white wireframe and brought it to life with color.
              I added some images and styling to create the second version.
              To be honest, I wasn’t completely satisfied with how it looked—the colors made it feel a little chaotic,
              and the overall style felt inconsistent.
            </p>
          </div>
        </div>

        <div className="steps-row reverse">
        <img src="/step3.jpg" alt="Step 3" className="step-image rotate-right" />
          <div className="step-text">
            <h3>Step 3: Refining and polishing the final version.</h3>
            <p>
              In Step 3, I made several adjustments.
              I added animation, changed how the images were displayed, and refined the layout to make everything feel smoother and more harmonious.
              This version finally felt right—and it became the final version you see now.
            </p>
          </div>
        </div>

      </section>

      
 

      <section className="projects-section">
  <h2>My Favorite and Most Time-Consuming Part</h2>

  <div className="steps-row reverse favorite-section">
    <div className="step-text">
      <h3>Designing the Rounded Edges</h3>
      <p>
        The part that took me the longest—and also became my favorite—was designing the rounded edges between sections.
      </p>
      <p>
        I wanted the layout to feel soft and smooth, not too stiff or overly complex. At first, I tried adding a curve to the bottom of the first module, but it didn’t show because the background blended in.
      </p>
      <p>
        After some thinking, I figured out a solution: using two background layers to create the effect I wanted without affecting the rest of the layout.
      </p>
      <p>
        It wasn’t a technical challenge, but finding that simple idea—and seeing it work—was incredibly satisfying.
      </p>
    </div>

    <div className="image-wrapper">
      <img src="/myblog.jpg" alt="My Favorite Part" className="step-image" />
      <div className="arrow-tip">↓</div>
    </div>
  </div>
</section>



      
      <section className="contact-section">
        <h2>Final Thoughts</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px",fontFamily: "'Nunito', sans-serif"}}>
          This portfolio may not be perfect, but it’s mine. It reflects what I’ve learned and how far
          I’ve come. And even after long workdays, I still enjoy building, fixing, and improving it—
          because this is something I truly love doing. <br />
          <br />
          Thanks for reading my little portfolio journey!
        </p>
      </section>

     
      <footer className="footer">
        <div className="footer-bar">
          <p>&copy; 2025 Ashley. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BlogPage;
