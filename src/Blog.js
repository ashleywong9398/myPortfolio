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
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>

        </div>
      </header>

      <main className="intro-section">
      <h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "-60px" }}>
  The Birth of My Portfolio
</h1>

        <h3 style={{ textAlign: "center", marginTop: "10px" }}>
          What This Blog Is About
        </h3>
        <p style={{ maxWidth: "900px", margin: "10px auto", textAlign: "center" }}>
        This blog is a short story about how I built my personal portfolio — and why I love UI design. I enjoy creating clean, user-friendly layouts, and it's something I'm not only passionate about, but also good at. My portfolio reflects that — thoughtful structure, visual balance, and attention to detail.
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
      One of the most time-consuming — and most meaningful — parts of this project was designing the rounded edges between sections.
      </p>
      <p>
      It may look simple, but this small detail mattered to me. I wanted the layout to feel soft, natural, and visually smooth — not blocky or mechanical. At first, I tried adding a curved shape to the bottom of a section, but it disappeared because the background didn’t contrast enough.
      </p>
      <p>
      After experimenting, I found a clean solution: layering backgrounds to create depth and separation without breaking the layout. It wasn’t a hard coding problem — it was a UI design challenge about how to guide the eye and shape the feel.
      </p>
      <p>
      Solving that, in a subtle and elegant way, was one of the most satisfying moments in the whole project.
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
        <p style={{ maxWidth: "900px", margin: "0 auto", fontSize: "18px",fontFamily: "'Nunito', sans-serif"}}>
        This portfolio reflects my style, my growth, and the kind of work I enjoy doing. I’ve put care into every page — from layout to details — and I’m proud of how it turned out.

Even after long days of work and parenting, I still find energy and joy in building and improving it. That’s how I know I’m on the right path.

I love what I do — and when you love it, progress comes naturally.<br />
          <br />
          Thanks for reading my little portfolio journey! I’m just getting started.
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