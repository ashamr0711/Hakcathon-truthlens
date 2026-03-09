import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TextUpload from "./pages/TextUpload";
import ImageUpload from "./pages/ImageUpload";
import VideoUpload from "./pages/VideoUpload";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/text-upload" element={<TextUpload />} />
                <Route path="/image-upload" element={<ImageUpload />} />
                <Route path="/video-upload" element={<VideoUpload />} />
            </Routes>
            <ToastContainer position="top-right" autoClose={2000} />
        </Router>
    );
}

export default App;
