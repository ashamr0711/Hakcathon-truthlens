import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="pt-24 flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-100">
            <motion.h1
                className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Detect Deepfakes with AI
            </motion.h1>

            <motion.p
                className="max-w-2xl text-lg text-gray-600 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                TruthLens empowers you to uncover manipulated media in text, images, and videos
                using state-of-the-art AI detection models.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <Link to="/login" className="btn-primary text-lg">
                    Get Started
                </Link>
            </motion.div>
        </div>
    );
}
