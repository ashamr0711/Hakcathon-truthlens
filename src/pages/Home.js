import React from "react";
import { useNavigate } from "react-router-dom";

const homeContainerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f5f7ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px",
};

const cardStyle = {
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(111,99,255,0.08)",
    padding: "32px",
    maxWidth: "500px",
    marginBottom: "32px",
    textAlign: "center",
};

const mainHeaderStyle = {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#2d2d2d",
    marginBottom: "16px"
};

const subHeaderStyle = {
    fontSize: "1.2rem",
    color: "#444",
    marginBottom: "28px",
};

const featureTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#6f63ff",
    marginBottom: "8px"
};

const featureDescStyle = {
    color: "#666",
    fontSize: "1rem",
};

const buttonRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "32px",
};

const btnPrimary = {
    backgroundColor: "#6f63ff",
    color: "white",
    fontWeight: "600",
    fontSize: "1rem",
    padding: "12px 32px",
    borderRadius: "12px",
    border: "none",
    boxShadow: "0 2px 6px rgba(111,99,255,0.15)",
    cursor: "pointer",
};

const btnSecondary = {
    backgroundColor: "white",
    color: "#6f63ff",
    border: "2px solid #6f63ff",
    fontWeight: "600",
    fontSize: "1rem",
    padding: "12px 32px",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(111,99,255,0.10)",
    cursor: "pointer"
};

const footerStyle = {
    color: "#888",
    fontSize: "1rem",
    marginTop: "24px",
    textAlign: "center"
};

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={homeContainerStyle}>
            <div style={cardStyle}>
                <div style={mainHeaderStyle}>Welcome to TruthLens</div>
                <div style={subHeaderStyle}>
                    Detect deepfakes and AI-generated content across <strong>text</strong>, <strong>images</strong>, and <strong>videos</strong> — powered by advanced AI and built for truth verification.
                </div>
                <div style={buttonRowStyle}>
                    <button style={btnPrimary} onClick={() => navigate("/register")}>Get Started</button>
                    <button style={btnSecondary} onClick={() => navigate("/about")}>Learn More</button>
                </div>
            </div>
            <div style={{ ...cardStyle, maxWidth: "400px" }}>
                <div style={featureTitleStyle}>Text Analysis</div>
                <div style={featureDescStyle}>
                    Upload or paste text to detect AI-generated or manipulated content using advanced linguistic models.
                </div>
            </div>
            <div style={{ ...cardStyle, maxWidth: "400px" }}>
                <div style={featureTitleStyle}>Image Detection</div>
                <div style={featureDescStyle}>
                    Analyze images for signs of deepfakes, synthetic alterations, or generative AI artifacts.
                </div>
            </div>
            <div style={{ ...cardStyle, maxWidth: "400px" }}>
                <div style={featureTitleStyle}>Video Forensics</div>
                <div style={featureDescStyle}>
                    Detect inconsistencies in video files — from frame tampering to deepfake overlays and voice cloning.
                </div>
            </div>
            <footer style={footerStyle}>
                © {new Date().getFullYear()} TruthLens. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
