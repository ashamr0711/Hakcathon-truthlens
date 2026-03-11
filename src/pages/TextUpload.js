import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TextDetection = () => {
    const [textInput, setTextInput] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleTextDetect = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setResult(null);

        try {
            // ✅ Correct endpoint for your backend
            const response = await axios.post("http://127.0.0.1:7000/detect/text", { text: textInput });

            console.log("API response:", response.data);

            // ✅ Handle both AI detection & fact-checking result
            const ai = response.data.ai_detection || {};
            const fact = response.data.fact_check || {};

            const combinedStatus =
                ai.result === "fake" || fact.result === "fake"
                    ? "fake"
                    : ai.result === "real" && fact.result === "real"
                        ? "real"
                        : "uncertain";

            const reason = [
                ai.reason && `🧠 Text model: ${ai.reason}`,
                fact.reason && `📰 Fact-check model: ${fact.reason}`,
            ].filter(Boolean);

            setResult({
                status: combinedStatus,
                reason,
            });
        } catch (err) {
            console.error("Error detecting text:", err);
            setError("⚠️ Error detecting text. Please check backend connection.");
        } finally {
            setLoading(false);
        }
    };

    const goToDashboard = () => navigate("/dashboard");

    const handleClearResult = () => {
        setResult(null);
        setTextInput("");
        setError("");
    };

    return (
        <div style={styles.container}>
            <div
                style={styles.closeButton}
                onClick={goToDashboard}
                title="Back to Dashboard"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") goToDashboard();
                }}
            >
                &times;
            </div>

            <h2 style={styles.heading}>🧠 AI News & Deepfake Text Detection</h2>

            <form onSubmit={handleTextDetect} style={styles.form}>
                <textarea
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Paste news or article text here..."
                    rows={6}
                    cols={50}
                    required
                    style={styles.textarea}
                />
                <button type="submit" disabled={loading} style={styles.button}>
                    {loading ? "Analyzing..." : "Detect Text"}
                </button>
            </form>

            {error && <p style={{ ...styles.message, color: "red" }}>{error}</p>}

            {result && (
                <div
                    style={{
                        ...styles.resultBox,
                        borderColor:
                            result.status === "fake"
                                ? "#ff4d4f"
                                : result.status === "real"
                                    ? "#52c41a"
                                    : "#faad14",
                        backgroundColor:
                            result.status === "fake"
                                ? "#fff1f0"
                                : result.status === "real"
                                    ? "#f6ffed"
                                    : "#fffbe6",
                    }}
                >
                    <p style={styles.resultText}>
                        <strong>Result: </strong>
                        <span
                            style={{
                                color:
                                    result.status === "fake"
                                        ? "#ff4d4f"
                                        : result.status === "real"
                                            ? "#52c41a"
                                            : "#faad14",
                                fontWeight: "bold",
                                textTransform: "capitalize",
                            }}
                        >
                            {result.status}
                        </span>
                    </p>

                    <div style={styles.reasonText}>
                        <strong>Reason:</strong>
                        <ul>
                            {result.reason.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    </div>

                    <button style={styles.clearButton} onClick={handleClearResult}>
                        Clear Result
                    </button>
                </div>
            )}
        </div>
    );
};

// 💅 Same styles
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
    textarea: {
        width: "100%",
        padding: 12,
        fontSize: 16,
        borderRadius: 6,
        border: "1px solid #ccc",
        resize: "vertical",
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
        marginBottom: 10,
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

export default TextDetection;
