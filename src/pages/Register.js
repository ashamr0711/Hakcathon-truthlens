import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";  // your auth context
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("http://localhost:5000/api/register", {
                firstName,
                lastName,
                email,
                password,
            });

            if (response.data.success) {
                register();  // update global state
                setSuccess("Registration successful! Redirecting to login...");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                setError(response.data.message || "Registration failed");
            }
        } catch (err) {
            setError("Server error or invalid data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">
            <div
                className="register-box"
                style={{ maxWidth: 400, margin: "auto", padding: 20 }}
            >
                <h2 style={{ textAlign: "center", color: "#6f63ff" }}>
                    Register for TruthLens
                </h2>
                <form onSubmit={handleRegister}>
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "8px 0 16px",
                            borderRadius: 6,
                            border: "1px solid #ccc",
                            fontSize: "1rem",
                        }}
                    />

                    <label>Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "8px 0 16px",
                            borderRadius: 6,
                            border: "1px solid #ccc",
                            fontSize: "1rem",
                        }}
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "8px 0 16px",
                            borderRadius: 6,
                            border: "1px solid #ccc",
                            fontSize: "1rem",
                        }}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "8px 0 16px",
                            borderRadius: 6,
                            border: "1px solid #ccc",
                            fontSize: "1rem",
                        }}
                    />

                    {error && (
                        <p style={{ color: "red", marginBottom: 10 }}>{error}</p>
                    )}
                    {success && (
                        <p style={{ color: "green", marginBottom: 10 }}>{success}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            backgroundColor: "#6f63ff",
                            color: "white",
                            padding: "12px",
                            fontSize: "1.1rem",
                            borderRadius: 8,
                            border: "none",
                            cursor: loading ? "not-allowed" : "pointer",
                        }}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                <p
                    style={{
                        marginTop: "1.5rem",
                        textAlign: "center",
                        color: "#555",
                        fontSize: "1rem",
                    }}
                >
                    Already have an account?{" "}
                    <button
                        onClick={() => navigate("/login")}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#6f63ff",
                            textDecoration: "underline",
                            cursor: "pointer",
                            padding: 0,
                            fontWeight: "bold",
                        }}
                    >
                        Login here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
