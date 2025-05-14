
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("ashley59398@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container">
      <header className="top-section">
        <div className="email-group">
          <div className="email-box">
            <span className="email-text">ashley59398@gmail.com</span>
            <button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
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

      <div style={{ backgroundColor: "#eff1f1de", padding: "60px 20px" }}>
        <h2
          style={{ textAlign: "center", fontSize: "34px", fontWeight: "bold", marginTop: "-10px" }}
        >
          Let’s connect 
        </h2>
        <p style={{ textAlign: "center"}}>your message is always welcome. </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              maxWidth: "700px",
              margin: "0 auto 20px",
            }}
          >
            <label
              htmlFor="name"
              style={{
                width: "80px",
                textAlign: "right",
                marginRight: "10px",
                lineHeight: "32px",
                fontWeight: "bold",
              }}
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                maxWidth: "545px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              maxWidth: "700px",
              margin: "0 auto 20px",
            }}
          >
            <label
              htmlFor="email"
              style={{
                width: "80px",
                textAlign: "right",
                marginRight: "10px",
                lineHeight: "32px",
                fontWeight: "bold",
              }}
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                maxWidth: "545px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </form>
      </div>

      <section
        className="contact-section"
        style={{
          borderTopLeftRadius: "80px",
          borderTopRightRadius: "80px",
          padding: "60px 20px 100px",
        }}
      >
        <form onSubmit={handleSubmit} className="form-bottom">
          <label style={{ fontWeight: "bold" }}>
            Leave something here
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              style={{
                width: "100%",
                maxWidth: "600px",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginTop: "8px",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "10px 30px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            submit
          </button>
        </form>
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

export default ContactPage;
