import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";  // import your auth context

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // get login method from context

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password,
            });

            if (response.data.success) {
                // Save JWT token
                localStorage.setItem("token", response.data.token);

                // Update global auth state with user info if available
                login(response.data.user || { email });

                // Redirect to dashboard
                navigate("/dashboard");
            } else {
                setError(response.data.message || "Login failed");
                setLoading(false);
            }
        } catch (err) {
            setError("Invalid credentials or server error");
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box" style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
                <h2 style={{ textAlign: "center", color: "#6f63ff" }}>Login to TruthLens</h2>
                <form onSubmit={handleLogin}>
                    {/* your form inputs remain unchanged */}
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
                        <p className="error-text" style={{ color: "red", marginBottom: 10 }}>
                            {error}
                        </p>
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
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Registration redirect */}
                <p
                    style={{
                        marginTop: "1.5rem",
                        textAlign: "center",
                        color: "#555",
                        fontSize: "1rem",
                    }}
                >
                    Don't have an account?{" "}
                    <button
                        onClick={() => navigate("/register")}
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
                        Register here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
