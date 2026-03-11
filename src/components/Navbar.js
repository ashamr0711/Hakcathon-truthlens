import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
    const { isRegistered, isLoggedIn, user, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getInitial = () => {
        if (user?.name) return user.name.charAt(0).toUpperCase();
        if (user?.email) return user.email.charAt(0).toUpperCase();
        return "?";
    };

    const handleLogout = () => {
        logout();
        setDropdownOpen(false);
        navigate("/login");
    };

    const goToDashboard = () => {
        navigate("/dashboard");
        setDropdownOpen(false);
    };

    return (
        <nav style={navStyle}>
            <Link to="/" style={logoStyle}>
                🔍 TruthLens
            </Link>

            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <Link to="/" style={navLinkStyle}>
                    Home
                </Link>
                <Link to="/about" style={navLinkStyle}>
                    About
                </Link>

                {!isRegistered && !isLoggedIn && (
                    <Link to="/register" style={navLinkStyle}>
                        Register
                    </Link>
                )}

                {isRegistered && !isLoggedIn && (
                    <Link to="/login" style={navLinkStyle}>
                        Login
                    </Link>
                )}

                {isLoggedIn && (
                    <div
                        style={{ position: "relative", display: "flex", alignItems: "center", gap: "4px" }}
                        ref={dropdownRef}
                    >
                        <div
                            onClick={goToDashboard}
                            style={initialCircleStyle}
                            title="Go to Dashboard"
                        >
                            {getInitial()}
                        </div>

                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            style={dropdownToggleBtnStyle}
                            aria-label="Toggle profile dropdown"
                        >
                            ▼
                        </button>

                        {dropdownOpen && (
                            <div style={dropdownStyle}>
                                <div style={{ fontWeight: "normal", marginBottom: "6px" }}>
                                    Hello, {user?.name || "User"}
                                </div>
                                <button onClick={handleLogout} style={logoutBtnStyle}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

// Styles remain the same
const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#6f63ff",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
};

const logoStyle = {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
};

const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
};

const initialCircleStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "white",
    color: "#6f63ff",
    fontWeight: "bold",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
};

const dropdownToggleBtnStyle = {
    background: "none",
    border: "none",
    color: "white",
    fontWeight: "semibold",
    fontSize: "0.5rem",
    cursor: "pointer",
    padding: 0,
    userSelect: "none",
};

const dropdownStyle = {
    position: "absolute",
    top: "40px",
    right: "10px",
    backgroundColor: "white",
    color: "#333",
    padding: "0.5rem 0.5rem",
    borderRadius: "3px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    minWidth: "100px",
    zIndex: 10,
};

const logoutBtnStyle = {
    background: "none",
    border: "none",
    color: "red",
    cursor: "pointer",
    fontWeight: "bold",
    width: "30%",
    left:"20px",
    fontstyle:"center align",
};

export default Navbar;
