// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import VideoUpload from '../components/upload/VideoUpload';
// import DeepfakeResults from '../components/results/DeepfakeResults';
// import LoadingSpinner from '../components/common/LoadingSpinner';

// const Upload = () => {
//   const [results, setResults] = useState(null);
//   const { isLoading, error } = useSelector((state) => state.app);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-3xl font-bold mb-6 dark:text-white">Video Deepfake Detection</h1>
        
//         <VideoUpload onResults={setResults} />
        
//         {isLoading && <LoadingSpinner />}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {results && <DeepfakeResults results={results} />}
//       </div>
//     </div>
//   );
// };

// export default Upload;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoUpload from "../components/upload/VideoUpload";
import DeepfakeResults from "../components/results/DeepfakeResults";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Upload = () => {
  const [results, setResults] = useState(null);
  const { isLoading, error } = useSelector((state) => state.app);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">
          Video Deepfake Detection
        </h1>

        {/* Ensure onResults function is properly passed */}
        <VideoUpload onResults={setResults} />

        {isLoading && <LoadingSpinner />}
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        {/* Ensure results are displayed only when available */}
        <div className="mt-5">
          {results && <DeepfakeResults results={results} />}

        </div>
      </div>
    </div>
  );
};

export default Upload;
