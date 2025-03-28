import React, { useState } from "react";
import axios from "axios";

const VideoUpload = ({ onResults }) => {
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setVideo(event.target.files[0]);
    setError(null);
  };

  const handleUpload = async () => {
    if (!video) {
      setError("Please select a video file.");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);

    setUploading(true);
    setError(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onResults(response.data); // Send results to parent component
    } catch (err) {
      setError("Failed to upload video. Please try again.");
      console.error("Upload Error:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <input type="file" accept="video/*" onChange={handleFileChange} className="mb-4" />
      
      {error && <p className="text-red-500">{error}</p>}
      
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {uploading ? "Uploading..." : "Upload Video"}
      </button>
    </div>
  );
};

export default VideoUpload;
