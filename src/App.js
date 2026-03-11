import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./AuthContext";  // <-- import the provider

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TextUpload from "./pages/TextUpload";
import ImageUpload from "./pages/ImageUpload";
import VideoUpload from "./pages/VideoUpload";
import About from "./pages/About";
import "./App.css";

function App() {
    return (
        <AuthProvider> {/* Wrap everything with AuthProvider */}
            <Router>
                <Navbar />
                <div className="main-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/text-upload" element={<TextUpload />} />
                        <Route path="/image-upload" element={<ImageUpload />} />
                        <Route path="/video-upload" element={<VideoUpload />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
