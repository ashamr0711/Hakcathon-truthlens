// AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // Store user info like name, avatar etc

    const register = (userInfo) => {
        setIsRegistered(true);
        // save user info if needed
    };

    const login = (userInfo) => {
        setIsLoggedIn(true);
        setUser(userInfo);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setIsRegistered(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isRegistered, isLoggedIn, user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
