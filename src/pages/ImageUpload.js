import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ImageUpload() {
    const navigate = useNavigate();

    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);

    // Auto clear error after 2s
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(""), 2000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const goToDashboard = () => navigate("/dashboard");

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
        setError("");
        setResult(null);
    };

    const handleDetect = async (e) => {
        e.preventDefault();

        if (!imageFile) {
            setError("Please select an image file.");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const formData = new FormData();
            formData.append("file", imageFile);

            const response = await axios.post("http://localhost:5000/api/detect-image", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setResult({
                status: response.data.result === "AI-generated" ? "fake" : "real",
                reason: `Confidence: ${(response.data.confidence * 100).toFixed(1)}%`,
            });
        } catch (err) {
            console.error("Image detection error:", err);
            setError("Failed to detect image.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            {/* Back to Dashboard button */}
            <div
                style={styles.closeButton}
                onClick={goToDashboard}
                title="Back to Dashboard"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        goToDashboard();
                    }
                }}
            >
                &times;
            </div>

            <h2 style={styles.heading}>Image Deepfake Detection</h2>

            <form onSubmit={handleDetect} style={styles.form}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={styles.fileInput}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        ...styles.button,
                        ...(loading ? styles.buttonDisabled : {}),
                    }}
                >
                    {loading ? "Detecting..." : "Detect"}
                </button>
            </form>

            {error && <p style={{ ...styles.message, color: "red" }}>{error}</p>}

            {result && (
                <div
                    style={{
                        ...styles.resultBox,
                        borderColor: result.status === "fake" ? "#ff4d4f" : "#52c41a",
                        backgroundColor: result.status === "fake" ? "#fff1f0" : "#f6ffed",
                    }}
                >
                    <p style={styles.resultText}>
                        <strong>Result: </strong>
                        <span
                            style={{
                                color: result.status === "fake" ? "#ff4d4f" : "#52c41a",
                                fontWeight: "bold",
                                textTransform: "capitalize",
                            }}
                        >
                            {result.status}
                        </span>
                    </p>
                    <p style={styles.reasonText}>
                        <strong>Reason: </strong> {result.reason}
                    </p>
                    <button
                        style={styles.clearButton}
                        onClick={() => setResult(null)}
                    >
                        Clear Result
                    </button>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        position: "relative",
        maxWidth: 600,
        margin: "50px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 8,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#fff",
    },
    closeButton: {
        position: "absolute",
        top: 15,
        right: 15,
        fontSize: 24,
        fontWeight: "bold",
        color: "#6f63ff",
        cursor: "pointer",
        userSelect: "none",
        width: 30,
        height: 30,
        lineHeight: "30px",
        textAlign: "center",
        borderRadius: "50%",
        border: "2px solid #6f63ff",
        transition: "background-color 0.3s ease, color 0.3s ease",
    },
    heading: {
        color: "#6f63ff",
        marginBottom: 20,
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
    },
    fileInput: {
        width: "100%",
        padding: 10,
        fontSize: 16,
        borderRadius: 6,
        border: "1px solid #ccc",
        cursor: "pointer",
    },
    button: {
        backgroundColor: "#6f63ff",
        color: "white",
        padding: "12px 20px",
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        fontSize: 16,
        fontWeight: "bold",
        width: "150px",
        transition: "background-color 0.3s ease",
    },
    buttonDisabled: {
        backgroundColor: "#a9a4ff",
        cursor: "not-allowed",
    },
    message: {
        marginTop: 20,
        fontSize: 16,
    },
    resultBox: {
        marginTop: 25,
        padding: 15,
        borderRadius: 6,
        border: "2px solid",
        textAlign: "left",
    },
    resultText: {
        fontSize: 18,
        marginBottom: 10,
    },
    reasonText: {
        fontSize: 16,
        color: "#555",
    },
    clearButton: {
        marginTop: 12,
        padding: "6px 12px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: 4,
        cursor: "pointer",
        fontSize: 14,
    },
};
