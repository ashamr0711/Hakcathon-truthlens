import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null);

    const cardStyle = {
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "2rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "250px",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
    };

    const cardHover = {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 18px rgba(0, 0, 0, 0.15)",
    };

    const cards = [
        { title: "Text Upload", path: "/text-upload", emoji: "📝" },
        { title: "Image Upload", path: "/image-upload", emoji: "🖼️" },
        { title: "Video Upload", path: "/video-upload", emoji: "🎥" },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "3rem 1rem",
                minHeight: "100vh",
                backgroundColor: "#f4f5ff",
            }}
        >
            <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "2rem" }}>
                Choose Detection Type
            </h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    flexWrap: "wrap",
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            ...cardStyle,
                            ...(hovered === index ? cardHover : {}),
                        }}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => navigate(card.path)} // 👈 This triggers the page change
                    >
                        <div style={{ fontSize: "3rem" }}>{card.emoji}</div>
                        <h3 style={{ color: "#6f63ff", marginTop: "1rem" }}>{card.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
