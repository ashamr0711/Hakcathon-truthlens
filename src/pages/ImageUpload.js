export default function VideoUpload() {
    return (
        <div className="p-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Video Deepfake Detection</h2>
            <input type="file" accept="video/*" className="block mx-auto mb-4" />
            <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
                Detect
            </button>
        </div>
    );
}
