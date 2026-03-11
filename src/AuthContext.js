import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const register = (userInfo) => setIsRegistered(true);
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
