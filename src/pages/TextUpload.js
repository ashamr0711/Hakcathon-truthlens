export default function TextUpload() {
    return (
        <div className="p-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Text Deepfake Detection</h2>
            <textarea
                className="w-full max-w-lg border p-3 rounded"
                rows="6"
                placeholder="Paste text to analyze..."
            ></textarea>
            <br />
            <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded hover:bg-blue-700">
                Detect
            </button>
        </div>
    );
}
