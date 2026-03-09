export default function About() {
    return (
        <div className="px-8 py-16 text-center bg-white min-h-screen">
            <h2 className="text-4xl font-bold text-blue-700 mb-6">About TruthLens</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                TruthLens is a next-generation deepfake detection platform designed to
                help individuals and organizations verify the authenticity of media
                content. Using state-of-the-art AI models, TruthLens can analyze text,
                images, and videos to identify manipulated or artificially generated
                content.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="p-6 bg-blue-50 rounded-xl shadow">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        🔍 Text Analysis
                    </h3>
                    <p className="text-gray-600">
                        Detect AI-generated or manipulated text with linguistic and
                        semantic-based detection models.
                    </p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl shadow">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">
                        🖼️ Image Verification
                    </h3>
                    <p className="text-gray-600">
                        Upload any image to detect possible deepfake manipulations using
                        pixel and metadata analysis.
                    </p>
                </div>

                <div className="p-6 bg-purple-50 rounded-xl shadow">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">
                        🎥 Video Detection
                    </h3>
                    <p className="text-gray-600">
                        Analyze videos for frame-level inconsistencies and AI-synthesized
                        patterns.
                    </p>
                </div>
            </div>
        </div>
    );
}
