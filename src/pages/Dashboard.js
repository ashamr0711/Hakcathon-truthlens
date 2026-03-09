import { motion } from "framer-motion";

export default function Dashboard() {
    return (
        <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold mb-8">Choose Detection Type</h2>
            <div className="flex justify-center gap-6">
                <a href="/text-upload" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Text Upload</a>
                <a href="/image-upload" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Image Upload</a>
                <a href="/video-upload" className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600">Video Upload</a>
            </div>
        </motion.div>
    );
}
