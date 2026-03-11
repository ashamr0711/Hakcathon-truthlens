import React from "react";

const features = [
    {
        icon: "🔍",
        title: "Text Analysis",
        description: "Detect AI-generated or manipulated text with linguistic and semantic-based detection models.",
    },
    {
        icon: "🖼️",
        title: "Image Verification",
        description: "Upload any image to detect possible deepfake manipulations using pixel and metadata analysis.",
    },
    {
        icon: "🎥",
        title: "Video Detection",
        description: "Analyze videos for frame-level inconsistencies and AI-synthesized patterns.",
    },
    {
        icon: "🧠",
        title: "Explainable AI Reasoning",
        description: "Provides detailed explanations behind detection decisions, making outputs clear and actionable.",
    },
    {
        icon: "🔗",
        title: "Multimodal Fusion",
        description: "Combines vision-language models with visual detection for robust performance across media.",
    },
    {
        icon: "✅",
        title: "High Accuracy and Trustworthiness",
        description: "Delivers top-tier accuracy on face-manipulated and synthetic datasets, powering real-world reliability.",
    },
];

const About = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                About <span style={{ color: "#6f63ff" }}>TruthLens</span>
            </h1>
            <p style={styles.description}>
                TruthLens is a cutting-edge deepfake detection platform designed to help individuals and organizations verify the authenticity of digital media.
                Leveraging state-of-the-art AI models and multimodal reasoning, TruthLens enables accurate identification of manipulated or artificially generated content across text, images, and videos.
            </p>
            <p style={styles.description}>
                By providing explainable AI reasoning, combining vision-language models, and focusing on trustworthiness, TruthLens sets a new standard in synthetic media forensics.
            </p>

            <div style={styles.featuresContainer}>
                {features.map((feature, index) => (
                    <div key={index} style={styles.featureBox}>
                        <div style={styles.icon}>{feature.icon}</div>
                        <div>
                            <h3 style={styles.featureTitle}>{feature.title}</h3>
                            <p style={styles.featureDescription}>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
        backgroundColor: "#f5f6fa",
        borderRadius: "10px",
        fontFamily: "Segoe UI, sans-serif",
        color: "#333",
    },
    heading: {
        fontSize: "2.5rem",
        marginBottom: "1rem",
    },
    description: {
        fontSize: "1.1rem",
        lineHeight: "1.7",
        marginBottom: "2.5rem",
    },
    featuresContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "1.8rem",
    },
    featureBox: {
        display: "flex",
        gap: "1.2rem",
        alignItems: "flex-start",
        background: "#ffffff",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    },
    icon: {
        fontSize: "2rem",
        marginTop: "0.3rem",
    },
    featureTitle: {
        fontSize: "1.3rem",
        margin: 0,
        marginBottom: "0.5rem",
        color: "#6f63ff",
    },
    featureDescription: {
        fontSize: "1rem",
        margin: 0,
        lineHeight: "1.6",
    },
};

export default About;
